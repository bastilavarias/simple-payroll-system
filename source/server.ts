import Application from "./application";

Application.listen(process.env.PORT || 3000, () =>
  console.log("Server is running..")
);
