TSW.Wheel = [
    {
        "name": "Other",
        "id": "0",
        "weapons": [],
        "cells": [],
        "elites": [],
        "accordions": [],
    },
    {
        "name": "Blade",
        "id": "1",
        "type": "Melee",
        "cells": [],
        "accordions": [],
        "Subtypes": "Focus, Frenzy",
        "States": {
            "Strong": "Afflict",
            "Average": "Impair",
            "Weak": ""
        },
        "Triggers": {
            "Strong": "Penetrate, Defense",
            "Average": "",
            "Weak": ""
        },
        "Support": {
            "Strong": "+% Damage",
            "Average": "Hate, Vulnerable",
            "Weak": "Heal, HoT"
        },
    },
    {
        "name": "Hammer",
        "id": "2",
        "type": "Melee",
        "cells": [],
        "accordions": [],
        "Subtypes": "Strike, Blast",
        "States": {
            "Strong": "Impair",
            "Average": "Weaken",
            "Weak": ""
        },
        "Triggers": {
            "Strong": "Block",
            "Average": "Critical",
            "Weak": ""
        },
        "Support": {
            "Strong": "+% Damage",
            "Average": "Hate, Vulnerable",
            "Weak": "Heal"
        },
    },
    {
        "name": "Fist",
        "id": "3",
        "type": "Melee",
        "cells": [],
        "accordions": [],
        "Subtypes": "Blast, Burst",
        "States": {
            "Strong": "Impair",
            "Average": "",
            "Weak": "Afflict"
        },
        "Triggers": {
            "Strong": "",
            "Average": "Anima Deviation",
            "Weak": "Hit, Evade"
        },
        "Support": {
            "Strong": "Heal, HoT, +% Damage",
            "Average": "Vulnerable",
            "Weak": ""
        },
    },
    {
        "name": "Blood",
        "id": "4",
        "type": "Magic",
        "cells": [],
        "accordions": [],
        "Subtypes": "Chain, Focus",
        "States": {
            "Strong": "Afflict",
            "Average": "Impair",
            "Weak": ""
        },
        "Triggers": {
            "Strong": "Penetrate",
            "Average": "",
            "Weak": "Anima Deviation"
        },
        "Support": {
            "Strong": "Barrier",
            "Average": "Heal, Vulnerable",
            "Weak": "Cleanse, +% Damage"
        },
    },
    {
        "name": "Chaos",
        "id": "5",
        "type": "Magic",
        "cells": [],
        "accordions": [],
        "Subtypes": "Frenzy, Burst",
        "States": {
            "Strong": "Weaken, Impair",
            "Average": "",
            "Weak": ""
        },
        "Triggers": {
            "Strong": "Hit, Evade",
            "Average": "",
            "Weak": "Anima Deviation"
        },
        "Support": {
            "Strong": "",
            "Average": "+% Damage, Hate, Vulnerable",
            "Weak": ""
        },
    },
    {
        "name": "Elemental",
        "id": "6",
        "type": "Magic",
        "cells": [],
        "accordions": [],
        "Subtypes": "Strike, Chain",
        "States": {
            "Strong": "Hinder",
            "Average": "Afflict",
            "Weak": ""
        },
        "Triggers": {
            "Strong": "Critical, Anima Deviation",
            "Average": "",
            "Weak": ""
        },
        "Support": {
            "Strong": "Purge",
            "Average": "+% Damage, Vulnerable",
            "Weak": "Cleanse"
        },
    },
    {
        "name": "Shotgun",
        "id": "7",
        "type": "Ranged",
        "cells": [],
        "accordions": [],
        "Subtypes": "Strike, Blast",
        "States": {
            "Strong": "Hinder",
            "Average": "Weaken",
            "Weak": ""
        },
        "Triggers": {
            "Strong": "Penetrate",
            "Average": "Anima Deviation",
            "Weak": ""
        },
        "Support": {
            "Strong": "",
            "Average": "Cleanse, Vulnerable",
            "Weak": "Purge, +% Damage"
        },
    },
    {
        "name": "Pistols",
        "id": "8",
        "type": "Ranged",
        "cells": [],
        "accordions": [],
        "Subtypes": "Chain, Focus",
        "States": {
            "Strong": "",
            "Average": "Weaken, Hinder",
            "Weak": ""
        },
        "Triggers": {
            "Strong": "Critical",
            "Average": "",
            "Weak": "Anima Deviation"
        },
        "Support": {
            "Strong": "",
            "Average": "Cleanse",
            "Weak": "Heal, +% Damage, Vulnerable"
        },
    },
    {
        "name": "Assault Rifle",
        "id": "9",
        "type": "Ranged",
        "cells": [],
        "accordions": [],
        "Subtypes": "Frenzy, Burst",
        "States": {
            "Strong": "",
            "Average": "Afflict, Hinder",
            "Weak": ""
        },
        "Triggers": {
            "Strong": "Hit",
            "Average": "Anima Deviation",
            "Weak": ""
        },
        "Support": {
            "Strong": "Heal, Leech",
            "Average": "Cleanse",
            "Weak": "+% Damage, Vulnerable"
        },
    },
];


