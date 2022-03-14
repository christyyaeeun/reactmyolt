import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PairedMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserEntryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Paired {
  readonly id: string;
  readonly partner_request?: string;
  readonly partner_accept?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Paired, PairedMetaData>);
  static copyOf(source: Paired, mutator: (draft: MutableModel<Paired, PairedMetaData>) => MutableModel<Paired, PairedMetaData> | void): Paired;
}

export declare class UserProfile {
  readonly id: string;
  readonly profile_image?: string;
  readonly bio?: string;
  readonly UserEntries?: (UserEntry | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserProfile, UserProfileMetaData>);
  static copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile, UserProfileMetaData>) => MutableModel<UserProfile, UserProfileMetaData> | void): UserProfile;
}

export declare class UserEntry {
  readonly id: string;
  readonly title?: string;
  readonly content?: string;
  readonly date_created?: string;
  readonly isPrivate?: boolean;
  readonly image?: string;
  readonly userprofileID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserEntry, UserEntryMetaData>);
  static copyOf(source: UserEntry, mutator: (draft: MutableModel<UserEntry, UserEntryMetaData>) => MutableModel<UserEntry, UserEntryMetaData> | void): UserEntry;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly Profile?: UserProfile;
  readonly Paired?: Paired;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly userProfileId?: string;
  readonly userPairedId?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}