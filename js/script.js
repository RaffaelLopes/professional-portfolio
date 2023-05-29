// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
            
        }
        //  if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    //sticky header
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

   // animation footer on scroll
   let footer = document.querySelector('footer');

   footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}

// TESTANDO FORMULARIO

document.querySelector('#submit-button').addEventListener('click', function() {
    // Exibe um prompt com a mensagem "Mensagem enviada"
    var promptResult = prompt('Mensagem enviada');
  
    // Verifica se o usuário clicou em "OK" no prompt
    if (promptResult === null) {
      // Se o usuário clicou em "Cancelar" ou fechou o prompt, não faz nada
      return;
    }
  
    // Redireciona para a página home
    window.location.href="#home";
  });
  
		

