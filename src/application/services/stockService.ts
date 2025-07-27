import { StockDto } from '@/application/dto/StockDto'
import { Stock } from '@/domain/entities/Stock'
import { toStock } from '@/application/adapters/stockAdapter'
const BASE_URL = process.env.STOCK_SERVICE_URL!;

/**
 * Fetches all stocks from the backend via the rewrites proxy.
 */
export async function listStocks(): Promise<Stock[]> {
    const res = await fetch(`${BASE_URL}/stocks`, {
        cache: 'no-store'
    })
    console.log(res)
    if (!res.ok) {
        throw new Error(`Error fetching stocks: ${res.status} ${res.statusText}`)
    }
    const dtos: StockDto[] = await res.json()
    return dtos.map(toStock)
}

/**
 * Fetches a single stock by ID.
 */
export async function getStockById(id: string): Promise<Stock> {
    const res = await fetch(`/api/stocks/${id}`, {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error(`Error fetching stock ${id}: ${res.status} ${res.statusText}`)
    }
    const dto: StockDto = await res.json()
    return toStock(dto)
}