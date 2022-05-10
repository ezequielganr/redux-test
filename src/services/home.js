import axios from "axios"
import { url } from "./url";

export const getCategories = async () => {
    try {
        let response = await axios.get(url + "/categories");
        return response.data;

    } catch (e) {
        console.log(e);
    }
}

export const getBanners = async () => {
    try {
        let response = await axios.get(url + "/banners");
        return response.data;

    } catch (e) {
        console.log(e);
    }
}

export const getHome = async () => {
    try {
        let response = await axios.get(url + "/home");
        return response.data;

    } catch (e) {
        console.log(e);
    }
}
