import React, { useContext } from 'react';
import AuthContext from "../../context/AuthContext";

function LandingPage() {
    // checks if logged in or not and then conditional rendering
    const { loggedIn } = useContext(AuthContext);

    return (
        <div>
            {/* if not logged in show register and login  */}
            {loggedIn === false && (
                <>
                    <h1 id="landing-page-h1" >WebDevBlogger</h1>
                    <h2 id="landing-page-h2" >Welcome, I hope you learn something new</h2>
                </>
            )}
            
            {/* if logged in show blogs and logout button */}
            {loggedIn === true && (
                <>
                    <h1 id="landing-page-h1" >WebDevBlogger</h1>
                    <h2 id="landing-page-h2" >Read and learn something new about Web Development</h2>
                </>
            )}
        </div>
    );
}

export default LandingPage;
