fetch("https://bejokun.github.io/cpagrip/ouibounce-movi.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("body").innerHTML = data;
  });
