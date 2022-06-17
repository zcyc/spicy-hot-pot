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

            <h1>要吃的配料</h1>
            <table>
                <thead>
                <tr style={ { width: "100%" } }>
                    <th style={ { width: '20%' } }>名称</th>
                    <th style={ { width: '15%' } }>分类</th>
                    <th style={ { width: '15%' } }>耐熟</th>
                    <th style={ { width: '30%' } }>标签</th>
                    <th style={ { width: '20%' } }>操作</th>
                </tr>
                </thead>
                <tbody>

                { availableFoodList.map((food, index) =>
                    <tr key={ index } style={ { width: "100%" } }>
                        <td style={ { width: '20%' } }>{ food.name }</td>
                        <td style={ { width: '15%' } }>{ food.category }</td>
                        <td style={ { width: '15%' } }>{ food.needTime }</td>
                        <td style={ { width: '30%' } }> { food.tagList.map(tag => <div key={ tag }>{ tag }</div>) }</td>
                        <td style={ { width: '20%' } }>
                            <button
                                onClick={ () => addForbiddenFood(food) }
                                style={ { width: "100%", padding: "0.8rem", } }
                            >
                                不吃
                            </button>
                        </td>
                    </tr>
                ) }
                </tbody>
            </table>

            <h1>不吃的配料</h1>
            <table>
                <thead>
                <tr style={ { width: "100%" } }>
                    <th style={ { width: '20%' } }>名称</th>
                    <th style={ { width: '15%' } }>分类</th>
                    <th style={ { width: '15%' } }>耐熟</th>
                    <th style={ { width: '30%' } }>标签</th>
                    <th style={ { width: '20%' } }>操作</th>
                </tr>
                </thead>
                <tbody>

                { forbiddenFoodList.map((food, index) =>
                    <tr key={ index } style={ { width: "100%" } }>
                        <td style={ { width: '20%' } }>{ food.name }</td>
                        <td style={ { width: '15%' } }>{ food.category }</td>
                        <td style={ { width: '15%' } }>{ food.needTime }</td>
                        <td style={ { width: '30%' } }> { food.tagList.map(tag => <div key={ tag }>{ tag }</div>) }</td>
                        <td style={ { width: '20%' } }>
                            <button
                                onClick={ () => removeForbiddenFood(food) }
                                style={ { width: "100%", padding: "0.8rem", } }
                            >
                                不吃
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
