fetch("https://bejokun.github.io/cpagrip/movie.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("body").innerHTML = data;
  });
