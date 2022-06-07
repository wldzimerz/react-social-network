import Profile from 'src/models/Profile';
import User from 'src/models/User';

export interface LoginResponse {
  resultCode: number;
  messages: string[];
  data: {
    userId: User['id'];
  };
}

export interface LogoutResponse {
  resultCode: number;
  messages: string[];
  data: any; // ???
}

export interface AuthMeResponse {
  resultCode: number; // 0 - success, other - error
  messages: string[];
  data: {
    id: number;
    email: string;
    login: string;
  };
}

export interface GetUsersResponse {
  items: User[];
  totalCount: number;
  error: string;
}

export interface SetProfileResponse {
  resultCode: number;
  messages: string[];
  data: any; // ???
}

export interface SetProfilePhotoResponse {
  resultCode: number;
  messages: string[];
  data: {
    large: string | null;
    small: string | null;
  };
}

export interface SetProfileStatusResponse {
  resultCode: number;
  messages: string[];
  data: any;
}

export interface GetProfileResponse extends Profile {}

export interface GetProfileStatusResponse {
  status: string;
}

export interface FollowUserResponse {
  resultCode: number;
  messages: string[];
  data: any;
}
