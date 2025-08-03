export interface Employee {
    id: string;
    name: string;
    role: Role;
}

export enum Role {
    SalesRep = 'Sales Rep',
    Manager  = 'Manager',
    Admin    = 'Admin',
}