let rps;
let rpsPC;
let numscoreUSER = 0;
let numscorePC = 0;
// grn = Get Random Number
function grn(min,max) {
    rps = Math.floor(Math.random() * (max - min) + min);
    return rps;
}

function scoreUSER(number) {
    numscoreUSER = numscoreUSER + number;
    return numscoreUSER;
}
function scorePC(number) {
    numscorePC = numscorePC + number;
    return numscorePC;
}

document.getElementById('rock').addEventListener('click',() => {
    rpsPC = grn(0,3);
    if (rpsPC === 0) {
        document.getElementById('rock2').style.border = '10px solid red';
        document.getElementById('rock2').style.borderRadius = '10px';
        document.getElementById('rock').style.border = '10px solid red';
        document.getElementById('rock').style.borderRadius = '10px';
        setTimeout(() => {
            document.getElementById('rock2').style.border = 'none';
            document.getElementById('rock').style.border = 'none';
            }, 2000);
        scoreUSER(0);
        scorePC(0)
        document.getElementById('scoreUSER').innerHTML = `امتیاز شما: ${numscoreUSER}`;
        document.getElementById('scorePC').innerHTML = `امتیاز کامپیوتر: ${numscorePC}`;
    }
    if (rpsPC === 1) {
        document.getElementById('paper2').style.border = '10px solid green';
        document.getElementById('paper2').style.borderRadius = '10px';
        document.getElementById('rock').style.border = '10px solid red';
        document.getElementById('rock').style.borderRadius = '10px';
        setTimeout(() => {
            document.getElementById('paper2').style.border = 'none';
            document.getElementById('rock').style.border = 'none';
            }, 2000);

        scoreUSER(0);
        scorePC(1)
        document.getElementById('scoreUSER').innerHTML = `امتیاز شما: ${numscoreUSER}`;
        document.getElementById('scorePC').innerHTML = `امتیاز کامپیوتر: ${numscorePC}`;
    }
    if (rpsPC === 2) {
        document.getElementById('scissor2').style.border = '10px solid red';
        document.getElementById('scissor2').style.borderRadius = '10px';
        document.getElementById('rock').style.border = '10px solid green';
        document.getElementById('rock').style.borderRadius = '10px';
        setTimeout(() => {
            document.getElementById('scissor2').style.border = 'none';
            document.getElementById('rock').style.border = 'none';
            }, 2000);

        scoreUSER(1);
        scorePC(0)
        document.getElementById('scoreUSER').innerHTML = `امتیاز شما: ${numscoreUSER}`;
        document.getElementById('scorePC').innerHTML = `امتیاز کامپیوتر: ${numscorePC}`;
    }
})

document.getElementById('paper').addEventListener('click',() => {
    rpsPC = grn(0,3);
    if (rpsPC === 0) {
        document.getElementById('rock2').style.border = '10px solid red';
        document.getElementById('rock2').style.borderRadius = '10px';
        document.getElementById('paper').style.border = '10px solid green';
        document.getElementById('paper').style.borderRadius = '10px';
        setTimeout(() => {
            document.getElementById('rock2').style.border = 'none';
            document.getElementById('paper').style.border = 'none';
            }, 2000);
        scoreUSER(1);
        scorePC(0)
        document.getElementById('scoreUSER').innerHTML = `امتیاز شما: ${numscoreUSER}`;
        document.getElementById('scorePC').innerHTML = `امتیاز کامپیوتر: ${numscorePC}`;
    }
    if (rpsPC === 1) {
        document.getElementById('paper2').style.border = '10px solid red';
        document.getElementById('paper2').style.borderRadius = '10px';
        document.getElementById('paper').style.border = '10px solid red';
        document.getElementById('paper').style.borderRadius = '10px';
        setTimeout(() => {
            document.getElementById('paper2').style.border = 'none';
            document.getElementById('paper').style.border = 'none';
            }, 2000);

        scoreUSER(0);
        scorePC(0)
        document.getElementById('scoreUSER').innerHTML = `امتیاز شما: ${numscoreUSER}`;
        document.getElementById('scorePC').innerHTML = `امتیاز کامپیوتر: ${numscorePC}`;
    }
    if (rpsPC === 2) {
        document.getElementById('scissor2').style.border = '10px solid green';
        document.getElementById('scissor2').style.borderRadius = '10px';
        document.getElementById('paper').style.border = '10px solid red';
        document.getElementById('paper').style.borderRadius = '10px';
        setTimeout(() => {
            document.getElementById('scissor2').style.border = 'none';
            document.getElementById('paper').style.border = 'none';
            }, 2000);

        scoreUSER(1);
        scorePC(0)
        document.getElementById('scoreUSER').innerHTML = `امتیاز شما: ${numscoreUSER}`;
        document.getElementById('scorePC').innerHTML = `امتیاز کامپیوتر: ${numscorePC}`;
    }
})

document.getElementById('scissor').addEventListener('click',() => {
    rpsPC = grn(0,3);
    if (rpsPC === 0) {
        document.getElementById('rock2').style.border = '10px solid green';
        document.getElementById('rock2').style.borderRadius = '10px';
        document.getElementById('scissor').style.border = '10px solid red';
        document.getElementById('scissor').style.borderRadius = '10px';
        setTimeout(() => {
            document.getElementById('rock2').style.border = 'none';
            document.getElementById('scissor').style.border = 'none';
            }, 2000);
        scoreUSER(1);
        scorePC(0)
        document.getElementById('scoreUSER').innerHTML = `امتیاز شما: ${numscoreUSER}`;
        document.getElementById('scorePC').innerHTML = `امتیاز کامپیوتر: ${numscorePC}`;
    }
    if (rpsPC === 1) {
        document.getElementById('paper2').style.border = '10px solid red';
        document.getElementById('paper2').style.borderRadius = '10px';
        document.getElementById('scissor').style.border = '10px solid green';
        document.getElementById('scissor').style.borderRadius = '10px';
        setTimeout(() => {
            document.getElementById('paper2').style.border = 'none';
            document.getElementById('scissor').style.border = 'none';
            }, 2000);

        scoreUSER(0);
        scorePC(0)
        document.getElementById('scoreUSER').innerHTML = `امتیاز شما: ${numscoreUSER}`;
        document.getElementById('scorePC').innerHTML = `امتیاز کامپیوتر: ${numscorePC}`;
    }
    if (rpsPC === 2) {
        document.getElementById('scissor2').style.border = '10px solid red';
        document.getElementById('scissor2').style.borderRadius = '10px';
        document.getElementById('scissor').style.border = '10px solid red';
        document.getElementById('scissor').style.borderRadius = '10px';
        setTimeout(() => {
            document.getElementById('scissor2').style.border = 'none';
            document.getElementById('scissor').style.border = 'none';
            }, 2000);

        scoreUSER(1);
        scorePC(0)
        document.getElementById('scoreUSER').innerHTML = `امتیاز شما: ${numscoreUSER}`;
        document.getElementById('scorePC').innerHTML = `امتیاز کامپیوتر: ${numscorePC}`;
    }
})