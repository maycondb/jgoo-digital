const mario = document.querySeletor('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classlist.add(' .jump');

    setTimeout(() =>{
    marioclassList.remove('.jump');
    },500);

}
const loop = setInterval(() =>{

    const pipePosition = pipe.offsetleft;
    const marioPosition = window.getComputedStyle(mario).b

    console.log(marioPosition);

    (pipePosition <=120 && pipePosition > 0 && marioPosition)< 80) {

    pipe.Style. animation = 'nome';
    pipe.Style.left = ${pipePosition}px;

    mario.style.animation = 'none';
    mario.style.bottom = '${marioPosition}px';

    mario.src = 'game-over.png';
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    clearInterval(loop);

}

}, 10);
document.addEventListener('keydown', jump);
