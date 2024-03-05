import { useState } from 'react';
import '../css/ulogin.css';
import { useNavigate } from 'react-router-dom';
// import img from '../images/userback1.jpg';
function Login() {
    const [action, setAction] = useState("Sign In");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); 
    
        if (action === "Sign In") {
            if (!email || !password) {
                setError("Please fill in all fields.");
                return;
            }
            console.log("Signing in...");
            if (email === 'roshan@admin' && password === 'admin123') {
                navigate("/dash");
                return;
            } else {
                setError('Invalid email or password.');
            }
        } else if (action === "Sign Up") {
            if (!name || !email || !mobileNumber || !password || !confirmPassword) {
                setError('All fields are required');
                return;
            }
            if (password !== confirmPassword) {
                setError('Passwords do not match');
                return;
            }
            navigate('/home');
            alert("Registration Successful!!");
        }
    
        // setEmail("");
        // setPassword("");
        // setConfirmPassword("");
        // setMobileNumber("");
        // setName("");
    };

    return (
        <div className='login_back'>
            {/* <div className="img_container">
                <img src={img} alt="Login" />
            </div> */}
            <div className='container'>
                <div className="head">
                    <div className='text'>Welcome, Buddy!!!</div>
                    <div className='text'>{action}</div>
                    <div className="underline"></div>
                </div>
                <form className='inputs' onSubmit={handleSubmit}>
                    {action === "Sign Up" &&
                        <div className="input">
                            <input type="text" placeholder='Username' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                    }
                    <div className="input">
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {action === "Sign Up" &&
                        <div className="input">
                            <input type="text" placeholder='Mobile Number' value={mobileNumber} onChange={(e)=> setMobileNumber(e.target.value)} />
                        </div>
                    }
                    <div className="input">
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {action === "Sign Up" &&
                        <div className="input">
                            <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                    }
                    <div className="error">{error}</div>
                {action === "Sign In" &&
                    <div className="forgotpass">Forgot password?<a href='#'>Click here!</a></div>
                }
                    <div className="subcont">
                        <input type='submit' value='SignUp' className={action === "Sign In" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}/>
                        <input type='submit' value='SignIn' className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Sign In") }}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
