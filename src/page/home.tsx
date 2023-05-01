import React, {FC} from 'react';
import {DivContentSC, DivHomeSC, DivSidebarSC} from "./styles.home";
import SidebarItem from "../components/SidebarItem";
import { AiFillProject } from 'react-icons/ai';
import { CgGoogleTasks } from 'react-icons/cg';
import { SiSpringCreators } from 'react-icons/si';


const Home:FC<{
    title: string
}> = (props) => {

    const {
        title
    } = props

    return (

            <DivHomeSC>
                <DivSidebarSC>
                    <SidebarItem
                        icon={<AiFillProject size={25}/>}
                        title='Projects'
                    />
                    <SidebarItem
                        icon={<CgGoogleTasks size={25}/>}
                        title='Tasks'
                    />
                    <SidebarItem
                        icon={<SiSpringCreators size={25}/>}
                        title='Sprints'
                    />
                </DivSidebarSC>
                <DivContentSC>

                </DivContentSC>
            </DivHomeSC>

    );
};

export default Home;