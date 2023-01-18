
longRuningOperation(() => {
    anotherLongRunningOperation(() => {
        yetAnother(() => {
            oneMore(() => {
                lastOne(() => {
                    console.log('Where are we?');
                });
            });
        })
    })
});
