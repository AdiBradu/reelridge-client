// styles
import './App.css';
// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { protectedRoutes, publicRoutes } from './routes/routes';
// key generator
import uniqid from 'uniqid';
// react query
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            {protectedRoutes.map((route) => (
              <Route key={uniqid()} element={route.element} path={route.path}>
                {route.children?.map((route) => (
                  <Route key={uniqid()} element={route.element} path={route.path} />
                ))}
              </Route>
            ))}
          </Route>
          {publicRoutes.map((route) => (
            <Route key={uniqid()} element={route.element} path={route.path}>
              {route.children?.map((route) => (
                <Route key={uniqid()} element={route.element} path={route.path} />
              ))}
            </Route>
          ))}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};
