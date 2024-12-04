import { useState } from 'react';
import { descriptionsJson } from './descriptions'


export default function Results(data) {
    const [result, setResult] = useState("");
    if (data.data === null) {
        return <></>
    }
    window.scrollTo(0, 0);
    if (!result) {
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
                question3: 'Pathfinder',
                question4: 'Firestarter',
                question5: 'Bridgekeeper',
                question6: 'Artisan',
                question7: 'Soulmender',
                question8: 'Loreweaver',
                question9: 'Truthseeker',
                question10: 'Visionweaver',
                question11: 'Blacksmith',
                question12: 'Bridgekeeper',
                question13: 'Firestarter',
                question14: 'Pathfinder',
                question15: 'Loreweaver',
                question16: 'Truthseeker',
                question17: 'Blacksmith',
                question18: 'Visionweaver',
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
        setResult(convertResults(scores));
    }
    


    return (
        <>
          <div className="min-h-screen m-0">
              <div className="mt-12 py-8 px-6 max-w-4xl mx-auto bg-white rounded-lg"> 
                <h1 className="text-3xl font-bold "> {result} </h1>
                <div className="mt-6"> 
                  <p> {descriptionsJson['descriptions'][result]} </p>
                </div>
              </div>

              <div className='mt-12 py-8 px-6 max-w-4xl mx-auto bg-white rounded-lg'>
                <p> 
                    Does this description suit you? If so, you may want to think 
                    about in what ways your career is in line with your personality 
                    and in what ways in can be more relevant. 
                </p>
                <br />
                <p>
                    If this description doesn’t suit you, then feel free to take a look 
                    at the other personalities so that you can find a better match and 
                    potentially learn more about yourself!
                </p>
                <br />
                <div className="grid grid-cols-4 gap-4">
                    {Object.keys(descriptionsJson['descriptions']).map((item) => (
                        <button 
                        key={item} 
                        onClick={() => setResult(item)} 
                        className={`px-4 py-2 rounded-lg ${
                            item === result 
                            ? "bg-gray-300 text-gray-700 cursor-not-allowed" 
                            : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                        disabled={item === result}
                        >
                        {item}
                        </button>
                    ))}
                </div>
                {/* <div className="grid grid-cols-4 gap-4">
                    {Object.keys(descriptionsJson['descriptions'])
                    .filter((item) => item !== result)
                    .map(item => (
                        <button key={item} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setResult(item)}>
                            {item}
                        </button>
                    ))}
                </div> */}

              </div>
              
          </div>
        </>

    )
}
