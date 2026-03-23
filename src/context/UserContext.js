import { createContext } from "react";
const UserContext=createContext({users:[],loading:true,error:""})
export default UserContext