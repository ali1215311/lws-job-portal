import { Briefcase } from "lucide-react";
import NavLinks from "./NavLinks";
import RecruiterHeaderLinks from "./RecruiterHeaderLinks";
const Header = () => {
  return (
    <>
      <header className="bg-background/95 supports-backdrop-filter:bg-background/60 border-border sticky top-0 z-50 w-full border-b backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="index.html" className="flex items-center space-x-2">
              <Briefcase className="text-primary h-8 w-8" />
              <span className="text-xl font-bold">LWS Job Portal</span>
              <NavLinks />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <RecruiterHeaderLinks />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
