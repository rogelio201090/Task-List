
urlAPI = "https://api.icndb.com/jokes/random";


document.querySelector(".button1").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector("input[type=number]").value;

  const xhr = new XMLHttpRequest();

  url = `${urlAPI}/${number}`;

  xhr.open("GET", url, true);


  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      //console.log(this.responseText);


      let output = "";

      if (response.type === "success") {
        response.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += `<li> Something Went Wrong!</li>`;
      }
      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}

document.querySelector(".button2").addEventListener("click", getMyJokes);

function getMyJokes(e) {
  const number = document.querySelector("input[type=number]").value;
  FirstName = document.getElementById("first-name").value;
  let URL2 = "https://api.icndb.com/jokes/random/" +
  number +
  "?firstName=" +
  FirstName;
  //("&amp;lastName=").remove;


  const xhr2 = new XMLHttpRequest();

  url = `${urlAPI}/${number}`;

  xhr2.open("GET", URL2, true);

  
  xhr2.onload = function() {
    if (this.status === 200) {
      const response2 = JSON.parse(this.responseText);
      


      let output2 = "";

      if (response2.type === "success") {
        response2.value.forEach(function(joke) {
          output2 += `<li>${joke.joke}</li>`;
        });
      } else {
        output += `<li> Something Went Wrong!</li>`;
      }
      document.querySelector(".jokes").innerHTML = output2;
    }
  };

  xhr2.send();

  e.preventDefault();
}

