import { UserEntity } from "../types/user.entity";
import { registerUser, loginUser } from "../repository/auth";


export async function register(body: UserEntity): Promise<UserEntity> {
    const user = await registerUser(body);

    return user;
}

export async function login(body: { email: string, password: string }): Promise<{ token: string }> {
    const user = await loginUser(body);

    return user;
}