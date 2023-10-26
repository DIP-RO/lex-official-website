const MakeAppointment = () => {
  return (
    <div className="hero min-h-screen bg-[#1d344a] sm:hidden">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://i.ibb.co/QJCKyp0/image.png" className="max-w-lg rounded-lg shadow-2xl" />
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-white">Make an Appointment
          <br/>
            Today</h1>
          <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-neutral text-white">Appointment Here</button>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;