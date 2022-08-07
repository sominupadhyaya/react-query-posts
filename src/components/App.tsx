import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import FetchData from "./FetchData";
const App = () => {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FetchData />
      </QueryClientProvider>
    </>
  );
}

export default App;
