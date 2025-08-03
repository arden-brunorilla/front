import {EmployeeDto} from "@/application/dto/EmployeeDto";
import {Employee} from "@/domain/entities/Employee";

export function toEmployee(dto: EmployeeDto): Employee {
    return {
        id: dto.employeeId,
        name: dto.name,
        role: dto.role,
    };
}