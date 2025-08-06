document.addEventListener("DOMContentLoaded", () => {
  const id = new URLSearchParams(window.location.search).get("id");
  const article = window.articles.find((a) => a.id === id);

  if (!article) {
    document.getElementById("post-content").innerHTML =
      "<p>المقال غير موجود.</p>";
    return;
  }

  document.getElementById("post-image").src = `../../media/${article.imageId}`;
  document.getElementById("post-title").textContent = article.title;
  document.getElementById("post-content").innerHTML = article.fullContent;
  document.getElementById("post-date").textContent = `Date / ${article.date}`;
  document.getElementById(
    "post-author"
  ).innerHTML = `Author / ${article.author}`;
  document.getElementById(
    "post-eTime"
  ).innerHTML = `Time to finish / ${article.eTime}`;
  const content = document.getElementById("p-container");
  content.innerHTML = window.articles
    .slice(0, 2)
    .map((e) => {
      if (e.id != article.id) {
        const isrc = `../../media/${e.imageId}`;
        return `<div class="text-center cursor-pointer w-[30%] m-5 block" onclick="openArticle('${e.id}')">
          
              <img id="p-image" class="m-3" src="${isrc}" alt="${e.title}" />
          
          <h1 class="palestine-font sm:text-3xl text-lg" id="p-title">${e.title}</h1>
        </div>`;
      }
    })
    .join("");
});
