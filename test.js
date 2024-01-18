function extractCodeWarsAPI() {
  return fetch("https://www.codewars.com/api/v1/users/A-Bahadory").then(
    (res) => {
      if (!res.ok) {
        return "Error";
      } else {
        return res.json();
      }
    }
  );
}

const template = document.querySelector("template").content.cloneNode(true);

function codewarsCardDesign() {
  extractCodeWarsAPI().then((data) => {
    template.querySelector("h1").textContent = `NAME: ${data.name}`;
    template.querySelector("h2").textContent = `USER-NAME: ${data.username}`;
    template.querySelector("h3").textContent = `USER-ID: ${data.id}`;
    document.body.append(template);
  });
}
// function codewarsCardDesign() {
//   extractCodeWarsAPI().then((data) => {
//     const h1Tag = document.createElement("h1");
//     h1Tag.textContent = data.name;

//     cardLayout.appendChild(h1Tag);
//   });
// }

// function render(data) {
//   const test = document.createElement("p");
//   test.textContent = data.name;
//   document.body.appendChild(test);
// }

window.onload = codewarsCardDesign;
