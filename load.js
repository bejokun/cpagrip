fetch("https://bejokun.github.io/cpagrip/popku.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("body").innerHTML = data;
  });
