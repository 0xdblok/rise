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
          Rise
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
          RISE INDUSTRIES
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
        <div class="mt-2 text-base text-center text-gray-400">
          CA: 0x1fE27DB507d34F7e3735a422dA3439305EA2343b
        </div>
        <div class="flex gap-4 mt-4 max-w-full text-xs leading-none text-center text-[#3f5dd3] ">
          <p className="text-xs text-center">
            ( launch using AI16Z SDK on Base )
          </p>
        </div>

        <div class="flex gap-4 mt-3 w-16">
          <div class="flex flex-col flex-1 min-h-[24px]">
            <a href="https://x.com/riseonhl">
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
            <a href="https://t.me/riseindustries">
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
          The RISE Token represents a revolutionary approach to venture capital
          operations within the Base chain ecosystem. As a specialized
          investment vehicle, RISE focuses exclusively on nurturing and
          supporting early-stage blockchain projects, providing them with not
          just capital, but comprehensive growth support and protection against
          market manipulation.
        </div>

        <div className="pt-6 text-center  px-16 text-white">
          <p className="pt-6">
            The token's foundation is built on three core principles:
            sustainable growth, market integrity, and long-term partnership. To
            combat price manipulation, RISE implements an advanced suite of
            protective measures including time-locked liquidity pools that
            release gradually over time, sophisticated trading pattern analysis
            to detect and prevent wash trading, and dynamic transaction limits
            that automatically adjust based on market conditions and trading
            volumes. These features work in concert to create a stable,
            manipulation-resistant trading environment that benefits genuine
            investors and project stakeholders.
          </p>

          <p className="pt-6">
            Token holders gain access to a comprehensive suite of benefits that
            grow more valuable over time. Early investors receive priority
            access to new project launches, reduced platform fees, and enhanced
            voting rights in governance decisions. The platform also features a
            unique staking mechanism that rewards long-term holders with
            increasing influence over project decisions and additional
            investment opportunities
          </p>
          <p className="pt-6">
            The technical infrastructure of RISE leverages the full capabilities
            of the Base chain, ensuring fast transaction processing and minimal
            fees. The smart contract architecture incorporates advanced security
            features including automated audit trails, real-time transaction
            monitoring, and emergency circuit breakers that can pause trading in
            case of detected anomalies. Regular security audits and a generous
            bug bounty program further reinforce the platform's commitment to
            security. Projects receiving investment through RISE gain more than
            just funding – they become part of a thriving ecosystem that
            provides technical support, mentorship, and networking
            opportunities. The platform's cross-chain compatibility ensures that
            projects can seamlessly integrate with other blockchain networks
            while maintaining their primary presence on the Hyper liquid chain.
          </p>
          <p className="pt-6">
            To maintain market stability, RISE employs a blacklist feature for
            addresses engaging in suspicious trading patterns, while its dynamic
            pricing algorithm helps prevent artificial price inflation or
            manipulation. The treasury reserve acts as a stability mechanism,
            with funds available for market operations when needed to maintain
            healthy trading conditions. The governance structure of RISE
            emphasizes community involvement while maintaining professional
            investment standards. Token holders can participate in key decisions
            through a voting system that weights both the quantity of tokens
            held and the duration of holding, encouraging stable, long-term
            investment approaches over speculative trading. Through this
            comprehensive approach, RISE aims to revolutionize how venture
            capital operates in the blockchain space, creating a sustainable,
            manipulation-resistant investment ecosystem that benefits all
            stakeholders while fostering the growth of promising blockchain
            projects.
          </p>
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
