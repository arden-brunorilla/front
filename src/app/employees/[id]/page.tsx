import { getEmployeeById } from '@/application/services/employeeService';
import type { Employee } from '@/domain/entities/Employee';

export const dynamic = 'force-dynamic';

interface Props {
    params: { id: string };
}

export default async function EmployeeDetailPage({ params }: Props) {
    let employee: Employee;
    try {
        employee = await getEmployeeById(params.id);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        return <div className="p-6 text-red-600">Error cargando empleado: {message}</div>;
    }

    return (
        <div className="p-6 space-y-2">
            <h1 className="text-2xl font-bold">{employee.name}</h1>
            <p><strong>Rol:</strong> {employee.role}</p>
        </div>
    );
}