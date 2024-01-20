const createList = (member) => {
    
   let list = `<ul class="list">`;
   teamMembers.forEach (member => {
    list += `<li>${member.fullname}</li>
    <li>${member.role}</li>
    <li><img src="img/${member.image}" alt="member.fullname"></li>`;
   })
   
   
   list += `</ul>`;
   sectionElement.innerHTML = list;
}