const getAllIssuesRequest = require("../https-requests/getAllIssuesRequest")
const getIssueTransitions = require("../https-requests/getIssueTransitions")
const doIssueTransition = require("../https-requests/doIssueTransition")

module.exports = async (request) => {
    var issueList = JSON.parse(await getAllIssuesRequest(request))
    
    issueList.issues.map( async (issue, issueIndex) => {
       let availableTransitions = JSON.parse(await getIssueTransitions(request, issue.key))
       const numberOfTransitions = availableTransitions.transitions.length
       availableTransitions.transitions.map(async (transition, transitionIndex) => {
           if(transition.to.id === issue.fields.status.id) {
               let updateIndex
               transitionIndex === numberOfTransitions -1 ? updateIndex = 0 : updateIndex = transitionIndex + 1
               var transitionStatus = await doIssueTransition(request, issue.key, availableTransitions.transitions, updateIndex)
               console.log(`Transition Status for ${issue.key} is ========> ${transitionStatus}`)
           }
       })
    })
}