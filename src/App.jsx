import { useState } from 'react';
import '../src/App.css';

const App = () => {
    const [Name, SetName] = useState('');
    const [LastName, SetLastName] = useState('');
    const [Phone, SetPhone] = useState('');
    const [Email, SetEmail] = useState('');
    const [Password, SetPassword] = useState('');
    const [ConfirmPassword, SetConfirmPassword] = useState('');

    const NamehandleChange = (event) => {
        SetName(event.target.value);
    };

    const LastNamehandleChange = (event) => {
        SetLastName(event.target.value);
    };

    const PhonehandleChange = (event) => {
        SetPhone(event.target.value);
    };

    const UsernamehandleChange = (event) => {
        SetEmail(event.target.value);
    };

    const PasswordhandleChange = (event) => {
        SetPassword(event.target.value);
    };

    const ConfirmPsdhandleChange = (event) => {
        SetConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('FirstName:-', Name);
        console.log('LastName:-', LastName);
        console.log('Phone:-', Phone);
        console.log('Email:-', Email);
        console.log('Password:-', Password);
        console.log('ConfirmPassword:-', ConfirmPassword);
        
        SetName('');
        SetLastName('');
        SetPhone('');
        SetEmail('');
        SetPassword('');
        SetConfirmPassword('');
    };

    return(
        <div className='container'>
            <h2 className='title'>Signup Page</h2>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name:-</label>
                        <input type="text" placeholder="First Name" value={Name} onChange={NamehandleChange} className='fstname_style'/>
                    </div>
                    <br />
                    <div>
                        <label>Last Name:-</label>
                        <input type="text" placeholder="Last Name" value={LastName} onChange={LastNamehandleChange} className='lstname_style'/>
                    </div>
                    <br />
                    <div>
                        <label>Phone:-</label>
                        <input type="text" placeholder="Phone No." value={Phone} onChange={PhonehandleChange} className='phnstyle'/>
                    </div>
                    <br />
                    <div>
                        <label>Email:-</label>
                        <input type="email" placeholder="Email" value={Email} onChange={UsernamehandleChange} className='email_style'/>
                    </div>
                    <br />
                    <div>
                        <label>Password:-</label>
                        <input type="password" placeholder="Password" value={Password} onChange={PasswordhandleChange} className='pswd_style'/>
                    </div>
                    <br />
                    <div>
                        <label>Confirm Password:-</label>
                        <input type="password" placeholder="Confirm Password" value={ConfirmPassword} onChange={ConfirmPsdhandleChange} className='cnfpswd_style'/>
                    </div>  
                    <br />
                    <div>
                        <button type='submit' className='btn_style'>SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default App;