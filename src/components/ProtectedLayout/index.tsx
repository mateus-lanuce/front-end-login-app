import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { getUserLocalStorage } from '../../context/AuthProvider/utils';

const ProtectedLayout = ({ children }: {children: JSX.Element}) => {

  const { setUser } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    const user = getUserLocalStorage();

    if(user) {
        setUser(user);
    }

    if(!user?.token) {
      navigate('/login')
    }

  }, [setUser, navigate])

  return children;
}

export default ProtectedLayout;
