const NodeknowledgeItems = document.querySelectorAll(".knowl-items");
const ListKnowledgeItems = [...NodeknowledgeItems];

ListKnowledgeItems.forEach((x) => {
  x.addEventListener("click", function (e) {
    const dropdown = this.querySelector(".dropdown");

    dropdown.style.transform =
      dropdown.style.transform === "" ? "scaleY(1)" : "";
  });
});
