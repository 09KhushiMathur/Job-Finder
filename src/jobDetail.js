export const renderJobInformation = async () => {
    const params = new URLSearchParams(window.location.search);
    const jobId = params.get("id");

    if (!jobId) return;

    try {
        // const res = await fetch("https://devglobaljobs.com/api/v1/jobs?limit=10&category=technology");
        const resp = await res.json();
        const jobs = resp.jobs || resp;

        const selectedJob = jobs.find(job => job.id == jobId);

        if (selectedJob) {
            if (document.querySelector(".tittle")) document.querySelector(".tittle").textContent = ` Title: ${selectedJob.title }`|| N/A;
            if (document.querySelector(".organization")) document.querySelector(".organization").textContent = `Organization: ${selectedJob.organization}` || "N/A";
            if (document.querySelector(".location")) document.querySelector(".location").textContent = `Location: ${selectedJob.location}` || "N/A";
            if (document.querySelector(".category")) document.querySelector(".category").textContent = `Categort: ${selectedJob.category}` || "N/A";
            if (document.querySelector(".closingDate")) document.querySelector(".closingDate").textContent = `Closing-Date: ${selectedJob.closingDate}` || "N/A";
            if (document.querySelector(".description")) document.querySelector(".description").textContent = `Description: ${selectedJob.descriptionExcerpt}` || "N/A";
            if (document.querySelector(".skill")) document.querySelector(".skill").textContent = `Skill-Category: ${selectedJob.skillCategory}`|| "N/A";
            if (document.querySelector(".jobType")) document.querySelector(".jobType").textContent = `Job-Type: ${selectedJob.jobType}`|| "N/A";
        }
    } catch (error) {
        console.log("Error loading details:", error);
    }
};