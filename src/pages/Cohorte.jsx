import UserCard from "../components/UserCard"

export default () => {
    return (
    <section className="team-section">
      <h2 className="team-title">Raíces Digitales </h2>
      <div className="team-grid">
        {[
          "astorgaAriel", "nat-duchens", "klvudiooo", "danielamunval",
          "marioAmauta", "favevargas", "MarceCarreno", "Caroooopaz", "ScarlettSocias",
          "jpizarroc99", "galdamesf", "Carlosssantonio", "carohurtadosaa", "Conybri",
          "mc-herrera-90", "Tammy-Escobar", "FrancoSteven", "WaleskaH", "Oratee",
          "moredevj", "OvejaNativa", "Pilishijam-23", "vittoo1", "yyyaxyyy", "yurilealjaque",
        ].map(name => (
          <UserCard key={name} name={name} />
        ))}
      </div>
    </section>
    )
}