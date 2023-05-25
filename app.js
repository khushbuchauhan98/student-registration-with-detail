
let users=[];
let randoms=['vadodara','surat','navsari','ahmedabad','anand','nadiad','bharuch']

show=(e)=>{
   
    let data=document.getElementById('data');
    data.innerHTML='';
   
    console.log(e.target.innerText);
    let email= e.target.innerText
    let result= users.find((userr)=>{
     return userr.email == email
    })
    console.log(result)
   
    let h1=document.createElement('p');
    let h2=document.createElement('p');
    let h3=document.createElement('p');
    data.appendChild(h1)
    data.appendChild(h2)
    data.appendChild(h3)
    h1.innerText='name: '+ result.name
     h2.innerText='Email: '+ result.email
     h3.innerText='Center: '+ result.center
     let aaa=document.getElementById('studentdata')
     aaa.style.display='block'
    let left= document.getElementById('left')
    left.style.display='none'
    let right= document.getElementById('right')
    right.style.display='none'
}
goback=()=>{
    left.style.display='block'
    let right= document.getElementById('right')
    right.style.display='block'
    let aaa=document.getElementById('studentdata')
aaa.style.display='none'
}
renderuser=()=>{
    let right=document.getElementById('tbody')
    right.innerHTML=""
    users.map((user,index)=>{
       let tr= document.createElement('tr');
       let td1=document.createElement('td')
       let td2=document.createElement('td')
       let td3=document.createElement('td')
       let td4=document.createElement('td')
       right.appendChild(tr)
       tr.appendChild(td1)
       tr.appendChild(td2)
       tr.appendChild(td3)
       tr.appendChild(td4)
       for(let i=0;i<users.length;i++){
        console.log(i)
        td1.innerText=index+1
        td2.innerText=user.name
        td3.innerText=user.email
        td4.innerText=user.center
        tr.addEventListener('click',show)
    }
    })
   
}
check=()=>{
    let bg=document.getElementById('bg')
    bg.classList.add('bg')
}
success=()=>{
    let alert=document.getElementById('alert')
    alert.classList.add('alert')
    alert.innerText='user added successfully'
    setTimeout(() => {
        alert.classList.remove('alert')
        alert.innerText=''
    }, 2000);
}
fail=()=>{
    let fail=document.getElementById('alert')
    fail.classList.add('danger')
    fail.innerText='same email exists'
    setTimeout(() => {
        fail.classList.remove('danger')
        fail.innerText=''
    }, 2000);
}
blankinput=()=>{
    let blankinput=document.getElementById('alert')
    blankinput.classList.add('blank')
    blankinput.innerText='input field blank'
    setTimeout(() => {
        blankinput.classList.remove('blank')
        blankinput.innerText=''
    }, 2000);
}
submit=()=>{
    let name=document.getElementById('name');
    let email=document.getElementById('email');
    let tempuser={
        name:name.value,
        email:email.value,
        center: randoms[(Math.floor(Math.random()*randoms.length))],
    }
 
    let emailcount=users.filter((user)=>{
        return user.email==email.value
    })
 if(email.value=='' && name.value){
    // alert('blank')
    blankinput()
 }
 else if(name.value==''){
    // alert('blank')
    blankinput()
 }
   else if(emailcount.length == 0 ){
        users.push(tempuser);
        console.log(users)
        success()
        email.value=''
        name.value=''
        renderuser()
    }
   
    else{
        fail()
          email.value=''
        name.value=''
    }
   
    
   
    console.log(users)
}

let darklightbtn=false
darllight=()=>{
    let dark=document.getElementById('btn1');
    let light=document.getElementById('btn');
    if(darklightbtn==true)
    {
        dark.style.display='none'
        light.style.display='block'
    }
    else{
        dark.style.display='block'
        light.style.display='none'
    }
}
let darkmode=document.querySelector('#btn1')
renderqq=()=>{
   let body=document.querySelector('body');
   body.style.backgroundColor='#edf3f5'
  darklightbtn=true;
  darllight()
  
}
darkmode.addEventListener('click',renderqq)
let lightmode=document.querySelector('#btn')
renderq=()=>{
    let body=document.querySelector('body');
    body.style.backgroundColor=''
    
    darklightbtn=false;
    darllight()
 }
 lightmode.addEventListener('click',renderq);

