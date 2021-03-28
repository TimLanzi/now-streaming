import CookieNotice from "./CookieNotice";
import Header from "./Header";
import NProgressBar from "./Nprogress";
import PrivacyLink from "./PrivacyLink";

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <NProgressBar />
    {children}
    <CookieNotice />
    <PrivacyLink />
  </>
)

export default Layout