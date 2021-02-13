segitiga=(number)=>{
    let printSegita = number
    for ( i=printSegita;i>=1;i--){
        for(k=printSegita -1;k>=i ;k--){
            process.stdout.write(" ");
        }
        for(j=i;j>=1;j--){
            process.stdout.write(" "+j);
        }
        process.stdout.write("\n");
    }   
    }
    segitiga(5)

    


