export const getData = async () => {
    try {
        const res = await fetch(
            "https://devglobaljobs.com/api/v1/jobs?limit=30&category=technology"
        );

        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }

        const resp = await res.json();

        return Array.isArray(resp.jobs) ? resp.jobs : [];

    } catch (error) {
        console.error("Error fetching jobs:", error);
        return [];
    }
};







// export const getData = async () => {
//     try {
//         const res = await fetch(
//             "https://devglobaljobs.com/api/v1/jobs?limit=30&category=technology"
//         );

//         const resp = await res.json();
//         // console.log(resp.jobs)
//         return resp.jobs;

//     }
//     catch (error) {
//         console.log("Error:", error);
//     }

// };












