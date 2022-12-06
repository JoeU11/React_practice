export default function Player(player) {
  return (
    <section className="player">
      <img src={player.img} className="player-image" />
      <h2 className="player-name">{player.name}</h2>
      <p>Team: {player.team}</p>
      <p>Number: {player.number}</p>
    </section>
  )
}