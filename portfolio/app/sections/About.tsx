import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"Giới thiệu qua về bản thân"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody text="Tôi là Nguyễn Mạnh Huy, một sinh viên năm 4 ngành Điện tử viễn thông tại Học viện Công nghệ Bưu chính Viễn thông - PTIT. Với niềm đam mê lập trình web, tôi đã tích lũy được nhiều kiến thức và kỹ năng qua quá trình học tập và thực hiện làm một số dự án cá nhân." />

            <AnimatedBody
              delay={0.1}
              text="Ngoài các công nghệ như JavaScript, TypeScript, ReactJS, NextJS, TailwindCSS, ExpressJS và NestJS, tôi cũng có khả năng làm việc với các hệ quản trị cơ sở dữ liệu như PostgreSQL, MariaDB, MySQL và các ORM như Prisma, Sequelize để xây dựng các ứng dụng web hiệu quả."
            />

            <AnimatedBody
              delay={0.2}
              text="Tôi luôn nỗ lực không ngừng để nâng cao kỹ năng của mình thông qua việc học những kiến thức mới, thực hành làm dự án và học hỏi từ những người có kinh nghiệm. Mục tiêu dài hạn của tôi là phát triển sự nghiệp lên các vị trí cao như Senior, Tech Lead."
            />
            <AnimatedBody
              delay={0.3}
              text="Với tinh thần cầu tiến và khả năng làm việc nhóm tốt, tôi tin rằng mình có thể đóng góp tích cực vào sự phát triển của công ty và mang lại những giá trị thiết thực cho các dự án mà tôi tham gia."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
