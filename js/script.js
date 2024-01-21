// recupero l'elemento dal DOM
const rowElement = document.querySelector(".row");

// creo un array di oggetti
const teamMembers = [
    {
        fullname: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        fullname: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        fullname: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        fullname: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        fullname: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        fullname: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
];

// stampo in console 
/* 
for (let i = 0; i < teamMembers.length; i++) {
    console.log(teamMembers[i]);
} */

/* for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    console.log(member);
    const {fullname, role, image} = member;
    console.log(fullname, role, image);
    createList();

} */