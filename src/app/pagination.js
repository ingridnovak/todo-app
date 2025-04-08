export default function Pagination({ currentPage, handlePageChange }) {
  return (
    <div className="flex justify-center gap-2 mt-16 mb-24">
      {Array.from({ length: 20 }, (_, index) => {
        const page = index + 1;
        if (
          page === 1 ||
          page === 10 ||
          (page >= currentPage - 1 && page <= currentPage + 1)
        ) {
          return (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded cursor-pointer ${
                currentPage === index + 1
                  ? "bg-transparent border border-white text-white"
                  : "bg-transparent"
              }`}
            >
              {page}
            </button>
          );
        }
        if (
          (page === currentPage - 2 && page > 1) ||
          (page === currentPage + 2 && page < 10)
        ) {
          return (
            <span key={index + 1} className="px-4 py-2">
              ...
            </span>
          );
        }
        return null;
      })}
    </div>
  );
}
