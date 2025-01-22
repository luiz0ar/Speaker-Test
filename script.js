setTimeout(() => {
    window.speechSynthesis.getVoices().forEach(function(voice) {
      console.log(voice.name, voice.lang);
    });
   }, 5000);

function lerTexto() {
    let mensagem = new SpeechSynthesisUtterance();
    let vozes = speechSynthesis.getVoices();
    mensagem.text = document.getElementById("texto-principal").innerHTML;
    mensagem.voice = vozes[1];
    mensagem.lang = "pt-BR";
    mensagem.volume = 1; 
    mensagem.rate = 1; 
    mensagem.pitch = 0.5; 
    speechSynthesis.speak(mensagem);
}
lerTexto();