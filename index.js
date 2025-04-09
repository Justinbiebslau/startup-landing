export default function StartupLanding() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your Startup</h1>
        <p className="text-lg md:text-xl mb-8">Launch your product with a modern and clean landing page.</p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow hover:bg-gray-100 transition">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
              <p>Experience blazing fast load times with optimized code.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p>Looks great on desktop, tablet, and mobile devices.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Easy to Customize</h3>
              <p>Quickly adapt to your brand and requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What People Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 rounded-xl">
              <p className="italic mb-4">“This landing page template helped us launch faster and make a great first impression.”</p>
              <h4 className="font-semibold">— Alex Johnson, CEO of Launchly</h4>
            </div>
            <div className="p-6 bg-gray-100 rounded-xl">
              <p className="italic mb-4">“Clean, responsive and easy to customize. Perfect for any startup!”</p>
              <h4 className="font-semibold">— Maria Lee, Product Designer</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Startup. All rights reserved.
      </footer>
    </main>
  );
}
