export default function Card(props) {
  console.log(props)
  return (
    <div className="card">
      <img src={props.img} id="card-image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{props.review_score}</span>
        <span className="gray">({props.review_total}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.description}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}