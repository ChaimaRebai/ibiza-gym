if (document.redyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
  }else {
    ready()
  }
  function ready(){
    const form = document.getElementsByTagName('form')[0];
  const nom = document.getElementById('nom');
  const prenom = document.getElementById('prenom');
  const email= document.getElementById('email');
  const telephone = document.getElementById('telephone');
  const url = document.getElementById('text');
  
  
   form.addEventListener('submit',(e) => {
     e.preventDefault();
  
     checkInputs(nom,prenom,email,telephone,text);
    
     
   });
  
  }
  
  
   function checkInputs(nom,prenom,email,telephone,text){
     const nomValue = nom.value.trim();
     const  prenomValue = prenom.value.trim();
     const emailValue = email.value.trim();
     const telephoneValue = telephone.value.trim();
     const textlValue = text.value.trim();
   
  
  
     if(nomValue === '') {
  
      setErrorFor(nom, 'ce champ est obligatoire');
     }
     else{
       setSuccessFor(nom);
     }
  
  
     if(prenomValue === '') {
  
      setErrorFor(prenom, 'ce champ est obligatoire');
     }
     else{
  
       setSuccessFor(prenom);
     }
  
     if(emailValue === ''){
       setErrorFor(email, 'ce champ est obligatoire');
    } else if(!isEmail(emailValue)){
       setErrorFor(email, 'invalide');
    }else{
      setSuccessFor(email);
  }
  if(telephoneValue === '') {
  
    setErrorFor(telephone, 'ce champ est obligatoire');
   }
   else{
  
     setSuccessFor(telephone);
   }
   if(textValue === '') {
  
    setErrorFor(text, 'ce champ est obligatoire');
   }
   else{
  
     setSuccessFor(text);
   }
   
  
  }
  
  function setErrorFor(input,message) { 
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
  
    small.innerText =message;
  
    formControl.className = 'form-control error';
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }
  
  function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
  
  
  
  
  
  
  
  
  
  
  