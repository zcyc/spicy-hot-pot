import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import foods from '../public/data/foods.json'
import Food from "../interfaces/food";

const Random: NextPage = () => {
    // 黑名单食物列表
    const [forbiddenFoodList, setForbiddenFoodList] = useState<Food[]>([])
    useEffect(() => {
        const forbiddenFoodList = JSON.parse(localStorage.getItem('forbiddenFoodListStr') || '[]') as Food[]
        setForbiddenFoodList(forbiddenFoodList)
    }, [])

    // 可以使用的食物列表
    const [availableFoodList, setAvailableFoodList] = useState<Food[]>([])
    useEffect(() => {
        console.log('默认食物', foods)
        console.log('黑名单食物', forbiddenFoodList)
        const availableFoodList = foods.filter(food => !forbiddenFoodList.some(forbiddenFood => forbiddenFood.name === food.name))
        console.log('过滤后食物', availableFoodList)
        setAvailableFoodList(availableFoodList)
    }, [forbiddenFoodList])

    // 加入自定义食材
    // console.log("用户食物", userFoods)
    // availableFoodList.push.apply(availableFoodList, userFoods);
    // console.log("合并后食物", canUseFoods)

    // 荤菜
    let meatFoods = availableFoodList.filter(item => item.category === "荤菜")
    console.log("荤菜", meatFoods)

    // 素菜
    let vegetableFoods = availableFoodList.filter(item => item.category === "素菜")
    console.log("素菜", vegetableFoods)

    // 菌藻
    let algaeFoods = availableFoodList.filter(item => item.category === "菌藻")
    console.log("菌藻", algaeFoods)

    // 主食
    let stapleFoods = availableFoodList.filter(item => item.category === "主食")
    console.log("主食", stapleFoods)

    return (<div className={ styles.container }>
        <Head>
            <title>随机搭配</title>
            <link rel="icon" href="/favicon.ico"/>
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
