export const Validation=(email,password)=>{
const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

if(!emailRegex){
    return {valid:false , message:"Invalid Email format",failedValidation:"email"};
}
if(!passwordRegex){
    return {valid:false , message:"Invalid Password format",failedValidation:"password"};
}
return {valid:true, message:"Validation Successful"}
}