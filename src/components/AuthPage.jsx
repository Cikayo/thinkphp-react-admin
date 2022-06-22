import React, { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import user from "@/store/user";
import Loading from "@/components/Loading"

const AuthPage = observer(({ children }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const { pathname } = location;

    useEffect(() => {
        if (!user.token) {
            navigate('/login', { replace: true })
        } else {
            let perLength = user.permissions.length;

            if (perLength === 0) {
                user.initAuthList()
            } else if (!user.permissions.includes(pathname)) {
                navigate('/403', { replace: true })
            }
        }
    }, [pathname])

    return (
        user.token ? (<>{ children }</>) : (
            user.isError ? (
                <Navigate to="/login" replace />
            ) : (
                <Loading />
            )
        )
    )
})

export default AuthPage;