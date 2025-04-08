export default function Create({ mutationAdd, onCreateTodo, setTitle, title }) {
  return (
    <div className="flex justify-center items-center mb-24">
      <form className="w-full" onSubmit={onCreateTodo}>
        <div className="flex flex-col lg:flex-row items-center text-xxl border-b border-indigo-200 py-4 lg:py-2">
          {mutationAdd.error && (
            <h5
              onClick={() => mutationAdd.reset()}
              className="text-red-500 text-lg mb-4 lg:mb-0"
            >
              {mutationAdd.error.message}
            </h5>
          )}

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a new todo"
            className="appearance-none bg-transparent border border-gray-300 lg:border-none lg:focus:ring-0 lg:focus:outline-none w-full text-xl lg:text-lg text-gray-300 py-4 lg:py-1 px-6 lg:px-2 leading-tight rounded-lg lg:rounded-none mb-4 lg:mb-0 lg:mr-3"
          />
          <button
            className="w-full lg:w-auto bg-indigo-100 hover:bg-indigo-200 text-xl lg:text-sm text-indigo-800 py-6 lg:py-1 px-6 lg:px-6 lg:py-2 cursor-pointer rounded-lg lg:rounded"
            type="submit"
            disabled={mutationAdd.isLoading}
          >
            {mutationAdd.isLoading ? "Adding..." : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}
