let data = {
    id: 1,
    name: 'Leane Grahama',
    username: 'Bret',
    email: 'sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'apt. 556',
        city: 'Gwenborough',
        zipcode:'92998-3874',
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org'
}
let {address: {street,city}} =data


let ubah ={...data, name: 'Mohamad Rizal Khamami', email:'rizalmohamad209@gmail.com', hobi: 'Mendengarkan musik'}
console.log(ubah)

console.log(`${street} \n${city}`)


//disini s