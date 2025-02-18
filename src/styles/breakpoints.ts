const size = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
  desktopL: "1400px",
};

export const device = {
  mobile: `@media screen and (max-width: ${size.mobile})`,
  tablet: `@media screen and (min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
  laptop: `@media screen and (min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
  desktop: `@media screen and (min-width: ${size.laptop}) and (max-width: ${size.desktop})`,
  desktopL: `@media screen and (min-width: ${size.desktop}) and (max-width: ${size.desktopL})`,
  desktopXL: `@media screen and (min-width: ${size.desktopL})`,

  mobileUp: `@media screen and (min-width: ${size.mobile})`,
  tabletUp: `@media screen and (min-width: ${size.tablet})`,
  laptopUp: `@media screen and (min-width: ${size.laptop})`,
  desktopUp: `@media screen and (min-width: ${size.desktop})`,
  desktopLUp: `@media screen and (min-width: ${size.desktopL})`,
};
