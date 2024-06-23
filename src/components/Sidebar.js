"use client";
import { RiShareBoxFill, RiDownload2Line } from "react-icons/ri";
import { GrPowerReset } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/app/context/QuizContext";

const Sidebar = () => {
  const { selectedAnswers, setSelectedAnswer } = useQuiz();
  const router = useRouter();
  const handleShare = () => {
    router.push("/questions/result/share");
  };
  const handleDownload = () => {
    // Download result
  };
  const handleRedo = () => {
    setSelectedAnswer([]);
    router.push("/");
  };
  return (
    <div className="flex flex-col gap-2 items-center w-fit">
      <div className="text-white p-2 bg-[#1890FF] rounded-md flex items-center gap-2 w-fit flex-col">
        <button
          onClick={handleShare}
          className="text-white [writing-mode:vertical-lr] transform rotate-180"
        >
          Chia sẻ
        </button>
        <RiShareBoxFill color="white" />
      </div>

      <div className="bg-white rounded-md w-full h-10 flex items-center justify-center">
        <button aria-label="Download Result">
          <RiDownload2Line color="#1890FF" />
        </button>
      </div>

      <div className="bg-white rounded-md w-full h-10 flex items-center justify-center">
        <button onClick={handleRedo} aria-label="Redo Quiz">
          <GrPowerReset color="#1890FF" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
