import Express from "express";
import Cors from "cors";
import BodyParser from "body-parser";
import Api from "./api";
import Passport from "passport";
import JWTPassport from "./passport";


const application = Express();

application.use(Cors());
application.use(BodyParser.json());
application.use(BodyParser.urlencoded({ extended: false }));
application.use("/api", Api);
application.use(Passport.initialize());
JWTPassport(Passport);

if (process.env.NODE_ENV === "production") {
    application.use(Express.static(__dirname + "/public/"));
    application.get(/.*/, (request, response) =>
        response.sendFile(__dirname + "/public/index.html")
    );
}

export default application;