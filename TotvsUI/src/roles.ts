import { DollarSign, LineChart, Package } from 'lucide-react'

export const MenuRoles: {
  [key: string]: { href: string; icon: any; label: string }[]
} = {
  almoxarifado: [
    { href: '/dashboard/warehouse', icon: LineChart, label: 'Dashboard' },
    { href: '/dashboard/warehouse/products', icon: Package, label: 'Produtos' },
    { href: '/dashboard/saidas', icon: DollarSign, label: 'Saídas' },
  ],
}
