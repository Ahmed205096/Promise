let PromiseVal = new Promise(
    (resolvedFunction, rejectedFunction)=>{
        let conection = true;
        if(conection){
            resolvedFunction("Connection Established");
        }
        else{
            rejectedFunction(Error("Connection Failed"));
        }
    }
);

console.log(PromiseVal);

PromiseVal.then(
    (resolvedVal)=>{console.log(`Good ${resolvedVal}`)},
    (rejectedVal)=>{console.log(`Bad ${rejectedVal}`)}
);