import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return <div className={ styles.container }>
        <Head>
            <title>你好，麻辣烫</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css"/>
        </Head>

        <main className={ styles.main }>
            <h1 className={ styles.title }>
                获取你的麻辣烫配料表
            </h1>

            <p className={ styles.description }>
                两种模式，随心所欲
            </p>

            <div className={ styles.grid }>
                <div className={ styles.card }>
                    <Link href="/random">
                        <a>
                            <h2>随机搭配 &rarr;</h2>
                            <p>自动生成一份荤素搭配带有主食的配料表</p>
                        </a>
                    </Link>
                </div>
                <div className={ styles.card }>
                    <Link href="/choose">
                        <a>
                            <h2>自己搭配 &rarr;</h2>
                            <p>选择你喜欢的主食和配菜并生成一份配料表</p>
                        </a>
                    </Link>
                </div>
                <div className={ styles.card }>
                    <Link href="/foods">
                        <a>
                            <h2>配料管理 &rarr;</h2>
                            <p>向配料表中添加新的配料，或者将配料加入黑名单</p>
                        </a>
                    </Link>
                </div>
                <div className={ styles.card }>
                    <Link href="/do">
                        <a>
                            <h2>开始烹饪 &rarr;</h2>
                            <p>根据提示，按照配料的耐熟程度，分批下入配料</p>
                        </a>
                    </Link>
                </div>
            </div>
        </main>

        <footer className={ styles.footer }>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{ ' ' }
                <img src="/vercel.svg" alt="Vercel" className={ styles.logo }/>
            </a>
        </footer>
    </div>
}

export default Home
