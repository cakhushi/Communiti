import { supabase } from '../supabaseClient'

export default function User({ user }) {
  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      console.error('Error signing out:', error.message)
    }
  }

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Account</h2>
      
      <div className="mb-6">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>User ID:</strong> {user.id}</p>
        <p><strong>Last Sign In:</strong> {new Date(user.last_sign_in_at).toLocaleString()}</p>
      </div>
      
      <button
        onClick={handleSignOut}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        Sign Out
      </button>
    </div>
  )
} 