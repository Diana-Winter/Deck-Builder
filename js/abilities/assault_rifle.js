﻿// Assault Rifle
index = 9;

TSW.Wheel[index].cells.push({
	"name": "Engage",
	"tier": "1",
	"abilities": [
		{
			"name": "Safety Off",
			"gid": 6377845,
			"iid": 6814145,
			"background": 1,
			"cost": 1,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"build": "1",
			"apply": "Burst",
			"target": "Single",
			"description": "Builds $r1 resource for each equipped weapon.<br>A single target $uBurst attack that hits $t3 times, dealing $d16 physical damage per hit.",
		},
		{
			"name": "Extra Bullet",
			"gid": 6378207,
			"iid": 6814187,
			"background": 6,
			"cost": 1,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Safety Off",
			"description": "\"Safety Off\" performs an additional hit that deals $d7 physical damage.",
		},
		{
			"name": "Fire at Will",
			"gid": 6377980,
			"iid": 6814144,
			"background": 1,
			"cost": 1,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "4",
			"consume": "-1",
			"apply": "Frenzy",
			"target": "TAoE",
			"description": "TAoE: Affects up to $t6 enemies in a $t5 metre radius around the target.<br>Consumes all Assault Rifle Resources.<br>A TAoE $uFrenzy ability that deals $d35 physical damage. An additional hit is performed for each Assault Rifle Resource consumed, dealing $d11 physical damage per hit.",
		},
		{
			"name": "No Contest",
			"gid": 6378205,
			"iid": 6814188,
			"background": 6,
			"cost": 2,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Hinder",
			"apply": "Hit",
			"description": "Whenever you apply $sHindered, the next hit you perform cannot be evaded and you gain a beneficial effect which increases damage dealt by $t10% for $t8 seconds.",
		},
		{
			"name": "Trigger Happy",
			"gid": 6377940,
			"iid": 6814147,
			"background": 1,
			"cost": 3,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"build": "1",
			"react": "Hinder",
			"apply": "Afflict",
			"target": "Single",
			"description": "Builds $r1 resource for each equipped weapon.<br>A single target attack that deals $d48 physical damage. If the target is $sHindered, it also becomes $sAfflicted with a damage over time effect that deals $d3 physical damage every second for $t5 seconds.",
		},
		{
			"name": "Eagle Eye",
			"gid": 6378206,
			"iid": 6814186,
			"background": 6,
			"cost": 4,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"apply": "Damage",
			"description": "Increases damage dealt by Assault Rifle abilities by $t10%.",
		},
		{
			"name": "Slow the Advance",
			"gid": 6378043,
			"iid": 6814146,
			"background": 1,
			"cost": 7,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cooldown": "25",
			"react": "Anima Deviation",
			"apply": "Hinder",
			"target": "GTAoE",
			"description": "GTAoE: Affects up to $c6 enemies in a $c5 metre radius around the targeted point.<br>A GTAoE that deals $d276 physical damage. Affected targets also become $sHindered and their movement speed is reduced by $t70% for $t8 seconds.<br> <br>Also places an area at the targeted point that lasts $t8 seconds. Every second it will deal $d10 physical damage to up to $c6 enemies in a $d5 metre radius.<br> <br>Susceptible to $sAnima Deviation.",
		},
	]
});


TSW.Wheel[index].cells.push({
	"name": "Support",
	"tier": "1",
	"abilities": [
		{
			"name": "Military Code",
			"gid": 6378204,
			"iid": 6814192,
			"background": 6,
			"cost": 1,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"apply": "Resource",
			"description": "Whenever an enemy dies with your Assault Rifle Resources remaining, you gain a beneficial effect that causes your next Assault Rifle resource builder to build $r2 additional Assault Rifle Resources.",
		},
		{
			"name": "Anima Shot",
			"gid": 6377895,
			"iid": 6814148,
			"background": 1,
			"cost": 1,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"build": "1",
			"apply": "Heal",
			"target": "Single",
			"description": "Builds $r1 Assault Rifle Resource.<br>A single target attack that deals $d38 physical damage. Your heal your defensive target for $h27 and $h7.1% of the damage dealt.",
		},
		{
			"name": "Anima Boost",
			"gid": 6378209,
			"iid": 6814189,
			"background": 6,
			"cost": 1,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Anima Shot",
			"description": "Increases the damage dealt, leech and heal of \"Anima Shot\" by $t7.5%.",
		},
		{
			"name": "Lock & Load",
			"gid": 6377941,
			"iid": 6814150,
			"background": 4,
			"cost": 2,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "25",
			"build": "3",
			"description": "Builds $r3 Assault Rifle Resources.<br>Reduces the recharge time of all Assault Rifle resource consumers currently recharging by $t4 seconds. This ability does not trigger and is not affected by global recharge time.",
		},
		{
			"name": "Extra Clip",
			"gid": 6378210,
			"iid": 6814191,
			"background": 6,
			"cost": 3,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Lock & Load",
			"apply": "Resource",
			"description": "\"Lock & Load\" builds $t2 additional Assault Rifle Resources.",
		},
		{
			"name": "Fire in the Hole",
			"gid": 6378030,
			"iid": 6814149,
			"background": 1,
			"cost": 4,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "4",
			"consume": "-1",
			"target": "Single",
			"description": "Consumes all Assault Rifle Resources.<br>Sticks a spiked grenade to the target which deals $d46-91 physical damage and then detonates $t2 seconds later dealing $d46-91 physical damage, based on the number of resources consumed.",
		},
		{
			"name": "Experience",
			"gid": 6378211,
			"iid": 6814190,
			"background": 6,
			"cost": 7,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"elite": true,
			"react": "Leech",
			"apply": "Leech",
			"description": "Increases the effectiveness of leech effects by $h20%.",
		},
	]
});


