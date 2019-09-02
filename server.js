const { graphql, buildSchema } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')

const app = express()

// Define schema
// const schema = buildSchema(readFileSync(
//     join(__dirname, 'src', 'schema.graphql'),
//     'utf-8'
// ))
const typeDefs = readFileSync(
    join(__dirname, 'src', 'schema.graphql'),
    'utf-8'
)

// Config resolvers
const resolvers = require('./src/resolvers')

// Setup schema
const schema = makeExecutableSchema({typeDefs, resolvers})

app.use('/api', gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

const port = 6003
app.listen(port, () => {
    console.log('GraphQL listening on port: '+port)
})