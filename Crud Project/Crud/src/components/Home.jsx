import React, { useState } from 'react'
import Employee from '../Employee'
import { Button,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link,  } from 'react-router-dom'


function Home() {
    

    const [employees, setEmployees] = useState(Employee); 

    const handleDelete = id => {
        
        const updatedEmployeeList = employees.filter(item => item.id !== id);
        
        setEmployees(updatedEmployeeList);
     
     
    };

    const handleEdit = (id, name, age) => {
        const formData = { id, name, age };
        localStorage.setItem('formData', JSON.stringify(formData));
        setEmployees(formData)
    }
    
  return (
    <>
        <div style={{margin:'10rem'}}>
        <Table striped bordered hover size='sm' >
                <thead >
                <tr >
                    <th>
                        Id
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
                </thead>
            <tbody>
                {
                    employees && employees.length > 0 
                    ?
                    employees.map( (item) => {
                        return(
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>
                                    <Link to={'/edit'}>
                                    <Button onClick={() => handleEdit(item.id, item.name, item.age)}>Edit</Button>

                                    </Link>
                                    &nbsp;
                                    <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })
                    :
                    "No Data Found"
                }

            </tbody>
        </Table>
        <br />
        <br />
        <Link className='d-grid gap-2' to="/create">
            <button size="lg">Create</button>
        </Link>
        </div>
    </>
  )
}

export default Home