function MaxValue (share) {
  // Your code here:

/* let max=share[1]-share[0]
for(let i=0; i<share.length-1; i++){
  for (j=i+1; j<share.length; j++){
    let potential= share[j] - share[i];
    max= potential > max? potential: max;
  }
}
return max */
let max= share[1]-share[0]
let minPrice= share[0]
for (let i=1; i<share.length; i++){
  const potential= share[i]-minPrice;
  max= Math.max(potential, max);
  minPrice= Math.min(minPrice, share[i]);

}
return max
}

module.exports = MaxValue
