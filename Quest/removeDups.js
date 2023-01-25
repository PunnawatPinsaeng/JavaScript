
removeDups([1 , 0 , 1 , 0]);
removeDups(["The" , "big" , "cat"]);
removeDups(["John" , "Taylor" , "John"]);

function removeDups(data) {

    let dups = [];
    for (let item of data) {
    
        if (!dups.includes(item)) dups.push(item);
    }

    console.log(dups);
}