function buildWeaponPicker() {
    var base = document.getElementById("weapon_div");
    var str = "";
    for (var i = 1; i < TSW.Wheel.length; i++) {
        TSW.Wheel[i].ToolTip = weaponToolTip(i);
        var u = TSW.Wheel[i].ui_name;
        var n = TSW.Wheel[i].name;
        switch (TSW.Wheel[i].type) {
            case "Magic":
                bg = "blue";
                break;
            case "Ranged":
                bg = "red";
                break;
            case "Melee":
                bg = "brown";
                break;
        }
        str += "<img alt=\"" + n + "\" title=\"" + n + "\" id=\"wIcon_" + i + "\" class=\"icon glossy " + bg + "\" onClick=\"clickWeapon(" + i + ")\"";
        str += "onmouseover=\"weaponOver(" + i + ", this)\" onmouseout=\"weaponOut()\" src =\"images/" + u + "/" + u + ".svg\"/>";
    }
    base.innerHTML = str;
}

function buildRadioSets() {
    var str = "<span class=\"radio_label\">Bridges:</span>";
    str += radioButton(0, 0, "States", true);
    str += radioButton(0, 1, "Subtypes", false);
    str += radioButton(0, 2, "Triggers", false);
    str += radioButton(0, 3, "Support", false);
    str += radioButton(0, 4, "Weapons", false);
    str += radioButton(0, 5, "Aux", false);
    str += radioButton(0, 6, "Misc", false);
    document.getElementById("radio_div_w2").innerHTML = str;
    document.getElementById("accordion_w2").innerHTML = TSW.Wheel[0].accordions[0];

    for (var i = 1; i < 10; i++) {
        str = "<div class=\"radio_label\">" + TSW.Wheel[i].name + ":</div>";
        str += radioButton(i, 0, "Cells", true);
        str += radioButton(i, 1, "States", false);
        str += radioButton(i, 2, "Subtypes", false);
        str += radioButton(i, 3, "Triggers", false);
        str += radioButton(i, 4, "Support", false);
        str += radioButton(i, 5, "Misc", false);
        TSW.Wheel[i].radio = str;
    }
}

