import data from "./content.json";

export interface LinkItem {
  label: string;
  url: string;
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
      image: string;
    };
  };
  site: {
    name: string;
  };
  profile: {
    name: string;
    education: string[];
    location: string[];
  };
  experience: {
    sectionLabel: string;
    title: string;
    items: ExperienceItem[];
  };
  projects: {
    sectionLabel: string;
    title: string;
    items: ProjectItem[];
  };
  stack: {
    sectionLabel: string;
    title: string;
    tagline: string;
    categories: StackCategory[];
  };
  research: {
    title: string;
    status: string;
    caseTitle: string;
    body: string;
    points: string[];
    links: LinkItem[];
  };
  papers: {
    sectionLabel: string;
    title: string;
    tagline: string;
    meta: string[];
    items: PaperItem[];
  };
  footer: {
    title: string;
    email: string;
    links: LinkItem[];
    copyright: string;
  };
}

export const content: Content = data as Content;
