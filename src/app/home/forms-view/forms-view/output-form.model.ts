export interface Address {
    street: string;
    numberSt: number;
    city: string;
    zipCode: string;
}


export enum TypePeopleEnum {
    FISICA = 'Fisica',
    JURIDICA = 'Juridica'
}

export interface Child {
    name: string;
    age: number;
}

export interface EmployeeForm {
    name: string;
    age: number;
    birthDate: string;
    email: string;
    cpf: string;
    cnpj: string;
    observation: string;
    type: TypePeopleEnum;
    address: Address;
    skills: string[];
    children: Child [];
}
