
getBudget([
    {name : "John" , age : 21 , budget : 23000} ,
    {name : "Steve" , age : 32 , budget : 40000} ,
    {name : "Martin" , age : 16 , budget : 2700} ,
]);
getBudget([
    {name : "John" , age : 21 , budget : 29000} ,
    {name : "Steve" , age : 32 , budget : 32000} ,
    {name : "Martin" , age : 16 , budget : 1600}
]);

function getBudget(data) {

    let budget = 0;
    for (let obj of data) budget += obj.budget;
    console.log(budget);
}