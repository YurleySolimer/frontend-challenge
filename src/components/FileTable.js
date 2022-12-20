import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { getServerSyncAPIURL } from "../helpers/getServer";
import { useLocation, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { FaArrowLeft } from "react-icons/fa";


function FileTable() {
    const [fileData, setFileData] = useState()
    const location = useLocation();
    const file = location?.state?.file;
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }
    useEffect(()=> {
        async function getFile() {
            console.log('file', file)
            axios
            .get(`${getServerSyncAPIURL()}/api/v1/${file}`)
            .then((res) => {
                setFileData(res.data)
            })
            .catch((error) => {
              console.error(error);
            });
        }

        getFile()
    }, [file])
  return (
    <>
    <Button onClick={() => {handleBack()}}>
        <FaArrowLeft/> Back
    </Button>
    <div>{file}</div>
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
                {fileData && (
                    <>
                    {fileData}
                    </>
                )}
            </tbody>
            </Table>
    </>
  )
}

export default FileTable