import { OwnsJeansChoices } from "./OwnsJeans.js"
import { SaveSubmission } from "./SaveSubmissions.js"
import { SubmissionList } from "./Submissions.js"
import { LocationTypeChoices } from "./UrbanDweller.js"
const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = await OwnsJeansChoices()
    const locationsHTML = await LocationTypeChoices()
    const buttonHTML = await SaveSubmission()
    const submissionListHTML = await SubmissionList()

    container.innerHTML = 
        `${jeanOwnershipHTML}
        ${locationsHTML}
        ${buttonHTML}
        ${submissionListHTML}`
        

}

document.addEventListener("newSubmissionCreated", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})
render()