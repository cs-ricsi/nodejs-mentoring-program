export interface UserEntity {
  id: string; // uuid
  email: string, 
  password: string, 
  role: 'admin' | 'user'
}

export const users: UserEntity[] = [{
  id: '0fe36d16-49bc-4aab-a227-f84df899a6cb',
  email: 'test@test.com',
  password: 'password',
  role: 'user'
}]