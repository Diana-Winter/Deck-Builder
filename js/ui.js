
function clickWeapon(index) {
    if (index == 0) return;

    if (TSW.SelectedWeapons[0] == index) {
        TSW.SelectedWeapons[0] = 0;
        document.getElementById("radio_div_w0").innerHTML = "&nbsp;";
        document.getElementById("accordion_w0").innerHTML = "&nbsp;";
        enableWeapons();
        return unselectWeapon(index);
    }
    if (TSW.SelectedWeapons[1] == index) {
        TSW.SelectedWeapons[1] = 0;
        document.getElementById("radio_div_w1").innerHTML = "&nbsp;";
        document.getElementById("accordion_w1").innerHTML = "&nbsp;";
        enableWeapons();
        return unselectWeapon(index);
    }
    if (TSW.SelectedWeapons[0] == 0) {
        TSW.SelectedWeapons[0] = index;
        document.getElementById("radio_div_w0").innerHTML = TSW.Wheel[index].radio;
        var e = document.getElementById("accordion_w0");
        e.innerHTML = TSW.Wheel[index].accordions[0];
        hideSelectedAll(e);
        highlightSynergyAll(e);
        disableWeapons();
        return selectWeapon(index);
    }
    if (TSW.SelectedWeapons[1] == 0) {
        TSW.SelectedWeapons[1] = index;
        document.getElementById("radio_div_w1").innerHTML = TSW.Wheel[index].radio;
        var e = document.getElementById("accordion_w1");
        e.innerHTML = TSW.Wheel[index].accordions[0];
        hideSelectedAll(e);
        highlightSynergyAll(e);
        disableWeapons();
        return selectWeapon(index);
    }
}

function clearWeapons() {
    TSW.SelectedWeapons[0] = 0;
    TSW.SelectedWeapons[1] = 0;
    document.getElementById("radio_div_w0").innerHTML = "&nbsp;";
    document.getElementById("accordion_w0").innerHTML = "&nbsp;";
    document.getElementById("radio_div_w1").innerHTML = "&nbsp;";
    document.getElementById("accordion_w1").innerHTML = "&nbsp;";
    enableWeapons();
    unselectAll();

}

function selectWeapon(index) {
    document.getElementById("wIcon_" + index).classList.add("clicked");
}

function unselectWeapon(index) {
    document.getElementById("wIcon_" + index).classList.remove("clicked");
}

function unselectAll() {
    for (let i = 1; i < 10; i++) {
        document.getElementById("wIcon_" + i).classList.remove("clicked");
    }
}

function disableWeapons() {
    updateAbilities()
    if (TSW.SelectedWeapons[0] == 0 || TSW.SelectedWeapons[1] == 0) {
        return;
    }

    for (let i = 1; i < 10; i++) {
        if (i == TSW.SelectedWeapons[0] || i == TSW.SelectedWeapons[1]) {
            continue;
        }
        document.getElementById("wIcon_" + i).classList.add("disabled");
    }
}

function enableWeapons() {
    updateAbilities()
    for (let i = 1; i < 10; i++) {
        document.getElementById("wIcon_" + i).classList.remove("disabled");
    }
}

function updateAbilities() {
    for (let i = 0; i < 7; i++) {
        if (TSW.SelectedAbilities[0][i].weapon < 1) continue;
        if (TSW.SelectedWeapons.includes(TSW.SelectedAbilities[0][i].weapon)) {
            TSW.SelectedAbilities[0][i].icon.classList.remove("disabled");
        } else {
            TSW.SelectedAbilities[0][i].icon.classList.add("disabled");
        }
    }
}

function buildBars() {
    var base = [document.getElementById("bar_active"), document.getElementById("bar_passive")];
    for (let idx = 0; idx < 2; idx++) {
        var str = "";
        TSW.SelectedModifiers = new Array(TSW.Modifiers.length);
        for (let i = 0; i < TSW.Modifiers.length; i++) {
            TSW.SelectedModifiers[i] = new Array(TSW.Modifiers[i].length);
            for (let j = 0; j < TSW.SelectedModifiers[i].length; j++) {
                TSW.SelectedModifiers[i][j] = [];
            }
        }

        TSW.SelectedAbilities[idx] = Array(8);
        for (let jdx = 0; jdx < 8; jdx++) {
            TSW.SelectedAbilities[idx][jdx] = { "icon": {}, "gid": 0, "cost": 0, "tier": 0, "weapon": -1, "cell": -1, "index": -1, "total_cost": 0 };
            str = barButton(idx, jdx);
            let e = document.createElement("img");
            base[idx].appendChild(e);
            e.outerHTML = str;
            TSW.SelectedAbilities[idx][jdx].icon = base[idx].lastElementChild;
        }
    }
}

