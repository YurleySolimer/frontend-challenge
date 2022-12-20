import React from 'react'
import Table from 'react-bootstrap/Table';

function Dashboard() {
    return(
        <div>
           <h2>Dashboard</h2>
           <Table  striped bordered hover size="sm" responsive>
            <thead>
                <tr>
                <th>Filename</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>file1</td>
                <td>xfdffc</td>
                <td>4545</td>
                <td>dfd56rfg</td>
                </tr>
                <tr>
                <td>file1</td>
                <td>xfdffc</td>
                <td>4545</td>
                <td>dfd56rfg</td>
                </tr>
                <tr>
                <td>file1</td>
                <td>xfdffc</td>
                <td>4545</td>
                <td>dfd56rfg</td>
                </tr>
            </tbody>
            </Table>
        </div>
    )
}
export default Dashboard