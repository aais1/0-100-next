import Image from "next/image";

export default function BusinessCategories() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Tab panels */}
          <div className="relative flex h-[324px] items-center justify-center">
            {/* Small blue dots */}
            <div className="absolute -z-10">
              <svg
                className="fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={164}
                height={41}
                viewBox="0 0 164 41"
                fill="none"
              >
                {/* SVG content */}
              </svg>
            </div>
            {/* Blue glow */}
            <div className="absolute -z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={432}
                height={160}
                viewBox="0 0 432 160"
                fill="none"
              >
                {/* SVG content */}
              </svg>
            </div>
            {/* Horizontal lines */}
            <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-[200px] top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-gradient-to-r before:via-blue-500"></div>
            <div className="absolute inset-x-0 top-1/2 -z-10 h-px translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-gradient-to-r before:via-blue-500"></div>
            {/* Diagonal lines */}
            <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px -rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            {/* Vertical lines */}
            <div className="absolute inset-y-0 left-1/2 -z-10 w-px -translate-x-[216px] bg-gradient-to-b from-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-y-0 left-1/2 -z-10 w-px translate-x-[216px] bg-gradient-to-t from-gray-200 to-transparent mix-blend-multiply"></div>
            {/* Logos */}
            <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,theme(colors.blue.500))_border-box]">
              <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                  <Image
                    className="relative"
                    src="/images/logo-01.svg"
                    width={32}
                    height={32}
                    alt="Logo 01"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex flex-col">
              <article className="flex h-full w-full items-center justify-center focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300">
                <div className="absolute -translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative"
                        src="/images/logo-02.svg"
                        width={23}
                        height={22}
                        alt="Logo 02"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative"
                        src="/images/logo-03.svg"
                        width={22}
                        height={22}
                        alt="Logo 03"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative"
                        src="/images/logo-04.svg"
                        width={24}
                        height={22}
                        alt="Logo 04"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -translate-y-[82px] translate-x-[216px]">
                  <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative"
                        src="/images/logo-05.svg"
                        width={25}
                        height={25}
                        alt="Logo 05"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute translate-x-[216px] translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative"
                        src="/images/logo-06.svg"
                        width={20}
                        height={18}
                        alt="Logo 06"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -translate-x-[216px] translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative"
                        src="/images/logo-07.svg"
                        width={27}
                        height={27}
                        alt="Logo 07"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
