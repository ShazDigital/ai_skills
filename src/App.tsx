import { SkillProvider } from "./context/SkillContext";
import Header from "./components/Header";
import AITermsMarquee from "./components/AITermsMarquee";
import SkillsContainer from "./components/SkillsContainer";
import ShareSection from "./components/ShareSection";
import Footer from "./components/Footer";

function App() {
  return (
    <SkillProvider>
      {/* <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 flex flex-col">
        <div className="[&>*]:grainy flex-grow flex flex-col"> */}
      <div className="min-h-screen bg-[#FFFFFE]  flex flex-col">
        <div className=" flex-grow flex flex-col">
          <AITermsMarquee />
          <Header />
          <main className="flex-grow">
            <SkillsContainer />
            <div className="flex items-center justify-center my-24">
              <ShareSection showLink={true} />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </SkillProvider>
  );
}

export default App;
