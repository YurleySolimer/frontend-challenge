import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { getServerSyncAPIURL } from "../helpers/getServer";
import { useNavigate } from "react-router-dom";
import { FaFileCsv } from "react-icons/fa";

function Dashboard() {
    const [files, setFiles] = useState()
    const navigate = useNavigate()
    const handleFile = (fileName) => {
        navigate("/file",  { state: { file: fileName } });
    }
    useEffect(()=> {
        async function getFiles() {
            axios
            .get(`${getServerSyncAPIURL()}/files/list`)
            .then((res) => {
                setFiles(res.data)
            })
            .catch((error) => {
              console.error(error);
            });
        }
        getFiles()
    }, [])

    return(
        <div>
           <h2>Inicio</h2>
           <Table  striped bordered hover size="sm" responsive style={{cursos: 'pointer'}}>
            <thead>
                <tr>
                    <th> Filename</th>
                </tr>
            </thead>
            <tbody>
                {files && (
                    <>
                    <tr>
                        <td 
                            onClick={() => {
                                handleFile('all')
                            }}> <FaFileCsv/> ALL FILES
                        </td>
                    </tr>
                    {files?.map((file) => {
                        return (
                            <> 
                            <tr>
                                <td 
                                    onClick={() => {
                                        handleFile(file)
                                    }}> <FaFileCsv/> {file}
                                </td>
                            </tr>
                            </>
                        )
                    })}
                    
                    </>
                )}
            </tbody>
           </Table>
        </div>
    )
}
export default Dashboard