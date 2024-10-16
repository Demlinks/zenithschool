import Icon from "../../shared/Icon";

export interface IFooterLink {
  linkHeader: string;
  links: ILink[];
}

export interface ILink {
  linkText: string;
  linkPath: string;
  linkIcon?: React.ReactNode;
}

export const aboutLink: ILink[] = [
  {
    linkPath: "portal-login",
    linkText: "Portal Login",
  },
  {
    linkPath: "news",
    linkText: "News",
  },
  {
    linkPath: "testimonials",
    linkText: "Testimonials",
  },
  {
    linkPath: "our-values",
    linkText: "Our Values",
  },
  {
    linkPath: "about-us",
    linkText: "About Us",
  },
];

type withUsLink = Pick<ILink, "linkIcon" | "linkText">;
export const connectWithUsLink: withUsLink[] = [
  {
    linkIcon: <Icon name="facebook" size={16} color="white" />,
    linkText: "Zenith_Schools",
  },
  {
    linkIcon: <Icon name="youtube" size={16} color="white" />,
    linkText: "Zenith_Schools",
  },
  {
    linkIcon: <Icon name="mail" size={16} color="white" />,
    linkText: "zenithhighschoolosogbo@gmail.com",
  },
  {
    linkIcon: <Icon name="phone" size={16} color="white" />,
    linkText: "08145159459, 0909590 8187",
  },
];
