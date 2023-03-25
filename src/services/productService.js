import axios from 'axios';
import { PRODUCT_URL_PREFIX } from '../constant/apiConstants';

export function saveProduct(product) {
    return axios.post(PRODUCT_URL_PREFIX, product)
}

export function fetchAllProducts() {
    return axios.get(PRODUCT_URL_PREFIX)
}