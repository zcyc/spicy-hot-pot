import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Choose: NextPage = () => {
    return (<div className={ styles.container }>
        <Head>
            <title>自己搭配</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css"/>
        </Head>

        <main className={ styles.main }>
            <h1 className={ styles.title }>
                自己搭配
            </h1>

            <p className={ styles.description }>
                选择你喜欢的主食和配菜并生成一份配料表
            </p>


        </main>

        <footer className={ styles.footer }>

        </footer>
    </div>)
}

export default Choose
