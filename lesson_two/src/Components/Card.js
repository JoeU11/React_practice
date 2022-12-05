export default function Card({ img, review_score, review_total, country, description, price }) {
  return (
    <div className="card">
      <img src={img} id="card-image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{review_score}</span>
        <span className="gray">({review_total}) • </span>
        <span className="gray">{country}</span>
      </div>
      <p>{description}</p>
      <p><span className="bold">From ${price}</span> / person</p>
    </div>
  )
}