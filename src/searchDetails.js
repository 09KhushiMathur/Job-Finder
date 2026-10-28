export const searchDetails = async (data) => {
    // console.log(data)

    const searchjob = document.querySelector("#searchJob");
    const searchBtn = document.querySelector("#searchBtn");
    const result = document.querySelector(".result");
    const template = document.querySelector("template");

    searchBtn.addEventListener("click", () => {
        let text = searchjob.value.toLowerCase().trim(); // Extra spaces hataane ke liye .trim()

        // 1. Purane results ko saaf karein taaki naye results overlap na ho
        result.innerHTML = "";

        // 2. Seedha data array par filter lagayein (titleArr ki zaroorat hi nahi hai)
        const filterData = data.filter((curr) => {
            return curr.title.toLowerCase().includes(text);
        });

        console.log("Filtered Data:", filterData);

        // Agar koi match nahi mila
        if (filterData.length === 0) {
            result.innerHTML = "<p>No jobs found matching your search.</p>";
            searchjob.value = "";
            return;
        }

        // 3. Filtered data ko render karein
        filterData.forEach((curr) => {
            const { title, location, descriptionExcerpt, jobType, category, organization, skillCategory, closingDate, url } = curr;

            const cardClone = template.content.cloneNode(true);
            cardClone.querySelector(".title").textContent = `${title || "N/A"}`;
            cardClone.querySelector(".jobType").textContent = `${jobType || "N/A"}`;
            cardClone.querySelector(".category").textContent = `${category || "N/A"}`;
            cardClone.querySelector(".location").textContent = `${location || "N/A"}`;
            cardClone.querySelector(".organization").textContent = `${organization || "N/A"}`;
            cardClone.querySelector(".description").textContent = `${descriptionExcerpt || "N/A"}`;
            cardClone.querySelector(".skill").textContent = `${skillCategory || "N/A"}`;
            cardClone.querySelector(".closingDate").textContent = `${closingDate ||" N/A"}`;

            const applyLink = cardClone.querySelector(".applyUrl a");
            if (applyLink) {
                applyLink.href = url || "#";
                applyLink.textContent = "Apply Now"; // Optional: link text agar khali ho
            }
            result.append(cardClone);
        });

        searchjob.value = "";
    });

}
