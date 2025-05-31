let modInfo = {
	name: "PeiTR",
	author: "Liuliu66686",
	pointsName: "基本粒子",
	modFiles: ["layers.js", "tree.js", "functions.js","autos.js","achievements.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal(0), // Used for hard resets and new players
	offlineLimit: 999864,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "第一周期完结",
}

let changelog = `<h1>更新日志:</h1><br>
	<h3>v0.1 第一周期更新IV(完结) 2025/05/26</h3><br>
		- 完成第一周期两个层级的游戏玩法.<br>
		- 解锁锂层.<br>
		- 修复了一些错误解锁Bug.<br>
		- 添加更多成就.<br>
		- 终局: 2锂 (不到也行,下个版本还能点升级)<br>
	<h3>v0.0.3 - 第一周期更新III 2025/05/25</h3><br>
		- 添加氢气和氢气球.<br>
		- 爆炸气球和一堆时间墙.<br>
		- 添加成就.<br>
	<h3>v0.0.2 - 第一周期更新II 2025/05/23</h3><br>
		- 添加氦气与氦气球.<br>
		- 更多氦升级.<br>
	<h3>v0.0.1 - 第一周期更新I 2025/05/16</h3><br>
		- 添加内燃机.<br>
		- 添加了更多升级,解锁氦层.<br>
	<h3>v0.0 - 重新开始.</h3><br>
		- 添加2个层级,12个升级.<br>`

let winText = `恭喜通关当前版本! 请去QQ群 951232913 查看最新版本信息~`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return player.p.filling.gt(0)
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = layers.p.bars["filling"].maxium().div(10)
	if(hasUpgrade("p",13)) gain = gain.mul(upgradeEffect("p",13))
	if(hasUpgrade("p",21)) gain = gain.mul(upgradeEffect("p",21))
	if(hasUpgrade("p",34)) gain = gain.mul(upgradeEffect("p",34))
	if(hasUpgrade("h",11)) gain = gain.mul(upgradeEffect("h",11))
	if(hasUpgrade("h",21)) gain = gain.mul(upgradeEffect("h",21))
	if(hasMilestone("he",0)) gain = gain.mul(milestoneEffect("he",0)[1])
	if(hasMilestone("li",0)) gain = gain.mul(10)
	if(player.p.colors[0].gt(0)) gain = gain.mul(layers.p.colorsEffect(0))
	if(getBuyableAmount("he","He-3").gt(0)) gain = gain.mul(buyableEffect("he","He-3"))
	if(player.he.upTimes[0].gt(0)) gain = gain.mul(clickableEffect("he","Blm-bhe")[0])
	gain = gain.mul(layers.p.haDron("effect")[0])
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	a94: 0,
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return hasAchievement("a",106)
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