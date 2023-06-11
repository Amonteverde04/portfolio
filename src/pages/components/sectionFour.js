import { skills } from '@/lib/skills';
import GridComponentSkills from './gridComponentSkills';
import { Text, Image, GridItem, Tooltip } from '@chakra-ui/react';

export default function sectionFour() {
    return (
        <>
            <Text><b>SKILLS</b></Text>
            <GridComponentSkills columns={4}>
              {skills.map((item, index) => (
                <GridItem key={index} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                  <Tooltip label={item.alt}>
                    <Image src={item.image} alt={item.alt} height={"25%"} width={"25%"}/>
                  </Tooltip>
                </GridItem>
              ))}
            </GridComponentSkills>
        </>
    )
}