const contentDiv = document.querySelector(".content");
const part1 = document.querySelector(".part1");
const part2 = document.querySelector(".part2");

part1.addEventListener("click", () => {
    contentDiv.innerHTML = `
                <h2>Part 1 Content</h2>
                <h2><a href="part1.ipynb" download> Download Notebook</h2>
                <iframe src="part1.html" ></iframe>
            `;
});

part2.addEventListener("click", () => {
    contentDiv.innerHTML = `
                <h2>Part 2 Content</h2>
                <h2><a href="part2.ipynb" download> Download Notebook</h2>
                <iframe src="part2.html" ></iframe>
            `;
});