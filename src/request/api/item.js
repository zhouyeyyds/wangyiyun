import service from "..";
export function getmusicitemlist(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}