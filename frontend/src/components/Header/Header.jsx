import { Briefcase } from "lucide-react";
const Header = () => {
  return (
    <>
      <header className="bg-background/95 supports-backdrop-filter:bg-background/60 border-border sticky top-0 z-50 w-full border-b backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="index.html" className="flex items-center space-x-2">
              <Briefcase className="text-primary h-8 w-8" />
              <span className="text-xl font-bold">LWS Job Portal</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="login.html" className="btn btn-ghost text-sm">
              Sign In
            </a>
            <a href="register-company.html" className="btn btn-primary text-sm">
              Post a Job
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
