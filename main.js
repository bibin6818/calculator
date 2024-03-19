//display content in calc screen

const displayContent = (content)=>{
    calcScreen.value += content
}

// clear content of calcScreen
const clearAllContent = ()=>{
    calcScreen.value = ""
    calcScreen.placeholder = "0"

}
//result display in calcScreen

const showResult = ()=> {
    try{
        console.log("TRY BLOCK");
        calcScreen.value = eval(calcScreen.value)
    }catch(err){
        console.log("CATCH BLOCK");
        console.log(err);
        calcScreen.value = ""
        calcScreen.placeholder = "Invalid Expression!!!"
    }finally{
        console.log("Finally Block : Task Completed");
    }
}

// Back Space

const removeLast = ()=>{
    calcScreen.value = calcScreen.value.slice(0,-1)
}