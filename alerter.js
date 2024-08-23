let alertFailureCount = 0;

function networkAlertStub(celcius) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    // Return 200 for ok
    // Return 500 for not-ok
    // stub always succeeds and returns 200
    return 200;
}

function alertInCelcius(farenheit) {
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode = networkAlertStub(celcius);
    if (returnCode != 200) {
        // non-ok response is not an error! Issues happen in life!
        // let us keep a count of failures to report
        // However, this code doesn't count failures!
        // Add a test below to catch this bug. Alter the stub above, if needed.
        alertFailureCount += 0;
    }
}

// alertInCelcius(400.5);
// alertInCelcius(303.6);
// console.log(`${alertFailureCount} alerts failed.`);
// console.log('All is well (maybe!)');




// Test function to verify that alertFailureCount is incremented on failure
function testAlertFailureCountIncrement() {
    alertFailureCount = 0; // Reset count before test
    
    alertInCelcius(400.5); // Should cause failure and increment count
    expect(alertFailureCount).to.equal(1);
    console.log('Test for failure count increment passed.');

    alertInCelcius(303.6); // Should cause failure and increment count
    expect(alertFailureCount).to.equal(2);
    console.log('Test for second failure count increment passed.');
}

// Test function to verify that alertFailureCount is not incremented on success
function testAlertSuccessDoesNotIncrementFailureCount() {
    alertFailureCount = 0; // Reset count before test

    alertInCelcius(100); // Should not cause failure
    expect(alertFailureCount).to.equal(0);
    console.log('Test for no failure count increment on success passed.');
}

// Run all test functions
function runTests() {
    testAlertFailureCountIncrement();
    testAlertSuccessDoesNotIncrementFailureCount();
}

runTests();

console.log(`${alertFailureCount} alerts failed.`);
console.log('All is well (maybe!)');








