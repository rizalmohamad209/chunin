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
 let namaa=names.map((item)=>{ return item.toLowerCase(); })
 let second=  namaa.filter((nama)=>{
  return nama.includes(mengandung.toLowerCase())   
  })
  callback(second,jumlah)
}
function toUpperCase (second,jumlah){
 let upper=second.map((val)=>{
  return val.charAt(0).toUpperCase()+val.slice(1) 
 })
 let result=upper.slice(0,jumlah)
 console.log(result)
}
utama('a',8,toUpperCase)
