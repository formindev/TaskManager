import WebpackerReact from "webpacker-react";
import TaskBoard from "./components/TaskBoard";
import Routes from "../routes";

Routes.configure({
  default_url_options: { format: "json" }
});
Routes.config();

window.Routes = Routes;
WebpackerReact.setup({ TaskBoard });
