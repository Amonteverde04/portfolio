import { Grid } from '@chakra-ui/react';

export default function GridComponentSkills(props) {
    return (
      <>
        <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", `repeat(${props.columns}, 1fr)`]} 
              direction={["column", "column","row"]} 
              alignItems={"center"} 
              gap={"36px"}>
          {props.children}
        </Grid>
      </>
    );
}