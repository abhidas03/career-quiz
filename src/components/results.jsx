import React from 'react'

export default function Results(data) {
    if (data.data === null) {
        return <div> No data </div>
    }

    const dataToResults = (data) => {
        const careerScores = {
            Pathfinder: 0,
            Artisan: 0,
            Loreweaver: 0,
            Firestarter: 0,
            Visionweaver: 0,
            Truthseeker: 0,
            Bridgekeeper: 0,
            Soulmender: 0,
            Blacksmith: 0
        }
    
        const questionsToCategory = {
            question1: 'Artisan',
            question2: 'Soulmender',
            question3: 'Pathfinder'
        }

        for (let question in data) {
            careerScores[questionsToCategory[question]] += data[question]
        }
        return careerScores;
    }

    const convertResults = (careerScores) => {
        let highestCategory = 'Artisan';
        for (let category in careerScores) {
            if (careerScores[category] > careerScores[highestCategory]) {
                highestCategory = category;
            }
        }

        console.log(highestCategory)
        return highestCategory;
    }

    const scores = dataToResults(data.data);
    const result = convertResults(scores);


    return (
        <div> {result} </div>
    )
}
