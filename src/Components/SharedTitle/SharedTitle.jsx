/* eslint-disable react/prop-types */


const SharedTitle = ({heading, subHeading}) => {
  return (
    <div className="mb-10">
      <div className="text-center">
        <p className="text-[#7FD8BE]">{subHeading}</p>
        <p className="border-b-4 border-gray-300 mt-2 mb-2 max-w-sm mx-auto"></p>
        <h1 className="text-3xl">{heading}</h1>
        <p className="border-b-4 border-gray-300 mt-2 mb-2 max-w-sm mx-auto"></p>
      </div>
    </div>
  );
};

export default SharedTitle;
