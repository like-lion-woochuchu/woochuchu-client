const breakpoint = {
  desktop: 1920,
  tablet: 768,
  mobile: 375,
}

const device = {
  desktop: `(min-width: ${breakpoint.desktop}px)`,
  tablet: `(max-width: ${breakpoint.tablet}px)`,
  mobile: `(max-width: ${breakpoint.mobile}px)`,
}

export const theme = {
  device,
}
