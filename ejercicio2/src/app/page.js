"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const sumar = () => {
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(`Resultado de la suma: ${resultadoSuma}`);
    setError(null);
  };

  const restar = () => {
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(`Resultado de la resta: ${resultadoResta}`);
    setError(null);
  };

  const multiplicar = () => {
    const resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado de la multiplicación: ${resultadoMultiplicacion}`);
    setError(null);
  };

  const dividir = () => {
    if (parseFloat(numero2) === 0) {
      setError("Error: No se puede dividir por cero");
      setResultado(null);
    } else {
      const resultadoDivision = parseFloat(numero1) / parseFloat(numero2);
      setResultado(`Resultado de la división: ${resultadoDivision}`);
      setError(null);
    }
  };

  const potenciar = () => {
    const resultadoPotenciacion = Math.pow(parseFloat(numero1), parseFloat(numero2));
    setResultado(`Resultado de la potenciación: ${resultadoPotenciacion}`);
    setError(null);
  };

  const raizCuadrada = () => {
    if (parseFloat(numero1) < 0 || parseFloat(numero2) < 0) {
      setError("Error: No se puede calcular la raíz cuadrada de un número negativo");
      setResultado(null);
    } else {
      const resultadoRaizCuadrada1 = Math.sqrt(parseFloat(numero1));
      const resultadoRaizCuadrada2 = Math.sqrt(parseFloat(numero2));
      setResultado(`Raíz cuadrada de número 1: ${resultadoRaizCuadrada1}, Raíz cuadrada de número 2: ${resultadoRaizCuadrada2}`);
      setError(null);
    }
  };

  const reiniciar = () => {
    setNumero1('');
    setNumero2('');
    setResultado(null);
    setError(null);
  };

  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 1:</label>
          <input className={styles.inputnum} type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
        </div>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 2:</label>
          <input className={styles.inputnum} type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
        </div>
        <div>
          <button className={styles.button} onClick={sumar}>Sumar</button>
          <button className={styles.button} onClick={restar}>Restar</button>
          <button className={styles.button} onClick={multiplicar}>Multiplicar</button>
          <button className={styles.button} onClick={dividir}>Dividir</button>
          <button className={styles.button} onClick={potenciar}>Potenciar</button>
          <button className={styles.button} onClick={raizCuadrada}>Raíz Cuadrada</button>
          <button className={styles.button} onClick={reiniciar}>Reiniciar</button>
        </div>
        {resultado && <div className={styles.resultado}>{resultado}</div>}
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </main>
  );
}
