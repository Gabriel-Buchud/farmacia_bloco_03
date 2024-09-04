import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <div className="flex justify-center bg-red-600 text-white">
            <div className="flex flex-col items-center py-6 container">
                <p className='font-bold text-lg text-center'>PharmaShop Saúde e Bem Estar</p>
                <p className='text-md mb-4 text-center'>© {data} | Todos os direitos reservados</p>
                <p className='text-lg mb-2'>Acesse nossas redes sociais</p>
                <div className='flex gap-4'>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        <LinkedinLogo size={32} weight='bold' />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        <InstagramLogo size={32} weight='bold' />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        <FacebookLogo size={32} weight='bold' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
