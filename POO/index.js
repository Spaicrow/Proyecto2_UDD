class Encuesta {
    constructor() {
      this.preguntas = [];
      this.respuestas = [];
    }
  
    agregarPregunta(pregunta, opciones) {
      this.preguntas.push({ pregunta, opciones, resultados: Array.from({ length: opciones.length }, () => 0) });
    }
  
    votar() {
      const encuestaContainer = document.getElementById('encuesta-container');
      const opcionesSeleccionadas = encuestaContainer.querySelectorAll('input[type="radio"]:checked');
  
      opcionesSeleccionadas.forEach((opcion) => {
        const preguntaIndex = parseInt(opcion.getAttribute('data-pregunta-index'));
        const opcionIndex = parseInt(opcion.value);
        this.preguntas[preguntaIndex].resultados[opcionIndex]++;
        this.respuestas.push({ preguntaIndex, opcionIndex });
      });
  
      mostrarResultados();
    }
  
    obtenerResultados() {
      return this.preguntas.map((pregunta, index) => {
        const totalVotos = pregunta.resultados.reduce((total, voto) => total + voto, 0);
        return {
          pregunta: pregunta.pregunta,
          opciones: pregunta.opciones.map((opcion, opcIndex) => {
            const porcentaje = (pregunta.resultados[opcIndex] / totalVotos) * 100 || 0;
            return { opcion, votos: pregunta.resultados[opcIndex], porcentaje: porcentaje.toFixed(2) };
          })
        };
      });
    }
  }
  
  const encuesta = new Encuesta();
  
  function agregarPreguntas(event) {
    event.preventDefault();
  
    const preguntasList = document.getElementById('preguntas-list');
    const preguntasInputs = preguntasList.querySelectorAll('input[name="pregunta"]');
    const opcionesInputs = preguntasList.querySelectorAll('input[name^="opciones-"]');
  
    preguntasInputs.forEach((preguntaInput, index) => {
      const pregunta = preguntaInput.value;
      const opciones = opcionesInputs[index].value.split(',');
  
      encuesta.agregarPregunta(pregunta, opciones);
    });
  
    renderizarEncuesta();
  }
  
  function renderizarEncuesta() {
    const encuestaContainer = document.getElementById('encuesta-container');
    encuestaContainer.innerHTML = '';
  
    encuesta.preguntas.forEach((pregunta, index) => {
      const preguntaElement = document.createElement('div');
      preguntaElement.innerHTML = `
        <h3>${pregunta.pregunta}</h3>
        <ul>
          ${pregunta.opciones.map((opcion, opcIndex) => `
            <li>
              <label>
                <input type="radio" name="pregunta-${index}" value="${opcIndex}" data-pregunta-index="${index}">
                ${opcion}
              </label>
            </li>
          `).join('')}
        </ul>`;
      encuestaContainer.appendChild(preguntaElement);
    });
  
    const votarBtn = document.getElementById('votar-btn');
    votarBtn.style.display = 'block';
  }
  
  function votar() {
    encuesta.votar();
    const votarBtn = document.getElementById('votar-btn');
    votarBtn.style.display = 'none';
  }
  
  function mostrarResultados() {
    const resultados = encuesta.obtenerResultados();
    const encuestaContainer = document.getElementById('encuesta-container');
    encuestaContainer.innerHTML += '<h2>Resultados</h2>';
    resultados.forEach((preguntaResultados) => {
      encuestaContainer.innerHTML += `<h3>${preguntaResultados.pregunta}</h3>`;
      preguntaResultados.opciones.forEach((opcion) => {
        encuestaContainer.innerHTML += `<p>${opcion.opcion}: ${opcion.votos} votos (${opcion.porcentaje}%)</p>`;
      });
    });
  }
  
  document.getElementById('preguntas-form').addEventListener('submit', agregarPreguntas);
  
  // Agregar automáticamente 8 campos de preguntas al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    const preguntasList = document.getElementById('preguntas-list');
    for (let i = 0; i < 8; i++) {
      const preguntaInput = document.createElement('input');
      preguntaInput.type = 'text';
      preguntaInput.name = 'pregunta';
      preguntaInput.placeholder = `Pregunta ${i + 1}`;
      preguntasList.appendChild(preguntaInput);
      
      const opcionesInput = document.createElement('input');
      opcionesInput.type = 'text';
      opcionesInput.name = `opciones-${i}`;
      opcionesInput.placeholder = 'Opciones de respuesta (separadas por coma)';
      preguntasList.appendChild(opcionesInput);
      
      preguntasList.appendChild(document.createElement('br'));
    }
  });
  