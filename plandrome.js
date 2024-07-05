//nitin > nitin
//131 > 131
const getPliandrome = (param)=>{
    let getType = typeof param;
    let result;
    if( getType === 'number'){
      if(param < 0){return "Please enter valid number."} 
      result = param.toString().split("").reverse().join("") === param.toString() ? `${param} is pliandrome number` : `${param} is not pliandrome number` ;
    }
    if(typeof param === 'string'){
      result = param.toLowerCase().split("").reverse().join("") === param.toLowerCase() ? `${param} is pliandrome` : `${param} is not pliandrome` ;
    }
    return result
  }
  console.log(getPliandrome("nitin"))