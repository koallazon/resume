export interface ICareer {
  companyName: string;
  period: string;
  role: string;
  introduce: string;
  project: IProject[];
}

export interface IProject {
  title: string;
  date: string;
  desc: string;
  url?: string;
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
