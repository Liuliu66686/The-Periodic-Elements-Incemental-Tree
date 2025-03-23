let modInfo = {
	name: "元素周期增量树重置版",
	author: "Liuliu66686",
	pointsName: "基本粒子",
	modFiles: ["layers.js", "tree.js", "functions.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal(0), // Used for hard resets and new players
	offlineLimit: 999864,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "o.O",
	name: "O.o",
}

let changelog = `<h1>更新日志:</h1><br>
	<h3>vo.O</h3><br>
		- 做了吗?<br>
		- o.O .`

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
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
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