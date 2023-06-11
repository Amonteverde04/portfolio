import { COMPANY_NAME, COMPANY_LINK, JOB_TITLE, JOB_START } from '@/lib/globals';
import GridComponent from './gridComponent';
import Link from 'next/link';
import { Stack, Heading, Text, GridItem } from '@chakra-ui/react';
import styles from '@/styles/Home.module.css'

export default function SectionTwo() {
  const calcMonthsWorked = () => {
    const currDate = new Date();
    const monthsElapsed = currDate.getMonth() - JOB_START.getMonth() + (12 * (currDate.getFullYear() - JOB_START.getFullYear()));

    return monthsElapsed;

    // Months elapsed is 0. Must of started a new career. Assume 1 month.
    if(monthsElapsed === 0)
    {
      return `1 month`; 
    }

    // Months elapsed is less than 12. Display months.
    if(monthsElapsed < 12)
    {
      return monthsElapsed > 1 ? `${monthsElapsed} months` : `${monthsElapsed} month`; 
    }

    // Months elapsed ended up being exactly 1, 2, 3... years.
    if(monthsElapsed % 12 === 0)
    {
      const displayYears = (monthsElapsed / 12).toPrecision(1);
      return monthsElapsed > 12 ? `${displayYears} years` : `${displayYears} year`; 
    }

    // Months elapsed is some years and months.
    if(monthsElapsed > 12)
    {
      const displayYears = (monthsElapsed / 12).toPrecision(1);
      const displayMonths = monthsElapsed - (12*displayYears);
      return displayYears > 2 ? `${displayYears} years and ${displayMonths} months` : `${displayYears} year and ${displayMonths} months`; 
    }
  }

  return (
      <>
          <Text><b>A LITTLE BIT ABOUT ME</b></Text>
          <GridComponent columns={2}>
            <GridItem w='100%' h='100%'>
              <Stack>
                <Heading>What do I do?</Heading>
                <Text fontSize={"1.25rem"}>I am a remote {JOB_TITLE} at <Link className={styles.gradientUnderline} href={COMPANY_LINK} rel="noopener" target='_blank'><span className={styles.gradientSpan}>{COMPANY_NAME}</span></Link>.</Text>
              </Stack>
            </GridItem>
            <GridItem w='100%' h='100%'>
              <Stack>
                <Heading>For how long?</Heading>
                <Text fontSize={"1.25rem"}>I am proud to say that I have been a {JOB_TITLE} for <b>{calcMonthsWorked()}</b>.</Text>
              </Stack>
            </GridItem>
            <GridItem w='100%' h='100%'>
              <Stack>
                <Heading>What are my current goals?</Heading>
                <Text fontSize={"1.25rem"}>I am looking to learn as much as I can, while making an impact on the world. Even if it&apos;s a small impact!</Text>
              </Stack>
            </GridItem>
            <GridItem w='100%' h='100%'>
              <Stack>
                <Heading>Who am I outside of work?</Heading>
                <Text fontSize={"1.25rem"}>I am a devoted fiancé and dog dad! I love to be creative and watch my ideas come to life. In my free time you can typically find me programming, making music, playing video games or spending time with my family.</Text>
              </Stack>
            </GridItem>
          </GridComponent>
      </>
  )
}