import { SectionLayout } from "@components/layout/Section";
import { Accordion } from "@components/shared";
import { FC } from "react";

const questions = [
  {
    title: "Which framework do you prefer for front-end?",
    answer: "I prefer using React.JS and Next.JS.",
  },
  {
    title: "Which programming language do you prefer for back-end?",
    answer: "I used to use Node.JS but I am using Go at the moment.",
  },
];

export type HomeQuestionSectionProps = {
  className?: string;
};

export const HomeQuestionSection: FC<HomeQuestionSectionProps> = ({
  className,
}) => {
  return (
    <SectionLayout title="Questions" id="questions" className={className}>
      <div className="flex max-w-2xl flex-col justify-center">
        {questions.map(({ title, answer }, index) => (
          <Accordion key={index} title={title}>
            {answer}
          </Accordion>
        ))}
      </div>
    </SectionLayout>
  );
};
