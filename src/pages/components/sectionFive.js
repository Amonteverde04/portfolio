import { projects } from '@/lib/projects';
import GridComponent from './gridComponent';
import { Heading, GridItem, Tooltip, Image } from '@chakra-ui/react';
import styles from '@/styles/Home.module.css'

const ProjectCard = (props) => {
    return (
      <>
        <Tooltip label={props.alt}>
          <a href={props.link} rel="noopener" target='_blank'>
            <Image loading="eager" className={styles.projectImage} src={props.image} alt={props.alt} objectFit={"cover"} borderRadius={"0.375rem"}/>
          </a>
        </Tooltip>
      </>
    );
}

export default function SectionFive() {
    return (
        <>
            <Heading>Check out my projects by clicking or tapping a tile!</Heading>
            <GridComponent columns={6}>
              {projects.map((item, index) => (
                <GridItem w='100%' h='100%' key={index}>
                  <ProjectCard image={item.image} alt={item.alt} link={item.link}/>
                </GridItem>
              ))}
            </GridComponent>
        </>
    )
}