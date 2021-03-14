import Header from "./Header";

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

export default Layout