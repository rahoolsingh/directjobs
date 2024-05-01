function Loader() {
    return (
        <div>
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-gray-300 h-12 w-12"></div>
                <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CategoriesLoader() {
    return (
        <div className="animate-pulse border px-2.5 py-4 rounded-md shadow">
            <div className="flex space-x-4 ">
                <div className="rounded-md bg-gray-300 h-12 w-12"></div>
                <div className="flex-1 space-y-2 py-1">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="">
                        <div className="h-4 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function LocationCardLoader() {
    return (
        <div>
            <div className="animate-pulse">
                <div className="rounded-md bg-gray-300 h-48 w-full"></div>
                <div className="space-y-4 py-1">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { CategoriesLoader, LocationCardLoader };
export default Loader;
