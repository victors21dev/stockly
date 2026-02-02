import { LayoutGrid, PackageIcon, ShoppingBasketIcon } from 'lucide-react'
import SidebarButton from './sidebar-button'
import { ModeToggle } from './button-theme'

const Sidebar = () => {
  return (
    <div className="w-64 bg-card">
      {/* IMAGEM */}
      <div className="px-8 py-6">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">STOCKLY</h1>
          <ModeToggle />
        </div>
      </div>
      {/* Botões */}
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton href="/">
          <LayoutGrid size={20} />
          Dashboard
        </SidebarButton>
        <SidebarButton href="/products">
          <PackageIcon size={20} />
          Produtos
        </SidebarButton>
        <SidebarButton href="/sales">
          <ShoppingBasketIcon size={20} />
          Vendas
        </SidebarButton>
      </div>
    </div>
  )
}

export default Sidebar
