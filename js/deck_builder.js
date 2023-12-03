
const TSW = {};

TSW.DescriptionStyles = { "u": "subtype", "s": "state", "d": "damage", "r": "resource", "t": "time", "b": "buff", "h": "heal", "c": "chain" };
TSW.Colors = ["black", "red", "brown", "green", "teal", "blue", "purple"];
TSW.Separators = ["React", "Apply"];
TSW.Radio = ["state", "subtype", "trigger", "support"];
TSW.MiscNames = ["Builder", "Consumer", "Single Target", "AoE", "Elites", "Movement", "Cooldown"];
TSW.States = ["Afflict", "Hinder", "Impair", "Weaken"];
TSW.Subtypes = ["Strike", "Blast", "Chain", "Focus", "Frenzy", "Burst"];
TSW.Triggers = ["Critical", "Penetrate", "Hit", "Resource", "Defense", "Evade", "Block", "Anima Deviation"];
TSW.Support = ["Heal", "HoT", "Barrier", "Purge", "Cleanse", "Leech", "Damage", "Hate", "Movement", "Vulnerable"];
TSW.Modifiers = [TSW.States, TSW.Subtypes, TSW.Triggers, TSW.Support];
TSW.ModifierTypes = ["State", "Subtype", "Triggers", "Support"];

TSW.AbilityMap = new Map();
TSW.SelectedAbilities = Array(2);
TSW.SelectedWeapons = Array(2).fill(0);

const recursiveFindIndex = (arr, value) => {
    let subIndex;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            subIndex = recursiveFindIndex(arr[i], value);
            if (subIndex !== -1) return [i].concat(subIndex);
        } else if (arr[i] == value) return [i];
    }
    return -1;
};

function isEmpty(arr) {
    for (a in arr) {
        if (arr[a].length > 0) return false;
    }
    return true;
}

