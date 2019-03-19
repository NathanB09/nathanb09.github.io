const navOptions = [...document.querySelectorAll('.nav_option')]

navOptions.forEach(option => {
  option.addEventListener("click", (e) => {
    activeTab(e.target)
  })
})

document.addEventListener("scroll", () => {
  const homePos = Math.floor(
    document.querySelector("#home").getBoundingClientRect().top + document.documentElement.scrollTop)
  const aboutPos = Math.floor(document.querySelector("#about").getBoundingClientRect().top + document.documentElement.scrollTop)
  const projectsPos = Math.floor(document.querySelector("#projects").getBoundingClientRect().top + document.documentElement.scrollTop)

  if (document.documentElement.scrollTop >= projectsPos) {
    activeTab(document.querySelector(".projects"))
  } else if (document.documentElement.scrollTop >= aboutPos) {
    activeTab(document.querySelector(".about"))
  } else if (document.documentElement.scrollTop >= homePos) {
    activeTab(document.querySelector(".home"))
  }
})

const activeTab = (el) => {
  document.querySelector(".active").classList.remove("active")
  el.classList.add("active")
}