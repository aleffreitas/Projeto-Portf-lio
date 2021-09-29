const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res){
    const about = {
        avatar_url: "https://avatars.githubusercontent.com/u/59258709?v=4",
        name: "Alef Freitas",
        role: "Desenvolvedor  Full-stack",
        description: 'Desenvolvedor Full-stack, focado em criar soluções de forma inteligente que tenham qualidade em otimização, performance e que atendam as necessidades atuais. Colaborador da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [
            {name: "Github", url: "https://github.com/aleffreitas/"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/aleffreitas/"}
        ]
    }


    return res.render("about", {about})
})

server.get("/portfolio", function (req, res){

    return res.render("portfolio", {items: videos})
})

server.listen(5000, function() {
    console.log("server is running")
})