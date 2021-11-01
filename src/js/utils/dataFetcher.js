//--------------------------------------------
// ------Async DATA FETCHER--------------
//--------------------------------------------

const dataFetcher =    async function(url=undefined) {
    // if(url === undefined){
    //     throw new Error("Fuck OFf")
    // }
    const response = await fetch(url);
    const payload = await response.json()
   
    return payload
}

export {dataFetcher}