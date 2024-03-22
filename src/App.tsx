import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Prospects from "~/pages/Prospects/Prospects.component";
import Search from "./pages/Search/Search.component";
import Saved from "./pages/Saved/Saved.component";
import More from "./pages/More/More.component";
import { ExtensionLayout } from "./components/layout";
import CompanyDetails from "./pages/CompanyDetails/CompanyDetails.component";
import { defaultOptionsReactQuery } from "./configs";
import { Toaster } from "~/components/ui/toaster";
import store from "~/store";
import { cn } from "./lib/utils";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: defaultOptionsReactQuery,
  });

  const appClass = cn("w-[320px] h-[500px]", {
    "!h-dvh ml-auto": import.meta.env.MODE === "development",
  });

  return (
    <div className={appClass}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <div className="w-full h-full flex justify-center">
            <div className="extensionWrapper">
              <Router>
                <Routes>
                  <Route element={<ExtensionLayout />}>
                    <Route
                      element={<Prospects initProspectId="1" />}
                      path="/"
                    />

                    <Route element={<Search />} path="/search" />
                    <Route
                      element={<Prospects />}
                      path="search/prospect/:prospectId"
                    />
                    <Route
                      element={<CompanyDetails />}
                      path="search/company/:companyId"
                    />
                    <Route element={<Saved />} path="/saved" />
                    <Route element={<More />} path="/more" />
                  </Route>
                </Routes>
              </Router>
            </div>
          </div>
          <Toaster />
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