TSW.Wheel[index].cells.push({
	"name": "Take Point",
	"tier": "2",
	"abilities": [
		{
			"name": "Three Round Burst",
			"gid": 6806479,
			"iid": 7070921,
			"background": 1,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "4",
			"consume": "-1",
			"apply": "Burst",
			"target": "Single",
			"description": "Consumes all Assault Rifle Resources.<br>A single target $uBurst attack that hits $t3 times, dealing $d30-59 physical damage per hit, based on the number of resources consumed.",
		},
		{
			"name": "Call Your Shots",
			"gid": 6837701,
			"iid": 7076193,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Hit",
			"apply": "Hit",
			"description": "Whenever you hit, you gain a single stack of the Hit Rating effect, which increases your Hit Rating by $c40 for $t8 seconds per stack. The Hit Rating effect can stack up to $t5 times. Whenever you glance, this effect is removed.",
		},
		{
			"name": "Hip Fire",
			"gid": 6812380,
			"iid": 7070879,
			"background": 1,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"target": "Single",
			"description": "Builds $r1 resource for each equipped weapon.<br>A single target attack that deals $d48 physical damage. This ability has a $c10 metre range.",
		},
		{
			"name": "Steady Hip Fire",
			"gid": 6838939,
			"iid": 7076194,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Hip Fire",
			"description": "Increases the range of \"Hip Fire\" by $c10 metres.",
		},
		{
			"name": "Where it Hurts",
			"gid": 6812582,
			"iid": 7070880,
			"background": 1,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"cooldown": "12",
			"consume": "-1",
			"react": "Afflict",
			"apply": "Hinder",
			"target": "Single",
			"description": "Consumes all Assault Rifle Resources.<br>A single target attack that deals $d90-180 physical damage, based on the number of resources consumed. If you hit an $sAfflicted target, your target becomes $sHindered and their movement speed is reduced by $t70% for $t4 seconds.",
		},
		{
			"name": "Short Controlled Bursts",
			"gid": 6839057,
			"iid": 7076192,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Burst",
			"description": "Increases Hit Rating for $uBurst attacks by $t200. In addition, the Critical Chance and Penetration Chance of all $uBurst attacks is increased by $t4%.",
		},
		{
			"name": "Red Mist",
			"gid": 6812908,
			"iid": 7070881,
			"background": 1,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cast": "2",
			"cooldown": "20",
			"apply": "Vulnerable",
			"target": "Single",
			"description": "A single target attack that deals $d435 physical damage. This attack cannot be evaded and will not glance.<br> <br>Applies $sVulnerable to Magic.",
		},
	]
});


