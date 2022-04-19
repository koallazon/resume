export interface ICareer {
  companyName: string;
  companyUrl: string;
  period: string;
  role: string;
  introduce: string;
  project: IProject[];
}

export interface IProject {
  title: string[];
  date: string;
  desc: string;
  url?: string[];
  skill?: string[];
  performance: string[];
}

export interface ISkill {
  subject: string;
  content: ISkillContent[];
}

export interface ISkillContent {
  title: string;
  desc?: string;
}

export interface IEdu {
  subject: string;
  organ: string;
  period: string;
  desc?: string;
}
