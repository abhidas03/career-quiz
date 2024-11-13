import React from 'react'

export default function Results(data) {
    if (data.data === null) {
        return <div> No data </div>
    }

    const dataToResults = (data) => {
        const careerScores = {
            Soulmender: 0,
            Artisan: 0,
            Pathfinder: 0
        }
    
        const questionsToCategory = {
            question1: 'Artisan',
            question2: 'Soulmender',
            question3: 'Pathfinder'
        }

        for (let question in data) {
            careerScores[questionsToCategory[question]] += data[question]
        }
        console.log(careerScores);

        console.log(Object.values)
    }
    dataToResults(data.data);

    return (
        <div> {JSON.stringify(data)} </div>
    )
}
