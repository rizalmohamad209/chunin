let promise = fetch('https://dhiyo-api-article.herokuapp.com/articles')
promise
.then((response)=> response.json())
.then((json)=>{ const data=json.data
    // console.log(data)
    const result=data.map((m)=>{
        return `tittle: ${m.tittle}`
    })
    console.log(result)
})

.catch((err)=>console.log(err))
console.log('loading.....')