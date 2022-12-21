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
            const url = file === 'all' 
                        ?`${getServerSyncAPIURL()}/files/data`
                        :`${getServerSyncAPIURL()}/files/data?fileName=${file}`
            axios
            .get(url)
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
    <div className="m-2">
        <Button size="sm" onClick={() => {handleBack()}}>
            <FaArrowLeft/> Back
        </Button>
    </div>

    <Table className="m-1 table"  striped bordered hover size="sm" responsive>
     <thead class="thead-dark">
         <tr>
         <th>File</th>
         <th>Text</th>
         <th>Number</th>
         <th>Hex</th>
         </tr>
     </thead>
     <tbody>
         {fileData && (
             <>
              {fileData?.map((files) => {
                 return(
                     <>
                     {files?.lines?.map((line) => {
                         return(
                             <>
                             <tr>
                             <td>{files.file}</td>
                             <td>{line?.text}</td>
                             <td>{line?.number}</td>
                             <td>{line?.hex}</td>
                             </tr>
                             </>
                         )
                     })}
                 </>
                 )
             })}
             </>
         )}
     </tbody>
    </Table>
    </>
  )
}

export default FileTable