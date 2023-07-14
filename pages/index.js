import Feed from '@/components/Feed';
import Header from '@/components/Header'
import Login from '@/components/Login';
import RightSidebar from '@/components/RightSidebar';
import Sidebar from '@/components/Sidebar'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export default function Home({session}) {
  if(!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className='flex bg-gray-100' >
        {/* {LeftSidebar } */}
        <Sidebar />
        {/* {Feed and Post Section} */}
        <Feed/>
        {/* {Right Sidebar} */}
        <RightSidebar/>
      </main>
    </div>
  );
}
export async function getServerSideProps(context){
  const session= await getSession(context);
  return {
    props: {session},
  };
}