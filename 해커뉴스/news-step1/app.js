const xhr = new XMLHttpRequest()
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
xhr.open('GET', NEWS_URL,false)
xhr.send()