import React, {FC, ReactElement} from 'react';
import {DivItemTitleSC, DivSidebarItemSC, SpanTitleText} from "./styles.sidebarItem";

const SidebarItem:FC<{icon: ReactElement,
    title: string}> = (props) => {
    return (
        <DivSidebarItemSC>
            <DivItemTitleSC>
                {props.icon}
                <SpanTitleText>{props.title}</SpanTitleText>
            </DivItemTitleSC>

        </DivSidebarItemSC>
    );
};

export default SidebarItem;