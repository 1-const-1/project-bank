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
 * A unique class name for scenarios where client requires 
 * a representation or a service distinct from the primary 
 * client grouping.
 */
const otherStyleClass = 'other-client-class'

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
  {
    name: 'other',
    className: otherStyleClass
  }
]