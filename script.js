setTimeout(() => {
    window.speechSynthesis.getVoices().forEach(function(voice) {
      console.log(voice.name, voice.lang);
    });
   }, 5000);

function lerTexto(control) {
    let mensagem = new SpeechSynthesisUtterance();
    let vozes = speechSynthesis.getVoices();
    valueByClass = document.getElementsByClassName("textoLeitura");
    if(control === "all"){
        for (let i = 0; i < valueByClass.length; i++) {
            mensagem.text += `${valueByClass[i].textContent} `;
          }
    }else{
        mensagem.text = valueByClass[0].textContent;
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