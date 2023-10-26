
import AvaiableLawyer from "./AvaiableLawyer/AvaiableLawyer";
import { format } from 'date-fns';
import { useState } from "react";

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



const Appointment = () => {

    const [selected, setSelected] = useState(new Date());


    return (
        <div className="flex flex-col w-full  items-center my-10 min-h-screen">
            <div className="bg-[#1c5168] w-1/2 flex flex-col justify-center h-20 shrink-0 items-center rounded-[35px]">
                <div className="text-6xl  font-['Poppins'] font-semibold leading-[32px] text-white">
                    TAKE APPOINTMENT
                </div>
            </div>
            <div className="text-3xl mt-10 font-['Poppins'] font-semibold leading-[32px] text-white">
                Online Now
            </div>
            <AvaiableLawyer></AvaiableLawyer>
            <div className=" bg-white rounded-lg">
                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}

                    className="p-5"
                />
            </div>
            <h1 className="text-lg font-bold mt-5 text-white">Avaiable Lawyer on {format(selected, 'PP')}.</h1>
            <AvaiableLawyer></AvaiableLawyer>

            <div className="text-3xl font-['Poppins'] font-semibold leading-[32px] text-white">
                Find your Lawyer
            </div>
            <input className="w-1/2 h-10 rounded-[35px] mt-5 px-5" type="url" placeholder="Search" />
            <AvaiableLawyer></AvaiableLawyer>
        </div>
    );
};

export default Appointment;