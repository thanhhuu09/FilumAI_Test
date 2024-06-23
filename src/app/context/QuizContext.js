const { createContext, useState, useContext } = require("react");

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [selectedAnswers, setSelectedAnswer] = useState([]);

  return (
    <QuizContext.Provider value={{ selectedAnswers, setSelectedAnswer }}>
      {children}
    </QuizContext.Provider>
  );
};
