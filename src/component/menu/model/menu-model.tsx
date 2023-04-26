export class MenuModel {
    title: OptionMenu;
    arrayOption: OptionMenu[];

    constructor(_title: OptionMenu, _arrayOption: OptionMenu[]) {
        this.title = _title;
        this.arrayOption = _arrayOption;
    }
}

export interface OptionMenu {
    title: string;
    icon:  JSX.Element;
}

export enum ActionMenu {
    ProfileView = "Profile",
    MyAccount = "My Account",
    Settings = "Settings",
    Logout = "Logout",
    LightTheme = "Light Theme",
    DarkTheme = "Dark Theme"
}