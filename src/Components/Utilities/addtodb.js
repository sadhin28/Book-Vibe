import { toast } from "react-toastify";

const getStoredReadList =()=>{
    const storedListr=localStorage.getItem('read-list')
    if(storedListr){
        const storedList = JSON.parse(storedListr);
        return storedList;
    }
    else{
        return [];
    }
}   

const addToStoredReadList=(id)=>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){

        toast.error(`This Book alrady exists in the read List`)
    }
    else{
        storedList.push(id);
        const storedListstr = JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListstr)
        toast.success('Listed The Book')
    }
}

const getStoredwhishesList =()=>{
    const storedListr=localStorage.getItem('whish-list')
    if(storedListr){
        const storedList = JSON.parse(storedListr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredwishesList=(id)=>{
    const storedList =  getStoredwhishesList();
    if(storedList.includes(id)){

        toast.error(`This Book alrady exists in the wishList`)
    }
    else{
        storedList.push(id);
        const storedListstr = JSON.stringify(storedList);
        localStorage.setItem('whish-list',storedListstr)
        toast.success('Wishes The Book')
    }
}

export {addToStoredReadList,getStoredReadList,addToStoredwishesList,getStoredwhishesList}