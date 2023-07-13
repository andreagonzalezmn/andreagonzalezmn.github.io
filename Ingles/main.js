let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 70,
});
 
typewriter
  .pauseFor(2000)
  .typeString('Diseñadora UX/UI y de Servicios')
  .pauseFor(2000)
  .deleteChars(10)
  .start();
