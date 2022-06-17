import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import foods from "../public/data/foods.json";
import { useEffect, useState } from "react";
import Food from "../interfaces/food";

const Choose: NextPage = () => {
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

    const [chooseFoodList, setChooseFoodList] = useState<string[]>([])

    const handleFoodChoose = (food: string) => {
        if (chooseFoodList.includes(food)) {
            setChooseFoodList(chooseFoodList.filter(chooseFood => chooseFood !== food))
        } else {
            setChooseFoodList([...chooseFoodList, food])
        }
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

    return (<div className={ styles.container }>
        <Head>
            <title>自己搭配</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className={ styles.main }>
            <h1 className={ styles.title }>
                自己搭配
            </h1>

            <p>选择你喜欢的主食和配菜并生成一份配料表</p>

            <details className={ styles.details }>
                <summary className={ styles.summary }>荤菜</summary>
                <ul>
                    { meatFoods.map((food, index) => (
                        <li key={ index }>
                            <label>
                                <div className={ styles.row }>
                                    <input
                                        type="checkbox"
                                        checked={ chooseFoodList.includes(food.name) }
                                        onChange={ () => handleFoodChoose(food.name) }
                                    />
                                    { food.name }
                                    <ul>
                                        { food.tagList.map((tag, index) => (
                                            <li key={ index } style={ { display: "inline-block" } }>
                                                <label>
                                                    # { tag }&nbsp;&nbsp;
                                                </label>
                                            </li>
                                        )) }
                                    </ul>
                                </div>
                            </label>
                        </li>
                    )) }
                </ul>
            </details>
            <details className={ styles.details }>
                <summary className={ styles.summary }>素菜</summary>
                <ul>
                    { vegetableFoods.map((food, index) => (
                        <li key={ index }>
                            <label>
                                <div className={ styles.row }>
                                    <input
                                        type="checkbox"
                                        checked={ chooseFoodList.includes(food.name) }
                                        onChange={ () => handleFoodChoose(food.name) }
                                    />
                                    { food.name }
                                    <ul>
                                        { food.tagList.map((tag, index) => (
                                            <li key={ index } style={ { display: "inline-block" } }>
                                                <label>
                                                    # { tag }&nbsp;&nbsp;
                                                </label>
                                            </li>
                                        )) }
                                    </ul>
                                </div>
                            </label>
                        </li>
                    )) }
                </ul>
            </details>
            <details className={ styles.details }>
                <summary className={ styles.summary }>菌藻</summary>
                <ul>
                    { algaeFoods.map((food, index) => (
                        <li key={ index }>
                            <label>
                                <div className={ styles.row }>
                                    <input
                                        type="checkbox"
                                        checked={ chooseFoodList.includes(food.name) }
                                        onChange={ () => handleFoodChoose(food.name) }
                                    />
                                    { food.name }
                                    <ul>
                                        { food.tagList.map((tag, index) => (
                                            <li key={ index } style={ { display: "inline-block" } }>
                                                <label>
                                                    # { tag }&nbsp;&nbsp;
                                                </label>
                                            </li>
                                        )) }
                                    </ul>
                                </div>
                            </label>
                        </li>
                    )) }
                </ul>
            </details>
            <details className={ styles.details }>
                <summary className={ styles.summary }>主食</summary>
                <ul>
                    { stapleFoods.map((food, index) => (
                        <li key={ index }>
                            <label>
                                <div className={ styles.row }>
                                    <input
                                        type="checkbox"
                                        checked={ chooseFoodList.includes(food.name) }
                                        onChange={ () => handleFoodChoose(food.name) }
                                    />
                                    { food.name }
                                    <ul>
                                        { food.tagList.map((tag, index) => (
                                            <li key={ index } style={ { display: "inline-block" } }>
                                                <label>
                                                    # { tag }&nbsp;&nbsp;
                                                </label>
                                            </li>
                                        )) }
                                    </ul>
                                </div>
                            </label>
                        </li>
                    )) }
                </ul>
            </details>

            <button>生成配料表</button>
        </main>

        <footer className={ styles.footer }>

        </footer>
    </div>)
}

export default Choose
