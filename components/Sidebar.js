import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';

const Sidebar = () => {
    const { categorias } = useQuiosco();

    return (
        <>
            <Image
                width={300}
                height={100}
                src="/assets/img/logo.svg"
                alt="Imagen logotipo"
            />
            <nav
                className='mt-10'
            ></nav>
        </>
    )
}

export default Sidebar;