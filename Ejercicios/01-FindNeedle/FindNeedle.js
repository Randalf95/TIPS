function FindNeedle (haystack, needle) {
  // Your code here:
/* for (let i = 0; i<haystack.length; i++ ){ //react-redux
  for(let j=0; j<needle.length; j++){ //redux
    if (needle[j]!==haystack[i +j]){
      break
    }
    if (j+1 === needle.length)
    return i
  }
}
return -1
} */
for (let i = 0; i < haystack.length; i++) {
  if (haystack.slice(i, needle.length + i)=== needle){
    return i
  } 
}
return -1 
}
module.exports = FindNeedle
