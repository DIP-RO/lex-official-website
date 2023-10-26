import Question from "../../Component/Question/Question";
import ContactModal from "./ContactModal/ContactModal";

const Contact = () => {
    return (
        <div className="flex flex-col items-center">
            <Question></Question>


            <div className="bg-[rgba(200,102,102,0.22)] my-10 w-3/4 flex flex-col justify-center items-center gap-6 h-[343px] shrink-0   py-8 rounded-[24px]">
                <div className="text-6xl font-['Poppins'] font-semibold text-white">
                    For emergency support
                </div>
                <button className="bg-[rgba(222,_84,_84,_0.52)] hover:bg-[rgba(222,_84,_84,_0.52)] w-fit flex flex-col btn  items-center px-32 py-1 rounded-[32px]">
                    <button className="text-3xl  font-['Poppins'] font-bold text-white" onClick = {()=> document.getElementById('ContactModal').showModal()}>
                        Click Here
                    </button>
                </button>
            </div>
            <div className="text-6xl font-['Poppins'] font-bold text-white my-10">
                Lex Hotline NO: 017XXXXXXX
            </div>
           <ContactModal></ContactModal>

        </div>
    );
};

export default Contact;