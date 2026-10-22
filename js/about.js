async function data() {
    try {
        const respons = await fetch('json/cv.json');
        const data = await respons.json();
        
        const educationJson = data.category[0].student;
        const experienceJson = data.category[1].worker;

        console.log(educationJson);
        console.log(experienceJson);
    
    } catch (error) {
        console.error("kunde inte hämta filen", error)
    }
}
data()