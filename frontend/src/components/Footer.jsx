const Footer = () => {
  return (
    <>
      <footer className="border-border bg-muted/30 mt-16 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-semibold">LWS Job Portal</h3>
              <p className="text-muted-foreground text-sm">
                Your trusted platform for finding the perfect job or the perfect
                candidate.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">For Job Seekers</h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Companies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Career Advice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Salary Guide
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">For Employers</h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Browse Candidates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Hiring Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Company</h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-border text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
            <p>&copy; 2025 LWS Job Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
