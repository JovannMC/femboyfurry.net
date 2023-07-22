// Get all project categories with their respective projects
const projectCategories = document.querySelectorAll(".box .category");

// Add an event listener to each category to toggle its projects on click
projectCategories.forEach((category) => {
	const categoryTitle = category.querySelector(".title");
	const categoryProjects = category.querySelector(".column");
	const dropdownArrow = categoryTitle.querySelector(".dropdown-arrow");

	category.addEventListener("click", () => {
		// Toggle visibility of the category's projects
		if (categoryProjects.classList.contains("project-hidden")) {
			categoryProjects.classList.remove("project-hidden");
			dropdownArrow.classList.add("expanded");
		} else {
			categoryProjects.classList.add("project-hidden");
			dropdownArrow.classList.remove("expanded");
		}
	});
});
