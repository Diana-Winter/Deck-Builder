﻿// Fist
index = 3;

TSW.Wheel[index].cells.push({
	"name": "Feral",
	"tier": "1",
	"abilities": [
		{
			"name": "Claw",
			"gid": 6430614,
			"iid": 6814415,
			"background": 2,
			"cost": 1,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"target": "Single",
			"description": "Builds $r1 resource for each equipped weapon.<br>A single target attack that deals $d48 physical damage.",
		},
		{
			"name": "Sharp Claws",
			"gid": 5778581,
			"iid": 6814424,
			"background": 6,
			"cost": 1,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Claw",
			"apply": "Afflict",
			"description": "\"Claw\" also causes the target to become $sAfflicted with a damage over time effect that deals $d7 physical damage every second for $t10 seconds.",
		},
		{
			"name": "Hog Wild",
			"gid": 5777283,
			"iid": 6814417,
			"background": 2,
			"cost": 1,
			"type": "Active",
			"active": true,
			"bridge": false,
			"consume": "-1",
			"apply": "Blast",
			"target": "Cone",
			"description": "Cone: Affects up to $c6 enemies in a $c5 metre long $c60 degree cone in front of you.<br>Consumes all Fist Resources.<br>A cone $uBlast attack that deals $d48-92 physical damage, based on the number of resources consumed. Gives you the Savage Sweep effect, causing the next Fist resource consumer you activate to deal $d3-14 physical damage in an area around you.",
		},
		{
			"name": "Killer Instinct",
			"gid": 5778317,
			"iid": 6814422,
			"background": 6,
			"cost": 2,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"apply": "Damage",
			"description": "Whenever you hit, you build a Killer Instinct counter. When there are $t4 counters, your next attack cannot be evaded and will reset the counter. Also increases damage dealt by $t1.5% per counter.",
		},
		{
			"name": "Prey on the Weak",
			"gid": 5784459,
			"iid": 6814418,
			"background": 2,
			"cost": 3,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"react": "Impair",
			"apply": "Burst",
			"target": "Single",
			"description": "Builds $r1 resource for each equipped weapon.<br>A single target $uBurst attack that hits $c3 times, dealing $d16 physical damage per hit. If the target is $sImpaired, this attack builds $r1 additional Fist Resource.",
		},
		{
			"name": "Predator",
			"gid": 5782607,
			"iid": 6814423,
			"background": 6,
			"cost": 4,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"apply": "Damage",
			"description": "Increases damage and healing of Fist abilities by $t10%.",
		},
		{
			"name": "Go for the Throat",
			"gid": 5776227,
			"iid": 6814416,
			"background": 2,
			"cost": 7,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cooldown": "25",
			"react": "Anima Deviation",
			"apply": "Impair,Afflict",
			"target": "Single",
			"description": "A single target attack that deals $d173 physical damage.<br> <br>The target also becomes $sImpaired and unable to activate abilities for $t5 seconds and $sAfflicted with a damage over time effect that deals $d17 physical damage every second for $c10 seconds.<br> <br>Susceptible to $sAnima Deviation.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Primal",
	"tier": "1",
	"abilities": [
		{
			"name": "Lick Your Wounds",
			"gid": 5784457,
			"iid": 6814427,
			"background": 6,
			"cost": 1,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"apply": "HoT",
			"description": "Whenever you hit, you gain a single stack of a heal over time effect that heals $h1 every second per stack for $t3 seconds. This effect can stack up to $t4 times.",
		},
		{
			"name": "Nurture",
			"gid": 5780066,
			"iid": 6814421,
			"background": 3,
			"cost": 1,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"apply": "Heal,HoT",
			"target": "Single",
			"description": "Builds $r1 Fist resource.<br>Heals your defensive target for $h32 and gives them a heal over time effect that heals $h5 every second for $t5 seconds.",
		},
		{
			"name": "Nurturing Gift",
			"gid": 5778314,
			"iid": 6814426,
			"background": 6,
			"cost": 1,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Nurture",
			"description": "Increases the duration of \"Nurture\" by $t5 seconds.",
		},
		{
			"name": "Pack Leader",
			"gid": 5781968,
			"iid": 6814420,
			"background": 4,
			"cost": 2,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "90",
			"description": "Gives all group members a beneficial effect that reduces the chance of performing glancing hits by $t80% for $t10 seconds. This ability does not trigger and is not affected by global recharge time.",
		},
		{
			"name": "Alpha Wolf",
			"gid": 5778710,
			"iid": 6814425,
			"background": 6,
			"cost": 3,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Pack Leader",
			"description": "Reduces the recharge time of \"Pack Leader\" by $t30 seconds.",
		},
		{
			"name": "Wild at Heart",
			"gid": 5780189,
			"iid": 6814419,
			"background": 2,
			"cost": 4,
			"type": "Active",
			"active": true,
			"bridge": false,
			"consume": "-1",
			"apply": "Heal",
			"target": "Single",
			"description": "Consumes all Fist Resources.<br>A single target attack that deals $d88-167 physical damage, based on the number of resources consumed. Gives you the Feral Regrowth effect, causing your next Fist resource consumer to heal you for $h6-30.",
		},
		{
			"name": "Out of the Woods",
			"gid": 5781966,
			"iid": 6814428,
			"background": 6,
			"cost": 7,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"elite": true,
			"react": "Heal",
			"apply": "Heal",
			"description": "Whenever you heal a target above $h80% of their maximum health, you gain a beneficial effect that increases all direct healing done by $h27.5% for $t8 seconds.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "The Wilderness",
	"tier": "2",
	"abilities": [
		{
			"name": "Bear Knuckle",
			"gid": 6942565,
			"iid": 7438137,
			"background": 2,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"react": "Impair",
			"target": "Single",
			"description": "Builds $r1 resource for each equipped weapon.<br>A single target attack that deals $d48 physical damage, or $d56 physical damage if the target is $sImpaired.",
		},
		{
			"name": "Thrill of the Chase",
			"gid": 6942567,
			"iid": 7438115,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"description": "Whenever you hit a target from behind, the recharge time of all movement abilities currently recharging is reduced by $t3 seconds.<br>Additionally, \"Thrill of the Chase\" increases the damage dealt by movement abilities by $t15%.",
		},
		{
			"name": "One-Two",
			"gid": 6942570,
			"iid": 7438136,
			"background": 2,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"consume": "-1",
			"apply": "Burst",
			"target": "Single",
			"description": "Consumes all Fist Resources.<br>A $uBurst attack with two consecutive hits that deal $d24 and $d63-143 physical damage, based on the number of resources consumed. Gives you the Savage Sweep effect, causing the next Fist resource consumer you activate to deal $d3-14 physical damage in an area around you.",
		},
		{
			"name": "Follow Through",
			"gid": 6942571,
			"iid": 7438114,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "One-Two",
			"description": "Increases damage dealt by \"One-Two's\" second hit by $t25%.",
		},
		{
			"name": "Tear 'Em Up",
			"gid": 6942572,
			"iid": 7438135,
			"background": 2,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"consume": "-1",
			"react": "Afflict",
			"apply": "Damage",
			"target": "Single",
			"description": "Consumes all Fist Resources.<br>A single target ability that deals $d82-157 physical damage, based on the number of resources consumed. If the target is $sAfflicted you also gain a beneficial effect that increases damage by $t10% for $t4 seconds. Tear 'Em Up gives you the Feral Regrowth effect, causing your next Fist resource consumer to heal you for $h6-30.",
		},
		{
			"name": "Ferocity",
			"gid": 6942573,
			"iid": 7438112,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Burst,Hit",
			"apply": "Damage",
			"description": "If at least $t2 hits of a $uBurst ability do not glance, you gain one stack of a beneficial effect, which increases damage by $t4% per stack for $t5 seconds. This effect can stack up to $t3 times.",
		},
		{
			"name": "See Red",
			"gid": 6942577,
			"iid": 7438134,
			"background": 2,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cast": "4",
			"cooldown": "25",
			"react": "Anima Deviation",
			"apply": "Impair,Vulnerable",
			"target": "Single",
			"description": "Channeled: Every $t0.2 seconds for $t4 seconds.<br>A channelled attack that deals $d32 physical damage per hit.<br> <br>While channeling, you and your target are rooted to the ground and your target is unable to activate abilities. Also, your target is rooted to the ground for $t8 seconds. If the root effect ends before the channeling ends, the target takes $d308 physical damage.<br> <br>Applies $sVulnerable to Magic. <br> <br>Susceptible to $sAnima Deviation.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "The Outback",
	"tier": "2",
	"abilities": [
		{
			"name": "Salt in the Wound",
			"gid": 6942578,
			"iid": 7438111,
			"background": 6,
			"cost": 9,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Afflict",
			"description": "Whenever you apply $sAfflicted, you deal $d7 physical damage to the target.",
		},
		{
			"name": "Reckless",
			"gid": 6942579,
			"iid": 7438132,
			"background": 4,
			"cost": 12,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "40",
			"apply": "Damage",
			"description": "Gives you a beneficial effect that lasts $t10 seconds, which increases all damage dealt by $t20% and all damage received by $t10%. This ability does not trigger and is not affected by global recharge time.",
		},
		{
			"name": "Bloodsport",
			"gid": 6942580,
			"iid": 7438110,
			"background": 6,
			"cost": 16,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Hit",
			"apply": "Afflict",
			"description": "Whenever you hit a target, it becomes $sAfflicted with a damage over time effect that deals $d2 physical damage per stack for $t3 seconds. This effect stacks up to $t3 times. If you do a glancing hit against the target, this effect is removed.",
		},
		{
			"name": "Cage Fight",
			"gid": 6942581,
			"iid": 7438133,
			"background": 2,
			"cost": 21,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "20",
			"apply": "Afflict",
			"target": "PBAoE",
			"description": "PBAoE: Applied to $c6 enemies in a $c5 metre radius.<br>A PBAoE attack that deals $d36 physical damage. Affected targets also become $sAfflicted with a damage over time effect that deals $d10 physical damage every second for $t3 seconds.",
		},
		{
			"name": "Animal Instinct",
			"gid": 6942582,
			"iid": 7438109,
			"background": 6,
			"cost": 27,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"description": "The Savage Sweep effect deals $t100% additional damage, and hits up to $c5 targets instead of the normal $c3. Affected enemies also become $sAfflicted with a damage over time effect that deals $d1 physical damage every second for $t8 seconds. Increases the healing of Feral Regrowth by $t50%.",
		},
		{
			"name": "Bushwhack",
			"gid": 6942583,
			"iid": 7438131,
			"background": 2,
			"cost": 34,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "35",
			"apply": "Impair,Movement,Evade",
			"target": "Single",
			"description": "Charge: $c15 metre charge to the target. The target must be at least $c3 metres away.<br>You charge your target dealing $d91 physical damage and you gain the Minor Evade Chance effect, which increases Evade Chance by $t10% for $t8 seconds. The target also becomes $sImpaired and unable to activate abilities for $t5 seconds.",
		},
		{
			"name": "Adrenalise",
			"gid": 6942584,
			"iid": 7438108,
			"background": 6,
			"cost": 50,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"elite": true,
			"apply": "Resource",
			"description": "Whenever you activate a Fist builder, you gain a beneficial effect that causes the next Fist builder to build an additional Fist resource. This effect is removed when you use a Fist consumer or glance.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "The Streets",
	"tier": "2",
	"abilities": [
		{
			"name": "Head On",
			"gid": 6942599,
			"iid": 7438130,
			"background": 2,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "2",
			"build": "1",
			"apply": "Blast,Movement",
			"target": "Column",
			"description": "Column Dash: Dash forward $c3 metres, affecting up to $c6 enemies in a $c6 metre wide column along the way.<br>Builds $r1 Resource for each equipped weapon.<br>A column dash $uBlast attack which deals $d26 physical damage. This attack can not be evaded and will not glance.",
		},
		{
			"name": "Hardheaded",
			"gid": 6942600,
			"iid": 7438107,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Head On",
			"description": "Improves \"Head On\" to dash $c6 metres, affect up to $c8 enemies and deal $t25% more damage. \"Head On\" builds $c1 additional Fist Resource if it hits $c3 enemies, $c2 if it hits $c5 enemies, and $c3 if it hits $c7 enemies.",
		},
		{
			"name": "Berserk",
			"gid": 6942601,
			"iid": 7438094,
			"background": 2,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"consume": "-1",
			"target": "PBAoE",
			"description": "Consumes all Fist resources<br>Each resource consumed will give you a counter. Your next hits will cause an additional PBAoE attack dealing $d20 physical damage. Each additional attack will subtract one counter until you run out of counters. \"Berserk\" also gives you the Feral Regrowth effect, causing your next Fist resource consumer to heal you for $h6-30.",
		},
		{
			"name": "Bruising Blast",
			"gid": 6942611,
			"iid": 7438106,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Blast",
			"description": "$uBlast attacks are $t10% more effective.",
		},
		{
			"name": "Savage",
			"gid": 6942612,
			"iid": 7438129,
			"background": 2,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"consume": "-1",
			"react": "Impair",
			"target": "Cone",
			"description": "Cone: Affects up to $c6 enemies in a $c5 metre long $c60 degree cone in front of you.<br>Consumes all Fist Resources.<br>A cone attack that deals $d55-99 physical damage, based on the number of resources consumed. Gives you the Savage Sweep effect, causing the next Fist resource consumer you activate to deal $d3-14 physical damage in an area around you. If any target is $sImpaired it also gives you the Feral Regrowth effect, causing your next Fist resource consumer to heal you for $h6-30.",
		},
		{
			"name": "Concussion",
			"gid": 6942613,
			"iid": 7438105,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Impair",
			"description": "Whenever you apply $sImpaired you perform an additional hit that deals $d41 physical damage.",
		},
		{
			"name": "Gore",
			"gid": 6942614,
			"iid": 7438128,
			"background": 2,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cooldown": "20",
			"react": "Hit",
			"apply": "Afflict,Movement,Evade,Vulnerable",
			"target": "Single",
			"description": "Charge: $c15 metre charge to your target. The target must be at least $c3 metres away.<br>You charge to your target dealing $d173 physical damage to up to $c6 enemies in a $c5 metre radius as you arrive and you gain the Minor Evade Chance effect, which increases Evade Chance by $t10% for $t8 seconds.<br> <br>Affected targets also become $sAfflicted with a damage over time effect that deals $d35 physical damage every second for $t5 seconds. This effect will be refreshed by hits from any attack, however glancing hits will remove it.<br> <br>Applies $sVulnerable to Ranged.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Warming Up",
	"tier": "2",
	"abilities": [
		{
			"name": "Surgical Steel",
			"gid": 6942615,
			"iid": 7438127,
			"background": 3,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"consume": "-1",
			"apply": "Heal,HoT,Burst",
			"target": "Single",
			"description": "Consumes all Fist Resources.<br>A $uBurst heal that heals the defensive target $t3 times for $h19-37 per application and gives a heal over time effect that heals for $h9-18 every second for $t4 seconds. Heal effects scale based on the number of resources consumed. Gives you the Savage Sweep effect, causing the next Fist resource consumer you activate to deal $d3-14 physical damage in an area around you.",
		},
		{
			"name": "Hot Iron",
			"gid": 6942616,
			"iid": 7438104,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Heal",
			"apply": "Heal",
			"description": "Whenever you apply a direct heal, you build a Hot Iron counter. When there are $t7 counters, your next direct healing ability will heal for an additional $h50%.",
		},
		{
			"name": "Cauterise",
			"gid": 6942617,
			"iid": 7438126,
			"background": 3,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"apply": "Heal,HoT",
			"target": "Single",
			"description": "Builds 1 Fist Resource.<br>Heals the defensive target for $h40 and gives a heal over time effect that heals $h3 every second for $t3 seconds. This effect can stack up to $t3 times.",
		},
		{
			"name": "Healing Sparks",
			"gid": 6942834,
			"iid": 7438102,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Burst",
			"apply": "HoT",
			"description": "Whenever you activate a $uBurst ability, you give the defensive target a heal over time effect that heals for $h8 every second for $t4 seconds.",
		},
		{
			"name": "Creature Comfort",
			"gid": 6942991,
			"iid": 7438125,
			"background": 3,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"consume": "-1",
			"apply": "HoT",
			"target": "Single",
			"description": "Consumes all Fist resources.<br>Your defensive target gains a heal over time effect that heals for $h17-32 every second for $t6 seconds, based on the number of resources consumed. Gives the Feral Regrowth effect, causing your next Fist resource consumer to heal you for $h6-30.",
		},
		{
			"name": "Glimmer of Hope",
			"gid": 6943015,
			"iid": 7438103,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "HoT",
			"apply": "Heal",
			"description": "Your heal over time effects have a $t15% chance to heal you for $h20 when they apply their effect.",
		},
		{
			"name": "Radiance",
			"gid": 6943017,
			"iid": 7438124,
			"background": 4,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cooldown": "40",
			"react": "HoT",
			"apply": "Critical,HoT",
			"description": "For the next $t6 seconds, all your heal over time effects are guaranteed to critically heal and heal for $h50% more. This ability does not trigger and is not affected by global recharge time.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Heat of Battle",
	"tier": "2",
	"abilities": [
		{
			"name": "Renewal",
			"gid": 6943018,
			"iid": 7438101,
			"background": 6,
			"cost": 9,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Impair",
			"apply": "HoT",
			"description": "Whenever you hit an $sImpaired target, you apply a detrimental effect which causes anyone attacking the target to gain a heal over time effect that heals for $h6 every second for $t4 seconds.",
		},
		{
			"name": "Empathy",
			"gid": 6943027,
			"iid": 7438123,
			"background": 3,
			"cost": 12,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "25",
			"react": "HoT",
			"apply": "Heal",
			"target": "Single",
			"description": "Heals the defensive target for $h126, or $h145 if the target has a heal over time effect active.",
		},
		{
			"name": "Restraint",
			"gid": 6943028,
			"iid": 7438100,
			"background": 6,
			"cost": 16,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Hit",
			"apply": "Impair",
			"description": "Whenever you attack, you build a Restraint counter. When you have $t6 counters, your next attack causes the target to become $sImpaired and unable to activate abilities for $t3 seconds. If you perform a glancing hit, the counter will be reset.",
		},
		{
			"name": "Vigour",
			"gid": 6943029,
			"iid": 7438122,
			"background": 3,
			"cost": 21,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "20",
			"apply": "Heal",
			"target": "AoE",
			"description": "Places a healing area at the targeted point that lasts $t5 seconds. Every second it heals up to $c5 friends in a $c5 metre radius for $h22.",
		},
		{
			"name": "Making Amends",
			"gid": 6943030,
			"iid": 7438099,
			"background": 6,
			"cost": 27,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "HoT",
			"description": "Your heal over time effects are $t10% more effective.",
		},
		{
			"name": "Muzzle",
			"gid": 6943031,
			"iid": 7438121,
			"background": 2,
			"cost": 34,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "45",
			"apply": "Impair",
			"target": "Single",
			"description": "A single target attack that deals $d91 physical damage. The target also becomes $sImpaired and unable to activate abilities for $t5 seconds. This ability has a $c15 metre range.",
		},
		{
			"name": "Empowerment",
			"gid": 6943034,
			"iid": 7438098,
			"background": 6,
			"cost": 50,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"elite": true,
			"react": "HoT,Critical",
			"apply": "Heal",
			"description": "Whenever a heal over time effect critically hits, the target is healed for $h46.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Play With Fire",
	"tier": "2",
	"abilities": [
		{
			"name": "Shelter",
			"gid": 6943036,
			"iid": 7438120,
			"background": 3,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"apply": "Heal,HoT",
			"target": "PBAoE",
			"description": "PBAoE: Affects up to $c6 friends in a $c5 metre radius around you.<br>Builds $r1 Fist Resource.<br>A PBAoE heal that heals for $h13. Affected targets are also given a heal over time effect that heals for $h5 every second for $t3 seconds.",
		},
		{
			"name": "Trespass",
			"gid": 6943037,
			"iid": 7438097,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Shelter",
			"description": "\"Shelter\" deals $d4 physical damage to up to $c6 targets in a $c5 metre radius around you.",
		},
		{
			"name": "Blast of Light",
			"gid": 6943038,
			"iid": 7438119,
			"background": 3,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"consume": "-1",
			"apply": "Heal,HoT,Blast",
			"target": "Cone",
			"description": "Cone: Affects up to $c6 friends in a $c10 metre long $c120 degree cone in front of you.<br>Consumes all Fist Resources.<br>A cone $uBlast heal that heals for $h19-38. You are healed for $h14-28. Affected targets also gain a heal over time effect that heals for $h7-13 every second for $t6 seconds. You gain a heal over time effect that heals for $h3-7 every second for $t6 seconds. Heal effects scale based on the number of resources consumed.",
		},
		{
			"name": "Positive Reaction",
			"gid": 6943039,
			"iid": 7438096,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Blast",
			"apply": "Heal",
			"description": "Whenever you hit with a $uBlast ability, your defensive target gains a reactive heal effect that heals for $h11 the next time it is attacked. If you heal with a $uBlast you and your defensive target will get the same reactive heal effect.",
		},
		{
			"name": "Inner Spark",
			"gid": 6943040,
			"iid": 7438118,
			"background": 3,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"consume": "-1",
			"apply": "Heal",
			"target": "Single",
			"description": "Consumes all Fist Resources.<br>You give your defensive target a reactive heal effect that heals for $h7-13 whenever it is attacked, based on the number of resources consumed. This effect has a duration of $t10 seconds.",
		},
		{
			"name": "Kindle",
			"gid": 6943041,
			"iid": 7438095,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Inner Spark",
			"description": "\"Inner Spark\" instead heals for $h8-16 whenever your defensive target is attacked. Increases the duration of \"Inner Spark\" by $t5 seconds.",
		},
		{
			"name": "Fired Up",
			"gid": 6943042,
			"iid": 7438116,
			"background": 3,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cooldown": "20",
			"apply": "Heal,HoT",
			"target": "Group",
			"description": "Heals all group members for $h247. Also applies a heal over time effect that heals for $h38 every second for $t4 seconds.",
		},
	]
});