function updateInfo() {
    var e = document.getElementById("bar_info");
    var sm = TSW.SelectedModifiers;
    var display = false;
    var counts = new Array(TSW.Modifiers.length).fill(0);

    var rh = "", r0 = "", r1 = "";

    for (let i in sm) {
        let count = 0;
        for (let j in sm[i]) {
            let a = 0, r = 0;
            if (sm[i][j].length == 0) continue;
            if (i == 2 && j == 3) continue;
            if (i == 3 && j == 8) continue;
            display = true;
            count++;
            for (let k in sm[i][j]) {
                if (sm[i][j][k][1] == 0) {
                    r++;
                } else {
                    a++;
                }
            }
            r0 += "<td class=\"" + (a > 0 ? "apply": "") + (r > 0 ? "react" : "") + "\">" + TSW.Modifiers[i][j] + "</td>";
            r1 += "<td class=\"" + (a > 0 ? "apply" : "") + (r > 0 ? "react" : "") + "\">A:" + a + " R:" + r + "</td>";
        }
        if (count > 0) rh += "<td colspan=\"" + count + "\">" + TSW.ModifierTypes[i] + "</td>";
    }
    if (!display) {
        e.innerHTML = "";
        return;
    }

    var str = "<table id=\"table_info\"><tr class=\"ti_header\">";
    str += "<tr><td></td>" + rh + "</tr>";
    str += "<tr><td>Modifier</td>" + r0 + "</tr>";
    str += "<tr><td>Apply React</td>" + r1 + "</tr>";
    str += "</table>";

    e.innerHTML = str;
}

function buildAccordions() {
    buildWeaponWheel();
    buildBridgeWheel();
}

function accordionClick(t) {
    if (t.classList.contains("active")) {
        return t.classList.remove("active");
    }
    var a = t.parentNode.parentNode.querySelector(".active");
    if (a != undefined) a.classList.remove("active");
    t.classList.toggle("active");

    var d = t.nextSibling.getElementsByClassName("description");
    var rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    for (var i = 0; i < d.length; i++) {
        var h = d[i].offsetHeight;
        if (h < 1.5 * rem) {
            var c = d[i].parentNode.getElementsByClassName("cost");
            c[0].classList.add("adjust");
        }
    }
}

function selectAbility(a) {
    let sa = TSW.SelectedAbilities;
    let bar = a.active ? 0 : 1;
    var idx = -1;

    if (a.auxillary) {
        if (sa[bar][7].gid == 0)
            idx = 7;
    } else {
        for (let i = 0; i < 7; i++) {
            if (a.elite && sa[bar][i].gid > 0) {
                let test = TSW.AbilityMap.get(sa[bar][i].gid);
                if (test[0].elite) {
                    alert("Cannot select more than one elite " + (a.active ? "active" : "passive") + " ability.");
                    return false;
                }
            }
            if (sa[bar][i].gid == 0 && idx == -1) {
                idx = i;
            }
        }
    }
    if (idx == -1) return false;
    assignAbility(bar, idx, a);
    hideSelected(document, a.gid);
}

