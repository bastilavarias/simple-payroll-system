import Express from "express";
import AuthenticationController from "./controller";
import Passport from "passport";

const AuthenticationRouter = Express.Router();

AuthenticationRouter.post("/", AuthenticationController.login);
AuthenticationRouter.get(
  "/",
  Passport.authenticate("jwt", { session: false }),
  AuthenticationController.getAuthenticatedCredentials
);

export default AuthenticationRouter;
