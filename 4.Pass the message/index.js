const sendbtn=document.querySelector('#sendbtn');
const messagein=document.querySelector('#messageIn');
const messageout=document.querySelector('#messageOut');


sendbtn.addEventListener('click',sendMsg);

function sendMsg(){
	let content=messagein.value;
	if(content===''){
		alert("You haven't entered any value")
	}
	else{
	messageout.innerHTML=content;
	messagein.value='';
	}	
}
