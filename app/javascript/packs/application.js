import WebpackerReact from "webpacker-react";
import TaskBoard from "./components/TaskBoard";
import Routes from "../routes";

window.Routes = Routes;
WebpackerReact.setup({ TaskBoard });
