import { jwtDecode } from "jwt-decode";

const verifyToken = (token) = {
    try {
        const decoded = jwtDecode(token);
        return decoded.exp > Date.now() / 1000;
    } catch (error) {
        return false;
    }
};

export default verifyToken;