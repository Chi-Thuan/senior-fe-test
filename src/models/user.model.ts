import { CONTACT_TYPE } from "~/constants/common";
import { ContactModel, ProspectModel } from ".";
import { SubscriptionModel } from "./common.model";

export type UserModel = {
  id: number;
  fullname: string;
  email: string;
  // saved?: Array<UserSaved>;
  saved?: Array<ProspectModel>;
  subscription?: UserSubscription;
  customContact?: Array<ContactCustomModel>;
};

type UserSubscription = {
  id: number;
  package: SubscriptionModel;
  buyDate?: Date;
};

// type UserSaved = {
//   packageId: number;
//   prospectId: ProspectModel;
//   showEmail?: boolean;
//   showPhone?: boolean;
// };

export type ContactCustomModel = {
  prospectId: ProspectModel;
  contactId?: ContactModel;
  type: CONTACT_TYPE;
  value: string;
};
