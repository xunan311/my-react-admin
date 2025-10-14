import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, DataTable, EmailField, UrlField } from "react-admin";

export const UserList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <DataTable>
          <DataTable.Col source="id" />
          <DataTable.Col source="name" />
          <DataTable.Col source="username" />
          <DataTable.Col source="email">
            <EmailField source="email" />
          </DataTable.Col>
          <DataTable.Col source="address.street" />
          <DataTable.Col source="phone" />
          <DataTable.Col source="website" field={UrlField} />
          <DataTable.Col source="company.name" />
        </DataTable>
      )}
    </List>
  );
};
