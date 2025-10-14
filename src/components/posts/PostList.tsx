import { List, DataTable, ReferenceField, EditButton } from "react-admin";
import { PostFilters } from "./PostFilters";

export const PostList = () => (
  <List filters={PostFilters}>
    <DataTable>
      <DataTable.Col source="id" />
      <DataTable.Col source="userId">
        <ReferenceField source="userId" reference="users" link="show" />
      </DataTable.Col>
      <DataTable.Col source="title" />
      <DataTable.Col>
        <EditButton />
      </DataTable.Col>
    </DataTable>
  </List>
);
