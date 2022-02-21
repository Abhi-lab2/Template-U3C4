async function apiCall(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log("error: ", error);
  }
}

function appendArticles(articles, main) {
  articles.forEach((elem) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let img = document.createElement("img");
    img.src = elem.urlToImage;
    img.setAttribute("class", "img");

    let p = document.createElement("h4");
    p.innerHTML = elem.title;
    p.setAttribute("class", "p");

    let p1 = document.createElement("h5");
    p1.innerHTML = elem.title;
    p1.setAttribute("class", "p1");

    card.append(img, p, p1);

    card.onclick = () => {
      localStorage.setItem("elem", JSON.stringify(elem));
      window.location.href = "news.html";
    };
    main.append(card);
  });
}
export { apiCall, appendArticles };
