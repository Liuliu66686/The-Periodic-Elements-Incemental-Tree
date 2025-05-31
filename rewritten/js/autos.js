addLayer("at", {
    name: "auto",
    symbol: "⚙",
    position: 2,
    startData() { return {
        unlocked: true,
        running: [],
    }},
    tooltip: "自动化",
    color: "grey",
    type: "none",
    row: "side",
    layerShown(){return player.h.unlocked},
    clickables:{
        "At-Ptc1":{
            title(){return "自动充能: " + (this.canRun()?"开":"关")},
            canClick(){return hasUpgrade("p",34)},
            onClick(){quickChangeConstElements(this.id,player.at.running)},
            canRun(){return this.canClick()&&player.at.running.includes(this.id)},
            onRun(){
                if(this.canRun()) clickClickable("p","Ptc-1")
            },
            style(){
                bgcolor = tmp.p.color
                bdcolor = this.canClick()?(this.canRun()?"lime":"red"):""
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "150px"}},
            unlocked(){return hasUpgrade("p",34)}
        },
        "At-PtcUrow1":{
            title(){return "自动购买第一行基本粒子升级: " + (this.canRun()?"开":"关")},
            canClick(){return hasUpgrade("p",34)},
            onClick(){quickChangeConstElements(this.id,player.at.running)},
            canRun(){return this.canClick()&&player.at.running.includes(this.id)},
            onRun(){
                if(this.canRun()) quickUpgBuy("p",[11,12,13,14,15])
            },
            style(){
                bgcolor = tmp.p.color
                bdcolor = this.canClick()?(this.canRun()?"lime":"red"):""
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "300px"}},
            unlocked(){return hasUpgrade("p",34)}
        },
    },
    tabFormat:{
        page1:{
            name: "第1页",
            content:[
                ["row",[["clickable","At-Ptc1"]]],["row",[["clickable","At-PtcUrow1"]]]
            ],
            buttonStyle: {
                "border-color": "cyan"
            },
            unlocked(){return false}
        },
    },
})