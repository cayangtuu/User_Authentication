const express = require("express")
const exphbs = require("express-handlebars")
const session = require("express-session")
const users = require("./users")
const port = 3000

const app = express()
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }))
app.set("view engine", "hbs")
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: 'itSAsEcRethoPeyOuknowtHAt',
  name: 'user_id', //將Cookie中預設session_id名稱由"connect.sid"改為"user_id"
  resave: false,
  saveUninitialized: false
}))

app.get("/", (req, res) => {
  res.render("index")
})

app.post("/", (req, res) => {
  const { Email, Password } = req.body
  const User = users.find(user => {
    return user.email.includes(Email) && user.password.includes(Password)
  })
  if (User) {
    req.session.isLogin = true
    req.session.firstName = User.firstName
    return res.redirect("/welcome")
  } else {
    const error = "*** Email 或 Password 錯誤"
    return res.render("index", { error })
  }
})

app.get("/welcome", (req, res) => {
  const { isLogin, firstName } = req.session
  if (isLogin) {
    const message = `Welcome Back, ${firstName}`
    return res.render("welcome", { message })
  } else {
    const error = "*** 請先登入"
    return res.render("index", { error })
  }
})

app.listen(port, () => {
  console.log(`App is working on http://localhost:${port}`)
})