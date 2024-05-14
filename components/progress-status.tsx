import { Progress } from "@/components/ui/progress";

export default function ProgressStatus() {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium">
        <span className="text-black">You have mastered 11 out of 51 words</span>
        <span className="text-black">22%</span>
      </div>
      <Progress
        className="w-full bg-[#dddddd]"
        value={22}
        indicatorColor="bg-gradient-to-r from-slate-500 to-black"
      />
      <div className="flex justify-between text-sm font-medium">
        <span className="text-black">You are reviewing 40 out of 51 words</span>
        <span className="text-black">78%</span>
      </div>
      <Progress
        className="w-full bg-[#dddddd]"
        value={78}
        indicatorColor="bg-gradient-to-r from-slate-500 to-black"
      />
      <div className="flex justify-between text-sm font-medium">
        <span className="text-black">You are learning 0 out of 51 words</span>
        <span className="text-black">0%</span>
      </div>
      <Progress
        className="w-full bg-[#dddddd]"
        value={0}
        indicatorColor="bg-gradient-to-r from-slate-500 to-black"
      />
    </div>
  );
}
