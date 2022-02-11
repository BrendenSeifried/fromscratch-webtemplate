export function renderPlaneData(plane) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('plane-data');

    p.textContent = plane.type;
    img.src = `./assets/${plane.id}.png`;
    a.href = `./planes/?id=${plane.id}`;
    
    div.append(p, img);

    a.append(div);

    return a;
}

export function renderPlaneDetail(plane) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const speedEL = document.createElement('p');
    const typeEL = document.createElement('h2');
    const sizeEL = document.createElement('p');



    div.classList.add('plane-detail');

    typeEL.textContent = plane.type;
    typeEL.classList.add('type');

    speedEL.textContent = plane.speed;
    speedEL.classList.add('speed');

    sizeEL.textContent = plane.size;    
    sizeEL.classList.add('size');

    img.src = `../assets/${plane.id}.png`;
    
    div.append(typeEL, img, speedEL, sizeEL);

    return div;

}