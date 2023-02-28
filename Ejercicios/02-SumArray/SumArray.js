function SumArray (arr, n) {
  // Your code here:
/* for (let i = 0; i < arr.length -1; i++) {
  for (let j = i+1; j< arr.length; j++){
    if(arr[i] + arr[j]===n){
      return true
    }
  }
}
return false */
let start=0
let end = arr.length-1
while(start<end){
  if(arr[start]+arr[end]===n){
    return true
  }
  else if(arr[start]+arr[end]<n){
    start++
  }
  else end --
}
return false
}

module.exports = SumArray
