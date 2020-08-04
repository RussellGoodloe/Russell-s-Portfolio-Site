import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import HomePage from '../components/HomePage';
import PersonalPage from '../components/PersonalPage';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import InquirePage from '../components/InquirePage';
import AddProjectPage from '../components/AddProjectPage';
import EditProjectPage from '../components/EditProjectPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/dashboard" component={HomePage} />
                <Route path="/personal" component={PersonalPage}/>
                <Route path="/portfolio" component={PortfolioPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/inquire" component={InquirePage}/>
                <Route path="/create" component={AddProjectPage}/>
                <Route path="/edit:id" component={EditProjectPage}/>
                <Route component={NotFoundPage}/>
            </Switch>  
        </div>         
    </BrowserRouter>
);

export default AppRouter;