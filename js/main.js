const listaTeamEl = document.getElementById("listaTeam");

const team = [
    {
        name:"Wayne Barnett",
        role:"Founder & CEO",
        photo:"wayne-barnett-founder-ceo.jpg",
    }, {
        name:"Angela Caroll",
        role:"Chief Editor",
        photo:"angela-caroll-chief-editor.jpg",
    }, {
        name:"Walter Gordon",
        role:"Office Manager",
        photo:"walter-gordon-office-manager.jpg",
    }, {
        name:"Angela Lopez",
        role:"Social Media Manager",
        photo:"angela-lopez-social-media-manager.jpg",
    }, {
        name:"Scott Estrada",
        role:"Developer",
        photo:"scott-estrada-developer.jpg",
    }, {
        name:"Barbara Ramos",
        role:"Graphic Designer",
        photo:"barbara-ramos-graphic-designer.jpg",
    }
];

console.log(team);

for (let key in team) {
    console.log(team[key]);
}

for (i = 0; i < team.length; i++) {
    const info = team[i];
    const infoTeam = document.createElement("div");
    infoTeam.classList.add("m-3");
    listaTeamEl.append(infoTeam);
    infoTeam.innerHTML += `<strong>Name:</strong> ${info.name}; <strong>Role:</strong> ${info.role};`;
    const imgEl = document.createElement("img");
    imgEl.src = "img/" + info.photo;
    infoTeam.append(imgEl);
}
