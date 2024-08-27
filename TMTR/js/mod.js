let modInfo = {
	name: "The-Periodic-Elements-Incemental-Tree",
	id: "yrrightbutthisisliustree",
	author: "Liue308&Banana3864",
	pointsName: "基本粒子",
	modFiles: ["layers.js", "tree.js","someUsefulFunctions_QwQe308.js","reactions.js","vue.js"],

	discordName: "元素周期增量树 | Periodic Elements Incremental Tree",
	discordLink: "",
	initialStartPoints: new Decimal(0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.4",
	name: "第二周期更新V",
}

let changelog = `<h1>更新日志:</h1><br>
	<h3>v0.4</h3><br>
		- 添加硼层机制<br>
		- 添加碳层<br>
		注:这是短期内(可能一年内)的最后一次更新了,可以去支持作者的新树增量树谢谢喵!<br>
		群号: 951232913<br>
	<h3>v0.3.3+</h3><br>
		- 修复一个有关于text4的bug(关键是这个b....bug没测试到)<br>
	<h3>v0.3.3</h3><br>
		- 增加解锁硼层之后未解锁硼层机制的内容<br>
		(包括新的氢升级,铍升级)<br>
		- 版本终点:6硼<br>
		- 本次更新内容较少(赶工!)<br>
	<h3>v0.3.2+</h3><br>
		- 修复上个版本更新带来的一堆平衡问题和NaN问题<br>
	<h3>v0.3.2</h3><br>
		- 添加硼层和上个版本更新的锂层,铍层的内容<br>
		- 基本粒子层,氢层,氦层添加更多升级<br>
		- 修正该树的作者名<br>
	<h3>v0.2.2</h3><br>
		- 添加锂层,铍层<br>
		- 氦层添加机制<br>
	<h3>v0.1.3</h3><br>
		- 修复了购买项有时能买却不能买的bug<br>
		- 增加新资源<br>
	<h3>v0.1</h3><br>
		- 增加氢层一些东西<br>
		- 增加氦层<br>
	<h3>v0.0</h3><br>
		- 增加基本粒子层与2buyable与9upgrade<br>
		- 增加氢层`

let winText = `恭喜！你 >暂时< 通关了！...再见`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	if(!hasUpgrade("p",11)||isEndgame())
		return false
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)
	let gain = zero
	if(hasUpgrade("p",11)) gain = gain.add(upgradeEffect("p",11))
	if(hasUpgrade("p",12)) gain = gain.add(upgradeEffect("p",12))
	if(hasUpgrade("p",13)) gain = gain.mul(upgradeEffect("p",13))
	if(hasUpgrade("p",14)) gain = gain.mul(upgradeEffect("p",14))
	if(hasUpgrade("p",23)) gain = gain.mul(upgradeEffect("p",23))
	if(hasUpgrade("p",24)) gain = gain.mul(upgradeEffect("p",24))
	if(hasUpgrade("p",32)) gain = gain.mul(upgradeEffect("p",32))
	if(hasUpgrade("p",34)) gain = gain.mul(10)
	if(hasUpgrade("p",43)) gain = gain.mul(upgradeEffect("p",43))
	if(hasUpgrade("h",11)) gain = gain.mul(upgradeEffect("h",11))
	if(hasUpgrade("h",12)) gain = gain.mul(upgradeEffect("h",12))
	if(hasUpgrade("h",21)) gain = gain.mul(upgradeEffect("h",21))
	if(hasUpgrade("he",12)) gain = gain.mul(upgradeEffect("he",12))
	if(hasUpgrade("he",22)) gain = gain.mul(upgradeEffect("he",22))
	if(hasUpgrade("li",11)) gain = gain.mul(upgradeEffect("li",11))
	if(hasUpgrade("he",23)) gain = gain.mul(buyableEffect("he",11))
	if(hasUpgrade("he",24)) gain = gain.mul(buyableEffect("he",12))
	if(getBuyableAmount("p",11).gte(1)) gain = gain.mul(buyableEffect("p",11))
	if(hasMilestone("h",3)) gain = gain.mul(layers.he.balloonBoostPoints())
	if(player.he.upTime.gt(0)) gain = gain.mul(layers.he.boomedBalloonBoostPoints())
	if(hasMilestone("he",2)) gain = gain.mul(layers.he.temPointBoostPoints())
	if(hasUpgrade("b",12)) gain = gain.mul(upgradeEffect("b",12))
	if(hasUpgrade("b",43)) gain = gain.mul(upgradeEffect("b",43))
	if(player.c.energy.gte(1)) gain = gain.mul(layers.c.CEeffect1())

	if(player.b.inBorane) gain = gain.pow(0.75)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	gameSpeed: one, //挖个坑,游戏时间流速
	devSpeed: one,
	banana: 3864,
	liuliu: 66686,
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return hasUpgrade("c",11)
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}