
function criticalCode() {

    throw 'throwing an exception';
}

function logError(theException) {

    console.log(theException);
}

// ! Try..Catch
console.log('\n********Try..Catch********\n');

try {

    criticalCode();
}
catch (ex) {

    console.log('Someting Went Wrong!');
    logError(ex);
}

// ! Throwing in Try..Catch
console.log('\n********Throwing in Try..Catch********\n');

try {

    throw 'An Exception that is thrown every time';
}
catch (ex) {

    console.log('Something Went Wrong!');
    logError(ex);
}

// ! Try..Catch..Finally
console.log('\n********Try..Catch..Finally********\n')

try {

    criticalCode();
}
catch (ex) {

    console.log('Something Went Wrong!');
    logError(ex);
}
finally {

    console.log('Code that alway will run');
}

function hello() {

    console.log('\n********Throwing Exceptions********\n');
}