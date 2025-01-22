setTimeout(() => {
    window.speechSynthesis.getVoices().forEach(function(voice) {
      console.log(voice.name, voice.lang);
    });
   }, 5000);

function lerTexto(button) {
    let mensagem = new SpeechSynthesisUtterance();
    let vozes = speechSynthesis.getVoices();
    if (button === "all") {
        let valueByClass = document.getElementsByClassName("textoLeitura");
        for (let i = 0; i < valueByClass.length; i++) {
            mensagem.text += `${valueByClass[i].textContent} `;
        }
    } else {
        let parentElement = button.parentElement;
        let textoElemento = parentElement.querySelector(".textoLeitura").textContent;
        mensagem.text = textoElemento.trim();
    }
    
    console.log(mensagem.text);
    mensagem.voice = vozes[1];
    mensagem.lang = "pt-BR";
    mensagem.volume = 1; 
    mensagem.rate = 1; 
    mensagem.pitch = 0.5; 
    speechSynthesis.speak(mensagem);
}
lerTexto();