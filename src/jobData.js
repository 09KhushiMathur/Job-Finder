import { searchDetails } from "./searchDetails";
export const jobData = (finalData) => {
    // 1. tableBody ko loop se BAHAR nikalo
    const tableBody = document.querySelector("#tableBody");

    if (!tableBody) {
        return;
    }
    finalData.forEach(curr => {
        const { title, location, organization, id } = curr;
        const row = document.createElement("tr");
        row.dataset.id = id;



        row.innerHTML = `<td><a href="information.html?id=${id}" class="anchor">${title}</a>
        </td><td>${organization}</td>`;
        row.addEventListener("click", (e) => {
            if (e.target.classList.contains("anchor")) {
                e.preventDefault();
                window.location.href = `information.html?id=${id}`;
                console.log(e.target);
            } else {
                console.log("no")
            }
        });

        tableBody.append(row);
    });
};







