import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from "react";
import foods from "../public/data/foods.json";

const Random: NextPage = () => {
    // 从 localStorage 获取黑名单和用户菜品
    let blackList: any[] = []
    let userFoods: any[] = []
    useEffect(() => {
        blackList = JSON.parse(localStorage.getItem("blackList") || "[]")
        userFoods = JSON.parse(localStorage.getItem("userFoods") || "[]")
    }, [])

    // 过滤黑名单
    console.log("黑名单食物", blackList)
    let canUseFoods = foods.filter(item => blackList.every(food => item.name !== food.name))
    console.log("默认食物", foods)
    console.log("过滤后食物", canUseFoods)

    // 加入自定义食材
    console.log("用户食物", userFoods)
    canUseFoods.push.apply(canUseFoods, userFoods);
    console.log("合并后食物", canUseFoods)

    // 荤菜
    let meatFoods = canUseFoods.filter(item => item.category === "荤菜")
    console.log("荤菜", meatFoods)

    // 素菜
    let vegetableFoods = canUseFoods.filter(item => item.category === "素菜")
    console.log("素菜", vegetableFoods)

    // 菌藻
    let algaeFoods = canUseFoods.filter(item => item.category === "菌藻")
    console.log("菌藻", algaeFoods)

    // 主食
    let stapleFoods = canUseFoods.filter(item => item.category === "主食")
    console.log("主食", stapleFoods)

    return (<div className={ styles.container }>
        <Head>
            <title>随机搭配</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css"/>
        </Head>

        <main className={ styles.main }>
            <h1 className={ styles.title }>
                随机搭配
            </h1>

            <p className={ styles.description }>
                自动生成一份荤素搭配带有主食的配料表
            </p>

            <div>
                <button>生成配料</button>
            </div>
        </main>

        <footer className={ styles.footer }>

        </footer>
    </div>)
}

export default Random
