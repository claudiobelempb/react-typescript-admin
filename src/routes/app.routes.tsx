import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DashboardDefault } from "../pages/DashboardDefault";
import { HomeDefault } from "../pages/HomeDefault";
import { RegisterDefault } from "../pages/RegisterDefault";
import { SigninDefalut } from "../pages/SiginDefault";
import { UsersDefault } from "../pages/UsersDefault";

const AppRoutesDefalut: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={HomeDefault} />
        <Route path={"/dashboard"} exact component={DashboardDefault} />
        <Route path={"/sigin"} exact component={SigninDefalut} />
        <Route path={"/register"} exact component={RegisterDefault} />
        <Route path={"/users"} exact component={UsersDefault} />
      </Switch>
    </BrowserRouter>
  );
};

export { AppRoutesDefalut };
