export interface RegisterForm {
    firstName: string;
    lastName: string;
    userName: string;
    gender: string;
    dob: string;
    phoneNumber: number;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface RegisterResponse {
    usernameInvalid: boolean;
    emailInvalid: boolean;
    created: boolean;
}
