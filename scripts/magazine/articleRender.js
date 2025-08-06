function renderAllArticles() {
  const container = document.getElementById("articlesContainer");
  container.innerHTML = window.articles.map(renderArticleCard).join("");
}

function renderArticleCard(article) {
  const imgSrc = `/media/${article.imageId}`;

  return `
    <div class="my-7 mx-5 flex sm:flex-row flex-col items-center justify-evenly">
      <img src="${imgSrc}" class="sm:h-[40vh] h-[35vh] sm:my-0 my-2" alt="${article.title}" loading="lazy" />

      <div class="h-[100%] flex flex-col sm:ml-5 justify-around sm:items-end items-center">
        <h1 class="font-sans text-xl sm:text-3xl font-bold palestine-font text-center sm:text-start" dir="rtl">
          ${article.title}
        </h1>

        <p class="leading-relaxed sm:text-base text-2xs text-center sm:text-start my-2 palestine-font" dir="rtl">
          ${article.shortDescription}
        </p>

        <div class="text-center w-full items-center text-black my-5">
          <button onclick="openArticle('${article.id}')"
            class="cursor-pointer sm:text-base text-2xs font-abril rounded-2xl sm:mr-3.5 mr-2 md:px-10 px-6 py-1 bg-[var(--color-yellow-minders)] hover:drop-shadow-[0px_7px_4px_rgba(255,255,255,0.35)]">
            Read
          </button>

          <a href="${article.downloadUrl}" target="_blank" download>
            <button class="cursor-pointer sm:text-base text-2xs font-abril rounded-2xl md:px-7 px-3 py-1 bg-[var(--color-yellow-minders)] hover:drop-shadow-[0px_7px_4px_rgba(255,255,255,0.35)]">
              Save me
            </button>
          </a>
        </div>
      </div>
    </div>
  `;
}

function openArticle(id) {
  window.location.href = `post.html?id=${id}`;
}
