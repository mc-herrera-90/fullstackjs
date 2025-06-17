import { visit } from 'unist-util-visit'

export default function remarkCustomDirectives() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'containerDirective') {
        const data = node.data || (node.data = {})
        const hast = data.hProperties || (data.hProperties = {})

        data.hName = 'div'
        hast.className = ['directive', node.name, ...(node.attributes?.class?.split?.(' ') || [])]
      }
    })
  }
}