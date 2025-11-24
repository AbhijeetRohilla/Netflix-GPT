export const Validation=(email,password)=>{
const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

if(!emailRegex){
    return {valid:false , message:"Invalid Email format",failedValidation:"email"};
}
if(!passwordRegex){
    return {valid:false , message:"Password must be at least 8 characters long and contain at least one letter and one number",failedValidation:"password"};
}
return {valid:true, message:"Validation Successful"}
}