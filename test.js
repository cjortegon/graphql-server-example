var module = require("./lambda")

const user = {
    email: "cjortegon@gmail.com",
    roles: [1,2,3,4,5,6,7,8]
}

const query = `{
    course(id: "a") {
      title,
      teacher
    }
}`

const event = {
    user, // Authentication
    query,
}

const context = {
    callbackWaitsForEmptyEventLoop: true
}

module.handler(event, context, (error, result) => {
    if(error) {
        console.log("Error -> "+JSON.stringify(error))
    }
    if(result) {
        console.log(JSON.stringify(result))
    }
})