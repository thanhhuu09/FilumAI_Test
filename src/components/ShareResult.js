"use client";
import { useQuiz } from "@/app/context/QuizContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
const ShareResult = () => {
  const router = useRouter();
  const { resultLink } = useQuiz();
  const [isCopied, setIsCopied] = useState(false);
  const handleShareFacebook = () => {
    // Share to Facebook
    const shareUrl = encodeURIComponent(resultLink);
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    window.open(facebookURL, "_blank");
  };
  const handleShareEmail = () => {
    // Share to Email
  };
  const handleCopyLink = () => {
    navigator.clipboard.writeText(resultLink);
    setIsCopied(true);
  };
  const handleCancel = () => {
    router.back();
  };
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-4 w-full max-w-[500px]">
      <h1 className="text-black text-lg font-medium text-center">
        Chia sẻ kết quả
      </h1>
      <p className="text-gray-700 text-left">
        Đây là một số cách bạn có thể chia sẻ với bạn bè và đồng nghiệp của
        mình.
      </p>
      <button
        onClick={handleShareFacebook}
        className="bg-blue-500 text-white p-2 rounded-md mt-2"
      >
        Chia sẻ qua Facebook
      </button>
      <button className="bg-blue-100 text-blue-600 p-2 rounded-md mt-2">
        Chia sẻ qua Email
      </button>
      <button
        onClick={handleCopyLink}
        className="bg-blue-100 text-blue-600 p-2 rounded-md mt-2"
      >
        {isCopied ? "Đã sao chép" : "Sao chép đường dẫn đến trang kết quả"}
      </button>
      <button
        className="bg-blue-100 text-blue-600 p-2 rounded-md mt-2"
        onClick={handleCancel}
      >
        Hủy
      </button>
    </div>
  );
};

export default ShareResult;
