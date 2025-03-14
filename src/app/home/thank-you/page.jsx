export default function ThankYou() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="px-3 flex flex-col gap-4 relative justify-center items-center">
        <div>
          <svg
            stroke="#40785b"
            fill="#40785b"
            stroke-width="0"
            viewBox="0 0 512 512"
            color="#40785b"
            height="90"
            width="90"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "rgb(209, 86, 77)" }}
          >
            <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
          </svg>
        </div>
        <div>
          <span className="text-[#1b3352] font-bold text-[1.7rem]">
            شكرا لانضمامك إلينا
          </span>
        </div>
      </div>
    </main>
  );
}
