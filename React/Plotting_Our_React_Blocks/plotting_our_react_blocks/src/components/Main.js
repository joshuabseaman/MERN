import React from 'react';
import Advertisement from './Advertisement';
import styles from './blocks.module.css';
import SubContents from './SubContents';

class Main extends React.Component {
    render() {
        return(
            <div className={styles.main}>
                <SubContents />
                <SubContents />
                <SubContents />
                <Advertisement />
            </div>
        )
    }
}

export default Main;