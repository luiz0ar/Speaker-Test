setTimeout(() => {
    window.speechSynthesis.getVoices().forEach(function(voice) {
      console.log(voice.name, voice.lang);
    });
   }, 5000);

function lerTexto() {
    var mensagem = new SpeechSynthesisUtterance();
    mensagem.text = document.getElementById("texto-principal").innerHTML;
    speechSynthesis.speak(mensagem);
}
lerTexto();