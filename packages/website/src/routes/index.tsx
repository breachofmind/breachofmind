import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

const LINKS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/breach_of_mind',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/michael-adamczyk-22271867',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/breachofmind',
  }
]

function App() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <h1 className="text-4xl mb-4">Working on it...</h1>
      <p>I haven't updated my website in 10 years, so I'm taking some time to put something together.</p>
      <p>Back in a bit! In the meantime, here are some links to my other things:</p>
      <hr className="my-4"/>
      <ul>
        {LINKS.map(link => (
          <li key={link.href}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </main>
  )
}
