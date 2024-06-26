import PrimaryButton from "../SharedComponents/PrimaryButton";
import JobCard from "../JobListing/JobCard";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import checkIsMobile from "../../utils/checkIsMobile";
import JobListingCard from "../JobListing/JobListingCard";
function FeaturedJobs({ jobs, sectionId }) {
    const isMobile = checkIsMobile();
    const maxCount = isMobile ? 12 : 9;
    return (
        <div
            className="px-4 lg:px-8 max-w-7xl m-auto my-16 md:my-36"
            id={sectionId}
        >
            <div className="flex gap-5 justify-between">
                <div className="space-y-2 sm:space-y-4 max-w-2xl">
                    <h3 className="text-center sm:text-left font-medium text-lg text-[color:var(--primary-color)]">
                        10K+ Jobs Available
                    </h3>
                    <h2 className="text-center sm:text-left font-medium text-3xl md:text-4xl lg:text-5xl">
                        Find Your Career You Love on{" "}
                        <span className="text-[color:var(--primary-color)]">
                            {" "}
                            Direct Jobs
                        </span>
                    </h2>
                </div>
                <div className="sm:flex justify-between items-center whitespace-nowrap hidden">
                    <PrimaryButton to={"/jobs"} className={"py-4"}>
                        Browse All Jobs
                    </PrimaryButton>
                </div>
            </div>
            <div className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {jobs
                        ?.sort(() => Math.random() - 0.5)
                        .slice(0, maxCount)
                        .map((job) => (
                            <div key={job.post_id} className="flex items-center w-full">
                                <JobListingCard job={job} />
                            </div>
                        ))}
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <Link to={"/jobs"}>
                    <button className="">
                        Explore 10K+ Jobs
                        <i className="fa-solid fa-angles-right animate-bounce-right ml-2"></i>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default FeaturedJobs;

FeaturedJobs.propTypes = {
    jobs: PropTypes.array,
    sectionId: PropTypes.string,
};
