
const sort = (arr) => {
  for(let i=1; i<arr.length; i++){
  	for(let j=0; j<i; j++){
      if(arr[i] < arr[j]){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    	}
    }  
  }
  return arr;
}
const array_to_sort = [5, 2, 1, 8];
console.log(sort(array_to_sort));
