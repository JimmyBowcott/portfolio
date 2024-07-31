// Manipulates the modal window to display content

// Projects.json

const projects = [
    {
        "name": "Knight Moves",
        "description": "Knight moves is a knight pathfinder which finds the shortest path to a pawn. This was my first implementation of a BFS algorithm and I figured it could do with an interactive UI alongside it. It is written in vanilla JS/CSS.",
        "live": "https://jimmybowcott.github.io/knight-moves/",
        "github": "https://github.com/JimmyBowcott/knight-moves",
        "video": "./src/assets/demos/knight-moves.mp4",
    },
    {
        "name": "Pixterest",
        "description": "Pixterest is a front-end Pinterest clone designed specifically for pixel art. Built with React, it features DeviantArt's RSS API to fetch posts which can be saved locally. It is designed to be fully responsive for every screen size. My inspiration for this project came from wanting to make a challenging website with my own personal spin.",
        "live": "https://jimmybowcott.github.io/pixterest/",
        "github": "https://github.com/JimmyBowcott/pixterest",
        "video": "./src/assets/demos/pixterest.mp4"
    }
];

handleOpen = (event) => {
    n = event.target.id.slice(2);
    populateModal(n);
    showModal();
}

clearModal = () => {
    document.getElementById("modal-title").innerHTML = "";
    document.getElementById("modal-description").innerHTML = "";
    document.getElementById("modal-live").href = ""
    document.getElementById("modal-live").children[1].innerText = "";
    document.getElementById("modal-github").href = "";
    document.getElementById("modal-github").children[1].innerText = "";
    document.getElementById("modal-video-src").src = "";
}

showModal = () => {
    document.getElementById("modal").style.display = "flex";
}

populateModal = (n) => {
    let project = projects[n];
    document.getElementById("modal-title").innerHTML = project.name;
    document.getElementById("modal-description").innerHTML = project.description;
    document.getElementById("modal-live").href = project.live;
    document.getElementById("modal-live").children[1].innerText = project.live;
    document.getElementById("modal-github").href = project.github;
    document.getElementById("modal-github").children[1].innerText = project.github.slice(19);
    document.getElementById("modal-video-src").src = project.video;
    document.getElementById('modal-video').load();
}

closeModal = () => {
    document.getElementById("modal").style.display = "none";
    clearModal();
}

// Event listeners for modal

const clickers = document.querySelectorAll(".show-modal").forEach(link => {
    link.addEventListener("click", handleOpen);
});