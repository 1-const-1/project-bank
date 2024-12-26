import React from 'react'
import {IconType} from 'react-icons'
import { TfiLocationArrow } from 'react-icons/tfi'
import { IoLanguageSharp } from 'react-icons/io5'

interface stLink {
  img: IconType|null
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
    img: null,
    name: 'Exchange rate',
    className: clientStyleClass
  },
  {
    img: TfiLocationArrow,
    name: 'Location',
    className: clientStyleClass
  },
  {
    img: null,
    name: 'Offices',
    className: clientStyleClass
  },
  {
    img: null,
    name: 'ATMs',
    className: clientStyleClass
  },

  {
    img: IoLanguageSharp,
    name: 'Lang',
    className: clientStyleClass
  },
]
