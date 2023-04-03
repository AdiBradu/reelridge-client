import { Suspense } from 'react';
// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { protectedRoutes, publicRoutes } from './routes/routes';
// react query
import { QueryClient, QueryClientProvider } from 'react-query';
// styles
import './styles/reset.css';
import 'swiper/css';
import './components/PostersSliders/postersSliders.css';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<p>loading</p>}>
          <Routes>
            <Route element={<PrivateRoutes />}>
              {protectedRoutes.map((route) => (
                <Route key={route.path} element={route.element} path={route.path} />
              ))}
            </Route>
            {publicRoutes.map((route) => (
              <Route key={route.path} element={route.element} path={route.path} />
            ))}
          </Routes>
        </Suspense>
      </Router>
    </QueryClientProvider>
  );
};
