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
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "200px"}},
            unlocked(){return hasUpgrade("p",34)||player.li.unlocked}
        },
        "At-QNR":{
            title(){return "夸克不再重置任何东西: " + (this.canRun()?"开":"关")},
            canClick(){return hasUpgrade("li",31)},
            onClick(){quickChangeConstElements(this.id,player.at.running)},
            canRun(){return this.canClick()&&player.at.running.includes(this.id)},
            style(){
                bgcolor = tmp.p.color
                bdcolor = this.canClick()?(this.canRun()?"lime":"red"):""
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "200px"}},
            unlocked(){return hasUpgrade("li",31)}
        },
        "At-QAR":{
            title(){return "自动重置夸克: " + (this.canRun()?"开":"关")},
            canClick(){return hasUpgrade("li",32)},
            onClick(){quickChangeConstElements(this.id,player.at.running)},
            canRun(){return this.canClick()&&player.at.running.includes(this.id)},
            onRun(){
                if(this.canRun()) clickClickable("p","Ptc-2")
            },
            style(){
                bgcolor = tmp.p.color
                bdcolor = this.canClick()?(this.canRun()?"lime":"red"):""
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "200px"}},
            unlocked(){return hasUpgrade("li",32)}
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
            unlocked(){return hasUpgrade("p",34)||player.li.unlocked}
        },
        "At-ABPU":{
            title(){return "自动购买基本粒子升级: " + (this.canRun()?"开":"关")},
            canClick(){return hasUpgrade("li",33)},
            onClick(){quickChangeConstElements(this.id,player.at.running)},
            canRun(){return this.canClick()&&player.at.running.includes(this.id)},
            onRun(){
                if(this.canRun()) quickUpgBuy("p",quickSpawnConst(3,5))
            },
            style(){
                bgcolor = tmp.p.color
                bdcolor = this.canClick()?(this.canRun()?"lime":"red"):""
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "300px"}},
            unlocked(){return hasUpgrade("li",33)}
        },
        "At-ABHU":{
            title(){return "自动购买氢升级: " + (this.canRun()?"开":"关")},
            canClick(){return hasUpgrade("li",34)},
            onClick(){quickChangeConstElements(this.id,player.at.running)},
            canRun(){return this.canClick()&&player.at.running.includes(this.id)},
            onRun(){
                if(this.canRun()) quickUpgBuy("h",quickSpawnConst(2,3))
            },
            style(){
                bgcolor = tmp.h.color
                bdcolor = this.canClick()?(this.canRun()?"lime":"red"):""
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "200px"}},
            unlocked(){return hasUpgrade("li",34)}
        },
        "At-ABHeU":{
            title(){return "自动购买氦升级: " + (this.canRun()?"开":"关")},
            canClick(){return hasUpgrade("li",35)},
            onClick(){quickChangeConstElements(this.id,player.at.running)},
            canRun(){return this.canClick()&&player.at.running.includes(this.id)},
            onRun(){
                if(this.canRun()) quickUpgBuy("he",quickSpawnConst(3,4))
            },
            style(){
                bgcolor = tmp.he.color
                bdcolor = this.canClick()?(this.canRun()?"lime":"red"):""
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "200px"}},
            unlocked(){return hasUpgrade("li",35)}
        },
        "At-HNR":{
            title(){return "氢不再重置任何东西: " + (this.canRun()?"开":"关")},
            canClick(){return hasUpgrade("li",41)},
            onClick(){quickChangeConstElements(this.id,player.at.running)},
            canRun(){return this.canClick()&&player.at.running.includes(this.id)},
            style(){
                bgcolor = tmp.h.color
                bdcolor = this.canClick()?(this.canRun()?"lime":"red"):""
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "200px"}},
            unlocked(){return hasUpgrade("li",41)}
        },
        "At-HeNR":{
            title(){return "氦不再重置任何东西: " + (this.canRun()?"开":"关")},
            canClick(){return hasUpgrade("li",42)},
            onClick(){quickChangeConstElements(this.id,player.at.running)},
            canRun(){return this.canClick()&&player.at.running.includes(this.id)},
            style(){
                bgcolor = tmp.he.color
                bdcolor = this.canClick()?(this.canRun()?"lime":"red"):""
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "200px"}},
            unlocked(){return hasUpgrade("li",42)}
        },
        "At-AGH":{
            title(){return "自动获取氢: " + (this.canRun()?"开":"关")},
            canClick(){return hasUpgrade("li",51)},
            onClick(){quickChangeConstElements(this.id,player.at.running)},
            canRun(){return this.canClick()&&player.at.running.includes(this.id)},
            style(){
                bgcolor = tmp.h.color
                bdcolor = this.canClick()?(this.canRun()?"lime":"red"):""
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "200px"}},
            unlocked(){return hasUpgrade("li",51)}
        },
        "At-HeAR":{
            title(){return "自动重置氦: " + (this.canRun()?"开":"关")},
            canClick(){return hasUpgrade("li",52)},
            onClick(){quickChangeConstElements(this.id,player.at.running)},
            canRun(){return this.canClick()&&player.at.running.includes(this.id)},
            style(){
                bgcolor = tmp.he.color
                bdcolor = this.canClick()?(this.canRun()?"lime":"red"):""
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "200px"}},
            unlocked(){return hasUpgrade("li",52)}
        },
        "At-GLNR":{
            title(){return "转化气体时不消耗: " + (this.canRun()?"开":"关")},
            canClick(){return hasUpgrade("li",43)},
            onClick(){quickChangeConstElements(this.id,player.at.running)},
            canRun(){return this.canClick()&&player.at.running.includes(this.id)},
            style(){
                bgcolor = "linear-gradient(to right,#EEEEEE 12%, cyan 100%)"
                bdcolor = this.canClick()?(this.canRun()?"lime":"red"):""
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "200px"}},
            unlocked(){return hasUpgrade("li",43)}
        },
        "At-BLNR":{
            title(){return "填充气球时不消耗: " + (this.canRun()?"开":"关")},
            canClick(){return hasUpgrade("li",44)},
            onClick(){quickChangeConstElements(this.id,player.at.running)},
            canRun(){return this.canClick()&&player.at.running.includes(this.id)},
            style(){
                bgcolor = "linear-gradient(to right,#EEEEEE 12%, cyan 100%)"
                bdcolor = this.canClick()?(this.canRun()?"lime":"red"):""
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "200px"}},
            unlocked(){return hasUpgrade("li",44)}
        },
        "At-AGGL":{
            title(){return "自动获取氢气和氦气: " + (this.canRun()?"开":"关")},
            canClick(){return hasUpgrade("li",55)},
            onClick(){quickChangeConstElements(this.id,player.at.running)},
            canRun(){return this.canClick()&&player.at.running.includes(this.id)},
            onRun(){//update(diff)中
            },
            style(){
                bgcolor = "linear-gradient(to right,#EEEEEE 12%, cyan 100%)"
                bdcolor = this.canClick()?(this.canRun()?"lime":"red"):""
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "200px"}},
            unlocked(){return hasUpgrade("li",55)}
        },
        "At-AFHE":{
            title(){return "自动填充内燃机: " + (this.canRun()?"开":"关")},
            canClick(){return hasUpgrade("li",45)},
            onClick(){quickChangeConstElements(this.id,player.at.running)},
            canRun(){return this.canClick()&&player.at.running.includes(this.id)},
            onRun(){
                if(this.canRun()){
                    player.h.filling[0] = player.h.points.div(10).max(player.h.filling[0])
                    player.h.filling[1] = player.h.filling[0].mul(5/2)
                }
            },
            style(){
                bgcolor = "orange"
                bdcolor = this.canClick()?(this.canRun()?"lime":"red"):""
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "200px"}},
            unlocked(){return hasUpgrade("li",45)}
        },
        "At-AGHE":{
            title(){return "自动获取氢能: " + (this.canRun()?"开":"关")},
            canClick(){return hasUpgrade("li",54)},
            onClick(){quickChangeConstElements(this.id,player.at.running)},
            canRun(){return this.canClick()&&player.at.running.includes(this.id)},
            onRun(){//update(diff)中
            },
            style(){
                bgcolor = tmp.h.color
                bdcolor = this.canClick()?(this.canRun()?"lime":"red"):""
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "200px"}},
            unlocked(){return hasUpgrade("li",54)}
        },
        "At-ABHeB":{
            title(){return "自动购买氦-3和氦-4: " + (this.canRun()?"开":"关")},
            canClick(){return hasUpgrade("li",53)},
            onClick(){quickChangeConstElements(this.id,player.at.running)},
            canRun(){return this.canClick()&&player.at.running.includes(this.id)},
            onRun(){
                if(this.canRun()){
                    num = [player.he.points.root(2).floor(),player.he.points.root(2.5).sub(4).floor()]
                    player.he.buyables["He-3"] = num[0].max(player.he.buyables["He-3"]).min(20)
                    player.he.buyables["He-4"] = num[1].max(player.he.buyables["He-4"]).min(20)
                }
            },
            style(){
                bgcolor = tmp.he.color
                bdcolor = this.canClick()?(this.canRun()?"lime":"red"):""
                return { 'background':this.canClick()?bgcolor:'#bf8f8f','border-color':bdcolor,'border-radius': "0px",height: "60px", width: "200px"}},
            unlocked(){return hasUpgrade("li",53)}
        },
    },
    update(diff){
        if(autoOpening("AGGL")){
            if(tmp.he.clickables["Blm-hl"].canClick) player.he.helium = player.he.helium.add(tmp.he.clickables["Blm-hl"].heliumGain.mul(diff*0.1))
            if(tmp.he.clickables["Blm-hg"].canClick) player.h.hydrogen = player.h.hydrogen.add(tmp.he.clickables["Blm-hg"].hydrogenGain.mul(diff*0.1))
        }
        if(autoOpening("AGHE")) player.h.energy = player.h.energy.add(tmp.h.clickables["Cbt-b"].energyGain.mul(diff))
    },
    tabFormat:{
        page1:{
            name: "第1页",
            content:[
                ["row",[["clickable","At-Ptc1"],["clickable","At-QNR"],["clickable","At-QAR"]]],
                ["row",[["clickable","At-PtcUrow1"],["clickable","At-ABPU"]]],
                ["row",[["clickable","At-ABHU"],["clickable","At-HNR"],["clickable","At-AGH"]]],
                ["row",[["clickable","At-ABHeU"],["clickable","At-HeNR"],["clickable","At-HeAR"]]],
                ["row",[["clickable","At-GLNR"],["clickable","At-BLNR"],["clickable","At-AGGL"]]],
                ["row",[["clickable","At-AFHE"],["clickable","At-AGHE"],["clickable","At-ABHeB"]]],
            ],
            buttonStyle: {
                "border-color": "cyan"
            },
            unlocked(){return false}
        },
    },
})