function assignAbility(bar, idx, a) {
    let sa = TSW.SelectedAbilities[bar][idx];
    let sm = TSW.SelectedModifiers;

    let icon = sa.icon;

    if (sa.gid > 0) {
        unhideSelected(sa.gid);
        removeAbility(bar, idx);
    }

    if (typeof a == "number") {
        sa.gid = 0;
        return;
    }

    sa.gid = a.gid;
    sa.name = a.name;
    sa.cost = a.cost;
    sa.tier = a.tier;
    sa.weapon = a.weapon;
    sa.cell = a.cell;
    sa.index = a.index;
    sa.total_cost = a.total_cost;
    sa.modifiers = a.modifiers ? a.modifiers : [];
    sa.synergies = a.synergies;
    for (let i = 0; i < sa.synergies.length; i++) {
        highlightSynergy(document, "[" + sa.synergies[i][0] + "=\"" + sa.synergies[i][1] + "\"]");
    }

    for (let i = 0; i < sa.modifiers.length; i++) {
        let m = sa.modifiers[i][0];
        sm[m[0]][m[1]].push([a.gid, sa.modifiers[i][1]]);
    }

    icon.classList.remove("empty");
    if (a.elite) icon.classList.add("elite");

    icon.src = a.src;
    if (a.active) {
        icon.classList.add("glossy");
        icon.classList.add(TSW.Colors[a.background]);
    } else {
        icon.classList.add("purple");
    }
    icon.setAttribute("alt", a.name);
    icon.setAttribute("title", a.name);
    icon.addEventListener("click", barClick);
    icon.addEventListener("mouseover", barOver);
    icon.addEventListener("mouseout", barOut);
    updateAbilities();
    updateAPCost();
    updateInfo();
}

function updateAPCost() {
    var cost = 0;
    var weapons = Array(10);

    for (let i = 0; i < 10; i++) {
        weapons[i] = Array(8);
        for (let j = 0; j < 8; j++) {
            let a = { "index": -1, "total_cost": 0 }
            weapons[i][j] = a;
        }
    }

    var ap = document.getElementById("ap_cost");
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 8; j++) {
            let sa = TSW.SelectedAbilities[i][j];
            let gid = sa.gid;
            if (gid == 0) continue;
            if (weapons[sa.weapon][sa.cell].index < sa.index) {
                weapons[sa.weapon][sa.cell].index = sa.index;
                weapons[sa.weapon][sa.cell].total_cost = sa.total_cost;
            }
            if (sa.tier == 2) {
                weapons[sa.weapon][0].index = 7;
                weapons[sa.weapon][0].total_cost = 19;
                weapons[sa.weapon][1].index = 7;
                weapons[sa.weapon][1].total_cost = 19;
            }
        }
    }

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 8; j++) {
            cost += weapons[i][j].total_cost;
        }
    }
    ap.innerText = cost + " AP";
}

function moveAbility(bar, sidx, tidx) {
    let sgid = TSW.SelectedAbilities[bar][sidx].gid;
    let sa = TSW.AbilityMap.get(sgid)[0];
    let tgid = TSW.SelectedAbilities[bar][tidx].gid;

    if (tgid != 0) removeAbility(bar, tidx);
    assignAbility(bar, tidx, sa);
    removeAbility(bar, sidx);
    if (tgid != 0) {
        let ta = TSW.AbilityMap.get(tgid)[0];
        assignAbility(bar, sidx, ta);
    }
}

function removeAbility(bar, idx) {
    let sa = TSW.SelectedAbilities[bar][idx];
    let sm = TSW.SelectedModifiers;

    let icon = sa.icon;

    removeSynergy();

    for (let i = 0; i < sa.modifiers.length; i++) {
        let a = sa.modifiers[i][0];
        let m = sm[a[0]][a[1]];
        for (let j = 0; j < m.length; j++) {
            if (m[j][0] == sa.gid) {
                m.splice(j, 1);
                break;
            }
        }
    }
    sa.modifiers = [];

    sa.gid = 0;
    sa.cost = 0;
    sa.tier = 0;
    sa.weapon = -1;
    sa.cell = -1;
    sa.index = -1;
    sa.total_cost = 0;
    sa.synergies = [];


    icon.classList.remove(...icon.classList)
    icon.src = "images/ridges.svg";
    icon.style.backgroundImage = "";
    icon.classList.add("icon");
    icon.classList.add("empty");
    if (idx == 7) icon.classList.add("auxillary");

    icon.setAttribute("alt", "Empty Slot");
    icon.setAttribute("title", "Empty Slot");

    icon.removeEventListener("click", barClick);
    icon.removeEventListener("mouseover", barOver);
    icon.removeEventListener("mouseout", barOut);
    updateAPCost();
    updateInfo();
    highlightSynergyAll(document);
}

function clearAbilities() {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 8; j++) {
            unhideSelected(TSW.SelectedAbilities[i][j].gid)
            removeAbility(i, j);
        }
    }
}

