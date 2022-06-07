import { BaseModel } from 'sjs-base-model';
import User from './User';

export default class Profile extends BaseModel {
  public userId: User['id'] = 0;
  public fullName: User['name'] = '';
  public lookingForAJob: boolean = false;
  public lookingForAJobDescription: string | null = null;
  public aboutMe: string | null = null;
  public contacts: {
    github: string | null;
    vk: string | null;
    facebook: string | null;
    instagram: string | null;
    twitter: string | null;
    website: string | null;
    youtube: string | null;
    mainLink: string | null;
  } = {
    github: null,
    vk: null,
    facebook: null,
    instagram: null,
    twitter: null,
    website: null,
    youtube: null,
    mainLink: null,
  };
  public photos: User['photos'] = {
    small: null,
    large: null,
  };

  constructor(data: Partial<Profile>) {
    super({ expand: true });
    this.update(data);
  }
}
