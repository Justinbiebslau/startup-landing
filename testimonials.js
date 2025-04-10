export default function Testimonials() {
  return (
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
  );
}
