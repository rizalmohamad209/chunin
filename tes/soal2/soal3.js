segitiga=(printSegita)=>{
    for ( i=printSegita;i>=1;i--){
        for(j=printSegita;j>i ;j--){
            process.stdout.write(" ");
        }
        for(k=1;k< (i*2);k++){
            process.stdout.write(`${k}`);
        }
        process.stdout.write("\n");
    }   
    }
    segitiga(5)