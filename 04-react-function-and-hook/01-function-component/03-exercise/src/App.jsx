import React from 'react';

const App = () => {
    return (
        <>
        <img width="150px" src="https://s.isanook.com/me/0/rp/rc/w728h437/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL21lLzAvdWQvMTMvNjU5NDkvd29ya291dC5qcGc=.webp" alt="รูป" />
        <Info />
        <Social />
        </>
        
    );
}

const Info = () => {
    const name = "F";
    const bio = "YOYO";
    return(
        <>
            <h1>{ name } </h1>
            <p>{ bio }</p>
        </>
    );
}


const Social = () => {
    return(
        <>
            <a href="Your Facebook">Facebook</a>
            <a href="Your Twitter">Twitter</a>
        </>
    )
}
export default App;