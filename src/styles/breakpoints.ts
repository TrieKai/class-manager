const size = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};

export const device = {
  mobile: `@media screen and (max-width: ${size.mobile})`,
  tablet: `@media screen and (min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
  laptop: `@media screen and (min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
  desktop: `@media screen and (min-width: ${size.laptop})`,

  mobileUp: `@media screen and (min-width: ${size.mobile})`,
  tabletUp: `@media screen and (min-width: ${size.tablet})`,
  laptopUp: `@media screen and (min-width: ${size.laptop})`,
  desktopUp: `@media screen and (min-width: ${size.desktop})`,
};
