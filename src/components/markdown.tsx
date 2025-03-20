import { type Components, MarkdownAsync } from 'react-markdown'
import remarkGfm from 'remark-gfm'

const defaultComponents: Components = {
  a({ node, children, ...props }) {
    return (
      <a
        {...props}
        target='_blank'
        rel='noopener noreferrer'
        className='underline link-decoration'
      >
        {children}
      </a>
    )
  },
}

export function Markdown({
  components,
  ...props
}: React.ComponentProps<typeof MarkdownAsync>) {
  return (
    <MarkdownAsync
      components={{ ...defaultComponents, ...components }}
      remarkPlugins={[remarkGfm]}
      {...props}
    />
  )
}
