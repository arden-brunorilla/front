import type { NextConfig } from "next";

const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/cars/:path*',
                destination: `${process.env.CAR_SERVICE_URL}/:path*`,
            },
            {
                source: '/api/maintenances/:path*',
                destination: `${process.env.MAINTENANCE_SERVICE_URL}/:path*`,
            },
            {
                source: '/api/sales/:path*',
                destination: `${process.env.SALE_SERVICE_URL}/:path*`,
            },
            {
                source: '/api/stocks/:path*',
                destination: `${process.env.STOCK_SERVICE_URL}/:path*`,
            },
        ];
    },
};

export default nextConfig;
