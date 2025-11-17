import styles from "../app/guia-rpg/styles.module.css";

export default function GuiaRPG() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Guia Básico de RPG</h1>
        <p>Um guia simples, fluido e intuitivo para novos aventureiros.</p>
      </header>

      <section className={styles.section}>
        <h2>🎲 O que é RPG?</h2>
        <p>
          RPG (Role-Playing Game) é um jogo colaborativo onde os jogadores 
          interpretam personagens em uma história guiada por um Mestre (GM).
        </p>
      </section>

      <section className={styles.section}>
        <h2>🧙 Criação de Personagem</h2>
        <ul>
          <li><strong>Conceito:</strong> Quem é o seu personagem?</li>
          <li><strong>Atributos:</strong> Força, Destreza, Constituição, Inteligência…</li>
          <li><strong>Classe:</strong> Guerreiro, Mago, Ladino, Clérigo…</li>
          <li><strong>Raça:</strong> Humano, Elfo, Anão…</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>⚔️ Como jogar?</h2>
        <p>O Mestre descreve a situação, e os jogadores dizem o que querem fazer.</p>
        <p>
          Quando uma ação for incerta, rolam-se dados (normalmente o d20) e 
          compara-se o resultado com uma dificuldade.
        </p>
      </section>

      <section className={styles.section}>
        <h2>📘 Dicas para iniciantes</h2>
        <ul>
          <li>Não tenha medo de errar — todo mundo começa perdido.</li>
          <li>Interprete seu personagem, não você mesmo.</li>
          <li>Converse com seu grupo e com o Mestre.</li>
          <li>O objetivo é se divertir!</li>
        </ul>
      </section>
    </main>
  );
}