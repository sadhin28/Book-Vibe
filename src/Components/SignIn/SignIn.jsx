import { GoogleAuthProvider, signOut } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import auth from "../firebaseAuth";
import { useState } from "react";

const SignIn = () => {
    const [user,setuser]=useState(null)
    const provider =new GoogleAuthProvider()
    const handelGoogleLogin=()=>{
            signInWithPopup(auth,provider)
            .then((result)=>{
                 console.log(result)
                 setuser(result.user)
            })
            .catch(error=>{
                setuser(null);
                console.log('Error',error)
            })
    }

    const handelSignOut=()=>{
        signOut(auth)
        .then(()=>{
            setuser(null);
        })
        .then(error=>console.log('Error',error))
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
               
            <div className="hero-content flex-col lg:flex-row-reverse">
              {
                    user && 
                    <div>
                         <img className="mx-auto w-20 h-20 rounded-full" src={user.photoURL} alt="" />
                        <h1>Name : {user.displayName}</h1>
                        <p>Email : {user.email}</p>
                      
                   
                    </div>
                }
               
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                           
                           {
                            user ? <button onClick={handelSignOut} className="btn btn-neutral mt-4">Sign Out</button>:<button onClick={handelGoogleLogin} className="btn text-white bg-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                           }
                            
                           
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;