function buildWeaponWheel() {
    var str = "";
    var div = "";
    createModifiers(TSW.Wheel[0]);
    for (let i = 0; i < TSW.Wheel.length; i++) {
        let w = TSW.Wheel[i];
        str = "";
        w.ui_name = uiName(w.name);
        createModifiers(TSW.Wheel[i]);
        TSW.Wheel[0].weapons[i] = Array(w.cells.length);
        createMisc(w);
        for (let j in w.cells) {
            let c = w.cells[j];
            let total_cost = 0;
            TSW.Wheel[0].weapons[i][j] = [];
            if(c.ui_name == undefined) c.ui_name = uiName(c.name);
            str += AccHeader(c.name, "cell");
            for (let k in c.abilities) {
                let a = c.abilities[k];
                total_cost += a.cost;
                a.total_cost = total_cost;
                a.weapon = i;
                a.cell = j;
                a.index = k;
                a.tier = c.tier;
                if (i == 0) {
                    if (j < 5) {
                        a.path = "Auxillary >> " + c.name;
                    } else {
                        a.path = "Green >> " + c.ui_name;
                    }
                } else {
                    a.ui_name = uiName(a.name);
                    a.path = w.name + " >> " + c.name;
                }

                // check for these before we change anything for display purposes
                if (a.react != undefined) {
                    processModifier(i > 0 ? w : null, a.react, 0, a.gid, a);
                    if (a.bridge) processModifier(TSW.Wheel[0], a.react, 0, a.gid);
                }
                if (a.apply != undefined) {
                    processModifier(i > 0 ? w : null, a.apply, 1, a.gid, a);
                    if (a.bridge) processModifier(TSW.Wheel[0], a.apply, 1, a.gid);
                }
                a.synergies = [];
                for (let m in a.modifiers) {
                    let mo = a.modifiers[m][0];
                    if (mo[0] == 2 && mo[1] == 3) continue;
                    if (mo[0] == 2 && mo[1] == 7) continue;
                    if (mo[0] == 3 && mo[1] == 8) continue;
                    a.synergies.push([TSW.Modifiers[mo[0]][mo[1]], a.modifiers[m][1]]);
                }
                if (a.bridge && i > 0) TSW.Wheel[0].weapons[i][j].push(a.gid);
                if (a.build != undefined) w.misc[0].push(a.gid);
                if (a.consume != undefined) w.misc[1].push(a.gid);
                switch (a.target) {
                    case undefined:
                    case "Group":
                        break;
                    case "Single":
                        w.misc[2].push(a.gid);
                        break;
                    case "Single,AoE":
                        w.misc[2].push(a.gid);
                        // All kinds of AoE
                    default:
                        w.misc[3].push(a.gid);
                }
                if (a.elite) {
                    w.misc[4].push(a.gid);
                    if (a.bridge) TSW.Wheel[0].elites.push(a.gid);
                }
                // we've already checked for this in support
                if (recursiveFindIndex(w.modifiers[3][8], a.gid) != -1) {
                    w.misc[5].push(a.gid);
                }
                if (a.cooldown != undefined) w.misc[6].push(a.gid);
                a.src = TSWImgSrc(w.ui_name, c.ui_name.toLowerCase(), a.iid)
                div = abilityDiv(a);
                TSW.AbilityMap.set(a.gid, [ a, div ]);
                str += div;
            }
            str += AccFooter();
            c.ui_name = uiName(c.ui_name);
        }
        if(i > 0) w.accordions.push(str);
        str = "";
        for (let idx in w.modifiers) {
            let str = "";
            for (let jdx in w.modifiers[idx]) {
                if (isEmpty(w.modifiers[idx][jdx])) continue;
                str += AccHeader(TSW.Modifiers[idx][jdx], TSW.Radio[idx]);
                for (let kdx in TSW.Separators) {
                    if (w.modifiers[idx][jdx][kdx].length > 0) {
                        str += AccSeparator(TSW.Separators[kdx]);
                        for (let ldx in w.modifiers[idx][jdx][kdx].sort(sortPath)) {
                            str += TSW.AbilityMap.get(w.modifiers[idx][jdx][kdx][ldx])[1];
                        }
                    }
                }
                str += AccFooter();
            }
            if(i > 0) w.accordions.push(str);
        }
        str = "";
        for (let idx in w.misc) {
            if (w.misc[idx].length == 0) continue;
            str += AccHeader(TSW.MiscNames[idx], "misc");
            for (let jdx in w.misc[idx].sort(sortPath)) {
                str += TSW.AbilityMap.get(w.misc[idx][jdx])[1];
            }
            str += AccFooter();
        }
        if (i > 0) w.accordions.push(str);
    }
}

