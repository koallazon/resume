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
