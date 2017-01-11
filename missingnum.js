function findMissing(array1, array2){
  
  if ((array1.length === 0) && (array2.length === 0)){
    return 0;
  }

  if (array1.length === array2.length){
    for(i = 0; i <= array1.length; i++){
      if(array1[i] === array2[i]){
        return 0;
      }
    }
  }
  for(i = 0; i <= array1.length; i++){
    if (array2.indexOf(array1[i]) === -1){
      return  array1[i];
    }
    else{
      for(i = 0; i <= array2.length; i++){
        if (array1.indexOf(array2[i]) === -1){
          return array2[i];
          
        }
        
      }
    }
    
  }
  
}