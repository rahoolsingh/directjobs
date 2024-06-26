import proptypes from "prop-types";
import { Link } from "react-router-dom";

function CategoryCard({ name, image, total_jobs, cat_id }) {
    return (
        <Link to={`/jobs?cat=${cat_id}`} className="flex gap-2 w-full h-full group p-3 sm:py-4 rounded-lg m-auto hover:drop-shadow-lg drop-shadow bg-white transition-all ease-linear items-center">
            <img
                className="h-12 w-12 sm:h-14 sm:w-14 aspect-square object-contain rounded-md p-1"
                src={image}
                alt=""
            />

            <div className="w-full text-left text-ellipsis overflow-hidden text-wrap">
                <h3 className="text-sm font-semibold text-black text-wrap line-clamp-2">
                    {name}
                </h3>
                <p className="text-xs text-gray-600">
                    {Boolean(total_jobs) && (
                        <span>
                            {total_jobs > 1
                                ? `${total_jobs} Jobs Available`
                                : `${total_jobs} Job Available`}
                        </span>
                    )}

                    {Boolean(!total_jobs) && <span>Jobs Posting Soon</span>}
                </p>
            </div>
        </Link>
    );
}

export default CategoryCard;

CategoryCard.propTypes = {
    name: proptypes.string.isRequired,
    image: proptypes.string.isRequired,
    total_jobs: proptypes.number.isRequired,
    cat_id: proptypes.number,
};
