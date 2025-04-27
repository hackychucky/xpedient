import { useState } from 'react';
import logo from './images/xpedientlogo.png';  // Import the logo


// The main function that renders the app
function Login() {
  // Declare state variables for email and password using useState hook
  const [email, setEmail] = useState('');  // Initial value is an empty string
  const [password, setPassword] = useState('');  // Initial value is an empty string

  // This function is called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission (which would reload the page)
    console.log('Login:', { email, password });  // Logs the email and password (for now, we just log them)
    // Later, we will send these values to the backend for authentication
  };

  return (
    <div 
      className="Login" 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',  // Centers the form on the screen vertically and horizontally
        backgroundColor: '#F4E1A1'  // yellow page background :)
      }}
    >
      
      {/* The form that will be displayed */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

    
    {/* Logo */}
    <img 
      src={logo} 
      alt="Logo" 
      style={{ width: '150px', marginBottom: '20px' }}  // Ajusta el tamaño y el margen
    />
    
        <h1>Login</h1>  {/* Header of the login form */}
        
        {/* Email input field */}
        <input 
          type="email"  // Specifies this input is for email addresses
          placeholder="Email"  // Placeholder text for the input
          value={email}  // The value of the input is bound to the email state
          onChange={(e) => setEmail(e.target.value)}  // Updates email state as the user types
          required  // Makes this field mandatory
        />
        
        {/* Password input field */}
        <input 
          type="password"  // Specifies this input is for passwords (characters are hidden)
          placeholder="Password"  // Placeholder text for the input
          value={password}  // The value of the input is bound to the password state
          onChange={(e) => setPassword(e.target.value)}  // Updates password state as the user types
          required  // Makes this field mandatory
        />
        
        {/* Submit button to send the form */}
        <button type="submit">Log in</button>  {/* Button that triggers form submission */}
      </form>
    </div>
  );
}

export default Login;  // Exports the App component so it can be used elsewhere
