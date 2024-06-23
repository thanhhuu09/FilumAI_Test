// HomePage component
"use client";
import { useRouter } from "next/navigation";
import { IoIosRocket } from "react-icons/io";

const HomePage = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push("/questions/guide");
  };
  return (
    <div>
      <div className="container mx-auto p-4 text-white text-center flex gap-7 flex-col mt-10">
        <h1 className="text-sm font-semibold text-gray-400 uppercase mb-4">
          ĐÁNH GIÁ MỨC ĐỘ TRƯỞNG THÀNH <br />
          VỀ QUẢN TRỊ TRẢI NGHIỆM KHÁCH HÀNG
        </h1>
        <h2 className="text-4xl font-bold leading-snug">
          Công ty bạn trưởng thành như thế nào trong việc lắng nghe khách hàng?
        </h2>
        <p className="text-sm font-semibold text-gray-400">
          Đánh giá khả năng của bạn trong việc lắng nghe, <br /> hiểu và đáp ứng
          các tín hiệu từ khách hàng.
        </p>
        <input
          className="p-2  w-full bg-gray-200 rounded-md text-black border-none focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="text"
          placeholder="Địa chỉ email của bạn"
        />
        <div className="flex items-center justify-center gap-2 bg-blue-600 p-2 rounded-md cursor-pointer w-full hover:bg-blue-700">
          <button type="submit" onClick={handleStart}>
            Bắt đầu
          </button>
          <IoIosRocket color="white" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
