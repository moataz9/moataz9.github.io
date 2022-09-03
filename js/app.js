import initTypers from './type_writer.js'
// Init Typers On DOM Load
document.addEventListener('DOMContentLoaded', initTypers)

/**
 * Profile Data fuctionality
 */

const profileItems = document.getElementById('profile-items')
const profileSkills = document.getElementById('profile-skills')

const { projects, skills } = await fetch('../profile.json').then(res => res.json())

projects.forEach(project => {
  profileItems.innerHTML += /* html */ `
  <div class="profile-item">
    <h2>${project.name}</h2>
    <h5>${project.start_date} : ${project.finish_date}</h5>
    <a 
      target="_blank" 
      href="${project.live_preview}"
      title="Go to live preview"
    >
      <div 
        class="profile-img" 
        style="background-image: url('${project.img_src}');"
      ></div>
    </a>
    <p>${project.description}</p>
    <p style="display:inline-flex;align-items:center">
      <a 
        target="_blank" 
        href="${project.repo}"
      >
        <i class="fa fa-github fa-2x"></i>
      </a> 
      &nbsp;
      <a 
        target="_blank" 
        href="${project.repo}"
      >
        project Repository
      </a>
    </p>
    <p style="display:inline-flex;align-items:center;margin-left:2rem">
      <a 
        target="_blank" 
        href="${project.live_preview}"
      >
        <i class="fa fa-door-open fa-2x"></i>
      </a> 
      &nbsp;
      <a 
        target="_blank" 
        href="${project.live_preview}"
      >
        Live Preview
      </a>
    </p>
  </div>`
})

let categories = []
skills.forEach(skill => {
  if (categories.indexOf(skill.category) === -1) {
    categories.push(skill.category)
    profileSkills.innerHTML += /* html */ `
      <h3 class="skills-category">${skill.category}</h3>
    `
  }
  let levelDom = ''
  for (let i = 1; i <= 5; i += 1) {
    if (i <= skill.level) {
      levelDom += '<li class="active"></li>'
    } else {
      levelDom += '<li></li>'
    }
  }
  profileSkills.innerHTML += /* html */ `
  <div class="skill">
    <span class="skill-name">${skill.name}</span>
    <ul class="skill-level">
      ${levelDom}
    </ul>
  </div>
  `
})
