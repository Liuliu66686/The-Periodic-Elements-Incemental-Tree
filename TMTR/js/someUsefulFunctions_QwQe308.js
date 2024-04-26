//快捷调用+提高运算速度
var zero = new Decimal(0)
var one = new Decimal(1)
var two = new Decimal(2)
var three = new Decimal(3)
var four = new Decimal(4)
var five = new Decimal(5)
var six = new Decimal(6)
var seven = new Decimal(7)
var eight = new Decimal(8)
var nine = new Decimal(9)
var ten = new Decimal(10)
var three_thousand_eight_hundred_and_sixty_four = new Decimal(3864)//Liue308特供版
//快捷定义
function n(num){
    return new Decimal(num)
}
//检测旁边的升级是否被购买
function checkAroundUpg(UPGlayer,place){
    place = Number(place)
    return hasUpgrade(UPGlayer,place-1)||hasUpgrade(UPGlayer,place+1)||hasUpgrade(UPGlayer,place-10)||hasUpgrade(UPGlayer,place+10)
}
//指数软上限
function powsoftcap(num,start,power){
	if(num.gt(start)){
		num = num.root(power).mul(start.pow(one.sub(one.div(power))))
	}
    return num
}
//指数软上限逆运算 #Banana3864提供
function anti_powsoftcap(result,start,power){
    let num = result.div(start).pow(power).mul(start)
    return num
}
//e后数字开根
function expRoot(num,root){
    return ten.pow(num.log10().root(root))
}
//e后数字乘方
function expPow(num,pow){
    return ten.pow(num.log10().pow(pow))
}
//e后数字指数软上限
function expRootSoftcap(num,start,power){
    if(num.lte(start)) return num;
    num = num.log10();start = start.log10()
    return ten.pow(num.root(power).mul(start.pow(one.sub(one.div(power)))))
}
//修改class属性
function setClass(id,toClass = []){
    var classes = ""
    for(i in toClass) classes += " "+toClass[i]
    if(classes != "") classes = classes.substr(1)
    document.getElementById(id).className = classes
}
//快速创建sub元素
function quickSUB(str){
    return `<sub>${str}</sub>`
}
//快速创建sup元素
function quickSUP(str){
    return `<sup>${str}</sup>`
}
//快速给文字上色
function quickColor(str,color){
    return `<text style='color:${color}'>${str}</text>`
}
//以下为peit作者自制,望周知
//指数折算计算(其实就是改了一下)
function powerTo(num,start,power){
	if(num.gt(start)){
        num = num.sub(start.sub(1)).pow(power).add(start)
	}
    return num
}
//深度计算(mode=0,计算深度;mode=1,计算下一个深度所需伤害)
//*
function depthNum(damage,mode=0){
    let num = zero
    let depth = player.be.depth.add(1) //
    damage = damage.add(1) //
    if(mode==0) {
        num = damage.log(1.5)
        if(num.gte(layers.be.superHpStart())) num = num.sub(damage.log(2.5).sub(layers.be.superHpStart()))
        if(num.gte(layers.be.hyperHpStart())) num = num.sub(damage.log(4).sub(layers.be.hyperHpStart()))
        num = powsoftcap(num,layers.be.superhyperHpStart(),n(1.5)) //超究折算
    }//我在摸鱼
if(mode==1){
    let superC = one.div(n(2.5).log(1.5))
    let hyperC = one.div(n(4).log(1.5)).add(superC) //高阶折算启用时低阶折算同时启用
    if(depth.gte(layers.be.superhyperHpStart())) num = n(1.5).pow(anti_powsoftcap(depth,layers.be.superhyperHpStart(),n(1.5)).sub(layers.be.hyperHpStart()).sub(layers.be.superHpStart()).div(one.sub(hyperC))),layers.be.superhyperHpStart(),n(1.5)
    else if(depth.gte(layers.be.hyperHpStart())) num = n(1.5).pow(depth.sub(layers.be.hyperHpStart()).sub(layers.be.superHpStart()).div(one.sub(hyperC)))
    else if(depth.gte(layers.be.superHpStart())) num = n(1.5).pow(depth.sub(layers.be.superHpStart()).div(one.sub(superC)))
    else num = n(1.5).pow(depth)
}
return num
}
//*/