function addBarListeners(e, aux, elite) {
    var arr =[];
    if (aux) {
        arr = [e.lastElementChild];
    } else {
        if (elite) {
            arr = e.querySelectorAll(".icon:not(.auxillary).elite");
        }
        if (arr.length == 0) {
            arr = e.querySelectorAll(".icon:not(.auxillary)");
        }
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.add("droptarget");
        arr[i].addEventListener("dragover", barDragOver);
        arr[i].addEventListener("dragenter", barDragEnter);
        arr[i].addEventListener("dragleave", barDragLeave);
        arr[i].addEventListener("drop", barDrop);
    }
}

function removeBarListeners(e) {
    let arr = e.children;
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove("droptarget");
        arr[i].classList.remove("dragover");
        arr[i].removeEventListener("dragover", barDragOver);
        arr[i].removeEventListener("dragenter", barDragEnter);
        arr[i].removeEventListener("dragleave", barDragLeave);
        arr[i].removeEventListener("drop", barDrop);
    }
}
function barClick(t) {
    let bar = parseInt(t.getAttribute("bar"));
    let idx = parseInt(t.getAttribute("idx"));
    let gid = TSW.SelectedAbilities[bar][idx].gid;

    removeAbility(bar, idx);
    hideToolTip();
    unhideSelected(gid);
}

function weaponOver(i, t) {
    var d = document.getElementById("tooltip");
    d.innerHTML = TSW.Wheel[i].ToolTip;
    d.classList.remove("hidden");
    let rect = t.getBoundingClientRect();
    let rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    d.style.top = rect.top + t.offsetHeight + 0.5 * rem + "px";
    d.style.left = rect.left + 1.25 * rem + "px";
    d.style.width = "17rem";
}

function weaponOut() {
    var d = document.getElementById("tooltip");
    d.style.width = "";
    hideToolTip();
}

function barOver(evt) {
    let t = evt.target;
    let bar = parseInt(t.getAttribute("bar"));
    let idx = parseInt(t.getAttribute("idx"));
    let gid = TSW.SelectedAbilities[bar][idx].gid;
    var d = document.getElementById("tooltip");
    d.innerHTML = TSW.AbilityMap.get(gid)[1];
    d.classList.remove("hidden");
    let rect = t.getBoundingClientRect();
    let rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    d.style.top = rect.top + t.offsetHeight + 0.5 * rem + "px";
    d.style.left = rect.left - 0.25 * rem + "px";
}

function barOut(t) {
    hideToolTip();
}

function barDragStart(evt) {
    let t = evt.target;
    let bar = parseInt(t.getAttribute("bar"));
    let idx = parseInt(t.getAttribute("idx"));
    evt.dataTransfer.setData("bar", bar);
    evt.dataTransfer.setData("idx", idx);
    evt.effectAllowed = "move";
    addBarListeners(t.parentNode, false, false);
    evt.dataTransfer.setDragImage(t, 10, 10);
}

function barDragEnd(evt) {
    removeBarListeners(evt.target.parentNode);
}

function barDragEnter(evt) {
    this.classList.add("dragover");
}

function barDragLeave(evt) {
    this.classList.remove("dragover");
}

function barDragOver(evt) {
    evt.preventDefault();
    false;
}

function barDrop(evt) {
    let t = evt.target;
    let tbar = parseInt(t.getAttribute("bar"));
    let tidx = parseInt(t.getAttribute("idx"));
    let gid = parseInt(evt.dataTransfer.getData("gid"));
    let sidx = parseInt(evt.dataTransfer.getData("idx"));
    if (sidx >= 0) {
        moveAbility(tbar, sidx, tidx);
        return;
    }
    assignAbility(tbar, tidx, TSW.AbilityMap.get(gid)[0]);
    hideSelected(document, gid);
}

function abilityClick(gid) {
    let a = TSW.AbilityMap.get(gid)[0];
    selectAbility(a);
}

