addLayer("p", {
    name: "p",
    symbol: "P",
    position: 0,
    startData() { return {
        unlocked: true,
        loading: 1,
        filling: zero,
        points: zero,
        quarkMax: zero,
    }},
    tooltip(){return format(player.p.points,"two") + " 基本粒子"},
    color: "white",
    type: "none",
    row: "side",
    layerShown(){return true},
    hotkeys: [
        {key: "p", description: "P: 暂停游戏", onPress(){
            if(player.devSpeed == 1) player.devSpeed = -1
            else player.devSpeed = 1
        }},
    ],
    upgrades:{
        11:{
            title: "再回元素周期",
            description: "开始游戏!<br>解锁粒子收集器",
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return zero},
            unlocked(){return true},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        12:{
            title: "基础扩容",
            description: "双倍收集器充能上限",
            effect(){return two},
            effectDisplay(){return "x" + format(this.effect())},
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return n(20)},
            unlocked(){return true},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        13:{
            title: "充能加速",
            description: "粒子收集器的充能量直接倍增基本粒子获取",
            effect(){
                let eff = player.p.filling.max(2).log(2)
                return eff},
            effectDisplay(){return "x" + format(this.effect())},
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return n(50)},
            unlocked(){return true},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        14:{
            title: "逆向充能",
            description: "基于基本粒子数量倍增充能效果",
            effect(){
                let eff = player.points.max(5).log(5)
                return eff},
            effectDisplay(){return "x" + format(this.effect())},
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return n(100)},
            unlocked(){return true},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        15:{
            title: "效果延伸",
            description: "'逆向充能'以减弱的效果同时对充能上限生效",
            effect(){
                let eff = upgradeEffect("p",14).pow(0.8)
                return eff},
            effectDisplay(){return "x" + format(this.effect())},
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return n(200)},
            unlocked(){return true},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        21:{
            title: "粒子分化",
            description: "解锁'夸克'页面,夸克总数倍增基本粒子获取",
            effect(){
                let eff = player.p.points.max(1).pow(2)
                if(player.p.points.eq(1)) eff = two
                return eff},
            effectDisplay(){return "x" + format(this.effect())},
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return n(1000)},
            unlocked(){return hasUpgrade("p",15)},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        22:{
            title: "???",
            description: "???",
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return Infinity},
            unlocked(){return hasUpgrade("p",21)},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        23:{
            title: "???",
            description: "???",
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return Infinity},
            unlocked(){return hasUpgrade("p",22)},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        24:{
            title: "???",
            description: "???",
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return Infinity},
            unlocked(){return hasUpgrade("p",23)},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        25:{
            title: "???",
            description: "???",
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return Infinity},
            unlocked(){return hasUpgrade("p",24)},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
    },
    clickables:{
        "Ptc-1":{
            title(){return "充能"},
            display(){
                let a = this.canClick()?("冷却完成!"):("冷却中...("+format(player.p.loading*100*this.loadingMult())+"%)")
                return "为粒子收集器注入能量<br>每次充能使充能进度 +"+format(this.effect())+"<br>" + a},
            canClick(){return player.p.loading>=this.loadingMult()},
            onClick(){
                player.p.loading = 0
                player.p.filling = player.p.filling.add(this.effect()).min(layers.p.bars["filling"].maxium())
            },
            onHold(){
            },
            loadingMult(){
                return 1
            },
            effect(){
                let eff = three
                if(hasUpgrade("p",14)) eff = eff.mul(upgradeEffect("p",14))
                return eff
            },
            style(){return { 'background':this.canClick()?'linear-gradient(to right,white 0%, skyblue 100%)':'#bf8f8f','border-radius': "0px",height: "120px", width: "200px"}},
            unlocked(){return hasUpgrade("p",11)}
        },
        "Ptc-2":{
            title(){return "转化"},
            display(){return "将基本粒子转化为夸克<br><h1>没做完"},
            canClick(){return},
            getQuark(){
                let num = player.points.max(10).div(10).log(this.costBase()).sub(player.p.quarkMax)
                return num
            },
            getNext(){
                let next = this.getQuark().add(player.p.quarkMax).add(1).pow(this.costBase()).mul(10)
                return next
            },
            costBase(){
                let base = n(100)
                return base
            },
            onClick(){
                player.p.quarkMax = player.p.quarkMax.add(this.getQuark())
                player.p.points = player.p.points.add(this.getQuark())
            },
            effect(){
                let eff = three
                if(hasUpgrade("p",14)) eff = eff.mul(upgradeEffect("p",14))
                return eff
            },
            style(){return { 'background':this.canClick()?'linear-gradient(to right,white 0%, skyblue 100%)':'#bf8f8f','border-radius': "0px",height: "120px", width: "200px"}},
            unlocked(){return hasUpgrade("p",11)}
        },
    },
    bars:{
        filling:{
            direction: RIGHT,
            width: 600,
            height: 40,
            req(){
                return player.p.filling.div(this.maxium())
            },
            maxium(){
                let max = ten
                if(hasUpgrade("p",12)) max = max.mul(upgradeEffect("p",12))
                if(hasUpgrade("p",15)) max = max.mul(upgradeEffect("p",15))
                return max
            },
            fillStyle: {'background-color' : "#478EAB"},
            progress() { return this.req() },
            display(){return "粒子收集器-充能进度: "+format(player.p.filling,"two")+"/"+formatWhole(this.maxium())+"("+format(this.req().mul(100),"two")+"%)"},
            unlocked(){return hasUpgrade("p",11)},
        },
    },
    update(diff){
        if(player.p.loading<(1-diff))player.p.loading += diff;else player.p.loading = 1
        if(player.p.filling.gt(0)) player.p.filling = player.p.filling.sub(layers.p.bars["filling"].maxium().mul(0.1*diff)).max(0)
    },
    tabFormat:{
        "主页":{
            content:[
                ["display-text",function(){return "你有 <h2 style='color:white;text-shadow:0px 0px 10px;'>"+format(player.points)+"</h2> 基本粒子"}],
                "blank",
                ["row",[["upgrade",11],["upgrade",12],["upgrade",13],["upgrade",14],["upgrade",15]]],
                "blank",
                ["clickable",'Ptc-1'],["blank",["","5px"]],["bar","filling"],
                ["display-text",function(){if(hasUpgrade("p",11)) return "粒子收集器每秒会将上限的 10% 充能进度转化为基本粒子"}],"blank",
                ["row",[["upgrade",21],["upgrade",22],["upgrade",23],["upgrade",24],["upgrade",25]]],
            ]
        },
        "夸克":{
            content:[
                ["display-text",function(){return "你有 <h2 style='color:white;text-shadow:0px 0px 10px;'>"+format(player.points)+"</h2> 基本粒子"}],
                "blank",["clickable","Ptc-2"]
            ]
        },
    },
})