import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { supabase } from './supabaseClient'
import Auth from './components/Auth'
import User from './components/User'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    // Set the initial session from local storage
    setSession(supabase.auth.session())

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session)
      }
    )

    // Cleanup
    return () => {
      authListener?.unsubscribe()
    }
  }, [])

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Savvy Accountant Connect</h1>
      <AuthProvider>
        {!session ? <Auth /> : <User user={session.user} />}
      </AuthProvider>
    </div>
  )
}

export default App 