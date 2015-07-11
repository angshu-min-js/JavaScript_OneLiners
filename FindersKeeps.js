function find(arr, func) {
  var num = 0;  
  arr.some(function(current,index,arr){
    if(func(arr[index])){
      num=arr[index];
      return true;
    }
    else
    {
      num=undefined;
      return false;
    }
    }
    );
  return num;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
