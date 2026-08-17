"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { HiCheckCircle, HiArrowLeft, HiArrowRight, HiX, HiZoomIn } from "react-icons/hi";
import ProjectPageShell from "@/components/projects/ProjectPageShell";
import { findProject } from "@/lib/resume/data";

const PROJECT_TITLE = "Personalized Japanese Learning System (FU OHAYO)";

interface Screenshot {
  title: string;
  url: string;
}

interface FeatureSection {
  id: string;
  name: string;
  description: string;
  bullets: string[];
  images: Screenshot[];
}

const clientFeatures: FeatureSection[] = [
  {
    id: "login",
    name: "🔑 Login & Register Page",
    description: "Hệ thống hỗ trợ tạo tài khoản, đăng nhập phân quyền cho học viên (Normal/VIP), phụ huynh và quản trị viên.",
    bullets: [
      "Xác thực bằng JWT (JSON Web Tokens) an toàn bảo mật.",
      "Phân luồng màn hình trực quan sau đăng nhập tùy theo phân quyền tài khoản.",
      "Giao diện hiện đại, tối giản, thân thiện với người dùng.",
    ],
    images: [
      { title: "Màn hình Đăng nhập", url: "https://github.com/user-attachments/assets/e9d5ddc3-8cc3-4278-895c-f24d4c6cff32" },
      { title: "Màn hình Đăng ký", url: "https://github.com/user-attachments/assets/61f84a5a-5675-42ed-a9f2-d784ab83285e" },
      { title: "Màn hình Quên mật khẩu", url: "https://github.com/user-attachments/assets/f2fe30fa-dfe5-43db-ac57-b908e85c2d9f" },
    ],
  },
  {
    id: "home",
    name: "🏠 Home & Parent Page",
    description: "Nơi học viên theo dõi tiến trình hàng ngày và phụ huynh giám sát kết quả học tập của con em.",
    bullets: [
      "Theo dõi Study Streak (chuỗi ngày học liên tục) và tiến độ khóa học trực quan.",
      "Phụ huynh có thể xem thống kê thời gian học, điểm số các bài test và tỷ lệ hoàn thành lộ trình của con.",
      "Tích hợp cổng thanh toán VNPay để phụ huynh nâng cấp VIP cho tài khoản học viên nhanh chóng.",
    ],
    images: [
      { title: "Trang chủ học viên", url: "https://github.com/user-attachments/assets/32ddcd46-e5e5-4c58-bb80-731616c5bf59" },
      { title: "Dashboard tiến trình học tập", url: "https://github.com/user-attachments/assets/72f93751-3de9-4322-9c03-cb131c86a357" },
      { title: "Giao diện liên kết Phụ huynh", url: "https://github.com/user-attachments/assets/09bca830-3a39-4106-9246-3c6f2aacbeb9" },
      { title: "Thống kê tiến độ cho Phụ huynh", url: "https://github.com/user-attachments/assets/75b9518e-6afb-488a-8a63-00683354487a" },
      { title: "Xem kết quả bài kiểm tra", url: "https://github.com/user-attachments/assets/99f3c05b-4064-4bb1-9b4f-62be2b2f48dc" },
      { title: "Nâng cấp tài khoản VIP", url: "https://github.com/user-attachments/assets/40c7870a-7c3b-4ba9-a210-f02c81785737" },
    ],
  },
  {
    id: "learning",
    name: "📚 Course Learning Pages",
    description: "Lộ trình học tập cá nhân hóa theo các cấp độ JLPT từ N5 đến N1.",
    bullets: [
      "Học từ vựng, ngữ pháp lồng ghép bài tập tương tác tức thời.",
      "Nội dung học đa phương tiện bao gồm cả âm thanh phát âm và hình ảnh minh họa.",
      "Hỗ trợ ghi chú nhanh và đánh dấu từ vựng quan trọng vào danh sách ôn tập.",
    ],
    images: [
      { title: "Lộ trình học JLPT N5-N1", url: "https://github.com/user-attachments/assets/5ddaa919-c1d8-4ff8-9cee-4e56881a620e" },
      { title: "Bài học Ngữ pháp", url: "https://github.com/user-attachments/assets/2ed2db24-6e18-40b3-990a-a05030e8c0a5" },
      { title: "Bài học Từ vựng", url: "https://github.com/user-attachments/assets/339abd1a-c282-4333-88e0-56e149f80917" },
      { title: "Chi tiết từ vựng & chữ Hán", url: "https://github.com/user-attachments/assets/b293ce8f-cec3-45ee-ad05-4e4d7a7f8c10" },
      { title: "Luyện nghe bài học", url: "https://github.com/user-attachments/assets/d611377a-85ce-47d4-960d-8f7d636a188e" },
      { title: "Luyện đọc bài học", url: "https://github.com/user-attachments/assets/a88636d3-8054-4c4a-80b4-08bc4f5543da" },
      { title: "Danh sách bài tập", url: "https://github.com/user-attachments/assets/f8e97ce0-99cc-4270-87d4-cf8edd176067" },
      { title: "Làm bài tập trắc nghiệm", url: "https://github.com/user-attachments/assets/3b8a55ae-c8f8-4f12-98f2-3b63ca0c9b44" },
      { title: "Hoàn thành bài học", url: "https://github.com/user-attachments/assets/b556627d-29c3-48d9-83a4-b3cdd5f294fb" },
    ],
  },
  {
    id: "mylist",
    name: "🧠 My List & AI Quizzes",
    description: "Lưu trữ từ vựng cá nhân và tự động tạo đề kiểm tra bằng trí tuệ nhân tạo (Gemini AI).",
    bullets: [
      "Quản lý sổ từ vựng cá nhân (My List).",
      "Học qua Flashcard tương tác 2 mặt hỗ trợ ghi nhớ từ vựng nhanh.",
      "Tích hợp Gemini AI để tạo đề thi trắc nghiệm riêng dựa trên chính danh sách từ vựng đã lưu để củng cố bộ nhớ.",
    ],
    images: [
      { title: "Sổ từ vựng cá nhân", url: "https://github.com/user-attachments/assets/20903f2d-58a2-4fe9-ba85-8fe31139984b" },
      { title: "Học với Flashcards", url: "https://github.com/user-attachments/assets/06c6176f-1194-49c0-8e14-a27a68f2d644" },
      { title: "Cấu hình sinh đề thi AI", url: "https://github.com/user-attachments/assets/4771f8e5-3308-4c48-9ddb-31c98f0906a1" },
      { title: "Đề trắc nghiệm sinh ra bởi Gemini AI", url: "https://github.com/user-attachments/assets/5746e16d-48f7-4dc5-a91e-90321670c7ff" },
    ],
  },
  {
    id: "practice_reading",
    name: "📖 Practice Reading",
    description: "Luyện kỹ năng đọc hiểu văn bản tiếng Nhật theo nhiều chủ đề với giải nghĩa từ vựng nhanh.",
    bullets: [
      "Hiển thị văn bản tiếng Nhật đi kèm chế độ Furigana (chữ kana trên đầu chữ Hán).",
      "Tích hợp từ điển giải nghĩa nhanh khi nhấp chọn từ vựng khó ngay trong văn bản.",
      "Có bài tập đọc hiểu kiểm tra tính hiệu quả sau khi đọc.",
    ],
    images: [
      { title: "Đọc hiểu văn bản", url: "https://github.com/user-attachments/assets/8591b3db-7fee-4de0-8ccf-af0ab01b950f" },
      { title: "Từ điển giải nghĩa tích hợp trong bài đọc", url: "https://github.com/user-attachments/assets/794f839d-d6fd-495e-90b6-6b0430fdf811" },
    ],
  },
  {
    id: "practice_listening",
    name: "🎧 Practice Listening",
    description: "Công cụ luyện nghe video/audio đi kèm transcript chạy thời gian thực và bài tập.",
    bullets: [
      "Bộ phát âm thanh với transcript tiếng Nhật chạy khớp thời gian thực.",
      "Bài tập nghe và điền từ vào chỗ trống tiện lợi.",
      "Giải thích cấu trúc ngữ pháp khó xuất hiện trong bài nghe.",
    ],
    images: [
      { title: "Luyện nghe nghe - điền từ", url: "https://github.com/user-attachments/assets/f876bc42-99da-4cb0-b3a6-b1dcd40d9723" },
      { title: "Luyện nghe trắc nghiệm", url: "https://github.com/user-attachments/assets/ba200ee3-84ed-4b7d-94c4-c4bb8865c429" },
      { title: "Giải thích câu hỏi nghe", url: "https://github.com/user-attachments/assets/21f908d7-bf41-462c-8fb7-d0945605f026" },
    ],
  },
  {
    id: "practice_speaking",
    name: "🎙️ Practice Speaking with AI",
    description: "Ghi âm giọng nói và nhận đánh giá phát âm chi tiết bằng trí tuệ nhân tạo.",
    bullets: [
      "Ghi âm giọng đọc trực tiếp trên trình duyệt.",
      "Chấm điểm phát âm chi tiết (Accuracy, Fluency, Completeness) qua Azure Speech API.",
      "VIP học viên có thể luyện hội thoại trực tiếp với AI Chatbot thông qua văn bản hoặc giọng nói.",
    ],
    images: [
      { title: "Luyện phát âm câu nói", url: "https://github.com/user-attachments/assets/e50635f8-641f-4e92-b3ce-6fb97207b987" },
      { title: "AI chấm điểm chi tiết (Azure Speech)", url: "https://github.com/user-attachments/assets/0d9977d9-17ec-493d-aa53-891d8129ed1e" },
    ],
  },
  {
    id: "profile",
    name: "👤 Profile & Update Account",
    description: "Quản lý thông tin học tập cá nhân, bảng xếp hạng và thực hiện nâng cấp VIP.",
    bullets: [
      "Xem bảng xếp hạng học viên (Leaderboard) thúc đẩy động lực thi đua học tập.",
      "Thống kê chi tiết lịch sử học tập, đổi mật khẩu và cập nhật thông tin cá nhân.",
      "Quản lý thông báo hệ thống và xem lịch sử nâng cấp tài khoản.",
    ],
    images: [
      { title: "Thông tin cá nhân", url: "https://github.com/user-attachments/assets/d80b439a-eea9-49e2-85df-145faa631274" },
      { title: "Bảng xếp hạng (Leaderboard)", url: "https://github.com/user-attachments/assets/fc358be6-8e39-410a-a8ba-b56ccb24f634" },
      { title: "Lịch sử học tập chi tiết", url: "https://github.com/user-attachments/assets/fed29bc3-8631-4252-9fc3-743b9faa3c1d" },
      { title: "Đổi mật khẩu", url: "https://github.com/user-attachments/assets/50b42562-481f-4756-80c5-c312b2e6089f" },
      { title: "Thông báo hệ thống", url: "https://github.com/user-attachments/assets/7da031fe-c2ee-4181-b8bd-5f93b99f886a" },
      { title: "Trạng thái tài khoản và thông tin VIP", url: "https://github.com/user-attachments/assets/45eda2fe-d57f-4aef-a1e3-c34c6b62c1da" },
    ],
  },
];

