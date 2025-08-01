import { main, section } from "./page.css";

export default function ProjectPage() {
  return (
    <main className={main}>
      <section className={section}>
        <h1>Project</h1>
        <p>
          여기는 프로젝트 페이지로,<br/>
          제가 진행한 프로젝트들을 한 눈에 볼 수 있는 곳이에요!
        </p>
      </section>
    </main>
  );
}
