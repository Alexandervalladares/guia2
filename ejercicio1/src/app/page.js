import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul>
            {equipo.plantilla.map((jugador) => (
              <li className={styles.container__list} key={jugador.id}>
                <img
                  src={jugador.imagen}
                  alt={jugador.nombre}
                  className={styles.playerImage}
                  style={{ width: "50px", height: "50px" }} // Ajusta el tamaño aquí
                />
                <strong>{jugador.nombre}</strong>
                <p>
                  Altura: {jugador.Altura}m <br />
                  Peso: {jugador.Peso}Kg
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  // Simula la obtención de datos desde tu JSON
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        { id: 1, nombre: "Eden Hazard", Altura: "1.75", Peso: "74Kg", imagen: "https://img.a.transfermarkt.technology/portrait/big/50202-1665067742.jpg?lm=1" },
        { id: 2, nombre: "Gonzalo García", Altura: "1.82", Peso: "74Kg", imagen: "https://s.hs-data.com/bilder/spieler/gross/600867.jpg" },
        { id: 3, nombre: "Karim Benzema", Altura: "1.85", Peso: "81Kg",imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5CHVawSjyj6Z-PdrqT7_dWyLS6lhHE6tbA&usqp=CAU" },
      ],
    },
    {
      id: 2,
      nombre: "Barcelona",
      plantilla: [
        { id: 1, nombre: "Marc-André ter Stegen", Altura: "1.88", Peso: "85Kg" ,imagen: "https://www.fcbarcelona.com/photo-resources/2023/10/04/b0033e0e-48a9-416e-ba12-f4c961e527ac/mini_01-MARC-ANDRE_TER_STEGEN.png?width=670&height=790"},
        { id: 2, nombre: "Lionel Messi", Altura: "1.70", Peso: "72Kg",imagen: "https://img.a.transfermarkt.technology/portrait/big/28003-1694590254.jpg?lm=1" },
        { id: 3, nombre: "Gerard Piqué", Altura: "1.94", Peso: "85Kg",imagen: "https://img.a.transfermarkt.technology/portrait/big/18944-1667548226.jpg?lm=1" },
      ],
    },
    {
      id: 3,
      nombre: "Manchester City",
      plantilla: [
        { id: 1, nombre: "Kevin De Bruyne", Altura: "1.81", Peso: "68Kg",imagen: "https://img.a.transfermarkt.technology/portrait/big/88755-1684245748.jpg?lm=1" },
        { id: 2, nombre: "Raheem Sterling", Altura: "1.70", Peso: "69Kg",imagen: "https://img.a.transfermarkt.technology/portrait/big/134425-1684165974.jpg?lm=1" },
        { id: 3, nombre: "Ruben Dias", Altura: "1.87", Peso: "84Kg" ,imagen: "https://img.a.transfermarkt.technology/portrait/big/258004-1684921271.jpg?lm=1"},
      ],
    },
    // Agrega más equipos aquí
  ];
 

  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}
