﻿// Shotgun
index = 7;

TSW.Wheel[index].cells.push({
	"name": "Enforce",
	"tier": "1",
	"abilities": [
		{
			"name": "Pump Action",
			"gid": 6371862,
			"iid": 6814182,
			"background": 1,
			"cost": 1,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"target": "Cone",
			"description": "Cone: Affects up to $c6 enemies in a $c60 degree $c7 metre cone in front of you.<br>Builds $r1 resource for each equipped weapon.<br>A Cone attack that deals $d27 physical damage.",
		},
		{
			"name": "Sawed Off",
			"gid": 6371962,
			"iid": 6814223,
			"background": 6,
			"cost": 1,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Pump Action",
			"apply": "Weaken",
			"description": "\"Pump Action\" will also cause affected targets to become $sWeakened by a single stack of the Debilitated effect, which reduces all damage dealt by $t3% per stack for $t10 seconds. This effect can stack up to $t10 times.",
		},
		{
			"name": "Out for a Kill",
			"gid": 6371879,
			"iid": 6814181,
			"background": 1,
			"cost": 1,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "4",
			"consume": "-1",
			"target": "Single",
			"description": "Consumes all Shotgun Resources.<br>A single target attack that deals $d90-178 physical damage, based on the number of resources consumed. Enemies who are killed shortly after being hit will grand you a beneficial effect for $t8 seconds which increases the Penetration Chance of your attacks from manifestations, turrets, mines or drones by $t10%.",
		},
		{
			"name": "Dead on Target",
			"gid": 6371958,
			"iid": 6814221,
			"background": 6,
			"cost": 2,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"apply": "Damage",
			"description": "Increases damage dealt by Shotgun abilities by $t10%.",
		},
		{
			"name": "Buckshot",
			"gid": 6371870,
			"iid": 6814179,
			"background": 1,
			"cost": 3,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1.5",
			"cooldown": "10",
			"target": "Single",
			"description": "A single target attack that deals $d124 physical damage, or $d136 physical damage if you have $r5 Shotgun Resources on the target.",
		},
		{
			"name": "Rapid Reload",
			"gid": 6372000,
			"iid": 6814222,
			"background": 6,
			"cost": 4,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Buckshot",
			"description": "Reduces the activation time of \"Buckshot\" by $t0.5 second.",
		},
		{
			"name": "Kneecapper",
			"gid": 6371889,
			"iid": 6814180,
			"background": 1,
			"cost": 7,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cooldown": "25",
			"react": "Anima Deviation",
			"apply": "Hinder",
			"target": "Cone",
			"description": "Cone: Affects up to $c10 enemies in a $c60 degree $c9 metre cone in front of you.<br>A cone attack that deals $d345 physical damage. Affected targets also become $sHindered and their movement speed is reduced by $t70% for $t8 seconds.<br> <br>Susceptible to $sAnima Deviation.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Control",
	"tier": "1",
	"abilities": [
		{
			"name": "Hit & Run",
			"gid": 6371953,
			"iid": 6814143,
			"background": 6,
			"cost": 1,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"description": "Whenever an enemy dies with your Shotgun Resources remaining, an explosion occurs around that enemy, dealing $d35 physical damage to up to $c6 enemies in a $c3 metre radius.",
		},
		{
			"name": "Powder Burn",
			"gid": 6371898,
			"iid": 6814185,
			"background": 1,
			"cost": 1,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "1",
			"build": "1",
			"react": "Hinder",
			"apply": "Strike",
			"target": "Single",
			"description": "Builds $r1 resource for each equipped weapons.<br>A single target $uStrike attack that deals $d48 physical damage, or $d53 physical damage if the target is $sHindered.",
		},
		{
			"name": "Gunsmoke",
			"gid": 6371955,
			"iid": 6814226,
			"background": 6,
			"cost": 1,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Weaken",
			"description": "Whenever you apply $sWeakened, the target takes $d7 physical damage.",
		},
		{
			"name": "Breaching Shot",
			"gid": 6371930,
			"iid": 6814184,
			"background": 4,
			"cost": 2,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "90",
			"apply": "Penetrate",
			"target": "Group",
			"description": "Gives all group members a beneficial effect that increase Penetration Chance by $c45% for $t8 seconds. Affected group members also gain the \"Depleted\" effect which prevents them from gaining the \"Breaching Shot\" effect for $t90 seconds. This ability does not trigger and is not affected by global recharge time.",
		},
		{
			"name": "Breach Party",
			"gid": 6372003,
			"iid": 6814225,
			"background": 6,
			"cost": 3,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Breaching Shot",
			"description": "Reduces the recharge time of \"Breaching Shot\" by $t30 seconds and reduces the duration of the \"Depleted\" effect by $t30 seconds.",
		},
		{
			"name": "Both Barrels",
			"gid": 6371942,
			"iid": 6814183,
			"background": 1,
			"cost": 4,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "4",
			"consume": "-1",
			"apply": "Blast",
			"target": "Cone",
			"description": "Cone: Affects up to $c6 enemies in a $c60 degree $c7 metre cone in front of you.<br>Consumes all Shotgun Resources.<br>A Cone $uBlast attack that deals $d49-98 physical damage, based on the number of resources consumed.",
		},
		{
			"name": "Authority",
			"gid": 6372080,
			"iid": 6814224,
			"background": 6,
			"cost": 7,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"elite": true,
			"description": "Your group-wide effects are $t20% more effective.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Crackdown",
	"tier": "2",
	"abilities": [
		{
			"name": "Fire and Forget",
			"gid": 7080876,
			"iid": 7465836,
			"background": 1,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"apply": "Blast",
			"target": "Column",
			"description": "Column: Affects up to $c6 enemies in a $c4 metre wide by $c10 metre long area in front of you.<br>Builds $r1 resource for each equipped weapon.<br>A column $uBlast attack that deals $d27 physical damage.",
		},
		{
			"name": "12 Gouge",
			"gid": 7080855,
			"iid": 7469221,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Penetrate",
			"apply": "Weaken",
			"description": "Whenever you Penetrate, your target becomes $sWeakened by a single stack Debilitating effect, which reduces all damage dealt by $t3% per stack for $t10 seconds. This effect can stack up to $t10 times.",
		},
		{
			"name": "Riot Act",
			"gid": 7080875,
			"iid": 7465835,
			"background": 1,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "4",
			"consume": "-1",
			"target": "TAoE",
			"description": "TAoE: Affects $c6 enemies in a $c5 metre radius around your target.<br>Consumes all Shotgun Resources.<br>A TAoE attack that deals $d45-89 physical damage, based on the number of resources consumed.",
		},
		{
			"name": "Riot Control",
			"gid": 7080852,
			"iid": 7469240,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Riot Act",
			"description": "\"Riot Act\" leaves a ground area lasting $t5 seconds that reduces the movement speed of enemies inside it by $t15%.",
		},
		{
			"name": "Stopping Power",
			"gid": 7080874,
			"iid": 7465834,
			"background": 1,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "4",
			"consume": "-1",
			"react": "Hinder",
			"apply": "Penetrate",
			"target": "Cone",
			"description": "Cone: Affects up to $c6 enemies in a $c7 metre long $c60 degree cone in front of you.<br>Consumes all Shotgun Resources.<br>A Cone attack that deals $d49-98 physical damage, based on the number of resources consumed. This attack will penetrate any targets that are $sHindered.",
		},
		{
			"name": "Blast Corps",
			"gid": 7080851,
			"iid": 7469239,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Blast",
			"description": "$uBlast abilities also apply a detrimental effect which makes the target take $d14 physical damage the next time they are hit.",
		},
		{
			"name": "Shotgun Wedding",
			"gid": 7080873,
			"iid": 7465833,
			"background": 1,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cast": "2.5",
			"cooldown": "20",
			"react": "Hit",
			"apply": "Vulnerable",
			"target": "Cone",
			"description": "Channeled: Every $t0.5 seconds for $t2.5 seconds.<br>Cone: Affects up to $c6 enemies in a $c9 metre long $c60 degree cone in front of you.<br>A channelled cone attack that deals $d65 physical damage per hit.<br> <br>Each time the ability fires and hits any number of targets, the damage of the remaining hits is increased by $t25%. This effect can stack up to $c4 times.<br> <br>Applies $sVulnerable to Magic.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Restricted Access",
	"tier": "2",
	"abilities": [
		{
			"name": "Beanbag Rounds",
			"gid": 7080931,
			"iid": 7469238,
			"background": 6,
			"cost": 9,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Hinder",
			"apply": "Penetrate",
			"description": "Whenever you apply $sHindered, you gain the Minor Penetration Chance effect, which increases your Penetration Chance by $c15% for $t8 seconds.",
		},
		{
			"name": "Kickback",
			"gid": 7080872,
			"iid": 7465832,
			"background": 1,
			"cost": 12,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "25",
			"apply": "Movement",
			"target": "Column",
			"description": "Column Dash: Dash backwards $c10 metres, affecting up to $c4 enemies in a $c6 metre wide column along the way.<br>A single target attack that deals $d60 physical damage. Also performs a backward column Dash attack that deals $d33 physical damage.",
		},
		{
			"name": "Pinned Down",
			"gid": 7080930,
			"iid": 7469237,
			"background": 6,
			"cost": 16,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Penetrate",
			"apply": "Hinder",
			"description": "Whenever you Penetrate, you also cause the target to become $sHindered and its movement speed to be reduced by $t70% for $t4 seconds. This effect can only happen once every $t30 seconds.",
		},
		{
			"name": "Takedown",
			"gid": 7080871,
			"iid": 7465831,
			"background": 1,
			"cost": 21,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "25",
			"apply": "Hinder",
			"target": "Single",
			"description": "A single target attack that deals $d117 physical damage. The target becomes $sHindered and its movement speed is reduced by $t70% for $t4 seconds. If you have $r5 Shotgun Resources on the target, the movement reducing effect will last $t2 seconds longer.",
		},
		{
			"name": "Overpenetration",
			"gid": 7080929,
			"iid": 7469236,
			"background": 6,
			"cost": 27,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Penetrate",
			"apply": "Penetrate",
			"description": "Whenever you penetrate, you build a counter. Once you reach $t3 counters, you gain the Minor Penetration Chance effect, which increases Penetration Chance by $c15% for $t8 seconds.",
		},
		{
			"name": "Lock, Stock & Barrel",
			"gid": 7080870,
			"iid": 7465829,
			"background": 4,
			"cost": 34,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "30",
			"description": "Gives you a beneficial effect that causes your next Shotgun resource consumer within $t20 seconds to build $r5 Shotgun resources at the end of activation.",
		},
		{
			"name": "Close Quarters",
			"gid": 7080928,
			"iid": 7469235,
			"background": 6,
			"cost": 50,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"elite": true,
			"apply": "Hinder",
			"description": "Whenever you hit a target within $c3 metres of you, your target becomes $sHindered and its movement speed is reduced by $t70% for $t4 seconds.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Close Encounters",
	"tier": "2",
	"abilities": [
		{
			"name": "Single Barrel",
			"gid": 7080869,
			"iid": 7465828,
			"background": 1,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cast": "0.5",
			"build": "1",
			"react": "Weaken",
			"target": "Single",
			"description": "Builds $r1 resource for each equipped weapon.<br>A single target attack that deals $d46 physical damage, or $d51 physical damage if the target is $sWeakened.",
		},
		{
			"name": "Strike Force",
			"gid": 7080927,
			"iid": 7469234,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Strike",
			"apply": "Penetrate",
			"description": "Increases the Penetration Chance of $uStrike attacks by $t7.5%.",
		},
		{
			"name": "Raging Bullet",
			"gid": 7080868,
			"iid": 7465827,
			"background": 1,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "4",
			"consume": "-1",
			"apply": "Strike",
			"target": "Single",
			"description": "Consumes all Shotgun Resources.<br>A single target $uStrike attack that deals $d77-152 physical damage. If the target is between $c3 and $c9 metres from you it will instead deal $d85-169 physical damage, or if the target is closer than $c3 metres it will deal $d91-181 physical damage. Damage scales based on the number of resources consumed.",
		},
		{
			"name": "Body Piercing",
			"gid": 7080925,
			"iid": 7469233,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Penetrate",
			"apply": "Penetrate",
			"description": "Whenever you penetrate, you gain a single stack of the Penetration Rating effect, which increases your Penetration Rating by $c40 per stack for $t8 seconds. This effect can stack up to $t5 times.",
		},
		{
			"name": "Heavy Recoil",
			"gid": 7080867,
			"iid": 7465826,
			"background": 1,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "5",
			"consume": "-1",
			"react": "Weaken",
			"apply": "Movement",
			"target": "Single",
			"description": "Consumes all Shotgun Resources.<br>A single target attack that deals $d76-164 physical damage. If the target is $sWeakened you also dash $c10 metres backwards, dealing $d14 physical damage to up to $c5 enemies in a $c6 metre wide area on your way.",
		},
		{
			"name": "Invasive Measures",
			"gid": 7080924,
			"iid": 7469232,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Weaken",
			"apply": "Resource",
			"description": "Whenever you hit a $sWeakened target, you have a $t17.5% chance to build $r1 resource for your primary weapon. If you already have the maximum available resources when this effect triggers, you will instead perform an additional hit dealing $d21 physical damage to that target.",
		},
		{
			"name": "Point Blank",
			"gid": 7080866,
			"iid": 7465830,
			"background": 1,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cast": "1",
			"cooldown": "25",
			"react": "Anima Deviation",
			"apply": "Impair,Vulnerable",
			"target": "Single",
			"description": "A single target attack that deals $d345 physical damage and causes the target to be knocked $c2 metres back.<br> <br>This ability has a $c3 metre range.<br> <br>Applies $sVulnerable to Melee. <br> <br>Susceptible to $sAnima Deviation.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Securing the Perimetre",
	"tier": "2",
	"abilities": [
		{
			"name": "Scattershot",
			"gid": 7080865,
			"iid": 7465825,
			"background": 1,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"target": "TAoE",
			"description": "TAoE: Applied to $c6 enemies in a $c5 metre radius around the target.<br>Builds $r1 resource for each equipped weapon.<br>A TAoE attack that deals $d24 physical damage.",
		},
		{
			"name": "Collateral Damage",
			"gid": 7080923,
			"iid": 7469231,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Blast",
			"apply": "Purge",
			"description": "$uBlast attacks have a $t50% chance to purge $c1 beneficial effect from the target.",
		},
		{
			"name": "Shotgun Turret",
			"gid": 7080864,
			"iid": 7465823,
			"background": 1,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "10",
			"consume": "-1",
			"apply": "Blast",
			"target": "Cone",
			"description": "Consumes all Shotgun Resources.<br>A $uBlast attack which places a turret at your feet. The turret will fire every second for $t5 seconds, affecting up to $c6 enemies in a $c7 metre long $c120 degree cone in front of you, dealing $d14-28 physical damage, based on the number of resources consumed. This ability has a $c7 metre range.",
		},
		{
			"name": "High-Gauge Turret",
			"gid": 7080922,
			"iid": 7469230,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Shotgun Turret",
			"description": "Increases damage dealt by \"Shotgun Turret\" by $t15%.",
		},
		{
			"name": "Tear Gas",
			"gid": 7138076,
			"iid": 7465824,
			"background": 1,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "4",
			"consume": "-1",
			"react": "Hinder",
			"target": "TAoE",
			"description": "TAoE: Affects up to $c6 enemies in a $c5 metre radius around your target.<br>Consumes all Shotgun Resources.<br>A TAoE attack that deals $d45-89 physical damage, or $d49-98 physical damage to $sHindered targets. Damage scales based on the number of resources consumed.",
		},
		{
			"name": "Mitigating Factor",
			"gid": 7080921,
			"iid": 7469229,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Hinder,Penetrate",
			"description": "Whenever you penetrate or apply $sHindered, you gain a single stack of the Protection effect, which increase your Physical and Magical Protection Rating by $c40 per stack for $t8 seconds. This effect can stack up to $t5 times.",
		},
		{
			"name": "Cleanup",
			"gid": 7080863,
			"iid": 7465822,
			"background": 4,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cooldown": "60",
			"apply": "Cleanse,Purge",
			"description": "Gives all group members a beneficial effect that lasts $t9 seconds. While this effect is active it Cleanses $t1 detrimental effect every $t1.5 seconds. Their targets will be Purged of $t1 beneficial effect with each hit. This ability does not trigger and is not affected by global recharge time.",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Hunkering Down",
	"tier": "2",
	"abilities": [
		{
			"name": "Crap Shoot",
			"gid": 7080920,
			"iid": 7469228,
			"background": 6,
			"cost": 9,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Weaken",
			"apply": "Penetrate,Purge",
			"description": "Whenever you hit a $sWeakened target, you have a random chance to get one of three effects. Only one of the following effects can occur whenever you hit a target:<br> <br>• Seven Out: $t16% chance to purge $c1 beneficial effect.<br> <br>• Snake Eyes: $t3% chance to hit the target for $d21 physical damage.<br> <br>• Midnight: $t3% chance to gain the Minor Penetration Chance effect, which increases your Penetration Chance by $c15% for $t8 seconds.",
		},
		{
			"name": "Smart Bomb",
			"gid": 7080862,
			"iid": 7465821,
			"background": 1,
			"cost": 12,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "30",
			"apply": "Purge",
			"target": "AoE",
			"description": "Places a mine at the targeted point that lasts $t60 seconds. If an enemy comes within $c5 metres of the mine, it explodes dealing $d60 physical damage to up to $c6 enemies in a $c5 metre radius around it. Affected targets also have $t2 beneficial effects purged from them.",
		},
		{
			"name": "Hardcase",
			"gid": 7080919,
			"iid": 7469227,
			"background": 6,
			"cost": 16,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Weaken",
			"description": "Whenever you apply $sWeakened, you gain a single stack of the Protection effect, which increases your Physical and Magical Protection by $t35 per stack for $t8 seconds. This effect can stack up to $t5 times.",
		},
		{
			"name": "Flak Jacket",
			"gid": 7080861,
			"iid": 7465820,
			"background": 4,
			"cost": 21,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "60",
			"description": "Grants all group members a beneficial effect that reduces all damage received by $t15% for $t5 seconds. This ability does not trigger and is not affected by global recharge time.",
		},
		{
			"name": "Full Flak Jacket",
			"gid": 7080918,
			"iid": 7469226,
			"background": 6,
			"cost": 27,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Flak Jacket",
			"description": "Increases the duration of \"Flak Jacket\" by $t5 seconds. Increases the damage reduction effect of \"Flak Jacket\" to $t25%",
		},
		{
			"name": "Bomb Squad",
			"gid": 7080860,
			"iid": 7465819,
			"background": 1,
			"cost": 34,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "30",
			"apply": "Hinder",
			"target": "AoE",
			"description": "Places a mine at the targeted point that last $t60 seconds. If an enemy comes within $c5 metres of the mine, it explodes dealing $d60 physical damage to up to $c6 enemies in a $c5 metre radius around it. Affected targets also become $sHindered and their movement speed is reduced by $t70% for $t8 seconds.",
		},
		{
			"name": "Shield Formation",
			"gid": 7080917,
			"iid": 7469225,
			"background": 6,
			"cost": 50,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"elite": true,
			"description": "Every $t2 seconds you gain a single stack of the Protection effect, which increases your Physical and Magical Protection by $t40 per stack for $t8 seconds. This effect can stack up to $t5 times. Also, whenever you gain the Minor Ward, Major Ward or stacks of the Protection effect, all friends within $t15 metres of you will receive the same effect. Reduces all incoming damage by $t5%",
		},
	]
});

TSW.Wheel[index].cells.push({
	"name": "Tactical Surprise",
	"tier": "2",
	"abilities": [
		{
			"name": "Striker",
			"gid": 7080859,
			"iid": 7465818,
			"background": 1,
			"cost": 9,
			"type": "Active",
			"active": true,
			"bridge": false,
			"build": "1",
			"apply": "Strike",
			"target": "Single",
			"description": "Builds $r1 resource for each equipped weapon.<br>A single target $uStrike attack that deals $d48 physical damage.",
		},
		{
			"name": "Impact Striker",
			"gid": 7080916,
			"iid": 7469224,
			"background": 6,
			"cost": 12,
			"type": "Passive",
			"active": false,
			"bridge": false,
			"modify": "Striker",
			"react": "Hinder",
			"description": "Increased damage dealt by \"Striker\" to $sHindered targets by $t25%.",
		},
		{
			"name": "Defensive Turret",
			"gid": 7080858,
			"iid": 7465817,
			"background": 4,
			"cost": 16,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "4",
			"consume": "-1",
			"description": "Consumes all Shotgun resources.<br>Places a Turret at your feet, lasting $t10 seconds. Friends staying within $c5 a metre radius of the turret gain a beneficial effect that reduces all damage received by $t3% per resource consumed.",
		},
		{
			"name": "Punisher",
			"gid": 7080915,
			"iid": 7469223,
			"background": 6,
			"cost": 21,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Strike",
			"apply": "Weaken",
			"description": "$uStrike attacks also cause your target become $sWeakened by a single stack of the Debilitated effect, which reduces all damage dealt by $t3% per stack for $t10 seconds. This effect can stack up to $t10 times.",
		},
		{
			"name": "Sure Shot",
			"gid": 7080857,
			"iid": 7465816,
			"background": 1,
			"cost": 27,
			"type": "Active",
			"active": true,
			"bridge": false,
			"cooldown": "4",
			"consume": "-1",
			"react": "Hinder",
			"apply": "Cleanse,Purge",
			"target": "Single",
			"description": "Consumes all Shotgun resources.<br>A single target attack that deals $d90-178 physical damage, based on the number of resources consumed. If the target is $sHindered you also cleanse $t1 detrimental effect from your defensive target and purge $t1 effect from the target.",
		},
		{
			"name": "Perjury",
			"gid": 7080926,
			"iid": 7469222,
			"background": 6,
			"cost": 34,
			"type": "Passive",
			"active": false,
			"bridge": true,
			"react": "Hinder,Penetrate",
			"apply": "Cleanse",
			"description": "Whenever you penetrate twice in a row or apply $sHindered, you also cleanse $t1 detrimental effect from the yourself. Cleansing a detrimental effect from a penetrating hit has an internal recharge time of $t3 seconds.",
		},
		{
			"name": "Bombardment",
			"gid": 7080856,
			"iid": 7465815,
			"background": 1,
			"cost": 50,
			"type": "Active",
			"active": true,
			"bridge": false,
			"elite": true,
			"cooldown": "30",
			"target": "Single",
			"description": "Places a turret at the targeted point. The turret will fire at a random enemy within $c7 metres every $t2.5 seconds for $t20 seconds.<br> <br>Affected enemies are dealt $d74 physical damage and other enemies within $c3 metres are dealt $d25 physical damage.",
		},
	]
});
