import { UserEntity } from "../types/user.entity"
import { users } from "../types/user.entity";

export async function registerUser(user: UserEntity): Promise<UserEntity> {
    user.id = (Math.floor(Math.random() * 1000) + 1).toString();
    users.push(user);
    return user;
}

export async function loginUser(body: { email: string, password: string }): Promise<{ token: string }> {
    return {
        token: "VugRyl8SX88-LOZhvJxupjfWX=rATjop1kFw/NcshAQ4QdX0moMh9w9pVtL4rowLVoVpjpYBSKBUJsfqjnjnr-ImD/XAWJUdXIFfy3!7ViC/pxSP5zNefrgMAt2=?3=iv7Gga=zjphHqog6Jdy?AliWwYROxe4AUzQAxM!Nc=Hxax-0hJRJ!ijgE-=6RFis!cuHXxpJBA=EpoTYmla247q6rrm1RA!WLq3rJOX1itwD-LGb8hdGVXwGFgxy9QNJ/"
    };
}
