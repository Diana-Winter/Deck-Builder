﻿// Elemental
index = 6;

TSW.Wheel[index].cells.push({
	"name": "Spark",
	"tier": "1",
	"abilities": [
		{
			"name": "Shock",
			"gid": 6307194,
			"iid": 6814168,
			"background": 5,
			"cost": 1,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"build": "1",
			"target": "Single",
			"description": "Builds $r1 resource for each equipped weapon.<br>A single target attack that deals $d48 magical damage.",
		},
		{
			"name": "Volatile Current",
			"gid": 6307554,
			"iid": 6814209,
			"background": 6,
			"cost": 1,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Shock",
			"apply": "Afflict",
			"description": "Whenever you hit with \"Shock\", the target also becomes $sAfflicted with a damage over time effect that deals $d7 magical damage every second for $t10 seconds.",
		},
		{
			"name": "Combust",
			"gid": 6307245,
			"iid": 6814165,
			"background": 5,
			"cost": 1,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1.5",
			"consume": "2",
			"react": "Hinder",
			"apply": "Resource",
			"target": "Single",
			"description": "Consumes $r2 Elemental Resources.<br>A single target attack that deals $d171 magical damage. The Elemental Resource cost is reduced by $r1 when attacking $sHindered targets.",
		},
		{
			"name": "Rapid Combustion",
			"gid": 6307479,
			"iid": 6814208,
			"background": 6,
			"cost": 2,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Combust",
			"description": "Reduces the activation time of \"Combust\" $t0.5 seconds",
		},
		{
			"name": "Electrical Storm",
			"gid": 6307497,
			"iid": 6814166,
			"background": 5,
			"cost": 3,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1.5",
			"consume": "3",
			"apply": "Chain",
			"target": "Chain",
			"description": "$uChain: Jumps up to $c5 metres $c5 times, hitting up to $c6 enemies.<br>Consumes $r3 Elemental Resources.<br>A $uChain attack that deals $d95 magical damage.",
		},
		{
			"name": "Elemental Precision",
			"gid": 6307540,
			"iid": 6814207,
			"background": 6,
			"cost": 4,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"apply": "Damage",
			"description": "Increases damage dealt by Elementalism abilities by $t10%.",
		},
		{
			"name": "Molten Earth",
			"gid": 6307505,
			"iid": 6814167,
			"background": 5,
			"cost": 7,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cooldown": "25",
			"react": "Anima Deviation",
			"apply": "Hinder",
			"target": "Single",
			"description": "A single target attack that deals $d345 magical damage.<br> <br>The target also becomes $sHindered and unable to move for $t8 seconds.<br> <br>Susceptible to $sAnima Deviation.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "React",
	"tier": "1",
	"abilities": [
		{
			"name": "Mind Over Matter",
			"gid": 6307516,
			"iid": 6814212,
			"background": 6,
			"cost": 1,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Critical",
			"apply": "Afflict",
			"description": "Whenever you critically hit, the target also becomes $sAfflicted with a damage over time effect that deals $d9 magical damage every second for $t5 seconds.",
		},
		{
			"name": "Ignite",
			"gid": 6307510,
			"iid": 6814170,
			"background": 5,
			"cost": 1,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"target": "Single",
			"description": "Builds $r1 resource for each equipped weapon.<br>A single target attack that deals $d46 magical damage, or $d53 magical damage if you have no Elemental Resources.",
		},
		{
			"name": "Elemental Force",
			"gid": 6307518,
			"iid": 6814210,
			"background": 6,
			"cost": 1,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"apply": "Critical",
			"description": "Whenever you finish activating a damaging ability, you build an Elemental Force counter. When you have $t5 counters, the count will reset and you will gain a beneficial effect which increases your Critical Chance by $t20% for $t5 seconds. Elemental Force counters cannot be gained while this effect is active.",
		},
		{
			"name": "Anima Charge",
			"gid": 6802861,
			"iid": 6814169,
			"background": 4,
			"cost": 2,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "0.5",
			"cooldown": "30",
			"apply": "Resource",
			"description": "You receive a beneficial effect that causes the next Elemental resource consumer you activate within $t20 seconds to cost no resources. This ability does not trigger and is not affected by global recharge time.",
		},
		{
			"name": "High Voltage",
			"gid": 6307556,
			"iid": 6814211,
			"background": 6,
			"cost": 3,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Anima Charge",
			"apply": "Critical",
			"description": "Improves \"Anima Charge\" to also causes the next Elemental resource consumer you activate to critically hit.",
		},
		{
			"name": "Thor's Hammer",
			"gid": 6307512,
			"iid": 6814171,
			"background": 5,
			"cost": 4,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "2",
			"consume": "5",
			"apply": "Strike",
			"target": "Single",
			"description": "Consumes $r5 Elemental Resources.<br>A single target $uStrike attack that deals $d255 magical damage.",
		},
		{
			"name": "Toxic Affinity",
			"gid": 6307564,
			"iid": 6814213,
			"background": 6,
			"cost": 7,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"elite": true,
			"description": "Increases the duration of $sAfflicted effects you apply by $t35%. $sAfflicted effects you apply have a $t20% increased chance to critically hit.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Zero Crossing",
	"tier": "2",
	"abilities": [
		{
			"name": "Electrical Bolt",
			"gid": 6863498,
			"iid": 7070909,
			"background": 5,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"build": "1",
			"react": "Hinder",
			"apply": "Resource",
			"target": "Single",
			"description": "Builds $r1 resource for each equipped weapon.<br>A single target attack that deals $d48 magical damage. If the target is $sHindered this attack generates an additional Elemental Resource.",
		},
		{
			"name": "High Boltage",
			"gid": 6863503,
			"iid": 7076254,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Electrical Bolt",
			"apply": "Critical",
			"description": "Increases the critical chance of \"Electrical Bolt\" by $t10%.",
		},
		{
			"name": "Flame Strike",
			"gid": 6863497,
			"iid": 7070908,
			"background": 5,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"consume": "2",
			"apply": "Strike",
			"target": "Single",
			"description": "Consumes $r2 Elemental Resources.<br>A single target $uStrike attack that deals $d126 magical damage.",
		},
		{
			"name": "Violent Strikes",
			"gid": 6863504,
			"iid": 7076255,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Strike",
			"apply": "Critical",
			"description": "Increases the critical chance of your $uStrike abilities by $t7.5%.",
		},
		{
			"name": "Blaze",
			"gid": 6863496,
			"iid": 7070907,
			"background": 5,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1.5",
			"consume": "3",
			"react": "Afflict",
			"target": "Single",
			"description": "Consumes $r3 Elemental Resources.<br>A single target attack that deals $d182 magical damage, or $d200 magical damage to $sAfflicted targets.",
		},
		{
			"name": "Aidelon",
			"gid": 6863505,
			"iid": 7076253,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Blaze",
			"react": "Afflict",
			"apply": "Critical",
			"description": "\"Blaze\" has a $t40% increased chance to critically hit $sAfflicted targets.",
		},
		{
			"name": "Power Line-Voltaic Detonation",
			"gid": 6863495,
			"iid": 7070905,
			"background": 5,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cooldown": "20",
			"apply": "Vulnerable",
			"target": "Single",
			"description": "Power Line:<br>Attaches a leash to the target that lasts for $t10 seconds. Every second it will deal $d14 magical damage and grant $c1 stack of the \"Power Line\" effect. The \"Power Line\" effect will increase the damage dealt by \"Voltaic Detonation\" by up to $c200% at maximum stacks. This ability is not affected by the global recharge time.<br> <br>Applies $sVulnerable to Ranged. <br> <br>Becomes \"Voltaic Detonation\" after activation.<br> <br>Voltaic Detonation:<br>A single target attack that deals $d224 magical damage. Upon activation, the \"Power Line\" effect will terminate.<br> <br>This ability can only be used on targets affected by \"Power Line.\"",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Altered States",
	"tier": "2",
	"abilities": [
		{
			"name": "Molecular Exploitation",
			"gid": 6863506,
			"iid": 7076256,
			"background": 6,
			"cost": 9,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Afflict",
			"description": "Whenever you hit an $sAfflicted target, you perform an additional hit that deals $d7 magic damage.",
		},
		{
			"name": "Coldwave",
			"gid": 6863494,
			"iid": 7070904,
			"background": 5,
			"cost": 12,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "45",
			"apply": "Hinder",
			"target": "PBAoE",
			"description": "PBAoE: Affects up to $c6 enemies in a $c5 metre range around you.<br>A PBAoE attack that deals $d54 magic damage. Affected targets are also $sHindered and unable to move for $t4 seconds.",
		},
		{
			"name": "Criticality",
			"gid": 6863507,
			"iid": 7076257,
			"background": 6,
			"cost": 16,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Afflict,Critical",
			"apply": "Chain",
			"description": "Whenever you critically hit an $sAfflicted target, you trigger an attack which jumps up to $c5 metres $c5 times, hitting up to $c6 enemies, dealing $d14 magical damage.",
		},
		{
			"name": "Flicker",
			"gid": 6863493,
			"iid": 7070906,
			"background": 4,
			"cost": 21,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "20",
			"apply": "Cleanse,Movement",
			"description": "You teleport $t10 metres forward, cleansing all root and snare effects from you.",
		},
		{
			"name": "Highly Strung",
			"gid": 6863508,
			"iid": 7076259,
			"background": 6,
			"cost": 27,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"apply": "Damage",
			"description": "Whenever you reach $r0 Elemental Resources after using an Elemental resource consumer, you gain a beneficial effect, which causes you to deal $t10% more damage for $t6 seconds.",
		},
		{
			"name": "Flashpoint",
			"gid": 6863492,
			"iid": 7070903,
			"background": 5,
			"cost": 34,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "2",
			"cooldown": "10",
			"react": "Afflict",
			"apply": "Afflict",
			"target": "Single,AoE",
			"description": "A single target attack that deals $d62 magical damage. The target also becomes $sAfflicted with a damage over time effect that deals $d14 magical damage each second for $t5 seconds.<br> <br>If the target is already $sAfflicted, it causes $c6 enemies in a $c5 metre radius around them to become $sAfflicted with a damage over time effect that deals $d29 magical damage each second for $t5 seconds.",
		},
		{
			"name": "Live Wire",
			"gid": 6863509,
			"iid": 7076258,
			"background": 6,
			"cost": 50,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"elite": true,
			"react": "Critical",
			"description": "Whenever you critically hit, you gain the Live Wire effect which causes your next hit to trigger an additional hit, dealing $d83 magical damage.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Mortality Curve",
	"tier": "2",
	"abilities": [
		{
			"name": "Arc Flash",
			"gid": 6863491,
			"iid": 7070902,
			"background": 5,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"build": "1",
			"apply": "Chain",
			"target": "Chain",
			"description": "Chain: Jumps up to $c5 metres $c5 times, hitting up to $c6 enemies.<br>Builds $r1 resource for each equipped weapon.<br>A $uChain attack which deals $d24 magical damage.",
		},
		{
			"name": "Death Density",
			"gid": 6863510,
			"iid": 7076262,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"apply": "Critical",
			"description": "Whenever you or a member of your group kills an enemy, you gain the Minor Critical Chance effect, which increases your Critical Chance by $t10% for $t8 seconds.",
		},
		{
			"name": "Inferno",
			"gid": 6863482,
			"iid": 7070901,
			"background": 5,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1.5",
			"consume": "5",
			"target": "GTAoE",
			"description": "GTAoE: Affects up to $c6 enemies in a $c7 metre radius around the targeted point.<br>Consumes $r5 Elemental Resources.<br>A GTAoE attack that deals $d113 magical damage.",
		},
		{
			"name": "Purgatory",
			"gid": 6863511,
			"iid": 7076260,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Inferno",
			"description": "Improves \"Inferno\" to also leave a $c5 metre radius area for $t10 seconds. Every second up to $c6 enemies in the area are dealt $d3 magical damage.",
		},
		{
			"name": "Conditional Force",
			"gid": 6863480,
			"iid": 7070900,
			"background": 5,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"react": "Hinder",
			"apply": "Chain,Resource",
			"target": "Chain",
			"description": "Chain: Jumps up to $c5 metres $c5 times, hitting up to $c6 enemies.<br>Consumes $r2 Elemental Resources.<br>A $uChain attack that deals $d63 magical damage. If any of the affected targets are $sHindered, the Elemental Resource cost is refunded.",
		},
		{
			"name": "Chain Reaction",
			"gid": 6863512,
			"iid": 7076261,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Chain",
			"apply": "Afflict",
			"description": "Whenever you hit with $uChain abilities, your target becomes $sAfflicted with a damage over time effect that deals $d7 magical damage every second for $t10 seconds.",
		},
		{
			"name": "Whiteout",
			"gid": 6863479,
			"iid": 7070899,
			"background": 5,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cast": "1",
			"cooldown": "25",
			"react": "Anima Deviation",
			"apply": "Hinder",
			"target": "AoE",
			"description": "Places an area at the targeted point that lasts $t8 seconds. Every $t0.5 seconds it will deal $d25 magical damage to up to $c6 enemies in a $c5 metre radius. Targets that are hit $t5 times become $sHindered and rooted in place for $t4 seconds.<br> <br>Susceptible to $sAnima Deviation.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Resonance",
	"tier": "2",
	"abilities": [
		{
			"name": "Ignition",
			"gid": 6863478,
			"iid": 7070898,
			"background": 5,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "0.5",
			"build": "1",
			"apply": "Strike",
			"target": "Single",
			"description": "Builds $r1 Resource for each equipped Weapon.<br>A $uStrike attack that deals $d48 magical damage.",
		},
		{
			"name": "Dial Down",
			"gid": 6863513,
			"iid": 7466277,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Hinder",
			"apply": "Purge",
			"description": "Whenever you apply $sHindered you also purge $t1 beneficial effect from the target.",
		},
		{
			"name": "Fire Manifestation",
			"gid": 6863477,
			"iid": 7070885,
			"background": 5,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"cooldown": "10",
			"consume": "2",
			"target": "Single",
			"description": "Consumes $r2 Elemental Resources.<br>Places a manifestation at the targeted point that lasts $t10 seconds. Every $t2.5 seconds it will deal $d50 magical damage to the closest enemy within a $c5 metre radius.",
		},
		{
			"name": "Social Dynamo",
			"gid": 6863514,
			"iid": 7466279,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Critical,Strike",
			"apply": "Critical",
			"description": "Whenever you critically hit with $uStrike abilities, all group members gain a single stack of the Critical Rating effect, which increases Critical Rating by $c40 per stack for $t8 seconds. This effect can stack up to $t5 times.",
		},
		{
			"name": "Magnetic Wipe",
			"gid": 6863476,
			"iid": 7070897,
			"background": 5,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"consume": "3",
			"react": "Afflict",
			"apply": "Purge",
			"target": "Single",
			"description": "Consumes $r3 Elemental Resources.<br>A single target attack that deals $d143 magical damage. Also purges $t1 beneficial effect from the target, or $t2 beneficial effects it the target is $sAfflicted.",
		},
		{
			"name": "Magnetic Variance",
			"gid": 6863515,
			"iid": 7466278,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Critical",
			"apply": "Purge",
			"description": "Your critical hits have a $t50% chance to also Purge $t1 beneficial effect from the target.",
		},
		{
			"name": "Hard Reset",
			"gid": 6863475,
			"iid": 7070896,
			"background": 5,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cast": "2",
			"cooldown": "35",
			"react": "Anima Deviation",
			"apply": "Purge,Critical",
			"target": "Single",
			"description": "A single target attack that deals $d348 magical damage and purges all beneficial effects from the target. This attack will always critically hit.<br> <br>Affected targets are unable to act for $t1.5 seconds.<br> <br>The target also receives a detrimental effect that purges all beneficial effects every second for $t10 seconds.<br> <br>This ability has a $c7.5 metre range.<br> <br>Susceptible to $sAnima Deviation.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Disturbance",
	"tier": "2",
	"abilities": [
		{
			"name": "Critical Control",
			"gid": 6863516,
			"iid": 7466281,
			"background": 6,
			"cost": 9,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Hinder",
			"apply": "Critical",
			"description": "Whenever you hit an $sHindered target, all group members gains a single stack of the Critical Rating effect, which increases their Critical Rating by $c40 per stack for $t8 seconds. This effect can stack up to $t5 times.",
		},
		{
			"name": "Electromagnetic Manifestation",
			"gid": 6863461,
			"iid": 7070895,
			"background": 5,
			"cost": 12,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"cooldown": "90",
			"apply": "Purge",
			"target": "AoE",
			"description": "Places a manifestation at the targeted point that lasts $t20 seconds. Every second it will hit up to $c6 enemies in a $c10 metre radius, dealing $d6 magical damage. Affected targets will also be purged of $t1 beneficial effect.",
		},
		{
			"name": "Damage Control",
			"gid": 6863517,
			"iid": 7466282,
			"background": 6,
			"cost": 16,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Critical,Hinder",
			"description": "Whenever you critically hit a $sHindered target, you hit an additional time which deals $d29 magical damage.",
		},
		{
			"name": "Short Fuse",
			"gid": 6863460,
			"iid": 7070894,
			"background": 5,
			"cost": 21,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "90",
			"apply": "Damage",
			"description": "Gives all group members the Short Fuse effect, which increases all damage dealt by $t20% for $t10 seconds. This effect can only affect a target once every $t90 seconds. This ability does not trigger and is not affected by global recharge time.",
		},
		{
			"name": "Final Fuse",
			"gid": 6863518,
			"iid": 7466283,
			"background": 6,
			"cost": 27,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Short Fuse",
			"description": "Upgrades the damage increase effect by \"Short Fuse\" to $t30% damage increase for $t10 seconds.",
		},
		{
			"name": "Ice Manifestation",
			"gid": 6863459,
			"iid": 7070893,
			"background": 5,
			"cost": 34,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"cooldown": "45",
			"target": "AoE",
			"description": "Places a manifestation at the targeted point that lasts $t9 seconds. Every $t3 seconds it will hit up to $c6 enemies in a $c5 metre radius, dealing $d30 magical damage. Targets affected by the initial hit will also be $sHindered and rooted to the ground for $t2 seconds, targets affected by the remaining hits will be rooted to the ground for $t0.5 seconds.",
		},
		{
			"name": "Big Bang",
			"gid": 6863519,
			"iid": 7466280,
			"background": 6,
			"cost": 50,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"elite": true,
			"description": "Whenever a manifestation, turret, mine or drone deals damage, you perform an additional hit on the target and up to $t6 enemies within $c5 metres around it that deals $d17 magical damage.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Tempest",
	"tier": "2",
	"abilities": [
		{
			"name": "Wildfire",
			"gid": 6863458,
			"iid": 7070892,
			"background": 5,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"build": "1",
			"target": "TAoE",
			"description": "TAoE: Affects up to $c6 enemies in a $c5 metre radius around the target.<br>Build $r1 resource for each equipped weapon.<br>A TAoE attack that deals $d24 magical damage.",
		},
		{
			"name": "Phantom Purge",
			"gid": 6863520,
			"iid": 7466276,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Chain",
			"apply": "Purge",
			"description": "$uChain attacks have a $t33% to Purge $t1 beneficial effect from the target.",
		},
		{
			"name": "Lightning Manifestation",
			"gid": 6863457,
			"iid": 7070891,
			"background": 5,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"cooldown": "15",
			"consume": "2",
			"react": "Hinder",
			"apply": "Chain",
			"target": "Chain",
			"description": "Consumes $r2 Elemental Resources.<br>Places a manifestation at the targeted point that lasts $t10 seconds. Every second, it performs a $uChain attack that deals $d13 magical damage, or $d14 magical damage if the target is $sHindered.",
		},
		{
			"name": "Grounded",
			"gid": 6863521,
			"iid": 7466284,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Purge",
			"description": "Whenever you use a purge ability, you perform an additional hit dealing $d21 magical damage.",
		},
		{
			"name": "Burnout",
			"gid": 6863456,
			"iid": 7070890,
			"background": 5,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "2",
			"consume": "5",
			"react": "Hinder",
			"apply": "Purge",
			"target": "GTAoE",
			"description": "GTAoE: Affects up to $c6 enemies in a $c5 metre range around the targeted point.<br>Consumes $r5 Elemental Resources.<br>A GTAoE attack that deals $d135 magical damage. Affected targets that are $sHindered are purged of $t2 beneficial effects.",
		},
		{
			"name": "Lightning in a Bottle",
			"gid": 6863522,
			"iid": 7466285,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Lightning Manifestation",
			"apply": "Purge",
			"description": "Improves \"Lightning Manifestation\" to also Purge $t1 beneficial effect from each affected target.",
		},
		{
			"name": "Overload",
			"gid": 6863453,
			"iid": 7070889,
			"background": 5,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cast": "3",
			"cooldown": "40",
			"apply": "Hinder,Vulnerable",
			"target": "PBAoE",
			"description": "Channelled: Every second for $t3 seconds.<br>GTAoE: Affects up to $c6 enemies in a $c10 metre radius around the targeted point.<br>A channelled GTAoE attack that deals $d70 magical damage per hit. Enemies in the area have their movement speed reduced by $c30%. The last hit will deal $d315 magical damage.<br> <br>Applies $sVulnerable to Melee.",
		},
	]
});
