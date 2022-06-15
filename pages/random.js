import Head from 'next/head'

export default function Random() {
    return (<div className="container">
        <Head>
            <title>随机搭配模式</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css"/>
        </Head>
        <main>
            <h1 className="title">
                随机搭配模式
            </h1>
        </main>
        <footer>
        </footer>
    </div>)
}
