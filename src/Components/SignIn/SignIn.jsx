import { GoogleAuthProvider, signOut } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import auth from "../firebaseAuth";
import { useState } from "react";
import { GithubAuthProvider } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth";
const SignIn = () => {
    const [user, setuser] = useState(null)
    const provider = new GoogleAuthProvider()
    const providers = new GithubAuthProvider();
    const twiterprovider = new TwitterAuthProvider();
    const handelGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
                setuser(result.user)
            })
            .catch(error => {
                setuser(null);
                console.log('Error', error)
            })
    }

    const handelSignOut = () => {
        signOut(auth)
            .then(() => {
                setuser(null);
            })
            .then(error => console.log('Error', error))
    }

    const handelgirhubSignin = () => {
        signInWithPopup(auth, providers)
            .then((result) => {
                console.log(result)
                setuser(result.user)
            })
            .catch(error => {
                setuser(null);
                console.log('Error', error)
            })
    }
    const handelTwiterLoging= () => {
        signInWithPopup(auth, twiterprovider)
            .then((result) => {
                console.log(result)
                setuser(result.user)
            })
            .catch(error => {
                setuser(null);
                console.log('Error', error)
            })
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
                                user ? <button onClick={handelSignOut} className="btn btn-neutral mt-4">Sign Out</button> :
                                    <div className="grid gap-3">
                                        <button onClick={handelGoogleLogin} className="btn text-white bg-black border-[#e5e5e5]">
                                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                            Login with Google
                                        </button>
                                        <button onClick={handelgirhubSignin} className="btn bg-black text-white border-black">
                                            <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                                            Login with GitHub
                                        </button>
                                        <button onClick={handelTwiterLoging} className="btn bg-black text-white border-black">
                                            <svg aria-label="X logo" width="16" height="12" viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" /></svg>
                                            Login with X
                                        </button>
                                    </div>

                            }


                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;