const adminFeatures: FeatureSection[] = [
  {
    id: "dashboard",
    name: "📊 Admin Dashboard",
    description: "Trang chủ Admin hiển thị báo cáo phân tích tổng quan dữ liệu toàn hệ thống.",
    bullets: [
      "Thống kê số lượng người dùng đăng ký mới, số tài khoản VIP và doanh thu theo thời gian thực.",
      "Biểu đồ trực quan hóa dữ liệu học viên phục vụ vận hành.",
      "Quản lý nhanh các hoạt động quan trọng trong ngày.",
    ],
    images: [
      { title: "Admin Dashboard", url: "https://github.com/user-attachments/assets/3b016c6f-54ac-48f0-8953-728d5f7fa11d" },
    ],
  },
  {
    id: "usermanager",
    name: "👥 User & Log Manager",
    description: "Công cụ quản lý danh sách tài khoản người dùng và nhật ký hoạt động hệ thống.",
    bullets: [
      "Tìm kiếm, chỉnh sửa phân quyền người dùng (Normal, VIP, Admin, Staff).",
      "Kích hoạt hoặc đình chỉ tài khoản người dùng trực tiếp trên hệ thống quản trị.",
      "Log Manager: Truy xuất nhật ký tương tác để đảm bảo tính an toàn bảo mật và phục vụ bảo trì.",
    ],
    images: [
      { title: "Quản lý Người dùng", url: "https://github.com/user-attachments/assets/9e7b2b5c-8b51-4695-b8f2-45fb9aa687d6" },
      { title: "Nhật ký hệ thống (System Logs)", url: "https://github.com/user-attachments/assets/addac9e2-a1f1-4f60-9844-71c4f69c14ff" },
    ],
  },
  {
    id: "contentmanager",
    name: "🛠️ Manage Learning (Subject/Lesson)",
    description: "Hệ thống quản lý nội dung môn học và bài giảng trong giáo trình JLPT.",
    bullets: [
      "Manage Subject: Quản trị danh mục môn học tương ứng cấp độ JLPT.",
      "Manage Lesson: Quản trị danh sách bài học cụ thể thuộc môn học.",
      "Manage Content in Lesson: Quản trị chi tiết từ vựng, ngữ pháp, các câu hỏi luyện tập đi kèm mỗi bài học.",
    ],
    images: [
      { title: "Quản lý Môn học", url: "https://github.com/user-attachments/assets/7dad7821-e03c-418b-9b10-bcaa9e263808" },
      { title: "Thêm/Sửa thông tin Môn học", url: "https://github.com/user-attachments/assets/fe7e4db0-69bb-4f07-b99e-e0dfa10a712b" },
      { title: "Quản lý danh sách Bài giảng", url: "https://github.com/user-attachments/assets/454046de-90fd-43da-a5f9-9126e3de8df6" },
      { title: "Thêm/Sửa thông tin Bài giảng", url: "https://github.com/user-attachments/assets/3a95ea80-6e10-47c9-a4bd-3e43f7bc03db" },
      { title: "Quản lý nội dung chi tiết bài học", url: "https://github.com/user-attachments/assets/68c40710-7530-4a27-a745-9685e2fd7828" },
      { title: "Chỉnh sửa câu hỏi kiểm tra bài học", url: "https://github.com/user-attachments/assets/32fe48da-bf55-4fd9-86e6-5a3b1e25a5c3" },
      { title: "Tạo nội dung bài học mới", url: "https://github.com/user-attachments/assets/7c2a3ea0-9cf9-4cec-ad4b-f58a9395606a" },
      { title: "Xem câu hỏi kiểm tra bài học", url: "https://github.com/user-attachments/assets/b57a191f-88df-45e4-9b56-8768581b4851" },
    ],
  },
  {
    id: "practicemanager",
    name: "🛠️ Manage Content Practice",
    description: "Quản lý ngân hàng dữ liệu các bài tập rèn luyện kỹ năng (Nghe, Nói, Đọc).",
    bullets: [
      "Quản lý bài nghe: Tải âm thanh lên hệ thống và thiết lập bài tập trắc nghiệm nghe hiểu.",
      "Quản lý bài nói: Cập nhật các mẫu câu giao tiếp và từ khóa giọng đọc tương ứng để Azure API chấm điểm.",
      "Quản lý bài đọc: Quản trị các văn bản đọc hiểu, giải nghĩa từ khó và bộ câu hỏi đọc hiểu đi kèm.",
    ],
    images: [
      { title: "Quản lý bài nghe", url: "https://github.com/user-attachments/assets/1aecd07d-a951-4ad9-a99c-5362b75b8d24" },
      { title: "Tạo bài luyện nghe mới", url: "https://github.com/user-attachments/assets/5d1462af-e8f8-4066-beab-7b4e35c7f5b9" },
      { title: "Cấu hình câu hỏi trắc nghiệm nghe", url: "https://github.com/user-attachments/assets/e67e737d-af53-473f-a6e7-a398fa1c1916" },
      { title: "Quản lý bài nói", url: "https://github.com/user-attachments/assets/629ecfad-fc24-4df5-876f-85abf336b0e8" },
      { title: "Tạo bài luyện nói phát âm mới", url: "https://github.com/user-attachments/assets/42bf8176-ee47-4bf0-b09e-2cf591b98a26" },
      { title: "Chỉnh sửa bài nói", url: "https://github.com/user-attachments/assets/69dd8c5c-6c34-46b9-bf27-8db864d58a67" },
      { title: "Quản lý bài đọc hiểu", url: "https://github.com/user-attachments/assets/9c638f7c-1d58-4549-b95d-c160294b707c" },
      { title: "Tạo bài luyện đọc hiểu mới", url: "https://github.com/user-attachments/assets/77832108-c2d7-4150-a652-620599e85a6b" },
      { title: "Chú thích giải nghĩa bài đọc", url: "https://github.com/user-attachments/assets/74a327ff-3f74-429b-872f-5c9b9c58a2e3" },
      { title: "Thêm câu hỏi đọc hiểu", url: "https://github.com/user-attachments/assets/f543d9ce-e252-48b5-83c1-2617f2396e0f" },
    ],
  },
  {
    id: "contentbank",
    name: "📂 Content Bank",
    description: "Thư viện chung lưu trữ toàn bộ câu hỏi trắc nghiệm, kho hội thoại, kho từ vựng.",
    bullets: [
      "Vocabulary Bank & Grammar Bank: Thư viện tổng quản lý định nghĩa từ vựng, ngữ pháp toàn hệ thống.",
      "Question Bank: Quản lý ngân hàng câu hỏi trắc nghiệm dùng để tổ chức thi JLPT hoặc kiểm tra định kỳ.",
      "Dialogue Bank: Quản lý kho hội thoại đóng vai giao tiếp dùng để huấn luyện AI speaking bot.",
    ],
    images: [
      { title: "Ngân hàng Từ vựng", url: "https://github.com/user-attachments/assets/af149c54-ffdc-4489-8c40-5ee782c5f3a3" },
      { title: "Ngân hàng Ngữ pháp", url: "https://github.com/user-attachments/assets/7bd52bb7-7b60-4bdf-9fc0-e84b64b444ae" },
      { title: "Ngân hàng Câu hỏi", url: "https://github.com/user-attachments/assets/c80d062c-1e55-4338-9c84-0c7aea1f9c6e" },
      { title: "Tạo câu hỏi trắc nghiệm ngân hàng", url: "https://github.com/user-attachments/assets/f320a306-c2c7-434e-8027-1722eb61e9af" },
      { title: "Ngân hàng Hội thoại hội thoại", url: "https://github.com/user-attachments/assets/86d982f0-e11e-47ba-8dee-44f9a4d6e05a" },
    ],
  },
  {
    id: "adminroles",
    name: "👤 Manage Admin",
    description: "Phân quyền quản trị hệ thống chặt chẽ dành cho Admin cấp cao.",
    bullets: [
      "Cấp quyền, quản lý danh sách Admin và Staff nội bộ.",
      "Giám sát truy cập và kiểm soát phân vùng quản lý dữ liệu an toàn.",
    ],
    images: [
      { title: "Giao diện quản trị viên Admin", url: "https://github.com/user-attachments/assets/a78fc287-512a-4872-a331-39840aadfc2d" },
    ],
  },
];

