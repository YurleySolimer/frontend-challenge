import axios from "axios";
import { getServerSyncAPIURL } from "../helpers/getServer";

export async function getFiles() {
    axios
    .get(`${getServerSyncAPIURL()}/api/v1`)
    .then((res) => {
        return res
    })
    .catch((error) => {
      console.error(error);
    });
};

  
