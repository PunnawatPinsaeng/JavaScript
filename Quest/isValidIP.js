
isValidIP('1.2.3.4');
isValidIP('1.2.3');
isValidIP('1.2.3.4.5');
isValidIP('123.45.67.89');
isValidIP('123.456.78.90');
isValidIP('123.045.067.089');
isValidIP('192.168.0.1');

function isValidIP(data) {

    data = data.split('.');
    let check = [];

    if (data.length == 4) {

        for (let index = 0 ; index < data.length ; index++) {

            if (data[index][0] != 0 && data[index] < 256 && data[index] > 0 || (data[index].length) == 1 && data[index][0] == 0) check.push(true);
            else check.push(false);
        }

        if (check[0] == true && check[1] == true && check[2] == true && check[3] == true) console.log(true);
        else console.log(false);

    }
    else console.log(false);

}