function uiName(str) {
    return str.replace(/ /g, "_").replace(/\'/g, "").toLowerCase();
}

function processModifier(obj, str, index, key, a) {
    var mods = str.split(",");
    for (let m in mods) {
        let i = recursiveFindIndex(TSW.Modifiers, mods[m]);
        if (i == -1) {
            console.log("missing: " + str)
            return false;
            }
        if(obj) obj.modifiers[i[0]][i[1]][index].push(key);
        if (a) {
            if (!a.modifiers) a.modifiers = [];
            a.modifiers.push([i, index]);
        }
    }
}

function createModifiers(obj) {
    obj.modifiers = new Array(TSW.Modifiers.length);
    for (let i = 0; i < TSW.Modifiers.length; i++) {
        obj.modifiers[i] = new Array(TSW.Modifiers[i].length);
        for (let j = 0; j < obj.modifiers[i].length; j++) {
            obj.modifiers[i][j] = new Array(TSW.Separators.length);
            obj.modifiers[i][j][0] = [];
            obj.modifiers[i][j][1] = [];
        }
    }
}

function createMisc(obj) {
    obj.misc = new Array(TSW.MiscNames.length);
    for (let i = 0; i < TSW.MiscNames.length; i++) {
        obj.misc[i] = [];
    }
}

function abilityDiv(ability) {
    let str = "<div class=\"ability\" ability_div=\"" + ability.ui_name + "\" gid=\"" + ability.gid + "\" ";
    for (let i = 0; i < ability.synergies.length; i++) {
        let r = (ability.synergies[i][1] == 0 ? 1 : 0);
        str += ability.synergies[i][0] + "=\"" + r + "\" ";
    }
    str += "draggable=\"true\" onDragStart=\"abilityDragStart(event)\" onDragEnd=\"abilityDragEnd(event)\" ";
    str += "onClick=\"abilityClick(" + ability.gid + ")\">";
    str += "<img title=\"" + ability.name + "\" alt=\"" + ability.name + "\" class=\"icon " + TSW.Colors[ability.background];
    if (ability.elite) str += " elite";
    str += " glossy\" src=\"" + ability.src + "\">";
    str += "<div class=\"name\">" + ability.name;
    if (ability.elite) {
        str += "<span style=\"font-style:italic;\"> (Elite)</span>";
    }
    str += "</div>";
    str += "<div class=\"cost\">" + ability.cost + " AP</div>";

    if (ability.active == true) {
        if (ability.cast == undefined) {
            ability.cast = "Instant";
        } else {
            ability.cast += "s";
        }
        str += "<div class=\"cast\">" + ability.cast + "</div>";

        if (ability.cooldown == undefined) {
            ability.cooldown = "Instant";
        } else {
            ability.cooldown += "s";
        }
        str += "<div class=\"cooldown\">" + ability.cooldown + "</div>";
    } else {
        str += "<div class=\"type\">" + ability.type + "</div>";

    }
    for (let i in TSW.DescriptionStyles) {
        let s = TSW.DescriptionStyles[i];
        ability.description = ability.description.replace(new RegExp('\\$' + i + '([^ ,:]+)', 'g'), '<span class="ability_' + s + '">$1</span>');
    }
    str += "<div class=\"description\">" + ability.description + "</div>";
    str += "<div class=\"path\">" + ability.path + "</div>";
    str += "</div>";
    return str;
}

function TSWImgSrc(w, c, a) {
    return "images/" + w + "/" + c + "/" + a + ".svg";
}

function weaponToolTip(i) {
    let str = "";
    str += "<div id=\"wt_name\" class=\"weapon_tooltip\">" + TSW.Wheel[i].name + "</div>";
    str += "<table id=\"wt_table\"><tr><td class=\"wt_heading\" colspan=\"2\">Subtypes</td></tr>";
    str += "<tr><td colspan=\"2\">" + TSW.Wheel[i].Subtypes + "</td></tr>";
    str += "<tr><td class=\"wt_heading\" colspan=\"2\">States</td></tr>";
    str += weaponTTRows(TSW.Wheel[i].States);
    str += "<tr><td class=\"wt_heading\" colspan=\"2\">Triggers</td></tr>";
    str += weaponTTRows(TSW.Wheel[i].Triggers);
    str += "<tr><td class=\"wt_heading\" colspan=\"2\">Support</td></tr>";
    str += weaponTTRows(TSW.Wheel[i].Support);
    str += "</table>";
    return str;
}

function weaponTTRows(o) {
    let str = "";
    if (o.Strong != "") str += "<tr><td class=\"wt_strong\">Strong</td><td>" + o.Strong + "</td></tr>";
    if (o.Average != "") str += "<tr><td class=\"wt_average\">Average</td><td>" + o.Average + "</td></tr>";
    if (o.Weak != "") str += "<tr><td class=\"wt_weak\">Weak</td><td>" + o.Weak + "</td></tr>";
    return str;
}

function AccHeader(a, b) {
    let str = "<div class=\"acc_wrapper hidden\">";
    str += "<div class=\"acc_header\" onClick=\"accordionClick(this)\"><img alt=\"Expander\" src=\"images/triangle_gray.svg\" class=\"acc_triangle\"/>" + a + "</div>";
    str += "<div class=\"acc_content " + b + "\">";
    return str;
}

function AccSeparator(a) {
    return "<div class=\"acc_content_separator\">" + a +"</div>";
}
function AccFooter() {
    return "</div></div>";
}

function radioButton(weapon, id, text, checked) {
    var str = "<input type=\"radio\" id=\"" + weapon + "_radio_" + id + "\" name=\"" + weapon + "_radio\" weapon=\"" + weapon + "\" class=\"radio_hidden\"";
    if (checked == true) str += " checked =\"checked\"";
    str += " onchange=\"radioChange(" + weapon + "," + id + ", this)\"><label for=\"" + weapon + "_radio_" + id + "\"><span class>" + text + "</span></label>";
    return str;
}

function exportButton(label, idx, checked) {
    var str = "<input type=\"radio\" id=\"" + label + "_radio\" name=\"export_radio\" class=\"radio_hidden\"";
    if (checked == true) str += " checked =\"checked\"";
    str += " onchange=\"exportChange(" + idx + ", this)\"><label for=\"" + label + "_radio\"><span class=\"dialog_radio\">" + label + "</span></label>";
    return str;
}

function barButton(bar, idx) {
    var str = "<img alt=\"Empty Slot\" title=\"Empty Slot\" id=\"icon_" + bar + "_" + idx + "\" bar=\"" + bar + "\" idx=\"" + idx + "\" class=\"icon empty";
    if (idx == 7) str += " auxillary";
    str += "\" src=\"images/1x1.png\" onClick=\"barClick(this)\"";
    if (idx != 7) {
        str += " draggable=\"true\" onDragStart=\"barDragStart(event)\" onDragEnd=\"barDragEnd(event)\"";
    } else {
        str += " draggable=\"false\"";
    }
//    str += " onMouseOver =\"barOver(this)\" onMouseOut=\"barOut(this)\""
    str += "/>";
    return str;
}