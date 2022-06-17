import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Foods: NextPage = () => {
    return (<div className={ styles.container }>
        <Head>
            <title>配料管理</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css"/>
        </Head>

        <main className={ styles.main }>
            <h1 className={ styles.title }>
                配料管理
            </h1>

            <p className={ styles.description }>
                向配料表中添加新配料，或者将配料加入黑名单
            </p>

        </main>

        <footer className={ styles.footer }>

        </footer>
    </div>)
}

export default Foods
