export interface signUp {
    id: number;
    phoneNumber: string;

    email: string;
    password: string;
    username: string;
    numberofdepart:number;

}
export interface signIn{
    email:string;
    password:string
}


export interface updateMe {
    email: string;
    name: string;
    phone: string;

}
export interface changeMyPassword {
    currentPassword: string;
    password: string;
    repassword: string;
}





export interface forgotPasswords {
    resetCode: string;
}
export interface resetCode {
    resetCode: string;
}

export interface resetPassword {
    email: string;
    newPassword: string;

}
