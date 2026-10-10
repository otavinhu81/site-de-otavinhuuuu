const jogos = document.querySelector('.jogos');
const botao1 = document.querySelector('.ver');
const tp = document.querySelector('.tp');
const tpb = document.querySelector('.tpb');
const final = document.querySelector('.final');
const finalb = document.querySelector('.finalb');
const ph = document.querySelector('.ph');
botao1.onclick = function() {
    if (jogos.style.display === 'flex' || jogos.style.display === '') {
        jogos.style.display = 'none';
    }  
    else {
        jogos.style.display = 'flex';
    }
    if (jogos.style.display === 'flex' || jogos.style.display === '') {
        botao1.textContent = 'Esconder jogos';
    }
    else {
        botao1.textContent = 'Ver jogos';
    }
}
tpb.onclick = function() {
    if (tp.textContent === 'Meus Jogos') {
        tp.textContent = 'Meu site de jogos!';
    }
    else {
        tp.textContent = 'Meus Jogos';
    }
    if (tpb.style.backgroundColor === 'orangered' || tpb.style.backgroundColor === '') {
        tp.style.color = 'black';
        tpb.style.backgroundColor = 'white';
        tpb.style.border = '5px solid black';
    }
    else {
        tp.style.color = 'purple';
        tpb.style.backgroundColor = 'orangered';
        tpb.style.border = '5px solid purple';
    }
}
    finalb.onmouseover = function() {
        final.textContent = 'Obrigado por ver a página!';
    }
    finalb.onmouseout = function() {
        final.textContent = 'Passe o mouse aqui';
    }
    document.onkeydown = function(event) {
        if (event.key === 'h' || event.key === 'H') {
            if (ph.style.display === 'block' || ph.style.display === '') {
                ph.style.display = 'none';
            }
            else {
                ph.style.display = 'block';
            }
        }
    }
    
