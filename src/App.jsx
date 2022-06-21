import React, { useEffect } from 'react';
import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import PageLayout from './layouts';
import user from "@/store/user";
import Loading from "@/components/Loading"

const App = observer(() => {
  const location = useLocation()
  const navigate = useNavigate()
  const { pathname } = location;

  useEffect(() => {
    if (!user.token) {
      navigate('/login', { replace: true })
    } else {
      let perLength = user.permissions.length;

      if(perLength === 0) {
        user.initAuthList()
      } else if(!user.permissions.includes(pathname)) {
        navigate('/403')
      }
    }
  }, [pathname])

  return (
    user.token ? (
      <PageLayout>
        <Outlet />
      </PageLayout>
    ) : (
      user.isError ? (
        <Navigate to="/login" replace />
      ) : (
        <Loading />
      )
    )
  )
})

export default App;