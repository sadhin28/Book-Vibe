const getStoredReadList =()=>{
    const storedListr=localStorage.getItem('read-list')
    if(storedListr){
        const storedList = JSON.parse(storedListr)
    }
    else{

    }
}   

const addToStoredReadList=(id)=>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        console.log(id,'alrady exists in the read list')
    }
    else{
        storedList.push(id);
    }
}