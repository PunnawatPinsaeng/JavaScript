
totalVolume([4 , 2 , 4] , [3 , 3 , 3] , [1 , 1 , 2] , [2 , 1 , 1]);
totalVolume([2 , 2 , 2] , [2 , 1 , 1]);
totalVolume([1 , 1 , 1]);

function totalVolume(...data) {

    let result = 0;

    for (let item of data) result += item[0] * item[1] * item[2];
    console.log(result);
}