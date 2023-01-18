
// 6406021620050-PunnawatPinsaeng

let myPromise = new Promise(function(myResolve , myReject) {

    // ! "Producing Code" (May take some time)

    myResolve(); // * When Successful
    myReject(); // * When Error
});

// ! "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(

    function(value) { /* Code If Successful */ } ,
    function(error) { /* Code If Some Error */ }
);