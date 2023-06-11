import { PAST_WORK } from '@/lib/globals';
import GridComponent from "./gridComponent";
import { Text, Image, GridItem } from '@chakra-ui/react';

export default function SectionThree() {
    return (
        <>
            <Text><b>TRUSTED BY</b></Text>
            <GridComponent columns={2}>
              {PAST_WORK.map((item, index) => (
                <GridItem key={index} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                  <Image src={item.image} alt={item.alt} height={item.sizing} width={item.sizing}/>
                </GridItem>
              ))}
            </GridComponent>
        </>
    )
}