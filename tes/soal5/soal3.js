const aritmatika = (n,a,b) => {
    let res = [a]
    for (let i = 1; i < n; i++) {
        res.push(a+=b)
    }
    console.log(res);
 }
 aritmatika(12,3,5);