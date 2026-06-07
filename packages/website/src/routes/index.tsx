import { createFileRoute } from '@tanstack/react-router'
import { SocialLinks } from "#/components/SocialLinks.tsx";
import { TitleLine } from "#/components/TitleLine.tsx";

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main>
      <TitleLine name="mike" start={1} end={12} />
      <TitleLine name="adam" start={13} end={24} reverse />
      <TitleLine name="czyk" start={25} end={38}/>
      <TitleLine name="breachofmind" start={39} end={51} reverse />
      <section className="info-block">
        <p className="text-2xl px-4">Hi! I'm a creative technologist from Portland, Oregon. You found my corner of the web.</p>
      </section>
      <footer>
        <SocialLinks />
        <p className="copyright-year text-right">© 2026.</p>
      </footer>
    </main>
  )
}
