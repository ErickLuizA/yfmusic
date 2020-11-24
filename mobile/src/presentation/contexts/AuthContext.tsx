import React, { createContext, useState, useEffect, ReactChildren } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../../infra/services/api'

interface IAuthContext {
  authenticated: boolean
  login: (response: any) => Promise<void>
  logout: (response: any) => Promise<void>
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

interface IAuthProvider {
  children: ReactChildren
}

function AuthProvider({ children }: IAuthProvider) {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    async function checkAuth() {
      const token = await AsyncStorage.getItem('@RNtoken')

      console.log('AuthProvider - (token)', token)

      if (token) {
        setAuthenticated(true)
        api.defaults.headers.Authorization = `Bearer ${token}`
      } else {
        setAuthenticated(false)
        api.defaults.headers.Authorization = `Bearer ${undefined}`
      }
    }

    checkAuth()
  }, [authenticated])

  const login = async (response: any) => {
    setAuthenticated(true)

    await AsyncStorage.setItem('@RNtoken', response)
  }

  const logout = async () => {
    setAuthenticated(false)

    await AsyncStorage.removeItem('@RNtoken')
  }

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
