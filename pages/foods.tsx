import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import foods from "../public/data/foods.json";
import { useEffect, useState } from "react";

const Foods: NextPage = () => {
    const Food = {
        name: String,
        tagList: [],
        needTime: BigInt,
        category: String

    }

    // 从 localStorage 获取黑名单和用户菜品
    const [blackList, setBlackList] = useState([]);
    const [userFoods, setUserFoods] = useState([]);

    useEffect(() => {
        let blackListStr = (JSON.stringify(localStorage.getItem("blackList")))
        if (blackListStr !== null) {
            setBlackList(JSON.parse(blackListStr))
        }
        let userListStr = (JSON.stringify(localStorage.getItem("userFoods")))
        if (userListStr !== null) {
            setUserFoods(JSON.parse(userListStr))
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
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css"/>
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
                    <td>{ food.name + index }</td>
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
