import Header from "./Header";
import NProgressBar from "./Nprogress";

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <NProgressBar />
    {children}
  </>
)

export default Layout