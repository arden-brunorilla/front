import {EmployeeDto} from '@/application/dto/EmployeeDto';
import {Employee} from '@/domain/entities/Employee';
import {toEmployee} from '@/application/adapters/employeeAdapter';

const BASE_URL = process.env.SALE_SERVICE_URL;

export async function listEmployees(): Promise<Employee[]> {
    const res = await fetch(`${BASE_URL}/people/employees`, {
        cache: 'no-store'
    });
    if (!res.ok) {
        throw new Error(`Error fetching employees: ${res.status} ${res.statusText}`);
    }
    const dtos: EmployeeDto[] = await res.json();
    return dtos.map(toEmployee);
}

export async function getEmployeeById(id: string): Promise<Employee> {
    const res = await fetch(`${BASE_URL}/people/employees/${id}`, {
        cache: 'no-store'
    });
    if (!res.ok) {
        throw new Error(`Error fetching employee ${id}: ${res.statusText}`);
    }
    const dto: EmployeeDto = await res.json();
    return toEmployee(dto);
}