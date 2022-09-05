const textDiv = document.querySelector('.hero');
const text = textDiv.querySelector('h1');

const range = 500;

function shadow(e) {
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const { offsetWidth: width, offsetHeight: height } = textDiv;

    // let x = e.offsetX;
    // let y = e.offsety;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        //adjusting the values if e.target is not textDiv
        // by adding relative position of e.target
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    
    const xRange = Math.round((x / width * range) - (range / 2));
    const yRange = Math.round((y / height * range) - (range / 2));
  
    text.style.textShadow = `
    ${xRange}px ${xRange}px 0 rgba(255,0,255,0.7),
    ${xRange * -1}px ${yRange}px 0 rgba(0,255,255,0.7),
    ${yRange}px ${xRange * -1}px 0 rgba(0,255,0,0.7),
    ${yRange * -1}px ${xRange}px 0 rgba(0,0,255,0.7)
  `;
}

textDiv.addEventListener('mousemove', shadow);