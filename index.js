require('dotenv').config();
const express = require('express')
const app = express()
const port = 4000

const githubData = {
"login": "koradiyamilan12",
"id": 188658196,
"node_id": "U_kgDOCz6yFA",
"avatar_url": "https://avatars.githubusercontent.com/u/188658196?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/koradiyamilan12",
"html_url": "https://github.com/koradiyamilan12",
"followers_url": "https://api.github.com/users/koradiyamilan12/followers",
"following_url": "https://api.github.com/users/koradiyamilan12/following{/other_user}",
"gists_url": "https://api.github.com/users/koradiyamilan12/gists{/gist_id}",
"starred_url": "https://api.github.com/users/koradiyamilan12/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/koradiyamilan12/subscriptions",
"organizations_url": "https://api.github.com/users/koradiyamilan12/orgs",
"repos_url": "https://api.github.com/users/koradiyamilan12/repos",
"events_url": "https://api.github.com/users/koradiyamilan12/events{/privacy}",
"received_events_url": "https://api.github.com/users/koradiyamilan12/received_events",
"type": "User",
"user_view_type": "public",
"site_admin": false,
"name": "Milan Koradiya",
"company": null,
"blog": "milankoradiya.me",
"location": "Junagadh, Gujarat",
"email": null,
"hireable": null,
"bio": "Hi, I’m Milan Koradiya, a passionate MERN stack developer and JavaScript DSA enthusiast. I have completed my Bachelor of Computer Applications (BCA) ",
"twitter_username": null,
"public_repos": 7,
"public_gists": 0,
"followers": 2,
"following": 2,
"created_at": "2024-11-16T07:45:18Z",
"updated_at": "2025-09-22T14:12:00Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('milan')
})

app.get('/login', (req, res) => {
  res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>Chai or code</h2>')
})

app.get('/github', (req,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
