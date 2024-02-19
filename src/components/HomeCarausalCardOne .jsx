export const HomeCarausalCardOne = ({ imgUrl, heading }) => {
    return (
      <div className="md:min-w-[300px] min-w[100px] min-h-[100px] cursor-pointer md:m-5 ml-3 relative">
        <div className="absolute w-full h-[86%] hover:bg-black bg-transparent hover:opacity-15 "></div>
        <img
          src={imgUrl}
          alt=""
          className="rounded-lg md:min-h-[300px] md:min-w-[300px] min-h-44 min-w-44  object-cover"
        />
        <p className="md:text-xl md:mt-4 mt-2 font-semibold text-center text-gray-500">
          {heading}
        </p>
      </div>
    );
  };