import {StockDto} from "@/application/dto/StockDto";
import {Stock} from '@/domain/entities/Stock'


export function toStock(dto: StockDto): Stock {
    return {
        id: dto.stockId,
        type: dto.type,
        name: dto.address
    };
}