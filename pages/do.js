import Head from 'next/head'

export default function Do() {
    return (<div className="container">
        <Head>
            <title>开始做菜</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css"/>
        </Head>
        <main>
            <h1 className="title">
                开始做菜
            </h1>
        </main>
        <footer>
        </footer>
    </div>)
}
