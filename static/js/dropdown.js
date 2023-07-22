// Function to hide categories on page load
function hideCategoriesOnLoad() {
  const categoryProjects = document.querySelectorAll(".box .category .column");

  categoryProjects.forEach((projects) => {
    projects.style.display = "none"; // Hide the category projects on page load
  });
}

// Call the function to hide categories when the site loads
window.addEventListener("load", hideCategoriesOnLoad);

// Add an event listener to each category to toggle its projects on click
const projectCategories = document.querySelectorAll(".box .category");

projectCategories.forEach((category) => {
  const categoryTitle = category.querySelector(".title");
  const categoryProjects = category.querySelector(".column");
  const dropdownArrow = categoryTitle.querySelector(".dropdown-arrow");

  category.addEventListener("click", () => {
    // Toggle visibility of the category's projects
    if (categoryProjects.style.display === "none") {
      categoryProjects.style.display = ""; // Or whatever display style you want to use
      dropdownArrow.classList.add("expanded");
    } else {
      categoryProjects.style.display = "none";
      dropdownArrow.classList.remove("expanded");
    }
  });
});
