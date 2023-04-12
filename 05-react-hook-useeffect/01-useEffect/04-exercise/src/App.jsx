import React from 'react';

function App() {
  const employee1 = {
    Name: "John",
    Organization: "ABCInc.",
    Position: "Developer"  
}
const employee2 = {
    Name: "Jane",
    Organization: "XYZCorp.",
    Position: "Designer"
}
const employee3 = {
    Name: "Bob",
    Organization: "123LLC",
    Position: "Manager"
}

const employees = [employee1,employee2,employee3]

const showEmployee = (iter) => {
    return (
        <tr>
            <td>{iter.Name}</td>
            <td>{iter.Organization}</td>
            <td>{iter.Position}</td>
        </tr>
    )
}

employees.map(showEmployee)

return (
    <div className="App"> {/* Add class name */}
    <h1>Table Example</h1>
    <div>
      <input type="text" placeholder="Type new name here" style={{margin: '4px'}} />
      <input type="text" placeholder="Type new organization here" style={{margin: '4px'}} />
      <input type="text" placeholder="Type new position here" style={{margin: '4px'}} />
      <button style={{margin: '4px'}}>Save</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Organization</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(showEmployee)}
      </tbody>
    </table>
  </div>
);

}

export default App;
