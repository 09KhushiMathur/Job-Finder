import { jobDetaileInfo } from "./jobDetaileInfo";
export const companyIfo = async (data) => {
    const filteredJobs = [...new Set(data.map((curr) => {
        return curr.organization.trim();
    }))];
    console.log(filteredJobs);


   
    let jobIfo = document.querySelector(".jobIfo");
    const template = document.querySelector("template");
    
    jobIfo.innerHTML = "";
    
    filteredJobs.forEach((curr) => {
        const cardClone = template.content.cloneNode(true);
        cardClone.querySelector("#job").textContent = curr;
        const firstLetter = curr.trim().charAt(0).toUpperCase();
        cardClone.querySelector(".companyLogo").textContent = firstLetter;
        console.log(firstLetter);
        
        let button = cardClone.querySelector("#jobBtn");
        button.addEventListener("click",()=>{
            const filteredCompanyJobs = data.filter((job) => job.organization.trim() === curr);
            jobDetaileInfo(filteredCompanyJobs);
        })
        jobIfo.append(cardClone);
    });

}