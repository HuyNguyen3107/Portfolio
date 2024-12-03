export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "Greenchop",
    description:
      "Giao diện được cắt từ Figma, sử dụng HTML, CSS và SASS để xây dựng. Trang web có thể hiển thị trên nhiều thiết bị khác nhau với responsive áp dụng grid-system.",
    github:
      "https://github.com/HuyNguyen3107/Projects/tree/main/Greenchop/htmlcss_project",
    demo: "https://huynguyen3107.github.io/Projects/Greenchop/htmlcss_project/index.html",
    image: "/projects/greenchop.jpg",
    available: true,
  },
  {
    id: 1,
    name: "Player Music",
    description:
      "Một ứng dụng nghe nhạc đơn giản với các chức năng cơ bản như phát, tạm dừng, tua nhạc, chọn bài hát, chuyển bài hát tiếp theo và chức năng hát karaoke. Được xây dựng bằng HTML, CSS và JavaScript.",

    github: "https://github.com/HuyNguyen3107/Projects/tree/main/Player",
    demo: "https://huynguyen3107.github.io/Projects/Player/player.html",
    image: "/projects/palyer.jpg",
    available: true,
  },
  {
    id: 2,
    name: "Blog",
    description:
      "Một trang blog cá nhân với các bài viết về lập trình và học tập được xây dựng với HTML, CSS và JavaScript. Sử dụng access token và refresh token để xác thực người dùng và duy trì đăng nhập.",

    github: "https://github.com/HuyNguyen3107/Projects/tree/main/Blog",
    demo: "https://huynguyen3107.github.io/Projects/Blog/blog.html",
    image: "/projects/blog.jpg",
    available: true,
  },
  {
    id: 3,
    name: "Guess Number",
    description:
      "Một trò chơi đoán số với giao diện đẹp và thân thiện. Người chơi sẽ phải đoán số mà chương trình đã chọn ngẫu nhiên. Sử dụng ReactJS để xây dựng và Redux để quản lý global state.",

    github: "https://github.com/HuyNguyen3107/Projects/tree/main/Guess-Number",
    demo: "https://guess-number-one-zeta.vercel.app/",
    image: "/projects/guess-number.jpg",
    available: true,
  },
  {
    id: 4,
    name: "Shop",
    description:
      "Một trang web bán hàng đơn giản với các chức năng cơ bản như xem sản phẩm, thêm vào giỏ hàng, xóa sản phẩm khỏi giỏ hàng, tăng giảm số lượng sản phẩm, tính tổng tiền, thanh toán, xem chi tiết sản phẩm và phân trang. Sử dụng ReactJS , Redux Toolkit và React Router Dom để điều hướng trang.",

    github: "https://github.com/HuyNguyen3107/Projects/tree/main/Shop",
    demo: "https://shop-blush-delta.vercel.app/",
    image: "/projects/shop.jpg",
    available: true,
  },
  {
    id: 5,
    name: "Beefree",
    description:
      "Một công cụ tạo email hoặc giao diện web với mục đích marketing. Sử dụng NextJS, Redux Toolkit, FireBase, Dnd kit, Tailwind, NextUI, ExpressJS, Sequelize, PostgreSQL, Passport và các công nghệ khác.",
    github: "https://github.com/HuyNguyen3107/Beefree",
    demo: "https://beefree-three.vercel.app/",
    image: "/projects/beefree.jpg",
    available: true,
  },
];
