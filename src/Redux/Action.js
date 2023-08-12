
let loginSuccess=(data)=>{
    return{
        type:"LOGINSUCCESS",
        payload:data,
    }
}
let disapatchdata=(data)=>{
    return{
        type:"SEARCHEDDATA",
        payload:data,
    }
}


export{disapatchdata,loginSuccess}

