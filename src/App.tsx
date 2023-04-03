// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { protectedRoutes, publicRoutes } from './routes/routes';
// react query
import { QueryClient, QueryClientProvider } from 'react-query';
// components
import { Spinner } from './components/Spinner/Spinner';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
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
      </Router>
    </QueryClientProvider>
  );
};
