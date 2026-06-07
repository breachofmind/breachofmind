import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import resetCss from '../reset.css?url';
import appCss from '../styles.css?url'

const TITLE = 'Mike Adamczyk - Breach of Mind';
const DESCRIPTION = 'Creative technologist and designer from Portland, OR';
const URL = 'https://www.breachofmind.com';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: TITLE,
      },
      {
        name: 'description',
        content: DESCRIPTION,
      },
      {
        name: 'og:title',
        content: TITLE
      },
      {
        name: 'og:description',
        content: DESCRIPTION
      },
      {
        name: 'og:image',
        content: '/logo192.png'
      },
      {
        name: 'twitter:image',
        content: '/logo192.png'
      },
      {
        name: 'og:url',
        content: URL
      },
      {
        name: 'twitter:url',
        content: URL
      },
      {
        name: 'twitter:title',
        content: TITLE
      },
      {
        name: 'twitter:description',
        content: DESCRIPTION
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: resetCss
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: 'favicon.ico',
        type: 'image/x-icon',
      },
      {
        rel: 'icon',
        href: 'logo192.png',
        type: 'image/png',
        sizes: '192x192'
      }
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
