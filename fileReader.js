const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', handleFile);

function handleFile(event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      console.log('File content:', e.target.result);
    };

    reader.readAsText(file);
  }
};
