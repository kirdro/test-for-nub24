import React, {FC} from 'react';

const Home:FC<{
    title: string
}> = (props) => {

    const {
        title
    } = props

    return (
        <div>
            {title}
        </div>
    );
};

export default Home;