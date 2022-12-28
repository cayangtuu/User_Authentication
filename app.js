const express = require("express")
const exphbs = require("express-handlebars")
const users = require("./users")
const port = 3000

const app = express()
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }))
app.set("view engine", "hbs")
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.render("index")
})

app.post("/", (req, res) => {
  const { Email, Password } = req.body
  const User = users.find(user => {
    return user.email.includes(Email) && user.password.includes(Password)
  })
  if (User) {
    const message = `Welcome Back, ${User.firstName}`
    res.render("welcome", { message })
  } else {
    const error = "Email 或 Password 錯誤"
    res.render("index", { error })
  }
})

app.listen(port, () => {
  console.log(`App is working on http://localhost:${port}`)
})