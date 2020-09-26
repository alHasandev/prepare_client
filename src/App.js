// Import static assets
import "./css/tailwind.css";

import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import HomePage from "./page/HomePage";
import ItemPage from "./page/ItemPage";
import ItemForm from "./components/ItemForm";

function App() {
  return (
    <div className="w-full max-w-screen-lg grid gap-4 mx-auto px-4 lg:px-0">
      <nav className="border px-4 py-2">
        <ul className="flex items-center">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="underline"
              className="text-blue-500 mr-4">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/items"
              activeClassName="underline"
              className="text-blue-500 mr-4">
              Items
            </NavLink>
          </li>
        </ul>
      </nav>

      <main className="border p-4">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/items" component={ItemPage} />
          <Route exact path="/items/new" component={ItemForm} />
          <Route exact path="/items/edit/:itemID" component={ItemForm} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
