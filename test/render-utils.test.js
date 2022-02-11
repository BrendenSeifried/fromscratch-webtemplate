// IMPORT MODULES under test here:
import { renderPlaneData } from '../render-utils.js';

const test = QUnit.test;

test('renderPlaneData test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPlaneData({
        id: 1,
        typeEL: 'Jumbo Jet.',
        sizeEL: 'Large.',
        speedEL: 'Medium speed intercontinental distance.',
        

    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
