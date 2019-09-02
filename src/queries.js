const courses = [
    {
        id: 'a',
        title: 'Algoritmos 1',
        teacher: 'Camilo',
        description: 'Conceptos basicos',
        topic: 'Programación'
    },
    {
        id: 'b',
        title: 'Algoritmos 2',
        teacher: 'Santiago',
        description: 'Conceptos avanzados',
        topic: 'Programación avanzada'
    }
]

function getCourse(id) {
    return new Promise((resolve, reject) => {
        const course = courses.filter(c => {
            return c.id == id
        })
        resolve(course.pop())
    })
}

module.exports = {
    courses: () => {
        return courses
    },
    course: async (root, args) => {
        let course = await getCourse(args.id)
        return course
    }
}