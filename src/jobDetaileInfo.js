export const jobDetaileInfo = (filteredCompanyJobs) => {
    console.log(filteredCompanyJobs);
    const template = document.querySelector("#temp");
    const finalResult = document.querySelector(".finalResult");
    finalResult.innerHTML = "";


    filteredCompanyJobs.forEach((curr) => {
        const { title, location, descriptionExcerpt, jobType, category, organization, skillCategory, closingDate, url } = curr;

        const cardClone = template.content.cloneNode(true);
        cardClone.querySelector(".title").textContent=`${title || "N/A"}`;
        cardClone.querySelector(".jobType").textContent = `${jobType || "N/A"}`;
        cardClone.querySelector(".category").textContent = `${category || "N/A"}`;
        cardClone.querySelector(".location").textContent = `${location || "N/A"}`;
        cardClone.querySelector(".organization").textContent = `${organization || "N/A"}`;
        cardClone.querySelector(".description").textContent = `${descriptionExcerpt || "N/A"}`;
        cardClone.querySelector(".skill").textContent = `${skillCategory || "N/A"}`;
        cardClone.querySelector(".closingDate").textContent = `${closingDate || " N/A"}`;

        const applyLink = cardClone.querySelector(".applyUrl a");
        if (applyLink) {
            applyLink.href = url || "#";
            applyLink.textContent = "Apply Now"; // Optional: link text agar khali ho
        }
        finalResult.append(cardClone);
    });

}