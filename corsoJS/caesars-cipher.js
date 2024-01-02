function rot13(str) {
  let clrStr="";
 
  let cryptC,clrC;

  for(let n=0;n<str.length;n++){
    cryptC=str.charCodeAt(n);
    if(cryptC===32 || cryptC<65){
      clrC=cryptC;
    }else if (cryptC-13<65){
     clrC=90-(12-(cryptC-65)); 
    } else{
      clrC=cryptC-13;
    }
   
    clrStr=clrStr.concat(String.fromCodePoint(clrC))
    
    }
  return clrStr;
}

rot13("SERR PBQR PNZC");