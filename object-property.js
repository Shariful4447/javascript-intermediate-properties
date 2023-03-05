const student=[
    {id:21, name:'manna'},
    {id:31, name:'omar sanny'},
    {id: 45, name:'pori mani'},
    {id: 71, name:'deepjol'}
];
let output=[];
for(let i=0; i<student.length; i++){
    let element=student[i];
    element=element.name;
    output.push(element);
    
    
}
console.log(output);

// by mapping
const student1=[
    {id:21, name:'manna'},
    {id:31, name:'omar sanny'},
    {id: 45, name:'pori mani'},
    {id: 71, name:'deepjol'}
];
const studentName=student1.map(s=>s.name);// want to get stdent name;

const ids=student1.map(s=>s.id);//want to get ids of student
console.log("By Map Function",studentName);
console.log(ids);

//if i want the name which id is greter than 31
const greater=student1.filter(s=>s.id>31);
console.log(greater);

//if i want the next element if the condition is true
const finder=student1.find(s=>s.id>31);
console.log(finder);



