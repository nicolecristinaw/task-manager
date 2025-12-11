import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-pink-300 p-6">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-pink-400"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Task Details</Title>
        </div>

        <div className="bg-pink-400 p-4 rounded-md">
          <h2 className="text-xl font-bold text-pink-200">{title}</h2>
          <p className="text-pink-300">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;