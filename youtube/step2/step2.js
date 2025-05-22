const container = document.querySelector('#root')
let content = ''
let xhr = new XMLHttpRequest()
xhr = new XMLHttpRequest()
const key = `AIzaSyDVZO1z2Pj_anIwt1gosV-D6JbcbPZTye8`
const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`
xhr.open('GET',YOUTUBE_URL,false)
xhr.send()


const result = JSON.parse(xhr.responseText)
const items = result.items

content += `<ul class = 'videos'>`
for(i=0; i<items.length; i++){
  content += `<li class = 'container'>`
  content += `<div class = 'video'>`
  content += `<img src = '${items[i].snippet.thumbnails.medium.url}'>`
  content += `<div>`
  content += `<p class = 'title'>${items[i].snippet.title}</p>`
  content += `<p class = 'channel'>${items[i].snippet.channelTitle}</p>`
  content += `</div>`
  content += `</div>`
  content += `</li>`
}
content += `</ul>`


container.innerHTML = content