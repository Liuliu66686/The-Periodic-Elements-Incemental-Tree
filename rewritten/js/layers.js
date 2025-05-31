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
        colors: [zero,zero,zero],
        weakInTion: zero,
        canHshown: false,
    }},
    tooltip(){return format(player.points,"two") + " 基本粒子"},
    color: "white",
    type: "none",
    row: "side",
    doReset(resettinglayer){
        let kept = []
        if(layers[resettinglayer].row===0){
            if(hasUpgrade("p",31)) kept.push("upgrades")
            if(hasUpgrade("p",32)) kept = kept.concat("quarkMax","points","buyables")
        }
        layerDataReset("p",kept)
    },
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
                let eff = player.p.quarkMax.max(1).pow(2)
                if(player.p.quarkMax.eq(1)) eff = two
                return eff},
            effectDisplay(){return "x" + format(this.effect())},
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return n(1000)},
            unlocked(){return hasUpgrade("p",15)||player.p.quarkMax.gt(0)||player.h.unlocked},
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
            title: "粒子色度",
            description: "基于基本粒子倍增所有色度获取",
            effect(){
                let eff = player.points.max(10).log(10).root(2)
                return eff},
            effectDisplay(){return "x" + format(this.effect())},
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return n(1e6)},
            unlocked(){return hasUpgrade("p",21)||player.h.unlocked},
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
            title: "红色自增",
            description: "红色色度获取基于自身倍增(1e25后硬上限)",
            effect(){
                let eff = player.p.colors[0].max(1).root(player.p.colors[0].max(1).log(1e25).add(1.5))
                if(hasUpgrade("p",31)) eff = eff.root(3)
                return eff},
            effectDisplay(){return "x" + format(this.effect())},
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return n(1e7)},
            unlocked(){return hasUpgrade("p",22)||player.h.unlocked},
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
            title: "分配直增",
            description: "夸克的分配数量倍增对应色度的获取",
            effect(){
                let eff = [];let rgb = ["r","g","b"]
                for(id in rgb){
                    eff.push(getBuyableAmount("p","Clr-"+rgb[id]).max(1))
                }
                return eff},
            effectDisplay(){return "x"+format(this.effect()[0])+",x"+format(this.effect()[1])+",x"+format(this.effect()[2])},
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return n(1e8)},
            unlocked(){return hasUpgrade("p",23)||player.h.unlocked},
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
            title: "色度平衡",
            description: "解锁弱力,弱力获取基于不同色度的数量和平衡(标准差的倒数)获取.",
            effect(){
                colorsAll = zero
                for(i=-1;i++;i<=2){
                    colorsAll = colorsAll.add(player.p.colors[i])
                }
                let eff = sigmaCalculation(player.p.colors).max(1).pow(-1).mul(colorsAll)
                return eff},
            effectDisplay(){return "+"+format(this.effect())+"/s"},
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return n(1e9)},
            unlocked(){return hasUpgrade("p",24)||player.h.unlocked},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        31:{
            title: "保留与延拓",
            description: "第一行重置时保留基本粒子升级.<br>升级'红色自增'的效果以立方根对所有色度生效.",
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return n(1e17)},
            unlocked(){return hasUpgrade("p",31)||player.p.quarkMax.gte(21)||player.li.unlocked},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        32:{
            title: "持续与自增",
            description: "第一行重置时保留夸克,总夸克和已分配的夸克.<br>弱力获取基于弱力倍增",
            effect(){
                let eff = player.p.weakInTion.max(10).log(10)
                return eff},
            effectDisplay(){return "x"+format(this.effect())},
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return n(1e25)},
            unlocked(){return hasUpgrade("p",31)||player.p.quarkMax.gte(21)||player.li.unlocked},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        33:{
            title: "降价与提升",
            description: "强子价格的弱力部分/1e6<br>强子第一效果更强",
            effect(){
                let eff = n(1e6)
                return eff},
            effectDisplay(){return "/"+format(this.effect())},
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return n(1e30)},
            unlocked(){return hasUpgrade("p",31)||player.p.quarkMax.gte(21)||player.li.unlocked},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        34:{
            title: "转换与自动",
            description: "水的两个效果对基本粒子和弱力获取生效<br>在自动化界面解锁自动充能和自动购买升级",
            effect(){
                let eff = Decimal.mul(layers.h.burnEffects(1),layers.h.burnEffects(2))
                return eff},
            effectDisplay(){return "x"+format(this.effect())},
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return n(1e40)},
            unlocked(){return hasUpgrade("h",13)||player.li.unlocked},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        35:{
            title: "基础降低与效果优化",
            description: "强子的价格公式中夸克需求增加 -1;弱力需求倍增 -4<br>修改强子第三效果的效果公式",
            currencyInternalName: "points",
            currencyDisplayName: "基本粒子",
            cost(){return n(5.55e55)},
            unlocked(){return hasUpgrade("h",13)||player.li.unlocked},
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
    buyables:{
        "Clr-r":{
            title(){return "分配红色色度 +1"},
            display(){return "<h3>你有 "+formatWhole(getBuyableAmount(this.layer,this.id))+" 红色夸克"},
            cost(){return one},
            effect(x){return x.mul(layers.p.colorsMult(0))},
            canAfford(){return player.p.points.gte(this.cost())},
            buy(){
                player.p.points = player.p.points.sub(this.cost())
                setBuyableAmount(this.layer,this.id,getBuyableAmount(this.layer,this.id).add(1))
            },
            unlocked(){return player.p.quarkMax.gte(1)||player.li.unlocked},
            style(){return { 'background':this.canAfford()?'red':'#bf8f8f','border-radius': "0px",height: "60px", width: "150px"}},
        },
        "Clr-g":{
            title(){return "分配绿色色度 +1"},
            display(){return "<h3>你有 "+formatWhole(getBuyableAmount(this.layer,this.id))+" 绿色夸克"},
            cost(){return one},
            effect(x){return x.mul(layers.p.colorsMult(1))},
            canAfford(){return player.p.points.gte(this.cost())},
            buy(){
                player.p.points = player.p.points.sub(this.cost())
                setBuyableAmount(this.layer,this.id,getBuyableAmount(this.layer,this.id).add(1))
            },
            unlocked(){return player.p.quarkMax.gte(1)||player.li.unlocked},
            style(){return { 'background':this.canAfford()?'green':'#bf8f8f','border-radius': "0px",height: "60px", width: "150px"}},
        },
        "Clr-b":{
            title(){return "分配蓝色色度 +1"},
            display(){return "<h3>你有 "+formatWhole(getBuyableAmount(this.layer,this.id))+" 蓝色夸克"},
            cost(){return one},
            effect(x){return x.mul(layers.p.colorsMult(2))},
            canAfford(){return player.p.points.gte(this.cost())},
            buy(){
                player.p.points = player.p.points.sub(this.cost())
                setBuyableAmount(this.layer,this.id,getBuyableAmount(this.layer,this.id).add(1))
            },
            unlocked(){return player.p.quarkMax.gte(1)||player.li.unlocked},
            style(){return { 'background':this.canAfford()?'blue':'#bf8f8f','border-radius': "0px",height: "60px", width: "150px"}},
        },
        "Clr-c":{
            title(){return "重置色度分配"},
            display(){return "重置色度分配,但同时进行一次夸克的重置<br>(色度也会在夸克重置时重置)"},
            canAfford(){return getBuyableAmount("p","Clr-r").gt(0)||getBuyableAmount("p","Clr-g").gt(0)||getBuyableAmount("p","Clr-b").gt(0)},
            buy(){
                quickResetLayers("quark")
                const rgb = ["r","g","b"]
                for(id in rgb){player.p.buyables["Clr-"+rgb[id]] = zero}
                player.p.points = player.p.quarkMax
            },
            unlocked(){return player.p.quarkMax.gte(1)||player.li.unlocked},
            style(){return { 'background':this.canAfford()?'white':'#bf8f8f','border-radius': "0px",height: "60px", width: "225px"}},
        },
        "Clr-m":{
            title(){return "平均分配夸克"},
            display(){return "将剩余夸克平均分配到各个色度<br>(只平均分配整数)"},
            canAfford(){return player.p.points.gte(3)},
            buy(){
                let num = player.p.points.div(3).floor()
                const rgb = ["r","g","b"]
                for(id in rgb){player.p.buyables["Clr-"+rgb[id]] = player.p.buyables["Clr-"+rgb[id]].add(num)}
                player.p.points = player.p.points.sub(num.mul(3))
            },
            unlocked(){return player.p.quarkMax.gte(3)||player.li.unlocked},
            style(){return { 'background':this.canAfford()?'cyan':'#bf8f8f','border-radius': "0px",height: "60px", width: "225px"}},
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
            loadingMult(){
                return 1/(hasUpgrade("he",21)?upgradeEffect("he",21).min(20).toNumber():1)
            },
            effect(){
                let eff = three
                if(hasUpgrade("p",14)) eff = eff.mul(upgradeEffect("p",14))
                if(player.p.colors[2].gt(0)) eff = eff.mul(layers.p.colorsEffect(2))
                return eff
            },
            style(){return { 'background':this.canClick()?'linear-gradient(to right,white 0%, skyblue 100%)':'#bf8f8f','border-radius': "0px",height: "120px", width: "200px"}},
            unlocked(){return hasUpgrade("p",11)||player.li.unlocked}
        },
        "Ptc-2":{
            title(){return "转化"},
            display(){return "将基本粒子转化为夸克,但重置粒子升级器以及对应升级.<br>转化后 +"+formatWhole(this.getQuark())+" 夸克<br>下一个在 "+formatWhole(this.getNext())+" 基本粒子"},
            canClick(){return this.getQuark().gte(1)},
            getQuark(){
                let num = player.points.div(this.costMult()).max(10).div(100).log(this.costBase()).sub(player.p.quarkMax).floor().max(0)
                return num
            },
            getNext(){
                let next = this.costBase().pow(this.getQuark().add(player.p.quarkMax).add(1)).mul(100).mul(this.costMult())
                return next
            },
            costMult(){
                let mult = one
                if(player.p.weakInTion.gt(0)) mult = mult.div(layers.p.colorsEffect(3))
                return mult
            },
            costBase(){
                let base = n(5)
                return base
            },
            onClick(){
                player.p.points = player.p.points.add(this.getQuark())
                player.p.quarkMax = player.p.quarkMax.add(this.getQuark())
                quickResetLayers("quark")
            },
            style(){return { 'background':this.canClick()?'linear-gradient(to right,white 12%, grey 100%)':'#bf8f8f','border-radius': "0px",height: "120px", width: "200px"}},
            unlocked(){return hasUpgrade("p",21)||player.li.unlocked}
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
                if(player.p.colors[1].gt(0)) max = max.mul(layers.p.colorsEffect(1))
                return max
            },
            fillStyle: {'background-color' : "#478EAB"},
            progress() { return this.req() },
            display(){return "粒子收集器-充能进度: "+format(player.p.filling,"two")+"/"+formatWhole(this.maxium())+"("+format(this.req().mul(100),"two")+"%)"},
            unlocked(){return hasUpgrade("p",11)},
        },
    },
    colorsMult(rgb){
        let mult = one
        if(hasUpgrade("p",22)) mult = mult.mul(upgradeEffect("p",22))
        if(hasUpgrade("p",24)) mult = mult.mul(upgradeEffect("p",24)[rgb])
        if(hasUpgrade("h",12)) mult = mult.mul(upgradeEffect("h",12))
        if(hasUpgrade("he",22)) mult = mult.mul(upgradeEffect("he",22))
        if(rgb==0){
            if(hasUpgrade("p",23)) mult = mult.mul(upgradeEffect("p",23))
        }
        if(rgb==1){
            if(hasUpgrade("p",23)&&hasUpgrade("p",31)) mult = mult.mul(upgradeEffect("p",23))
        }
        if(rgb==2){
            if(hasUpgrade("p",23)&&hasUpgrade("p",31)) mult = mult.mul(upgradeEffect("p",23))
        }
        return mult
    },
    weakInTionMult(){
        let mult = one
        if(hasUpgrade("p",25)) mult = mult.mul(upgradeEffect("p",25))
            else return zero
        mult = mult.mul(layers.p.haDron("effect")[0])
        if(hasUpgrade("p",32)) mult = mult.mul(upgradeEffect("p",32))
        if(hasUpgrade("p",34)) mult = mult.mul(upgradeEffect("p",34))
        if(hasUpgrade("h",23)) mult = mult.mul(upgradeEffect("h",23))
        if(hasUpgrade("he",13)) mult = mult.mul(upgradeEffect("he",13))
	    if(getBuyableAmount("he","He-4").gt(0)) mult = mult.mul(buyableEffect("he","He-4"))
        return mult
    },
    colorsEffect(rgb){
        let eff = one
        if(rgb==0){//红 基本粒子
            eff = player.p.colors[rgb].div(1.2).max(1).root(4).mul(eff)
        }
        if(rgb==1){//绿 充能上限
            eff = player.p.colors[rgb].max(1).root(2).mul(eff)
        }
        if(rgb==2){//蓝 充能效果
            eff = player.p.colors[rgb].max(1).root(2).mul(eff)
        }
        if(rgb==3){//弱力 ()
            eff = player.p.weakInTion.max(1).root(2).mul(eff)
        }
        return eff
    },
    haDron(things){ // 强子
        if(things=="quarkM"){
            num = three
            if(hasUpgrade("p",35)) num = num.sub(1)
        }
        if(things=="weakB"){
            num0 = ten
            num1 = n(1e6)
            if(hasUpgrade("p",33)) num1 = num1.div(upgradeEffect("p",33))
            if(hasUpgrade("p",35)) num0 = num0.sub(4)
            num = [num0,num1]
        }
        if(things=="num"){
            if(player.p.quarkMax.gte(21)) num = player.p.quarkMax.div(layers.p.haDron("quarkM")).min(player.p.weakInTion.div(layers.p.haDron("weakB")[1]).max(1).log(layers.p.haDron("weakB")[0])).mul(layers.p.haDron("mult"))
            else num = zero
            num = num.floor()
        }
        if(things=="mult"){
            num = one
        }
        if(things=="nextQ"){
            num = layers.p.haDron("num").add(1).div(layers.p.haDron("mult")).mul(layers.p.haDron("quarkM"))
        }
        if(things=="nextW"){
            num = layers.p.haDron("weakB")[0].pow(layers.p.haDron("num").add(1).div(layers.p.haDron("mult"))).mul(layers.p.haDron("weakB")[1])
        }
        if(things=="effect"){
            let unlHadron = player.p.quarkMax.gte(21)
            if(layers.p.haDron("num").gte(layers.p.haDron("effUnlNeed")[0])&&unlHadron){ // 倍增弱力,基本粒子获取
                eff1 = two.add(hasUpgrade("p",33)?0.3:0).pow(layers.p.haDron("num")).max(1)
                eff1 = powsoftcap(eff1,n(4294967296),two)
                eff1 = powsoftcap(eff1,n(1e100),five)
                eff1 = logsoftcap(eff1,n(1e308),n(1.01))
            }else eff1 = one
            if(layers.p.haDron("num").gte(layers.p.haDron("effUnlNeed")[1])&&unlHadron){ // 延迟氢升级软上限
                eff2 = layers.p.haDron("num").sub(6).max(1).pow(3)
            }else eff2 = one
            if(layers.p.haDron("num").gte(layers.p.haDron("effUnlNeed")[2])&&unlHadron){ // 倍增氢,氢能
                eff3 = layers.p.haDron("num").add(1).max(1).root(2)
                if(hasUpgrade("p",35)){
                    eff3 = n(1.1).pow(layers.p.haDron("num").max(0))
                    eff3 = powsoftcap(eff3,n(1e10),ten)
                    eff3 = logsoftcap(eff3,n(1e100),n(1.01))
                }
            }else eff3 = one
            if(layers.p.haDron("num").gte(layers.p.haDron("effUnlNeed")[3])&&unlHadron){ // 氦-3额外等级
                eff4 = layers.p.haDron("num").sub(60).root(two.root(3))
                eff4 = powsoftcap(eff4,n(27),three).floor()
            }else eff4 = zero
            if(layers.p.haDron("num").gte(layers.p.haDron("effUnlNeed")[4])&&unlHadron){ // 倍增氢气
                eff5 = layers.p.haDron("num").sub(120).max(1)
            }else eff5 = one
            num = [eff1,eff2,eff3,eff4,eff5,0]
        }
        if(things=="effUnlNeed"){
            num = [1,8,27,64,125,Infinity]
        }
        if(things=="effText"){
            text1 = "强子第一效果: 倍增弱力和基本粒子获取 x" + format(layers.p.haDron("effect")[0])
            text2 = "强子第二效果: 延迟两个氢升级的软上限 x" + format(layers.p.haDron("effect")[1])
            text3 = "强子第三效果: 倍增氢和氢能获取 x" + format(layers.p.haDron("effect")[2])
            text4 = "强子第四效果: 给予 氦-3 额外等级 +" + format(layers.p.haDron("effect")[3])
            text5 = "强子第五效果: 倍增氢气获取 x" + format(layers.p.haDron("effect")[4])
            if(layers.p.haDron("effect")[3].gte(27)) text4 += " (受软上限限制)"
            num = [text1,text2,text3,text4,text5,0,0,0]
        }
        return num
    },
    update(diff){
        if(player.p.loading<(1-diff))player.p.loading += diff;else player.p.loading = 1
        if(player.p.filling.gt(0)) player.p.filling = player.p.filling.sub(layers.p.bars["filling"].maxium().mul(0.1*diff)).max(0)
        const ID = [0,1,2];const rgb = ["r","g","b"]
        for(id in ID){
            player.p.colors[ID[id]] = player.p.colors[ID[id]].add(buyableEffect("p","Clr-"+rgb[ID[id]]).mul(diff))
        }
        player.p.weakInTion = player.p.weakInTion.add(layers.p.weakInTionMult().mul(diff))
        if(player.p.filling.gt(1e4)) player.p.canHshown = true
    },
    microtabs:{
        quarks:{
            colors:{
                name: "色度",
                content:[
                    ["row",[["buyable","Clr-r"],["buyable","Clr-g"],["buyable","Clr-b"]]],
                    ["row",[["buyable","Clr-c"],["buyable","Clr-m"]]],
                    ["blank",["","5px"]],
                    ["display-text",function(){return "<text style='color:red'>你有 "+formatWhole(getBuyableAmount("p","Clr-r"))+" 红色夸克,生产红色色度 +"+format(buyableEffect("p","Clr-r"))+"/s"}],
                    ["display-text",function(){return "<text style='color:green'>你有 "+formatWhole(getBuyableAmount("p","Clr-g"))+" 绿色夸克,生产绿色色度 +"+format(buyableEffect("p","Clr-g"))+"/s"}],
                    ["display-text",function(){return "<text style='color:blue'>你有 "+formatWhole(getBuyableAmount("p","Clr-b"))+" 蓝色夸克,生产蓝色色度 +"+format(buyableEffect("p","Clr-b"))+"/s"}],
                    ["blank",["","5px"]],
                    ["display-text",function(){return "<text style='color:red'>你有 "+format(player.p.colors[0])+" 红色色度,倍增基本粒子获取 x"+format(layers.p.colorsEffect(0))}],
                    ["display-text",function(){return "<text style='color:green'>你有 "+format(player.p.colors[1])+" 绿色色度,倍增粒子收集器的充能上限 x"+format(layers.p.colorsEffect(1))}],
                    ["display-text",function(){return "<text style='color:blue'>你有 "+format(player.p.colors[2])+" 蓝色色度,倍增粒子收集器的充能效果 x"+format(layers.p.colorsEffect(2))}],
                    ["blank",["","5px"]],
                    ["display-text",function(){if(hasUpgrade("p",25)) return "你有 "+format(player.p.weakInTion)+" 弱力(+"+format(layers.p.weakInTionMult())+"/s),降低夸克价格 /"+format(layers.p.colorsEffect(3))}],
                    ["blank",["","5px"]],
                    ["display-text",function(){if(hasUpgrade("p",25)&&player.p.quarkMax.lt(21)) return quickColor("到达 21 总夸克解锁下一个界面和新的升级.","grey")}],
                    ["display-text",function(){if(hasUpgrade("p",25)&&player.p.quarkMax.lt(21)) return quickColor("小提示:你可以不购买'红色自增'","#111111")}],
                ],
                unlocked(){return player.p.quarkMax.gt(0)||player.li.unlocked}
            },
            combine:{
                name: "结合",
                content:[
                    ["display-text",function(){return "你总共有 "+format(player.p.quarkMax)+" 夸克, 你有 "+formatWhole(player.p.weakInTion)+" 弱力"}],
                    ["display-text",function(){return "你的夸克和弱力结合成了 "+formatWhole(layers.p.haDron("num"))+" 强子(下一个在 "+formatWhole(layers.p.haDron("nextQ"))+" 总夸克, "+format(layers.p.haDron("nextW"))+" 弱力)"}],
                    ["display-text",function(){
                        texts = "";chinese = ["一","二","三","四","五","六","七"]
                        for(i=0;i<10;i++){
                            if(layers.p.haDron("num").gte(layers.p.haDron("effUnlNeed")[i]))texts += (layers.p.haDron("effText")[i] + "<br>")
                            else {texts += quickColor("到达 " + layers.p.haDron("effUnlNeed")[i] + " 强子 解锁强子第"+chinese[i]+"效果","grey")
                                break
                            }
                        }
                        return texts}],
                ],
                unlocked(){return player.p.quarkMax.gte(21)||player.li.unlocked}
            },
        }
    },
    tabFormat:{
        homepage:{
            name: "主页",
            content:[
                ["display-text",function(){return "你有 <h2 style='color:white;text-shadow:0px 0px 10px;'>"+format(player.points)+"</h2> 基本粒子"}],
                "blank",
                ["row",[["upgrade",11],["upgrade",12],["upgrade",13],["upgrade",14],["upgrade",15]]],
                "blank",
                ["clickable",'Ptc-1'],["blank",["","5px"]],["bar","filling"],
                ["display-text",function(){if(hasUpgrade("p",11)) return "粒子收集器每秒会将上限的 10% 充能进度转化为基本粒子"}],"blank",
                ["row",[["upgrade",21],["upgrade",22],["upgrade",23],["upgrade",24],["upgrade",25]]],
                ["row",[["upgrade",31],["upgrade",32],["upgrade",33],["upgrade",34],["upgrade",35]]],
            ],
        },
        quarks:{
            name: "夸克",
            content:[
                ["display-text",function(){return "你有 <h2 style='color:white;text-shadow:0px 0px 10px;'>"+format(player.points)+"</h2> 基本粒子"}],
                "blank",["clickable","Ptc-2"],["blank",["","5px"]],["display-text",function(){return "你有 <h2 style='text-shadow:0px 0px 10px;'>"+formatWhole(player.p.points)+"</h2>/"+formatWhole(player.p.quarkMax)+" 夸克"}],
                ["blank",["","10px"]],["microtabs","quarks"]
            ],
            unlocked(){return hasUpgrade("p",21)||player.li.unlocked}
        },
    },
})
addLayer("h", {
    name: "h",
    symbol: "H",
    position: 0,
    startData() { return {
        unlocked: false,
        points: zero,
        energy: zero,
        hot: zero,
        water: zero,
        filling: [zero,zero],
        hydrogen: zero,
        loading: 0,
        balloons: zero,
    }},
    color: "cyan",
    requires: new Decimal(1e10),
    resource: "氢",
    baseResource: "基本粒子",
    baseAmount() {return player.points},
    type: "normal",
    exponent(){
        let exp = 0.5
        if(hasUpgrade("h",13)) exp -= upgradeEffect("h",13)
        if(hasUpgrade("h",22)) exp += upgradeEffect("h",22)
        if(hasUpgrade("he",11)) exp += upgradeEffect("he",11).toNumber()
        return n(exp).min(0.5)
    },
    gainMult() {
        mult = one
        mult = mult.mul(layers.h.burnEffects(0))
        mult = mult.mul(layers.h.hydrogenEffect())
        mult = mult.mul(layers.p.haDron("effect")[2])
        if(hasMilestone("he",2)) mult = mult.mul(milestoneEffect("he",2)[0])
        if(player.he.upTimes[1].gt(0)) mult = mult.mul(clickableEffect("he","Blm-bh")[0])
	    if(hasMilestone("li",0)) mult = mult.mul(4)
        return mult
    },
    gainExp(){
        exp = one
        return exp
    },
    row: 0,
    doReset(resettinglayer){
        if(layers[resettinglayer].row>layers[this.layer].row){
            let kept = []
            layerDataReset("h",kept)
        }
    },
    layerShown(){return player.p.canHshown||player.h.unlocked},
    hotkeys: [
        {key: "r", description: "R: 对粒子收集器进行充能", onPress(){clickClickable("p","Ptc-1")}},
        {key: "q", description: "Q: 进行夸克重置", onPress(){clickClickable("p","Ptc-2")}},
        {key: "h", description: "H: 进行氢重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades:{
        11:{
            title: "氢-粒子",
            description: "基本粒子获取基于氢倍增.",
            effect(){
                let eff = player.h.points.max(1).add(1).pow(2)
                eff = eff.div(layers.p.haDron("effect")[1])
                eff = powsoftcap(eff,n(10),two)
                eff = powsoftcap(eff,n(1700),ten)
                eff = powsoftcap(eff,n(1e20),n(30))
                eff = logsoftcap(eff,n(1.79e308),n(1.001))
                eff = eff.mul(layers.p.haDron("effect")[1])
                return eff},
            effectDisplay(){return "x" + format(this.effect())},
            cost(){return zero},
            unlocked(){return player.h.unlocked},
            style() {
                bdcolor = 'yellow';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        12:{
            title: "氢-色度",
            description: "各个色度获取基于氢倍增.",
            effect(){
                let eff = player.h.points.max(1).add(1).pow(2)
                eff = eff.div(layers.p.haDron("effect")[1])
                eff = powsoftcap(eff,n(100),two)
                eff = powsoftcap(eff,n(5400),ten)
                eff = powsoftcap(eff,n(1e20),n(30))
                eff = logsoftcap(eff,n(1.79e308),n(1.001))
                eff = eff.mul(layers.p.haDron("effect")[1])
                return eff
            },
            effectDisplay(){return "x" + format(this.effect())},
            cost(){return two},
            unlocked(){return player.h.unlocked},
            style() {
                bdcolor = 'yellow';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        13:{
            title: "遥远的目标",
            description: "清空已有的氢且降低氢基础获取公式中的指数,在氢层级下解锁新的页面",
            effect(){
                let eff = 0.4
                return eff
            },
            effectDisplay(){return "-^" + format(this.effect())},
            cost(){return n(5e12)},
            onPurchase(){doReset(this.layer);player.h.points = zero},
            unlocked(){return (player.h.unlocked&&hasUpgrade("p",33)&&player.p.quarkMax.gte(63))||player.li.unlocked},
            style() {
                bdcolor = 'yellow';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        21:{
            title: "氢能-粒子",
            description: "基本粒子获取基于氢能倍增.",
            effect(){
                let eff = player.h.energy.max(1).add(1).root(1.4)
                eff = powsoftcap(eff,n(1e10),three)
                eff = powsoftcap(eff,n(1e100),ten)
                eff = logsoftcap(eff,n(1.79e308),n(1.001))
                return eff},
            effectDisplay(){return "x" + format(this.effect())},
            cost(){return n(2e7)},
            unlocked(){return hasUpgrade("h",13)||player.li.unlocked},
            style() {
                bdcolor = 'yellow';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        22:{
            title: "指数回升I",
            description: "氢基础获取公式中指数+0.1",
            effect(){
                let eff = 0.1
                return eff
            },
            effectDisplay(){return "+^" + format(this.effect())},
            cost(){return n(111111111111)},
            unlocked(){return hasUpgrade("h",13)||player.li.unlocked},
            style() {
                bdcolor = 'yellow';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        23:{
            title: "氢能-弱力",
            description: "氢能倍增氢获取的效果以降低的效果对弱力生效",
            effect(){
                let eff = layers.h.burnEffects(0).root(2)
                return eff
            },
            effectDisplay(){return "x" + format(this.effect())},
            cost(){return n(1e20)},
            unlocked(){return hasUpgrade("h",13)||player.li.unlocked},
            style() {
                bdcolor = 'yellow';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
    },
    clickables:{
        "Cbt-b":{
            title(){return "燃烧!"},
            display(){return "点燃内燃机中的一定量氢气,释放氢能,生成水<br>燃烧后 +"+format(this.waterBase())+" 水, +"+format(this.energyGain())+" 氢能, +"+format(this.hotGain())+" 热量<br>消耗 "+format(this.waterBase().mul(2))+" 氢气和 "+format(this.waterBase().mul(5))+" 空气"},
            canClick(){return this.waterBase().gte(1)&&player.h.hot.lt(player.h.points)},
            waterBase(){ //min{氢/3,气/15}
                let base = player.h.filling[0].div(3).min(player.h.filling[1].div(15)).floor()
                return base
            },
            energyMult(){
                let mult = n(0.1)
                return mult
            },
            energyGain(){
                let gain = this.waterBase().mul(this.energyMult())
                gain = gain.mul(layers.h.burnEffects(1))
                gain = gain.mul(layers.p.haDron("effect")[2])
                gain = powsoftcap(gain,n(1e25),four)
                if(hasUpgrade("he",33)) gain = gain.mul(upgradeEffect("he",33))
                if(hasMilestone("he",2)) gain = gain.mul(milestoneEffect("he",2)[1])
                if(player.he.upTimes[0].gt(0)) gain = gain.mul(clickableEffect("he","Blm-bhe")[2])
                if(player.he.upTimes[1].gt(0)) gain = gain.mul(clickableEffect("he","Blm-bh")[2])
                return gain
            },
            hotMult(){
                let mult = one.div(sigmaCalculation([player.h.filling[0].mul(5/2),player.h.filling[1]]).pow(-1.5).min(1).max(1/10))
                return mult
            },
            hotGain(){
                let gain = this.waterBase().mul(one.sub(this.energyMult()).max(0))
                gain = gain.mul(this.hotMult())
                return gain
            },
            onClick(){
                player.h.hot = player.h.hot.add(this.hotGain())
                player.h.energy = player.h.energy.add(this.energyGain())
                player.h.water = player.h.water.add(this.waterBase())
                player.h.filling = [player.h.filling[0].sub(this.waterBase().mul(2)),player.h.filling[1].sub(this.waterBase().mul(5))]
            },
            style(){return { 'background':this.canClick()?'linear-gradient(to right,yellow 12%, red 100%)':'#bf8f8f','border-radius': "0px",height: "60px", width: "400px"}},
            unlocked(){return hasUpgrade("h",13)||player.li.unlocked}
        },
        "Cbt-h":{
            title(){return "通入氢气"},
            display(){return "向内燃机内通入10%的现有氢<br>通入后 -"+formatWhole(this.fillH())+" 氢"},
            canClick(){return player.h.points.gte(10)},
            fillH(){
                return player.h.points.div(10).floor()
            },
            onClick(){
                player.h.filling[0] = player.h.filling[0].add(this.fillH())
                player.h.points = player.h.points.sub(this.fillH())
            },
            style(){return { 'background':this.canClick()?'linear-gradient(to left,white 12%, cyan 100%)':'#bf8f8f','border-radius': "0px",height: "60px", width: "160px"}},
            unlocked(){return hasUpgrade("h",13)||player.li.unlocked}
        },
        "Cbt-a":{
            title(){return "通入空气"},
            display(){return "向内燃机内通入其中氢气量的50%空气"},
            canClick(){return true},
            onClick(){
                player.h.filling[1] = player.h.filling[1].add(player.h.filling[0].div(2))
            },
            style(){return { 'background':this.canClick()?'linear-gradient(to right,white 12%, grey 100%)':'#bf8f8f','border-radius': "0px",height: "60px", width: "160px"}},
            unlocked(){return hasUpgrade("h",13)||player.li.unlocked}
        },
        "Cbt-e":{
            title(){return "清空内燃机"},
            canClick(){return true},
            onClick(){
                player.h.filling = [zero,zero]
            },
            style(){return { 'background':this.canClick()?'white':'#bf8f8f','border-radius': "0px",height: "60px", width: "80px"}},
            unlocked(){return hasUpgrade("h",13)||player.li.unlocked}
        },
    },
    burnEffects(id){
        let eff = zero
        if(id===0){ //氢能倍增氢
            eff = player.h.energy.mul(10).max(1).root(2)
            eff = powsoftcap(eff,n(1e5),two)
            eff = powsoftcap(eff,n(1e30),two)
            eff = logsoftcap(eff,n(1.79e308),n(1.001))
        }
        if(id===1){ //水倍增氢能
            eff = player.h.water.max(2).log(2)
        }
        if(id===2){ //水加速热量散失
            eff = player.h.water.max(10).log(10).root(3)
        }
        return eff
    },
    hydrogenEffect(){
        let eff = player.h.hydrogen.max(0).add(1).root(2)
        eff = powsoftcap(eff,n(1e5),two)
        eff = powsoftcap(eff,n(1e20),four)
        eff = logsoftcap(eff,n("ee4"),n(1.01))
        return eff
    },
    update(diff){
        if(player.h.hot.gt(0.01)) player.h.hot = player.h.hot.mul(Decimal.pow(0.98,layers.h.burnEffects(2).mul(diff)))
        else player.h.hot = zero
    },
    tabFormat:{
        homepage:{
            name: "主页",
            content:[
                "main-display","prestige-button","resource-display",
                ["row",[["upgrade",11],["upgrade",12],["upgrade",13]]],
                ["row",[["upgrade",21],["upgrade",22],["upgrade",23],["upgrade",24],["upgrade",25]]],
            ],
            buttonStyle: {
                "border-color": "cyan"
            },
        },
        combustion:{
            name: "燃烧",
            content:[
                "main-display","prestige-button","resource-display",
                ["display-text",function(){
                    return "你的内燃机中有 "+formatWhole(player.h.filling[0])+" 氢气和 "+format(player.h.filling[1])+" 空气, 比值约为 " + format(player.h.filling[0].div(player.h.filling[1]),3)
                }],["blank",["","5px"]],
                ["column",[["row",[["clickable","Cbt-b"]]],["row",[["clickable","Cbt-h"],["clickable","Cbt-e"],["clickable","Cbt-a"]]]]],
                //["display-image","png/howToMakeSomeWater.png"], 水水水
                ['blank',["","5px"]],
                ["display-text",function(){
                    return "你有 "+format(player.h.energy)+" 氢能, 倍增氢获取 x"+format(layers.h.burnEffects(0))+"<br>你有 "+format(player.h.water)+" 水, 倍增氢能获取 x"+format(layers.h.burnEffects(1))+", 倍增热量流失速度 x"+format(layers.h.burnEffects(2))+"<br>你有 "+format(player.h.hot)+" 热量,热量会随时间流失, 但当热量超过氢时,内燃机会爆炸(不能使用)!"
                }],
                ["display-text",function(){if(tmp.h.clickables["Cbt-b"].energyGain.gt(1e25)) return quickColor("*由于你的氢能获取超过了1e25, 氢能获取受到软上限限制!","red")}]
            ],
            buttonStyle: {
                "border-color": "red"
            },
            unlocked(){return hasUpgrade("h",13)||player.li.unlocked},
        },
    },
})
addLayer("he", {
    name: "he",
    symbol: "He",
    position: 1,
    branches: ["h"],
    startData() { return {
        unlocked: false,
        points: zero,
        helium: zero,
        balloons: zero,
        upTimes: [zero,zero],
        boomedNum: [zero,zero],
    }},
    color: "#EEEEEE",
    requires: new Decimal(5e62),
    resource: "氦",
    baseResource: "基本粒子",
    baseAmount() {return player.points},
    type: "static",
    exponent: 1,
    gainMult() {
        mult = one
        if(player.he.helium.gte(1)) mult = mult.div(layers.he.heliumEffect())
        if(hasMilestone("he",0)) mult = mult.div(milestoneEffect("he",0)[0])
        if(player.he.upTimes[0].gt(0)) mult = mult.div(clickableEffect("he","Blm-bhe")[1])
	    if(hasMilestone("li",0)) mult = mult.div(16)
        return mult
    },
    gainExp(){
        exp = one
        return exp
    },
    row: 0,
    doReset(resettinglayer){
        if(layers[resettinglayer].row>layers[this.layer].row){
            let kept = []
            layerDataReset("he",kept)
        }
    },
    layerShown(){return player.h.energy.gt(1e20)||player.he.unlocked},
    canBuyMax(){return hasUpgrade("he",23)},
    hotkeys: [
        {key: "v", description: "V: 向内燃机内填充氢气和空气", onPress(){clickClickable("h","Cbt-h");clickClickable("h","Cbt-a")}},
        {key: "b", description: "B: 进行燃烧", onPress(){clickClickable("h","Cbt-b")}},
        {key: "j", description: "J: 进行氦重置", onPress(){if(canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades:{
        11:{
            title: "指数回升II",
            description: "氢基础获取公式中指数基于氦增加, 上限在氢的获取指数回归正常(+^0.3)",
            effect(){
                let eff = player.he.points.add(2).max(2).log(2).sub(1).div(10).min(0.3)
                return eff},
            effectDisplay(){return "+^" + format(this.effect())},
            cost(){return one},
            unlocked(){return player.he.unlocked},
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
            title: "氦-3",
            description: "解锁一个可购买,加成基本粒子获取",
            cost(){return n(16)},
            unlocked(){return player.he.unlocked},
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
            title: "氦-3 弱力",
            description: "氦-3 的效果也对弱力生效,但在1e30后额外受到一个软上限",
            effect(){
                let eff = buyableEffect("he","He-3")
                eff = powsoftcap(eff,n(1e30),two)
                return eff},
            effectDisplay(){return "x" + format(this.effect())},
            cost(){return n(36)},
            unlocked(){return player.he.unlocked},
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
            title: "氦-4",
            description: "解锁一个可购买,加成弱力获取",
            cost(){return n(175)},
            unlocked(){return player.he.unlocked},
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
            title: "充能加速器",
            description: "基于氦降低充能冷却时间",
            effect(){
                let eff = player.he.points.add(1).max(1).root(2)
                return eff},
            effectDisplay(){return "/" + format(this.effect())},
            cost(){return n(20)},
            unlocked(){return hasUpgrade("he",12)||player.li.unlocked},
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
            title: "氦-色度",
            description: "各个色度获取基于氦倍增",
            effect(){
                let eff = player.he.points.add(1)
                return eff},
            effectDisplay(){return "x" + format(this.effect())},
            cost(){return n(40)},
            unlocked(){return hasUpgrade("he",12)||player.li.unlocked},
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
            title: "最大氦获取",
            description: "每次重置基于基本粒子获取低于现有基本粒子对应的最大氦数量",
            cost(){return n(80)},
            unlocked(){return hasUpgrade("he",12)||player.li.unlocked},
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
            title: "爆炸数量加成",
            description: "爆炸气球的爆炸平均值现在可以加成爆炸效果基础.(爆炸平均值基于自身和爆炸的气球数)",
            effect(){
                let eff = []
                for(id in [0,1]){
                    eff.push(player.he.boomedNum[id].max(0).add(1).root(2))
                }
                return eff
            },
            cost(){return n(400)},
            effectDisplay(){return "氦x"+format(this.effect()[0])+",氢x"+format(this.effect()[1])},
            unlocked(){return hasMilestone("he",3)||player.li.unlocked},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        31:{
            title: "气球之旅",
            description: "在氦层级下解锁另一个界面,可以用气体填充气球",
            cost(){return n(90)},
            unlocked(){return hasUpgrade("he",21)||player.li.unlocked},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        32:{
            title: "气球提升",
            description: "氦气球倍增氦气获取",
            effect(){
                let eff = player.he.balloons.add(1).max(1).pow(2)
                return eff},
            effectDisplay(){return "x" + format(this.effect())},
            currencyLayer: "he",
            currencyInternalName: "balloons",
            currencyDisplayName: "氦气球",
            cost(){return n(8)},
            unlocked(){return hasUpgrade("he",31)||player.li.unlocked},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        33:{
            title: "气球氢能",
            description: "氦气球倍增氢能获取(软上限后)",
            effect(){
                let eff = player.he.balloons.add(1).max(1).pow(3)
                return eff},
            effectDisplay(){return "x" + format(this.effect())},
            currencyLayer: "he",
            currencyInternalName: "balloons",
            currencyDisplayName: "氦气球",
            cost(){return n(16)},
            unlocked(){return hasUpgrade("he",31)||player.li.unlocked},
            style() {
                bdcolor = '#77bf5f';bgcolor = layers[this.layer].color;bdr = '10px';tcolor = "black";bscolor = layers[this.layer].color
                if(!hasUpgrade(this.layer,this.id)&&!canAffordUpgrade(this.layer,this.id)){return ''}
                else if(!hasUpgrade(this.layer,this.id)&&canAffordUpgrade(this.layer,this.id)){
                    bdcolor = '';bdr = '20px'
                }
                return {'background-color':bgcolor, 'color':tcolor, 'border-color':bdcolor, 'height':'120px', 'width':'120px','border-radius': bdr}
            },
        },
        34:{
            title: "爆炸时间加成",
            description: "爆炸气球的效果持续时间现在也可以加成爆炸效果基础.",
            effect(){
                let eff = []
                for(id in [0,1]){
                    eff.push(player.he.upTimes[id].max(0).add(1).root(2))
                }
                return eff
            },
            effectDisplay(){return "氦x"+format(this.effect()[0])+",氢x"+format(this.effect()[1])},
            currencyLayer: "he",
            currencyInternalName: "balloons",
            currencyDisplayName: "氦气球",
            cost(){return n(43)},
            unlocked(){return hasMilestone("he",3)||player.li.unlocked},
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
    milestones:{
        0:{
            requirementDescription: "1 氦气球",
            effectDescription(){return "基于氦气球降低氦价格和倍增基本粒子获取<br>当前: /"+format(this.effect()[0])+",x"+format(this.effect()[1])},
            effect(){
                eff1 = two.pow(player.he.balloons.max(0)) //降低氦价格
                eff2 = player.he.balloons.max(0).add(1).pow(2) //倍增基本粒子
                return [eff1,eff2]
            },
            done(){return player.he.balloons.gte(1)}
        },
        1:{
            requirementDescription: "200氦",
            effectDescription(){return "解锁氢能转化氢气,氢气填充气球即解锁氢气球."},
            done(){return player.he.points.gte(200)}
        },
        2:{
            requirementDescription: "1 氢气球",
            effectDescription(){return "基于氢气球倍增氢,氢能(软上限后),氢气获取<br>当前: x"+format(this.effect()[0])+",x"+format(this.effect()[1])+",x"+format(this.effect()[2])},
            effect(){
                eff1 = five.pow(player.h.balloons.max(0))
                eff2 = two.pow(player.h.balloons.max(0))
                eff3 = player.h.balloons.max(0).add(1).pow(two.root(2))
                return [eff1,eff2,eff3]
            },
            done(){return player.h.balloons.gte(1)}
        },
        3:{
            requirementDescription: "8 氢气球",
            effectDescription(){return "解锁爆炸气球,但需要注意,你暂时只能同时激活其中一种气球的爆炸<br>注:爆炸氢气球需要拥有10个氢气球才能激活"},
            done(){return player.h.balloons.gte(8)}
        },
        4:{
            requirementDescription: "47 氦气球 & 22 氢气球",
            effectDescription(){return "现在可以同时激活两种爆炸气球"},
            done(){return player.he.balloons.gte(47)&&player.h.balloons.gte(22)}
        },
    },
    clickables:{
        "Blm-hl":{
            title(){return "将氦转化为氦气"},
            display(){return "将现有的50%氦转化为氦气,氦气获取基于当前氦的数量计算<br>转化后获取 "+format(this.heliumGain())+" 氦气"},
            canClick(){return hasUpgrade("he",31)&&this.heliumGain().gte(1)},
            onClick(){
                player.he.helium = player.he.helium.add(this.heliumGain())
                player.he.points = player.he.points.div(2).add(0.75).floor() //奇葩操作大赏
            },
            heliumBase(){
                let powbase = two
                let startbase = n(85)
                return [powbase,startbase]
            },
            heliumGain(){
                let gain = this.heliumBase()[0].pow(player.he.points.sub(this.heliumBase()[1]))
                gain = powsoftcap(gain,n(1e6),three)
                if(hasUpgrade("he",32)) gain = gain.mul(upgradeEffect("he",32))
                if(player.he.upTimes[1].gt(0)) gain = gain.mul(clickableEffect("he","Blm-bh")[1])
                return gain
            }, 
            style(){return { 'background':this.canClick()?'linear-gradient(to right,white 12%, silver 100%)':'#bf8f8f','border-radius': "0px",height: "60px", width: "300px"}},
            unlocked(){return hasUpgrade("he",31)||player.li.unlocked}
        },
        "Blm-hg":{
            title(){return "将氢能转化为氢气"},
            display(){return "将现有的50%氢能转化为氢气,其获取基于当前氢能的数量计算<br>转化后获取 "+format(this.hydrogenGain())+" 氢气"},
            canClick(){return hasMilestone("he",1)&&this.hydrogenGain().gte(1)},
            onClick(){
                player.h.hydrogen = player.h.hydrogen.add(this.hydrogenGain())
                player.h.energy = player.h.energy.div(2)
            },
            hydrogenGain(){
                gainbase = two
                gain = player.h.energy.div(1e40).root(gainbase)
                gain = gain.mul(layers.p.haDron("effect")[4])
                if(hasMilestone("he",2)) gain = gain.mul(milestoneEffect("he",2)[2])
                if(player.he.upTimes[0].gt(0)) gain = gain.mul(clickableEffect("he","Blm-bhe")[2])
                if(player.he.upTimes[1].gt(0)) gain = gain.mul(clickableEffect("he","Blm-bh")[2])
                return gain
            },
            style(){return { 'background':this.canClick()?'linear-gradient(to right,skyblue 12%, cyan 100%)':'#bf8f8f','border-radius': "0px",height: "60px", width: "300px"}},
            unlocked(){return hasMilestone("he",1)||player.li.unlocked}
        },
        "Blm-he":{
            title(){return "将氦气充入气球"},
            display(){return "将现有的所有氦气转化为氦气球,充气后获得 "+formatWhole(this.getGain().sub(player.he.balloons).max(0))+" 氦气球<br>下一个氦气球在 "+format(this.getNext())+" 氦气"},
            canClick(){return hasUpgrade("he",31)&&this.getGain().gt(player.he.balloons)},
            onClick(){
                player.he.balloons = this.getGain()
                player.he.helium = zero
            },
            getBase(){
                return ten
            },
            getGain(){
                let gain = player.he.helium.max(this.getBase()).log(this.getBase()).sub(1).floor()
                return gain
            },
            getNext(){
                let next = this.getGain().max(player.he.balloons).add(2)
                next = this.getBase().pow(next)
                return next
            },
            style(){return { 'background':this.canClick()?'linear-gradient(to left,white 12%, silver 100%)':'#bf8f8f','border-radius': "0px",height: "60px", width: "300px"}},
            unlocked(){return hasUpgrade("he",31)||player.li.unlocked}
        },
        "Blm-h":{
            title(){return "将氢气充入气球"},
            display(){return "将现有的所有氢气转化为氢气球,充气后获得 "+formatWhole(this.getGain().sub(player.h.balloons).max(0))+" 氦气球<br>下一个氢气球在 "+format(this.getNext())+" 氢气"},
            canClick(){return hasMilestone("he",1)&&this.getGain().gt(player.h.balloons)},
            onClick(){
                player.h.balloons = this.getGain()
                player.h.hydrogen = zero
            },
            getBase(){
                return ten
            },
            getGain(){
                let gain = player.h.hydrogen.max(this.getBase()).log(this.getBase()).sub(1).floor()
                return gain
            },
            getNext(){
                let next = this.getGain().max(player.h.balloons).add(2)
                next = this.getBase().pow(next)
                return next
            },
            style(){return { 'background':this.canClick()?'linear-gradient(to left,skyblue 12%, cyan 100%)':'#bf8f8f','border-radius': "0px",height: "60px", width: "300px"}},
            unlocked(){return hasMilestone("he",1)||player.li.unlocked}
        },
        "Blm-bhe":{
            title(){return "爆炸氦气球"},
            display(){return "使你拥有的 50%(向下取整) 的氦气球爆炸,以获取时效性加成.<br>当前效果: 基本粒子 x"+format(this.effect()[0])+", 氦价格 /"+format(this.effect()[1])+", 氢能和氢气 x"+format(this.effect()[2])+"<br>剩余时间: "+formatTime(player.he.upTimes[0])+", 爆炸后增加时间: +"+formatTime(this.getTime())+"<br>爆炸平均值: "+format(player.he.boomedNum[0])},
            canClick(){return hasMilestone("he",3)&&player.he.balloons.gte(2)},
            onClick(){
                if(!hasMilestone("he",4)) player.he.upTimes[1] = zero
                player.he.upTimes[0] = player.he.upTimes[0].add(this.getTime()).min(300)
                player.he.boomedNum[0] = player.he.boomedNum[0].add(this.boomedNum()).div(2)
                player.he.balloons = player.he.balloons.sub(this.boomedNum())
            },
            getTime(){
                let t = this.boomedNum()
                return t
            },
            boomedNum(){
                return player.he.balloons.div(2).floor()
            },
            effect(){
                if(player.he.upTimes[0].eq(0)) return [one,one,one]
                effbase = one
                if(hasUpgrade("he",24)) effbase = effbase.mul(upgradeEffect("he",24)[0])
                if(hasUpgrade("he",34)) effbase = effbase.mul(upgradeEffect("he",34)[0])
                eff0 = effbase.mul(10).pow(2) //基本粒子
                eff1 = effbase.mul(20) //降低氦价格
                eff2 = effbase.mul(10) //倍增氢能和氢气
                return [eff0,eff1,eff2]
            },
            style(){return { 'background':this.canClick()?'linear-gradient(to right,white 12%, silver 100%)':'#bf8f8f','border-radius': "0px",height: "90px", width: "300px"}},
            unlocked(){return hasMilestone("he",3)||player.li.unlocked}
        },
        "Blm-bh":{
            title(){return "爆炸氢气球"},
            display(){return "使你拥有的 50%(向下取整) 的氢气球爆炸,以获取时效性加成.<br>当前效果: 氢 x"+format(this.effect()[0])+", 氦气 x"+format(this.effect()[1])+", 氢能和氢气 x"+format(this.effect()[2])+"<br>剩余时间: "+formatTime(player.he.upTimes[1])+", 爆炸后增加时间: +"+formatTime(this.getTime())+"<br>爆炸平均值: "+format(player.he.boomedNum[1])},
            canClick(){return hasMilestone("he",3)&&player.h.balloons.gte(10)},
            onClick(){
                if(!hasMilestone("he",4)) player.he.upTimes[0] = zero
                player.he.upTimes[1] = player.he.upTimes[1].add(this.getTime()).min(300)
                player.he.boomedNum[1] = player.he.boomedNum[1].add(this.boomedNum()).div(2)
                player.h.balloons = player.h.balloons.sub(this.boomedNum())
            },
            getTime(){
                let t = this.boomedNum().mul(3)
                return t
            },
            boomedNum(){
                return player.h.balloons.div(2).floor()
            },
            effect(){
                if(player.he.upTimes[1].eq(0)) return [one,one,one]
                effbase = one
                if(hasUpgrade("he",24)) effbase = effbase.mul(upgradeEffect("he",24)[1])
                if(hasUpgrade("he",34)) effbase = effbase.mul(upgradeEffect("he",34)[1])
                eff0 = effbase.mul(100).pow(2) //氢
                eff1 = effbase.mul(10) //氦气
                eff2 = effbase.mul(100) //氢能和氢气
                return [eff0,eff1,eff2]
            },
            style(){return { 'background':this.canClick()?'linear-gradient(to right,skyblue 12%, cyan 100%)':'#bf8f8f','border-radius': "0px",height: "90px", width: "300px"}},
            unlocked(){return hasMilestone("he",3)||player.li.unlocked}
        },
    },
    buyables:{
        "He-3":{
            title(){return "氦-3"},
            display(){return "基于基本粒子数量和此可购买购买量加成基本粒子获取.<br>当前效果: x"+format(this.effect())+"<br>价格: "+format(this.cost())+"氦"},
            cost(x){
                return x.add(1).pow(2).floor()
            },
            effect(x){
                x = x.add(this.other())
                effbase = two
                eff = effbase.pow(x.mul(player.points.max(1e60).log(1e60)))
                eff = powsoftcap(eff,n(1.79e308),three)
                eff = logsoftcap(eff,n("ee4"),n(1.01))
                return eff},
            canAfford(){return player.he.points.gte(this.cost())},
            buy(){
                player.he.points = player.he.points.sub(this.cost())
                setBuyableAmount(this.layer,this.id,getBuyableAmount(this.layer,this.id).add(1))
            },
            purchaseLimit(){
                return n(20)
            },
            other(){
                let added = layers.p.haDron("effect")[3]
                return added
            },
            unlocked(){return hasUpgrade("he",12)},
            style(){return {height: "150px", width: "150px"}},
            tooltip(){
                other = this.other().gt(0)?("+"+formatWhole(this.other())):""
                return "购买量: <h2 style='color:"+tmp[this.layer].color+";text-shadow:0px 0px 10px;'>"+formatWhole(getBuyableAmount(this.layer,this.id))+"</h2>"+other+"/"+formatWhole(this.purchaseLimit())}
        },
        "He-4":{
            title(){return "氦-4"},
            display(){return "基于弱力数量和此可购买购买量加成弱力获取.<br>当前效果: x"+format(this.effect())+"<br>价格: "+format(this.cost())+"氦"},
            cost(x){
                return x.add(5).pow(2.5).floor()
            },
            effect(x){
                x = x.add(this.other())
                effbase = two
                eff = effbase.pow(x.mul(player.p.weakInTion.max(1e60).log(1e60)))
                eff = powsoftcap(eff,n(1.79e308),three)
                return eff},
            canAfford(){return player.he.points.gte(this.cost())},
            buy(){
                player.he.points = player.he.points.sub(this.cost())
                setBuyableAmount(this.layer,this.id,getBuyableAmount(this.layer,this.id).add(1))
            },
            purchaseLimit(){
                return n(20)
            },
            other(){
                let added = zero
                return added
            },
            unlocked(){return hasUpgrade("he",14)},
            style(){return {height: "150px", width: "150px"}},
            tooltip(){
                other = this.other().gt(0)?("+"+formatWhole(this.other())):""
                return "购买量: <h2 style='color:"+tmp[this.layer].color+";text-shadow:0px 0px 10px;'>"+formatWhole(getBuyableAmount(this.layer,this.id))+"</h2>"+other+"/"+formatWhole(this.purchaseLimit())}
        },
    },
    heliumEffect(){ //降低氦价格
        let eff = player.he.helium.max(1).root(2)
        eff = powsoftcap(eff,n(2147483648),two)
        eff = powsoftcap(eff,n(1e154),eight)
        eff = logsoftcap(eff,n(two.pow(1024),n(1.001)))
        return eff
    },
    update(diff){
        for(id in [0,1]){
            player.he.upTimes[id] = player.he.upTimes[id].sub(diff).max(0)
        }
        if(player.he.upTimes[0].gte(270)) player.a94 += diff
    },
    tabFormat:{
        homepage:{
            name: "主页",
            content:[
                "main-display","prestige-button","resource-display",
                ["row",[["buyable","He-3"],["buyable","He-4"]]],
                ["row",[["upgrade",11],["upgrade",12],["upgrade",13],["upgrade",14]]],
                ["row",[["upgrade",21],["upgrade",22],["upgrade",23],["upgrade",24]]],
                ["row",[["upgrade",31],["upgrade",32],["upgrade",33],["upgrade",34]]],
            ],
            buttonStyle: {
                "border-color": "white"
            }, 
        },
        balloons:{ // Bloom in Two
            name: "气球",
            content:[
                "main-display","prestige-button",["blank",["","5px"]],
                ["display-text",function(){return "你有 "+format(player.he.helium,"two")+" 氦气, 降低氦价格 /"+format(layers.he.heliumEffect())}],
                ["display-text",function(){if(hasMilestone("he",1))return "你有 "+format(player.h.hydrogen,"two")+" 氢气, 倍增氢获取 x"+format(layers.h.hydrogenEffect())}],
                ["row",[["display-text",function(){return "你有 "+formatWhole(player.he.balloons)+" 氦气球"}],
                ["display-text",function(){if(hasMilestone("he",1))return ", 你有 "+formatWhole(player.h.balloons)+" 氢气球"}]]],
                ["blank",["","5px"]],
                ["row",[["clickable","Blm-hl"],["clickable","Blm-hg"]]],
                ["row",[["clickable","Blm-he"],["clickable","Blm-h"]]],
                ["row",[["clickable","Blm-bhe"],["clickable","Blm-bh"]]],
            ],
            buttonStyle: {
                "border-color": "silver"
            },
            unlocked(){return hasUpgrade("he",31)||player.li.unlocked},
        },
        milestones:{
            name: "里程碑",
            content:[
                "milestones"
            ],
            buttonStyle: {
                "border-color": "#888888"
            },
            unlocked(){return hasUpgrade("he",31)||player.li.unlocked},
        },
    },
})
addLayer("li", {
    name: "li",
    symbol: "Li",
    position: 0,
    branches: ["h"],
    startData() { return {
        unlocked: false,
        points: zero,
        perkpoints: zero,
    }},
    color: "#f05c82",
    requires: new Decimal(1e192),
    resource: "锂",
    baseResource: "基本粒子",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.1,
    gainMult() {
        mult = one
        return mult
    },
    gainExp(){
        if(!player.li.unlocked) return zero //防止挂机之神偷掉了前面的内容
        exp = one
        return exp
    },
    row: 1,
    doReset(resettinglayer){
        if(layers[resettinglayer].row>layers[this.layer].row){
            let kept = []
            layerDataReset("li",kept)
        }
        if(resettinglayer=="li"){
            player.li.perkpoints = player.li.perkpoints.add(1)
        }
    },
    layerShown(){return hasMilestone("he",4)||player.li.unlocked},
    hotkeys: [
        {key: "k", description: "K: 进行锂重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    milestones:{
        0:{
            requirementDescription: "1 锂",
            effectDescription(){return "基本粒子获取 x10, 氢获取 x4, 氦价格 /16"},
            done(){return player.li.points.gte(1)}
        },
    },
    tabFormat:{
        homepage:{
            name: "主页",
            content:[
                "main-display","prestige-button","resource-display",
                ["display-text",function(){return "这里本来有8个升级的,但是还没做完<br>你可以再玩一遍,墙少了很多,这会让你获得最后一个成就并通关游戏"}]
            ],
            buttonStyle: {
                "border-color": "#f05c82"
            },
        },
        milestones:{
            name: "里程碑",
            content:[
                "milestones"
            ],
            buttonStyle: {
                "border-color": "#f05c82"
            },
            unlocked(){return player.li.unlocked},
        },
        perks:{
            name: "qol升级",
            content:[
                ["display-text",function(){return "你有 <h2 style='color:green;text-shadow:0px 0px 10px;'>"+formatWhole(player.li.perkpoints)+"</h2> qol点"}],
                ["display-text",function(){return quickColor("qol点","green")+"在每次锂重置时获得一个,可以用于购买以下自动化升级,开关在自动化层级中.<br><h1><s>没做完"}],
            ],
            buttonStyle: {
                "border-color": "green"
            },
            unlocked(){return player.li.unlocked},
        },
    },
})