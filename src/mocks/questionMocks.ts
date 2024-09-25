export type QuestionType = {
  question:string,
  options: string[],
  correctAnswer:string
}
export const questionsQuizMath: QuestionType[] = [
    {
      question: "2+2",
      options: ["4", "1", "5", "22"],
      correctAnswer: "4",
    },
    {
      question: "2*2",
      options: ["0", "10", "4", "200"],
      correctAnswer: "4",
    },
    {
      question: "2/2",
      options: ["4", "1", "5", "0"],
      correctAnswer: "1",
    },
  ];
  


  export const questionsQuizGeography: QuestionType[] = [
    {
      question: "What is the capital of Italy?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Rome",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Jupiter", "Saturn", "Earth"],
      correctAnswer: "Jupiter",
    },
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris",
    },
  ];