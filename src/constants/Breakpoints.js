const Breakpoints = {
  small: 'SMALL',
  medium: 'MEDIUM',
  large: 'LARGE',
};

export const matches = [
  {
    breakpoint: Breakpoints.large,
    mediaQuery: `(min-width: 1180px)`,
  },
  {
    breakpoint: Breakpoints.medium,
    mediaQuery: `(min-width: 768px) and (max-width: 1179px)`,
  },
  {
    breakpoint: Breakpoints.small,
    mediaQuery: `(max-width: 767px)`,
  },
];

export default Breakpoints;