function sortPath(a, b) {
    let aa = TSW.AbilityMap.get(a)[0];
    let ba = TSW.AbilityMap.get(b)[0];

    let ap = aa.path;
    let bp = ba.path;
    let ret = ap.localeCompare(bp);
    if (ret != 0) return ret;
    return aa.name.localeCompare(ba.name);
}

function buildBridgeWheel() {
    str = "";
    for (let idx in TSW.Wheel[0].modifiers) {
        let str = "";
        for (let jdx in TSW.Wheel[0].modifiers[idx]) {
            if (isEmpty(TSW.Wheel[0].modifiers[idx][jdx])) continue;
            str += AccHeader(TSW.Modifiers[idx][jdx], TSW.Radio[idx]);
            for (let kdx in TSW.Separators) {
                if (TSW.Wheel[0].modifiers[idx][jdx][kdx].length > 0) {
                    str += AccSeparator(TSW.Separators[kdx]);
                    for (let ldx in TSW.Wheel[0].modifiers[idx][jdx][kdx].sort(sortPath) ) {
                        str += TSW.AbilityMap.get(TSW.Wheel[0].modifiers[idx][jdx][kdx][ldx])[1];
                    }
                }
            }
            str += AccFooter();
        }
        TSW.Wheel[0].accordions.push(str);
    }
    str = "";
    for (let idx in TSW.Wheel[0].weapons) {
        let w = TSW.Wheel[0].weapons[idx];
        if (isEmpty(w)) continue;
        str += AccHeader(TSW.Wheel[idx].name, "weapon");
        for (let jdx in w) {
            c = TSW.Wheel[0].weapons[idx][jdx];
            if (c.length == 0) continue;
            str += AccSeparator(TSW.Wheel[idx].cells[jdx].name);
            for (let kdx in c) {
                str += TSW.AbilityMap.get(c[kdx])[1];
            }
        }
        str += AccFooter();
    }
    TSW.Wheel[0].accordions.push(str);

    str = "";
    for (let idx = 0; idx < TSW.Wheel[0].cells.length; idx++) {
        let cell = TSW.Wheel[0].cells[idx];
        // break between aux and misc
        if (idx == 5) {
            str += AccFooter();
            TSW.Wheel[0].accordions.push(str);
            str = "";
        }
        str += AccHeader(cell.name, "weapon");
        for (jdx = 0; jdx < cell.abilities.length; jdx++) {
            let a = cell.abilities[jdx]
            str += TSW.AbilityMap.get(a.gid)[1];
        }
        str += AccFooter();
    }

    str += AccHeader("Elites", "elites");
    for (let idx in TSW.Wheel[0].elites.sort(sortPath)) {
        str += TSW.AbilityMap.get(TSW.Wheel[0].elites[idx])[1];
    }
    str += AccFooter();
    TSW.Wheel[0].accordions.push(str);

}

function toDBString() {
    var str = "";
    str += TSW.SelectedWeapons[0];
    str += TSW.SelectedWeapons[1];

    for (i = 0; i < 2; i++) {
        for (j = 0; j < 8; j++) {
            let sa = TSW.SelectedAbilities[i][j];
            if (sa.gid == 0) {
                str += "099";
                continue;
            }
            let a = TSW.AbilityMap.get(sa.gid)[0];
            str += a.weapon;
            str += a.cell;
            str += a.index;
        }
    }
    return "DB:" + str;
}

function toVDMString() {
    var str = "";

    for (i = 0; i < 2; i++) {
        for (j = 0; j < 8; j++) {
            str += "%-%";
            let sa = TSW.SelectedAbilities[i][j];
            if (sa.gid == 0) {
                str += "undefined";
                continue;
            }
            str += sa.gid;
        }
    }
    return "VDM" + str;
}

function validateImport(s, apply) {
    if (typeof s != "string" || s.length < 6) return false;
    try {
        switch (s.slice(0, 3).toLowerCase()) {
            case "db:":
                return validateDB(s, apply);
            case "vdm":
                return validateVDM(s, apply);
            default:
                return validateTSWB(s, apply);
        }
    }
    catch {
        return false;
    }
    return true;
}

