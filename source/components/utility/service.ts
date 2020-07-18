import * as dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcryptjs";

const UtilityService = {
  hashPassword: async (plainTextPassword: string): Promise<string> => {
    const salt = await bcrypt.genSalt(
      parseInt(<string>process.env.AUTH_SALT_ROUNDS)
    );
    return await bcrypt.hash(plainTextPassword, salt);
  },

  compareHashPassword: async (
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean> => {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  },

  checkErrorIfValid: (error: object): boolean => {
    return Object.values(error).filter((message) => message).length > 0;
  },
};

export default UtilityService;
