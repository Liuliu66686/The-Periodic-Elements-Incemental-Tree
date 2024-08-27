const NAMES = ["基本粒子","氢","氦","锂","铍","硼","碳","氮","氧","氟","氖"]
addLayer("p", {
    name: "p",
    symbol: "P",
    position: 1,
    startData() { return {
        unlocked: true,
        points: one,
        buyableAutobuy: true
    }},
    what(){//你猜这是什么
        player.p.points = player.points
    },    
    resource: "基本粒子",
    color: "white",
    type: "none",
    row: "side",
    layerShown(){return true},
    hotkeys: [
        {key: "p", description: "P: 暂停游戏", onPress(){
            if(player.devSpeed.eq(1)) player.devSpeed = n(-1)
            else player.devSpeed = one
        }},
    ],
    upgrades:{       
        11:{
            title:"元素树,启动!",
            description:"开始生产基本粒子",
            effect(){
                let effect = one
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            unlocked: true,
        },
        12:{
            title:"加速生产",
            description:"粒子获取+2",
            effect(){
                let effect = two
                if(hasUpgrade("p",33)&&hasUpgrade("p",13)) effect = effect.mul(upgradeEffect("p",13))
                if(hasUpgrade("p",33)&&hasUpgrade("p",14)) effect = effect.mul(upgradeEffect("p",14))
                if(hasUpgrade("p",33)&&hasUpgrade("p",41)) effect = effect.mul(upgradeEffect("p",41))
                if(hasUpgrade("p",52)&&hasUpgrade("p",33)) effect = effect.mul(upgradeEffect("p",52))
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(5),
            unlocked(){return hasUpgrade("p",11)||hasUpgrade("p",[this.id])},
        },
        13:{
            title:"加速生产+",
            description:"粒子获取x2",
            effect(){
                let effect = two
                if(hasUpgrade("p",33)&&hasUpgrade("p",14)) effect = effect.mul(upgradeEffect("p",14))
                if(hasUpgrade("p",33)&&hasUpgrade("p",41)) effect = effect.mul(upgradeEffect("p",41))
                if(hasUpgrade("p",52)&&hasUpgrade("p",33)) effect = effect.mul(upgradeEffect("p",52))
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(10),
            unlocked(){return hasUpgrade("p",12)||hasUpgrade("p",[this.id])},
        },
        14:{
            title:"加速生产++",
            description:"粒子获取x1.5",
            effect(){
                let effect = new Decimal(1.5)
                if(hasUpgrade("p",33)&&hasUpgrade("p",41)) effect = effect.mul(upgradeEffect("p",41))
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                if(hasUpgrade("p",52)&&hasUpgrade("p",33)) effect = effect.mul(upgradeEffect("p",52))
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(130),
            unlocked(){return hasUpgrade("p",13)||hasUpgrade("p",[this.id])},
        },
        15:{
            title:"加速粒子加速器",
            description:"粒子加速器1效果改进",
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(200),
            unlocked(){return hasUpgrade("p",14)||hasUpgrade("p",[this.id])},
        },
        21:{
            title:"粒子加速器",
            description:"解锁一个可购买",
            effect(){
                let effect = one
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(30),
            unlocked(){return hasUpgrade("p",13)||hasUpgrade("p",[this.id])},
        },
        22:{
            title:"更多粒子加速器",
            description:"粒子加速器1上限加10",
            effect(){
                let effect = ten
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                if(hasUpgrade("p",42)) effect = effect.mul(upgradeEffect("p",42))
                effect = effect.floor()
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(300),
            unlocked(){return hasUpgrade("p",21)||hasUpgrade("p",[this.id])},
        },
        23:{
            title:"粒子粒子",
            description:"粒子增加粒子获取",
            effect(){
                let effect = player.points.max(10).log(10)
                if(hasUpgrade("h",23)) effect = player.points.max(10).log(6)
                if(hasUpgrade("he",22)) effect = player.points.max(10).log(2)
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(50000),
            unlocked(){return hasUpgrade("p",22)||hasUpgrade("p",[this.id])},
        },
        24:{
            title:"氢加速器",
            description:"氢增加粒子获取",
            effect(){
                let effect = player.h.points.add(1.8).log(3)
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(50000),
            unlocked(){return hasUpgrade("h",12)||hasUpgrade("p",[this.id])},
        },
        25:{
            title:"扩充粒子加速器",
            description:"粒子加速器2上限+10",
            effect(){
                let effect = n(10)
                if(hasUpgrade("p",31)) effect = effect.mul(upgradeEffect("p",31))
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(5.24e19),
            unlocked(){return hasUpgrade("he",21)||hasUpgrade("p",[this.id])},
        },
        31:{
            title:"翻倍效果",
            description:"前两行所有升级效果x2",
            effect(){
                let effect = two
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(1500),
            unlocked(){return hasUpgrade("p",22)||hasUpgrade("p",[this.id])},
        },
        32:{
            title:"这是加速生产+++?",
            description:"粒子获取x1.5",
            effect(){
                let effect = n(1.5)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(5000000),
            unlocked(){return hasUpgrade("h",12)||hasUpgrade("p",[this.id])},
        },
        33:{
            title:"这才是加速生产+++!",
            description:"带有“加速生产”且其他字符为“+”或数字的升级效果受到比它更多“+”同时数字相同的升级效果",
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(15000000),
            unlocked(){return hasUpgrade("h",13)||hasUpgrade("p",[this.id])},
        },
        34:{
            title:"啊对对对,这是加速生产++++",
            description:"基本粒子获取x10(不变)",
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(2.6e21),
            unlocked(){return hasUpgrade("p",25)||hasUpgrade("p",[this.id])},
        },
        35:{
            title:"改进粒子加速器",
            description:"改进升级粒子加速器改进的公式(这不是粒子加速器改进)",
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(1e24),
            unlocked(){return hasUpgrade("p",34)||hasUpgrade("p",[this.id])},
        },
        41:{
            title:"加速生产+++",
            description:"粒子获取x2(这是真的)",
            effect(){
                let effect = two
                if(hasUpgrade("p",52)&&hasUpgrade("p",33)) effect = effect.mul(upgradeEffect("p",52))
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(7200000),
            unlocked(){return hasUpgrade("h",12)||hasUpgrade("p",[this.id])},
        },
        42:{
            title:"更多粒子加速器+",
            description:"基于粒子数量增幅升级“更多粒子加速器”效果",
            effect(){
                let effect = player.points.add(1.01).log(100).root(3)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(2.4e12),
            unlocked(){return hasUpgrade("h",13)||hasUpgrade("p",[this.id])},
            
        },
        43:{
            title:"氦量粒子",
            description:"氦加成粒子获取",
            effect(){
                let a = new Decimal(1.34).pow(player.he.points.root(2))
                if(a.gte(50)) a = a.sub(40).log(10).mul(50)
                return a
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(1e45),
            unlocked(){return hasMilestone("li",10)||hasUpgrade("p",[this.id])},
        },
        44:{
            title:"粒子降温",
            description:"基于粒子数量增加温度点获取",
            effect(){
                let effect = seven.pow(player.points.add(10).log(10).root(4))
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(4.6e46),
            unlocked(){return hasUpgrade("p",43)||hasUpgrade("p",[this.id])},
        },
        45:{
            title:"更多粒子加速器++",
            description:"粒子加速器1与粒子加速器2上限+50",
            effect(){
                let effect = n(50)
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(1e48),
            unlocked(){return hasUpgrade("p",44)||hasUpgrade("p",[this.id])},
        },
        51:{
            title:"粒子加速器改进",
            description:"基于氢数量增加粒子加速器2效果基础",
            effect(){
                let effect = player.h.points.add(10).log(10).root(2).sub(1).div(2)
                if(hasUpgrade("p",35)) effect = player.h.points.add(10).log(8).root(1.8).sub(0.8).max(0).div(1.8)
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(7.2e12),
            unlocked(){return hasUpgrade("h",13)||hasUpgrade("p",[this.id])},
        },
        52:{
            title:"加速生产++++",
            description:"基于锂数量加成氢获取",
            effect(){
                let effect = player.li.points.root(4).max(1)
                if(effect.gte(10)) effect = effect.div(10).root(8).add(10)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal(9.4e47),
            unlocked(){return hasUpgrade("p",45)||hasUpgrade("p",[this.id])}
        },
        53:{
            title:"冷却机器",
            description:"每秒自动获取10000%的温度点(相当于1s按100次)",
            effect(){
                let effect = n(100)
                return effect
            },
            effectDisplay(){return format(this.effect().mul(100)) + "%"},
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal("e69"),
            unlocked() {return hasUpgrade("p",52)||hasUpgrade("p",[this.id])}
        },
        54:{
            title:"新的粒子加速器?!",
            description:"解锁粒子加速器3,最大购买粒子加速器1,2,同时这两个可购买不再受上限购买量限制",
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal("1e161"),
            unlocked() {return hasMilestone("be",9)||hasUpgrade("p",[this.id])}
        },
        55:{
            title:"完整粒子升级!!",
            description:"解锁新层级",
            currencyDisplayName:"基本粒子",
            currencyInternalName:"points",
            cost: new Decimal("1e165"),
            unlocked() {return hasMilestone("be",9)||hasUpgrade("p",[this.id])}
        },
    },
    buyables:{
        11: {
            title: "粒子加速器1",
            cost(x) {
                let a = x.add(1).mul(x.div(5).add(1).mul(10))
                if(x.gte(30)) a = x.pow(x.root(2))
                return a
            },
            display() { return "增加基本粒子获取<br>价格：" + format(this.cost()) + "基本粒子<br>当前数量：" + format(getBuyableAmount(this.layer, this.id)) + "<br>当前效果：" + format(this.effect()) + "x<br>上限数量：" + format(this.purchaseLimit())},
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x){
                if(hasUpgrade("h",51)){
                    x = powsoftcap(x,n(30),n(10))
                    let a = five.add(buyableEffect("p",12)).pow(x)
                    a = powsoftcap(a,n(1e30),five)
                    return a
                }
                else {
                    let a = x.mul(0.16666).add(1)
                    if(hasUpgrade("p",15)) a = x.mul(0.6666).add(1)
                    if(getBuyableAmount("p",12).gte(1)) a = x.mul(buyableEffect("p",12).add(0.6666))
                    return a
                }              
            },
            purchaseLimit(){
                let a = ten
                if(hasUpgrade("p",22)) a = a.add(upgradeEffect("p",22))
                if(hasUpgrade("he",21)) a = a.add(upgradeEffect("he",21))
                if(hasUpgrade("p",45)) a = a.add(upgradeEffect("p",45))
                return a
            },
            unlocked(){return hasUpgrade("p",21)},
        },
        12: {
            title: "粒子加速器2",
            cost(x) {
                let a = x.add(1).mul(x.add(1).mul(1e4))
                if(x.gte(8)) a = x.pow(x)
                return a
            },
            display() { return "增加粒子加速器1基础<br>价格：" + format(this.cost()) + "基本粒子<br>当前数量：" + format(getBuyableAmount(this.layer, this.id)) + "<br>当前效果：+" + format(this.effect()) + "<br>上限数量：" + format(this.purchaseLimit())},
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x){
                let addeff = buyableEffect("p",13)
                let a = x.mul(0.16666)
                if(hasUpgrade("p",51)) a = x.mul(n(0.16666).add(upgradeEffect("p",51)))
                a = a.mul(addeff).max(0)
                return a
            },
            purchaseLimit(){
                
                let a = eight
                if(hasUpgrade("p",25)) a = a.add(upgradeEffect("p",25))
                if(hasUpgrade("p",45)) a = a.add(upgradeEffect("p",45))
                return a
            },
            unlocked(){return hasUpgrade("p",21)&&hasUpgrade("p",31)},
        },
        13: {
            title: "粒子加速器3",
            cost(x) {
                x = x.add(3)
                a = x.pow(x.pow(2))
                return a
            },
            display() { return "倍增粒子加速器2效果<br>价格：" + format(this.cost()) + "基本粒子<br>当前数量：" + format(getBuyableAmount(this.layer, this.id)) + "<br>当前效果：" + format(this.effect()) + "x<br>上限数量：" + format(this.purchaseLimit())},
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x){
                let a = x.mul(12.5).max(1)
                return a
            },
            purchaseLimit(){
                let a = n(20)
                return a
            },
            unlocked(){return hasUpgrade("p",54)},
        },
    },
    clickables:{
        11:{
            title:"暂停游戏",
            display() {
                let text = "暂停游戏<br>"
                if(player.devSpeed.eq(-1)) text = text + "(暂停中,再次点击恢复)"
                if(player.devSpeed.eq(1)) text = text + "(游戏正常运行中)"
                return text
            },            
            canClick() {return true},
            onClick() {
                if(player.devSpeed.eq(1)) player.devSpeed = n(-1)
                else player.devSpeed = one
            },
            unlocked() {return true},
        },
    },
    tabFormat:["main-display","prestige-button","blank","buyables","upgrades","blank","clickables"],
})
/*
/////
/hhh/
/hhh/
/hhh/
/hhhhhhhhhh/
/hhhhhhhhhhh/
/hhh/   /hhh/
/hhh/   /hhh/
/hhh/   /hhh/
/hhh/   /hhh/
*/
addLayer("h", {
    name: "h",
    symbol: "H",
    position: 0, 
    startData() { return {
        unlocked: false,
        balloon: new Decimal(0),
        power: new Decimal(0),
		points: new Decimal(0),
        balloonMax: new Decimal(0),
        upTime: new Decimal(0),
        keepUpTime: true,
        upgradeAutobuy: true,
        autoGetHpowerBalloon: true,
        autoGetBalloon: true,
    }},
    color: "#7CDCF0",
    requires: new Decimal(2e6),
    resource: "氢",
    baseResource: "基本粒子",
    baseAmount() {return player.points},
    type: "normal", 
    exponent: 0.5,
    gainMult() {
        mult = one
        if(hasUpgrade("h",15)) mult = mult.add(upgradeEffect("h",15))
        if(hasUpgrade("h",22)) mult = mult.mul(upgradeEffect("h",22))
        if(hasUpgrade("h",13)) mult = mult.mul(upgradeEffect("h",13))
        if(hasUpgrade("h",14)) mult = mult.mul(upgradeEffect("h",14))
        if(hasUpgrade("h",31)) mult = mult.mul(upgradeEffect("h",31))
        if(hasUpgrade("he",11)) mult = mult.mul(upgradeEffect("he",11))
        if(hasMilestone("h",0)) mult = mult.mul(layers.h.balloonBoostH())
        if(player.li.unlocked) mult = mult.mul(layers.li.LiboostH())
        if(player.h.upTime.gt(0)) mult = mult.mul(layers.h.boomedBalloonBoostH())
        if(getBuyableAmount("he",12).gte(1)) mult = mult.mul(buyableEffect("he",12))
        if(hasMilestone("he",0)) mult = mult.mul(layers.he.temPointBoostH())
        if(hasUpgrade("p",52)) mult = mult.mul(upgradeEffect("p",52))
        if(player.c.energy.gte(1)) mult = mult.mul(layers.c.CEeffect2())
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = one
        if(player.b.inBorane) exp = exp.mul(0.5)
        return exp
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "h", description: "H: 进行氢重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    passiveGeneration() { 
        let a = new Decimal(0)
        if(hasUpgrade("h",44)) a = upgradeEffect("h",44).div(100)
        if(hasMilestone("li",2)&&player.h.upgradeAutobuy) a = a.max(0.01)
        if(hasMilestone("li",7)) a = a.max(1)
        return a
     },
    upgrades:{
        11:{
            title:"氢原子",
            description:"基本粒子获取基于氢提升(为0有效)",
            effect(){
                let effect = one.add(player.h.points.add(1).mul(10).log(10))
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(1),
            unlocked(){return player.h.unlocked},
        },
        12:{
            title:"氢原子核",
            description:"解锁更多基本粒子升级与另一类氢升级，基本粒子获取x1.1",
            effect(){
                let effect = n(1.1)
                if(hasUpgrade("h",24)) effect = effect.mul(1.1)
                if(hasUpgrade("h",43)) effect = effect.mul(10)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(2),
            unlocked(){return (hasUpgrade("h",11))},
        },   
        13:{
            title:"氘原子",
            description:"解锁更多基本粒子升级，氢获取x1.1",
            effect(){
                let effect = n(1.1)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(10),
            unlocked(){return (hasUpgrade("h",12))&&hasUpgrade("h",23)},
        },     
        14:{
            title:"氚原子",
            description:"氢数量增幅氢获取",
            effect(){
                let effect = player.h.points.add(10).log(10).root(1.4)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(3000),
            unlocked(){return (hasUpgrade("h",13))&&hasUpgrade("h",23)},
        },    
        15:{
            title:"氢+",
            description:"气球数量增幅氢基础获取",
            effect(){
                let effect = player.h.balloon.pow(2)
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            cost: new Decimal(69),
            unlocked(){return player.be.unlocked},
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
        },   
        21:{
            title:"氢核外电子#1",
            description:"基本粒子获取x1.1",
            effect(){
                let effect = n(1.1)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(5),
            unlocked(){return (hasUpgrade("h",12))},
        },
        22:{
            title:"氢质子#1",
            description:"氢获取x1.1",
            effect(){
                let effect = n(1.1)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(5),
            unlocked(){return (hasUpgrade("h",21))},
        },
        23:{
            title:"氢中子#1,2",
            description:"在第一行解锁更多氢升级，升级“粒子粒子”公式改进",
            cost: new Decimal(10),
            unlocked(){return (hasUpgrade("h",22))},
        },
        24:{
            title:"氢气球",
            description:"解锁氢气球，“氢原子核”效果x1.1(不变)",
            cost: new Decimal(1e5),
            unlocked(){return (hasUpgrade("h",14))&&hasUpgrade("p",51)},
        },     
        25:{
            title:"扩容",
            description:"气球数量增幅锂电池上限",
            effect(){
                let effect = player.h.balloon.pow(0.6).add(1)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(70),
            unlocked(){return player.be.unlocked},
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
        },   
        31:{
            title:"H₂(氢气分子)",
            description:"氢获取基于氢能提升",
            effect(){
                let effect = player.h.power.add(1).root(4)
                if(effect.gte(10)) effect = effect.div(9).log(4).add(9)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(2),
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
            unlocked(){return (hasMilestone("h",0))},
        },       
        32:{
            title:"H+(氢离子)",
            description:"氢能获取基于气球提升",
            effect(){
                let effect = player.h.balloon.add(1)
                if(effect.gte(10)) effect = effect.div(10).log(2).add(10)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(3),
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
            unlocked(){return (hasUpgrade("h",31))},
        }, 
        33:{
            title:"H-(氢负离子)",
            description:"氢能获取基于氢能提升",
            effect(){
                let effect = player.h.power.add(1).root(5)
                if(effect.gte(10)) effect = effect.div(9).log(5).add(9)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(4),
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
            unlocked(){return (hasUpgrade("h",32))},
        },
        34:{
            title:"H up(氢提升)",
            description:"气球提升氢获取公式改进",
            cost: new Decimal(5),
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
            unlocked(){return (hasUpgrade("h",33))},
        },
        35:{
            title:"扩容增幅",
            description:"升级扩容的效果同时对电能获取速度生效(hint:关键时刻不要忘记手点获取氢能)",
            cost: new Decimal(77),
            unlocked(){return hasMilestone("be",2)},
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
        },   
        41:{
            title:"爆炸",
            description:"解锁气球爆炸",
            cost: new Decimal(5e9),
            unlocked(){return player.he.unlocked},
        },
        42:{
            title:"更强的爆炸",
            description:"爆炸提升的持续时间加强爆炸提升的效果,爆炸效果持续时间+20s",
            effect(){
                let effect = n(20)
                return effect
            },
            effectDisplay(){return "+"+formatTime(this.effect())},
            cost: new Decimal(7),
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
            unlocked(){return (hasUpgrade("h",41))},
        },
        43:{
            title:"新的气球",
            description:"解锁氦气球，“氢原子核”效果x10(不变)",
            cost: new Decimal(11),
            unlocked(){return (hasUpgrade("h",42))},
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
        },    
        44:{
            title:"转移中心",
            description:"解锁氦层更多升级，每秒自动获取重置时的1%氢",
            effect(){
                let effect = one
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())+"%"},
            cost: new Decimal(14),
            unlocked(){return (hasUpgrade("h",43))},
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
        },    
        45:{
            title:"更强的爆炸II",
            description:"气球与氦气球爆炸效果持续时间基于氢能提升,改进升级更强的爆炸所带来的效果提升公式",
            effect(){
                let effect = player.h.power.add(10).log(10)
                return effect
            },
            effectDisplay(){return "+"+formatTime(this.effect())},
            cost: new Decimal(82),
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
            unlocked(){return hasMilestone("be",2)},
        },  
        51:{
            title:"粒子加速器1提升",
            description:"重构购买项粒子加速器1的效果公式",
            cost: new Decimal(100),
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
            unlocked(){return hasMilestone("h",5)},
        },  
        52:{
            title:"氢能软上限提升",
            description:"基于气球延迟氢能获取的软上限",
            cost: new Decimal(108),
            effect(){
                let eff = n(1.5).pow(player.h.balloon)
                eff = powsoftcap(eff,n(1e100),ten)
                return eff
            },
            effectDisplay(){return "x"+format(this.effect())},
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
            unlocked(){return hasMilestone("h",5)},
        },  
        53:{
            title:"深度转生宝石",
            description:"移除计算转生宝石获取基于深度部分的软上限",
            cost: new Decimal(124),
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
            unlocked(){return hasMilestone("h",5)},
        }, 
        54:{
            title:"奖励宝石增幅",
            description:"奖励宝石获取^2",
            cost: new Decimal(136),
            effect(){
                let eff = two
                return eff
            },
            effectDisplay(){return "^"+format(this.effect())},
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
            unlocked(){return hasMilestone("h",5)},
        },
        55:{
            title:"强度折算弱化",
            description:"强度超级折算的指数-0.5",
            cost: new Decimal(139),
            effect(){
                let eff = n(0.5)
                return eff
            },
            effectDisplay(){return "-"+format(this.effect())},
            currencyDisplayName: "气球",
            currencyInternalName: "balloon",
            currencyLayer: "h",
            unlocked(){return hasMilestone("h",5)},
        },
    },
    milestones:{
        0:{
            requirementDescription: "1个气球",
            effectDescription: "氢能获取x5,氢获取基于气球而增加,解锁新的氢升级",
            done(){return player.h.balloon.gte(1)},
            unlocked: true,
        },
        1:{
            requirementDescription: "6个气球",
            effectDescription: "解锁新层级",
            done(){return player.h.balloon.gte(6)},
            unlocked(){return player.h.balloonMax.gte(4)||hasMilestone("h",1)},
        },
        2:{
            requirementDescription: "9个气球&1.5e9氢能",
            effectDescription: "解锁氦层可购买",
            done(){return player.h.balloon.gte(9)&&player.h.power.gte(1.5e9)},
            unlocked(){return player.he.unlocked},
        },
        3:{
            requirementDescription: "10个氦气球",
            effectDescription: "基本粒子获取基于氦气球而增加",
            done(){return player.he.balloon.gte(10)},
            unlocked(){return hasUpgrade("h",43)},
        },
        4:{
            requirementDescription: "14个氦气球&15氦",
            effectDescription: "解锁爆炸氦气球",
            done(){return player.he.balloon.gte(14)&&player.he.points.gte(15)},
            unlocked(){return hasMilestone("h",3)},
        },
        5:{
            requirementDescription: "100气球",
            effectDescription: "解锁第五行氢升级",
            done(){return player.h.balloon.gte(100)},
            unlocked(){return hasMilestone("h",4)},
        },
    },
    clickables:{
        11:{
            title:"将氢转化成氢能",
            display() {return "将你50%的氢转化成氢能<br>当前转化获取量:" + format(layers.h.HpowerGet()) + "<br>(下限转化12500氢)"},
            unlocked() {return true},
            canClick() {return player.h.points.gte(25000)},
            onClick() {
                player.h.power = player.h.power.add(layers.h.HpowerGet())
                player.h.points = player.h.points.div(2)
            },
        },
        12:{
            title:"将氢能输入进气球",
            display() {return "将你100%的氢能转化成气球(批量)<br>转化后气球数量:" + format(player.h.power.add(1).log(layers.h.balloonFloor()).sub(2).floor().max(0)) + "下一个气球:" + format(layers.h.balloonFloor().pow(player.h.power.add(1).log(layers.h.balloonFloor()).sub(2).floor().add(3))) + "氢能<br>(购买项制)"},
            unlocked() {return true},
            canClick() {return player.h.power.gte(layers.h.balloonFloor().pow(player.h.balloon.add(3)))},
            onClick() {
                player.h.balloon = player.h.power.add(1).log(layers.h.balloonFloor()).sub(2).floor()
                if(player.h.balloonMax.lt(player.h.power.add(1).log(layers.h.balloonFloor()).sub(2).floor())) player.h.balloonMax = player.h.power.add(1).log(10).sub(2).floor()
                player.h.power = zero
            },
        },
        13:{
            title:"将氦输入进气球",
            display() {return "将你100%的氦转化成氦气球(批量)<br>转化后氦气球数量:" + format(player.he.points) + "下一个氦气球:" + format(player.he.points.add(1)) + "氦<br>(购买项制)"},
            unlocked() {return hasUpgrade("h",43)},
            canClick() {return player.he.points.gte(player.he.balloon.add(1))},
            style() { return { 'background-color': this.canClick()?"#DDDDDD":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#000000",'border-radius': "30px", height: "120px", width: "120px" } },
            onClick() {
                player.he.balloon = player.he.points
                if(!hasUpgrade("he",31)) player.he.points = zero
            },
        },
        21:{
            title:"爆炸气球!",
            display() {return "将你50%(向下取整)的气球爆炸!<br>爆炸带来的影响:氢能获取x" + format(layers.h.boomedBalloonBoostHpower()) + ",氢获取x" + format(layers.h.boomedBalloonBoostH()) + ",<br>持续时间:" + formatTime(player.h.upTime) + "<br>爆炸后增加持续时间:<br>" + formatTime(layers.h.addUpTime()) + "<br>上限持续时间:" + formatTime(layers.h.boomedBalloonBoostLimitTime())},            
            canClick() {return player.h.balloon.gte(2)},
            onClick() {
                player.h.upTime = player.h.upTime.add(layers.h.addUpTime())
                player.h.balloon = player.h.balloon.sub(player.h.balloon.div(2).floor())               
            },
            unlocked() {return hasUpgrade("h",41)},
        },
        22:{
            title:"爆炸氦气球!",
            display() {return "将你50%(向下取整)的气球爆炸!<br>爆炸带来的影响:氢能获取x" + format(layers.he.boomedBalloonBoostHpower()) + ",基本粒子获取x" + format(layers.he.boomedBalloonBoostPoints()) + ",<br>持续时间:" + formatTime(player.he.upTime) + "<br>爆炸后增加持续时间:<br>" + formatTime(layers.he.addUpTime()) + "<br>上限持续时间:" + formatTime(layers.he.boomedBalloonBoostLimitTime())},            
            canClick() {return player.he.balloon.gte(2)},
            style() { return { 'background-color': this.canClick()?"#EEEEEE":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#000000",'border-radius': "30px", height: "130px", width: "120px" } },
            onClick() {
                player.he.upTime = player.he.upTime.add(layers.he.addUpTime())
                 player.he.balloon = player.he.balloon.sub(player.he.balloon.div(2).floor())               
            },
            unlocked() {return hasMilestone("h",4)},
        },
    },
    update(diff){
        if(player.h.upTime.gt(0)) player.h.upTime = player.h.upTime.sub(diff)
        if(player.h.upTime.lt(0)) player.h.upTime = zero
        if(player.h.upTime.gt(layers.h.boomedBalloonBoostLimitTime())) player.h.upTime = layers.h.boomedBalloonBoostLimitTime()
        if(player.he.upTime.gt(0)) player.he.upTime = player.he.upTime.sub(diff)
        if(player.he.upTime.lt(0)) player.he.upTime = zero
        if(player.he.temPointUpTime.gt(0)) player.he.temPointUpTime = player.he.temPointUpTime.sub(diff)
        if(player.he.temPointUpTime.lt(0)) player.he.temPointUpTime = zero
        if(player.he.upTime.gt(layers.he.boomedBalloonBoostLimitTime())) player.he.upTime = layers.he.boomedBalloonBoostLimitTime()
        if(player.h.keepUpTime&&hasMilestone("li",1)) player.h.upTime = layers.h.boomedBalloonBoostLimitTime()
        if(player.he.keepUpTime&&hasMilestone("li",4)) player.he.upTime = layers.he.boomedBalloonBoostLimitTime()
        if(player.h.upgradeAutobuy&&(hasMilestone("li",2)||hasUpgrade("c",11))){
            buyUpgrade("h",11);buyUpgrade("h",12);buyUpgrade("h",13);buyUpgrade("h",14);buyUpgrade("h",21);buyUpgrade("h",22);buyUpgrade("h",23);buyUpgrade("h",24);buyUpgrade("h",31);buyUpgrade("h",32);buyUpgrade("h",33);buyUpgrade("h",34);buyUpgrade("h",41);buyUpgrade("h",42);buyUpgrade("h",43);buyUpgrade("h",44)
            if(hasUpgrade("li",71)||hasUpgrade("c",11)){
                buyUpgrade("h",15);buyUpgrade("h",25);buyUpgrade("h",35);buyUpgrade("h",45)
            }
        }
        if(player.he.upgradeAutobuy&&(hasMilestone("li",3)||hasUpgrade("c",11))){
            buyUpgrade("he",11);buyUpgrade("he",12);buyUpgrade("he",21);buyUpgrade("he",22);buyUpgrade("he",23);buyUpgrade("he",24);buyUpgrade("he",31);buyUpgrade("he",32);buyUpgrade("he",33);buyUpgrade("he",34);
            if(hasUpgrade("li",71)||hasUpgrade("c",11)){
                buyUpgrade("he",41);buyUpgrade("he",42);buyUpgrade("he",43);buyUpgrade("he",44);buyUpgrade("he",45);buyUpgrade("he",51);buyUpgrade("he",52);buyUpgrade("he",53);buyUpgrade("he",54);buyUpgrade("he",55);buyUpgrade("he",61);buyUpgrade("he",62);buyUpgrade("he",63)
            }
        } 
        if(hasMilestone("li",5)&&player.h.autoGetHpowerBalloon) {
            player.h.power = player.h.power.add(layers.h.HpowerGet().div(hasMilestone("b",4)?0.1:10).mul(diff))
            player.h.balloon = player.h.power.add(1).log(layers.h.balloonFloor()).sub(2).floor()
            if(player.h.balloonMax.lt(player.h.balloon)) player.h.balloonMax = player.h.balloon
            if(player.h.balloon.lt(player.h.balloonMax)) player.h.balloon = player.h.balloonMax
        }
        if(hasMilestone("li",6)&&player.he.autoGetBalloon) {
            player.he.balloon = player.he.points.max(0)
        }
        if(hasMilestone("li",7)&&player.he.buyableAutobuy) {
            buyBuyable("he",11);buyBuyable("he",12)
        }
        if(hasMilestone("li", 8)&&player.p.buyableAutobuy) {
            if(hasUpgrade("p",54)){
                let amount11 = player.p.points.root(2).max(1).ssqrt().pow(2).floor().add(1)
                let amount12 = player.p.points.max(1).ssqrt().floor().add(1)
                if(getBuyableAmount("p",11).lt(amount11)) setBuyableAmount("p",11,amount11)
                if(getBuyableAmount("p",12).lt(amount12)) setBuyableAmount("p",12,amount12)
            }
            else {buyBuyable("p",11);buyBuyable("p",12)}
        }
    },
    balloonBoostH(){
        let mult = player.h.balloon.add(1).pow(2)
        if(hasUpgrade("h",34)) mult = player.h.balloon.add(1).pow(3)        
        return mult
    },
    HpowerGet(){
        let get = player.h.points.div(2).root(2)
        if(hasMilestone("h",0)) get = get.mul(5)
        if(hasUpgrade("h",32)) get = get.mul(upgradeEffect("h",32))
        if(hasUpgrade("h",33)) get = get.mul(upgradeEffect("h",33))
        if(getBuyableAmount("he",11).gte(1)) get = get.mul(buyableEffect("he",11))
        if(player.h.upTime.gt(0)) get = get.mul(layers.h.boomedBalloonBoostHpower())
        if(player.he.upTime.gt(0)) get = get.mul(layers.he.boomedBalloonBoostHpower())
        if(player.li.unlocked) get = get.mul(layers.li.LiboostHpower())
        if(hasUpgrade("li",42)) get = get.mul(upgradeEffect("li",42))
        if(hasMilestone("he",7)) get = get.mul(layers.he.temPointBoostHpower())
        if(player.be.depth.gte(36)) get = get.mul(layers.be.depthEffect2())

        if(get.gte("e61")) get = powsoftcap(get,layers.h.HpowerGetsoftcap1start(),three) //1软

        if(hasUpgrade("b",22)) get = get.mul(upgradeEffect("b",22))
        if(player.c.energy.gte(1)) get = get.mul(layers.c.CEeffect2())

        if(player.b.inBorane) get = get.pow(0.8)
        return get
    },
    HpowerGetsoftcap1start(){
        let start = n("e61")
        if(hasUpgrade("h",52)) start = start.mul(upgradeEffect("h",52))
        return start
    },
    addUpTime(){
        let t = player.h.balloon.div(2).floor().mul(10)
        return t
    },
    boomedBalloonBoostH(){
        let mult = four 
        if(hasUpgrade("h",42)&&!hasUpgrade("h",45)) mult = mult.mul(player.h.upTime.root(2).add(1))
        if(hasUpgrade("h",45)) mult = mult.mul(player.h.upTime.add(1))
        return mult
    },  
    boomedBalloonBoostHpower(){
        let mult = five
        if(hasUpgrade("h",42)&&!hasUpgrade("h",45)) mult = mult.mul(player.h.upTime.root(3).add(1))
        if(hasUpgrade("h",45)) mult = mult.mul(player.h.upTime.add(1))
        return mult
    }, 
    boomedBalloonBoostLimitTime(){
        let t = n(30)
        if(hasUpgrade("h",42)) t = t.add(upgradeEffect("h",42))
        if(hasUpgrade("h",45)) t = t.add(upgradeEffect("h",45))
        return t
    },
    balloonFloor(){
        let floor = ten
        if(player.be.depth.gt(1300)) floor = floor.sub(layers.be.depthEffect4())
        if(player.b.inBorane) floor = floor.add(10)
        return floor
    },
    tabFormat: { 
        "homepage": {   
            content: [
                "main-display",
                "prestige-button",                
                ["display-text",
                    function(){return "你有 "+format(player.points)+" 基本粒子"}],
                "blank",["upgrades",[1,2,3,4,5]]
            ],
            unlocked(){return hasUpgrade("h",24)||player.li.unlocked}
        },
        "balloon":{
            content: [
                "main-display",
                "prestige-button",                
                ["display-text",
                    function(){return "你有 "+format(player.points)+" 基本粒子"}],
                "blank",["clickables",[1]],
                ["display-text",function(){
                    let a = "你有 "+format(player.h.power)+" 氢能"
                    if(layers.h.HpowerGet().gt(layers.h.HpowerGetsoftcap1start())) a = a + "(获取数量已达软上限)"
                    return a}],
                ["display-text",function(){
                    let a = "你有 "+format(player.h.balloon)+" 气球"
                    let b = "" 
                    if(hasMilestone("h",0)) b = ",气球增幅氢获取" + format(layers.h.balloonBoostH()) + "x"
                    return a + b}],["display-text",function(){
                        let a = ""
                        let b = ""
                        if(hasUpgrade("h",43)) a = "你有 "+format(player.he.balloon)+" 氦气球"
                        if(hasMilestone("h",3)) b = ",氦气球增幅基本粒子获取" + format(layers.he.balloonBoostPoints()) + "x"
                        return a + b}],
                    ["clickables",[2]],
                "milestones",
            ],
            unlocked(){return hasUpgrade("h",24)}
        },
    }, 
})
/*
////
/hh/
/hh/
/hh/
/hhhhhhhh/      eeeeee
/hhhhhhhhh/    ee    ee
/hh/   /hh/    Celestee     uwu
/hh/   /hh/    ee           去玩Celeste!
/hh/   /hh/    ee    ee
/hh/   /hh/     eeeeee
*/
addLayer("he", {
    name: "he",
    symbol: "He",
    position: 1,
    branches: ["h"],
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        balloon: new Decimal(0),
        upTime: new Decimal(0),
        autoReset: true,
        upgradeAutobuy: true,
        keepUpTime: true,
        autoGetBalloon: true,
        temperature: new Decimal(1.4e32),
        temPoint: new Decimal(0),
        buyableAutobuy: true,
        temPointUpTime: new Decimal(0),
        clicks: new Decimal(0),
        autoTemPoint: false,
    }},
    color: "#EEEEEE",
    requires: new Decimal("e14"),
    resource: "氦",
    baseResource: "基本粒子",
    baseAmount() {return player.points},
    type: "static",
    exponent: 1,
    gainMult() {
        mult = one
        if(player.li.unlocked) mult = mult.div(layers.li.LidivHecost())
        if(hasMilestone("he",1)) mult = mult.div(layers.he.temPointdivHecost())
        if(upgradeEffect("b",32)) mult = mult.div(upgradeEffect("b",32))
        if(player.c.energy.gte(1)) mult = mult.div(layers.c.CEeffect2())
        return mult
    },
    gainExp() {
        exp = one
        return exp
    },
    row: 0,
    hotkeys: [
        {key: "e", description: "E: 进行氦重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasMilestone("h",1)||player.he.unlocked},
    canBuyMax(){return hasUpgrade("he",31)||hasMilestone("li",3)},
    autoPrestige() {return hasMilestone("li",0)&&player.he.autoReset},
    resetsNothing() {return hasMilestone("li",0)},
    upgrades:{
        11:{
            title:"氦原子",
            description:"氢获取基于氦而提升",
            effect(){
                let effect = player.he.points.add(1).pow(2)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(1),
            unlocked(){return player.he.unlocked},
        },
        12:{
            title:"氦原子核",
            description:"基本粒子获取基于氦而提升",
            effect(){
                let effect = player.he.points.add(1)
                if(effect.gte(10)) effect = effect.div(10).root(2).add(10)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(3),
            unlocked(){return player.he.unlocked},
        },
        21:{
            title:"氦电子#1",
            description:"增加更多基本粒子升级,购买项粒子加速器1上限+50",
            effect(){
                let effect = n(50)
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            cost: new Decimal(19),
            unlocked(){return hasUpgrade("h",44)},
        },
        22:{
            title:"氦电子#2",
            description:"基本粒子获取x8,升级粒子粒子公式再次改进",
            effect(){
                let effect = n(8)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(21),
            unlocked(){return hasUpgrade("he",21)},
        },
        23:{
            title:"氦质子#1",
            description:"基本粒子获取同时受到可购买氦-3的效果",
            cost: new Decimal(30),
            unlocked(){return hasUpgrade("he",22)},
        },
        24:{
            title:"氦质子#2",
            description:"基本粒子获取也同时受到可购买氦-4的效果",
            cost: new Decimal(35),
            unlocked(){return hasUpgrade("he",23)},
        },
        31:{
            title:"氦中子#1",
            description:"氦气球转化不消耗氦,最大重置氦",
            cost: new Decimal(46),
            unlocked(){return hasUpgrade("he",24)},
        },
        32:{
            title:"氦中子#2",
            description:"爆炸氦气球效果的持续时间越高,效果越强,上限持续时间+1m",
            effect(){
                let effect = n(60)
                return effect
            },
            effectDisplay(){return "+"+formatTime(this.effect())},
            cost: new Decimal(47),
            unlocked(){return hasUpgrade("he",31)},
        },
        33:{
            title:"氦-3 +",
            description:"氦-3效果公式改进",
            cost: new Decimal(51),
            unlocked(){return hasUpgrade("he",32)},
        },
        34:{
            title:"氦-4 +",
            description:"氦-4效果公式改进",
            cost: new Decimal(54),
            unlocked(){return hasUpgrade("he",33)},
        },
        41:{
            title:"开始冷却!",
            description:"解锁冷却可点击",
            cost: new Decimal(66),
            unlocked(){return hasMilestone("li",4)},
        },
        42:{
            title:"加速生产1",
            description:"温度点获取x12<br>(补充说明:同等数字更多加的升级才会给更少加的升级加成)",
            cost: new Decimal(120),
            effect(){
                let effect = n(12)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            unlocked(){return hasUpgrade("he",41)},
            currencyDisplayName: "温度点",
            currencyInternalName: "temPoint",
            currencyLayer: "he",
        },
        43:{
            title:"效果发散",
            description:"基于氦提升温度点第一效果软上限",
            cost: new Decimal(79),
            effect(){
                let effect = player.he.points.add(1)
                if(hasUpgrade("b",34)) effect = effect.pow(upgradeEffect("b",34))
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            unlocked(){return hasUpgrade("he",42)},
        },
        44:{
            title:"再次冷却",
            description:"解锁新的冷却可点击",
            cost: new Decimal(500000),
            unlocked(){return hasUpgrade("he",43)},
            currencyDisplayName: "温度点",
            currencyInternalName: "temPoint",
            currencyLayer: "he",
        },
        45:{
            title:"调节温度",
            description:"修改计算温度公式<br>(^2->^3)",
            cost: new Decimal(6666666),
            unlocked(){return hasUpgrade("he",44)},
            currencyDisplayName: "温度点",
            currencyInternalName: "temPoint",
            currencyLayer: "he",
        },
        51:{
            title:"指数提升",
            description:"基于锂加成温度点第三效果的指数",
            effect(){
                let effect = player.li.points.root(2).div(10)
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            cost: new Decimal(7e7),
            unlocked(){return hasUpgrade("he",45)},
            currencyDisplayName: "温度点",
            currencyInternalName: "temPoint",
            currencyLayer: "he",
        },
        52:{
            title:"效果发散II",
            description:"基于锂提升温度点第三效果软上限",
            cost: new Decimal("e9"),
            effect(){
                let effect = player.li.points.add(1)
                if(hasUpgrade("b",34)) effect = effect.pow(upgradeEffect("b",34))
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            unlocked(){return hasUpgrade("he",51)},
            currencyDisplayName: "温度点",
            currencyInternalName: "temPoint",
            currencyLayer: "he",
        },
        53:{
            title:"冷却推进",
            description:"基于温度点增强“提升冷却氦”的效果",
            cost: new Decimal("2e16"),
            effect(){
                let effect = player.he.temPoint.add(2).log(2).pow(1.3)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            unlocked(){return hasUpgrade("he",52)},
            currencyDisplayName: "温度点",
            currencyInternalName: "temPoint",
            currencyLayer: "he",
        },
        54:{
            title:"强化冷却",
            description:"氦提升温度点获取",
            cost: new Decimal("3e19"),
            effect(){
                let effect = new Decimal(1.05).pow(player.he.points)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            unlocked(){return hasUpgrade("he",53)},
            currencyDisplayName: "温度点",
            currencyInternalName: "temPoint",
            currencyLayer: "he",
        },
        55:{
            title:"强化冷却II",
            description:"温度点获取基于氢提升",
            cost: new Decimal("1e24"),
            effect(){
                let effect = player.h.points.add(10).log(10).pow(2).add(1).div(2)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            unlocked(){return hasUpgrade("he",54)},
            currencyDisplayName: "温度点",
            currencyInternalName: "temPoint",
            currencyLayer: "he",
        },
        61:{
            title:"强化冷却III",
            description:"温度点获取基于铍提升",
            cost: new Decimal("1e61"),
            effect(){
                let effect = player.be.points.add(3).log(3).pow(2).add(1).div(2).min(75.2)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            unlocked(){return hasUpgrade("he",55)&&hasMilestone("be",2)},
            currencyDisplayName: "温度点",
            currencyInternalName: "temPoint",
            currencyLayer: "he",
        },
        62:{
            title:"扩容II",
            description:"温度点数量增幅锂电池上限",
            cost: new Decimal("1e63"),
            effect(){
                let effect = player.he.temPoint.add(10).log(10).mul(2)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            unlocked(){return hasUpgrade("he",55)&&hasMilestone("be",2)},
            currencyDisplayName: "温度点",
            currencyInternalName: "temPoint",
            currencyLayer: "he",
        },
        63:{
            title:"调节温度II",
            description:"完全修改温度点计算温度的公式",
            cost: new Decimal("1e69"),
            unlocked(){return hasUpgrade("he",55)&&hasMilestone("be",2)},
            currencyDisplayName: "温度点",
            currencyInternalName: "temPoint",
            currencyLayer: "he",
        },
        64:{
            title:"时间扩容",
            description:"电能数量提升提升冷却氦的时间上限",
            effect(){
                let effect = player.li.currentElectricity.add(2).log(2)
                return effect
            },
            cost: new Decimal("1e80"),
            effectDisplay(){return "x"+format(this.effect())},
            unlocked(){return hasUpgrade("he",63)&&hasMilestone("be",8)},
            currencyDisplayName: "温度点",
            currencyInternalName: "temPoint",
            currencyLayer: "he",
        },
        65:{
            title:"计算优化转换",
            description:"镐子伤害计算优化,深度计算速率不再受刷新率影响,修改深度计算公式和深度进度条上的文本,深度奖励宝石持续触发",
            cost: new Decimal("1e87"),
            unlocked(){return hasUpgrade("he",63)&&hasMilestone("be",8)},
            currencyDisplayName: "温度点",
            currencyInternalName: "temPoint",
            currencyLayer: "he",
        },
    },
    buyables:{
        11:{
            title: "氦-3",
            cost(x) {
                let a = x.pow(2).add(1).floor()
                return a
            },
            display() { return "增加氢能获取<br>价格：" + format(this.cost()) + "氦(不消耗)<br>当前数量：" + format(getBuyableAmount(this.layer, this.id)) + "<br>当前效果：" + format(this.effect()) + "x<br>上限数量：" + format(this.purchaseLimit())},
            canAfford() { return player.he.points.gte(this.cost())},
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x){
                let a = x.add(1)
                if(hasUpgrade("he",33)) a = a.pow(1.5)
                return a
            },
            purchaseLimit(){
                let a = n(100)
                return a
            },
            unlocked(){return hasMilestone("h",2)},
        },
        12:{
            title: "氦-4",
            cost(x) {
                let a = x.add(1)
                if(x.gte(35)) a = x.pow(1.03).add(1).floor()
                return a
            },
            display() { return "增加氢获取<br>价格：" + format(this.cost()) + "氦(不消耗)<br>当前数量：" + format(getBuyableAmount(this.layer, this.id)) + "<br>当前效果：" + format(this.effect()) + "x<br>上限数量：" + format(this.purchaseLimit())},
            canAfford() { return player.he.points.gte(this.cost()) },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x){
                let a = x.pow(2).add(1)
                if(hasUpgrade("he",34)) a = x.pow(2).add(x.mul(50).add(1))
                return a
            },
            purchaseLimit(){
                let a = n(100)
                return a
            },
            unlocked(){return hasMilestone("h",2)},
        }, 
    },
    milestones:{
        0:{
            requirementDescription: "氦温度低于2.5e31",
            effectDescription: "解锁温度点第一效果",
            done(){return player.he.temperature.lte(2.5e31)},
            unlocked(){return hasMilestone("li",4)},
        },
        1:{
            requirementDescription: "氦温度低于7e29",
            effectDescription: "解锁温度点第二效果",
            done(){return player.he.temperature.lte(7e29)},
            unlocked(){return hasMilestone("he",0)},
        },
        2:{
            requirementDescription: "氦温度低于1.1e28",
            effectDescription: "解锁温度点第三效果",
            done(){return player.he.temperature.lte(1.1e28)},
            unlocked(){return hasMilestone("he",0)},
        },
        3:{
            requirementDescription: "氦温度低于1.7e27",
            effectDescription: "解锁温度点第四效果",
            done(){return player.he.temperature.lte(1.7e27)},
            unlocked(){return hasMilestone("he",1)},
        },
        4:{
            requirementDescription: "氦温度低于1.4e27",
            effectDescription: "加强温度点第四效果",
            done(){return player.he.temperature.lte(1.4e27)},
            unlocked(){return hasMilestone("he",2)},
        },
        5:{
            requirementDescription: "氦温度低于1.4e26",
            effectDescription: "加强温度点第二效果",
            done(){return player.he.temperature.lte(1.4e26)},
            unlocked(){return hasMilestone("he",3)},
        },
        6:{
            requirementDescription: "氦温度低于5.2e25",
            effectDescription: "解锁新层级",
            done(){return player.he.temperature.lte(5.2e25)},
            unlocked(){return hasMilestone("he",5)},
        },
        7:{
            requirementDescription: "氦温度低于3.1e23",
            effectDescription: "解锁温度点第五效果",
            done(){return player.he.temperature.lte(3.1e23)},
            unlocked(){return hasMilestone("he",5)},
        },
        8:{
            requirementDescription: "氦温度低于1e15",
            effectDescription: "温度点第四效果再加强",
            done(){return player.he.temperature.lte(1e15)},
            unlocked(){return hasMilestone("he",7)},
        },
        9:{
            requirementDescription: "氦温度低于4e12",
            effectDescription: "解锁温度点第六效果",
            done(){return player.he.temperature.lte(4e12)},
            unlocked(){return hasMilestone("he",7)},
        },
        10:{
            requirementDescription: "氦温度低于-242",
            effectDescription: "解锁温度点第七效果",
            done(){return player.he.temperature.lte(31.15)},
            unlocked(){return hasMilestone("he",7)},
        },
    },
    clickables:{
        11:{
            title:"冷却氦",
            display() {return "点击或按住来冷却氦<br>每次点击可获得" + format(layers.he.temPointGet()) + "温度点"}, 
            unlocked() {return hasUpgrade("he",41)},
            canClick() {return !player.he.autoTemPoint},
            onClick() {
                player.he.temPoint = player.he.temPoint.add(layers.he.temPointGet())
                player.he.clicks = player.he.clicks.add(1)
            },
            onHold(){
                player.he.temPoint = player.he.temPoint.add(layers.he.temPointGet().div(10))
            },
            style() { return { 'background-color': this.canClick()?"#BFBFFF":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#000000",'border-radius': "30px", height: "120px", width: "120px" } },
        },
        12:{
            title:"提升冷却氦",
            display() {return "短时间内增加温度点获取<br>剩余时间:" + formatTime(player.he.temPointUpTime) + "<br>点击后增加时间:" + formatTime(layers.he.addtemPointUpTime()) + "<br>当前倍率:" + format(layers.he.upTemPointMult()) + "x"}, 
            unlocked() {return hasUpgrade("he",44)},
            canClick() {return player.he.temPointUpTime.lte(0)||hasUpgrade("li",61)},
            onClick() {
                player.he.temPointUpTime = layers.he.addtemPointUpTime()
            },
            style() { return { 'background-color': this.canClick()?"#BFBFFF":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#000000",'border-radius': "30px", height: "120px", width: "120px" } },
        },
    },
    bars: {
        temperature: {
            direction: RIGHT,
            width: 600,
            height: 32,
            fillStyle: {'background-color' : "#446693"},
            display(){
                return "你的氦现在的温度是 " + format(player.he.temperature.sub(273.15)) + " 摄氏度(距离绝对零度" + format(player.he.temperature) + ",进度:" + format(this.progress().mul(100)) + "%)"
            },
            req(){
                let a = n(1.4e32).log(10)
                return a
            },
            progress() {
                let a = n(1).sub(player.he.temperature.log(10).div(this.req()))
                if(a.gt(1)) a = n(1)
                return a
            },
            unlocked(){return true}
        },
    },
    balloonBoostPoints(){//气球加点
        let mult = player.he.balloon.add(1)
        return mult
    },
    addUpTime(){//气球炸的时间
        let t = player.he.balloon.div(2).floor().mul(10)
        return t
    },
    boomedBalloonBoostPoints(){//炸的气球加点
        let mult = ten
        if(hasUpgrade("he",32)&&!hasUpgrade("h",45)) mult = mult.mul(player.he.upTime.root(2).add(1))
        if(hasUpgrade("h",45)) mult = mult.mul(player.he.upTime.add(1))
        return mult
    },
    boomedBalloonBoostHpower(){//炸的气球加氢能
        let mult = n(15)
        if(hasUpgrade("he",32)&&!hasUpgrade("h",45)) mult = mult.mul(player.he.upTime.root(3).add(1))
        if(hasUpgrade("h",45)) mult = mult.mul(player.he.upTime.add(1))
        return mult
    }, 
    boomedBalloonBoostLimitTime(){//炸的气球时间上限
        let t = n(70)
        if(hasUpgrade("he",32)) t = t.add(upgradeEffect("he",32))
        if(hasUpgrade("h",45)) t = t.add(upgradeEffect("h",45))
        return t
    },
    temPointGet(){//温度点获取
        let get = one
        if(hasMilestone("li",6)) get = get.mul(layers.li.LiboostTemPoint())
        if(hasUpgrade("he",42)) get = get.mul(upgradeEffect("he",42))
        if(player.he.temPointUpTime.gt(0)) get = get.mul(layers.he.upTemPointMult()) 
        if(hasUpgrade("p",44)) get = get.mul(upgradeEffect("p",44))
        if(hasUpgrade("he",54)) get = get.mul(upgradeEffect("he",54))
        if(hasUpgrade("he",55)) get = get.mul(upgradeEffect("he",55))
        if(hasUpgrade("he",61)) get = get.mul(upgradeEffect("he",61))
        if(hasUpgrade("li",91)) get = get.mul(upgradeEffect("li",91))
        if(player.be.depth.gte(256)) get = get.mul(layers.be.depthEffect3())
        if(hasUpgrade("b",13)) get = get.mul(upgradeEffect("b",13))
        if(player.c.energy.gte(1)) get = get.mul(layers.c.CEeffect2())

        if(player.b.inBorane) get = get.pow(0.5)
        return get
    },
    temPointBoostH(){//温度点加氢
        let mult = player.he.temPoint.pow(2.386466).add(1)
        if(mult.gte(layers.he.temPointEffect1SoftcapStart())) mult = mult.div(layers.he.temPointEffect1SoftcapStart()).root(2).add(layers.he.temPointEffect1SoftcapStart())
        let savemult = powsoftcap(mult,layers.he.temPointEffect1SoftcapStart().mul("e82"),5)
        let root = savemult.log(1e24).max(5)
        mult = powsoftcap(mult,layers.he.temPointEffect1SoftcapStart().mul("e82"),root)
        return mult
    }, 
    temPointBoostHpower(){//温度点加氢能
        let mult = player.he.temPoint.add(10).log(10).pow(3)
        //if(mult.gte(layers.he.temPointEffect5SoftcapStart())) mult = powsoftcap(mult,layers.he.temPointEffect5SoftcapStart(),five)
        return mult
    },
    temPointBoostPoints(){//温度点加点
        let exp = n(0.8)
        if(hasUpgrade("he",51)) exp = exp.add(upgradeEffect("he",51))
        let mult = player.he.temPoint.pow(exp).add(1)
        if(mult.gte(layers.he.temPointEffect3SoftcapStart())) mult = mult.div(layers.he.temPointEffect3SoftcapStart()).root(1.5).add(layers.he.temPointEffect3SoftcapStart())
        let savemult = powsoftcap(mult,layers.he.temPointEffect3SoftcapStart().mul("2e58"),3)
        let root = savemult.log(n(1e115).root(3)).max(3)
        mult = powsoftcap(mult,layers.he.temPointEffect3SoftcapStart().mul("2e58"),root)
        return mult
    },
    temPointEffect1SoftcapStart(){//温度点效果1软上限起点
        let start = n(100000)
        if(hasUpgrade("he",43)) start = start.mul(upgradeEffect("he",43))
        return start
    },
    temPointEffect2SoftcapStart(){//温度点效果2软上限起点
        let start = n("e123")
        //if(hasUpgrade("he",43)) start = start.mul(upgradeEffect("he",43))
        return start
    },
    temPointEffect3SoftcapStart(){//温度点效果3软上限起点
        let start = n(1e10)
        if(hasUpgrade("he",52)) start = start.mul(upgradeEffect("he",52))
        return start
    },
    temPointEffect6SoftcapStart(){//温度点效果6软上限起点
        let start = n(100)
        return start
    },
    temPointdivHecost(){//温度点减氦价格
        let divt = player.he.temPoint.root(2).add(1)
        if(hasMilestone("he",5)) divt = divt.pow(4)
        savedivt = powsoftcap(divt,layers.he.temPointEffect2SoftcapStart(),five)
        root = savedivt.log(1e36).max(5)
        divt = powsoftcap(divt,layers.he.temPointEffect2SoftcapStart(),root)
        return divt
    },
    temPointdivLicost(){//温度点减锂价格
        let divt = player.he.temPoint.add(2).log(1.7).mul(3)
        if(!hasMilestone("he",3)) divt = zero
        if(hasMilestone("he",4)) divt = divt.pow(3)
        if(hasMilestone("he",8)) divt = divt.pow(5)
        return divt
    },
    temPointEffect6(){//温度点延迟深度超级折算
        let num = player.he.temPoint.div("e140").max(1).add(2).log(2)
        num = powsoftcap(num,layers.he.temPointEffect6SoftcapStart(),two)
        return num
    },
    temPointEffect7(){
        let num = player.he.temPoint.div("e240").max(1).add(2).log(10)
        return num
    },
    addtemPointUpTime(){//温度点提升时间
        let t = ten
        if(hasUpgrade("li",61)) t = n(60)
        if(hasUpgrade("he",64)) t=t.mul(upgradeEffect("he",64))
        return t
    },
    upTemPointMult(){//温度点提升乘数
        let mult = ten.add(player.he.temPointUpTime.root(2))
        if(hasUpgrade("he",53)) mult = mult.mul(upgradeEffect("he",53))
        if(hasUpgrade("li",61)) mult = mult.mul(upgradeEffect("li",61))
        if(player.he.temPointUpTime.lte(0)) mult = one
        return mult
    },
    update(diff){
        if(!hasUpgrade("he",45))player.he.temperature = n(1.4e32).div(player.he.temPoint.add(2).log(2).pow(2))
        if(hasUpgrade("he",45))player.he.temperature = n(1.4e32).div(player.he.temPoint.add(2).log(2).pow(3))
        if(hasUpgrade("he",63))player.he.temperature = n(1.4e32).div(player.he.temPoint.add(100).root(8))
        if(hasMilestone("li",11)&&player.he.autoTemPoint)player.he.temPoint = player.he.temPoint.add(layers.he.temPointGet().mul(diff))
        if(hasUpgrade("p",53))player.he.temPoint = player.he.temPoint.add(layers.he.temPointGet().mul(upgradeEffect("p",53)).mul(diff))
    },   
    tabFormat: { 
        "homepage": {   
            content: [
                "main-display",
                "prestige-button",   
                ["display-text",
                    function(){return "你有 "+format(player.points)+" 基本粒子"}],
                "blank","buyables",["upgrades",[1,2,3]]
            ],
            unlocked(){return hasMilestone("li",4)}
        },
        "cooldown": {
            content: [
                "main-display",
                "prestige-button",   
                ["display-text",
                    function(){return "你有 "+format(player.points)+" 基本粒子"}],
                "blank",["bar","temperature"],"blank",["display-text",function(){return "<h4>你有" + format(player.he.temPoint) + "温度点(其实就是它们在计算温度)</h4>"}],
                ["display-text",function(){
                    let a = "<h4>"
                    if(hasMilestone("he",0)) {
                        a = a + "温度点第一效果:使氢获取变为原来的 " + format(layers.he.temPointBoostH()) + " 倍"
                        if(layers.he.temPointBoostH().gte(layers.he.temPointEffect1SoftcapStart())) a = a + "(已达软上限)"
                        a = a + "<br>"     
                    }       
                    if(hasMilestone("he",1)) {
                        a = a + "温度点第二效果:使氦的价格 /" + format(layers.he.temPointdivHecost())
                        if(layers.he.temPointdivHecost().gte(layers.he.temPointEffect2SoftcapStart())) a = a + "(已达软上限)"
                        a = a + "<br>"     
                    }   
                    if(hasMilestone("he",2)) {
                        a = a + "温度点第三效果:使基本粒子获取变为原来的 " + format(layers.he.temPointBoostPoints()) + " 倍"
                        if(layers.he.temPointBoostPoints().gte(layers.he.temPointEffect3SoftcapStart())) a = a + "(已达软上限)"
                        a = a + "<br>"     
                    }       
                    if(hasMilestone("he",3)) {
                        a = a + "温度点第四效果:使锂的价格 /" + format(layers.he.temPointdivLicost())
                        a = a + "<br>"     
                    }     
                    if(hasMilestone("he",7)) {
                        a = a + "温度点第五效果:使氢能获取变为原来的 " + format(layers.he.temPointBoostHpower()) + " 倍"
                        //if(layers.he.temPointBoostHpower().gte(layers.he.temPointEffect5SoftcapStart())) a = a + "(已达软上限)"
                        a = a + "<br>"     
                    }  
                    if(hasMilestone("he",9)) {
                        a = a + "温度点第六效果:使深度的超级折算 延迟" + format(layers.he.temPointEffect6())
                        if(layers.he.temPointEffect6().gte(layers.he.temPointEffect6SoftcapStart())) a = a + "(已达软上限)"
                        a = a + "<br>"     
                    }   
                    if(hasMilestone("he",10)) {
                        a = a + "温度点第七效果:使所有硼烷的基础获取 +" + format(layers.he.temPointEffect7())
                        a = a + "<br>"     
                    }   
                    return a + "</h4>"  
                }],["clickables",[1]],"blank",["upgrades",[4,5,6,7]],
            ],
            unlocked(){return hasMilestone("li",4)}
        },
        "milestones": {   
            content: [
                "main-display",
                "prestige-button",   
                ["display-text",
                    function(){return "你有 "+format(player.points)+" 基本粒子"}],"blank"
                ["display-text",function(){return "你的氦现在的温度是" + format(player.he.temperature)}],"blank","milestones"
            ],
            unlocked(){return hasUpgrade("he",41)}
        },
    }, 
})
/*
ll    挂机[]
ll
ll               i1
ll
ll               ii           锂P锂E锂I锂T锂-----------------------------------------------------------------------------------------
ll               ii
lllllllllll      ii
*/
addLayer("li", {
    name: "li",
    symbol: "Li",
    position: 1,
    branches: ["h"],
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        autoReset: true,
        electricityCap: new Decimal(100),
        currentElectricity: zero,
        hPowerConsumingPercentage: 0,//0-10%,当小于等于0时就是不填充
        confirmRespec: false,
        confirmTime: 0,
        researchPoint: zero,
    }},
    color: "#DDDDDD",
    requires: new Decimal("e27"),
    resource: "锂",
    baseResource: "氢",
    baseAmount() {return player.h.points},
    type: "static",
    exponent: 1.8,
    gainMult() {
        mult = one
        if(hasMilestone("he",3)) mult = mult.div(layers.he.temPointdivLicost())
        if(hasUpgrade("li",51)) mult = mult.div(upgradeEffect("li",51))
        if(hasMilestone("be",0)) mult = mult.div(5)
        if(player.c.energy.gte(1)) mult = mult.div(layers.c.CEeffect3())
        return mult
    },
    gainExp() {
        exp = one        
        return exp
    },
    row: 1,
    hotkeys: [
        {key: "l", description: "L: 进行锂重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("he",34)||player.li.unlocked},
    resetsNothing() {return hasMilestone("li",7)},
    autoPrestige() {return hasMilestone("be",1)&&player.li.autoReset},
    canBuyMax() {return hasMilestone("be",1)},
    upgrades:{
        11:{
            title:"锂原子",
            description:"基本粒子获取x100",
            effect(){
                let effect = n(100)
                if(hasUpgrade("li",12)) effect = effect.mul(upgradeEffect("li",12))
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(1),
            unlocked(){return player.li.unlocked},
        },
        12:{
            title:"锂原子核",
            description:"锂原子效果x5",
            effect(){
                let effect = n(5)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(3),
            unlocked(){return player.li.unlocked},
        },
        21:{
            title:"研究",
            description:"解锁锂研究",
            cost: new Decimal(24),
            unlocked(){return hasMilestone("be",0)},
        },
        31:{
            title:"研究-11",
            description:"解锁下列研究树的第二,第三行",
            cost: new Decimal(3),
            unlocked(){return hasUpgrade("li",21)},
            currencyDisplayName:"研究点",
            currencyInternalName:"researchPoint",
            currencyLayer:"li",
        },
        32:{
            title:"研究-sp1",
            description:"你可以同时购买研究21,22,31,32",
            cost: new Decimal(1),
            unlocked(){return hasUpgrade("li",52)},
            currencyDisplayName:"研究点",
            currencyInternalName:"researchPoint",
            currencyLayer:"li",
        },
        41:{
            title:"研究-21",
            description:"基于锂提升电能获取",
            cost: new Decimal(1),
            effect(){
                let effect = player.li.points.add(1).root(2)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            unlocked(){return hasUpgrade("li",31)},
            currencyDisplayName:"研究点",
            currencyInternalName:"researchPoint",
            currencyLayer:"li",
            canAfford(){
                let canbuy = hasUpgrade("li",31)
                if(hasUpgrade("li",42)) canbuy = false
                if(hasUpgrade("li",32)) canbuy = hasUpgrade("li",31)
                return canbuy
            },
        },
        42:{
            title:"研究-22",
            description:"基于锂提升氢能获取",
            cost: new Decimal(3),
            effect(){
                let effect = player.li.points.add(1).pow(20)
                if(player.b.inBorane) effect = effect.pow(0.2)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            unlocked(){return hasUpgrade("li",31)},
            currencyDisplayName:"研究点",
            currencyInternalName:"researchPoint",
            currencyLayer:"li",
            canAfford(){
                let canbuy = hasUpgrade("li",31)
                if(hasUpgrade("li",41)) canbuy = false
                if(hasUpgrade("li",32)) canbuy = hasUpgrade("li",31)
                return canbuy
            },
        },
        51:{
            title:"研究-31",
            description:"基于电能降低锂价格",
            cost: new Decimal(4),
            effect(){
                let effect = player.li.currentElectricity.add(1).pow(6)
                return effect
            },
            effectDisplay(){return "/"+format(this.effect())},
            unlocked(){return hasUpgrade("li",31)},
            currencyDisplayName:"研究点",
            currencyInternalName:"researchPoint",
            currencyLayer:"li",
            canAfford(){
                let canbuy = hasUpgrade("li",41)
                if(hasUpgrade("li",42)) canbuy = false
                if(hasUpgrade("li",32)) canbuy = hasUpgrade("li",41)
                return canbuy
            },
        },
        52:{
            title:"研究-32",
            description:"基于锂研究点购买量提升电池容量上限,同时解锁一个电可购买与一个研究升级,购买该升级时才可购买",
            cost: new Decimal(3),
            effect(){
                let effect = new Decimal(1.7).pow(getBuyableAmount("li",11))
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            unlocked(){return hasUpgrade("li",31)},
            currencyDisplayName:"研究点",
            currencyInternalName:"researchPoint",
            currencyLayer:"li",
            canAfford(){
                let canbuy = hasUpgrade("li",42)
                if(hasUpgrade("li",41)) canbuy = false
                if(hasUpgrade("li",32)) canbuy = hasUpgrade("li",42)
                return canbuy
            },        
        },
        61:{
            title:"研究-41",
            description:"提升冷却氦时间上限+50s,提升剩余时间倍增提升效果,你可以一直点击提升冷却氦",
            cost: new Decimal(10),
            effect(){
                let effect = player.he.temPointUpTime.pow(3).add(1)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())+"(倍增提升效果)"},
            unlocked(){return hasMilestone("be",2)},
            currencyDisplayName:"研究点",
            currencyInternalName:"researchPoint",
            currencyLayer:"li",
            canAfford(){
                let canbuy = hasUpgrade("li",51)||hasUpgrade("li",52)
                return canbuy
            },        
        },
        71:{
            title:"研究-51",
            description:"解锁be层内容,自动购买新解锁的4个氢升级,以及13个温度点升级",
            cost: new Decimal(11),
            unlocked(){return hasMilestone("be",2)},
            currencyDisplayName:"研究点",
            currencyInternalName:"researchPoint",
            currencyLayer:"li",
            canAfford(){
                let canbuy = hasUpgrade("li",61)
                return canbuy
            },        
        },
        81:{
            title:"研究-61",
            description:"深度超级折算基于锂延迟",
            cost: new Decimal(16),
            unlocked(){return hasMilestone("be",6)},
            effect(){
                let effect = player.li.points.pow(1.02)
                effect = powsoftcap(effect,n(150),ten)
                return effect
            },
            effectDisplay(){return "延迟"+format(this.effect())},
            currencyDisplayName:"研究点",
            currencyInternalName:"researchPoint",
            currencyLayer:"li",
            canAfford(){
                let canbuy = hasUpgrade("li",71)
                return canbuy
            },        
        },
        82:{
            title:"研究-62",
            description:"深度超级折算基于深度延迟(注:第六行研究能购买多个)",
            cost: new Decimal(16),
            unlocked(){return hasMilestone("be",6)},
            effect(){
                let effect = player.be.depth.div(2.5)
                effect = powsoftcap(effect,n(75),ten)
                return effect
            },
            effectDisplay(){return "延迟"+format(this.effect())},
            currencyDisplayName:"研究点",
            currencyInternalName:"researchPoint",
            currencyLayer:"li",
            canAfford(){
                let canbuy = hasUpgrade("li",71)
                return canbuy
            },        
        },
        83:{
            title:"研究-63",
            description:"深度超级折算基于转生宝石延迟",
            cost: new Decimal(16),
            effect(){
                let effect = player.be.prestiGems.add(2).log(2).mul(4)
                effect = powsoftcap(effect,n(100),ten)
                return effect
            },
            effectDisplay(){return "延迟"+format(this.effect())},
            unlocked(){return hasMilestone("be",6)},
            currencyDisplayName:"研究点",
            currencyInternalName:"researchPoint",
            currencyLayer:"li",
            canAfford(){
                let canbuy = hasUpgrade("li",71)
                return canbuy
            },        
        },
        91:{
            title:"研究-71",
            description:"温度点获取x30(平凡的)",
            cost: new Decimal(16),
            effect(){
                let effect = ten.mul(3)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect()) },
            unlocked(){return hasUpgrade("li",81)&&hasUpgrade("li",82)&&hasUpgrade("li",83)},
            currencyDisplayName:"研究点",
            currencyInternalName:"researchPoint",
            currencyLayer:"li",
            canAfford(){
                let canbuy = hasUpgrade("li",81)&&hasUpgrade("li",82)&&hasUpgrade("li",83)
                return canbuy
            },        
        },
    },
    buyables:{
        11:{
            title: "锂研究点",
            cost(x) {
                let a = x.mul(2).add(20)
                return a
            },
            display() { return "价格: <br><h1 style=color:#3F3F6F>" + format(this.cost(),0) + "</h1> 锂 (不消耗)<br>你一共购买了 <h1 style=color:#3F3F6F>"+format(getBuyableAmount("li",11),0)+"</h1> 锂研究点"},
            canAfford() { return player.li.points.gte(this.cost())},
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.li.researchPoint = player.li.researchPoint.add(1)
            },
            unlocked(){return hasMilestone("be",0)},
            style() { return { 'background-color': this.canAfford()?"#DDDDDD":"#BF8F8F", filter: "brightness(100%)",'border-radius': "30px", height: "120px", width: "180px" }},
        },
        12:{
            title: "电研究点",
            cost(x) {
                let a = three.pow(x.add(2))
                return a
            },
            display() { return "价格: <br><h1 style=color:#DDDD33>" + format(this.cost(),0) + "</h1> 电能<br>你一共购买了 <h1 style=color:#DDDD33>"+format(getBuyableAmount("li",12),0)+"</h1> 电研究点"},
            canAfford() { return player.li.currentElectricity.gte(this.cost())},
            buy() {
                player.li.currentElectricity = player.li.currentElectricity.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.li.researchPoint = player.li.researchPoint.add(1)
            },
            unlocked(){return hasMilestone("be",0)},
            style() { return { 'background-color': this.canAfford()?"#DDDDDD":"#BF8F8F", filter: "brightness(100%)",'border-radius': "30px", height: "120px", width: "180px" }},
        },
        13:{
            title: "转生宝石研究点",
            cost(x) {
                let a = ten.pow(x.add(2))
                return a
            },
            display() { return "价格: <br><h1 style=color:#60B060>" + format(this.cost(),0) + "</h1> 转生宝石<br>你一共购买了 <h1 style=color:#60B060>"+format(getBuyableAmount("li",13),0)+"</h1> 转生宝石研究点"},
            canAfford() { return player.be.prestiGems.gte(this.cost())},
            buy() {
                player.be.prestiGems = player.be.prestiGems.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player.li.researchPoint = player.li.researchPoint.add(1)
            },
            unlocked(){return hasMilestone("be",8)},
            style() { return { 'background-color': this.canAfford()?"#DDDDDD":"#BF8F8F", filter: "brightness(100%)",'border-radius': "30px", height: "120px", width: "180px" }},
        },
        31:{
            title: "电容增幅",
            cost(x) {
                let a = four.pow(x.add(3))
                return a
            },
            display() { return "增加电量上限<br>价格：" + format(this.cost()) + "电能<br>当前数量：" + format(getBuyableAmount(this.layer, this.id)) + "<br>当前效果：" + format(this.effect()) + "x<br>上限数量：" + format(this.purchaseLimit())},
            effect(x){
                let eff = x.add(1).pow(2)
                return eff
            },
            canAfford() { return player.li.currentElectricity.gte(this.cost())},
            buy() {
                player.li.currentElectricity = player.li.currentElectricity.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit(){
                let a = n(40)
                return a
            },
            unlocked(){return hasUpgrade("li",52)},
        },
    },
    clickables:{
        11:{
            title() {return player.li.confirmRespec?"如果你确定重新分配锂研究点,请再次点击(5秒后自动取消)":"点击两次(防手滑)此按钮以重新分配锂研究点,但同时使电量清零并进行铍重置!!!!"},
            unlocked() {return hasMilestone("be",0)},
            canClick() {return true},
            onClick() {                
                if(player.li.confirmRespec){
                    doReset("be")
                    player.li.currentElectricity = zero;player.li.confirmRespec = false
                    player.li.researchPoint = layers.li.researchPointMax()
                    let U = [31,32,41,42,51,52,61,71,81,82,83,91]
                    for (id in U){
                        if(hasUpgrade("li",U[id])){player.li.upgrades.splice(player.li.upgrades.indexOf(U[id]),1)}
                    }
                }
                else {player.li.confirmRespec = true; player.li.confirmTime = player.li.resetTime}
            },
            style() { return { 'background-color': player.li.confirmRespec?"#FFFFFF":"#BFBFBF",'border-radius': "15px", height: "50px", width: "200px" } },
        },
    },
    bars:{
        battery1: {
            direction: UP,
            width: 80,
            height: 200,
            fillStyle: {'background-color' : "#888888"},
            display(){
                return "锂电池<br>" + format(player.li.currentElectricity) + " / " + format(layers.li.getElectricityCap()) + "<br> ( " + format(this.progress().mul(100),1) + " %)"
            },
            req(){ return layers.li.getElectricityCap()},
            progress() {
                let estimatedProgress = player.li.currentElectricity.div(this.req())
                return estimatedProgress
            },
            unlocked(){return hasMilestone("be",0)},
        },
    },
    milestones:{
        0:{
            requirementDescription: "1锂&锂原子",
            effectDescription: "自动重置氦,氦不再重置任何东西",
            done(){return player.li.points.gte(1)&&hasUpgrade("li",11)},
            unlocked(){return player.li.unlocked},
            toggles: [["he", "autoReset"]],
        },
        1:{
            requirementDescription: "2锂",
            effectDescription: "爆炸氢气球的时间一直为最大值",
            done(){return player.li.points.gte(2)&&this.unlocked()},
            unlocked(){return hasMilestone("li",0)},
            toggles: [["h", "keepUpTime"]],
        },
        2:{
            requirementDescription: "3锂",
            effectDescription: "自动购买现阶段解锁的氢升级,初始状态下每秒自动获取1%的氢",
            done(){return player.li.points.gte(3)},
            unlocked(){return hasMilestone("li",1)},
            toggles: [["h", "upgradeAutobuy"]],
        },
        3:{
            requirementDescription: "4锂",
            effectDescription: "初始状态下最大重置氦,自动购买现阶段解锁的氦升级",
            done(){return player.li.points.gte(4)},
            unlocked(){return hasMilestone("li",2)},
            toggles: [["he", "upgradeAutobuy"]],
        },
        4:{
            requirementDescription: "5锂",
            effectDescription: "爆炸氦气球的时间一直为最大值，解锁氦层专属内容",
            done(){return player.li.points.gte(5)},
            unlocked(){return hasMilestone("li",3)},
            toggles: [["he", "keepUpTime"]],
        },
        5:{
            requirementDescription: "6锂",
            effectDescription: "每秒自动获取转化时的10%氢能,自动获取气球且不消耗氢能", 
            done(){return player.li.points.gte(6)},
            unlocked(){return hasMilestone("li",4)},
            toggles: [["h", "autoGetHpowerBalloon"]]
        },
        6:{
            requirementDescription: "7锂",
            effectDescription: "自动获取氦气球,解锁锂的第四个效果(保持开启)",
            done(){return player.li.points.gte(7)},
            unlocked(){return hasMilestone("li",5)},
            toggles: [["he", "autoGetBalloon"]]
        },
        7:{
            requirementDescription: "8锂",
            effectDescription: "锂不再重置任何东西,自动购买氦-3和氦-4,解锁温度点升级,每秒自动获取重置可获得的100%氢",
            done(){return player.li.points.gte(8)},
            unlocked(){return hasMilestone("li",6)},
            toggles: [["he", "buyableAutobuy"]]
        },
        8:{
            requirementDescription: "9锂",
            effectDescription: "修改锂的第四个效果的公式(5^->10^)",
            done(){return player.li.points.gte(9)},
            unlocked(){return hasMilestone("li",7)},
        },
        9:{
            requirementDescription: "10锂",
            effectDescription: "自动购买粒子加速器1和粒子加速器2",
            done(){return player.li.points.gte(10)},
            unlocked(){return hasMilestone("li",8)},
            toggles: [["p", "buyableAutobuy"]]
        },
        10:{
            requirementDescription: "11锂",
            effectDescription: "解锁更多基本粒子升级",
            done(){return player.li.points.gte(11)},
            unlocked(){return hasMilestone("li",9)},
        },
        11:{
            requirementDescription: "12锂",
            effectDescription: "每秒自动获取点击时100%的温度点(注:开启时不能点击冷却氦!)",
            done(){return player.li.points.gte(12)},
            unlocked(){return hasMilestone("li",10)},
            toggles: [["he", "autoTemPoint"]]
        },
    },
    //rainbow
    magic(){
        let random = player.li.resetTime % 2
        if     (random<0.2)return "0F7F7F"
        else if(random<0.4)return "0F8F9F"
        else if(random<0.6)return "1F9FAF"
        else if(random<0.8)return "1FAFBF"
        else if(random < 1)return "2FAFCF"
        else if(random<1.2)return "1F9FBF"
        else if(random<1.4)return "1F7FAF"
        else if(random<1.6)return "1F6F9F"
        else if(random<1.8)return "0F6F8F"
        else return "0F7F8F"
    },
    rainbow(speed=1){
        let random = (player.li.resetTime/2*speed) % 0.49
        if     (random<0.07)return "FF0000"
        else if(random<0.14)return "FF7F00"
        else if(random<0.21)return "FFFF00"
        else if(random<0.28)return "00FF00"
        else if(random<0.35)return "00FFFF"
        else if(random<0.42)return "0000FF"
        else return "FF00FF"
    },
    LiboostH(){//锂加氢
        let mult = player.li.points.pow(2).add(1)
        return mult
    }, 
    LiboostHpower(){//锂加氢能
        let mult = player.li.points.add(1)
        return mult
    }, 
    LidivHecost(){//锂减氦价格
        let divt = player.li.points.pow(1.5).add(1)
        return divt
    },
    LiboostTemPoint(){//锂加温度点
        let mult = five.pow(player.li.points.sub(6).max(0))
        if(hasMilestone("li",8)) mult = ten.pow(player.li.points.sub(6).max(0))

        if(player.b.inBorane) mult = mult.add(1).log(10)

        return mult
    },
    getElectricityCap(){//获取电量上限
        let capacity = new Decimal(100)
        if(hasUpgrade("h",25)) capacity = capacity.mul(upgradeEffect("h",25))
        if(hasUpgrade("he",62)) capacity = capacity.mul(upgradeEffect("he",62))
        if(hasUpgrade("li",52)) capacity = capacity.mul(upgradeEffect("li",52))
        if(getBuyableAmount("li",31)) capacity = capacity.mul(buyableEffect("li",31))
        if(player.be.depth.gte(10)) capacity = capacity.mul(layers.be.depthEffect1())
        return capacity
    },
    canGainElectricity(){
        return player.h.power.gte("e60") && player.li.hPowerConsumingPercentage > 0
    },
    electricityGain(){//获取每秒的电量加成
        if(!layers.li.canGainElectricity()) return zero
        let gain = player.h.power.mul(player.li.hPowerConsumingPercentage).div("e60").pow(0.25)
        if(hasUpgrade("li",52)) gain = gain.mul(upgradeEffect("li",52))
        if(hasUpgrade("li",41)) gain = gain.mul(upgradeEffect("li",41))
        if(hasUpgrade("h",35)) gain = gain.mul(upgradeEffect("h",25))
        if(player.be.depth.gte(10)) gain = gain.mul(layers.be.depthEffect1())
        return gain
    },
    researchPointMax(){
        let max = getBuyableAmount("li",11).add(getBuyableAmount("li",12).add(getBuyableAmount("li",13)))
        if(hasUpgrade("be",11)) max = max.add(upgradeEffect("be",11))
        if(player.c.energy.gte(1)) max = max.add(layers.c.CEeffect3().floor())
        return max
    },
    update(diff){
        if(player.li.resetTime - player.li.confirmTime > 5) player.li.confirmRespec = false
        if(layers.li.canGainElectricity()){
            player.li.currentElectricity = player.li.currentElectricity.add(layers.li.electricityGain().mul(diff)).min(layers.li.getElectricityCap())
            player.h.power = player.h.power.sub(player.h.power.mul(player.li.hPowerConsumingPercentage).div(n(100)))
        }
        if(player.li.currentElectricity.gt(0)) player.li.currentElectricity = player.li.currentElectricity.sub(layers.li.getElectricityCap().mul(0.005).mul(diff)).max(0)
    },
    tabFormat:{
        "homepage": {   
            content: [
                "main-display",
                "prestige-button",   
                ["display-text",function(){return "你有 "+format(player.h.points)+" 氢"}],
                ["display-text",function(){
                    let a = "你的锂加成氢获取"+format(layers.li.LiboostH())+"x;加成氢能获取"+format(layers.li.LiboostHpower())+"x;降低氦的价格/"+format(layers.li.LidivHecost())
                    if (hasMilestone("li",6)) a = a + ";加成温度点获取"+format(layers.li.LiboostTemPoint())+"x"
                    return a}],
                "blank",["upgrades",[1,2]],
                "blank"
            ],
            unlocked(){return player.li.unlocked}
        },
        "milestones": {
            content: [
                "main-display",
                "prestige-button",
                "blank","milestones"
            ],
            unlocked(){return player.li.unlocked}
        },
        "batteries": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                ["display-text", function() {return "你有"+format(player.h.power)+"氢能,每秒生产"+format(layers.li.electricityGain())+"电能"}],
                ["display-text", "由于存储技术不完善,电池每秒丢失上限0.5%的电能!"],
                "blank",["bar",["battery1"]],
                "blank",["display-text", "以下滑条选择每秒将氢能转化为电能的%数!"],["slider", ["hPowerConsumingPercentage", 0, 10]],
                ["buyables",[3]],
            ],
            unlocked(){return player.be.unlocked}
        },
        "research": {
            content: [
                "main-display",
                "prestige-button","blank",
                ["buyables",[1]],["display-text", function(){return `你有 ${format(player.li.researchPoint)} 研究点`}],["buyables",[2]],["upgrades",[3,4,5,6,7,8,9]],
                "blank",["clickables",[1]]
            ],
            unlocked(){return hasUpgrade("li",21)}
        },
    },
})
//
//
//
//
////////      //////
//      //  //      //
//      //  //////////
//      //  //
////////      ////////
addLayer("be", {
    name: "be",
    symbol: "Be",
    position: 2, 
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        depth: new Decimal(0),
        gems: new Decimal(0),
        prestiGems: new Decimal(0),
        beDamaged: new Decimal(0),
        loadingPickaxe: zero,
        bittingTime: zero,
    }},
    branches: ["h","he"],
    color: "#5ED56F",
    requires: new Decimal(480),
    resource: "铍",
    baseResource: "氦",
    baseAmount() {return player.he.points},
    type: "normal", 
    exponent: 25,
    gainMult() {
        mult = one
        if(player.c.energy.gte(1)) mult = mult.mul(layers.c.CEeffect3())
        return mult
    },
    gainExp() {
        exp = one
        return exp
    },
    row: 1,
    layerShown(){return player.be.unlocked||hasMilestone("he",6)},
    passiveGeneration(){
        let a = zero
        if(hasMilestone("b",1)) a = one
        return a
    },
    milestones:{
        0:{
            requirementDescription: "1铍",
            effectDescription: "解锁锂层内容，锂价格/5",
            done(){return player.be.points.gte(1)},
            unlocked(){return true},
        },
        1:{
            requirementDescription: "2铍",
            effectDescription: "自动重置锂,最大重置锂",
            done(){return player.be.points.gte(2)},
            unlocked(){return true},
            toggles: [["li", "autoReset"]],
        },
        2:{
            requirementDescription: "600铍",
            effectDescription: "解锁更多锂研究,氢升级,温度点升级",
            done(){return player.be.points.gte(600)},
            unlocked(){return hasMilestone("be",1)},
        },
        3:{
            requirementDescription: "镐子等级达到Lv.50",
            effectDescription: "解锁电动钻头",
            done(){return getBuyableAmount("be",11).gte(50)},
            unlocked(){return hasUpgrade("li",71)},
        },
        4:{
            requirementDescription: "深度达到60",
            effectDescription: "解锁转生宝石",
            done(){return player.be.depth.gte(60)},
            unlocked(){return hasMilestone("be",3)||hasMilestone("be",4)},
        },
        5:{
            requirementDescription: "1转生宝石",
            effectDescription: "解锁新的可购买",
            done(){return player.be.prestiGems.gte(1)},
            unlocked(){return hasMilestone("be",4)},
        },
        6:{
            requirementDescription: "深度达到100",
            effectDescription: "解锁新的研究",
            done(){return player.be.depth.gte(100)},
            unlocked(){return hasMilestone("be",4)},
        },
        7:{
            requirementDescription: "深度达到179",
            effectDescription(){return "改进深度第一效果公式,钻头剩余时间<28s时自动充电,充电增加时间锁定为3s(完全锁定),电能提升钻头伤害<br>当前效果: " + format(this.effect())+"x"},
            effect(){
                let eff = player.li.currentElectricity.root(2).add(1)
                return eff
            },
            done(){return player.be.depth.gte(179)},
            unlocked(){return hasMilestone("be",4)},
        },
        8:{
            requirementDescription: "深度达到193",
            effectDescription: "转生宝石重置时保留可购买,解锁转生宝石研究点和新的温度点升级",
            done(){return player.be.depth.gte(193)},
            unlocked(){return hasMilestone("be",4)},
        },
        9:{
            requirementDescription: "深度达到1100",
            effectDescription(){return "使转生宝石获取受宝石数量增幅,解锁两个新的基本粒子升级<br>当前效果: " + format(this.effect())+"x"},
            effect(){
                let eff = player.be.gems.add(10).log(10).mul(3)
                return eff
            },
            done(){return player.be.depth.gte(1100)},
            unlocked(){return hasMilestone("be",6)},
        },
        10:{
            requirementDescription: "深度达到1500",
            effectDescription(){return "使转生宝石数量不再被硼的第一个里程碑限制,每秒自动获取当前重置可获得的100%转生宝石"},
            done(){return player.be.depth.gte(1500)},
            unlocked(){return player.b.unlocked},
        },
        11:{
            requirementDescription: "深度达到1800",
            effectDescription(){return "深度第三效果的软上限起始x1e30"},
            done(){return player.be.depth.gte(1800)},
            unlocked(){return player.b.unlocked},
        },
        12:{
            requirementDescription: "深度达到2260",
            effectDescription(){return "基于氦扩展深度第三效果的软上限<br>当前效果: " + format(this.effect())+"x"},
            effect(){
                let eff = n(1.05).pow(player.he.points)
                return eff
            },
            done(){return player.be.depth.gte(2260)},
            unlocked(){return player.b.unlocked},
        },
        13:{
            requirementDescription: "深度达到2300",
            effectDescription(){return "深度第四效果的硬上限+1"},
            done(){return player.be.depth.gte(2300)},
            unlocked(){return player.be.depth.gte(1300)},
        },
    },
    clickables:{
        11:{
            title:"挖掘",
            display() {return "用你的镐子向下挖<br>当前伤害:" + format(layers.be.pickaxeDamage()) + "<br>冷却时间:" + formatTime(player.be.loadingPickaxe) + "<br>每次点击可获取 " + format(layers.be.gemGet()) + " 宝石(基于深度与伤害)"}, 
            unlocked() {return true},
            canClick() {return player.be.loadingPickaxe.lte(0)},
            onClick() {
                player.be.beDamaged = player.be.beDamaged.add(layers.be.pickaxeDamage())
                player.be.gems = player.be.gems.add(layers.be.gemGet())
                player.be.loadingPickaxe = layers.be.loadingPickaxe()
            },
            style() { return { 'background-color': this.canClick()?"#5ED56F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#000000",'border-radius': "30px", height: "120px", width: "120px" } },
        },
        12:{
            title:"充电",
            display() {return "给你的电动钻头充电<br>当前伤害:" + format(layers.be.bitDamage()) + "/s<br>增加持续时间:" + formatTime(layers.be.addBitTime()) + "<br>剩余持续时间:" + formatTime(player.be.bittingTime) + "/1m"}, 
            unlocked() {return hasMilestone("be",3)},
            canClick() {return true},
            onClick() {
                player.be.bittingTime = player.be.bittingTime.add(layers.be.addBitTime()).min(60)
                player.li.currentElectricity = zero
            },
            style() { return { 'background-color': this.canClick()?"#5ED56F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#000000",'border-radius': "30px", height: "120px", width: "120px" } },
        },
        21:{
            title:"转生",
            display() {return "重置深度,宝石,宝石升级,镐子钻头可购买,同时基于重置前的深度获取转生宝石<br>当前重置可获得 " + format(layers.be.prestiGemsGet()) + " 转生宝石"}, 
            unlocked() {return hasMilestone("be",3)},
            canClick() {return player.be.depth.gte(60)&&!hasMilestone("b",0)},
            onClick() {
                player.be.prestiGems = player.be.prestiGems.add(layers.be.prestiGemsGet())
                player.be.bittingTime = zero
                player.be.beDamaged = zero
                player.be.depth = zero
                player.be.gems = zero
                if(!hasMilestone("be",8)){setBuyableAmount("be",11,zero)
                setBuyableAmount("be",12,zero)}
                let U = [11,12,13,14,15];for (id in U){if(hasUpgrade("be",U[id])){player.be.upgrades.splice(player.be.upgrades.indexOf(U[id]),1)}}
            },
            style() { return { 'background-color': this.canClick()?"#60B060":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#000000",'border-radius': "5px", height: "120px", width: "200px" } },
        },
    },
    bars:{
        depth: {
            direction: RIGHT,
            width: 600,
            height: 35,
            fillStyle: {'background-color' : "green"},
            display(){
                if(!hasUpgrade("he",65))return "你对该深度造成了 " + format(player.be.beDamaged) + " 伤害,该深度需要 " + format(layers.be.deptHp()) + "伤害 ( " + format(this.progress().mul(100),1) + " %)"
                else return "你造成了 " + format(player.be.beDamaged) + " 伤害,下个深度需要 " + format(depthNum(zero,1)) + "伤害  ( " + format(this.progress().mul(100),1) + " %)"
            },
            req(){ if(!hasUpgrade("he",65))return layers.be.deptHp()
                else return depthNum(zero,1)},
            progress() {
                let estimatedProgress = player.be.beDamaged.div(this.req())
                if(hasUpgrade("he",65)) estimatedProgress = player.be.beDamaged.div(this.req())
                return estimatedProgress
            },
            unlocked(){return true},
        },
        pickaxeCD: {
            direction: RIGHT,
            width: 500,
            height: 35,
            fillStyle: {'background-color' : (function(){return (hasUpgrade("he",65)&&layers.be.loadingPickaxe().lte(0.1))?("#"+layers.li.magic()):"#5DC9BF"})},
            display(){
                if(hasUpgrade("he",65)&&layers.be.loadingPickaxe().lte(0.1))return "镐子每秒造成伤害: <h3 style=color:yellow>" + format(layers.be.pickaxeDamage().div(layers.be.loadingPickaxe())) + "</h3> "
                return " 镐子冷却时间: <h3 style=color:yellow>" + format(player.be.loadingPickaxe,1,false) + "</h3> s"
            },
            req(){ return layers.be.loadingPickaxe()},
            progress() {
                if(hasUpgrade("he",65)&&layers.be.loadingPickaxe().lte(0.1)) return 1
                return player.be.loadingPickaxe.div(this.req())
            },
            unlocked(){return true},
        },
        bitTime: {
            direction: RIGHT,
            width: 500,
            height: 35,
            fillStyle: {'background-color' : "cyan"},
            display(){
                return " 钻头剩余时间: <h3 style=color:yellow>" + format(player.be.bittingTime,1,false) + "</h3> s"
            },
            req(){ return n(60)},
            progress() {
                return player.be.bittingTime.div(this.req())
            },
            unlocked(){return hasMilestone("be",3)},
        },
    },
    upgrades:{
        11:{
            title:"额外研究",
            description:"额外获得7个研究点(需重置研究树)",
            effect(){
                let effect = seven
                if(hasUpgrade("be",15)) effect = effect.mul(2)
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            cost: new Decimal(50),
            unlocked(){return true},
            currencyDisplayName:"宝石",
            currencyInternalName:"gems",
            currencyLayer:"be",      
        },
        12:{
            title:"软化地层",
            description:"深度的超级折算基于氢能延迟",
            effect(){
                let effect = player.h.power.add(10).log(10).root(2)
                if(hasUpgrade("be",15)) effect = effect.mul(2)
                if(hasUpgrade("be",23)) effect = effect.mul(upgradeEffect("be",23))
                return effect
            },
            effectDisplay(){return "延迟"+format(this.effect())},
            cost: new Decimal(111111),
            unlocked(){return true},
            currencyDisplayName:"宝石",
            currencyInternalName:"gems",
            currencyLayer:"be",      
        },
        13:{
            title:"冷却降低",
            description:"每次造成伤害的冷却-2.5s",
            effect(){
                let effect = n(2.5)
                if(hasUpgrade("be",15)) effect = effect.add(2)
                return effect
            },
            effectDisplay(){return "-"+formatTime(this.effect())},
            cost: new Decimal(4444), 
            unlocked(){return true},
            currencyDisplayName:"宝石",
            currencyInternalName:"gems",
            currencyLayer:"be",      
        },
        14:{
            title:"控制电量",
            description:"钻头剩余时间越接近28s~32s,效率越高",
            effect(){
                let power = four
                if(hasUpgrade("be",15)) power = power.add(2)
                let effect = n(28).pow(power)
                let t = player.be.bittingTime.sub(28)
                if(t.lt(0)) {t = zero.sub(t)}
                else if(t.gt(4)) t = t.sub(4)
                else t = zero
                t = t.add(1).pow(power)
                effect = effect.div(t).max(1)
                return effect
            },
            effectDisplay(){return format(this.effect())+"x"},
            cost: new Decimal(1e9),
            unlocked(){return hasMilestone("be",3)},
            currencyDisplayName:"宝石",
            currencyInternalName:"gems",
            currencyLayer:"be",      
        },
        15:{
            title:"升级提升",
            description:"左侧升级效果提升",
            effect(){
                let effect = two
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())+",x"+format(this.effect())+",+"+formatTime(this.effect())+",指数+"+format(this.effect())},
            cost: new Decimal(3e9), 
            unlocked(){return hasMilestone("be",3)},
            currencyDisplayName:"宝石",
            currencyInternalName:"gems",
            currencyLayer:"be",      
        },
        21:{
            title:"反向钻头强度",
            description:"基于钻头等级获得额外的强度等级",
            effect(){
                let effect = getBuyableAmount("be",12).root(2).div(3).max(0.5)
                return effect
            },
            effectDisplay(){return "+Lv."+format(this.effect())},
            cost: new Decimal(1),
            unlocked(){return hasMilestone("be",5)},
            currencyDisplayName:"转生宝石",
            currencyInternalName:"prestiGems",
            currencyLayer:"be",      
        },
        22:{
            title:"自动挖掘与冷却降低",
            description:"初始状态下镐子冷却时间/10,当冷却结束后自动点击挖掘",
            effect(){
                let effect = ten
                return effect
            },
            effectDisplay(){return "/"+format(this.effect())},
            cost: new Decimal(4), 
            unlocked(){return hasMilestone("be",5)},
            currencyDisplayName:"转生宝石",
            currencyInternalName:"prestiGems",
            currencyLayer:"be",      
        },
        23:{
            title:"强度软化地层",
            description:"基于强度等级(额外等级不计)提升升级软化地层的效果",
            effect(){
                let effect = getBuyableAmount("be",21).add(3).div(3)
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(20),
            unlocked(){return hasMilestone("be",5)},
            currencyDisplayName:"转生宝石",
            currencyInternalName:"prestiGems",
            currencyLayer:"be",      
        },
        24:{
            title:"强度延迟折算",
            description:"基于强度等级(额外等级不计)延迟两个可购买的超级折算",
            effect(){
                let effect = getBuyableAmount("be",21).pow(1.5)
                return effect
            },
            effectDisplay(){return "延迟"+format(this.effect())},
            cost: new Decimal(2500),
            unlocked(){return hasMilestone("be",5)},
            currencyDisplayName:"转生宝石",
            currencyInternalName:"prestiGems",
            currencyLayer:"be",      
        },
        25:{
            title:"超级折算延迟究极折算",
            description:"基于深度超级折算超出究极折算初始数值延迟深度究极折算",
            effect(){
                let effect = layers.be.superHpStart().sub(100).mul(1.1).max(0)
                return effect
            },
            effectDisplay(){return "延迟"+format(this.effect())},
            cost: new Decimal(6666),
            unlocked(){return hasMilestone("be",5)},
            currencyDisplayName:"转生宝石",
            currencyInternalName:"prestiGems",
            currencyLayer:"be",      
        },
        31:{
            title:"反向镐子强度",
            description:"基于镐子等级获得额外的强度等级",
            effect(){
                let effect = getBuyableAmount("be",11).root(1.8).div(4).max(0.5)
                return effect
            },
            effectDisplay(){return "+Lv."+format(this.effect())},
            cost: new Decimal(133000000),
            unlocked(){return player.b.unlocked},
            currencyDisplayName:"转生宝石",
            currencyInternalName:"prestiGems",
            currencyLayer:"be",      
        },
        32:{
            title:"转生宝石-宝石",
            description:"转生宝石增幅宝石与深度奖励宝石获取",
            effect(){
                let effect = player.be.prestiGems.max(1).min("e50")
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(134000000),
            unlocked(){return player.b.unlocked},
            currencyDisplayName:"转生宝石",
            currencyInternalName:"prestiGems",
            currencyLayer:"be",      
        },
        33:{
            title:"强度强化强度",
            description:"基于强度等级(额外等级不计)强化强度的基础效果",
            effect(){
                let effect = getBuyableAmount("be",21).div(500)
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            cost: new Decimal(190101091),
            unlocked(){return player.b.unlocked},
            currencyDisplayName:"转生宝石",
            currencyInternalName:"prestiGems",
            currencyLayer:"be",      
        },
        34:{
            title:"钻头折算强度平衡",
            description:"钻头超级折算的指数-0.5",
            effect(){
                let effect = n(0.5)
                return effect
            },
            effectDisplay(){return "-"+format(this.effect())},
            cost: new Decimal(5e12),
            unlocked(){return player.b.unlocked},
            currencyDisplayName:"转生宝石",
            currencyInternalName:"prestiGems",
            currencyLayer:"be",      
        },
        35:{
            title:"效果硬上限延迟",
            description:"深度第四效果硬上限+0.5",
            effect(){
                let effect = n(0.5)
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            cost: new Decimal(1e13),
            unlocked(){return player.b.unlocked},
            currencyDisplayName:"转生宝石",
            currencyInternalName:"prestiGems",
            currencyLayer:"be",      
        },
    },
    buyables:{
        11:{
            title(){
                let title = layers.be.pickaxeCanEvolve()?"进阶你的镐子":"升级你的镐子"
                if(getBuyableAmount("be",11).gte(this.super())) title = "超级折算|" + title
                return title},
            cost(x){
                x = powerTo(x,this.super(),this.superPower())
                let estimatedCost = new Decimal(1.2).pow(x).mul(10).floor()
                if (layers.be.pickaxeCanEvolve())estimatedCost = estimatedCost.mul(5)
                return estimatedCost
            },
            display() { return "价格: <br><h1 style=color:#5EE55E>" + format(this.cost()) + "</h1> 宝石 <br>镐子等级: <h1 style=color:#3F3F6F>Lv."+format(getBuyableAmount("be",11),0)+"</h1><br>效果:增幅镐子伤害" + format(this.effect()) + "x"},
            canAfford() { return player.be.gems.gte(this.cost())},
            effect(x){ 
                let floor = n(1.3)
                if(getBuyableAmount("be",21).gte(1)) floor = floor.add(buyableEffect("be",21))
                let estimatedEffect = floor.pow(x)
                estimatedEffect = estimatedEffect.pow(new Decimal(1.2).pow(layers.be.pickaxeLevelThreshold()))//每次进阶使伤害^1.2
                return estimatedEffect
            },
            buy(){
                player.be.gems = player.be.gems.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))                
            },
            super(){
                let start = n(45)
                if(hasUpgrade("be",24)) start = start.add(upgradeEffect("be",24))
                return start
            },
            superPower(){
                let power = n(1.4)
                return power
            },
            unlocked(){return hasUpgrade("li",71)},
            style() { return { 'background-color': layers.be.pickaxeCanEvolve()?(this.canAfford()?"E4D00A":"#BF8F8F"):(this.canAfford()?"#5DC9BF":"#BF8F8F"), filter: "brightness(100%)",'border-radius': "30px", height: "120px", width: "180px" }},
        },
        12:{
            title(){
                let title = layers.be.bitCanEvolve()?"进阶你的钻头":"升级你的钻头"
                if(getBuyableAmount("be",12).gte(this.super())) title = "超级折算|" + title
                return title},
            cost(x){
                x = powerTo(x,this.super(),this.superPower())
                let estimatedCost = new Decimal(1.15).pow(x).mul(1125).floor()
                if (layers.be.bitCanEvolve())estimatedCost = estimatedCost.mul(10)
                return estimatedCost
            },
            display() { return "价格: <br><h1 style=color:#5EE55E>" + format(this.cost()) + "</h1> 宝石 <br>钻头等级: <h1 style=color:#3F3F6F>Lv."+format(getBuyableAmount("be",12),0)+"</h1><br>效果:增幅钻头伤害" + format(this.effect()) + "x"},
            canAfford() { return player.be.gems.gte(this.cost())},
            effect(x){ 
                let floor = n(1.55)
                if(getBuyableAmount("be",21).gte(1)) floor = floor.add(buyableEffect("be",21))
                let estimatedEffect = floor.pow(x)
                estimatedEffect = estimatedEffect.pow(new Decimal(1.2).pow(layers.be.bitLevelThreshold()))//每次进阶使伤害^1.2
                return estimatedEffect
            },
            buy(){
                player.be.gems = player.be.gems.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))                
            },
            super(){
                let start = n(26)
                if(hasUpgrade("be",24)) start = start.add(upgradeEffect("be",24))
                return start
            },
            superPower(){
                let power = n(2)
                if(hasUpgrade("be",34)) power = power.sub(upgradeEffect("be",34))
                return power
            },
            unlocked(){return hasMilestone("be",3)||hasMilestone("be",4)},
            style() { return { 'background-color': layers.be.bitCanEvolve()?(this.canAfford()?"E4D00A":"#BF8F8F"):(this.canAfford()?"cyan":"#BF8F8F"), filter: "brightness(100%)",'border-radius': "30px", height: "120px", width: "180px" }},
        },
        21:{
            title(){
                let title = "升级你的镐子钻头强度"
                if(getBuyableAmount("be",21).gte(this.super())) title = "超级折算|" + title
                return title},
            cost(x){
                x = powerTo(x,this.super(),this.superPower())
                let estimatedCost = new Decimal(3).pow(x).floor()
                return estimatedCost
            },
            display() { 
                let al = "" 
                if(hasUpgrade("be",21)) al += "+"+format(this.addLevel())
                return "价格: <br><h1 style=color:#5EE55E>" + format(this.cost()) + "</h1> 转生宝石 <br>强度等级: <h1 style=color:#3F3F6F>Lv."+format(getBuyableAmount("be",21),0)+"</h1>"+al+"<br>效果:增幅镐子,钻头伤害底数+" + format(this.effect()) + ""},
            canAfford() { return player.be.prestiGems.gte(this.cost())},
            effect(x){ 
                let floor = one.div(100)
                if(hasUpgrade("be",33)) floor = floor.add(upgradeEffect("be",33))
                let estimatedEffect = floor.mul(x.add(this.addLevel()))
                return estimatedEffect
            },
            buy(){
                player.be.prestiGems = player.be.prestiGems.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))                
            },
            super(){
                let start = n(10)
                return start
            },
            superPower(){
                let power = n(2)
                if(hasUpgrade("h",55)) power = power.sub(upgradeEffect("h",55))
                return power
            },
            addLevel(){
                let n = zero
                if(hasUpgrade("be",21)) n = n.add(upgradeEffect("be",21))
                if(hasUpgrade("be",31)) n = n.add(upgradeEffect("be",31))
                return n
            },
            unlocked(){return hasMilestone("be",5)},
            style() { return { 'background-color': this.canAfford()?"#60B080":"#BF8F8F", filter: "brightness(100%)",'border-radius': "30px", height: "120px", width: "180px" }},
        },
    },
    pickaxeDamage(){
        let atk = one
        if(getBuyableAmount("be",11).gte(1)) atk = atk.mul(buyableEffect("be",11))
        return atk
    },
    pickaxeCanEvolve(){
        const upgradeThresholds = [10,25,50,75,100,200,300,400,500]
        for (index in upgradeThresholds){
            if (getBuyableAmount("be",11).eq(upgradeThresholds[index])) return true
        }
        return false
    },
    pickaxeLevelThreshold(){//检测等阶
        const upgradeThresholds = [10,25,50,75,100,200,300,400,500] //每个: 镐子升级进阶所需的等级数
        for (index in upgradeThresholds){
            if (getBuyableAmount("be",11).lte(upgradeThresholds[index])) return index
        }
        return 0
    },
    bitCanEvolve(){
        const upgradeThresholds = [5,10,15,20,30,50,75,100,200,300,400,500]
        for (index in upgradeThresholds){
            if (getBuyableAmount("be",12).eq(upgradeThresholds[index])) return true
        }
        return false
    },
    bitLevelThreshold(){
        const upgradeThresholds = [5,10,15,20,30,50,75,100,200,300,400,500]
        for (index in upgradeThresholds){
            if (getBuyableAmount("be",12).lte(upgradeThresholds[index])) return index
        }
        return 0
    },
    bitDamage(){
        let atk = one
        if(getBuyableAmount("be",12).gte(1)) atk = atk.mul(buyableEffect("be",12))
        if(hasUpgrade("be",14)) atk = atk.mul(upgradeEffect("be",14))
        if(hasMilestone("be",7)) atk = atk.mul(milestoneEffect("be",7))
        return atk
    },
    addBitTime(){
        if(hasMilestone("be",7)) return three
        let t = player.li.currentElectricity.div("e10").add(5).log(5).sub(1)
        return t
    },
    deptHp(){
        let depth = player.be.depth
        depth = powerTo(depth,layers.be.superHpStart(),1.5)
        if(player.be.depth.gte(100))depth = depth.sub(layers.be.hyperHpStart()).add(powerTo(player.be.depth,layers.be.hyperHpStart(),2))
        let hp = n(1.5).pow(depth.add(3)).floor()
        return hp
    },
    superHpStart(){
        let start = n(18)
        if(hasUpgrade("be",12)) start = start.add(upgradeEffect("be",12))
        if(hasUpgrade("li",81)) start = start.add(upgradeEffect("li",81))
        if(hasUpgrade("li",82)) start = start.add(upgradeEffect("li",82))
        if(hasUpgrade("li",83)) start = start.add(upgradeEffect("li",83))
        if(hasMilestone("he",9)) start = start.add(layers.he.temPointEffect6())
        return start
    },
    hyperHpStart(){
        let start = n(100)
        if(hasUpgrade("be",25)) start = start.add(upgradeEffect("be",25))
        return start
    },
    superhyperHpStart(){
        let start = n(1500)
        return start
    },
    gemGet(){
        let dg = layers.be.pickaxeDamage()
        if(dg.gte(12)) dg = powsoftcap(dg,n(12),three)
        dg = dg.floor()
        let get = player.be.depth.root(1.5).floor().mul(dg)
        if(player.be.depth.gte(36)) get = get.mul(layers.be.depthEffect2())
        if(hasUpgrade("be",32)) get = get.mul(upgradeEffect("be",32))
        if(player.c.energy.gte(1)) get = get.mul(layers.c.CEeffect1())
        return get
    },
    rewardGemt(){
        let rewardGemt = n(1.1).pow(player.be.depth)
        rewardGemt = powsoftcap(rewardGemt,n(1e30),5)
        if(player.be.depth.gte(36)) rewardGemt = rewardGemt.mul(layers.be.depthEffect2())
        if(hasUpgrade("be",32)) rewardGemt = rewardGemt.mul(upgradeEffect("be",32).mul(upgradeEffect("be",32)))
        if(hasUpgrade("h",54)) rewardGemt = rewardGemt.pow(upgradeEffect("h",54))
        if(player.c.energy.gte(1)) rewardGemt = rewardGemt.mul(layers.c.CEeffect1())
        return rewardGemt
    },
    depthEffect1(){
        let eff = player.be.depth.sub(9).pow(1.5).add(1)
        if(hasMilestone("be",7)) eff = n(1.1).pow(player.be.depth.sub(10))
        eff = eff.max(1)
        eff = powsoftcap(eff,layers.be.depthEffect1softcap(),5)
        return eff
    },
    depthEffect2(){
        let eff = player.be.depth.sub(35).pow(2).add(1)
        eff = eff.max(1)
        eff = powsoftcap(eff,layers.be.depthEffect2softcap(),5)
        return eff
    },
    depthEffect3(){
        let eff = three.pow(player.be.depth.sub(255))
        eff = eff.max(1)
        let saveeff = powsoftcap(eff,layers.be.depthEffect3softcap(),5)
        let root = saveeff.log(1e19).max(5)
        
        if(player.b.inBorane) eff = eff.max(10).log(10)//special
        
        eff = powsoftcap(eff,layers.be.depthEffect3softcap(),root)
        return eff
    },
    depthEffect4(){
        let eff = player.be.depth.sub(1298).div(100).root(2)
        eff = eff.max(0)
        if(eff.gt(3)) eff = three.add(player.be.depth.sub(2198).root(4).div(100))
        eff = eff.min(layers.be.depthEffect4hardcap())
        return eff
    },
    depthEffect5(){
        let eff = player.be.depth.sub(2280).max(1)
        return eff
    },
    depthEffect1softcap(){
        let start = n(1e8)
        return start
    },
    depthEffect2softcap(){
        let start = n(1024)
        return start
    },
    depthEffect3softcap(){
        let start = n(1024)
        if(hasMilestone("be",11)) start = start.mul(1e30)
        if(hasMilestone("be",12)) start = start.mul(milestoneEffect("be",12))
        return start
    },
    depthEffect4hardcap(){
        let start = n(2)
        if(hasUpgrade("be",35)) start = start.add(upgradeEffect("be",35))
        if(hasMilestone("be",13)) start = start.add(1)
        return start
    },
    loadingPickaxe(){
        let t = five
        if(hasUpgrade("be",13)) t = t.sub(upgradeEffect("be",13))
        if(hasUpgrade("be",22)) t = t.div(upgradeEffect("be",22))
        return t
    },
    prestiGemsGet(){
        let get = player.be.depth.sub(59).max(0).pow(2)
        if(!hasUpgrade("h",53)) get = powsoftcap(get,two.pow(10),three)
        if(hasMilestone("be",9)) get = get.mul(milestoneEffect("be",9))
        if(hasMilestone("b",0)) get = get.mul(100)
        if(player.c.energy.gte(1)) get = get.mul(layers.c.CEeffect3())
        return get
    },
    update(diff){
        if(player.be.bittingTime.gt(0)){
            player.be.bittingTime = player.be.bittingTime.sub(diff).max(0)
            player.be.beDamaged = player.be.beDamaged.add(layers.be.bitDamage().mul(diff))
        }
        player.be.loadingPickaxe = player.be.loadingPickaxe.sub(diff).max(0)
        if(hasUpgrade("he",65)&&layers.be.loadingPickaxe().lte(diff*2)){
            player.be.beDamaged = player.be.beDamaged.add(layers.be.pickaxeDamage().mul(diff*2).div(layers.be.loadingPickaxe()))
            player.be.gems = player.be.gems.add(layers.be.gemGet().mul(diff*2).div(layers.be.loadingPickaxe()))
        }
        else if(hasUpgrade("be",22)&&player.be.loadingPickaxe.eq(0)){
            player.be.beDamaged = player.be.beDamaged.add(layers.be.pickaxeDamage())
            player.be.gems = player.be.gems.add(layers.be.gemGet())
            player.be.loadingPickaxe = layers.be.loadingPickaxe()
        }
        if(hasMilestone("be",7)&&player.be.bittingTime.lte(28)){
            player.be.bittingTime = player.be.bittingTime.add(layers.be.addBitTime()).min(60)
            player.li.currentElectricity = zero
        }
        if(hasUpgrade("he",65)){
            if(player.be.depth.lt(depthNum(player.be.beDamaged)))player.be.depth = depthNum(player.be.beDamaged).floor()
            if(player.be.depth.gte(8)) player.be.gems = player.be.gems.add(layers.be.rewardGemt().mul(diff))
        }
        else if(player.be.beDamaged.gte(layers.be.deptHp())){
            if(player.be.depth.lt(8)) player.be.gems = player.be.gems.add(layers.be.deptHp().root(2).floor())
            if(player.be.depth.gte(8)) player.be.gems = player.be.gems.add(layers.be.deptHp().root(3).floor())
            player.be.beDamaged = player.be.beDamaged.sub(layers.be.deptHp())
            player.be.depth = player.be.depth.add(1)
        }
        if(hasMilestone("be",10)){
            player.be.prestiGems = player.be.prestiGems.add(layers.be.prestiGemsGet().mul(diff))
        }
        else if(hasMilestone("b",0)&&layers.be.prestiGemsGet().gte(player.be.prestiGems)) player.be.prestiGems = layers.be.prestiGemsGet().max(0)
    },
    tabFormat:{
        "homepage": {   
            content: [
                "main-display","prestige-button",   
                "blank","milestones"
            ],
            unlocked(){return player.be.unlocked}
        },
        "digdown":{
            content: [
                "main-display","prestige-button",   
                "blank",["bar",["depth"]],
                ["display-text",function(){return "你达到了 " + format(player.be.depth) + " 深度"}],
                ["display-text",function(){
                    if(!hasUpgrade("he",65))return "你有 " + format(player.be.gems) + " 宝石(在第8深度以后,深度奖励宝石^0.5->^0.33)"
                    else return "你有 " + format(player.be.gems) + " 宝石<br>深度奖励宝石获取: " + format(layers.be.rewardGemt()) + "/s"}],                
                "blank",["clickables",[1]],
                "blank",["bar",["pickaxeCD"]],
                ["bar",["bitTime"]],
                ["display-text",function(){
                    let text = ""
                    if(player.be.depth.gte(layers.be.superHpStart())) text += "当深度到达"+format(layers.be.superHpStart())+"以后,深度将超级折算!<br>"
                    if(player.be.depth.gte(layers.be.hyperHpStart())) text += "当深度到达"+format(layers.be.hyperHpStart())+"以后,深度将究极折算!<br>"
                    if(player.be.depth.gte(layers.be.superhyperHpStart())) text += "当深度到达"+format(layers.be.superhyperHpStart())+"以后,深度将超究折算!<br>"
                    return text
                }],"blank",
                ["display-text",function(){
                    let text1 = "当深度到达10后,解锁深度第一效果"
                    let text2 = ""
                    let text3 = ""
                    let text4 = ""
                    let text5 = ""
                    if(player.be.depth.gte(10)) {
                        text1 = "深度第一效果:电能获取与电池容量变为原来的" + format(layers.be.depthEffect1()) + "x"
                        if(layers.be.depthEffect1().gte(layers.be.depthEffect1softcap())) text1 += "(已达软上限)"
                        text2 = "当深度到达36时,解锁深度第二效果"
                    }
                    if(player.be.depth.gte(36)) {
                        text2 = "深度第二效果:宝石获取与氢能获取变为原来的" + format(layers.be.depthEffect2()) + "x"
                        if(layers.be.depthEffect2().gte(layers.be.depthEffect2softcap())) text2 += "(已达软上限)"
                        text3 = "当深度到达256时,解锁深度第三效果"
                    }
                    if(player.be.depth.gte(256)) {
                        text3 = "深度第三效果:温度点获取变为原来的" + format(layers.be.depthEffect3()) + "x"
                        if(layers.be.depthEffect3().gte(layers.be.depthEffect3softcap())) text3 += "(已达软上限)"
                        text4 = "当深度到达1300时,解锁深度第四效果"
                    }
                    if(player.be.depth.gte(1300)) {
                        text4 = "深度第四效果:计算气球获取的底数 -" + format(layers.be.depthEffect4())
                        if(layers.be.depthEffect4().gte(layers.be.depthEffect4hardcap())) text4 += "(已达硬上限)"
                        text5 = "当深度到达2300时,解锁深度第五效果"
                    }
                    if(player.be.depth.gte(2300)) {
                        text5 = "深度第五效果:丁硼烷获取变为原来的 " + format(layers.be.depthEffect5()) + "x"
                        //if(layers.be.depthEffect5().gte(layers.be.depthEffect5hardcap())) text4 += "(已达软上限)"
                        text6 = "当深度到达10000000时,解锁深度第六效果"
                    }
                    return text1 + "<br>" + text2 + "<br>" + text3 + "<br>" + text4 + "<br>" + text5
                }],
            ],
            unlocked(){return hasUpgrade("li",71)}
        },
        "pickaxes":{
            content: [
                "main-display","prestige-button",   
                "blank",["display-text",function(){return "你有 " + format(player.be.gems) + " 宝石"}],
                ["buyables",[1,2]]
            ],
            unlocked(){return hasUpgrade("li",71)}
        },
        "upgrades":{
            content: [
                "main-display","prestige-button",   
                "blank",["display-text",function(){return "你有 " + format(player.be.gems) + " 宝石"}],
                ["upgrades",[1,2,3]]
            ],
            unlocked(){return hasUpgrade("li",71)}
        },
        "prestigems":{
            content:[
                "main-display","prestige-button",   
                "blank",["clickable",21],["display-text",function(){return "你有 " + format(player.be.prestiGems) + " 转生宝石"}],
            ],
            unlocked(){return hasMilestone("be",4)}
        },
    },
},)
/*
|||||\\\\\
|||||    \\
|||||     \\
|||||      ||
|||||     //
|||||    //
|||||====
|||||    \\
|||||     \\
|||||      ||
|||||     //
|||||    //
|||||/////

L:good
Note: Periodic Elements Incremental Tree is a completely free incremental game based on The-Modding-Tree Engine. Visit banana3864.github.io/PEIT for the latest & official game. If you are not playing on this website, please go to the official website above. Author: Liuliu66686(main) & Banana3864
*/
addLayer("b", {
    name: "b",
    symbol: "B",
    position: 3, 
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        inBorane: false,
        borane1: new Decimal(0),
        borane2: new Decimal(0),
        borane3: new Decimal(0),
        borane4: new Decimal(0),
        borane5: new Decimal(0),
        borane6: new Decimal(0),
        borane7: new Decimal(0),
        gainBorane: [],
        boraneGainFloorN: new Decimal(0),
    }},
    branches: ["he"],
    color: "brown",
    requires: new Decimal(1e198),
    resource: "硼",
    baseResource: "温度点",
    baseAmount() {return player.he.temPoint},
    type: "static", 
    exponent: 3,
    gainMult() {
        mult = one
        return mult
    },
    gainExp() {
        exp = one
        return exp
    },
    row: 1,
    layerShown(){return player.b.unlocked||hasUpgrade("p",55)},
    resetsNothing(){return hasMilestone("b",1)},
    milestones:{
        0:{
            requirementDescription: "3硼",
            effectDescription: "转生宝石获取x100,但转生宝石数量将锁定为重置时可获取的转生宝石数量的最大值(这好像是加成)",
            done(){return player.b.points.gte(3)},
            unlocked(){return player.b.unlocked},
        },
        1:{
            requirementDescription: "4硼",
            effectDescription: "每秒自动获取当前重置可获得的100%铍,硼不再重置任何东西",
            done(){return player.b.points.gte(4)},
            unlocked(){return player.b.unlocked},
        },
        2:{
            requirementDescription: "6硼",
            effectDescription: "解锁硼烷",
            done(){return player.b.points.gte(6)},
            unlocked(){return hasMilestone("b",0)},
        },
        3:{
            requirementDescription: "在制取硼烷的过程中----15气球&30氦",
            effectDescription: "解锁癸硼烷,己硼烷,戊硼烷",
            done(){return player.b.inBorane&&player.h.balloon.gte(15)&&player.he.points.gte(30)},
            unlocked(){return hasMilestone("b",2)},
        },
        4:{
            requirementDescription: "在制取硼烷的过程中----21气球&1e9温度点",
            effectDescription: "解锁丁硼烷,每秒自动获取转化时的1000%氢能",
            done(){return player.b.inBorane&&player.h.balloon.gte(21)&&player.he.temPoint.gte(1e9)},
            unlocked(){return hasMilestone("b",2)},
        },
    },
    upgrades:{
        11:{
            title:"癸硼烷基础",
            description:"所有硼烷的基础获取+1",
            effect(){
                let effect = one
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            cost: new Decimal(300),
            unlocked(){return player.b.unlocked},
            currencyDisplayName:"癸硼烷",
            currencyInternalName:"borane1",
            currencyLayer:"b",      
        },
        12:{
            title:"癸硼烷粒子",
            description:"基本粒子获取基于癸硼烷而提升",
            effect(){
                let effect = player.b.borane1.max(1)
                effect = powsoftcap(effect,n(1e20),n(three))
                return effect
            },
            effectDisplay(){return format(this.effect())+"x"},
            cost: new Decimal(2400),
            unlocked(){return hasUpgrade("b",11)},
            currencyDisplayName:"癸硼烷",
            currencyInternalName:"borane1",
            currencyLayer:"b",      
        },
        13:{
            title:"癸硼烷温度点",
            description:"温度点获取基于癸硼烷而提升",
            effect(){
                let effect = player.b.borane1.max(1)
                effect = powsoftcap(effect,n(1e20),n(three))
                return effect
            },
            effectDisplay(){return format(this.effect())+"x"},
            cost: new Decimal(50000000),
            unlocked(){return hasUpgrade("b",12)},
            currencyDisplayName:"癸硼烷",
            currencyInternalName:"borane1",
            currencyLayer:"b",      
        },
        14:{
            title:"选择更多硼烷II",
            description:"选择更多硼烷效果x2",
            effect(){
                let effect = 2
                if(hasUpgrade("b",24)) effect += upgradeEffect("b",24)
                return effect
            },
            effectDisplay(){return this.effect()+"x"},
            cost: new Decimal(1e9),
            unlocked(){return hasUpgrade("b",13)},
            currencyDisplayName:"癸硼烷",
            currencyInternalName:"borane1",
            currencyLayer:"b",      
        },
        21:{
            title:"己硼烷基础",
            description:"所有硼烷的基础获取+1",
            effect(){
                let effect = one
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            cost: new Decimal(200),
            unlocked(){return player.b.unlocked},
            currencyDisplayName:"己硼烷",
            currencyInternalName:"borane2",
            currencyLayer:"b",      
        },
        22:{
            title:"己硼烷氢能",
            description:"氢能获取基于己硼烷而提升(软上限后)",
            effect(){
                let effect = player.b.borane2.max(1).root(1.5)
                effect = powsoftcap(effect,n(1e20),n(three))
                return effect
            },
            effectDisplay(){return format(this.effect())+"x"},
            cost: new Decimal(600),
            unlocked(){return hasUpgrade("b",21)},
            currencyDisplayName:"己硼烷",
            currencyInternalName:"borane2",
            currencyLayer:"b",      
        },
        23:{
            title:"己硼烷癸硼烷",
            description:"癸硼烷获取基于己硼烷而提升",
            effect(){
                let effect = player.b.borane2.max(1).root(3)
                effect = powsoftcap(effect,n(1e20),n(three))
                return effect
            },
            effectDisplay(){return format(this.effect())+"x"},
            cost: new Decimal(500000),
            unlocked(){return hasUpgrade("b",22)},
            currencyDisplayName:"己硼烷",
            currencyInternalName:"borane2",
            currencyLayer:"b",      
        },
        24:{
            title:"选择更多硼烷III",
            description:"选择更多硼烷II的效果+1",
            effect(){
                let effect = 1
                return effect
            },
            effectDisplay(){return "+"+this.effect()},
            cost: new Decimal(50000000),
            unlocked(){return hasUpgrade("b",23)},
            currencyDisplayName:"己硼烷",
            currencyInternalName:"borane2",
            currencyLayer:"b",      
        },
        31:{
            title:"戊硼烷基础",
            description:"所有硼烷的基础获取+1",
            effect(){
                let effect = one
                return effect
            },
            effectDisplay(){return "+"+format(this.effect())},
            cost: new Decimal(250),
            unlocked(){return player.b.unlocked},
            currencyDisplayName:"戊硼烷",
            currencyInternalName:"borane3",
            currencyLayer:"b",      
        },
        32:{
            title:"戊硼烷氦价格",
            description:"氦价格基于戊硼烷而降低",
            effect(){
                let effect = player.b.borane3.max(1)
                effect = powsoftcap(effect,n(1e20),n(three))
                return effect
            },
            effectDisplay(){return "/"+format(this.effect())},
            cost: new Decimal(600),
            unlocked(){return hasUpgrade("b",31)},
            currencyDisplayName:"戊硼烷",
            currencyInternalName:"borane3",
            currencyLayer:"b",      
        },
        33:{
            title:"戊硼烷己硼烷",
            description:"己硼烷获取基于戊硼烷而提升",
            effect(){
                let effect = player.b.borane3.max(1).root(4)
                effect = powsoftcap(effect,n(1e20),n(three))
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(30000),
            unlocked(){return hasUpgrade("b",32)},
            currencyDisplayName:"戊硼烷",
            currencyInternalName:"borane3",
            currencyLayer:"b",      
        },
        34:{
            title:"硼效果发散",
            description:"基于硼加成效果发散和效果发散II的效果",
            effect(){
                let effect = player.b.points.min(20).max(1)
                return effect
            },
            effectDisplay(){return "^"+format(this.effect())},
            cost: new Decimal(8000000),
            unlocked(){return hasUpgrade("b",33)},
            currencyDisplayName:"戊硼烷",
            currencyInternalName:"borane3",
            currencyLayer:"b",      
        },
        41:{
            title:"丁硼烷癸己戊",
            description:"丁硼烷加成癸硼烷己硼烷戊硼烷的获取",
            effect(){
                let effect = player.b.borane4.root(4).add(1)
                effect = powsoftcap(effect,n(1e20),n(ten))
                if(hasUpgrade("b",44)) effect = effect.pow(upgradeEffect("b",44))
                return effect
            },
            effectDisplay(){return format(this.effect()) + "x"},
            cost: new Decimal(500),
            unlocked(){return hasMilestone("b",4)},
            currencyDisplayName:"丁硼烷",
            currencyInternalName:"borane4",
            currencyLayer:"b",      
        },
        42:{
            title:"选择更多硼烷",
            description:"你可以多选择生产一种硼烷",
            effect(){
                let effect = 1
                if(hasUpgrade("b",14)) effect *= upgradeEffect("b",14)
                return effect
            },
            effectDisplay(){return "+"+this.effect()},
            cost: new Decimal(1000),
            unlocked(){return hasUpgrade("b",41)},
            currencyDisplayName:"丁硼烷",
            currencyInternalName:"borane4",
            currencyLayer:"b",      
        },
        43:{
            title:"丁硼烷粒子",
            description:"基于丁硼烷加成基本粒子获取",
            effect(){
                let effect = player.b.borane4.pow(2.5)
                effect = powsoftcap(effect,n(1e30),five)
                if(hasUpgrade("b",44)) effect = effect.pow(upgradeEffect("b",44))
                return effect
            },
            effectDisplay(){return "x"+format(this.effect())},
            cost: new Decimal(75000),
            unlocked(){return hasUpgrade("b",42)},
            currencyDisplayName:"丁硼烷",
            currencyInternalName:"borane4",
            currencyLayer:"b",      
        },
        44:{
            title:"效果提升与基础硼烷",
            description:"本行的第一个升级和第三个升级效果^2,基础硼烷获取获取基于氦倍增",
            effect(){
                let effect = two
                return effect
            },
            effect2(){
                let effect = player.he.points.max(1)
                return effect
            },
            effectDisplay(){return "^"+format(this.effect())+",x" + format(this.effect2())},
            cost: new Decimal(1000000),
            unlocked(){return hasUpgrade("b",43)},
            currencyDisplayName:"丁硼烷",
            currencyInternalName:"borane4",
            currencyLayer:"b",      
        },
    },
    clickables:{
        11:{
            title() {return "制取硼烷--" + (player.b.inBorane?"结束":"开始")},
            display() {
                let text = "当前状态:" + (player.b.inBorane?"进行中":"闲置") + "<br><h3>"
                text += "开始制取硼烷时,进行一次铍重置,但保留一些重要升级<br>在制取硼烷的过程中,基本粒子获取^0.75,气球获取底数+10,温度点获取^0.5,氢获取^0.5,氢能获取^0.8,锂第四效果log10,锂研究-22效果^0.2,深度第三效果log10<br>结束制取硼烷时,基于气球数量和温度点数量获取硼烷获取基数,<br>当前: "+format(player.b.boraneGainFloorN)+"<br>当前结束制取硼烷可获得 " + format(layers.b.boraneGainFloor()) + "(+"+format(layers.b.boraneGainFloor().sub(player.b.boraneGainFloorN).max(0))+") 硼烷获取基数"
                return text
            },
            canClick() {return player.b.inBorane||canReset("be")},
            onClick() {
                if(player.b.inBorane){//结算
                    player.b.boraneGainFloorN = layers.b.boraneGainFloor().max(player.b.boraneGainFloorN)
                    player.b.inBorane = false
                }
                else {//开始
                    player.b.inBorane = true
                    doReset("be");player.p.upgrades=[54];setBuyableAmount("p",11,zero);setBuyableAmount("p",12,zero);setBuyableAmount("p",13,zero);player.he.upgrades=[65];player.h.upgrades=[24]
                }
            },
            style() { return { 'background-color': "#A52A2A",'border-radius': "0px", height: "120px", width: "650px" } },
        },
        21:{
            title() {return "重新选择生产硼烷"},
            display() {return "上限量:" + layers.b.chooseBoraneGainMax() + "<br>已选择:" + player.b.gainBorane.length},
            canClick() {
            const consta = [1,2,3,4,5,6]
            for (index in consta){
                if (player.b.gainBorane.includes(consta[index])) return true
            }
            return false
            },
            onClick() {
                player.b.gainBorane = []
            },
            style() { return { 'background-color': this.canClick()?"white":"#BF8F8F",'border-radius': "0px",height: "240px", width: "60px"} },
            unlocked(){return hasMilestone("b",3)},
        },
        31:{
            title() {return "选择生产癸硼烷"},
            display(){if(player.b.gainBorane.includes(1))return "生产中"},
            canClick() {
            if (!player.b.gainBorane.includes(1)&&player.b.gainBorane.length<layers.b.chooseBoraneGainMax()) return true
            return false
            },
            onClick() {
                player.b.gainBorane.push(1)
            },
            style() { return { 'background-color': this.canClick()?"red":"#BF8F8F",'border-radius': "0px",height: "120px", width: "180px"} },
            unlocked(){return hasMilestone("b",3)},
        },
        32:{
            title() {return "选择生产己硼烷"},
            display(){if(player.b.gainBorane.includes(2))return "生产中"},
            canClick() {
            if (!player.b.gainBorane.includes(2)&&player.b.gainBorane.length<layers.b.chooseBoraneGainMax()) return true
            return false
            },
            onClick() {
                player.b.gainBorane.push(2)
            },
            style() { return { 'background-color': this.canClick()?"orange":"#BF8F8F",'border-radius': "0px",height: "120px", width: "180px"} },
            unlocked(){return hasMilestone("b",3)},
        },
        33:{
            title() {return "选择生产戊硼烷"},
            display(){if(player.b.gainBorane.includes(3))return "生产中"},
            canClick() {
            if (!player.b.gainBorane.includes(3)&&player.b.gainBorane.length<layers.b.chooseBoraneGainMax()) return true
            return false
            },
            onClick() {
                player.b.gainBorane.push(3)
            },
            style() { return { 'background-color': this.canClick()?"yellow":"#BF8F8F",'border-radius': "0px",height: "120px", width: "180px"} },
            unlocked(){return hasMilestone("b",3)},
        },
        41:{
            title() {return "选择生产丁硼烷"},
            display(){if(player.b.gainBorane.includes(4))return "生产中"},
            canClick() {
            if (!player.b.gainBorane.includes(4)&&player.b.gainBorane.length<layers.b.chooseBoraneGainMax()) return true
            return false
            },
            onClick() {
                player.b.gainBorane.push(4)
            },
            style() { return { 'background-color': this.canClick()?"green":"#BF8F8F",'border-radius': "0px",height: "120px", width: "180px"} },
            unlocked(){return hasMilestone("b",4)},
        },
        42:{
            title() {return "选择生产丙硼烷"},
            display(){if(player.b.gainBorane.includes(5))return "生产中"},
            canClick() {
            if (!player.b.gainBorane.includes(5)&&player.b.gainBorane.length<layers.b.chooseBoraneGainMax()) return true
            return false
            },
            onClick() {
                player.b.gainBorane.push(5)
            },
            style() { return { 'background-color': this.canClick()?"cyan":"#BF8F8F",'border-radius': "0px",height: "120px", width: "180px"} },
            unlocked(){return hasMilestone("b",5)},
        },
        43:{
            title() {return "选择生产乙硼烷"},
            display(){if(player.b.gainBorane.includes(6))return "生产中"},
            canClick() {
            if (!player.b.gainBorane.includes(6)&&player.b.gainBorane.length<layers.b.chooseBoraneGainMax()) return true
            return false
            },
            onClick() {
                player.b.gainBorane.push(6)
            },
            style() { return { 'background-color': this.canClick()?"blue":"#BF8F8F",'border-radius': "0px",height: "120px", width: "180px"} },
            unlocked(){return hasMilestone("b",6)},
        },
    },
    boraneGainFloor(){
        let gain = zero
        if(player.b.inBorane) gain = player.h.balloon.mul(player.he.temPoint.max(10).log(10))
        if(hasUpgrade("b",44)) gain = gain.mul(upgradeEffect2("b",44))
        return gain
    },
    boraneGain(num){
        let gain = one
        if(!player.b.gainBorane.includes(num)) return zero
        if(hasUpgrade("b",11)) gain = gain.add(upgradeEffect("b",11))
        if(hasUpgrade("b",21)) gain = gain.add(upgradeEffect("b",21))
        if(hasUpgrade("b",31)) gain = gain.add(upgradeEffect("b",31))
        if(hasMilestone("he",10)) gain = gain.add(layers.he.temPointEffect7())
        if(player.c.energy.gte(1)) gain = gain.add(layers.c.CEeffect3())        
        if(num==1){gain = gain.mul(player.b.boraneGainFloorN)}
        else if(num==2||num==3)gain = gain.mul(player.b.boraneGainFloorN.div(n(num).mul(2.5)))
        else if(num==4||num==5)gain = gain.mul(player.b.boraneGainFloorN.div(n(num).pow(3)))
        else if(num==6)gain = gain.mul(player.b.boraneGainFloorN.root(2))
        if((num==1||num==2||num==3)&&hasUpgrade("b",41)) gain = gain.mul(upgradeEffect("b",41))
        if(num==1&&hasUpgrade("b",23)) gain = gain.mul(upgradeEffect("b",23))
        if(num==2&&hasUpgrade("b",33)) gain = gain.mul(upgradeEffect("b",33))
        if(num==4&&player.be.depth.gte(2300)) gain = gain.mul(layers.be.depthEffect5())
        return gain
    },
    chooseBoraneGainMax(){
        let num = 1
        if(hasUpgrade("b",42)) num += upgradeEffect("b",42)
        return num
    },
    update(diff){
        player.b.borane1 = player.b.borane1.add(layers.b.boraneGain(1).mul(diff))
        player.b.borane2 = player.b.borane2.add(layers.b.boraneGain(2).mul(diff))
        player.b.borane3 = player.b.borane3.add(layers.b.boraneGain(3).mul(diff))
        player.b.borane4 = player.b.borane4.add(layers.b.boraneGain(4).mul(diff))
        player.b.borane5 = player.b.borane5.add(layers.b.boraneGain(5).mul(diff))
        player.b.borane6 = player.b.borane6.add(layers.b.boraneGain(6).mul(diff))
    },
    tabFormat:{
        "milestones": {   
            content: [
                "main-display","prestige-button",   
                "blank","milestones"
            ],
            unlocked(){return player.b.unlocked}
        },
        "boranes": {   
            content: [
                "main-display","prestige-button","blank",  
                ["clickables",[1]],
                ["row",[["clickable",21],["clickables",[3,4]]]],
                ["display-text",function(){
                    let text1 = "";let text2 = "";let text3= "";let text4 = "";let text5 = "";let text6 = "";
                    if(hasMilestone("b",3)){
                        text1 = "你有 " + format(player.b.borane1) + " 癸硼烷(+"+format(layers.b.boraneGain(1))+"/s)" 
                        text2 = "你有 " + format(player.b.borane2) + " 己硼烷(+"+format(layers.b.boraneGain(2))+"/s)" 
                        text3 = "你有 " + format(player.b.borane3) + " 戊硼烷(+"+format(layers.b.boraneGain(3))+"/s)" 
                    }
                    if(hasMilestone("b",4))text4 = "你有 " + format(player.b.borane4) + " 丁硼烷(+"+format(layers.b.boraneGain(4))+"/s)" 
                    if(hasMilestone("b",5))text5 = "你有 " + format(player.b.borane5) + " 丙硼烷(+"+format(layers.b.boraneGain(5))+"/s)" 
                    if(hasMilestone("b",6))text6 = "你有 " + format(player.b.borane6) + " 乙硼烷(+"+format(layers.b.boraneGain(6))+"/s)" 
                    return text1 + "<br>" + text2 + "<br>" + text3 + "<br>" + text4 + "<br>" + text5 + "<br>" + text6
                }]
            ],
            unlocked(){return hasMilestone("b",2)}
        },
        "upgrades": {   
            content: [
                "main-display","prestige-button","blank",  
                ["display-text",function(){
                    let text1 = "";let text2 = "";let text3= "";let text4 = "";let text5 = "";let text6 = "";
                    if(hasMilestone("b",3)){
                        text1 = "你有 " + format(player.b.borane1) + " 癸硼烷(+"+format(layers.b.boraneGain(1))+"/s)" 
                        text2 = "你有 " + format(player.b.borane2) + " 己硼烷(+"+format(layers.b.boraneGain(2))+"/s)" 
                        text3 = "你有 " + format(player.b.borane3) + " 戊硼烷(+"+format(layers.b.boraneGain(3))+"/s)" 
                    }
                    if(hasMilestone("b",4))text4 = "你有 " + format(player.b.borane4) + " 丁硼烷(+"+format(layers.b.boraneGain(4))+"/s)" 
                    if(hasMilestone("b",5))text5 = "你有 " + format(player.b.borane5) + " 丙硼烷(+"+format(layers.b.boraneGain(5))+"/s)" 
                    if(hasMilestone("b",6))text6 = "你有 " + format(player.b.borane6) + " 乙硼烷(+"+format(layers.b.boraneGain(6))+"/s)" 
                    return text1 + "<br>" + text2 + "<br>" + text3 + "<br>" + text4 + "<br>" + text5 + "<br>" + text6
                }],["upgrades",[1,2,3,4,5,6]]
            ],
            unlocked(){return hasMilestone("b",3)}
        },
    },    
},)
addLayer("c", {
    name: "c",
    symbol: "C",
    position: 1, 
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        energy: zero,
        bestResetTime: 1.79e308,
    }},
    branches: ["li","be","b"],
    color: "#555555",
    requires: new Decimal("1e332"),
    resource: "碳",
    baseResource: "基本粒子",
    baseAmount() {return player.points},
    type: "normal", 
    exponent: 1/308,
    gainMult() {
        mult = one
        return mult
    },
    gainExp() {
        exp = one
        return exp
    },
    row: 3,
    doReset(){
        player.p.upgrades = [];setBuyableAmount("p",11,0);setBuyableAmount("p",12,0);setBuyableAmount("p",13,0)
    },
    effectDescription(){
        return "和 " + format(player.c.energy) + " CE" 
    },
    layerShown(){return player.p.points.gte(1.79e308)||player.c.unlocked},
    milestones:{
        0:{
            requirementDescription: "首次重置碳",
            effectDescription(){return "每个碳生产碳能量(CE),<br>当前效果: +" + format(this.effect()) + "/s(为0有效)"},
            effect(){
                let eff = player.c.points.add(1)
                return eff
            },
            done(){return player.c.unlocked},
            unlocked(){return true},
        },
    },
    upgrades:{
        11:{
            title:"碳-自动购买者",
            description:"自动购买所有之前的升级",
            cost: new Decimal(1),
            unlocked(){return player.c.unlocked},
        },
    },
    CEeffect1(){ //点数,宝石,奖励宝石
        let eff = player.c.energy.max(1).root(2)
        powsoftcap(eff,n(1e9),two)
        return eff
    },
    CEeffect2(){ //氢,氦,温度点,氢能
        let eff = player.c.energy.add(1).root(5)
        powsoftcap(eff,n(1e9),two)
        return eff
    },
    CEeffect3(){ //铍,转生宝石,锂,硼烷基础,额外研究点
        let eff = player.c.energy.max(10).log(10)
        return eff
    },
    update(diff){
        player.c.energy = player.c.energy.add(milestoneEffect("c",0).mul(diff))
        if(hasUpgrade("c",11)){
            buyUpgrade("li",11);buyUpgrade("li",12);buyUpgrade("li",21)
            buyUpgrade("be",11);buyUpgrade("be",12);buyUpgrade("be",13);buyUpgrade("be",14);buyUpgrade("be",15);buyUpgrade("be",21);buyUpgrade("be",23);buyUpgrade("be",22);buyUpgrade("be",24);buyUpgrade("be",25);buyUpgrade("be",31);buyUpgrade("be",32);buyUpgrade("be",33);buyUpgrade("be",34);buyUpgrade("be",35)
            buyUpgrade("b",11);buyUpgrade("b",12);buyUpgrade("b",13);buyUpgrade("b",14);buyUpgrade("b",21);buyUpgrade("b",22);buyUpgrade("b",23);buyUpgrade("b",24);buyUpgrade("b",31);buyUpgrade("b",32);buyUpgrade("b",33);buyUpgrade("b",34);buyUpgrade("b",41);buyUpgrade("b",42);buyUpgrade("b",43);buyUpgrade("b",44)
            buyUpgrade("h",51);buyUpgrade("h",52);buyUpgrade("h",53);buyUpgrade("h",54);buyUpgrade("h",55)
            buyUpgrade("p",11);buyUpgrade("p",12);buyUpgrade("p",13);buyUpgrade("p",14);buyUpgrade("p",15);buyUpgrade("p",21);buyUpgrade("p",23);buyUpgrade("p",22);buyUpgrade("p",24);buyUpgrade("p",25);buyUpgrade("p",31);buyUpgrade("p",32);buyUpgrade("p",33);buyUpgrade("p",34);buyUpgrade("p",35);buyUpgrade("p",51);buyUpgrade("p",52);buyUpgrade("p",53);buyUpgrade("p",54);buyUpgrade("p",55);buyUpgrade("p",41);buyUpgrade("p",42);buyUpgrade("p",43);buyUpgrade("p",44);buyUpgrade("p",45)
            buyUpgrade("he",64);buyUpgrade("he",65)
        }
    },
    tabFormat:{
        "milestones": {   
            content: [
                "main-display","prestige-button",["display-text",function(){
                    return "<h5>距离上次碳重置已经过去了 "+formatTime(player.c.resetTime) +"<br>你的最佳重置时间为 "+formatTime(player.c.bestResetTime)
                }], ["display-text",function(){
                    let text1 = "你的 CE 加成点数,宝石,奖励宝石获取 "+format(layers.c.CEeffect1())+"x<br>"
                    let text2 = "你的 CE 加成氢,氢能,温度点获取 "+format(layers.c.CEeffect2())+"x,和降低氦价格 /"+format(layers.c.CEeffect2())+"<br>"
                    let text3 = "你的 CE 加成铍,转生宝石 "+format(layers.c.CEeffect3())+"x,和降低锂价格 /"+format(layers.c.CEeffect3())+",同时硼烷基础和研究点 +"+format(layers.c.CEeffect3().floor())+"<br>"
                    return text1 + text2 + text3
                }],  
                "blank","milestones",                
            ],
            unlocked(){return player.c.unlocked}
        },
        "upgrades": {
            content: [
                "main-display","prestige-button",
                "blank","upgrades",                
            ],
            unlocked(){return player.c.unlocked}
        }
    },    
},)
addLayer("a", {
    startData() { return {
        unlocked: true,
    }},
    color: "yellow",
    row: "side",
    tooltip() {
        return ("成就")
    },
    achievementPopups: true,
    achievements: {
        11: {
            name: "11",
            image: "png/成就_11.png",
            done() {return player.points.gte(1e5)}, 
            doneTooltip: "获得100000基本粒子", 
            style() { return { 'background-color': hasAchievement("a",11)?"#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "0px", height: "96px", width: "96px" } },
            unlocked: true
        },
        12: {
            name: "12",
            image: "png/成就_12.png",
            done() {return player.h.points.gte(1e5)}, 
            doneTooltip: "获得100000氢", 
            style() { return { 'background-color': hasAchievement("a",12)?"#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "0px", height: "96px", width: "96px" } },
            unlocked: true
        },
        13: {
            name: "13",
            image: "png/成就_13.png",
            done() {return player.h.balloon.gte(6)}, 
            doneTooltip: "获得6气球", 
            style() { return { 'background-color': hasAchievement("a",13)?"#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "0px", height: "96px", width: "96px" } },
            unlocked: true
        },
        14: {
            name: "14",
            image: "png/成就_14.png",
            done() {return player.he.points.gte(56)}, 
            doneTooltip: "获得56氦", 
            style() { return { 'background-color': hasAchievement("a",14)?"#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "0px", height: "96px", width: "96px" } },
            unlocked: true
        },
        15: {
            name: "15",
            image: "png/成就_15.png",
            done() {return player.li.points.gte(8)}, 
            doneTooltip: "获得8锂", 
            style() { return { 'background-color': hasAchievement("a",15)?"#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "0px", height: "96px", width: "96px" } },
            unlocked: true
        },
        16: {
            name: "16",
            image: "png/成就_16.png",
            done() {return layers.he.temPointdivLicost().gte(100)}, 
            doneTooltip: "温度点第四效果达到/100", 
            style() { return { 'background-color': hasAchievement("a",16)?"#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "0px", height: "96px", width: "96px" } },
            unlocked: true
        },
        17: {
            name: "17",
            image: "png/成就_17.png",
            done() {return player.he.clicks.gte(1000)||hasAchievement("a",17)},
            doneTooltip: "在一次第二行或更高的重置内点击1000次冷却氦按钮",
            style() { return { 'background-color': hasAchievement("a",17)?"#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "0px", height: "96px", width: "96px" } },
            unlocked() {return hasAchievement("a",17)}
        },
        //图片还在制作中!
        21: {
            name: "21",
            image: "png/成就_21.png",
            done() {return player.be.points.gte(1)},
            doneTooltip: "获得1铍",
            style() { return { 'background-color': hasAchievement("a",21)?"#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "0px", height: "96px", width: "96px" } },
            unlocked() {return hasAchievement("a",16)}
        },
        22: {
            name: "22",
            image: "png/成就_22.png",
            done() {return player.li.currentElectricity.gte(100)},
            doneTooltip: "获得100电能",
            style() { return { 'background-color': hasAchievement("a",22)?"#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "0px", height: "96px", width: "96px" } },
            unlocked() {return hasAchievement("a",16)}
        },
        23: {
            name: "23",
            image: "png/成就_23.png",
            done() {return player.li.researchPoint.gte(10)},
            doneTooltip: "获得10研究点",
            style() { return { 'background-color': hasAchievement("a",23)?"#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "0px", height: "96px", width: "96px" } },
            unlocked() {return hasAchievement("a",16)}
        },
        24: {
            name: "24",
            image: "png/成就_24.png",
            done() {return player.be.depth.gte(10)},
            doneTooltip: "到达10深度",
            style() { return { 'background-color': hasAchievement("a",24)?"#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "0px", height: "96px", width: "96px" } },
            unlocked() {return hasAchievement("a",16)}
        },
        25: {
            name: "25",
            image: "png/成就_25.png",
            done() {return player.be.prestiGems.gte(1)},
            doneTooltip: "获得1转生宝石",
            style() { return { 'background-color': hasAchievement("a",25)?"#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "0px", height: "96px", width: "96px" } },
            unlocked() {return hasAchievement("a",16)}
        },
        26: {
            name: "26",
            image: "png/成就_26.png",
            done() {return player.b.points.gte(1)},
            doneTooltip: "获得1硼",
            style() { return { 'background-color': hasAchievement("a",26)?"#77BF5F":"#BF8F8F", filter: "brightness(" + new Decimal(100) + "%)", color: "#FFFFFF",'border-radius': "0px", height: "96px", width: "96px" } },
            unlocked() {return hasAchievement("a",16)}
        },
    },
    tabFormat: ["blank","achievements",["display-text",function(){
        return "这些成就没有任何提示文本,但你可以通过图片提示来完成!<br>在完成该成就后,提示文本将给出!<br>其实,有些成就会给出奖励,但与游戏主体没有太大关系<br>此外,每一行都会有一个只会在获得后显示的隐藏成就(Tips:成就27没做)"
    }]],
},)
