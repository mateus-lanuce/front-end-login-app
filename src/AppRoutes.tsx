import React from 'react';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedLayout from './components/ProtectedLayout';
import Login from './pages/Login';
import Home from './pages/Home';

export const AppRoutes = () => {


  return (
    
    <AuthProvider>
        <BrowserRouter>

            <Routes>
                <Route path="/profile" element={
                    <ProtectedLayout>
                        <Home />
                    </ProtectedLayout>
                }>
    
                </Route>
                <Route path="/login" element={<Login />}/>
            </Routes>

        </BrowserRouter>
    </AuthProvider>

  );
};
