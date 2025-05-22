const container = document.querySelector('#root')

let xhr = new XMLHttpRequest()
xhr = new XMLHttpRequest()
const key = `AIzaSyDVZO1z2Pj_anIwt1gosV-D6JbcbPZTye8`
const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`
xhr.open('GET',YOUTUBE_URL,false)
xhr.send()


const result = xhr.responseText
const result2 = JSON.parse(xhr.responseText)
console.log(result);
console.log(result2.items);
console.log(result2.items.length);

const x = result2.items
const y = x.length



container.innerHTML = '결과'