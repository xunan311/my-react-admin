import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from "./provider/dataProvider";
import { UserList } from "./components/users/UserList";
import { PostList } from "./components/posts/PostList";
import { PostEdit } from "./components/posts/PostEdit";
import { PostCreate } from "./components/posts/PostCreate";
import UserIcon from "@mui/icons-material/Group";
import PostIcon from "@mui/icons-material/Book";
import { Dashboard } from "./components/dashboard/Dashboard";
import { authProvider } from "./provider/authProvider";
import { Layout } from "./Layout";

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
    layout={Layout}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} show={ShowGuesser} icon={UserIcon} />
  </Admin>
);
