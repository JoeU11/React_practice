export default function Player(prop) {
  return (
    <section className="player">
      {prop.player.inWorldCup && <div className="player-badge">In World Cup</div>}
      <img src={prop.player.img} className="player-image" />
      <h2 className="player-name">{prop.player.name}</h2>
      <p>Team: {prop.player.team}</p>
      <p>Number: {prop.player.number}</p>
    </section>
  )
}