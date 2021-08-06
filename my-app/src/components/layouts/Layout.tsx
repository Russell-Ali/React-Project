import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};
export default Layout;
