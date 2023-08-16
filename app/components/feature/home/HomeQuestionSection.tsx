"use client";

import { FC } from "react";
import { SectionLayout } from "../../layout";
import { Accordion } from "../../shared";

const questions = [
    {
        title: "Which framework do you prefer for front-end?",
        answer: "I prefer using React.JS and Next.JS.",
    },
    {
        title: "Which programming language do you prefer for back-end?",
        answer: "If I wouldn't use Golang, I definitely say Node.JS but I prefer to use Golang. Because Golang is more powerful and faster.",
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
            <div className="flex flex-col justify-center max-w-2xl">
                {questions.map(({ title, answer }, index) => (
                    <Accordion key={index} title={title}>
                        {answer}
                    </Accordion>
                ))}
            </div>
        </SectionLayout>
    );
};
