import Image from "next/image";
import { landContent } from "@/components/mocks";
import Link from "next/link";
import AccordionGroup from "@/components/accordion";
import { Rethink_Sans } from "next/font/google";
import Contact from "@/components/contact";
import { WhatsAppButton } from "@/components/wpp";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // escolha as weights que precisar
  variable: "--font-rethink-sans",
  display: "swap",
});
export default function Home() {
  return (
    <main className="w-full h-full flex flex-col  ">
      <header
        className="w-full relative  p-4 bg-cover bg-top  lg:h-[800px] "
        style={{ backgroundImage: `url(${landContent.header.image})` }}
      >
       <div className="absolute inset-0 bg-black/30" />
      
        <div className="container   mx-auto flex h-[100px]   items-center  justify-start  ">
          <Image src={landContent.logo} alt="" width={250} height={101} className="z-50" />
        </div>
        <div className=" container grid grid-cols-1    mx-auto gap-6 p-4  lg:grid-cols-2 mt-36 lg:p-0">
          <div className="w-full flex z-50  gap-6 flex-col items-start justify-center ">
            <h1 className="text-white font-semibold max-w-[1000px] text-2xl md:text-5xl ">
              {landContent.header.title}
            </h1>
            <p className="w-[336px] h-[30px] text-white bg-white/35 backdrop-blur-none  flex items-center justify-center rounded-md ">
              Consulte seus direitos e busque justiça
            </p>
            <p
              className={`text-white text-xl max-w-[500px] ${rethinkSans.className} `}
            >
              {landContent.header.content}
            </p>
            <button className="w-[290px] py-4 bg-bgBtn rounded-full text-white  lg:hidden">
              {landContent.btnsText.specialist}
            </button>
          </div>
        
        </div>
      
      </header>
      <section className="w-full h-full   ">
        <div className="container mx-auto flex items-center flex-col  gap-10">
          <div className=" max-w-[800px]  h-[557px] p-4 mx-auto  flex ">
            <Contact />
          </div>
          <div className="w-full h-full  flex flex-col p-4 items-center mt-10 lg:flex-row lg:justify-between  lg:mt-36">
            <h2 className="w-full text-3xl  text-left  lg:max-w-[50%] lg:text-5xl">
              {landContent.section_1.title}
            </h2>
            <button className="hidden lg:py-4 bg-bgBtn text-white   rounded-md w-[295px]  lg:block  ">
              {landContent.btnsText.contact}
            </button>
          </div>
          <div className="w-full flex flex-col-reverse gap-4 p-4">
            <button className="w-[200px] py-4 bg-bgBtn text-white   rounded-4xl lg:w-[295px] lg:hidden  ">
              {landContent.btnsText.contact}
            </button>
            <p className={`text-xl text-[#1B1B1B]  ${rethinkSans.className}`}>
              {landContent.section_1.content}
            </p>
          </div>

          <div className="w-full h-[510px] flex items-center justify-center relative lg:rounded-md  ">
            <video
              src={landContent.section_1.movie}
              loop
              muted
              autoPlay
              playsInline
              className="w-full h-[540px] object-cover top-20 rounded-4xl absolute"
            ></video>
          </div>
        </div>
        <div className="w-full h-full pb-10  bg-bgSection -mt-36 p-4">
          <div className="container mx-auto flex items-center flex-col gap-10 mt-36">
            <div className="w-full flex items-center justify-items-start">
              <h1 className="text-white text-left text-2xl  pt-35 pb-10  w-[50%]  lg:text-5xl  ">
                {landContent.section_2.title}
              </h1>
            </div>
            <div className="w-full gap-4 p-3 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 ">
              {landContent.section_2.grid.map((grid, index) => (
                <div
                  className="w-full h-full flex flex-col gap-6 bg-[#002444] p-8 text-white rounded-3xl"
                  key={index}
                >
                  <Image
                    src={grid.icon}
                    alt={grid.title}
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                  <h2 className="text-[20px] max-w-[270px] h-[45px]">
                    {grid.title}
                  </h2>
                  <p className={`text-sm  ${rethinkSans.className}`}>
                    {grid.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col mt-10 gap-6 items- justify-center lg:flex-row lg:justify-between ">
              <p
                className={` text-lg w-full  text-white p-4 ${rethinkSans.className}`}
              >
                {landContent.section_2.content}
              </p>
              <button className="w-[250px]  py-4  bg-bgBtn text-white  rounded-full  lg:w-[295px] lg:rounded-md ">
                {landContent.btnsText.contact}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full relative h-screen py-20  flex flex-col items-center justify-end bg-cover bg-center  lg:h-[830px] "
        style={{ backgroundImage: `url(${landContent.section_3.image})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container flex flex-col gap-10 p-4 z-50">
          <h2 className="text-white  w-full text-3xl max-w-[1000px]  leading-10  lg:text-5xl lg:leading-16 ">
            {landContent.section_3.title}
          </h2>
          <button className="w-[290px] py-4 bg-bgBtn rounded-full text-white  lg:w-[450px] lg:rounded-md">
            {landContent.btnsText.specialist}
          </button>
        </div>
      </section>
      <section className="w-full h-full  flex flex-col items-center justify-center    ">
        <div className="w-full  h-full  mx-auto  flex flex-col items-center justify-center gap-20 bg-bgBtn lg:h-[800px]">
          <h2 className="text-white text-2xl mt-10 lg:text-5xl">
            {landContent.section_4.title}
          </h2>
          <div className="container mx-auto px-3 gap-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ">
            {landContent.section_4.news.map((news, index) => (
              <div
                className="w-full bg-white  h-[350px]  rounded-md flex flex-col items-center justify-center gap-7  text-white "
                key={index}
              >
                <Link href={news.link} target="_blank">
                  <div className="w-full h-[200px]  relative ">
                    <Image
                      src={"/lf.svg"}
                      alt={news.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain px-3  "
                    />
                    <h2 className="text-[20px] pl-3  text-[#161616] text-left w-full  absolute bottom-4 z-50 line-clamp-1">
                      {news.title}
                    </h2>
                  </div>

                  <p className="text-sm text-[#5F6567]  p-3 h-[90px] line-clamp-4 overflow-hidden ">
                    {news.content}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full h-full  flex flex-col py-10">
        <div className="container mx-auto flex flex-col gap-10">
          <div className="w-full flex items-center justify-start gap-4">
            <h2 className="text-3xl text-left text-[#001D36] lg:text-8xl ">
              {landContent.section_5.title}
            </h2>
            <h2 className="text-2xl text-left  text-[#001D36] lg:text-5xl   ">
              {landContent.section_5.subTitle}
            </h2>
          </div>

          <AccordionGroup />
        </div>
      </section>
      <section className="w-full h-full py-20">
        <div className="bg-bgSection w-full h-full   mx-auto lg:rounded-3xl lg:h-[572px]  lg:w-[95%]">
          <div className="w-full  grid grid-cols-1 p-4 lg:grid-cols-2 lg:container lg:mx-auto ">
            <div className="w-full -mt-24 ">
              <Image
                src={landContent.section_6.image}
                alt="Alex"
                width={720}
                height={720}
              />
            </div>
            <div className="w-full flex flex-col mt-10 gap-6 lg:w-[518px] ">
              <h2 className="w-[151px] h-[30px] text-white bg-white/35 backdrop-blur-none  flex items-center justify-center rounded-md">
                {landContent.section_6.subTitle}
              </h2>
              <h2 className="text-5xl text-white">
                {landContent.section_6.title}
              </h2>

              <p className={` text-white ${rethinkSans.className}`}>
                {landContent.section_6.content}
              </p>
              <Link href={"https://www.guedesbampi.com.br/"} target="_blank">
                <button className="w-[250px] py-4 bg-bgBtn text-white cursor-pointer  rounded-full lg:w-[295px] lg:rounded-md  ">
                  {landContent.btnsText.redirect}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full h-full py-10  bg-[#D9D9D9]  p-4 flex flex-col items-center justify-center lg:h-[409px]">
        <div className="container mx-auto grid  gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-2">
            <Image
              src={landContent.footer.logo}
              alt=""
              width={600}
              height={350}
            />
          </div>
          <div className="flex flex-col gap-4 text-[#072E4E]">
            <h2 className="text-[#707070] uppercase">Contato</h2>
            <p>{landContent.footer.address}</p>
            <p>{landContent.footer.city}</p>
          </div>
          <div className="flex flex-col gap-4 text-[#072E4E]">
            <h2 className="text-[#707070] uppercase">Siga nossas redes</h2>
            <div className="w-full flex items-center gap-2">
              {landContent.footer.socialIcons.map((icons, index) => (
                <div className="w-[50px] " key={index}>
                  <Image src={icons} alt="" width={25} height={25} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="container mx-auto h-[1px] bg-[#2E3034] border-0 mt-10" />
        <div className="container mx-auto flex items-center justify-between mt-10  flex-col lg:flex-row">
          <p> Todos os Direitos Reservados &copy; 2025</p>
          <p>Guedes Bampi Advogados</p>
        </div>
      </footer>
      <WhatsAppButton phoneNumber="555195391300" />
    </main>
  );
}
