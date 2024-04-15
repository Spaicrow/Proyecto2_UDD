// Función para crear una pregunta y sus opciones de respuesta
function crearPregunta(pregunta, opciones) {
    return { pregunta, opciones, resultados: Array.from({ length: opciones.length }, () => 0) };
  }
  
  // Función para agregar una pregunta a la encuesta
  function agregarPregunta(encuesta, pregunta, opciones) {
    encuesta.push(crearPregunta(pregunta, opciones));
  }
  
  // Función para votar en una pregunta de la encuesta
  function votar(encuesta, preguntaIndex, opcionIndex) {
    encuesta[preguntaIndex].resultados[opcionIndex]++;
  }
  
  // Función para obtener los resultados de la encuesta
  function obtenerResultados(encuesta) {
    return encuesta.map((pregunta) => {
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
  
  // Función para renderizar la encuesta en el DOM
  function renderizarEncuesta(encuesta) {
    const encuestaContainer = document.getElementById('encuesta-container');
    encuestaContainer.innerHTML = '';
  
    encuesta.forEach((pregunta, index) => {
      const preguntaElement = document.createElement('div');
      preguntaElement.innerHTML = `
        <h3>${pregunta.pregunta}</h3>
        <ul>
          ${pregunta.opciones.map((opcion, opcIndex) => `
            <li>
              <label>
                <input type="radio" name="pregunta-${index}" value="${opcIndex}">
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
  
  // Función para mostrar los resultados de la encuesta en el DOM
  function mostrarResultados(resultados) {
    const encuestaContainer = document.getElementById('encuesta-container');
    encuestaContainer.innerHTML += '<h2>Resultados</h2>';
    resultados.forEach((preguntaResultados) => {
      encuestaContainer.innerHTML += `<h3>${preguntaResultados.pregunta}</h3>`;
      preguntaResultados.opciones.forEach((opcion) => {
        encuestaContainer.innerHTML += `<p>${opcion.opcion}: ${opcion.votos} votos (${opcion.porcentaje}%)</p>`;
      });
    });
  }
  
  // Función principal que maneja la lógica de la encuesta
  function main() {
    const encuesta = [];
  
    // Crear campos de entrada para preguntas y opciones
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
  
    // Agregar evento al botón "Crear Encuesta"
    document.getElementById('crear-encuesta-btn').addEventListener('click', () => {
      const preguntasInputs = preguntasList.querySelectorAll('input[name="pregunta"]');
      const opcionesInputs = preguntasList.querySelectorAll('input[name^="opciones-"]');
  
      preguntasInputs.forEach((preguntaInput, index) => {
        const pregunta = preguntaInput.value;
        const opciones = opcionesInputs[index].value.split(',');
  
        agregarPregunta(encuesta, pregunta, opciones);
      });
  
      renderizarEncuesta(encuesta);
    });
  
    // Agregar evento al botón "Votar"
    document.getElementById('votar-btn').addEventListener('click', () => {
      const opcionesSeleccionadas = document.querySelectorAll('input[type="radio"]:checked');
  
      opcionesSeleccionadas.forEach((opcion) => {
        const preguntaIndex = parseInt(opcion.getAttribute('name').split('-')[1]);
        const opcionIndex = parseInt(opcion.value);
        votar(encuesta, preguntaIndex, opcionIndex);
      });
  
      const resultados = obtenerResultados(encuesta);
      mostrarResultados(resultados);
      document.getElementById('votar-btn').style.display = 'none';
    });
  }
  
  // Llamar a la función principal al cargar la página
  document.addEventListener('DOMContentLoaded', main);
  