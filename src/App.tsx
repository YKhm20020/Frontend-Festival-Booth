import '../styles/globals.css';
import { Header } from './components/Header/Header';
import { ToIntroductionPageButton } from './components/Buttons/ToIntroductionPageButton';
import { ToProductsPageButton } from './components/Buttons/ToProductsPageButton';
import { ToPostIntroductionPageButton } from './components/Buttons/ToPostIntroductionPageButton';
import { ToPostProductsPageButton } from './components/Buttons/ToPostProductsPageButton';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50">
      {/* Header */}
      <div className='animate-fade-in'>
        <Header />
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row h-screen items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 px-4">
        {/* Left Section with Image */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <img
            src="/images/OnFES.png"
            alt="Rotating"
            className="animate-rotate-in-2-cw w-96 h-96"
          />
        </div>

        {/* Right Section with Buttons */}
        <div className="lg:w-1/2 flex flex-col space-y-4 animate-fade-in">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            さあ、繋がろう
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <ToIntroductionPageButton>
              自己紹介を見る
            </ToIntroductionPageButton>
            <ToProductsPageButton>
              成果物を見る
            </ToProductsPageButton>
            <ToPostIntroductionPageButton>
            自己紹介を投稿する
            </ToPostIntroductionPageButton>
            <ToPostProductsPageButton>
            成果物を投稿する
            </ToPostProductsPageButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
