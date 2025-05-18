import Rightbar from "../rightbar/rightbar"
import styles from './card.module.css'
import Chart from "../chart/chart"
import Transaction from "../transactions/transactions"
import { MdSupervisedUserCircle } from "react-icons/md"


const Card = () => {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24} />
            <div className={styles.texts}>
                <span className={styles.title}>Total Users</span>
                <span className={styles.number}>10.273</span>
                <span className={styles.detail}>
                    <span className={styles.positive}><span>12%</span> more than previous week</span>
                </span>
            </div>
        </div>
    )
}
export default Card