//for square value by for loop
const numbers=[3, 5, 6, 8, 9];

const output=[];
for(let i=0; i<numbers.length;i++){
    const element=numbers[i];
    const result=element*element;
    output.push(result);

    console.log("new square array value is: ", output);


}

// with MapFilter

const numbers2=[10, 4, 5, 8];

function square(element){
    return element*element;
}


numbers2.map(function(element,index, array){
    console.log("new value", numbers2,index, array);
});

//new way to represent map

const result= numbers.map(x => x * x);
console.log(result);

//Filter will return all the element with array that is true if not retturn empty array
const bigger=numbers.filter(x => x > 5);
console.log(bigger);

// find will return only next element if condition is true.
const finder=numbers.find(x=>x>5);
console.log("new element with find is :", finder);

