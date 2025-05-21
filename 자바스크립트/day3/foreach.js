const colors = ['green' , 'red' , 'blue']
console.log(typeof colors);

console.log(colors.length);
for(let i = 0; i<colors.length;i++){
  console.log(colors[i]);
}

colors.forEach(element => console.log(element))
colors.forEach((element ,index ,colors) => {
  console.log(element)
  console.log(index);
  console.log(colors);
})