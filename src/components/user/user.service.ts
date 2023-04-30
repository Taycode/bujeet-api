import bcrypt from "bcryptjs";

export async function generatePassword(textPassword:string): Promise<string> {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(textPassword, salt);
}

export async function comparePassword(textPassword:string, hash:string): Promise<boolean> {
    return await bcrypt.compare(textPassword, hash);
}
