import Head from 'next/head'

export default function Foods() {
    return (<div className="container">
        <Head>
            <title>配料管理</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css"/>
        </Head>
        <main>
            <h1 className="title">
                配料管理
            </h1>
        </main>
        <footer>
        </footer>
    </div>)
}
