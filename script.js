//documenta el codigo de javascript

document.getElementById('loadButton').addEventListener('click', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.json', true);

  xhr.onload = function() {
      if (this.status === 200) {
          var data = JSON.parse(this.responseText);
          var output = '<ul>';
          data.forEach(function(item) {
              output += '<li>' + item.nombre + ': ' + item.profesion + '</li>';
          });
          output += '</ul>';
          document.getElementById('data').innerHTML = output;
      }
  };

  xhr.send();
});

document.getElementById('loadButton2').addEventListener('click', async function() {
  try {
      const response = await fetch('data.json');
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      let output = '<ul>';
      data.forEach(item => {
          output += `<li>${item.nombre}: ${item.profesion}</li>`;
      });
      output += '</ul>';

      document.getElementById('data2').innerHTML = output;
  } catch (error) {
      console.error('Error al cargar los datos:', error);
  }
});