function insertCourse() {
    return new Promise((resolve, reject) => {
        resolve({
            id: '123'
        })
    })
}

module.exports = {
    createCourse: async (root, { input }) => {
        const defaults = {
            teacher: '',
            topic: '',
        }
        const newCourse = Object.assign(defaults, input)
        let course = await insertCourse(newCourse)
        input.id = course.id
        return input
    }
}