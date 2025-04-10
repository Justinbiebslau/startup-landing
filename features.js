export default function Features() {
  return (
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
  );
}
