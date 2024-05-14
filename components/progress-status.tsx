import { Progress } from "@/components/ui/progress";

export interface ProgressStatusProps {
  totalWords: number;
  masteredWords: number;
  reviewingWords: number;
  learningWords: number;
}

export default function ProgressStatus(params: Readonly<ProgressStatusProps>) {
  const { totalWords, masteredWords, reviewingWords, learningWords } = params;

  const masteredPercentage = (masteredWords / totalWords) * 100;
  const reviewingPercentage = (reviewingWords / totalWords) * 100;
  const learningPercentage = (learningWords / totalWords) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium">
        <span className="text-black">
          You have mastered {masteredWords} out of {totalWords} words
        </span>
        <span className="text-black">{masteredPercentage}%</span>
      </div>
      <Progress
        className="w-full bg-[#dddddd]"
        value={masteredPercentage}
        indicatorColor="bg-gradient-to-r from-slate-500 to-black"
      />
      <div className="flex justify-between text-sm font-medium">
        <span className="text-black">
          You are reviewing {reviewingWords} out of {totalWords} words
        </span>
        <span className="text-black">{reviewingPercentage}%</span>
      </div>
      <Progress
        className="w-full bg-[#dddddd]"
        value={reviewingPercentage}
        indicatorColor="bg-gradient-to-r from-slate-500 to-black"
      />
      <div className="flex justify-between text-sm font-medium">
        <span className="text-black">
          You are learning {learningWords} out of {totalWords} words
        </span>
        <span className="text-black">{learningPercentage}%</span>
      </div>
      <Progress
        className="w-full bg-[#dddddd]"
        value={learningPercentage}
        indicatorColor="bg-gradient-to-r from-slate-500 to-black"
      />
    </div>
  );
}
