import { getPlane } from '../fetch-utils.js';
import { renderPlaneDetail } from '../render-utils.js';

const planeInfoContainer = document.getElementById('plane-info-container');





// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container

window.addEventListener('load', async() =>{
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const plane = await getPlane(id);
    console.log(plane);

    const planeInfo = renderPlaneDetail(plane);
    planeInfoContainer.append(planeInfo);

});