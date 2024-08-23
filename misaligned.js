const {expect} = require('chai')

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return majorColors.length * minorColors.length;
}

result = print_color_map();

// Test function to check the total count of color pairs
function testColorMapCount() {
    const result = print_color_map();
    expect(result).to.equal(25);
    console.log('Test for total count of color pairs passed.');
}

// Test function to verify output format
function testColorMapFormat() {
    const consoleSpy = sinon.spy(console, 'log'); // Spy on console.log to capture output
    print_color_map();
    
    expect(consoleSpy.calledWith('0 | White | Blue')).to.be.true;
    expect(consoleSpy.calledWith('1 | White | Orange')).to.be.true;
    expect(consoleSpy.calledWith('24 | Violet | Slate')).to.be.true;
    
    consoleSpy.restore(); // Restore console.log after the test
    console.log('Test for output format passed.');
}

// Test function to verify specific mappings
function testSpecificMappings() {
    const consoleSpy = sinon.spy(console, 'log'); 
    print_color_map();

    expect(consoleSpy.getCall(0).args[0]).to.equal('0 | White | Blue');   
    expect(consoleSpy.getCall(12).args[0]).to.equal('12 | Black | Green'); 
    expect(consoleSpy.getCall(24).args[0]).to.equal('24 | Violet | Slate'); 
    
    consoleSpy.restore(); // Restore console.log after the test
    console.log('Test for specific mappings passed.');
}

// Run all test functions
function runTests() {
    testColorMapCount();
    testColorMapFormat();
    testSpecificMappings();
}

runTests();
