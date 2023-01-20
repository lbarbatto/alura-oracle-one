//Instancia uma matriz com as chaves para emcriptação. 
const matrizChave = [["e", "enter"], ["i" , "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

//Constante que recebe o texto de entrada.
const textoEntrada = document.getElementById("texto-entrada")
textoEntrada.focus();

//Função que troca a exibição no retângulo lateral - imagem pela mensagem.
function mostraTexto(esconde, mostra) {
    document.getElementById(esconde).style.display = 'none';
    document.getElementById(mostra).style.display = 'block';             
}

//Funçaõ de acionamento do botão para criptografar
function btCriptografar() {
    //Chama a função para criptografar passando o texto de entrada como argumento.
    const mensagemFinal = criptografar(textoEntrada.value);
    document.getElementById("mensagem-manipulada").innerHTML = mensagemFinal;
    textoEntrada.value = "";
}

//Funçaõ de acionamento do botão para descriptografar
function btDesriptografar() {
    //Chama a função para descriptografar passando o texto de entrada como argumento.
    const mensagemFinal = descriptografar(textoEntrada.value);
    document.getElementById("mensagem-manipulada").innerHTML = mensagemFinal;
    textoEntrada.value = "";
}

function criptografar(mensagem) {
    //Chamada da Função que troca a exibição no retângulo lateral - imagem pela mensagem.
    mostraTexto('retangulo-inicio', 'retangulo-mensagem');

    // Passa toda mensagem para letra minuscula.
    mensagem = mensagem.toLowerCase();

    //Para cada uma das 5 chaves o laço percorre a mensagem trocando as letras que encontra.
    for (let i = 0; i < matrizChave.length; i++) {
        if (mensagem.includes(matrizChave[i][0])) {
            mensagem = mensagem.replaceAll(matrizChave[i][0], matrizChave[i][1]);            
        }        
    }
    // Retorna a mensagem modificada.
    return mensagem;
}

function descriptografar(mensagem) {
    //Chamada da Função que troca a exibição no retângulo lateral - imagem pela mensagem.
    mostraTexto('retangulo-inicio', 'retangulo-mensagem');

    // Passa toda mensagem para letra minuscula.
    mensagem = mensagem.toLowerCase();

    //Para cada uma das 5 chaves o laço percorre a mensagem trocando as letras que encontra.
    for (let i = 0; i < matrizChave.length; i++) {
        if (mensagem.includes(matrizChave[i][1])) {
            mensagem = mensagem.replaceAll(matrizChave[i][1], matrizChave[i][0]);            
        }        
    }
    // Retorna a mensagem modificada.
    return mensagem;
}
//Função para copiar a mensagem manipulada, exibida na área de saída.
function copiarMensagem() {
    var mensagemCopiada = document.getElementById("mensagem-manipulada");
    mensagemCopiada.select();
    mensagemCopiada.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(mensagemCopiada.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiado: " + mensagemCopiada.value;
}
//Função tooltip para dar feedback pro usuário quando copiar a mensagem.
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiar para clipboard";
}

//Instanciação dos botões e definição das funções chamadas pelos eventos onclick.
var btCripta = document.getElementById("bt-criptografar");
btCripta.onclick = btCriptografar;

var btDescripta = document.getElementById("bt-descriptografar");
btDescripta.onclick = btDesriptografar;


	



    