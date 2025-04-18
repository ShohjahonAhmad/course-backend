function delay(message){
    setTimeout(()=>{
        console.log(message);
    }, 2000);
}

delay('hello');
console.log('function delay completed');