function abilityDragStart(evt) {
    let t = evt.target;
    if (t instanceof HTMLImageElement) t = t.parentNode;
    let gid = parseInt(t.getAttribute("gid"));
    let a = TSW.AbilityMap.get(gid)[0];
    evt.dataTransfer.setData("gid", gid);
    evt.dataTransfer.setData("sidx", -1);
    let bar = document.getElementById(a.active ? "bar_active" : "bar_passive");
    addBarListeners(bar, a.auxillary, a.elite);

    evt.dataTransfer.setData("active", a.active);
    evt.effectAllowed = "move";
    evt.dataTransfer.setDragImage(t.firstChild, 10, 10);
}

function abilityDragEnd(evt) {
    removeBarListeners(document.getElementById("bar_active"));
    removeBarListeners(document.getElementById("bar_passive"));
}

function highlightSynergy(e, attr) {
    var arr = e.querySelectorAll(attr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != undefined)
            arr[i].classList.add("synergy");
    }
}

function removeSynergy() {
    var arr = document.querySelectorAll('*');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != undefined)
            arr[i].classList.remove("synergy");
    }
}

function highlightSynergyAll(e) {
    for (let idx = 0; idx < 2; idx++) {
        for (let jdx = 0; jdx < 8; jdx++) {
            let sa = TSW.SelectedAbilities[idx][jdx];
            if (sa.gid == 0) continue;
            if (sa.synergies.length == 0) continue;
            sa.synergies.forEach((value) => highlightSynergy(e, "[" + (value)[0] + "=\"" + (value)[1] + "\"]"));
        }
    }
}

function hideSelected(e, gid) {
    var arr = document.querySelectorAll("[gid=\"" + gid + "\"]");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != undefined)
            arr[i].classList.add("hidden");
    }
}

function hideSelectedAll(e) {
    for (let idx = 0; idx < 2; idx++) {
        for (let jdx = 0; jdx < 8; jdx++) {
            let a = TSW.SelectedAbilities[idx][jdx]; 
            if (a.gid != 0)
                hideSelected(e, a.gid);
        }
    }
}

function unhideSelected(gid) {
    var arr = document.querySelectorAll("[gid=\"" + gid + "\"]");
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] != undefined)
            arr[i].classList.remove("hidden");
    }
}

function hideToolTip() {
    document.getElementById("tooltip").classList.add("hidden");

}

function resetClick() {
    closeDialog();
    clearWeapons();
    clearAbilities();
}

function radioChange(w, i, t) {
    let id = t.parentNode.id;
    let c = id.slice(id.length - 1, id.length);
    var e = document.getElementById("accordion_w" + c);
    e.innerHTML = TSW.Wheel[w].accordions[i];
    hideSelectedAll(e);
    highlightSynergyAll(e);
}

function exportClick() {
    closeDialog();

    var c = document.getElementById("dialog_caption");
    var t = document.getElementById("dialog_text_block");
    document.getElementById("button_copy").classList.remove("hidden");
    document.getElementById("button_ok").classList.add("hidden");
    document.getElementById("dialog_text").classList.remove("hidden");
    c.innerHTML = "<span id=\"export\" class=\"radio_label\">Export Type:</span>" + exportButton("DB", 0, true) + exportButton("VDM", 1, false);
    t.innerText = toDBString();
    showDialog();
}

function exportChange(i) {
    var t = document.getElementById("dialog_text_block");
    switch (i) {
        case 0:
            t.innerText = toDBString();
            break;
        case 1:
            t.innerText = toVDMString();
            break;
    }    
}

function closeDialog() {
    var e = document.getElementById("dialog");
    var i = document.getElementById("dialog_input");
    e.classList.add("hidden");
    i.classList.add("hidden");
    clearStatus();
}

function copyDialog() {
    var t = document.getElementById("dialog_text_block");
    navigator.clipboard.writeText(t.innerText);
    var s = document.getElementById("dialog_status");
    setStatus("Copied to Clipboard", null, 2000);
}

function setStatus(s, color, delay) {
    var e = document.getElementById("dialog_status");
    e.innerText = s;
    if (color != undefined) e.classList.add(color);
    if (delay > 0) {
        let id = setTimeout(clearStatus, delay);
        e.setAttribute("tid", id);
    }
}

function clearStatus() {
    var e = document.getElementById("dialog_status");
    e.innerText = "";
    e.classList.remove(...e.classList);
    let tid = parseInt(e.getAttribute("tid"));
    e.removeAttribute("tid");
    try { clearTimeout(tid); } catch { }
}

