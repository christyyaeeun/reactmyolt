// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Paired, UserProfile, UserEntry, User } = initSchema(schema);

export {
  Paired,
  UserProfile,
  UserEntry,
  User
};