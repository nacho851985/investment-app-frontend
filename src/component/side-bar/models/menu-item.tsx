import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SavingsIcon from '@mui/icons-material/Savings';
import { To } from "react-router-dom";

export  class SideBarMenuItem {
 
  public getMenuItems(): ExpandMenuItem[] {
    const menuItemList: ExpandMenuItem[] = new Array<ExpandMenuItem>();
    const profileOption: ExpandMenuItem[] = new Array<ExpandMenuItem>();
    profileOption.push(
      new ExpandMenuItem(0,"Edit Profile", <ManageAccountsIcon />,"/Profile/EditProfile", false,false, []),
      new ExpandMenuItem(1, "Display Profile",  <AccountCircleIcon />,"/Profile/DisplayProfile", false,false, [])
    );

    const accountOption: ExpandMenuItem[] = new Array<ExpandMenuItem>();
    accountOption.push(new ExpandMenuItem(0, "Brokers",  <SavingsIcon />,"/Accounts/Brokers", false,false, []), new ExpandMenuItem(1, "Banks", <AccountBalanceIcon />,"/Accounts/Banks", false,false, []));

    menuItemList.push(
      new ExpandMenuItem(0, "Home", <HomeIcon />, "/home", false, true, []),
      new ExpandMenuItem(
        1,
        "Accounts",
        <AccountBalanceWalletIcon />,
        "",
        true,
        false,
        accountOption
      ),
      new ExpandMenuItem(
        2,
        "Expenses",
        <AttachMoneyIcon />,
        "",
        false,
        false,
        []
      ),
      new ExpandMenuItem(
        3,
        "Profile",
        <AccountBoxIcon />,
        "",
        true,
        false,
        profileOption
      )
    );

    return menuItemList;
  }
}

export class OptionMenu {
  name: string;
  isSelected: boolean;
  constructor(_name: string, _isSelected: boolean) {
    this.name = _name;
    this.isSelected = _isSelected;
  }
}

export class ExpandMenuItem {
  id: number;
  name: string;
  icon: JSX.Element;
  link: To;
  isOpen: boolean;
  isSelected: boolean;
  optionList: ExpandMenuItem[];

  constructor(
    _id: number,
    _name: string,
    _icon: JSX.Element,
    _link: To,
    _isOpen: boolean,
    _isSelected: boolean,
    optionList: ExpandMenuItem[],
  ) {
    this.id = _id;
    this.name = _name;
    this.icon = _icon;
    this.link = _link;
    this.isOpen = _isOpen;
    this.isSelected = _isSelected;
    this.optionList = optionList;
  }
}






