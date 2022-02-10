export function renderPlaneData(plane) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('plane-data');

    p.textContent = plane.type;
    img.src = `./assets/${plane.id}.png`;
    a.href = `./detail/?id=${plane.id}`;
    
    div.append(p, img);

    a.append(div);

    return a;
}

export function renderPlaneDetail(plane) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const speedEL = document.createElement('p');
    const nameEL = document.createElement('h2');
    const sizeEL = document.createElement('p');
    // const breedEl = document.createElement('p');
    // const ageAndBreedEl = document.createElement('div');

    div.classList.add('plane-appended');

    nameEL.textContent = plane.type;
    nameEL.classList.add('type');

    speedEL.textContent = plane.speed;
    speedEL.classList.add('speed');

    sizeEL.textContent = plane.size;    
    sizeEL.classList.add('size');

    // breedEl.textContent = dog.breed;
    // breedEl.classList.add('breed');

    // ageAndBreedEl.classList.add('age-and-breed');

    // ageAndBreedEl.append(ageEl, breedEl);

    img.src = `../assets/${plane.id}.png`;
    
    div.append(nameEL, img, speedEL, sizeEL);

    return div;

}