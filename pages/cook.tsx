import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import Food from "../interfaces/food";

const Cook: NextPage = () => {
    const [foodList, setFoodList] = useState<Food[]>([])

    useEffect(() => {
        const foodList = JSON.parse(localStorage.getItem('foodList') || '[]') as Food[]
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
                请前往菜市或超市购买配料，然后根据耐熟程度，分批下入配料
            </p>

            <ul>
                {
                    foodList.map((food: Food, index: number) => (
                        <li key={ index }>{ food.name }</li>
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
