import ArrowBtn from "@/components/ArrowBtn"
import DemoBtn from "@/components/DemoBtn"
import Form from "@/components/Form"
import Navi from "@/components/Navi"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full min-h-[8324px] bg_1">
      <Navi />
      <section
        id="ELI-CARE"
        className="flex gap-[35px] pt-[134px] flex-col items-center  w-full gradient_1 h-[1018px] mb-[80px]"
      >
        <div className="flex flex-col gap-[50px] items-center">
          <div className="w-[700px] h-[394px] video_1 rounded-[18px] overflow-hidden">
            <video src="/video.mp4" autoPlay muted loop />
          </div>
          <div className="flex flex-col gap-[15px] items-center ">
            <p className="text_gradient_1 text-[40px] font-light leading-[45px] tracking-[-0.1px]">
              ELECTRIFIED MOBILITY x INTELLIGENT CARE
            </p>
            <p className=" text-[30px] font-light leading-[45px] tracking-[-0.1px]">
              Beyond diagnostics. Predictive anomaly detection.​
            </p>
          </div>
        </div>
        <a
          className="flex  btn_gradient_1 h-[36px] border rounded-[29px] text-white text-[10px] font-light leading-[20px] tracking-[-0.1px] px-[25px] items-center
         "
          href="https://meta-mobility.notion.site/upcoming-event"
          target="_blank"
        >
          UPCOMING EVENT
        </a>
      </section>
      <section id="ELI-CONNECTED" className="flex flex-col items-center gap-[15px] mb-[462px]">
        <p className="text_gradient_1 text-[40px] font-light leading-[45px] tracking-[-0.1px]">TRUSTED BY​</p>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-[705px]">
            <div>
              <Image src="/img_logo_renault.png" alt="logo_renault" width={159} height={89} />
            </div>
            <div>
              <Image src="/img_logo_geotab.png" alt="logo_geotab" width={115} height={115} />
            </div>
            <div>
              <Image src="/img_logo_jrenergy.png" alt="logo_jrenergy" width={135} height={29} />
            </div>
            <div>
              <Image src="/img_logo_jrbattery.png" alt="logo_jrbattery" width={137} height={29} />
            </div>
          </div>
          <div className="flex items-center justify-between w-[610px] ">
            <div>
              <Image src="/img_logo_aws.png" alt="logo_aws" width={66} height={39} />
            </div>
            <div>
              <Image src="/img_logo_kaist.png" alt="logo_kaist" width={121} height={33} />
            </div>
            <div>
              <Image src="/img_logo_katech.png" alt="logo_katech" width={104} height={104} />
            </div>
            <div>
              <Image src="/img_logo_ktr.png" alt="logo_ktr" width={179} height={21} />
            </div>
          </div>
          <div className="flex items-center justify-between gap-[77px] mt-[40px] mr-[40px]">
            <div>
              <Image src="/img_logo_ventures.png" alt="logo_ventures" width={141} height={31} />
            </div>
            <div>
              <Image src="/img_logo_kibo.png" alt="logo_kibo" width={122} height={31} />
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex items-center gap-[15px] mb-[500px]">
        <div className="flex flex-col w-1/2 gap-[30px]">
          <div className="flex flex-col gap-[35px]">
            <p className="text-[40px] font-light leading-[45px] tracking-[-0.1px]">MODULAR. STACKABLE. EXPANDABLE.</p>
            <p className="text-[30px] font-light leading-[45px] tracking-[-0.1px]">
              Build your system Scale without limits
            </p>
            <div className="flex flex-col gap-[40px]">
              <Image src="/logo_eli_care.svg" alt="logo_eli_care" width={118} height={21} />
              <DemoBtn />
            </div>
          </div>
        </div>
        <Image
          src="/img_section3.png"
          alt="img_1"
          width={698}
          height={489}
          className="absolute top-[-50px] right-[-220px]"
        />
      </section>
      <section className="flex flex-col items-center gap-[50px] mb-[430px]">
        <Image src="/img_section_4.png" alt="img_1" width={678} height={437} />
        <div className="flex flex-col gap-[15px] items-center ">
          <p className="text_gradient_1 text-[40px] font-light leading-[45px] tracking-[-0.1px]">
            CAPTURE - ANALYZE - PREVENT​
          </p>
          <p className="text-[30px] font-light leading-[45px] tracking-[-0.1px]">
            Collect anomaly data & derive Al insight before issues occur
          </p>
          <Image src="/logo_eli_connected.svg" alt="logo_eli_connected" width={189} height={21} />
        </div>
        <div className="flex flex-col items-center gap-[40px]">
          <Image src="/img_section_4_2.png" alt="img_1" width={678} height={437} />
          <DemoBtn />
        </div>
      </section>
      <section id="OUR-CORE" className="flex flex-col items-center gap-[40px] mb-[381px]">
        <div className="flex flex-col gap-[50px] items-center ">
          <div className="flex gap-[24px]">
            <div className="flex flex-col border border-white rounded-[21px] px-[22px] w-[311px] h-[173px] bg_gradient_5">
              <div className="flex justify-center items-center gap-[15px] mt-[20px]">
                <span className="text-[15px] font-light leading-[45px] tracking-[-0.1px]">#1</span>
                <span className="text-[15px] font-light leading-[45px] tracking-[-0.1px]">Ultra - Speed Capture</span>
              </div>
              <p className="flex justify-center text-[10px] font-light leading-[15px] tracking-[-0.1px] text-justify">
                We record electrical signals at an ultra-high- speed 20-nanosecond resolution, enabling the detection of
                even the most fleeting anomaly patterns. This precision provides engineers with highly granular data
                that conventional logging systems simply cannot match, forming the foundation for accurate diagnostics
                and prediction.
              </p>
            </div>
            <div className="flex flex-col  border border-white rounded-[21px] px-[22px] w-[311px] h-[173px] bg_gradient_5">
              <div className="flex justify-center items-center gap-[15px] mt-[20px]">
                <span className="text-[15px] font-light leading-[45px] tracking-[-0.1px]">#2</span>
                <span className="text-[15px] font-light leading-[45px] tracking-[-0.1px]">AI Anomaly Detection</span>
              </div>
              <p className="flex justify-center text-[10px] font-light leading-[15px] tracking-[-0.1px] text-justify">
                Our AI models identify invisible, early-stage anomalies long before they escalate into failures. By
                analyzing vast amounts of multimodal data, the system uncovers patterns that human eyes or traditional
                methods cannot see, allowing proactive intervention.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] items-center ">
            <p className="text_gradient_1 text-[40px] font-light leading-[45px] tracking-[-0.1px]">OUR CORE​</p>
            <p className="text-[30px] font-light leading-[30px] tracking-[-0.1px] text-center whitespace-pre-line">
              {`From EV to UAM\nDriving all battery-powered mobility issues to Zero`}
            </p>
          </div>
          <div className="flex gap-[24px]">
            <div className="flex flex-col border border-white rounded-[21px] px-[22px] w-[311px] h-[173px] bg_gradient_5">
              <div className="flex justify-center items-center gap-[15px] mt-[20px]">
                <span className="text-[15px] font-light leading-[45px] tracking-[-0.1px]">#3</span>
                <span className="text-[15px] font-light leading-[45px] tracking-[-0.1px]">Predict Earlier</span>
              </div>
              <p className="flex justify-center text-[10px] font-light leading-[15px] tracking-[-0.1px] text-justify">
                We forecast failures faster than CAN, impedance, or IR-based diagnostics, which often detect issues only
                after degradation has progressed. Our method shortens the reaction window, giving operators valuable
                time to act and prevent costly downtime or safety incidents.
              </p>
            </div>
            <div className="flex flex-col  border border-white rounded-[21px] px-[22px] w-[311px] h-[173px] bg_gradient_5">
              <div className="flex justify-center items-center gap-[15px] mt-[20px]">
                <span className="text-[15px] font-light leading-[45px] tracking-[-0.1px]">#4</span>
                <span className="text-[15px] font-light leading-[45px] tracking-[-0.1px]">Proactive Optimization</span>
              </div>
              <p className="flex justify-center text-[10px] font-light leading-[15px] tracking-[-0.1px] text-justify">
                By combining early prediction with actionable insights, we enable not just preventive maintenance but
                also continuous optimization of system performance. This ensures electrified mobility assets operate
                safely, efficiently, and at peak reliability.
              </p>
            </div>
          </div>
          <a
            className="flex justify-center items-center btn_gradient_1 w-[107px] h-[36px] border rounded-[29px] text-white text-[10px] font-light leading-[20px] tracking-[-0.1px]"
            href="https://meta-mobility.notion.site/our-core"
            target="_blank"
          >
            MORE
          </a>
        </div>
      </section>
      <section id="TEAM" className="flex flex-col items-center gap-[50px] mb-[381px]">
        <div className="flex flex-col gap-[15px] items-center ">
          <p className="text_gradient_1 text-[40px] font-light leading-[45px] tracking-[-0.1px]">TEAM</p>
          <p className=" text-[30px] font-light leading-[45px] tracking-[-0.1px]">
            One mission – Shaping the future of mobility
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[19px]">
            <div className="flex border-[0.5] rounded-[21px] border-white w-[424px] h-[174px] bg_gradient_5 p-[17px] gap-[10px]">
              <div className="flex items-center justify-center border rounded-[14px] border-white">
                <Image src="/img_ceo.png" alt="img_ceo" width={143} height={146} />
              </div>
              <div className="relative flex flex-col justify-between w-[254px]">
                <a
                  href="https://www.linkedin.com/in/jiwon-kim-meta/"
                  target="_blank"
                  className="absolute top-0 right-[-5px]"
                >
                  <Image src="/img_linked_in_color.png" alt="icon_linkedin" width={20} height={20} />
                </a>
                <div className="flex flex-col pt-[13px]">
                  <strong className="text-[14px] font-normal leading-[25px] tracking-[-0.1px]">Jiwon</strong>
                  <span className="text-[14px] font-light leading-[25px] tracking-[-0.1px]">CEO</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px] text-justify">
                      N3 Capital Partners PE
                    </span>
                    <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px] text-justify">
                      Adivisor
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px] text-justify">
                      Lakebridge Equity Partners PE
                    </span>
                    <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px] text-justify">
                      Director
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px] text-justify">
                      Joseph Investment
                    </span>
                    <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px] text-justify">
                      Senior Consultant
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px] text-justify">
                      Kyung Hee University
                    </span>
                    <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px] text-justify">B.A</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] border-[0.5] rounded-[21px] border-white w-[203px] h-[174px] bg_gradient_5 pt-[17px] pl-[16px]">
              <div className="flex gap-[10px]">
                <div className="flex flex-col items-center justify-center border rounded-[14px] border-white">
                  <Image src="/img_coo.png" alt="img_coo" width={70} height={66} />
                </div>
                <div className="relative flex flex-col pt-[13px]">
                  <a href="#none" className="absolute top-0 right-[-40px]">
                    <Image src="/img_linked_in_color.png" alt="icon_linkedin" width={20} height={20} />
                  </a>
                  <strong className="text-[14px] font-normal leading-[25px] tracking-[-0.1px]">jaehwan</strong>
                  <span className="text-[14px] font-light leading-[25px] tracking-[-0.1px]">COO</span>
                </div>
              </div>
              <div className="flex flex-col w-[164px]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px]">Geumseong Law firm</span>
                  <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px] ">Partner</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px]">Dowoo Law firm</span>
                  <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px] ">Senior Attorney</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px]">Orne Haneul Law firm</span>
                  <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px] ">Attorney</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px]">
                    Seoul National University
                  </span>
                  <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px] ">B.A</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[18px]">
            <div className="flex flex-col gap-[15px] border-[0.5] rounded-[21px] border-white w-[203px] h-[174px] bg_gradient_5 pt-[17px] pl-[16px]">
              <div className="flex gap-[7px]">
                <div className="flex flex-col items-center justify-center border rounded-[14px] border-white">
                  <Image src="/img_cto.png" alt="img_cto" width={72} height={72} />
                </div>
                <div className="relative flex flex-col pt-[13px]">
                  <a
                    href="https://www.linkedin.com/in/sung-eun-jerng-meta/"
                    target="_blank"
                    className="absolute top-0 right-[-35px]"
                  >
                    <Image src="/img_linked_in_color.png" alt="icon_linkedin" width={20} height={20} />
                  </a>
                  <strong className="text-[14px] font-normal leading-[25px] tracking-[-0.1px]">SungEun</strong>
                  <span className="text-[14px] font-light leading-[25px] tracking-[-0.1px]">CTO</span>
                </div>
              </div>
              <div className="flex flex-col w-[164px]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px]">Suwon University</span>
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px] ">Assistant Professor</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px]">MIT</span>
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px] ">
                    Post-doctoral Researcher
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px]">
                    Seoul National University
                  </span>
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px] ">Ph.D</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px]">Korea University</span>
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px] ">B.S</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] border-[0.5] rounded-[21px] border-white w-[203px] h-[174px] bg_gradient_5 pt-[17px] pl-[16px]">
              <div className="flex gap-[7px]">
                <div className="flex flex-col items-center justify-center border rounded-[14px] border-white">
                  <Image src="/img_senior_engineer.png" alt="img_senior_engineer" width={72} height={72} />
                </div>
                <div className="relative flex flex-col pt-[13px]">
                  <a
                    href="https://www.linkedin.com/in/park-sangyun-meta/"
                    target="_blank"
                    className="absolute top-0 right-[5px]"
                  >
                    <Image src="/img_linked_in_color.png" alt="icon_linkedin" width={20} height={20} />
                  </a>
                  <strong className="text-[14px] font-normal leading-[25px] tracking-[-0.1px]">Sangyun</strong>
                  <span className="text-[14px] font-normal leading-[25px] tracking-[-0.1px]">Senior engineer</span>
                </div>
              </div>
              <div className="flex flex-col w-[164px]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px]">SF Technology</span>
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px] ">Technical Director</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px]">RVSST</span>
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px]">Technical Director</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px]">Daeyeong Ubitec</span>
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px] ">Senior Engineer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px]">Ajou University</span>
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px] ">B.S</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] border-[0.5] rounded-[21px] border-white w-[203px] h-[174px] bg_gradient_5 pt-[17px] pl-[16px]">
              <div className="flex gap-[7px]">
                <div className="flex flex-col items-center justify-center border rounded-[14px] border-white">
                  <Image src="/img_manager.png" alt="img_manager" width={72} height={72} />
                </div>
                <div className="relative flex flex-col">
                  <a
                    href="https://www.linkedin.com/in/diana-kim-meta/"
                    target="_blank"
                    className="absolute top-0 right-0"
                  >
                    <Image src="/img_linked_in_color.png" alt="icon_linkedin" width={20} height={20} />
                  </a>
                  <strong className="text-[14px] font-normal leading-[25px] tracking-[-0.1px]">Jihyun</strong>
                  <span className="text-[14px] font-light leading-[15px] tracking-[-0.1px] whitespace-pre">
                    {`Business Dev.\nTeam Manager`}
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-[164px]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px]">Hansol</span>
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px] ">Team Manager</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px]">PA-O</span>
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px] ">Manager</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-light leading-[15px] tracking-[-0.1px]">Chongshin University</span>
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px] ">M.A</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px]">Inha University</span>
                  <span className="text-[10px] font-normal leading-[15px] tracking-[-0.1px] ">B.S</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="MILESTONES" className="flex flex-col items-center gap-[50px] mb-[321px]">
        <div className="flex flex-col gap-[50px] items-center">
          <div className="flex flex-col gap-[15px] items-center ">
            <p className="text_gradient_1 text-[40px] font-light leading-[45px] tracking-[-0.1px]">MILESTONES</p>
            <p className=" text-[30px] font-light leading-[45px] tracking-[-0.1px]">
              Defining the Key moments in our journey
            </p>
          </div>
        </div>
        <a
          className="flex justify-center items-center btn_gradient_1 w-[107px] h-[36px] border rounded-[29px] text-white text-[10px] font-light leading-[20px] tracking-[-0.1px] px-[25px] 
         "
          href="https://meta-mobility.notion.site/milestones"
          target="_blank"
        >
          MORE
        </a>
      </section>
      <section id="PRESS" className="flex flex-col items-center gap-[50px] mb-[333px]">
        <div className="flex flex-col gap-[50px] items-center">
          <div className="flex flex-col gap-[15px] items-center ">
            <p className="text_gradient_1 text-[40px] font-light leading-[45px] tracking-[-0.1px]">PRESS</p>
            <p className=" text-[30px] font-light leading-[45px] tracking-[-0.1px]">
              Showcasing our technology and impact​
            </p>
          </div>
        </div>
        <a
          className="flex justify-center btn_gradient_1 w-[107px] h-[36px] border rounded-[29px] text-white text-[10px] font-light leading-[20px] tracking-[-0.1px] px-[25px] items-center
         "
          href="https://meta-mobility.notion.site/press"
          target="_blank"
        >
          MORE
        </a>
      </section>
      <section id="INQUIRY" className="flex flex-col items-center gap-[50px] gradient_footer">
        <div className="flex flex-col gap-[50px] items-center">
          <div className="flex flex-col gap-[15px] items-center ">
            <p className="text_gradient_1 text-[40px] font-light leading-[45px] tracking-[-0.1px]">INQUIRY</p>
            <p className=" text-[30px] font-light leading-[45px] tracking-[-0.1px]">
              Opportunities await - Start the conversation with our team
            </p>
          </div>
        </div>
        <Form />
        <footer className="relative flex flex-col items-center gap-[35px] mt-[200px] ">
          <div className="flex gap-[48px] items-center">
            <Image src="/img_symbol.png" alt="img_symbol" width={72} height={79} />
            <div className="flex gap-[30px]">
              <div className="flex flex-col">
                <strong className="text-[13px] font-normal leading-[45px] tracking-[-0.1px] text-[#AD70B6]">
                  OFFICE
                </strong>
                <p className="w-[150px] text-[13px] font-light leading-[17px] tracking-[-0.1px]">
                  701 TIPS TOWN S1 bldg., 169 Yeoksam-ro, Gangnam-gu, Seoul, South Korea 06247
                </p>
              </div>
              <div>
                <strong className="text-[13px] font-normal leading-[45px] tracking-[-0.1px] text-[#AD70B6]">
                  R&D LAB
                </strong>
                <p className="w-[170px] text-[13px] font-light leading-[17px] tracking-[-0.1px]">
                  1001 Kowoon Institute of Technology Innovation center, 17 Wauan-gil, Bongdam-eup, Hwaseong-si,
                  Gyeonggi-do, South Korea 18323
                </p>
              </div>
              <div>
                <strong className="text-[13px] font-normal leading-[45px] tracking-[-0.1px] text-[#AD70B6]">
                  OFFICE
                </strong>
                <p className="w-[140px] text-[13px] font-light leading-[17px] tracking-[-0.1px]">
                  T. +82-2-6246-2281~2 F. +82-2-6246-2283 info@meta-mobility.io
                </p>
              </div>
              <div>
                <strong className="text-[13px] font-normal leading-[45px] tracking-[-0.1px] text-[#AD70B6]">
                  FOLLOW US
                </strong>
                <div className="flex gap-[4px]">
                  <a href="https://www.linkedin.com/company/meta-mobility/about/" target="_blank">
                    <Image src="/icon_linkedin.svg" alt="icon_linkedin" width={30} height={30} />
                  </a>
                  <a href="https://www.youtube.com/@METAxMOBILITY" target="_blank">
                    <Image src="/icon_youtube.svg" alt="icon_youtube" width={30} height={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[12px] font-light leading-[45px] tracking-[-0.1px] text-[#AD70B6]">
            Meta Mobility Inc. © 2025 All rights reserved.​
          </p>
          <ArrowBtn />
        </footer>
      </section>
    </div>
  )
}
