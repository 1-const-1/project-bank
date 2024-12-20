interface stLink {
  name: string
  className: string
}

/**
 * Class name applied to elements within the header section
 * to visually group and identify different types of clients or consumers
 */
const clientStyleClass = 'client-groups'

/**
 * A unified arrays structure defining various necessary informational links.
 * Each entry represents a link to resource displayed on the main page
 */
export const standardGroup: stLink[] = [
  {
    name: 'Exchange rate',
    className: clientStyleClass
  },
  {
    name: 'Offices',
    className: clientStyleClass
  },
  {
    name: 'ATMs',
    className: clientStyleClass
  },
  {
    name: 'Location',
    className: clientStyleClass
  },
  {
    name: 'EN',
    className: clientStyleClass
  },
]
