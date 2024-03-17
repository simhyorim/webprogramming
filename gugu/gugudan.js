

function printMultipltable(num) {
    for(let i=1; i <=9; i++){
        console.log(`${num} * ${i}=${num * i}`);
    }
    //===========
}
for(let i=2; i<=9; i++){
    console.log(`${i} 단`);
    printMultipltable(i);
    
}


