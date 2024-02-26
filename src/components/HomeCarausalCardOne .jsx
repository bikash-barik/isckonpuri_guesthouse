export const HomeCarausalCardOne = ({ imgUrl, heading }) => {
    return (
      <div className="flex flex-col items-center justify-center cursor-pointer md:m-5 ml-3">
        <div className="w-full flex flex-col items-center justify-center hover:bg-black bg-transparent hover:opacity-15 "></div>
        <img
          src={imgUrl}
          alt=""
          className="rounded-lg h-[300px] w-[300px] object-cover"
        />
        <p className="md:text-xl md:mt-4 mt-2 font-semibold text-center text-gray-500">
          {heading}
        </p>
      </div>
    );
  };