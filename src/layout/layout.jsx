import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Navbar />

      <main className="flex-1 m-0 p-0">
        {children}
      </main>

      <Footer  />
    </div>
  );
};

export default Layout;
