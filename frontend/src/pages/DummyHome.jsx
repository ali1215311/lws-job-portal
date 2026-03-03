import { Building2 } from "lucide-react";

const DummyHome = () => {
  return (
    <>
      <div className="grid gap-4 md:gap-6">
        <article className="card p-6 transition-shadow hover:shadow-md">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="shrink-0">
              <div className="bg-secondary flex h-16 w-16 items-center justify-center rounded-lg">
                <Building2 className="text-primary h-8 w-8" />
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    <a
                      href="job-seeker/job-details.html"
                      className="hover:underline"
                    >
                      Senior Full Stack Developer
                    </a>
                  </h3>
                  <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
                    <a
                      href="company-profile.html"
                      className="hover:text-primary font-medium"
                    >
                      TechCorp Solutions
                    </a>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <i data-lucide="map-pin" className="h-4 w-4"></i>
                      San Francisco, CA
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <i data-lucide="clock" className="h-4 w-4"></i>
                      Posted 2 days ago
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground line-clamp-2 text-sm">
                We're looking for an experienced Full Stack Developer to join
                our dynamic team. You'll be working on cutting-edge web
                applications using React, Node.js, and cloud technologies.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary">Full-time</span>
                <span className="badge badge-outline">Remote</span>
                <span className="badge badge-outline">React</span>
                <span className="badge badge-outline">Node.js</span>
                <span className="badge badge-outline">TypeScript</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-primary text-sm font-semibold">
                    $120k - $180k
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1 text-xs">
                    <i data-lucide="users" className="h-4 w-4"></i>
                    47 applicants
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="job-seeker/job-details.html"
                    className="btn btn-outline text-sm"
                  >
                    View Details
                  </a>
                  <button className="btn btn-primary text-sm">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="card p-6 transition-shadow hover:shadow-md">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="shrink-0">
              <div className="bg-secondary flex h-16 w-16 items-center justify-center rounded-lg">
                <i data-lucide="monitor" className="text-primary h-8 w-8"></i>
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    <a
                      href="job-seeker/job-details.html"
                      className="hover:underline"
                    >
                      UI/UX Designer
                    </a>
                  </h3>
                  <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
                    <a
                      href="company-profile.html"
                      className="hover:text-primary font-medium"
                    >
                      Design Studio Pro
                    </a>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      New York, NY
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Posted 5 days ago
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground line-clamp-2 text-sm">
                Join our creative team to design intuitive and beautiful user
                experiences for our suite of SaaS products. Experience with
                Figma and design systems required.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary">Full-time</span>
                <span className="badge badge-outline">Hybrid</span>
                <span className="badge badge-outline">Figma</span>
                <span className="badge badge-outline">Design Systems</span>
                <span className="badge badge-outline">Prototyping</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-primary text-sm font-semibold">
                    $90k - $130k
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1 text-xs">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    32 applicants
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="job-seeker/job-details.html"
                    className="btn btn-outline text-sm"
                  >
                    View Details
                  </a>
                  <button className="btn btn-primary text-sm">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="card p-6 transition-shadow hover:shadow-md">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="shrink-0">
              <div className="bg-secondary flex h-16 w-16 items-center justify-center rounded-lg">
                <svg
                  className="text-primary h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    <a
                      href="job-seeker/job-details.html"
                      className="hover:underline"
                    >
                      DevOps Engineer
                    </a>
                  </h3>
                  <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
                    <a
                      href="company-profile.html"
                      className="hover:text-primary font-medium"
                    >
                      CloudScale Inc
                    </a>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Austin, TX
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Posted 1 week ago
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground line-clamp-2 text-sm">
                Build and maintain our cloud infrastructure using AWS,
                Kubernetes, and Terraform. Help us scale our platform to serve
                millions of users worldwide.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary">Full-time</span>
                <span className="badge badge-outline">Remote</span>
                <span className="badge badge-outline">AWS</span>
                <span className="badge badge-outline">Kubernetes</span>
                <span className="badge badge-outline">Docker</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-primary text-sm font-semibold">
                    $130k - $170k
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1 text-xs">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    61 applicants
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="job-seeker/job-details.html"
                    className="btn btn-outline text-sm"
                  >
                    View Details
                  </a>
                  <button className="btn btn-primary text-sm">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="card p-6 transition-shadow hover:shadow-md">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="shrink-0">
              <div className="bg-secondary flex h-16 w-16 items-center justify-center rounded-lg">
                <svg
                  className="text-primary h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    <a
                      href="job-seeker/job-details.html"
                      className="hover:underline"
                    >
                      Frontend Developer (React)
                    </a>
                  </h3>
                  <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
                    <a
                      href="company-profile.html"
                      className="hover:text-primary font-medium"
                    >
                      Innovate Labs
                    </a>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Seattle, WA
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Posted 3 days ago
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground line-clamp-2 text-sm">
                We're seeking a talented Frontend Developer with strong React
                skills to build responsive and performant web applications.
                You'll work closely with designers and backend engineers.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary">Full-time</span>
                <span className="badge badge-outline">On-site</span>
                <span className="badge badge-outline">React</span>
                <span className="badge badge-outline">JavaScript</span>
                <span className="badge badge-outline">CSS</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-primary text-sm font-semibold">
                    $95k - $140k
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1 text-xs">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    28 applicants
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="job-seeker/job-details.html"
                    className="btn btn-outline text-sm"
                  >
                    View Details
                  </a>
                  <button className="btn btn-primary text-sm">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="card p-6 transition-shadow hover:shadow-md">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="shrink-0">
              <div className="bg-secondary flex h-16 w-16 items-center justify-center rounded-lg">
                <svg
                  className="text-primary h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    <a
                      href="job-seeker/job-details.html"
                      className="hover:underline"
                    >
                      Data Scientist
                    </a>
                  </h3>
                  <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
                    <a
                      href="company-profile.html"
                      className="hover:text-primary font-medium"
                    >
                      DataFlow Analytics
                    </a>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Boston, MA
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Posted 4 days ago
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground line-clamp-2 text-sm">
                Join our data science team to build predictive models and derive
                insights from large datasets. Strong experience with Python,
                machine learning, and statistical analysis required.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary">Full-time</span>
                <span className="badge badge-outline">Hybrid</span>
                <span className="badge badge-outline">Python</span>
                <span className="badge badge-outline">Machine Learning</span>
                <span className="badge badge-outline">SQL</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-primary text-sm font-semibold">
                    $110k - $160k
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1 text-xs">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    39 applicants
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="job-seeker/job-details.html"
                    className="btn btn-outline text-sm"
                  >
                    View Details
                  </a>
                  <button className="btn btn-primary text-sm">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="card hidden p-6" id="loading-skeleton">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="shrink-0">
              <div className="skeleton h-16 w-16"></div>
            </div>
            <div className="flex-1 space-y-3">
              <div className="space-y-2">
                <div className="skeleton h-6 w-2/3"></div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>
              <div className="skeleton h-4 w-full"></div>
              <div className="flex gap-2">
                <div className="skeleton h-6 w-20"></div>
                <div className="skeleton h-6 w-20"></div>
                <div className="skeleton h-6 w-20"></div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="skeleton h-4 w-32"></div>
                <div className="flex gap-2">
                  <div className="skeleton h-10 w-28"></div>
                  <div className="skeleton h-10 w-28"></div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
export default DummyHome;
