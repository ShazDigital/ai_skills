import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 grainy">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            AI Skill Tracker
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Define, measure, and share your AI capabilities across prompt engineering, machine learning, and more.
          </p>
        </header>
        
        <main className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Welcome to AI Skill Tracker
            </h2>
            <p className="text-gray-600">
              The standardized tool for showcasing AI expertise and finding AI talent.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App