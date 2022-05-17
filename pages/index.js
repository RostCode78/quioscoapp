import Head from 'next/head';
import Image from 'next/image';
import { PrismaClient } from '@prisma/client';

export default function Home({ categorias }) {

  console.log(categorias);

  return (
    <h1>Hola amigo</h1>
  )
}

export const getServerSideProps = async () => {

  const prisma = new PrismaClient();

  // De esta formas definimos un where.
  // Es decir que nos trae el parametro con el valor escrito.
  // const categorias = await prisma.categoria.findFirst({
  //   where: {
  //     nombre: "Pizzas"
  //   }
  // })

  const categorias = await prisma.categoria.findMany();

  return {
    props: {
      categorias
    }
  }

}