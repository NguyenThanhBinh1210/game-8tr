/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // add custom attributes here
    marquee?: any
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLMarqueeElement>, HTMLMarqueeElement>
    }
  }
}
