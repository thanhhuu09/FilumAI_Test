"use client";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";
const Guide = () => {
  const router = useRouter();
  const handleStart = () => {
    router.push("/questions");
  };
  return (
    <div className="container mx-auto p-4 text-white flex gap-7 flex-col mt-10">
      <h1 className="text-sm font-semibold text-gray-400 uppercase mb-4 text-center">
        ĐÁNH GIÁ MỨC ĐỘ TRƯỞNG THÀNH <br />
        VỀ QUẢN TRỊ TRẢI NGHIỆM KHÁCH HÀNG
      </h1>
      <div className="rounded-md p-4 w-full bg-[#395273]">
        <div className="flex items-center gap-2 w-full justify-center">
          <GoDotFill color="#1890FF" />
          <span className="uppercase text-sm font-semibold text-gray-300">
            Hướng dẫn trả lời
          </span>
        </div>
        <div className="p-2 flex flex-col gap-6">
          <p className="text-lg text-justify font-semibold">
            Hãy dựa vào hướng dẫn sau đây để trả lời các câu hỏi:
          </p>
          <ul className="list-disc pl-7 text-balance text-base text-gray-300">
            <li>
              Chọn "Có": nếu câu đó phản ánh hiện trạng đang có VÀ được thực
              hiện một cách nhất quán (ít nhất 80% thời gian)
            </li>
            <li>Chọn “Không có": nếu hoàn toàn chưa từng thực hiện</li>
            <li>
              Chọn “Không rõ về vấn đề này": nếu không chắc chắn đã thực hiện
              hay chưa
            </li>
          </ul>
          <div className="flex items-center justify-center gap-2 bg-blue-600 p-2 rounded-md cursor-pointer w-full hover:bg-blue-700">
            <button type="submit" onClick={handleStart}>
              Bắt đầu
            </button>
            <IoIosArrowRoundForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
