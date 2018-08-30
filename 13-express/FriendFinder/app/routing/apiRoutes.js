const server = require('../../server')

module.exports = {
    routes: () => {
        server.li().get("/api/friends", (req, res) => {
            console.log("GET API Friends")
        });
        server.li().post("/api/friends", (req, res) => {
            console.log("POST API Friends")
        });
    }
}