import up from "../../public/images/icons/icon-up.svg"
import down from "../../public/images/icons/icon-down.svg"
import styles from "./FollowerCard.module.css"

const FollowerCard = ({platform, icon, handle, metric, count, deltaToday}) => {
  return (
    <div className={styles.followerCard}>
        <img src={icon} alt={platform} />
        <a href="#">{handle}</a>
        <h2>{count}</h2>
        <h3>{metric}</h3>
        {
            deltaToday > 0 ? 
            <div><img src={up} /> {deltaToday} Today </div> :
            <div><img src={down} /> {deltaToday * -1} Today </div>
        }
    </div>
  )
}

export default FollowerCard