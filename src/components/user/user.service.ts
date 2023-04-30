import bcrypt from "bcryptjs";

export class UserService {
    async comparePassword(textPassword:string, hash:string): Promise<boolean> {
        return await bcrypt.compare(textPassword, hash);
    }

    async generatePassword(textPassword:string): Promise<string> {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        return await bcrypt.hash(textPassword, salt);
    }
}
