// IMPORT MODULES under test here:
import { renderPlaneDetail } from '../render-utils.js';

const test = QUnit.test;

test('renderPlaneData test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="plane-detail"><h2 class="type">Jumbo Jet.</h2><img src="../assets/1.png"><p class="speed">Medium speed intercontinental distance.</p><p class="size">Large.</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPlaneDetail({
        id: 1,
        type: 'Jumbo Jet.',
        size: 'Large.',
        speed: 'Medium speed intercontinental distance.',
        

    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});
