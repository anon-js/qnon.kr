import { main, section } from "./page.css";

export default function ExpPage() {
  return (
    <main className={main}>
      <section className={section}>
        <h1>Experience</h1>
        <p>
          여기는 경험 페이지로,<br/>
          제 개발 경험을 담을 예정이에요!
        </p>
      </section>
    </main>
  );
}