TSW.Wheel[index].cells.push({
	"name": "Heavy Fire",
	"tier": "2",
	"abilities": [
		{
			"name": "Lucky Bullet",
			"gid": 6851016,
			"iid": 7076196,
			"background": 6,
			"cost": 9,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"apply": "Hinder",
			"description": "Whenever you hit, you build a Lucky Bullet counter. Once that counter reaches $t6, your next attack causes the target to become $sHindered and their movement speed is reduced by $t70% for $t8 seconds. This effect has an internal recharge time of $t30 seconds.",
		},
		{
			"name": "Tactical Retreat",
			"gid": 6851612,
			"iid": 7070924,
			"background": 1,
			"cost": 12,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "25",
			"apply": "Hinder,Movement",
			"target": "Column",
			"description": "Column Dash: Dash backward $c10 metres, affecting all enemies in a $c6 metre wide column along the way.<br>A column dash attack causing affected targets to become $sHindered and reducing their movement speed by $t70% for $t4 seconds. A grenade is also left at the start location, exploding $t1.5 seconds after the dash, dealing $d76 physical damage in an area around it and causing the affected targets to become $sHindered, reducing their movement speed by $t70% for $t4 seconds.",
		},
		{
			"name": "Lethality",
			"gid": 6839136,
			"iid": 7076195,
			"background": 6,
			"cost": 16,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Hit",
			"apply": "Damage",
			"description": "Whenever you hit, you gain a single stack of a beneficial effect that increases all damage dealt by $t1.25% per stack for $t10 seconds. This effect can stack up to $t10 times. Whenever you glance, all stacks are removed.",
		},
		{
			"name": "Razor Wire",
			"gid": 6851599,
			"iid": 7070922,
			"background": 4,
			"cost": 21,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "60",
			"apply": "Movement",
			"description": "You place a $c10 metre wide by $t2 metre long area in front of you that lasts $t10 seconds and dash backwards $c10 metres. Any enemies passing through the area have their movement speed reduced by $t30%.",
		},
		{
			"name": "Explosives Expert",
			"gid": 6839246,
			"iid": 7076197,
			"background": 6,
			"cost": 27,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Hit",
			"description": "Whenever you hit, you apply an explosive charge to the target. This charge explodes after $t3 seconds, dealing $d23 physical damage.",
		},
		{
			"name": "Incendiary Grenade",
			"gid": 6814905,
			"iid": 7070923,
			"background": 1,
			"cost": 34,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "0.5",
			"cooldown": "25",
			"apply": "Afflict",
			"target": "TAoE",
			"description": "TAoE: Affects up to $c6 enemies in a $c5 metre radius around your target.<br>A TAoE attack that deals $d30 physical damage. Affected targets become $sAfflicted with a damage over time effect that deals $d3 damage every second for $t10 seconds.",
		},
		{
			"name": "Demolition, Man",
			"gid": 6839275,
			"iid": 7076198,
			"background": 6,
			"cost": 50,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"elite": true,
			"description": "Whenever you use a resource consuming ability, you also apply an explosive charge to the target. Charges can be applied to up to $c6 enemies. This charge detonates after $t3 seconds, dealing $d93 physical damage if you are facing the target when the explosion occurs, or $d124 physical damage and will not glance if you are facing away from the target when the explosion occurs. This effect has an internal recharge time of $t5 seconds.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Bombardment",
	"tier": "2",
	"abilities": [
		{
			"name": "Suppressing Fire",
			"gid": 6814909,
			"iid": 7070927,
			"background": 1,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"build": "1",
			"apply": "Frenzy",
			"target": "TAoE",
			"description": "Channelled: Every $t0.25 seconds for $t1 second.<br>TAoE: Affects up to $c6 enemies in a $c5 metre radius around your target.<br>Builds $r1 Resource on affected enemy and one on self for secondary weapons.<br>A channelled TAoE $uFrenzy attack that deals $d19 physical damage on the first hit and $d2 physical damage on each subsequent hit.",
		},
		{
			"name": "Sharp Shooter",
			"gid": 6839309,
			"iid": 7076250,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Hit",
			"apply": "Hit",
			"description": "Whenever you hit a target that is further than $t15 metres from you, you automatically hit the target again for $d7 damage.",
		},
		{
			"name": "Frag Grenade",
			"gid": 6815360,
			"iid": 7070928,
			"background": 1,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "4",
			"consume": "-1",
			"react": "Hinder",
			"target": "TAoE",
			"description": "TAoE: Affects up to $c6 enemies in a $c5 metre radius around your target.<br>Consumes all Assault Rifle Resources.<br>A TAoE attack that deals $d45-89 physical damage. If you hit a $sHindered targeted, an explosion centered around that target is triggered, dealing $d9-18 physical damage. Damage scales based on the number of resources consumed.",
		},
		{
			"name": "Shoot 'Em Up",
			"gid": 6850557,
			"iid": 7076199,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Frenzy",
			"apply": "Afflict",
			"description": "Whenever you hit with a $uFrenzy ability, the target becomes $sAfflicted with a damage over time effect that deals $d7 physical damage every second for $t5 seconds.",
		},
		{
			"name": "High Explosive Grenade",
			"gid": 6941043,
			"iid": 7070926,
			"background": 1,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"cooldown": "4",
			"consume": "-1",
			"react": "Afflict",
			"target": "TAoE",
			"description": "TAoE: Affects up to $c6 enemies in a $c5 metre radius around your target.<br>Consumes all Assault Rifle Resources.<br>A TAoE attack that deals $d44-86 physical damage, or $d55-108 physical damage to targets that are $sAfflicted. Damage scales based on the number of resources consumed.",
		},
		{
			"name": "Accuracy",
			"gid": 6851607,
			"iid": 7076200,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Hit",
			"apply": "Hit,Damage",
			"description": "Increases damage dealt by $t7% and increases Hit Rating by $c75.",
		},
		{
			"name": "Shellshocker",
			"gid": 6815364,
			"iid": 7070925,
			"background": 1,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cast": "2",
			"cooldown": "25",
			"react": "Anima Deviation",
			"apply": "Hinder,Vulnerable",
			"target": "Column",
			"description": "Channelled: Every $t0.25 seconds for $t2 second.<br>Column: Affects up to $c6 enemies in a $c4 metre wide by $c12 metre long column in front of you.<br>A channelled column attack that deals $d65 physical damage per hit. Affected targets become $sHindered and their movement speed is reduced by $t70% for $t8 seconds.<br> <br>Applies $sVulnerable to Melee. <br> <br>Susceptible to $sAnima Deviation.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Squad Duty",
	"tier": "2",
	"abilities": [
		{
			"name": "Shot of Anima",
			"gid": 6837239,
			"iid": 7070931,
			"background": 3,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "4",
			"consume": "-1",
			"apply": "Heal,Leech",
			"target": "Single",
			"description": "Consumes all Assault Rifle Resources.<br>A single target attack that deals $d10 physical damage and heals your defensive target for $h79-157, based on the number of resources consumed. Also gives a $h1.6% leech effect to your defensive target for $t5 seconds.",
		},
		{
			"name": "Increased Dosage",
			"gid": 6839399,
			"iid": 7076201,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Shot of Anima",
			"description": "Improves \"Shot of Anima\" to heal for $h117-195, but no longer grant a leech effect.",
		},
		{
			"name": "Anima Burst",
			"gid": 6837247,
			"iid": 7070932,
			"background": 1,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"build": "1",
			"apply": "Burst,Heal",
			"target": "Single",
			"description": "Builds 1 Assault Rifle resource.<br>A $uBurst attack that hits $t3 times, dealing $d10 physical damage per hit. Heals the defensive target for $h34 and $h10.1% of the damage dealt.",
		},
		{
			"name": "Improved Bursts",
			"gid": 6839414,
			"iid": 7076202,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Burst",
			"description": "All your $uBurst abilities are $t10% more effective.",
		},
		{
			"name": "Transfuse Anima",
			"gid": 6837251,
			"iid": 7070929,
			"background": 1,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"cooldown": "4",
			"react": "Hinder",
			"apply": "Heal,Leech",
			"target": "Single",
			"description": "Consumes all Assault Rifle resources.<br>A single target attack that deals $d78-169 physical damage, based on the number of resources consumed. Heals the defensive target for $h7.1% of the damage dealt. If the target is $sHindered, the defensive target gains a $h2% leech effect for $t10 seconds.",
		},
		{
			"name": "Shadow Medic",
			"gid": 6839466,
			"iid": 7076203,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Heal",
			"description": "All your healing abilities are $t7.5% more effective.",
		},
		{
			"name": "Re-Animator",
			"gid": 6837254,
			"iid": 7070930,
			"background": 3,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cast": "1.5",
			"cooldown": "20",
			"apply": "Heal",
			"target": "Single",
			"description": "Channelled: Every $t0.3 seconds for $t1.5 seconds.<br>A channelled heal that heals for $h99. While channeling this ability, your target is unable to be killed<br> <br>When this ability finishes channeling, you gain a beneficial effect which increases the effectiveness of all leech abilities by $t20% for $t6 seconds.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Support Team",
	"tier": "2",
	"abilities": [
		{
			"name": "Leech Therapy",
			"gid": 6852633,
			"iid": 7076204,
			"background": 6,
			"cost": 9,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Leech,Afflict",
			"apply": "Heal",
			"description": "Your leech abilities also trigger a PBAoE heal if the target is $sAfflicted. This affects up to $c6 friends in a $c5 metre area around you, healing for $h8.",
		},
		{
			"name": "Energise",
			"gid": 6813204,
			"iid": 7070934,
			"background": 4,
			"cost": 12,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "60",
			"react": "Leech",
			"description": "Increases the effectiveness of all leech abilities by $t40% for $t10 seconds. This ability does not trigger and is not affected by global recharge time.",
		},
		{
			"name": "Anticoagulant",
			"gid": 6852637,
			"iid": 7076205,
			"background": 6,
			"cost": 16,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Leech",
			"apply": "Afflict",
			"description": "Your damaging leech abilities also cause your target to become $sAfflicted with a damage over time effect that deals $d10 physical damage every second for $t5 seconds.",
		},
		{
			"name": "Platoon",
			"gid": 6813054,
			"iid": 7070933,
			"background": 3,
			"cost": 21,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "30",
			"apply": "Heal",
			"target": "Group",
			"description": "Heals all group members for $h34.",
		},
		{
			"name": "Post-op",
			"gid": 6839633,
			"iid": 7076206,
			"background": 6,
			"cost": 27,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"apply": "Heal",
			"description": "All your leech effects also heal for $h19 when they expire.",
		},
		{
			"name": "Mortar Support",
			"gid": 6813205,
			"iid": 7070935,
			"background": 3,
			"cost": 34,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "2",
			"cooldown": "20",
			"apply": "Heal",
			"target": "TAoE",
			"description": "TAoE: Affects up to $c6 friends in a $c5 metre radius around the target.<br>A TAoE heal that heals for $h105.",
		},
		{
			"name": "Veteran",
			"gid": 6853697,
			"iid": 7076207,
			"background": 6,
			"cost": 50,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"elite": true,
			"react": "Leech",
			"apply": "Heal,Leech",
			"description": "Whenever you use a leech ability, you gain a counter. When the counter reaches $t7, all group members are healed for $h51 and gain a $h2.6% leech effect for $t4 seconds.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Ground Control",
	"tier": "2",
	"abilities": [
		{
			"name": "Groundwork",
			"gid": 6813235,
			"iid": 7070938,
			"background": 1,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"apply": "Leech",
			"target": "TAoE",
			"description": "TAoE: Affects up to $c6 enemies in a $c5 metre radius around your target.<br>Builds $r1 Assault Rifle Resource.<br>A TAoE attack that deals $d18 physical damage. Up to $t6 friends in the target area receive a $h0.3% leech effect for $t10 seconds.",
		},
		{
			"name": "Improved Groundwork",
			"gid": 6850131,
			"iid": 7076209,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Groundwork",
			"react": "Leech",
			"apply": "Heal",
			"description": "Improves \"Groundwork\" to also heal friendly targets that have an active leech effect for $h7.",
		},
		{
			"name": "Anima Outbreak",
			"gid": 6814952,
			"iid": 7070936,
			"background": 1,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "4",
			"consume": "-1",
			"apply": "Frenzy,Heal",
			"target": "TAoE",
			"description": "TAoE: Affects up to $c6 enemies in a $c5 metre radius around your target.<br>Consumes all Assault Rifle resources.<br>A TAoE $uFrenzy ability that deals $d18-36 physical damage. Up to $t5 friendly targets around each enemy hit are healed for $h37-73. Damage and healing scale based on the number of resources consumed.",
		},
		{
			"name": "Outbreak Alert",
			"gid": 6852643,
			"iid": 7076208,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Anima Outbreak",
			"react": "Heal",
			"description": "Heals all group members for $h15 when you activate \"Anima Outbreak\".",
		},
		{
			"name": "Anima Vessel",
			"gid": 6837273,
			"iid": 7070937,
			"background": 1,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"cooldown": "10",
			"consume": "-1",
			"react": "Afflict",
			"target": "Single",
			"description": "Consumes all Assault Rifle Resources.<br>A single target attack that deals $d57-112 physical damage, based on the number of resources consumed. An effect is placed on the target that returns health to everyone who attacks them for $t6 seconds. If the target is $sAfflicted, the amount of health gained is increased.",
		},
		{
			"name": "Leeching Frenzy",
			"gid": 6852644,
			"iid": 7076210,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Frenzy",
			"apply": "Leech",
			"description": "$uFrenzy abilities also place a leech buff on yourself which lasts $t4 seconds causing any attacks to heal for $h2.0% of the damage dealt.",
		},
		{
			"name": "Reap and Sew",
			"gid": 6815266,
			"iid": 7070939,
			"background": 3,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cooldown": "60",
			"apply": "Leech",
			"target": "Group",
			"description": "Gives all group members a $h12.2% leech effect that lasts $t8 seconds. All group members also receive a leech effect for the same duration which scales based on their Healing Power.<br> <br>Healing from Reap and Sew will be given to each group member's defensive target.",
		},
	]
});
