const express = require("express")
const server = express()
const ProjectRouter = require("./data/projects/projectsRouter")
const ResourcesRouter = require("./data/resources/resourcesRouter")
const TasksRouter = require("./data/tasks/tasksRouter")

server.use(express.json())

server.use('/projects', ProjectRouter)
server.use('/resources', ResourcesRouter)
server.use('/tasks', TasksRouter)
server.get('/', (req, res) => {
    return res.json({message: "You shall not pass!"})
})

const PORT = 8000
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})