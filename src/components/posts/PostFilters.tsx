import { ReferenceInput, TextInput } from "react-admin";

export const PostFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />,
];
