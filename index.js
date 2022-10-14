import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
const time = document.getElementById('date')

const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
})

const datee = new Date()
const monday = new Date()
const options = { monday: 'long' }

if (datee.getDay()) {
  monday.setDate(datee.getDate() + 8 - datee.getDay())
} else {
  monday.setDate(datee.getDate() + 1)
}
const m = monday.toLocaleDateString('ru-RU', options)

time.append(m, ' !')
