import { COMPANY_NAME, COMPANY_LINK, JOB_TITLE } from '@/lib/globals';
import GridComponent from './gridComponent';
import Link from 'next/link';
import { Stack, Heading, Text, GridItem } from '@chakra-ui/react';
import styles from '@/styles/Home.module.css'

export default function SectionTwo() {
  return (
      <>
          <Text><b>A LITTLE BIT ABOUT ME</b></Text>
          <GridComponent columns={2}>
            <GridItem w='100%' h='100%'>
              <Stack>
                <Heading>What do I do?</Heading>
                <Text fontSize={"1.25rem"}>I am a {JOB_TITLE} at <Link className={styles.gradientUnderline} href={COMPANY_LINK} rel="noopener" target='_blank'><span className={styles.gradientSpan}>{COMPANY_NAME}</span></Link>.</Text>
                <Text fontSize={"1.25rem"}>I write efficient and clean code to deliver powerful and easy to understand applications.</Text>
              </Stack>
            </GridItem>
            <GridItem w='100%' h='100%'>
              <Stack>
                <Heading>What technology do I use?</Heading>
                <Text fontSize={"1.25rem"}>At {COMPANY_NAME}, I use <span style={{color: "#1E9E25"}}><b>C#</b></span> to develop and deliver custom internal tools and applications. I also develop applications with a variety of tools such as <span style={{color: "#3571a3"}}><b>Python</b></span>, <span style={{color: "#2dbcaf"}}><b>Go</b></span>, <span style={{color: "#F0DB4F"}}><b>JavaScript</b></span>, and <span style={{color: "#3178C6"}}><b>TypeScript</b></span>.</Text>
              </Stack>
            </GridItem>
            <GridItem w='100%' h='100%'>
              <Stack>
                <Heading>What are my current goals?</Heading>
                <Text fontSize={"1.25rem"}>I love to be creative and watch my ideas come to life. That's why I am looking to learn as much as I can about AI, while trying to make a positive impact on the world. Even, if it&apos;s a small impact!</Text>
                <Text fontSize={"1.25rem"}>Lately, I have been diving deep into developing applications powered by LLMs using <span style={{color: "#3571a3"}}><b>Python</b></span>, <span style={{color: "#1C3C3C"}}><b>LangChain</b></span>, and <span style={{color: "#ff6446"}}><b>Chroma</b></span>.</Text>
              </Stack>
            </GridItem>
            <GridItem w='100%' h='100%'>
              <Stack>
                <Heading>Who am I outside of work?</Heading>
                <Text fontSize={"1.25rem"}>I am passionate about building software, and learning how to use AI and software to revolutionize the everyday person's life.</Text>
                <Text fontSize={"1.25rem"}>In my free time you can typically find me programming, line dancing, making music, playing video games or spending time with my family and friends.</Text>
              </Stack>
            </GridItem>
          </GridComponent>
      </>
  )
}