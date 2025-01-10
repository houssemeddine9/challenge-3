//// 1. 
let dolphinsAverage =(99+108+99)/3;
let koalasAverage =(99+80+99)/3;
console.log("dolphins:",dolphinsAverage );
console.log("koalas:",koalasAverage);
/////2. 
// if(dolphinsAverage>koalasAverage) {
//     console.log("dolphins win the trophy")
// }
// else if(koalasAverage>dolphinsAverage) {
//     console.log("koalas win the trophy")
// }
// else if (koalasAverage===dolphinsAverage){
//     console.log("draw");
// }
////Bonus
///1.2.
if(dolphinsAverage>koalasAverage && dolphinsAverage>=100) {
    console.log("dolphins win the trophy")
}
else if(koalasAverage>dolphinsAverage && koalasAverage>=100) {
    console.log("koalas win the trophy")
}
else if (koalasAverage===dolphinsAverage && dolphinsAverage>=100 && koalasAverage>=100){
    console.log("draw");
}
else{
    console.log("no one win the trophy");
}
