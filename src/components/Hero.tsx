import Link from 'next/link';

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-green-900 sm:text-5xl md:text-6xl">
          <span className="block">Transform Your Business</span>
          <span className="block text-green-600">With Technology</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-green-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          We help businesses leverage cutting-edge technology to drive growth, 
          improve efficiency, and stay ahead of the competition.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <Link 
            href="/contact" 
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}