const { graphql } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')
const { readFileSync } = require('fs')
const { join } = require('path')

// Config resolvers
const resolvers = require('./src/resolvers')

// Define schema
const typeDefs = readFileSync(
    join(__dirname, 'src', 'schema.graphql'),
    'utf-8'
)
const schema = makeExecutableSchema({typeDefs, resolvers})

// Lambda handler
exports.handler = (event, context, callback) => {
    const {query} = event
    graphql(schema, query, resolvers).then((data) => {
        callback(null, data)
    })
}