import { SOCIAL_TYPE } from "~/constants/common";
import { ContactModel, MediaModel } from "./common.model";
import { CompanyModel } from ".";

export type ProspectModel = {
  id: number;
  fullname: string;
  avatar?: MediaModel;
  resume?: ResumeModel;
  contacts: ContactModel[];
  company?: CompanyModel;
  country?: string;
};

export type ResumeModel = {
  companyUrl?: string;
  title?: string;
  about?: string;
  employeeNumber?: string;
  industry?: string;
  subIndustry?: string;
  specialties?: string[];
  founded?: number;
  annualRevenue?: string;
  social?: Array<{
    type: SOCIAL_TYPE;
    url: string;
  }>;
  country?: string;
};
