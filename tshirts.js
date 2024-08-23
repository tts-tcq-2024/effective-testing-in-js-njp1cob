const {expect} = require('chai');

function size(cms) {
    if (cms < 38) {
        return 'S';
    } else if (cms > 38 && cms < 42) {
        return 'M';
    } else {
        return 'L';
    }
}


expect(size(37)).equals('S');
expect(size(40)).equals('M');
expect(size(43)).equals('L');
console.log('All is well (maybe!)');


// Size < 38 should return 'S'
function testForSmall() {
    expect(size(37)).to.equal('S');
}

// Size 38 should return 'M'
function testForMediumBoundary() {
    expect(size(38)).to.equal('M'); 
}

// Size 40 should return 'M'
function testSizeMedium() {
    expect(size(40)).to.equal('M');
}

// Size 42 should return 'L'
function testForLargeBoundary() {
    expect(size(42)).to.equal('L'); 
   
}

// Size > 42 should return 'L'
function testForLarge() {
    expect(size(43)).to.equal('L');
   
}

function runTests() {
    testForSmall();
    testForMediumBoundary();
    testSizeMedium();
    testForLargeBoundary();
    testForLarge();
}

runTests();
