import data from "./content.json";

export interface NavLink {
  label: string;
  href: string;
}

export interface LinkItem {
  label: string;
  url: string;
}

export interface LabeledValue {
  label: string;
  value: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  tags: string[];
  points: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  link: string;
  image?: string;
}

export interface PaperItem {
  id: string;
  meta: string;
  title: string;
  desc: string;
  tags: string[];
  link: string;
}

export interface Papers {
  sectionLabel: string;
  title: string;
  tagline: string;
  statement: string;
  meta: string[];
  items: PaperItem[];
}

export interface StackCategory {
  name: string;
  items: string[];
}

export interface Content {
  meta: {
    title: string;
    description: string;
    author: string;
    openGraph: {
      title: string;
      description: string;
      type: string;
    };
  };
  site: {
    name: string;
    docId: string;
    portfolioDocId: string;
    classification: string;
    status: string;
    ticker: string[];
    nav: NavLink[];
  };
  hero: {
    subject: string;
    displayLines: string[];
    role: LabeledValue;
    origin: LabeledValue;
  };
  profile: {
    sectionLabel: string;
    title: string;
    text: string;
    name: string;
    documentId: string;
    education: string[];
    location: string[];
    summary: string;
  };
  experience: {
    sectionLabel: string;
    title: string;
    intro: string;
    items: ExperienceItem[];
  };
  projects: {
    sectionLabel: string;
    title: string;
    intro: string;
    items: ProjectItem[];
  };
  stack: {
    sectionLabel: string;
    title: string;
    intro: string;
    tagline: string;
    categories: StackCategory[];
  };
  research: {
    sectionLabel: string;
    title: string;
    intro: string;
    status: string;
    caseTitle: string;
    body: string;
    points: string[];
    links: LinkItem[];
  };
  papers: Papers;
  footer: {
    sectionLabel: string;
    title: string;
    intro: string;
    email: string;
    links: LinkItem[];
    copyright: string;
    footerTag: string;
  };
}

export const content: Content = data as Content;
