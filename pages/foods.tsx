import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import foods from '../public/data/foods.json'
import { useEffect, useState } from 'react'
import Food from '../interfaces/food'

const Foods: NextPage = () => {
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

    // 添加食物到黑名单
    const addForbiddenFood = (food: Food) => {
        const newForbiddenFoodList = [...forbiddenFoodList, food]
        setForbiddenFoodList(newForbiddenFoodList)
        localStorage.setItem('forbiddenFoodListStr', JSON.stringify(newForbiddenFoodList))
    }

    // 从黑名单删除食物
    const removeForbiddenFood = (food: Food) => {
        const newForbiddenFoodList = forbiddenFoodList.filter(forbiddenFood => forbiddenFood.name !== food.name);
        setForbiddenFoodList(newForbiddenFoodList)
        localStorage.setItem('forbiddenFoodListStr', JSON.stringify(newForbiddenFoodList))
    }

    return (<div className={ styles.container }>
        <Head>
            <title>配料管理</title>
            <link
                rel="icon"
                href="/favicon.ico"
            />
        </Head>

        <main className={ styles.main }>
            <h1 className={ styles.title }>配料管理</h1>

            <p>向配料表中添加新配料，或者将配料加入黑名单</p>

            <div>
                <button style={ { fontSize: "xx-large" } }>添加配料</button>
            </div>

            <h1>我吃的配料</h1>
            <table>
                <thead>
                <tr>
                    <th>名称</th>
                    <th>分类</th>
                    <th>耐熟</th>
                    <th>标签</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>

                { availableFoodList.map((food, index) =>
                    <tr key={ index }>
                        <td>{ food.name }</td>
                        <td>{ food.category }</td>
                        <td>{ food.needTime }</td>
                        <td> { food.tagList.map(tag => <li key={ tag }>{ tag }</li>) }</td>
                        <td>
                            <button
                                onClick={ () => addForbiddenFood(food) }
                            >
                                我不吃
                            </button>
                        </td>
                    </tr>
                ) }
                </tbody>
            </table>

            <h1>我不吃的配料</h1>
            <table>
                <thead>
                <tr>
                    <th>名称</th>
                    <th>分类</th>
                    <th>耐熟</th>
                    <th>标签</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>

                { forbiddenFoodList.map((food, index) =>
                    <tr key={ index }>
                        <td>{ food.name }</td>
                        <td>{ food.category }</td>
                        <td>{ food.needTime }</td>
                        <td> { food.tagList.map(tag => <li key={ tag }>{ tag }</li>) }</td>
                        <td>
                            <button
                                onClick={ () => removeForbiddenFood(food) }
                            >
                                我要吃
                            </button>
                        </td>
                    </tr>
                ) }
                </tbody>
            </table>
        </main>

        <footer className={ styles.footer }>

        </footer>
    </div>)
}

export default Foods
