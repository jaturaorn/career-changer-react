import React, { useState } from 'react';

function App() {
    const [Name, setName] = useState('');
    const [Bio, setBio] = useState('');

    // const handleChange = (event) => {
    //     // วิธีนี้ได้เหมือนกัน
    //     setName(value.target.textContent);
    //     if(value === "") setName("Your Name ม้าง")
    //   };
    // const handleChange = (event) => {
    //     // วิธีนี้ได้เหมือนกัน
    //     setBio(value.target.textContent);
    //    if(value === "") setBio("Your Bio ม้าง")
    //   };
    return(
    <div>
      <img width="150px" src="https://s.isanook.com/me/0/rp/rc/w728h437/yatxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL21lLzAvdWQvMTMvNjU5NDkvd29ya291dC5qcGc=.webp" alt="รูป" />
      <input value={Name} name='Name' onChange={e => setName(e.target.value === "" ? "ชื่อ": e.target.value )}></input>
      <input value={Bio} bio='Bio' onChange={e => setBio(e.target.value === "" ? "Biooo": e.target.value)}></input>
      <Info name={Name} bio={Bio}/>
    </div>
    );
}

const Info = ({name,bio}) => {
    // ใน para (props)
    // {props.name},{props.bio}
    return(
        <div>
            <h1>{name}</h1>
            <p>{bio}</p>
            <a href="Your Facebook">Facebook</a>
            <a href="Your Twitter">Twitter</a>
        </div>
    );
}


export default App;