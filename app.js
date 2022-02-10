// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


import { getPlanes } from './fetch-utils.js';
import { renderPlaneData } from './render-utils.js';

const planeList = document.getElementById('plane-appended');



window.addEventListener('load', async() =>{
    const planes = await getPlanes();
    //console.log(dogs);

    for (let plane of planes) {
        const pDiv = renderPlaneData(plane);
        planeList.append(pDiv);
    }
    
});