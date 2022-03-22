import React, { useState } from 'react';

const Form = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword]= useState("")
    const [password2,setPassword2]= useState("")
    const [isLogin,setIsLogin] = useState(false) 


function handleSignUp(e){
    e.preventDefault()
    let obj ={
        email: email,
        password:password,
        password2:password2
    }
    if(!email.trim() || !password.trim() || !password2.trim()){
        alert("заполните поле !")
        return
    }else if (password !== password2){
        alert("пароли не совпадают!")
        return
    }else{
        setIsLogin(true)
    }
}

function logOut (){
setEmail("")
setPassword("")
setPassword2("")

    setIsLogin(false)
}

    return isLogin ? ( <>    
    <h1>добро пожаловать {email} !</h1>
    <button onClick={()=> logOut() }>logOut</button>
    </>):(
      


        <div>
           <form>
               <input onChange={(e)=> setEmail(e.target.value) } value={email} type="text" placeholder='Email'/>
            <input onChange={(e)=> setPassword(e.target.value) } value={password} type="text" placeholder='password'/>
            <input onChange={(e)=> setPassword2(e.target.value) } value={password2} type="text" placeholder='password2'/>
            <button onClick={ handleSignUp}>LogIn</button> 
</form> 
        </div>
    );
};

export default Form;
