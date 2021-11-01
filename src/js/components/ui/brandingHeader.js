import makeElement from "../../../utils/makeElement";



const pageHeader = function ({ label, tagline, children }) {
  
  const template = `
    <header class="${styles.defaultHeader} center-in-page">
        <p>${tagline || "default page tagline"}</p>
        <h1>${label || "Defalult Page Header"}</h1>
        
    </header>
`;

 const header = makeElement(template)
 if(children.length){
    children.forEach(child=>{
         header.append(child)
    })
 }

   
  return header

 
};

export default pageHeader;
