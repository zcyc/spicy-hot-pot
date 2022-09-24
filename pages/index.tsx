import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return <div className={ styles.container }>
        <Head>
            <title>麻辣烫配料清单生成器</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className={ styles.main }>
            <h1 className={ styles.title }>
                你好，麻辣烫
            </h1>

            <p className={ styles.description }>
                两种模式，满足食欲
            </p>

            <div className={ styles.grid }>
                <div className={ styles.card }>
                    <Link href="/random">
                        <a>
                            <h2>随机搭配 &rarr;</h2>
                            <p>自动生成一份荤素搭配并带有主食的配料清单</p>
                        </a>
                    </Link>
                </div>
                <div className={ styles.card }>
                    <Link href="/choose">
                        <a>
                            <h2>自己搭配 &rarr;</h2>
                            <p>选择你喜欢的主食和配菜并生成一份配料清单</p>
                        </a>
                    </Link>
                </div>
                <div className={ styles.card }>
                    <Link href="/foods">
                        <a>
                            <h2>配料管理 &rarr;</h2>
                            <p>将配料加入黑名单，或者向配料表中添加新配料</p>
                        </a>
                    </Link>
                </div>
                <div className={ styles.card }>
                    <Link href="/cook">
                        <a>
                            <h2>开始烹饪 &rarr;</h2>
                            <p>根据提示分批下入配料，保证煮熟的同时保证口感</p>
                        </a>
                    </Link>
                </div>
            </div>
        </main>

        <footer className={ styles.footer }>
            <p>Created by
                <a
                    href="https://github.com/zcyc"
                    target="_blank" rel="noreferrer"
                > @Charles </a>
                &
                <a
                    href="https://github.com/jerryshell"
                    target="_blank" rel="noreferrer"
                > @Jerry </a>
            </p>
        </footer>
    </div>
}

export default Home
