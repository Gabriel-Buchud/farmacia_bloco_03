import { User, ShoppingCart, MagnifyingGlass, FirstAidKit } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div className='flex justify-center bg-red-600 py-4 w-full text-white'>
            <div className="flex justify-between text-lg container">
                <Link to='/home' className='flex items-center gap-2'>
                    <FirstAidKit size={32} weight="bold" className='text-white' />
                    <span className="text-xl font-bold">PharmaShop</span>
                </Link>

                <div className="relative flex flex-1 justify-center items-center w-30 text-black">
                    <form className="flex justify-center w-3/4">
                        <input className="px-4 py-4 rounded-lg w-10/12 h-9 focus:outline-none"
                            type="search"
                            placeholder="Pesquisar produto"
                            id="busca"
                            name="busca"
                            required
                        />
                        <button type="submit" className="bg-red hover:bg-red-800 text-white hover:text-white p-2.5 border border-white rounded-lg focus:ring-4 focus:ring-white w-9 h-9 font-medium text-sm ms-2 focus:outline-none">
                            <MagnifyingGlass size={14} weight="bold" />
                        </button>
                    </form>
                </div>

                <div className='flex gap-6 items-center'>
                    <Link to='/produtos' className='hover:underline'>Produtos</Link>
                    <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    <Link to='/cadcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                    <User size={32} weight='bold' />
                    <ShoppingCart size={32} weight='bold' />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
