import type {GetServerSideProps, NextPage, NextPageContext} from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export type HomeType = NextPage & {
  data: string,
}

function Content(props: HomeType) {
  const { data } = props;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div id="sphere-content" style={{width: '100vw'}} dangerouslySetInnerHTML={{__html: data}}/>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${process.env.NEXT_CONTENT_RENDERER_BASE_URL}/content`)
  const data = await res.text()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Content
