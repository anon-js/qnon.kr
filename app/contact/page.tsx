import { main, section } from "./page.css";

export default function ContactPage() {
  return (
    <main className={main}>
      <section className={section}>
        <h1>Contact</h1>
        <p>
          여기는 연락 페이지로,<br/>
          익숙하지만 웹페이지에서는 좀 새로운 시도를 할 생각이에요 :)<br/>
          <br/><br/>
          혹시 필요하시면 언제든 연락주세요!<br/>
          <strong>Github</strong> : <a href="https://github.com/anon-js">anon-js</a><br/>
          <strong>Email</strong> : <a href="mailto:anon@qnon.kr">anon@qnon.kr</a>
        </p>
      </section>
    </main>
  );
}
