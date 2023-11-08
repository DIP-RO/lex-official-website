import Loading from "../Loading/Loading";

const Stats = () => {
  const stats = [
    {
      icon: "https://i.ibb.co/D5yhnSP/image.png",
      title: "Cases Solved",
      value: "1400 +",
    },
    {
      icon: "https://i.ibb.co/D5yhnSP/image.png",
      title: "Cases Solved",
      value: "1400 +",
    },
    {
      icon: "https://i.ibb.co/D5yhnSP/image.png",
      title: "Cases Solved",
      value: "1400 +",
    },
    {
      icon: "https://i.ibb.co/D5yhnSP/image.png",
      title: "Cases Solved",
      value: "1400 +",
    },
  ];
  <Loading/>
  return (
    <div className="  justify-center sm:hidden   ">
      <div className="grid md:hidden lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-14 m-10 bg-[#1d344a] rounded-[50px] px-24">
        {stats.map((data, index) => (
            <div key={index} className="stat">
            <img src={data.icon} alt="" className="w-25 h-25" />
            <div className="text-lg font-sans font-semibold text-white">{data.title}</div>
            <div className="stat-value text-orange-400">{data.value}</div>
          </div>
        ))}
      </div>



    </div>
  );
};

export default Stats;