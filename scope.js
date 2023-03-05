//if we want to add
var bonus=12;//global scope
function sum(num1,num2){
    const result=num1+num2+bonus;
    //return result;
    if(result>9){

        let mood="happy";
        
        return mood;
    }

}

const add=sum(3,7);
console.log(add);