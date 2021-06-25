import { Fragment } from "react";
import MainHeader from "./MainHeader";
import classes from "./Layout.module.css";
const Layout = (props: any) => {
    return(
    <Fragment>
        <MainHeader />
        <main className={classes.main}>{props.children}</main>
    </Fragment>
    );
};

export default Layout;