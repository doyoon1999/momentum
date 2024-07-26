document
  .getElementById("bookmarkForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    addLink();
  });

function toggleFavorites() {
  const box = document.getElementById("favoritesBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
  displayLinks();
}

function closeFavorites() {
  const box = document.getElementById("favoritesBox");
  box.style.display = "none";
}

function displayLinks() {
  const list = document.getElementById("linkList");
  const links = JSON.parse(localStorage.getItem("favorites")) || [];
  list.innerHTML = ""; // Clear the list first
  links.forEach((link, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.title; // Use the title for display
    a.target = "_blank"; // Open in a new tab
    li.appendChild(a);
    li.appendChild(a);
    list.appendChild(li);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.onclick = () => confirmDelete(index);
    li.appendChild(deleteButton);
  });
}

function addLink() {
  const name = document.getElementById("linkName").value;
  const url = document.getElementById("linkUrl").value;
  if (!url || !name) return; // Ensure both fields are filled

  const newLink = {
    title: name,
    url:
      url.startsWith("http://") || url.startsWith("https://")
        ? url
        : `https://${url}`,
  };

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.push(newLink);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  displayLinks();

  document.getElementById("linkName").value = "";
  document.getElementById("linkUrl").value = "";
}

function confirmDelete(index) {
  if (confirm("진짜 지울거에용?😄")) {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    favorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    displayLinks();
  }
}

// Initialize display
displayLinks();
