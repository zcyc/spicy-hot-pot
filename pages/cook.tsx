import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";

const Cook: NextPage = () => {
    const [foodList, setFoodList] = useState<string[]>([])

    useEffect(() => {
        const foodList = JSON.parse(localStorage.getItem('foodList') || '[]')
        setFoodList(foodList)
    }, [])

    return (<div className={ styles.container }>
        <Head>
            <title>麻辣烫配料清单生成器</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className={ styles.main }>
            <h1 className={ styles.title }>
                开始做菜
            </h1>

            <p className={ styles.description }>
                根据提示，按照配料的耐熟程度，分批下入配料
            </p>

            <ul>
                {
                    foodList.map((foodName: string, index: number) => (
                        <li key={ index }>{ foodName }</li>
                    ))
                }
            </ul>
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
    </div>)
}

export default Cook
