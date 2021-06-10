/** Import Dependencies */
import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

/** Import Components */
import {
  Home,
  Career,
  Class,
  Mentor,
  Student
} from '../modules/index'

import Main from '../layouts/Main'

/** Import General Context */
import { CareerProvider } from '../context/CareerContext'
import { ModalProvider } from '../context/ModalContext'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <CareerProvider>
          <ModalProvider>
            <Main>
              <Route exact path="/" component={Home}></Route>
              <Route exact strict path={["/(.+)"]}>
                <Route path="/Career" component={Career}></Route>
                <Route path="/Class/:idCareer/:nameCareer" component={Class}></Route>
                <Route path="/Mentor" component={Mentor}></Route>
                <Route path="/Student" component={Student}></Route>
              </Route>
            </Main>
          </ModalProvider>
        </CareerProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
