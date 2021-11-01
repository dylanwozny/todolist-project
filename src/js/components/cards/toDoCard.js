import makeElement from '../../utils/makeElement'
const toDoCardList = function (){
    const template = `
    <aside id="directory" class="directory">
    <header>
        <h2>Directory</h2>
    </header>
    <ul id="employees" class="employees">
     
    </ul>
    <footer>

    </footer>
</aside>
    `

    return makeElement(template)
}

export default toDoCardList