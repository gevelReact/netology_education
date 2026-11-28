export interface UserInfo {
  id: number;
  name: string;
}

export interface UserDetail {
  id: number;
  name: string;
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
}
