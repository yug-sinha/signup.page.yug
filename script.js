function nextPage() {
  var name = document.getElementById('name').value;
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var agree = document.getElementById('agree').checked;

  if (name && username && email && password && agree) {
    window.location.href = 'welcome.html';
  } else {
    alert('Please fill in all fields and agree to the terms of service.');
  }
}

function chooseFile() {
  document.getElementById('fileInput').click();
}

function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const circularImage = document.getElementById('circularImage');
      circularImage.style.backgroundImage = `url('${e.target.result}')`;
    }
    reader.readAsDataURL(file);
  }
}

function nextPageWelcome() {
  var location = document.getElementById('location').value;

  if (location) {
    window.location.href = 'choose-purpose.html';
  } else {
    alert('Please enter your location.');
  }
}

function selectPurpose(purpose) {
  // Handle purpose selection (if needed)
}

function finish() {
  // Handle finish button click (if needed)
}
