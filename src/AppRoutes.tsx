import { Home } from "./pages/home/home";
import Brokers from "./pages/accounts/brokers/brokers";
import { Route, Routes } from "react-router-dom";
import { Banks } from "./pages/accounts/banks/banks";
import { DisplayProfile } from "./pages/profile/display-profile/display-profile";
import { EditProfile } from "./pages/profile/edit-profile/edit-profile";
import { ActionMenu } from "./component/menu/model/menu-model";

export const AppRoutes = (props: {activeTheme: ActionMenu}) => {
  return (
    <Routes>
      <Route path="/Accounts/brokers" element={<Brokers activeTheme={props.activeTheme} />} />
      <Route path="/Accounts/banks" element={<Banks activeTheme={props.activeTheme} />} />
      <Route path="/Profile/DisplayProfile" element={<DisplayProfile activeTheme={props.activeTheme} />} />
      <Route path="/Profile/EditProfile" element={<EditProfile activeTheme={props.activeTheme} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};
