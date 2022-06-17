import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import foods from '../public/data/foods.json'
import { useEffect } from 'react'

const Foods: NextPage = () => {
    // 从 localStorage 获取黑名单和用户菜品
    let blackList: any[] = []
    let userFoods: any[] = []
    useEffect(() => {
        let blackListStr = localStorage.getItem('blackList')
        if (blackListStr !== null) {
            blackList = JSON.parse(JSON.stringify(blackListStr) || '[]')
        }
        let userListStr = localStorage.getItem("userFoods")
        if (userListStr !== null) {
            userFoods = JSON.parse(JSON.stringify(userListStr) || "[]")
        }
    }, [])

    // 过滤黑名单
    console.log("黑名单食物", blackList)
    let canUseFoods = foods.filter(item => blackList.every(food => item.name !== food.name))
    console.log("默认食物", foods)
    console.log("过滤后食物", canUseFoods)

    function blackIt(food: any) {
        console.log("before blackIt", blackList)
        blackList.push(food)
        console.log("after blackIt", blackList)
        localStorage.setItem("blackList", blackList.toString())

    }

    return (<div className={ styles.container }>
        <Head>
            <title>配料管理</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className={ styles.main }>
            <h1 className={ styles.title }>配料管理</h1>

            <p>向配料表中添加新配料，或者将配料加入黑名单</p>

            <div>
                <button>添加配料</button>
            </div>

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

                { canUseFoods.map((food, index) => <tr key={ index }>
                    <td>{ food.name }</td>
                    <td>{ food.category }</td>
                    <td>{ food.needTime }</td>
                    <td> { food.tagList.map(tag => <li key={ tag }>{ tag }</li>) }</td>
                    <td>
                        <button onClick={ () => blackIt(food) }>拉黑</button>
                    </td>
                </tr>) }
                </tbody>
            </table>
            <div>


            </div>
        </main>

        <footer className={ styles.footer }>

        </footer>
    </div>)
}

export default Foods
