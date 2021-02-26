import styles from '../styles/components/Profile.module.css'
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/hbianchi97.png" alt="Henrique" />
            <div>
                <strong>Henrique Bianchi</strong>
                <p><img src="icons/level.svg" alt="levelup" /> Level {level}</p>
            </div>
        </div>
    )
}