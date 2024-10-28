import Header from "../compoents/Header/Header";
import Link from "next/link"
export default function page() {
  return (
      <>
    <div className="main min-h-[100vh] bg-bgColor w-screen">
      <Header/>
      <div className="heading text-main   text-center text-5xl p-5 font-bold mb-4">
        <h2>About Us</h2>
      </div>
      <div className="heading  text-main   text-center text-5xl p-5 font-bold mb-4">
        <h2>Services</h2>
      </div>
      <div className="box w-full flex justify-center ">
      <div className="para p-2 w-[80%] text-text">
        <h2 className="text-xl font-bold">Introduction:</h2>
        As a committed imaginative expert spend significant time in front-end web advancement and UI/UX plan, I influence a different range of abilities that incorporates HTML, CSS, JavaScript, TypeScript, Next.js, Tailwind CSS, ShadCN UI, and Radix UI. My attention is on making outwardly engaging and easy to understand sites that consistently incorporate style with usefulness. Moreover, I use Figma for natural UI plan and have skill in video altering to make connecting with visual stories. This special blend of specialized and inventive capacities empowers me to convey creative computerized arrangements that enrapture crowds and hoist brand encounters.
        <h2 className="mt-5 text-xl font-bold">Front-end Web Development:</h2>
        We specialize  in front-end improvement, conveying client driven sites that upgrade your internet based presence and surpass assumptions. Our obligation to client fulfillment drives us to use the most recent advances, including HTML, CSS, JavaScript, and TypeScript, guaranteeing powerful and responsive plans custom fitted to your requirements. By utilizing systems like Next.js and libraries, for example, Respond, we make dynamic web applications that give an outstanding client experience. Our mastery in Tailwind CSS, ShadCN UI, and Radix UI empowers us to create outwardly staggering and natural connection points. With an emphasis on responsiveness and authority, we guarantee that each task meets as well as surpasses industry principles, making drawing in computerized arrangements that reverberate with your crowd and raise your image. Join forces with us to change your vision into the real world and make enduring progress in the computerized scene.
        <h2 className="mt-5 text-xl font-bold">UI/UX Design:</h2>
        Our UI/UX configuration administrations are devoted to making instinctive and connecting with client encounters that enthrall and hold your crowd. We utilize a client focused plan approach, using instruments like Figma to foster outwardly engaging and utilitarian points of interaction that line up with your image character. By joining stylish plan with consistent ease of use, we guarantee that each cooperation feels normal and fulfilling for clients. Our obligation to responsiveness ensures that plans perform faultlessly across all gadgets, upgrading client commitment and fulfillment. With an emphasis on exploration and approval, we focus on grasping your crowd's requirements, empowering us to convey custom-made arrangements that meet as well as surpass assumptions. Trust us to raise your computerized presence through imaginative UI/UX plan that resounds with clients and encourages faithfulness, making your image hang out in a serious scene.
        <h2 className=" mt-5 text-xl font-bold">Video Editing:</h2>
        Our video altering administrations are intended to change your crude film into dazzling visual stories that draw in and resound with your crowd. Using industry-driving programming, we carefully make top notch recordings that mirror your extraordinary vision and brand personality. From special clasps to artistic stories, our altering cycle underlines clearness, cognizance, and inventiveness, guaranteeing that each undertaking really conveys your message. We focus on tender loving care, utilizing strategies, for example, variety evaluating, sound plan, and consistent advances to improve the general creation quality. Focused on responsiveness and client fulfillment, we team up intimately with you all through the altering venture, making changes in view of your criticism to surpass assumptions. Whether you really want content for online entertainment, advertising efforts, or exceptional occasions, our video altering administrations are custom-made to raise your narrating and charm your crowd, at last driving commitment and brand steadfastness.
      </div>
      </div>
      <div className="flex justify-center p-5">
      <Link href={"/home#footer"}> <button className="px-6 py-2 bg-main hover:shadow-main hover:shadow-md text-bgColor rounded-full hover:bg-opacity-80 transition-colors duration-300">
                  Contact Us
                </button></Link> 
              </div>
     </div>
    
    </>
  )
}
