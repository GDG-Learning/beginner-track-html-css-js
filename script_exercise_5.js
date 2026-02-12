function checkScore(score){
if(score===50){
console.log("You passed!");
}
else if(score<50){
console.log("You Failed!");
}
for(let i=40; i<=60; i++){
checkScore(i);
}
}