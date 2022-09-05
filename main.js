document.querySelector('.tecla_pom').onclick = tocarPom;
document.querySelector('.tecla_clap').onclick = tocarClap;

function tocarPom() {
    document.querySelector('#som_tecla_pom').play();
}

function tocarClap() {
    document.querySelector('#som_tecla_clap').play();
}

