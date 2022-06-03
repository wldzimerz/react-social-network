import axios from 'axios';
import {
  GetUsersRequest,
  LoginRequest,
  SetProfileRequest,
  SetProfilePhotoRequest,
  SetProfileStatusRequest,
  GetProfileRequest,
  GetProfileStatusRequest,
  FollowUserRequest,
} from 'src/types/requests';
import {
  AuthMeResponse,
  GetUsersResponse,
  LoginResponse,
  LogoutResponse,
  SetProfileResponse,
  SetProfilePhotoResponse,
  SetProfileStatusResponse,
  GetProfileResponse,
  GetProfileStatusResponse,
  FollowUserResponse,
} from 'src/types/responses';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'a1aa4767-dee7-4e07-9fd8-040fb8095111',
  },
});

export const api = {
  auth: {
    me: async () => {
      const response = await instance.get<AuthMeResponse>('auth/me');
      return response;
    },
    login: async (payload: LoginRequest) => {
      const response = await instance.post<LoginResponse>(
        'auth/login',
        payload,
      );
      return response;
    },
    logout: async () => {
      const response = await instance.delete<LogoutResponse>('auth/login');
      return response;
    },
  },
  users: {
    get: async (payload: GetUsersRequest) => {
      const response = await instance.get<GetUsersResponse>(
        `users?page=${payload.page}&count=${payload.count}`,
      );
      return response;
    },
    get_friends: async ({ friend = true, ...payload }: GetUsersRequest) => {
      const response = await instance.get<GetUsersResponse>(
        `users?page=${payload.page}&count=${payload.count}&friend=${friend}`,
      );
      return response;
    },
    search: async ({ page = 1, count = 10, ...payload }: GetUsersRequest) => {
      const response = await instance.get<GetUsersResponse>(
        `users?page=${page}&count=${count}term=${payload.term}`,
      );
      return response;
    },
  },
  profile: {
    set: async (payload: SetProfileRequest) => {
      const response = await instance.put<SetProfileResponse>(
        'profile',
        payload,
      );
      return response;
    },
    set_photo: async (payload: SetProfilePhotoRequest) => {
      const response = await instance.put<SetProfilePhotoResponse>(
        'profile/photo',
        payload,
      );
      return response;
    },
    set_status: async (payload: SetProfileStatusRequest) => {
      const response = await instance.put<SetProfileStatusResponse>(
        'profile/status',
        payload,
      );
      return response;
    },
    get: async (payload: GetProfileRequest) => {
      const response = await instance.get<GetProfileResponse>(
        `profile/${payload.userId}`,
      );
      return response;
    },
    get_status: async (payload: GetProfileStatusRequest) => {
      const response = await instance.get<GetProfileStatusResponse>(
        `profile/status/${payload.userId}`,
      );
      return response;
    },
    follow: async (payload: FollowUserRequest) => {
      const response = await instance.post<FollowUserResponse>(
        `follow/${payload.userId}`,
      );
      return response;
    },
    unfollow: async (payload: FollowUserRequest) => {
      const response = await instance.delete<FollowUserResponse>(
        `follow/${payload.userId}`,
      );
      return response;
    },
  },
};
