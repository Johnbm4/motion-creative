import Layout from './components/layout';
import NavOverlay from './navigation/NavOverlay';
import NavTrigger from './navigation/NavTrigger';
import { NavigationProvider } from './navigation/NavigationContext';
import PageTransition from './navigation/PageTransition';
import PageRouter from './pages/PageRouter';

export default function App() {
  return (
    <NavigationProvider>
      <Layout>
        <NavTrigger />
        <NavOverlay />
        <PageTransition>
          <PageRouter />
        </PageTransition>
      </Layout>
    </NavigationProvider>
  );
}