function showDialog() {
    var e = document.getElementById("dialog");
    e.classList.remove("hidden");
}

function importClick() {
    closeDialog();

    document.getElementById("dialog_caption").innerHTML = "<span id=\"import\" class=\"radio_label\">DB/VDM/TSW-Builder Import String:</span>";
    document.getElementById("dialog_text_block").innerText = "";
    document.getElementById("dialog_text").classList.add("hidden");
    document.getElementById("dialog_input").classList.remove("hidden");
    document.getElementById("dialog_input").value = "";
    document.getElementById("button_ok").classList.remove("hidden");
    document.getElementById("button_ok").classList.add("disabled");
    document.getElementById("button_copy").classList.add("hidden");

    showDialog();
    document.getElementById("dialog_input").focus();

}

function importInput() {
    clearStatus();
    var e = document.getElementById("dialog_input");
    document.getElementById("button_ok").classList.add("disabled");
    var str = e.value;
    if (str == "") return;
    var ret = validateImport(str, false);
    if (!ret) {
        setStatus("Invalid import string.", "red", -1);
        document.getElementById("button_ok").classList.add("disabled");
    } else {
        document.getElementById("button_ok").classList.remove("disabled");
    }
 }

function importDialog() {
    if (document.getElementById("button_ok").classList.contains("disabled")) return;
    s = document.getElementById("dialog_input").value;
    if (!validateImport(s, true))
        setStatus("Invalid import string.", "red", -1);
    else
        closeDialog();
}

function searchChange() {
    const ac = new AbortController();
    const d = document.getElementById("search_results");
    const s = document.getElementById("search_input");

    let rect = s.getBoundingClientRect();
    let rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    d.style.top = rect.top + s.offsetHeight + 0.5 * rem + "px";
    d.style.left = rect.left - 10 * rem + "px";

    ac.abort();
    d.innerHTML = "";
    if (s.value.length < 3) return;
    searchAbilities({ signal: ac.signal });
}

async function searchAbilities({ signal } = {}) {
    const r = document.getElementById("search_results");
    var s = document.getElementById("search_input").value;
    if (s.length < 3) return;
    TSW.AbilityMap.forEach(compareAbilityName);
    highlightSynergyAll(r);
}

function displayClick() {
    const d = document.getElementById("dialog_text_block");
    document.getElementById("dialog_caption").innerHTML = "<span id=\"import\" class=\"radio_label\">Display Information:</span>";
    document.getElementById("dialog_text_block").innerText = "";
    document.getElementById("dialog_text").classList.remove("hidden");
    document.getElementById("dialog_input").classList.add("hidden");
    document.getElementById("dialog_input").value = "";
    document.getElementById("button_ok").classList.add("hidden");
    document.getElementById("button_ok").classList.add("disabled");
    document.getElementById("button_copy").classList.remove("hidden");

    var str = "";
    str += "<b>Weapons:</b> ";
    for (let i = 0; i < TSW.SelectedWeapons.length; i++) {
        if (TSW.SelectedWeapons[i] > 0) {
            if (i == 1) str += "/";
            str += TSW.Wheel[TSW.SelectedWeapons[i]].name;
        }
    }
    str += " (" + document.getElementById("ap_cost").innerText + ")<br><br>";
    str += "<b>Actives</b><br>";
    for (let i = 0; i < 2; i++) {
        if (i == 1) str += "<b>Passives</b><br>";
        for (let j = 0; j < 8; j++) {
            str += (j + 1) + ". ";
            if (TSW.SelectedAbilities[i][j].gid > 0) {
                str += TSW.SelectedAbilities[i][j].name;
            } else {
                str += "Empty";
            }
            str += "<br>";
        }
        str += "<br>"
    }

    str += "<b>DB/VDM</b><br>";
    str += toDBString() + "<br><br>";
    str += toVDMString() + "<br>";

    d.innerHTML = str;
    showDialog();
}

function compareAbilityName(value, key, map) {
    const s = document.getElementById("search_input");
    const d = document.getElementById("search_results");
    if (value[0].name.toLowerCase().includes(s.value)) {
        d.innerHTML += value[1];
    }
}

hideToolTip();
closeDialog();
buildAccordions();
buildWeaponPicker();
buildBars();
buildRadioSets();
