const btnTag=document.querySelector('.btn');
const parentTag=document.querySelector('.parent');

const openToastAlert= ()=> {    
    //create toastalert
    const toastAlertTag=document.createElement('div');
    toastAlertTag.classList.add('toastAlert');
    toastAlertTag.innerHTML="Your are successfully";

    //crerate btn
    const closeTag=document.createElement("button");
    closeTag.classList.add('btn','btn-info');
    closeTag.append("Close");

    toastAlertTag.append(closeTag);
    parentTag.append(toastAlertTag);
    parentTag.style.bottom=`-${parentTag.offsetHeight}px`;


    setTimeout(()=>{
        parentTag.style.bottom='0px';
    },1000);

    closeTag.addEventListener('click',()=>{
        parentTag.style.bottom=`-${parentTag.offsetHeight}px`;
        const addId=localStorage.setItem("id", "1");
    });

}



window.addEventListener('load', ()=> {
    const takeId=localStorage.getItem("id");
    if(!takeId){
        openToastAlert();
    }
});

