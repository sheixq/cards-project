import React from 'react';
import {SuperButton} from '../../../common/components/SuperButton/SuperButton'
import {SuperCheckbox} from '../../../common/components/SuperCheckbox/SuperCheckbox'
import styles from './TestPage.module.scss'
import {SuperInput} from '../../../common/components/SuperInput/SuperInput';

export const TestPage = () => {

    return (
        <div className={styles.testPage}>
            <div>
                <SuperButton>Button</SuperButton>
            </div>
            <div>
                <SuperCheckbox/>
            </div>
            <div>
                <SuperInput/>
            </div>
        </div>
    )
}