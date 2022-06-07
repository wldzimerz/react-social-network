import Profile from 'src/models/Profile';
import User from 'src/models/User';

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: boolean;
}

export interface GetUsersRequest {
  count: number;
  page?: number;
  term?: User['name'];
  friend?: User['followed'];
}

export interface SetProfileRequest extends Partial<Profile> {}

export interface SetProfilePhotoRequest {
  image: FormData;
  // const [files, setFiles] = useState<File[]>([])
  // const formData = new FormData()
  // for (const file of files) {
  //   formData.append('files', file)
  // }
}

export interface SetProfileStatusRequest {
  status: string; // max length - 300
}

export interface GetProfileRequest {
  userId: User['id'];
}

export interface GetProfileStatusRequest {
  userId: User['id'];
}

export interface FollowUserRequest {
  userId: User['id'];
}
