'use client';

import Link from 'next/link';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink
} from '@/components/ui/navigation-menu';

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-white border-r">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/stocks">Stocks</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/sales">Ventas</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/employees">Empleados</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    {/* Agrega más items según tu dominio */}
                </NavigationMenuList>
            </NavigationMenu>
        </aside>
    );
}