
sumTwoSmallestNums([19 , 5 , 42 , 2 , 77]);
sumTwoSmallestNums([10 , 343445353 , 345445 , 3453545353453]);
sumTwoSmallestNums([879 , 953,694 , -847 , 342 , 221 , -91 , -723 , 791 , -587]);
sumTwoSmallestNums([3689 , 2902 , 3951 , -475 , 1617 , -2385]);

function sumTwoSmallestNums(datas) {

    datas.sort(function(a , b) {return a - b});

    if (datas[0] > 0) console.log(datas[0] + datas[1]);
    else {

        for (let num in datas) {

            if (datas[0] < 0) datas.shift();
        }

        console.log(datas[0] + datas[1]);
    }

}