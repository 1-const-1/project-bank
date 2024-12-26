interface clLink {
  name: string
  className: string 
}

/**
 * Class name applied to elements within the header section
 * to visually group and identify different types of clients or consumers
 */
const clientStyleClass: string = 'client-groups'

/**
 * A unified arrays structure defining various client types.
 * Each entry represents a client category or type of consumer
 * displayed on the main page
 */
export const clientGroup: clLink[] = [
  {
    name: 'Private clients',
    className: clientStyleClass
  },
  {
    name: 'Self-employed',
    className: clientStyleClass
  },
  {
    name: 'Small business & IE',
    className: clientStyleClass
  },
]