import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import foods from '../public/data/foods.json'
import Food from "../interfaces/food";
import { router } from "next/client";

const Random: NextPage = () => {
    const [showFoodTagListFlag, setShowFoodTagListFlag] = useState<boolean>(false)

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

    // 荤菜数量
    const [meatFoodsCount, setMeatFoodsCount] = useState<number>(2)
    const changeMeatFoodsCount = (count: number) => {
        setMeatFoodsCount(count)
    }

    // 素菜数量
    const [vegetableFoodsCount, setVegetableFoodsCount] = useState<number>(3)
    const changeVegetableFoodsCount = (count: number) => {
        setVegetableFoodsCount(count)
    }

    // 菌藻数量
    const [algaeFoodsCount, setAlgaeFoodsCount] = useState<number>(1)
    const changeAlgaeFoodsCount = (count: number) => {
        setAlgaeFoodsCount(count)
    }

    // 主食数量
    const [stapleFoodsCount, setStapleFoodsCount] = useState<number>(1)
    const changeStapleFoodsCount = (count: number) => {
        setStapleFoodsCount(count)
    }

    // 保存食物清单
    let saveFoodList = function () {
        localStorage.setItem("foodList", JSON.stringify(chooseFoodList))
        console.log('选择的食物', chooseFoodList)
        alert("已保存")
        router.push("/cook")
    }

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

    // 选定的配料
    const [chooseFoodList, setChooseFoodList] = useState<Food[]>([])

    return (<div className={ styles.container }>
        <Head>
            <title>麻辣烫配料清单生成器</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className={ styles.main }>
            <h1 className={ styles.title }>
                随机搭配
            </h1>

            <p>自动生成一份荤素搭配带有主食的配料表</p>

            <div style={ { display: "flex", alignItems: "baseline" } }>
                荤菜数量：<input type="number"
                                value={ meatFoodsCount }
                                onChange={ (e) => changeMeatFoodsCount(Number(e.target.value)) }/>
            </div>
            <div style={ { display: "flex", alignItems: "baseline" } }>
                素菜数量：<input type="number"
                                value={ vegetableFoodsCount }
                                onChange={ (e) => changeVegetableFoodsCount(Number(e.target.value)) }/>
            </div>
            <div style={ { display: "flex", alignItems: "baseline" } }>
                菌藻数量：<input type="number"
                                value={ algaeFoodsCount }
                                onChange={ (e) => changeAlgaeFoodsCount(Number(e.target.value)) }/>
            </div>
            <div style={ { display: "flex", alignItems: "baseline" } }>
                主食数量：<input type="number"
                                value={ stapleFoodsCount }
                                onChange={ (e) => changeStapleFoodsCount(Number(e.target.value)) }/>
            </div>

            <div>
                <button style={ { fontSize: "xx-large" } } onClick={ saveFoodList }>生成配料表</button>
            </div>

            <label>
                <input
                    type="checkbox"
                    checked={ showFoodTagListFlag }
                    onChange={ () => setShowFoodTagListFlag(!showFoodTagListFlag) }
                />
                显示食物标签
            </label>

            <div>这里展示随机生成的配料表</div>
            {/*<ul>*/ }

            {/*</ul>*/ }

            <div>
                <p style={ { textAlign: "center" } }>已选择 { chooseFoodList.length } 种配料</p>
                <button style={ { fontSize: "xx-large" } } onClick={ saveFoodList }>保存配料表</button>
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
    </div>)
}

export default Random
