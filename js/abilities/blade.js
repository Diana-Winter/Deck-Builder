﻿// Blade
index = 1;

TSW.Wheel[index].cells.push({
	"name": "Method",
	"tier": "1",
	"abilities": [
		{
			"name": "Delicate Strike",
			"gid": 6391499,
			"iid": 6814461,
			"background": 2,
			"cost": 1,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"target": "Single",
			"description": "Builds $r1 resource for each weapon equipped.<br>A single target attack that deals $d48 physical damage.",
		},
		{
			"name": "Delicate Precision",
			"gid": 5777458,
			"iid": 6814466,
			"background": 6,
			"cost": 1,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Delicate Precision",
			"apply": "Penetrate",
			"description": "Increases the Penetration Chance of \"Delicate Strike\" by $t10%.",
		},
		{
			"name": "Balanced Blade",
			"gid": 5778136,
			"iid": 6814459,
			"background": 2,
			"cost": 1,
			"type": "Active",
			"active": true,
			"bridge": false,
			"consume": "-1",
			"react": "Impair",
			"apply": "Resource",
			"target": "PBAoE",
			"description": "PBAoE: Affects up to $c6 enemies in a $c5 metre radius around you.<br>Consumes all Blade Resources.<br>A PBAoE attack that deals $d45-89 physical damage, based on the number of resources consumed. Builds $r2 Blade Resources for if any affected target are $sImpaired.",
		},
		{
			"name": "Expose Weakness",
			"gid": 5777462,
			"iid": 6814467,
			"background": 6,
			"cost": 2,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Impair",
			"apply": "Penetrate",
			"description": "Whenever you apply $sImpaired, you gain the Minor Penetration Chance effect, which increases you Penetration Chance by $c15% for $t8 seconds.",
		},
		{
			"name": "Dancing Blade",
			"gid": 5780051,
			"iid": 6814460,
			"background": 2,
			"cost": 3,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "2.5",
			"consume": "-1",
			"apply": "Focus",
			"target": "Single",
			"description": "Channelled: Every $t0.5 seconds for $t2.5 seconds.<br>Consumes all Blade Resources.<br>A channelled $uFocus attack that deals $d41-61 physical damage, based on the number of resources consumed.",
		},
		{
			"name": "Sharp Blades",
			"gid": 5777461,
			"iid": 6814468,
			"background": 6,
			"cost": 4,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"apply": "Damage",
			"description": "Increases damage dealt by Blade abilities by $t10%.",
		},
		{
			"name": "Stunning Swirl",
			"gid": 5780017,
			"iid": 6814462,
			"background": 2,
			"cost": 7,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cooldown": "25",
			"apply": "Impair,Vulnerable",
			"target": "PBAoE",
			"description": "PBAoE: Affects up to $c6 enemies in a $c5 metre area around you.<br> <br>A PBAoE attack that deals $d345 physical damage. Affected targets also become $sImpaired and unable to act for $t3 seconds.<br> <br>Applies $sVulnerable to Ranged.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Technique",
	"tier": "1",
	"abilities": [
		{
			"name": "Immortal Spirit",
			"gid": 5777459,
			"iid": 6814470,
			"background": 6,
			"cost": 1,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Penetrate",
			"apply": "HoT",
			"description": "Whenever you penetrate, you gain a heal over time effect that heals for $h10 every second for $t5 seconds.",
		},
		{
			"name": "Blade Torrent",
			"gid": 5779785,
			"iid": 6814463,
			"background": 2,
			"cost": 1,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"apply": "Frenzy,Hate",
			"target": "PBAoE",
			"description": "PBAoE: Affects up to $c6 enemies in a $c5 metre radius around you.<br>Builds $r1 resource for each equipped weapon.<br>A PBAoE $uFrenzy attack that deals $d24 physical damage. This attack generates a high amount of hate.",
		},
		{
			"name": "Perfect Storm",
			"gid": 6391718,
			"iid": 6814471,
			"background": 6,
			"cost": 1,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Blade Torrent",
			"apply": "Afflict",
			"description": "\"Blade Torrent\" also causes the target to become $sAfflicted with a damage over time effect that deals $d7 physical damage every second for $t8 seconds.",
		},
		{
			"name": "Martial Discipline",
			"gid": 5775985,
			"iid": 6814464,
			"background": 4,
			"cost": 2,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "45",
			"apply": "Defense",
			"description": "You gain the Major Defence effect, which increases the chance that attacks against you will glance by $t50% for $t6 seconds. This ability does not trigger and is not affected by global recharge time.",
		},
		{
			"name": "Regeneration",
			"gid": 5777473,
			"iid": 6814465,
			"background": 6,
			"cost": 3,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Martial Discipline",
			"apply": "HoT",
			"description": "\"Martial Discipline\" also gives you a heal over time effect, which heals for $h57 every second for $t10 seconds. This heal over time effect cannot critically heal.",
		},
		{
			"name": "Surging Blades",
			"gid": 5780055,
			"iid": 6814458,
			"background": 2,
			"cost": 4,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "12",
			"apply": "Movement",
			"target": "Column",
			"description": "Column Dash: Dash forward $c10 metres, affecting up to $c6 enemies in a $c6 metre wide column along the way.<br>A column dash attack that deals $d47 physical damage.",
		},
		{
			"name": "Fluid Defence",
			"gid": 6086145,
			"iid": 6814469,
			"background": 6,
			"cost": 7,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"elite": true,
			"react": "Defense,Penetrate",
			"apply": "Damage",
			"description": "Whenever you receive a glancing hit, you gain the Major Ward effect, which reduces the damage you take by $t25% for $t6 seconds.<br>Whenever you penetrate, you gain a beneficial effect that increases all damage dealt by $t8% for $t10 seconds.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Wind through Grass",
	"tier": "2",
	"abilities": [
		{
			"name": "Grass Cutter",
			"gid": 7080559,
			"iid": 7554778,
			"background": 2,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"react": "Afflict",
			"target": "Single",
			"description": "Builds $r1 resource for each equipped weapon.<br>A single target attack that deals $d46 physical damage, or $d51 physical damage if the target is $sAfflicted.",
		},
		{
			"name": "Twist the Knife",
			"gid": 7080596,
			"iid": 7519355,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Penetrate",
			"apply": "Damage",
			"description": "Whenever you penetrate you also gain $t1 stack of a beneficial effect, which increases all damage dealt by $t4% for $t10 seconds. This effect can stack up to $t3 times.",
		},
		{
			"name": "Chop Shop",
			"gid": 7080561,
			"iid": 7554775,
			"background": 2,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "2.5",
			"consume": "-1",
			"apply": "Focus",
			"target": "PBAoE",
			"description": "Channeled: Every $t0.5 seconds for $t2.5 seconds.<br>PBAoE: Affects up to $c6 enemies in a $c5 metre area around you.<br>Consumes all Blade Resources.<br>A channelled PBAoE $uFocus attack that deals $d20-31 physical damage per hit, based on the number resources consumed.",
		},
		{
			"name": "Seven and a Half Samurai",
			"gid": 7080597,
			"iid": 7519357,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Focus",
			"description": "$uFocus abilities are $t10% more effective.",
		},
		{
			"name": "Destiny",
			"gid": 7080570,
			"iid": 7554776,
			"background": 2,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"consume": "-1",
			"react": "Afflict",
			"target": "Single",
			"description": "Consumes all Blade Resources.<br>A single target attack that deals $d55-143 physical damage, based on the number of resources consumed. If the target is $sAfflicted, it also applies a damage over time effect that deals $d12 physical damage every second for $t4 seconds.",
		},
		{
			"name": "Destiny Fulfilled",
			"gid": 7080598,
			"iid": 7554798,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Destiny",
			"description": "Whenever you hit a target that has the Damage over Time effect from \"Destiny,\" the effect is removed, dealing $d78 physical damage.",
		},
		{
			"name": "Four Seasons",
			"gid": 7080571,
			"iid": 7554777,
			"background": 2,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cast": "2.5",
			"cooldown": "20",
			"apply": "Penetrate,Vulnerable",
			"target": "Single",
			"description": "Channelled: Every $t0.5 seconds for $t2.5 seconds.<br>A channelled attack that deals $d44 physical damage per hit for the first four hits. The final hit will deal $d255 physical damage. All hits will penetrate.<br> <br>This ability has a $c15 metre range.<br> <br>Applies $sVulnerable to Magic.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Tearing of Sky",
	"tier": "2",
	"abilities": [
		{
			"name": "Fatal Flourish",
			"gid": 7080599,
			"iid": 7519351,
			"background": 6,
			"cost": 9,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Afflict",
			"apply": "Penetrate",
			"description": "Whenever you finish activating an ability on a target you have $sAfflicted, you build a Fatal Flourish counter. As soon as you reach $t5 counters, the count will reset and you will gain a beneficial effect which increases your Penetration Chance by $t20% for $t5 seconds. Fatal Flourish counters cannot be gained while this effect is active.",
		},
		{
			"name": "Spiral of Death",
			"gid": 7080572,
			"iid": 7554780,
			"background": 2,
			"cost": 12,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "15",
			"apply": "Movement,Defense",
			"target": "TAoE",
			"description": "You teleport to the target and hit up to $c6 enemies in a $c5 metre radius, dealing $d60 physical damage and you gain the Minor Defence effect, which increases the chance that attacks against you will glance by $t10% for $t8 seconds. The target must be at least $c3 metres away.",
		},
		{
			"name": "Incision",
			"gid": 7080602,
			"iid": 7519348,
			"background": 6,
			"cost": 16,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Penetrate",
			"apply": "Afflict",
			"description": "Whenever you penetrate, you also cause the target to become $sAfflicted with a damage over time effect that deals $d10 physical damage every second for $t3 seconds.",
		},
		{
			"name": "Trial by Swords",
			"gid": 7080573,
			"iid": 7554781,
			"background": 2,
			"cost": 21,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "45",
			"apply": "Impair",
			"target": "Single",
			"description": "A single target attack that deals $d91 physical damage and causes the target to become $sImpaired and unable to act for $t3 seconds.",
		},
		{
			"name": "Double Dash",
			"gid": 7080603,
			"iid": 7519354,
			"background": 6,
			"cost": 27,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"description": "Reduces the recharge time of all dash abilities by $t50%.",
		},
		{
			"name": "Steel Echo",
			"gid": 7080574,
			"iid": 7554791,
			"background": 4,
			"cost": 34,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "60",
			"description": "You gain a beneficial effect that causes all your Blade attacks for $t10 seconds to perform an additional hit dealing $d31 physical damage. This additional hit is treated as a full hit. This ability does not trigger and is not affected by global recharge time.",
		},
		{
			"name": "Flight of Daggers",
			"gid": 7080604,
			"iid": 7519350,
			"background": 6,
			"cost": 50,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"elite": true,
			"apply": "Afflict",
			"description": "Whenever you attack, you build a Flight of Daggers counter. When the counter reaches $t5, you will hit up to $c6 enemies in a $c5 metre radius around you, dealing $d41 physical damage. Affected targets also become $sAfflicted with a damage over time effect that deals $d8 physical damage every second for $t5 seconds.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Crossing River's Edge",
	"tier": "2",
	"abilities": [
		{
			"name": "Bamboo Cutter",
			"gid": 7080575,
			"iid": 7554782,
			"background": 2,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"apply": "Frenzy",
			"target": "PBAoE",
			"description": "PBAoE: Applied to $c6 enemies in a $c5 metre radius around you.<br>Builds $r1 resource for each Equipped weapon.<br>A PBAoE $uFrenzy attack that deals $d24 physical damage.",
		},
		{
			"name": "Sudden Return",
			"gid": 7080605,
			"iid": 7519345,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Penetrate",
			"description": "Whenever you penetrate, you also perform an additional hit for $d28 physical damage.",
		},
		{
			"name": "Five Petal Lotus",
			"gid": 7080579,
			"iid": 7554784,
			"background": 2,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"consume": "-1",
			"target": "TAoE",
			"description": "TAoE: Applied to $c6 enemies in a $c5 metre radius.<br>Consumes all Blade Resources.<br>A TAoE attack that deals $d45-89 physical damage, based on the number of resources consumed.",
		},
		{
			"name": "Fortunate Strike",
			"gid": 7080607,
			"iid": 7519346,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Afflict",
			"description": "Whenever you hit an $sAfflicted target, there is a $t10% chance you will perform an additional hit that deals $d69 physical damage.",
		},
		{
			"name": "Clearing the Path",
			"gid": 7080580,
			"iid": 7554783,
			"background": 2,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"consume": "-1",
			"react": "Afflict",
			"apply": "Penetrate",
			"target": "PBAoE",
			"description": "PBAoE: Applied to up to $c6 enemies within a $c5 metre radius around you.<br>Consumes all Blade Resources.<br>A PBAoE attack that deals $d41-85 physical damage, based on the number of resources consumed. This attack has a $t40% additional chance to penetrate any $sAfflicted targets it hits.",
		},
		{
			"name": "Voracity",
			"gid": 7080610,
			"iid": 7519344,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Frenzy",
			"apply": "Penetrate",
			"description": "Increases Penetration Chance of $uFrenzy abilities by $t7.5%.",
		},
		{
			"name": "Master's House",
			"gid": 7080581,
			"iid": 7554785,
			"background": 4,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cooldown": "35",
			"apply": "Damage",
			"description": "Creates a $c15 metre radius area at your feet, which lasts $t10 seconds. While you are inside this area, your movement speed is increased by $t25%, damage is increased by $t20%, and you are immune to root and snare effects. This ability does not trigger and is not affected by global recharge time.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Running of the Jagged",
	"tier": "2",
	"abilities": [
		{
			"name": "Brandish",
			"gid": 7080582,
			"iid": 7554787,
			"background": 2,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "2.5",
			"cooldown": "10",
			"consume": "-1",
			"apply": "Focus,Hate",
			"target": "Single",
			"description": "Channelled: Every $t0.5 seconds for $t2.5 seconds.<br>Consumes all Blade Resources.<br>A channelling $uFocus attack that deals $d40-58 physical damage per hit, based on the number of resources consumed. While you channel, you take $t5% less damage per resource spent. This ability generates additional hate.",
		},
		{
			"name": "Brandishing Support",
			"gid": 7080611,
			"iid": 7554799,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Brandish",
			"apply": "Defense",
			"description": "\"Brandish\" also increases your Defence Rating by $c40 per resource spent while you channel. Its recharge time is reduced by $t5 seconds.",
		},
		{
			"name": "Matador",
			"gid": 7080583,
			"iid": 7554788,
			"background": 2,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"apply": "Defense",
			"target": "Single",
			"description": "Builds $r1 resource for each equipped weapon.<br>A single target attack that deals $d46 physical damage. Also gives you $t1 stack of the Defence rating effect, which increases your Defence Rating by $c40 per stack for $t8 seconds. This effect can stack up to $t5 times.",
		},
		{
			"name": "Riposte",
			"gid": 7080612,
			"iid": 7519342,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Defense",
			"description": "Whenever you are glanced, you hit the attacker, dealing $d26 physical damage.",
		},
		{
			"name": "Binding Wounds",
			"gid": 7080584,
			"iid": 7554786,
			"background": 2,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"consume": "-1",
			"react": "Impair",
			"apply": "Afflict,Hate",
			"target": "Single",
			"description": "Consumes all Blade Resources.<br>A single target attack that deals $d90-178 physical damage, based on the number of resources consumed. If the target is $sImpaired, it becomes $sAfflicted with a damage over time effect that deals $d7 physical damage every second for $t3 seconds. This ability generates additional hate.",
		},
		{
			"name": "Finish the Movement",
			"gid": 7080613,
			"iid": 7519340,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Focus",
			"apply": "Resource",
			"description": "Whenever you finish channelling a $uFocus ability, you gain a beneficial effect which causes your next $uFocus ability to generate $r1 resource for your primary weapon. If you already have the maximum available resources when this effect triggers, you will instead perform an additional hit dealing $d21 physical damage to the target.",
		},
		{
			"name": "Silver Streak",
			"gid": 7080586,
			"iid": 7554789,
			"background": 4,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cooldown": "35",
			"react": "Hit",
			"apply": "Defense,Heal",
			"description": "Gives you a beneficial effect that lasts $t8 seconds. Cleanses $sHindered and you receive a $t100% resistance to $sHindered and $sImpaired. Silver Streak increases movement speed by $t10%. Whenever you hit, you heal for $h2.5% of your maximum health. Whenever you hit, you gain a Minor Defence effect, which increases the chance that attacks against you will glance by $t10% for $t8 seconds. This ability does not trigger and is not affected by global recharge time.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Sharpening the Senses",
	"tier": "2",
	"abilities": [
		{
			"name": "Tipped Scales",
			"gid": 7080614,
			"iid": 7519467,
			"background": 6,
			"cost": 9,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Impair",
			"apply": "HoT",
			"description": "Whenever you hit an $sImpaired target, you gain a heal over time effect that heals for $h22 every second for $t6 seconds.",
		},
		{
			"name": "Saving Grace",
			"gid": 7080587,
			"iid": 7561922,
			"background": 4,
			"cost": 12,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "15",
			"apply": "Movement,Defense",
			"description": "Charge: $c20 metre charge to your defensive target. The target must be at least $t3 metres away.<br>You charge to a defensive target and give it a beneficial effect causing the next attack against it to deal $t90% less damage and you gain the Minor Defence effect, which increases the chance that attacks against you will glance by $t10% for $t8 seconds.",
		},
		{
			"name": "Stave Off",
			"gid": 7080616,
			"iid": 7519335,
			"background": 6,
			"cost": 16,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Defense",
			"apply": "Impair",
			"description": "Whenever you are glanced, there is a $t10% chance that your attacker becomes $sImpaired and unable to act for $t5 seconds.",
		},
		{
			"name": "Point of Harmony",
			"gid": 6960955,
			"iid": 7554779,
			"background": 3,
			"cost": 21,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "3",
			"cooldown": "80",
			"apply": "Heal",
			"description": "Channelled: Every $t0.5 seconds for $t3 seconds.<br>A channelled heal that heals you for $h5% of you maximum health per tick.",
		},
		{
			"name": "On Guard",
			"gid": 7080617,
			"iid": 7519338,
			"background": 6,
			"cost": 27,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Impair",
			"apply": "Defense",
			"description": "Whenever you apply $sImpaired, you also gain $t3 stacks of the Defence Rating effect, which increases Defence Rating by $c40 per stack for $t8 seconds. This effect can stack up to $t5 times.",
		},
		{
			"name": "Sling Blade",
			"gid": 7080588,
			"iid": 7554790,
			"background": 2,
			"cost": 34,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "15",
			"apply": "Afflict",
			"target": "Single",
			"description": "Throws a blade at the target dealing $d93 physical damage and causes the target to become $sAfflicted with a damage over time effect that deals $d6 physical damage every second for $t5 seconds. Generates a large amount of hate.",
		},
		{
			"name": "Sixth Sense",
			"gid": 7080618,
			"iid": 7519337,
			"background": 6,
			"cost": 50,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"elite": true,
			"react": "Defense",
			"apply": "Heal",
			"description": "Whenever you are glanced, you build a Sixth Sense Counter. When there are $t6 counters, your next attack will perform an additional hit that deals $d233 and heals you for $h10% of your maximum health.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "The Cutting Artist",
	"tier": "2",
	"abilities": [
		{
			"name": "Forking Paths",
			"gid": 7080589,
			"iid": 7554793,
			"background": 2,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"react": "Afflict",
			"apply": "Heal",
			"target": "PBAoE",
			"description": "PBAoE: Affects up to $c6 enemies within a $c5 metre radius around you.<br>Builds $r1 Resource for Each equipped weapon.<br>A PBAoE attack that deals $d24 physical damage. For every affected target that is $sAfflicted, you are healed for $h8.",
		},
		{
			"name": "Enervate",
			"gid": 7080619,
			"iid": 7519466,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Defense",
			"apply": "Afflict",
			"description": "Whenever you are glanced, you cause the attacker to become $sAfflicted with a damage over time effect that deals $d12 physical damage every second for $t5 seconds.",
		},
		{
			"name": "Crimson Theatre",
			"gid": 7080591,
			"iid": 7554792,
			"background": 2,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "10",
			"consume": "-1",
			"apply": "Hate",
			"target": "AoE",
			"description": "Consumes all Blade Resources.<br>Places an area at your feet that lasts for $t10 seconds.<br>Every second it will hit up to $c6 enemies in a $c5 metre radius, dealing $d7-15 physical damage, based on the number of resources consumed. This ability generates additional hate.",
		},
		{
			"name": "Perseverance",
			"gid": 7080620,
			"iid": 7554797,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Frenzy",
			"apply": "Heal",
			"description": "Whenever you activate a $uFrenzy ability, you are healed for $h8 health.",
		},
		{
			"name": "Steel Palace",
			"gid": 7080594,
			"iid": 7554794,
			"background": 2,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"consume": "-1",
			"react": "Afflict",
			"apply": "Frenzy",
			"target": "PBAoE",
			"description": "PBAoE: Affects $c6 enemies in a $c5 metre radius around you.<br>Consumes all Blade Resources.<br>A PBAoE $uFrenzy attack that deals $d44-87 physical damage, based on the number of resources consumed. If any affected targets are $sAfflicted, you gain the Minor Ward effect, which reduces all damage received by $t7.5% for $t8 seconds.",
		},
		{
			"name": "Shadow Play",
			"gid": 7565178,
			"iid": 7519464,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Crimson Theatre",
			"apply": "Defense",
			"description": "\"Crimson Theatre\" also grants you the Minor Defence effect, which increases the chance that attacks against you will glance by $t10% for $t8 seconds.",
		},
		{
			"name": "The Art of War",
			"gid": 7080595,
			"iid": 7554795,
			"background": 2,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cooldown": "35",
			"apply": "Impair,Defense",
			"target": "PBAoE",
			"description": "PBAoE: Affects up to $c6 enemies in a $c5 metre radius around you.<br>A PBAoE attack that deals $d328 physical damage and causes each target hit to be forced to attack you for $t5 seconds. Targets hit also become $sImpaired and unable to act for $t1 second. For each affected target, the next $t2 attacks against you will glance, up to a maximum of $c10.",
		},
	]
});
