(function () {
    const skills = document.querySelector('.skills');

    console.log("Progrmador:\n %cGarving", "color:#00ff00; font-size: 2rem; font-weight: bold");

    if ( skills ) {
        const main = document.querySelector('.bg-main');

        if (window.innerWidth < 767) {
            main.style.setProperty('height', '100%', 'important');
        }
    }

    // Local Storage para transicion de primera visita a mi portafolio
    window.onload = function() {
        // Comprueba si la animación ya se ha ejecutado
        if (!localStorage.getItem('animationPlayed')) {
            // Si no se ha ejecutado, añade la clase 'fade-in' al body
            document.body.classList.add('fade-in');
    
            // Guarda un indicador en localStorage para saber que la animación ya se ha ejecutado
            localStorage.setItem('animationPlayed', true);
        }
    }
})();

function cambiarIdioma() {
    var parrafo = document.querySelector('.justificado p');
  
    if (parrafo.textContent.includes("I am a Full Stack Web Developer")) {
      // Cambiar a español
      parrafo.innerHTML = `Soy un <strong>desarrollador Web Full Stack</strong> con tecnologías como <strong>MERN: MongoDB, Express.js, React.js, Node.js</strong>. Mi objetivo es crear soluciones web para situaciones o entornos específicos o generales.
      Además de mis habilidades en JavaScript, tengo una base en <strong>C#, .NET y manejo de bases de datos SQL y NOSQL</strong>, lo que me permite colaborar con diferentes desarrolladores en distintos entornos y así, comprender la interacción entre frontend y backend. En la actualidad, estoy estudiando <strong>Ingeniería en Software</strong>. Estoy emocionado por aplicar mis habilidades y conocimientos para resolver desafíos en el mundo real. En el futuro, deseo especializarme y así contribuir más a diferentes tipos de desarrollos.`;
    } else {
      // Cambiar a inglés
      parrafo.innerHTML = `I am a <strong>Full Stack Web Developer</strong> with technologies like <strong>MERN: MongoDB, Express.js, React.js, Node.js</strong>. My goal is to create web solutions for specific or general situations or environments.
      In addition to my skills in JavaScript, I have a foundation in <strong>C#, .NET, and SQL and NoSQL database management</strong>, which allows me to collaborate with different developers in various environments and thus understand the interaction between frontend and backend. Currently, I am studying <strong>Software Engineering</strong>. I am excited to apply my skills and knowledge to solve real-world challenges. In the future, I aim to specialize further and contribute more to different types of developments.`;
    }
  }