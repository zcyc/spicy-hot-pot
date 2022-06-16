import Head from 'next/head'
import { useEffect } from "react";
import foods from "../public/data/foods.json";

export default function Random() {
    // 从 localStorage 获取黑名单和用户菜品
    let blackList = []
    let userFoods = []
    useEffect(() => {
        blackList = JSON.parse(localStorage.getItem('blackList'))
        userFoods = JSON.parse(localStorage.getItem('userFoods'))
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

    return (<div className="container">
        <Head>
            <title>随机搭配</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css"/>
        </Head>
        <main>
            <h1 className="title">
                随机搭配
            </h1>
            <div>
                <button>生成配料</button>
            </div>
            {/*<ul>*/ }
            {/*    { meatFoods.map(food => (<li key={ food.name }>*/ }
            {/*        { food.name }*/ }
            {/*    </li>)) }*/ }
            {/*</ul>*/ }
        </main>
        <footer>
        </footer>
    </div>)
}
