const { graphql, buildSchema } = require('graphql')

// Define schema
const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

// Config resolvers
const resolvers = {
    hello: () => {
        return "Hola mundo"
    }
}

// Execute query
graphql(schema, '{ hello }', resolvers).then((data) => {
    console.log(JSON.stringify(data))
})