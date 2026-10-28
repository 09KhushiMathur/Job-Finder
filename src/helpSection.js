export const helpSection = (data) => {
    const filteredData = [...new Set(data.map((curr) => {
        return curr.title.toLowerCase().trim();
    }))]
    console.log(filteredData);

    helpSection.innerHtml = "";
    filteredData.forEach((ele) => {
        const searchjob = document.querySelector("#searchJob");

        let heplSection = document.querySelector(".help-section")
        let a = document.createElement("a");
        a.textContent = ele;
        a.href = "#";
        a.classList.add("userHelp");


        a.addEventListener("click", (e) => {
            e.preventDefault();
            searchjob.value = ele;
        });

        heplSection.append(a);
    });


}