import { FaGithub } from "react-icons/fa";

export default function Author() {
  return (
    <div className="bg-[#272525] text-white flex flex-col items-center justify-center p-5 text-[12px]">
      <div className="flex items-center gap-3">
        <a href="https://github.com/Valex99/shopping-cart">
          <FaGithub className="h-4 w-4 text-blue-500" />
        </a>

        <h1>Developed by Matej Valencic</h1>
      </div>
      <p className="text-[10px] mt-1">
        © Copyright 2025 Renchester Ramos. All rights reserved.
      </p>
    </div>
  );
}
