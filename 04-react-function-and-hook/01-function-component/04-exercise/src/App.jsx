import React from 'react';

const App = () => {
    return (
        <div id="App">
            <Header />
            <InputB />
            <TableH />
            <TableB1 />
            <TableB2 />
            <TableB3 />
        </div>
    );
}

const Header = () => {
    return(
        <>
            <h1>Table Example</h1>
        </>
    );
}

const InputB = () => {
    return(
        <>
            <input type="text" placeholder="Type new name here"></input>
            <input type="text" placeholder="Type new organization here"></input>
            <input type="text" placeholder="Type new position here"></input>
            <button>Save</button>
        </>
    );
}


const TableH = ()=> {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Organization</th>
                <th>Position</th>
            </tr>
        </table>
    );
}

const TableB1 = () => {
    return(
        <table>
            <tr>
                <tb>John ABC Inc. Developer</tb>
            </tr>
        </table>
    );
}

const TableB2 = () => {
    return(
        <table>
            <tr>
            <tb>Jane XYZ Corp. Designer</tb>
            <tb>XYZ Corp.</tb>
            <tb>Designer</tb>
            </tr>
        </table>
    );
}

const TableB3 = () => {
    return(
        <table>
            <tr>
            <tb>Bob 123 LLC Manager</tb>
            </tr>
        </table>
    );
}
export default App;