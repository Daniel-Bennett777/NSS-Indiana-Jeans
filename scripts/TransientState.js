// Set up the transient state data structure and provide initial valuess
const transientState = new Map ()
    transientState.set("ownsBlueJeans", false),
    transientState.set("socioLocationId", 0)
    //"ownsBlueJeans" : false,
    //"socioLocationId" : 0




// Functions to modify each property of transient state
export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.set("ownsBlueJeans", chosenOwnership) ;
    console.log(transientState)
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.set("socioLocationId", chosenLocation)
    console.log(transientState)
}


// Function to convert transient state to permanent state
export const saveSurveySubmission = async () => {
    const transientStateObj = Object.fromEntries(transientState);
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientStateObj)
    }

    const response = await fetch("http://localhost:8088/submissions", postOptions)
    const customEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(customEvent)
}