export default function FuOhayoPage() {
  const project = findProject(PROJECT_TITLE);
  if (!project) notFound();

  const [activeTab, setActiveTab] = useState<"client" | "admin">("client");
  const [activeSectionId, setActiveSectionId] = useState<string>("login");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const currentFeatures = activeTab === "client" ? clientFeatures : adminFeatures;
  const activeSection = currentFeatures.find((f) => f.id === activeSectionId) || currentFeatures[0];

  const handleTabChange = (tab: "client" | "admin") => {
    setActiveTab(tab);
    setActiveSectionId(tab === "client" ? clientFeatures[0].id : adminFeatures[0].id);
  };

  const actions = [
    project.githubUrl && { label: "GitHub Repository", href: project.githubUrl, icon: "github" as const },
    project.liveUrl && { label: "Live Demo", href: project.liveUrl, icon: "external" as const },
  ].filter((a): a is { label: string; href: string; icon: "github" | "external" } => Boolean(a));

  return (
    <>
      <ProjectPageShell
        eyebrow="Personal Project"
        title={project.title}
        description="A web-based Japanese learning platform supporting personalized learning paths integrated with AI to practice speaking, pronunciation, grammar, and vocabulary."
        meta={[
          project.role && { label: "Role", value: project.role },
          project.period && { label: "Timeline", value: project.period },
          project.location && { label: "Location", value: project.location },
        ].filter((m): m is { label: string; value: string } => Boolean(m))}
        actions={actions}
        techStack={[
          "Spring Boot",
          "Spring Security",
          "MySQL",
          "JWT",
          "ReactJS",
          "Tailwind CSS",
          "Axios",
          "Azure Speech API",
          "Gemini AI",
          "VNPay",
        ]}
        highlights={[]}
        footerNote={`${PROJECT_TITLE} · Nguyễn Văn An Portfolio`}
      >
        {/* Dynamic Image Walkthrough Section */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-800 pb-4 gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Hình ảnh & Tính năng dự án</h2>
              <p className="text-xs sm:text-sm text-gray-400">Trải nghiệm giao diện ứng dụng học viên và trang quản trị hệ thống.</p>
            </div>
            <div className="flex bg-gray-950 p-0.5 rounded-lg border border-gray-800 self-start sm:self-center">
              <button
                onClick={() => handleTabChange("client")}
                className={`px-2.5 py-1 rounded-md font-mono text-[10px] sm:text-[11px] transition-all ${
                  activeTab === "client"
                    ? "bg-blue-600 text-white font-bold shadow-sm"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Client (Học viên)
              </button>
              <button
                onClick={() => handleTabChange("admin")}
                className={`px-2.5 py-1 rounded-md font-mono text-[10px] sm:text-[11px] transition-all ${
                  activeTab === "admin"
                    ? "bg-blue-600 text-white font-bold shadow-sm"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Admin (Quản trị)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar menu */}
            <div className="md:col-span-1 flex md:flex-col gap-1.5 overflow-x-auto md:overflow-x-visible pb-3 md:pb-0 border-b md:border-b-0 md:border-r border-gray-800 pr-0 md:pr-4 shrink-0 whitespace-nowrap md:whitespace-normal">
              {currentFeatures.map((feat) => (
                <button
                  key={feat.id}
                  onClick={() => setActiveSectionId(feat.id)}
                  className={`px-3 py-1.5 rounded-lg text-left text-xs transition-all border ${
                    activeSectionId === feat.id
                      ? "bg-blue-500/10 border-blue-500/30 text-blue-400 font-bold"
                      : "border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800/40"
                  }`}
                >
                  {feat.name}
                </button>
              ))}
            </div>

            {/* Display Area */}
            <div className="md:col-span-3 space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white tracking-tight">{activeSection.name}</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{activeSection.description}</p>
                

                
                <ul className="grid grid-cols-1 gap-2 pt-2">
                  {activeSection.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
                      <HiCheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Grid of Screenshots */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {activeSection.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxImage(img.url)}
                    className="group relative bg-gray-950 border border-gray-800 hover:border-gray-700 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all aspect-video"
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] text-gray-200 font-medium truncate">{img.title}</span>
                        <HiZoomIn className="w-4 h-4 text-blue-400 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Highlights / Achievements Section moved below the image walkthrough */}
        {project.achievements && project.achievements.length > 0 && (
          <section className="space-y-4 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Highlights</h2>
            <ul className="space-y-3">
              {project.achievements.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 bg-gray-900/60 p-4 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors"
                >
                  <span className="text-blue-400 mt-0.5" aria-hidden>
                    ▹
                  </span>
                  <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </ProjectPageShell>

      {/* Lightbox for large view */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/95 backdrop-blur-sm p-4">
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 p-2 bg-gray-900 border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white rounded-full transition-colors shadow-lg active:scale-95"
            aria-label="Close lightbox"
          >
            <HiX className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <img
              src={lightboxImage}
              alt="Large Screenshot View"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-gray-800"
            />
          </div>
        </div>
      )}
    </>
  );
}
