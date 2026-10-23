async function getGithubUser() {
    const ulParent = document.querySelector(".js-projectList");

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
        const response = await fetch("https://api.github.com/users/morenorodri/repos");
        if (!response.ok) throw new Error("kunde inte hämta användare");
        const data = await response.json();
        const reversedData = data.toReversed();

        if (data.lenght === 0) {
            pEmpty.textContent = "Den här användaren har inga publika repositories.";
            ulParent.append(pEmpty);
            return;
        }

        renderGithubData(reversedData);

    } catch (error) {
        console.error("Ett fel uppstod:", error);
        pError.innerHTML = `Ett fel uppstod: ${error}`;
        ulParent.append(pError);
        

    } finally {
        pLoading.style.display = "none";
    }
}
getGithubUser()



function renderGithubData(data) {
    const ulParent = document.querySelector(".js-projectList");

    data.forEach((data, index) => {
        const liChild = document.createElement("li");
        
        if (index <= 3 ) {
            liChild.innerHTML = `
                <div class="project-card">
                    <img src="./img/bild${index + 1}.jpg" alt="bild av en projektsida">
                    <div class="card-details">
                        <h2 class="card-title"> ${data.name} </h2>
                        <p class="card-p">
                            <strong> ${data.description} </strong> 
                            <i> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Recusandae enim fugiat dolorem distinctio possimus vitae ex accusantium dolore, 
                                laboriosam sit facere magni repellat accusamus ipsam illo praesentium molestiae numquam aspernatur.
                            </i>
                        </p>
                        <p class="card-foot"><strong>Tech stack:</strong> HTML, CSS, Javascript, React, Figma</p>
                        <div class="card-links">
                            <a href="${data.homepage || undefined}" aria-label="live preview of project task">
                                <img src="./img/icon/link-chain-black-icon.svg" alt="" aria-hidden="true"> 
                                Live Preview 
                            </a>
                            <a href="${data.html_url}" target="_blank" aria-label="show source code of project task på gitHub">
                                <img src="./img/logo/github-b-logo.svg" alt="" aria-hidden="true"> 
                                View Code 
                            </a>
                        </div>
                    </div>
                </div>
            `;
        
            ulParent.append(liChild);
        }
    });
}