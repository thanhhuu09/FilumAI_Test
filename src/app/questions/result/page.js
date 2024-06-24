import Result from "@/components/Result";
import Sidebar from "@/components/Sidebar";

export async function generateMetadata({ params, searchParams }) {
  const level = searchParams?.level;
  return {
    title: "Result",
    description: " Result page for the survey app",
    openGraph: {
      url: `https://filum-ai-test.vercel.app/questions/result?level=${level}`,
      title: "Result",
      description: "Result for the survey app",
      image: `thumbnails/level_${level}.png`,
      type: "website",
      site_name: "Survey App",
    },
  };
}
export default function ResultPage() {
  return (
    <div>
      <div className="container mx-auto p-4 text-white flex gap-7 flex-col mt-10">
        <h1 className="text-sm font-semibold text-gray-400 uppercase mb-4 text-center">
          ĐÁNH GIÁ MỨC ĐỘ TRƯỞNG THÀNH <br />
          VỀ QUẢN TRỊ TRẢI NGHIỆM KHÁCH HÀNG
        </h1>
        <div className="rounded-md p-4 w-full bg-[#395273]">
          <Result />
        </div>
        <div className="absolute inset-0 flex justify-end items-center">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
