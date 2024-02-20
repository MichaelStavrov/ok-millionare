import RootRoutes from 'routes/RootRoutes';
import AppContextProvider from 'src/context/store';

const App = () => {
  return (
    <AppContextProvider>
      <RootRoutes />
    </AppContextProvider>
  );
};

export default App;
