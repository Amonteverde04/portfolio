import { COMPANY_NAME, COMPANY_LINK, JOB_TITLE, JOB_START } from '@/lib/globals';
import GridComponent from './gridComponent';
import Link from 'next/link';
import { Stack, Heading, Text, GridItem } from '@chakra-ui/react';
import styles from '@/styles/Home.module.css'

export default function SectionTwo() {
  const calcMonthsWorked = () => {
    const currDate = new Date();
    const jobStartTimeStamp = JOB_START.getTime();
    const currTimeStamp = currDate.getTime();
    const calc = new Date(currTimeStamp - jobStartTimeStamp);
    
    //Retrieve the date, month and year
    const calcFormatTmp = calc.getDate() + '-' + (calc.getMonth() + 1) + '-' + calc.getFullYear();
    
    //Convert to an array and store
    const calcFormat = calcFormatTmp.split("-");

    const monthsElapsed = Number(Math.abs(calcFormat[1]) - 1);
    const yearsElapsed = Number(Math.abs(calcFormat[2]) - 1970);

    // If we have 0 or 1 elapsed months and 0 years. Return 1 month. 
    if((monthsElapsed === 0 || monthsElapsed === 1) && yearsElapsed === 0)
    {
      return `1 month`; 
    }

    // If we have less than 12 elapsed months and 0 years. Return x months. 
    if(monthsElapsed < 12 && yearsElapsed === 0)
    {
      return `${monthsElapsed} months`; 
    }

    // If we have exactly 1 year.
    //  If we have 0 months, return 1 year. 
    //  If we have 1 month, return 1 year and 1 month.
    //  else we have x months, return 1 year and x months.
    if(yearsElapsed === 1)
    {
      return monthsElapsed === 0 ? `${yearsElapsed} year` : 
      monthsElapsed === 1 ? `${yearsElapsed} year and ${monthsElapsed} month` : `${yearsElapsed} year and ${monthsElapsed} months`;
    }

    //  If we have 0 months, return x years. 
    //  If we have 1 month, return x years and 1 month.
    //  else we have x months, return x year and x months.
    return monthsElapsed === 0 ? 
      `${yearsElapsed} years` : monthsElapsed === 1 ? `${yearsElapsed} years and ${monthsElapsed} month` : `${yearsElapsed} years and ${monthsElapsed} months`;
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