function isDigit(n) {
    const charCodeZero = "0".charCodeAt(0);
    const charCodeNine = "9".charCodeAt(0);

    return (n >= charCodeZero && n <= charCodeNine);
}

function validateDB(s, apply) {
    var i = 3;

    if (s.length != 53) return false;
    w1 = s.slice(i, ++i);
    w2 = s.slice(i, ++i);
    if (!isDigit(w1.charCodeAt(0))) return false;
    if (!isDigit(w2.charCodeAt(0))) return false;

    var arr = [];
    for (var i = i; i < s.length; i += 3) {
        let w = s.slice(i, i + 1);
        let c = s.slice(i + 1, i + 2);
        let a = s.slice(i + 2, i + 3);
        if (!isDigit(w.charCodeAt(0))) return false;
        if (!isDigit(c.charCodeAt(0))) return false;
        if (!isDigit(a.charCodeAt(0))) return false;
        if (w == 0 && c == 9 && a == 9) {
            arr.push(0);
        } else {
            if (c > 7) return false;
            if (a > 6) return false;
            arr.push(TSW.Wheel[w].cells[c].abilities[a]);
        }
    }
    if (apply) {
        clearWeapons();
        clickWeapon(parseInt(w1));
        clickWeapon(parseInt(w2));
        for (let i = 0; i < arr.length; i++) {
            assignAbility(i < 8 ? 0 : 1, i < 8 ? i : i - 8, arr[i])
        }
    }
    return true;
}

function validateVDM(s, apply) {
    var gid;
    var aarr = [];
    var arr = s.split("%-%");
    if (arr.length != 17) return false;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] == "undefined") {
            aarr.push(0);
        } else {
            try {
                gid = parseInt(arr[i]);
                let a = TSW.AbilityMap.get(gid)[0];
                aarr.push(a);
            }
            catch { return false; }            
        }        
    }
    if (apply) {
        clearWeapons();
        for (let i = 0; i < aarr.length; i++) {
            assignAbility(i < 8 ? 0 : 1, i < 8 ? i : i - 8, aarr[i])
            // VDM doesn't include weapons so pick the first two
            if (aarr[i].weapon > 0 && !TSW.SelectedWeapons.includes(aarr[i].weapon)) {
                clickWeapon(aarr[i].weapon);
            }
        }
    }
    return true;

}

function validateTSWB(s, apply) {
    var w1;
    var w2;
    var aarr = [];
    try {
        var arr = s.split("#");
        if (arr.length != 2) return false;
        arr = arr[1].split("v");
        if (arr.length != 2) return false;
        w1 = arr[0].slice(0, 1);
        w2 = arr[0].slice(1, 2);
        if (!isDigit(w1.charCodeAt(0))) return false;
        if (!isDigit(w2.charCodeAt(0))) return false;
        arr = arr[1].split("p");
        if (!validateTSWBBar(arr[0], aarr)) return false;
        if (!validateTSWBBar(arr[1], aarr)) return false;

        if (apply) {
            clearWeapons();
            clickWeapon(parseInt(w1));
            clickWeapon(parseInt(w2));
            for (let i = 0; i < aarr.length; i++) {
                assignAbility(i < 8 ? 0 : 1, i < 8 ? i : i - 8, aarr[i])
            }
            updateAbilities();
        }
    } catch { return false; }
    return true;
}

function validateTSWBBar(s, arr) {
    try {
        var w = -1, c = -1, a;
        for (var i = 0; i < s.length; i++) {
            switch (s[i]) {
                case "_":
                    arr.push(0);
                    continue;
                case "g":
                    c = parseInt(s[i + 1]);
                    c += 5;
                case "a":
                    w = 0;
                default:
                    if (w != 0) w = parseInt(s[i]);
                    if (c == -1) c = parseInt(s[i + 1]);
                    a = parseInt(s[i + 2]);
                    arr.push(TSW.Wheel[w].cells[c].abilities[a]);
                    i += 2;
                    w = -1;
                    c = -1;
                    continue;
            }
        }
    } catch { return false; }
    return true;
}
