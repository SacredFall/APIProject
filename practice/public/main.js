document.addEventListener("DOMContentLoaded", () => {
  const apiURL = "https://api.github.com/users";
  const itemList = document.getElementById("item-list");
  const generateButton = document.getElementById("generate-button");

  async function fetchRandomUser() {
    const response = await fetch(
      `${apiURL}?since=${Math.floor(Math.random() * 1000)}`
    );
    const users = await response.json();
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const userResponse = await fetch(randomUser.url);
    const userData = await userResponse.json();
    renderitem(userData);
  }

  function renderitem(item) {
    itemList.innerHTML = `
          <div class="class="flex w-1/4 h-1/4 rounded-full border-2 border-gray-300">
              <img src="${item.avatar_url}" >
                <a href="${item.html_url}" target="_blank">${item.html_url}</a>
          </div>


        `;
  }

  generateButton.addEventListener("click", () => {
    fetchRandomUser();
    console.log("Button clicked");
  });
});
