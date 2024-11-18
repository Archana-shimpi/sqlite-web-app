async function loadData() {
    const response = await fetch('/data');
    const data = await response.json();
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
  }
  