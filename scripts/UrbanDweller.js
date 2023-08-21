import { setSocioLocationId } from "./TransientState.js"



const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToInteger)
    }
}




export const LocationTypeChoices = async () => {
    const response = await fetch ("http://localhost:8088/socioLocations")
    const locations = await response.json()

    document.addEventListener("change", handleLocationChange)
    
    let choicesHTML = "<h2> Which type of area do you live in?</h2>"
    const divStringArray = locations.map((location) => {
    choicesHTML += `<input type = 'radio' name='location' value='${location.id}' /> ${location.label}`
    
})
    choicesHTML += divStringArray.join("");
    return choicesHTML
}