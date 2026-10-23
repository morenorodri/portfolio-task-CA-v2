async function data() {
    const ulParent = document.querySelector(".js-edu-taskList");

    const pLoading = document.createElement("p");
    pLoading.classList.add("loading");
    pLoading.textContent = "Laddar repositories... ⏳";
    pLoading.role = "status";
    pLoading.style.textAlign = "center";
    ulParent.append(pLoading);

    const pError = document.createElement("p");
    pError.classList.add("error");
    pError.role = "alert";
    pError.style.textAlign = "center";

    const pEmpty = document.createElement("p");
    pError.classList.add("message");
    pError.role = "status";
    pError.style.textAlign = "center";

    
    try {
        const respons = await fetch('json/cv.json');
        const data = await respons.json();

        if (data.lenght === 0) {
            pEmpty.textContent = "Den här användaren har inga publika repositories.";
            ulParent.append(pEmpty);
            return;
        }
        
        const educationJson = data.category[0].student;
        const experienceJson = data.category[1].worker;

        renderEducationList(educationJson);
        renderExperienceList(experienceJson);
    
    } catch (error) {
        console.error("Ett fel uppstod", error)

        pError.innerHTML = `Ett fel uppstod: ${error}`;
        ulParent.append(pError);

    } finally {
        pLoading.style.display = "none";
    }
}
data()



function renderEducationList(data) {
    const ulParent = document.querySelector(".js-edu-taskList");

    data.forEach((data, index) => {
        const liChild = document.createElement("li");
        const count = index + 1;

        if (count > 0) {
            liChild.innerHTML = `
                <details class="task">
                    <summary>
                        <span class="task-top">
                            <span class="task-title"> ${data.qualification} </span>
                            <span class="task-period"> ${data.time} </span>
                        </span>
                        <span class="task-details">
                            <span class="task-adress">
                                <span><img src="./img/icon/building-dark-icon.svg" alt=""> ${data.educator} </span>
                                <span><img src="./img/icon/location-dark-icon.svg" alt=""> ${data.city} </span>
                            </span>
                            <span class="task-date">
                                <img src="./img/icon/calendar-dark-icon.svg" alt="">
                                <time datetime="2026-08"> ${data.startDate} </time> -
                                <time datetime="2028-05"> ${data.endDate} </time>
                            </span>
                        </span>
                    </summary>
                    <p class="task-info"> ${data.letter} </p>
                </details>
            `;

        } else {
            console.log("none");
        }

        ulParent.appendChild(liChild);
    });
}



function renderExperienceList(data) {
    const ulParent = document.querySelector(".js-exp-taskList");

    data.forEach((data, index) => {
        const liChild = document.createElement("li");
        const count = index + 1;

        if (count > 0) {
            liChild.innerHTML = `
                <details class="task">
                    <summary>
                        <span class="task-top">
                            <span class="task-title"> ${data.role} </span>
                            <span class="task-period"> ${data.time} </span>
                        </span>
                        <span class="task-details">
                            <span class="task-adress">
                                <span><img src="./img/icon/building-dark-icon.svg" alt=""> ${data.workplace} </span>
                                <span><img src="./img/icon/location-dark-icon.svg" alt=""> ${data.city} </span>
                            </span>
                            <span class="task-date">
                                <img src="./img/icon/calendar-dark-icon.svg" alt="">
                                <time datetime="2026-08"> ${data.startDate} </time> -
                                <time datetime="2028-05"> ${data.endDate} </time>
                            </span>
                        </span>
                    </summary>
                    <p class="task-info"> ${data.letter} </p>
                </details>
            `;

        } else {
            console.log("none");
        }

        ulParent.appendChild(liChild);
    });
}