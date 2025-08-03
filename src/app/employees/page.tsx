import { listEmployees } from '@/application/services/employeeService';
import type { Employee } from '@/domain/entities/Employee';

export const dynamic = 'force-dynamic';

export default async function EmployeesPage() {
    let employees: Employee[];
    try {
        employees = await listEmployees();
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        return <div className="p-6 text-red-600">Error cargando empleados: {message}</div>;
    }

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-3xl font-bold">Listado de Empleados</h1>
            <ul className="divide-y">
                {employees.map((e) => (
                    <li key={e.id} className="py-2 flex justify-between">
            <span>
              <strong>{e.name}</strong> — {e.role}
            </span>
                        {/* Next.js Link en App Router */}
                        <a href={`/employees/${e.id}`} className="text-blue-600 hover:underline">
                            Ver detalle
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}