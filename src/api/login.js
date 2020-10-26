import ajax from "./ajax"

//定义一个全局变量--全局路径
const Base_URL="/api" 
// http://192.168.0.176:3000/v1/users/login

export const loginuser=(username,password,captcha)=>ajax(Base_URL+"/v1/users/login",{user_name:username,login_password:password,captcha},"post")