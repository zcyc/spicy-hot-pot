import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Do: NextPage = () => {
    return (<div className={ styles.container }>
        <Head>
            <title>开始做菜</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css"/>
        </Head>

        <main className={ styles.main }>
            <h1 className={ styles.title }>
                开始做菜
            </h1>

            <p className={ styles.description }>
                根据提示，按照配料的耐熟程度，分批下入配料
            </p>

        </main>

        <footer className={ styles.footer }>

        </footer>
    </div>)
}

export default Do
