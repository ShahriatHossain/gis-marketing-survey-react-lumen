export interface SideNavItemModel {
    id: string;
    name: string;
    links: SideNavItemLink[];
    isCollapsed: boolean;
    onItemClick: Function;
}

export interface SideNavItemLink {
    name: string;
    path: string;
}