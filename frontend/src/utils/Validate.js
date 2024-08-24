export function validatorForSignup(fullname,email,password){

    const validatenRegexForEmail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateRegexForPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?#&]{8,}$/.test(password)

    const validateForFirstname= /^[a-zA-Z\s]{3,24}$/i.test(fullname)

    if(!validateForFirstname) return "Name is not valid"
    if(!validatenRegexForEmail) return "Email is not valid"
    if(!validateRegexForPassword) return "Password is not valid"

    return null;




}


export function validatorForSignin(email,password){


    
    const validatenRegexForEmail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateRegexForPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)


    if(!validatenRegexForEmail) return "Email is not valid"
    if(!validateRegexForPassword) return "Password is not valid"

    return null;






}