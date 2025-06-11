import { GITHUB, LINKEDIN } from '@/lib/globals';
import Link from 'next/link';
import { Stack, Heading, Text, Image, Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function SectionOne() {
    const jumpToSkills = () => {
        var elmntToView = document.getElementById("skills");
        elmntToView.scrollIntoView({ behavior: "smooth"}); 
    }
    
    const jumpToProjects = () => {
        var elmntToView = document.getElementById("projects");
        elmntToView.scrollIntoView({ behavior: "smooth"}); 
    }

    return (
        <>
            <Stack direction={["column","column","column","row"]} gap={"36px"} alignItems={"center"} justifyContent={"space-around"}>
                <Image loading="eager" src='images/me.png' alt='If you see this text, try to imagine what I look like!' boxSize={["15em", "20em", "25em"]} borderRadius="full" />
                <Stack gap={"18px"}>
                  <Heading>Hello! <br/> I am Alex Monteverde and welcome to my portfolio.</Heading>
                  <Text fontSize={"1.5rem"}>I made this website for any one who is interested in my work so that they can easily access it.</Text>
                  <Text fontSize={"1.5rem"}>You can also find me on Github or LinkedIn by clicking the icons below!</Text>
                  <Stack direction={["column","row"]} gap={"36px"} justifyContent={"space-between"}>
                    <Stack direction={"row"} gap={"36px"} alignItems={"center"}>
                      <Link href={GITHUB} rel="noopener" target='_blank'>
                        <FontAwesomeIcon fontSize={"3rem"} icon={faGithub}/>
                      </Link>
                      <Link href={LINKEDIN} rel="noopener" target='_blank'>
                        <FontAwesomeIcon fontSize={"3rem"} icon={faLinkedin}/>
                      </Link>
                    </Stack>
                    <Stack direction={"row"} gap={"36px"} alignItems={"center"}>
                      <Button background={"#181818"} color={"#FAFAFA"} onClick={jumpToProjects}>Jump to projects</Button>
                      <Button background={"#181818"} color={"#FAFAFA"} onClick={jumpToSkills}>Jump to skills</Button>
                    </Stack>
                  </Stack>
                </Stack>
            </Stack>
        </>
    )
}