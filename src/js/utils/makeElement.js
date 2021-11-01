 
 
const makeElement = function (templateString=``){
    const docFragment = document.createRange().createContextualFragment(templateString)
    const element = docFragment.children[0]
    return element 
}

export default makeElement

 

 