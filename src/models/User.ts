import { BaseModel } from 'sjs-base-model';

export default class User extends BaseModel {
  public id: number = 0;
  public name: string = '';
  public status: string | null = null;
  public photos: {
    small: string | null;
    large: string | null;
  } = {
    small: null,
    large: null,
  };
  public followed: boolean = false;

  constructor(data: Partial<User>) {
    super({ expand: true });
    this.update(data);
  }
}
