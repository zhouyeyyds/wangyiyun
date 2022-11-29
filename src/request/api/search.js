import service from "..";
export  function findmusicapi(value){
    return service({
            method:"GET",
            url:`/cloudsearch?keywords=${value}`
        })
    
}