
export default function FooterPage() {
  return (
    <div id="footer" className="w-full min-h-screen bg-bgColor bg-gradient-to-b from-bgColor to-second py-16 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-main text-3xl sm:text-4xl font-bold text-center mb-12 animate-slideInDown">
          Contact Me!
        </h2>
        <form className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {['Full Name', 'Email Address', 'Mobile Number', 'Email Subject'].map((placeholder, index) => (
              <input
                key={index}
                type={placeholder.toLowerCase().includes('email') ? 'email' : placeholder.toLowerCase().includes('number') ? 'tel' : 'text'}
                placeholder={placeholder}
                className="w-full bg-second text-text h-12 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-main transition-all duration-300 transform hover:scale-105" required
              />
            ))}
          </div>
          <textarea
            placeholder="Your Message" required
            className="w-full bg-second text-text rounded-lg p-4 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-main transition-all duration-300 transform hover:scale-105"
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-main hover:shadow-main hover:shadow-md text-bgColor rounded-full hover:bg-opacity-80 transition-all duration-300 text-lg font-semibold transform hover:scale-110 "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}