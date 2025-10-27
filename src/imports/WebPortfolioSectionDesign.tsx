import svgPaths from "./svg-0z24vbr82d";
import imgHeroSection from "figma:asset/d1fa67ef1de19977489dd8c791ebb06e19174e02.png";

function HeroSection() {
  return (
    <div className="h-[225px] relative shrink-0 w-[2496.47px]" data-name="HeroSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[225px] relative w-[2496.47px]">
        <p className="absolute font-['Arimo:Bold',_sans-serif] font-bold leading-[225px] left-0 text-[225px] text-[rgba(0,0,0,0.15)] text-nowrap top-[-20px] tracking-[-11.25px] uppercase whitespace-pre">Yosua Elwitio Malau</p>
      </div>
    </div>
  );
}

function HeroSection1() {
  return (
    <div className="basis-0 grow h-[225px] min-h-px min-w-px relative shrink-0" data-name="HeroSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[225px] relative w-full">
        <p className="absolute font-['Arimo:Bold',_sans-serif] font-bold leading-[225px] left-0 text-[225px] text-[rgba(0,0,0,0.15)] text-nowrap top-[-20px] tracking-[-11.25px] uppercase whitespace-pre">Yosua Elwitio Malau</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[225px] relative shrink-0 w-[7649.41px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[80px] h-[225px] items-start relative w-[7649.41px]">
        {[...Array(2).keys()].map((_, i) => (
          <HeroSection key={i} />
        ))}
        <HeroSection1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[584px] left-0 top-0 w-[1110px]" data-name="Container">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[584px] items-center justify-center pl-0 pr-[1793.2px] py-0 relative w-[1110px]">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[104px] left-0 top-[407px] w-[220px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[26px] left-0 text-[16px] text-[rgba(0,0,0,0.6)] top-[-2px] w-[211px]">A passionate designer and developer based in Indonesia, crafting digital experiences with creativity and precision.</p>
    </div>
  );
}

function Paragraph1() {
  return <div className="absolute h-[104px] left-[830px] top-[160.5px] w-[220px]" data-name="Paragraph" />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[48.436px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
        <g clipPath="url(#clip0_23_458)" id="Icon">
          <path d={svgPaths.p1e43d480} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_23_458">
            <rect fill="white" height="48.436" width="48.436" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HeroSection2() {
  return (
    <button className="absolute box-border content-stretch cursor-pointer flex items-center justify-center left-[400px] overflow-visible p-0 rounded-[16px] shadow-[0px_10px_60px_0px_rgba(0,0,0,0.15)] size-[72.654px] top-[421px]" data-name="HeroSection">
      <Icon />
    </button>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[41.768px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="Icon">
          <path d={svgPaths.p1dfc500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroSection3() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[81px] rounded-[16px] shadow-[0px_10px_60px_0px_rgba(0,0,0,0.15)] size-[75.182px] top-[395px]" data-name="HeroSection">
      <Icon1 />
    </div>
  );
}

function HeroSection4() {
  return (
    <div className="absolute h-[731.25px] left-0 overflow-clip shadow-[0px_25px_50px_0px_rgba(0,0,0,0.15)] top-[-160px] w-[472.5px]" data-name="HeroSection">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgHeroSection} />
      <HeroSection2 />
      <HeroSection3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[45.428px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g clipPath="url(#clip0_23_448)" id="Icon">
          <path d={svgPaths.p108765b0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p19ae200} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p11ad0400} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p25bb8400} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3c903500} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_23_448">
            <rect fill="white" height="45.4282" width="45.4282" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HeroSection5() {
  return (
    <div className="h-[90.856px] relative rounded-[16px] shrink-0 w-full" data-name="HeroSection">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[90.856px] items-center justify-center relative w-full">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[-71.96px] shadow-[0px_10px_60px_0px_rgba(0,0,0,0.15)] size-[82.17px] top-[68.89px]" data-name="Container">
      <HeroSection5 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[48.214px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
        <g clipPath="url(#clip0_23_445)" id="Icon">
          <path d={svgPaths.p3bcb8d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_23_445">
            <rect fill="white" height="48.214" width="48.214" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HeroSection6() {
  return (
    <div className="h-[80.357px] relative rounded-[16px] shrink-0 w-full" data-name="HeroSection">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[80.357px] items-center justify-center relative w-full">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[433.56px] pb-0 pl-[6.014px] pr-[6.015px] pt-[6.015px] shadow-[0px_10px_60px_0px_rgba(0,0,0,0.15)] size-[92.386px] top-[122.98px]" data-name="Container">
      <HeroSection6 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[53.087px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
        <g id="Icon">
          <path d={svgPaths.p61fa7b0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1f128280} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function HeroSection7() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center left-[-77.14px] rounded-[16px] shadow-[0px_10px_60px_0px_rgba(0,0,0,0.15)] size-[84.94px] top-[303.63px]" data-name="HeroSection">
      <Icon4 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[38.129px] relative shrink-0 w-[29.039px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[38.129px] relative w-[29.039px]">
        <p className="absolute font-['Arimo:Bold',_sans-serif] font-bold leading-[36px] left-[0.17px] text-[24px] text-black text-nowrap top-[-2.01px] whitespace-pre">JS</p>
      </div>
    </div>
  );
}

function HeroSection8() {
  return (
    <div className="content-stretch flex h-[69.334px] items-center justify-center relative rounded-[16px] shrink-0 w-full" data-name="HeroSection">
      <Text />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[450.77px] shadow-[0px_10px_60px_0px_rgba(0,0,0,0.15)] size-[64px] top-[372.33px]" data-name="Container">
      <HeroSection8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[513px] left-[289px] top-[74px] w-[472px]" data-name="Container">
      <HeroSection4 />
      <Container2 />
      <Container3 />
      <HeroSection7 />
      <Container4 />
    </div>
  );
}

function HeroSection9() {
  return <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.2)] h-[56px] left-px rounded-[3.35544e+07px] to-[rgba(0,0,0,0)] top-px w-[151.656px]" data-name="HeroSection" />;
}

function HeroSection10() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.05)] h-[56px] left-px rounded-[3.35544e+07px] to-[rgba(0,0,0,0)] top-px w-[151.656px]" data-name="HeroSection" />;
}

function HeroSection11() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-[33px] top-[18px] w-[87.656px]" data-name="HeroSection">
      <p className="font-['Arimo:Bold',_sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">Connect Me</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.4)] h-[58px] left-[448px] rounded-[3.35544e+07px] top-[502.63px] w-[153.656px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.12)]" />
      <HeroSection9 />
      <HeroSection10 />
      <HeroSection11 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.8),0px_-1px_0px_0px_inset_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[532px] left-[30px] top-[26px] w-[1112px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[26px] left-[862px] text-[16px] text-[rgba(0,0,0,0.6)] top-[412px] w-[213px]">{`Bringing innovative ideas to life through thoughtful design and clean code. Let's create something amazing together.`}</p>
      <Container5 />
      <Button />
    </div>
  );
}

function HeroSection12() {
  return (
    <div className="absolute bg-white h-[584px] left-0 top-0 w-[1142px]" data-name="HeroSection">
      <Container1 />
      <Container6 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute h-[602px] left-0 top-0 w-[1142px]" data-name="App">
      <HeroSection12 />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-black h-[40px] relative rounded-[3.35544e+07px] shrink-0 w-[90.891px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[90.891px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-[24px] text-[16px] text-nowrap text-white top-[6px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[40px] relative rounded-[3.35544e+07px] shrink-0 w-[91.578px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[91.578px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-[24px] text-[16px] text-black text-nowrap top-[6px] whitespace-pre">About</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-full">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-[24px] text-[16px] text-black text-nowrap top-[6px] whitespace-pre">Projects</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[40px] relative rounded-[3.35544e+07px] shrink-0 w-[102.719px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[102.719px]">
        <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-[24px] text-[16px] text-black text-nowrap top-[6px] whitespace-pre">Contact</p>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] box-border content-stretch flex gap-[4px] h-[58px] items-center left-[346px] px-[9px] py-px rounded-[3.35544e+07px] top-[42px] w-[418.938px]" data-name="Navbar">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.1)]" />
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

export default function WebPortfolioSectionDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Web Portfolio Section Design">
      <App />
      <Navbar />
    </div>
  );
}