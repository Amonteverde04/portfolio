import Head from 'next/head'
import SectionOne from './components/sectionOne';
import SectionTwo from './components/sectionTwo';
import SectionThree from './components/sectionThree';
import SectionFour from './components/sectionFour';
import SectionFive from './components/sectionFive';
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Monteverde&apos;s Portfolio</title>
        <meta name="description" content="A site to showcase my employment history, projects, and skills." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.sectionOne}>
          <SectionOne />
        </div>

        <div className={styles.sectionTwo}>
          <SectionTwo />
        </div>

        <div className={styles.sectionThree}>
          <SectionThree />
        </div>

        <div className={styles.sectionFour} id='skills'>
          <SectionFour />
        </div>

        <div className={styles.sectionFive} id='projects'>
          <SectionFive />
        </div>
      </main>
    </>
  )
}