import React from 'react';
import { Outlet } from "react-router-dom";
import PageLayout from './layouts';
import AuthPage from '@/components/AuthPage';

function App() {

  return (
    <AuthPage>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </AuthPage>
  )
}

export default App;