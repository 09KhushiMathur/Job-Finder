import './style.css';
import { getData } from "./getData.js";
import { searchDetails } from "./searchDetails.js";
import { helpSection } from './helpSection.js';
import { companyIfo } from './company.js';
const run = async () => {
    const data = await getData(); // Yahan se data mila

    // Yeh apiData hi searchDetails.js mein parameter (data) ke roop mein jata hai
    searchDetails(data);
    helpSection(data);
}
const run1 = async()=>{
    const data = await getData();
    companyIfo(data);
    
}
run1();
run();



