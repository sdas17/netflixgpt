export const  checkvalidate =(email,password,name)=>{
    const emailRegex = /^[a-z0-9][\w\.]+\@\w+?(\.\w+){1,}$/.test(email);
    // Password validation: at least 8 characters, at least one number or special character, one uppercase, and one lowercase letter
    const passwordRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])/.test(password);
    

    //name validation
    const nameRegex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(name);

    // Email validation check
    if (!emailRegex) {
      return 'Email is not valid';
    }
   if (!nameRegex) {
    return 'Name is not valid'
    
   }
    // Password validation check
    if (!passwordRegex) {
      return `Password is not valid.`;
    }
  
    // If both validations pass
    return null;
}