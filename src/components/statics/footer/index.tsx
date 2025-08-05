export function FooterComponent(){
    return (
        <footer className="bg-surface-light dark:bg-surface-dark text-text-dark dark:text-text-light font-satoshi py-12 px-6 transition-colors duration-500">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
    {/* Brand Section */}
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl font-bold text-brand">Monitext</h2>
      <p className="text-sm text-text-soft">
        Focus on your code, not guessing where it broke.
      </p>
    </div>

    {/* Navigation Links */}
    <div className="flex flex-col space-y-4 md:col-span-1">
      <h3 className="text-lg font-semibold text-text-dark dark:text-text-light">
        Product
      </h3>
      <ul className="space-y-2 text-sm">
        <li>
          <a href="#" className="text-text-soft hover:text-brand transition-colors duration-200">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="text-text-soft hover:text-brand transition-colors duration-200">
            Documentation
          </a>
        </li>
        <li>
          <a href="#" className="text-text-soft hover:text-brand transition-colors duration-200">
            Blog
          </a>
        </li>
      </ul>
    </div>

    {/* Social Links */}
    <div className="flex flex-col space-y-4 md:col-span-1">
      <h3 className="text-lg font-semibold text-text-dark dark:text-text-light">
        Connect
      </h3>
      <div className="flex space-x-4">
        {/* Replace these with your actual SVG icons and links */}
        <a href="#" aria-label="GitHub" className="text-text-soft hover:text-text-dark dark:hover:text-text-light transition-colors duration-200">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">...</svg>
        </a>
        <a href="#" aria-label="X (Twitter)" className="text-text-soft hover:text-text-dark dark:hover:text-text-light transition-colors duration-200">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">...</svg>
        </a>
        <a href="#" aria-label="LinkedIn" className="text-text-soft hover:text-text-dark dark:hover:text-text-light transition-colors duration-200">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">...</svg>
        </a>
      </div>
    </div>
  </div>

  <hr className="my-8 border-border-light dark:border-border-dark" />

  {/* Copyright Section */}
  <div className="max-w-7xl mx-auto text-center text-sm text-text-soft">
    <p>&copy; {new Date().getFullYear()} Monitext. All rights reserved.</p>
  </div>
</footer>
    )
}