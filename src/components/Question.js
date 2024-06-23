import { useQuiz } from "@/app/context/QuizContext";
import { GoDotFill } from "react-icons/go";

const Question = ({ title, options, id, numberOfQuestions }) => {
  const { selectedAnswers, setSelectedAnswer } = useQuiz();

  const handleOptionClick = (event) => {
    const value = JSON.parse(event.target.value);
    setSelectedAnswer((prev) => {
      const existingAnswerIndex = prev.findIndex(
        (item) => item.questionId === id
      );

      if (existingAnswerIndex !== -1) {
        const updatedAnswers = [...prev];
        updatedAnswers[existingAnswerIndex] = {
          questionId: id,
          answer: value,
        };
        return updatedAnswers;
      } else {
        return [...prev, { questionId: id, answer: value }];
      }
    });
  };

  return (
    <div>
      <div className="flex items-center gap-2 w-full justify-center">
        <GoDotFill color="#1890FF" />
        <span className="uppercase text-sm font-semibold text-gray-300">
          Câu hỏi {id} / {numberOfQuestions}
        </span>
      </div>
      <h1 className="text-lg text-center font-semibold">{title}</h1>
      <div className="flex flex-col gap-4 mt-4">
        {options.map((option) => (
          <button
            className={`border-2 p-2 rounded-md w-full text-center
            ${
              selectedAnswers.some(
                (answer) =>
                  answer.questionId === id && answer.answer.text === option.text
              )
                ? "text-[#1890FF] border-[#1890FF]"
                : "text-white"
            }
            `}
            key={option.id}
            onClick={handleOptionClick}
            value={JSON.stringify({ text: option.text, score: option.score })}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
