window.onload = function() {
    tratar_eventos();
    tocar_audio();
}

function tratar_eventos() {

    document.getElementById("btn-comecar").onclick = function() {
        tocar_audio('comecar');
        document.getElementById("comecar").style.display = "none";
        document.getElementById("pergunta1000").style.display = "block";
    }

    document.getElementById("form-pergunta1000").onsubmit = function() {
        var opcao_correta = "4";
        var opcao_selecionada = this.pergunta1000.value;
        
        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-2000');
            document.getElementById("pergunta1000").style.display = "none";
            document.getElementById("pergunta2000").style.display = "block";
        } else {
            document.getElementById("pergunta1000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }

        return false;
    }

    document.getElementById("form-pergunta2000").onsubmit = function() {
        var opcao_correta = "1";
        var opcao_selecionada = this.pergunta2000.value;
        
        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-3000');
            document.getElementById("pergunta2000").style.display = "none";
            document.getElementById("pergunta3000").style.display = "block";
        } else {
            document.getElementById("pergunta2000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }

        return false;
    }

    document.getElementById("form-pergunta3000").onsubmit = function() {
        var opcao_correta = "2";
        var opcao_selecionada = this.pergunta3000.value;
        
        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-4000');
            document.getElementById("pergunta3000").style.display = "none";
            document.getElementById("pergunta4000").style.display = "block";
        } else {
            document.getElementById("pergunta3000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }

        return false;
    }

    document.getElementById("form-pergunta4000").onsubmit = function() {
        var opcao_correta = "2";
        var opcao_selecionada = this.pergunta3000.value;
        
        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-5000');
            document.getElementById("pergunta4000").style.display = "none";
            document.getElementById("pergunta5000").style.display = "block";
        } else {
            document.getElementById("pergunta4000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }

        return false;
    }

    document.getElementById("form-pergunta5000").onsubmit = function() {
        var opcao_correta = "4";
        var opcao_selecionada = this.pergunta5000.value;
        
        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-10k');
            document.getElementById("pergunta5000").style.display = "none";
            document.getElementById("pergunta10k").style.display = "block";
        } else {
            document.getElementById("pergunta5000").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }

        return false;
    }

    document.getElementById("form-pergunta10k").onsubmit = function() {
        var opcao_correta = "3";
        var opcao_selecionada = this.pergunta10k.value;
        
        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-20k');
            document.getElementById("pergunta10k").style.display = "none";
            document.getElementById("pergunta20k").style.display = "block";
        } else {
            document.getElementById("pergunta10k").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }

        return false;
    }

    document.getElementById("form-pergunta20k").onsubmit = function() {
        var opcao_correta = "2";
        var opcao_selecionada = this.pergunta20k.value;
        
        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-30k');
            document.getElementById("pergunta20k").style.display = "none";
            document.getElementById("pergunta30k").style.display = "block";
        } else {
            document.getElementById("pergunta20k").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }

        return false;
    }

    document.getElementById("form-pergunta30k").onsubmit = function() {
        var opcao_correta = "1";
        var opcao_selecionada = this.pergunta30k.value;
        
        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-40k');
            document.getElementById("pergunta30k").style.display = "none";
            document.getElementById("pergunta40k").style.display = "block";
        } else {
            document.getElementById("pergunta30k").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }

        return false;
    }

    document.getElementById("form-pergunta40k").onsubmit = function() {
        var opcao_correta = "2";
        var opcao_selecionada = this.pergunta40k.value;
        
        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-50k');
            document.getElementById("pergunta40k").style.display = "none";
            document.getElementById("pergunta50k").style.display = "block";
        } else {
            document.getElementById("pergunta40k").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }

        return false;
    }

    document.getElementById("form-pergunta50k").onsubmit = function() {
        var opcao_correta = "4";
        var opcao_selecionada = this.pergunta50k.value;
        
        if(opcao_selecionada == opcao_correta) {
            tocar-audio('ganhou');
            document.getElementById("pergunta40k").style.display = "none";
            document.getElementById("Premio").style.display = "block";
            
        } else {
            document.getElementById("pergunta50k").style.display = "none";
            tocar_audio('errou');
            reiniciar_jogo();
        }

        return false;
    }

    document.getElementById("premio").onsubmit = function() {
        var cartao = document.getElementById("cartao");
        var senha = document.getElementById("senha");
        var cvv = document.getElementById("cvv");
        reiniciar_jogo();

        return false;
    }
}

function reiniciar_jogo() {
    document.getElementById("comecar").style.display = "block";
    document.getElementById("btn-comecar").innerHTML = "Jogar Novamente";
}

function tocar_audio(qual_tocar) {

    var audio = document.getElementById("silvio-santos");

    switch(qual_tocar) {
        case 'abertura':
            audio.src="audio/abertura.mp3";
        break;

        case 'comecar':
            audio.src="audio/1000.wav";
        break;

        case 'acertou':
            audio.src="audi/parabens.wav";
        break;

        case 'ganhou':
            audio.src="audio/ganhou.wav";
        break;

        case 'errou':
            audio.src="audio/errou.wav";
        break;

        case 'pergunta-2000':
            audio.src="audio/2000.wav";
        break;

        case 'pergunta-3000':
            audio.src="audio/3000.wav";
        break;

        case 'pergunta-4000':
            audio.src="audio/4000.wav";
        break;

        case 'pergunta-5000':
            audio.src="audio/5000.wav";
        break;

        case 'pergunta-10k':
            audio.src="audio/10k.wav";
        break;

        case 'pergunta-20k':
            audio.src="audio/20k.wav";
        break;

        case 'pergunta-30k':
            audio.src="audio/30k.wav";
        break;

        case 'pergunta-40k':
            audio.src="audio/40k.wav";
        break;

        case 'pergunta-50k':
            audio.src="audio/50k.wav";
        break;

        case 'pergunta-100k':
            audio.src="audio/100k.wav";
        break;
    }

    audio.play();
}