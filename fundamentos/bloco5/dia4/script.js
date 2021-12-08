//Cor do fundo

let btnBgWhite = document.getElementById('bg_white');
let btnBgBlack = document.getElementById('bg_black');
let btnBgOff = document.getElementById('bg_off');

btnBgWhite.addEventListener('click', mudaWhite);

function mudaWhite () {
    document.getElementById('bd').style.backgroundColor = 'white';
}



btnBgBlack.addEventListener('click', mudaBlack)

function mudaBlack () {
    document.getElementById('bd').style.backgroundColor = 'black';
}


btnBgOff.addEventListener('click', mudaOff);

function mudaOff () {
    document.getElementById('bd').style.backgroundColor = 'rgb(207, 207, 207)';
}


// Cor do Texto

let colBlack = document.getElementById('txt_black');
let colWhite = document.getElementById('txt_white');
let colRed = document.getElementById('txt_red');

colBlack.addEventListener('click', corBlack);

function corBlack () {
    document.getElementById('bd').style.color = 'black';
}

colWhite.addEventListener('click', corWhite);

function corWhite () {
    document.getElementById('bd').style.color = 'white';
}


colRed.addEventListener('click', corRed);

function corRed () {
    document.getElementById('bd').style.color = 'red';
}

// Tamanho da fonte

let szsmll = document.getElementById('font_small');
let szmed = document.getElementById('font_med');
let szbg = document.getElementById('font_big');

szsmll.addEventListener('click', mudaSmall);

function mudaSmall () {
    document.getElementById('bd').style.fontSize = '5px';
}

szmed.addEventListener('click', mudaMed);

function mudaMed () {
    document.getElementById('bd').style.fontSize = '10px';
}

szbg.addEventListener('click', mudaBig);

function mudaBig () {
    document.getElementById('bd').style.fontSize = '100px';
}

// Tamanho da linha

let lnsmll = document.getElementById('spc_small');
let lnmed = document.getElementById('spc_med');
let lnbig = document.getElementById('spc_big');

lnsmll.addEventListener('click', linsml);

function linsml () {
    document.getElementById('bd').style.lineHeight = '5px';
}

lnmed.addEventListener('click', linmed);

function linmed () {
    document.getElementById('bd').style.lineHeight = '50px';
}

lnbig.addEventListener('click', linbig);

function linbig () {
    document.getElementById('bd').style.lineHeight = '100px';
}



// Fonte

let red = document.getElementById('ff_red');
let quick = document.getElementById('ff_quick');
let mon = document.getElementById('ff_mont');

red.addEventListener('click', fRed);

function fRed () {
    document.getElementById('para').style.fontFamily = 'Redacted Script'
}

quick.addEventListener('click', fQuick);

function fQuick () {
    document.getElementById('para').style.fontFamily = 'Quicksand'
}

mon.addEventListener('click', fMon);

function fMon () {
    document.getElementById('para').style.fontFamily = 'Montserrat'
}

//Reset


let resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', resetou);

function resetou () {
    if (
        document.getElementById('bd').style.backgroundColor == 'black' || document.getElementById('bd').style.backgroundColor == 'white' || document.getElementById('bd').style.backgroundColor == 'rgb(207, 207, 207)' ||
        document.getElementById('bd').style.color == 'black' || document.getElementById('bd').style.color == 'white' || document.getElementById('bd').style.color == 'red' ||
        document.getElementById('bd').style.fontSize == '5px' || document.getElementById('bd').style.fontSize == '10px' || document.getElementById('bd').style.fontSize == '100px' ||
        document.getElementById('bd').style.lineHeight == '5px' || document.getElementById('bd').style.lineHeight == '50px' || document.getElementById('bd').style.lineHeight == '100px' ||
        document.getElementById('para').style.fontFamily == 'Redacted Script' || document.getElementById('para').style.fontFamily == 'Quicksand' || document.getElementById('para').style.fontFamily == 'Montserrat'
    ) {
        document.getElementById('bd').style.backgroundColor == 'rgb(216, 216, 216)'
        document.getElementById('bd').style.color == 'black'
        document.getElementById('bd').style.fontSize == '15px'
        document.getElementById('bd').style.lineHeight == '8px'
        document.getElementById('para').style.fontFamily == 'Times New Roman'
    }

    return
}