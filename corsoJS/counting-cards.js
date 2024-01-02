let count = 0;
var decision;

function cc(card) {
  // Only change code below this line
switch(card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count+=1;
  decision=" Bet";
  break;
  case 7:
  case 8:
  case 9:
  count=count;
  decision=" Hold";
  break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
  count+=-1;
  decision=" Hold";
  break;
}
if(count<=0){
return count +" Hold";
} else{
 return count +" Bet"; 
}

  
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');