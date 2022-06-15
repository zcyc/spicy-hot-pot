import Head from 'next/head'

export default function Home() {
    return (<div className="container">
        <Head>
            <title>你好，麻辣烫</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main>
            <h1 className="title">
                获取你的麻辣烫配料表
            </h1>

            <p className="description">
                四种模式，获取美味配料表
            </p>

            <div className="grid">
                <a href="/random" className="card">
                    <h3>随机搭配模式 &rarr;</h3>
                    <p>自动生成一份荤素搭配附带主食的配料采购表</p>
                </a>

                <a href="/choose" className="card">
                    <h3>自己搭配模式 &rarr;</h3>
                    <p>选择你喜欢的食材并生成一份配料采购表</p>
                </a>

                <a
                    href="/blacklist"
                    className="card"
                >
                    <h3>黑名单模式 &rarr;</h3>
                    <p>排除一些不喜欢的配料再进行随机搭配</p>
                </a>

                <a
                    href="/new-foods"
                    className="card"
                >
                    <h3>新配料模式 &rarr;</h3>
                    <p>
                        添加一些我们没有的配料再进行随机搭配
                    </p>
                </a>
            </div>
        </main>

        <footer>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{ ' ' }
                <img src="/vercel.svg" alt="Vercel" className="logo"/>
            </a>
        </footer>

        <style jsx>{ `
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .logo {
            height: 1em;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        ` }</style>

        <style jsx global>{ `
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        ` }</style>
    </div>)
}
