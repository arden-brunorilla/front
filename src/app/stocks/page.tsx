import {listStocks} from "@/application/services/stockService";

export const dynamic = 'force-dynamic'

export default async function StocksPage() {
    let stocks;
    try {
        stocks = await listStocks();
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return (
            <div className="text-red-600">
                Error cargando stocks: {message}
            </div>
        );
    }


    return (
        <div className="space-y-4 p-6">
            <h1 className="text-3xl font-bold">Listado de Stocks (SSR)</h1>
            <ul className="divide-y">
                {stocks.map((stock) => (
                    <li key={stock.id} className="py-2 flex justify-between">
            <span>
              <strong>ID:</strong> {stock.id}
            </span>
                        <span>
              <strong>Dirección:</strong> {stock.name}
            </span>
                    </li>
                ))}
            </ul>
        </div>
    );}