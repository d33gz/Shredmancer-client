export interface Account {
  userId: number;
  userName: string;
  userPass: string;
  authoredTabs: string[];
  favoriteTabs: string[];
  joinDate: Date;
}