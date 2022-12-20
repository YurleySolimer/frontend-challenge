import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { getFiles } from '../actions/getFiles';
import axios from "axios";
import { getServerSyncAPIURL } from "../helpers/getServer";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [files, setFiles] = useState()
    const navigate = useNavigate()
    const handleFile = (fileName) => {
        navigate("/file",  { state: { file: fileName } });
    }
    useEffect(()=> {
        async function getFiles() {
            axios
            .get(`${getServerSyncAPIURL()}/api/v1`)
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
           <Table  striped bordered hover size="sm" responsive>
            <thead>
                <tr>
                <th>Filename</th>
                </tr>
            </thead>
            <tbody>
                {files && (
                    <>
                    {files?.map((file) => {
                        return (
                            <> 
                            <tr>
                                <td onClick={() => {
                                    handleFile(file)
                                }}>{file}</td>
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