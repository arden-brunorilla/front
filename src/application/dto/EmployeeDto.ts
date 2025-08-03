import {Role} from "@/domain/entities/Employee";

export interface EmployeeDto {
    employeeId: string;
    name: string;
    role: Role;
}