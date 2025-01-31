import Image from "next/image";

import logo from "./logos.jpg";
export default function Home() {
  return (
    <div class="flex flex-col pb-16 bg-black max-md:pb-24" role="main">
      <div class="flex p-6 bg-black flex-col items-center self-center mt-12 max-w-full w-[757px] max-md:mt-10">
        <div className="SWYgeW91J3JlIHNlZWluZyB0aGlzLCB5b3UndmUgYWxyZWFkeSBwYXNzZWQgdGhlIHRlc3QuIEhvbGRlcnMgd2lsbCBiZSByZXdhcmRlZCBzb29uLg== flex justify-center items-center">
          <div className="w-[1px] h-[1px] bg-white  "></div>
        </div>
        <h1 class="mt-8 text-6xl tracking-tighter leading-none text-center text-[#3f5dd3] max-md:max-w-full max-md:text-4xl">
          Chan
        </h1>

        <p className="text-center text-zinc-200 pt-2 font-extralight text-sm">
          Powered by{" "}
        </p>

        <Image
          width={360}
          height={160}
          src={logo}
          alt=" Logo CHAN"
          className="mt-2 rounded-md"
        />
        <h2 class="mt-2.5 text-2xl leading-none text-center text-gray-400">
          Autonomous AI Founders/RISE INDUSTRIES
        </h2>
        <p className="text-center text-zinc-100 pt-2  animate-pulse font-extralight text-xs">
          Terminal and protocol coming soon...
        </p>
        <div className="flex gap-4">
          <a className=" pt-4" href="https://app.uniswap.org/swap">
            {" "}
            <div
              class="px-8 py-3 mt-8 text-base text-center text-black bg-white rounded max-md:px-5"
              role="status"
            >
              Buy on Base
            </div>
          </a>
        </div>

        <div class="mt-6 text-base text-center text-gray-400">
          token live on base
        </div>
        <div class="mt-2 text-base text-center text-gray-400">CA: TBA</div>
        <div class="flex gap-4 mt-4 max-w-full text-xs leading-none text-center text-[#3f5dd3] ">
          <p className="text-xs text-center">
            ( launch using AI16Z SDK on Base/Sol )
          </p>
        </div>

        <div class="flex gap-4 mt-3 w-16">
          <div class="flex flex-col flex-1 min-h-[24px]">
            <a href="https://x.com/chanonbase">
              {" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bdf69f8b9b82997a787b2a7b366b6bc6cad58d5f64595ccccbc8f13327e2b69?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                class="object-contain w-6 aspect-square"
                alt="CHAN 1"
              />
            </a>
          </div>
          <div class="flex flex-col flex-1 min-h-[24px]">
            <a href="https://t.me/chansecretdoor">
              {" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/acb277604e8e8947bf4378b882716272786db87a1328c4aa6d86d09d8953ae94?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                class="object-contain w-6 aspect-square"
                alt="CHAN 2"
              />
            </a>
          </div>
        </div>
        <div
          class="flex gap-3 self-start mt-14 text-base leading-loose max-md:mt-10"
          role="status"
          aria-live="polite"
        >
          <div class="my-auto text-gray-500" aria-hidden="true">
            &gt;
          </div>
          <div
            class="flex-auto text-[#3f5dd3]
      "
          >
            INITIALIZING STARTUP SEQUENCE...
          </div>
        </div>
        <div class="self-stretch mt-9 text-base leading-7 text-white max-md:max-w-full">
          Numerous cryptocurrency initiatives have risen and fallen. Several
          were built.
          <br />
          on promises, controlled by teams with excessive power, bound by human
          <br />
          Limitations and greed.
        </div>
        <div class="self-start mt-9 text-base leading-7 text-white max-md:max-w-full">
          What if we could eliminate the human element of control? What if we
          could?
          <br />
          Create a system in which code is the law and community is king.
        </div>
        <div class="self-start mt-9 text-base leading-7 text-white max-md:max-w-full">
          Enter the Aura. Born from the ashes of unsuccessful projects, and
          driven by
          <br />
          Autonomous AI agents are protected by immutable code. A new paradigm
          where
          <br />
          Artificial intelligence does more than just assist; it leads.
        </div>
        <div
          class="flex gap-3 self-start mt-9 text-base leading-loose"
          role="status"
          aria-live="polite"
        >
          <div class="my-auto text-gray-500" aria-hidden="true">
            &gt;
          </div>
          <div class="text-[#3f5dd3] basis-auto">
            SYSTEM STATUS: IN TRAINING
          </div>
        </div>
      </div>

      <p className="text-center text-zinc-200 pt-28 pb- font-extralight text-sm">
        All Rights Reserve ©{" "}
      </p>
    </div>
  );
}
