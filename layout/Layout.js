import Head from 'next/head';
import Image from 'next/image';

export default function Home({ children, pagina }) {
    return (
        <>
            <Head>
                <title>Café - {pagina}</title>
                <meta name="description" content="Quosco Cafetería" />
            </Head>

            <div className='md:flex'>
                <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
                    <h1>Sidebar aquí</h1>
                </aside>
                <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
                    {children}
                </main>
            </div>
        </>
    )
}