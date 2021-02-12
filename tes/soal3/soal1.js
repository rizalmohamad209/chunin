const names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];
function utama(mengandung,jumlah,callback){
  namaa= names.map(function(x){ return x.toLowerCase(); })
 let second=  namaa.filter(function(nama){
  return nama.includes(mengandung)   
  })
  if(jumlah === 3){
    second.splice(0,1)
  }
  callback(second)
}
function gede (second){
 upper=second.map((val)=>{
  return val.charAt(0).toUpperCase()+val.slice(1) 
 })
 console.log(upper)
}
utama('an',3,gede)



 