function calculateLength(string,maxLength){
let result = (string.length<=maxLength)?true:false;
console.log('Строка: '+string+' Длина строки: '+string.length)
return result
}




function checkPalindrome(string){
    let normalizeString = string.replaceAll(' ','').toUpperCase();
    let newString ='';
    for(let i=normalizeString.length-1;i>=0;i--){
        newString+=normalizeString[i];
        //console.log(newString[i], newString[i]);
    }
    if(normalizeString===newString){
        console.log('Имеем палиндром! Ура, товарищи!');
        return true
    } else{
        console.log('Нееее, не хрена это не палендром! ');
        console.log('Тут новая строка:'+newString+' , а тут нормализованная:'+normalizeString);
        return false
    }

}

// console.log(checkPalindrome('потоп4451'));


function getNumber(string){
  let newString='';
  for(let i=0;i<=string.length-1;i++){
    if(!isNaN(string[i])){
    newString+=string[i];} else continue

  }
  newString =newString.replaceAll(' ','');
  return newString
}

console.log(getNumber('test1 ghgf 434 hgfhf k77ff hfre6'));
