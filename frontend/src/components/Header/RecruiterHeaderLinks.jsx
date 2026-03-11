import { Building2, Plus } from "lucide-react";

const RecruiterHeaderLinks = () => {
  return (
    <>
      <a href="#" className="btn btn-primary">
        <Plus className="mr-2 h-4 w-4" />
        Post Job
      </a>

      <div className="flex items-center gap-2">
        <div className="bg-secondary flex h-8 w-8 items-center justify-center rounded-full">
          <Building2 className="text-primary h-4 w-4" />
        </div>
        <span className="hidden text-sm font-medium md:inline">
          TechCorp Solutions
        </span>
      </div>
    </>
  );
};
export default RecruiterHeaderLinks;
