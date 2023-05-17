import {fetchuserinfo} from "../Userinfo"
const userinfo=fetchuserinfo()

export const initialState={
    user:userinfo,
   

}