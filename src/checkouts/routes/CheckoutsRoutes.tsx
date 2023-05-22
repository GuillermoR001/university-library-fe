import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import { NavBar } from '../../shared';
import { 
  HomePage, 
  CheckoutShow, 
  CheckoutEdit, 
  StudentCheckoutsPage 
} from '../pages';
import { 
  BookList,
   BookAdd, 
   BookShow 
} from '../../books/pages';
import { 
  UserAdd, 
  UserShow, 
  UsersList 
} from '../../users/pages';

export const CheckoutsRoutes = () => {
  return (
    <React.Fragment>
        <NavBar />
        <div className="main-layout">
            <Routes>
                <Route path="/home"  element={<HomePage />} />
                <Route path="/checkouts/show/:id"  element={<CheckoutShow />} />
                <Route path="/checkouts/my-checkouts"  element={<StudentCheckoutsPage />} />
                <Route path="/checkouts/edit/:id"  element={<CheckoutEdit />} />
                <Route path="/book/list"  element={<BookList />} />
                <Route path="/book/add"  element={<BookAdd />} />
                <Route path="/book/show/:id"  element={<BookShow />} />
                <Route path="/book/edit/:id"  element={<BookShow />} />
                <Route path="/user/list"  element={<UsersList />} />
                <Route path="/user/add"  element={<UserAdd />} />
                <Route path="/user/show/:id"  element={<UserShow />} />
            </Routes>
        </div>
    </React.Fragment>
  )
}
