import axios from "axios"

export const getUsers = async (id) => {
    try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(id);
        return response.data;

    } catch (e) {
        throw new Error(e);
    }
}
