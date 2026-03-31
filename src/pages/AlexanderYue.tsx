// 1. Import the image from the Assets folder
import myPhoto from "../assets/AlexanderYue.jpeg";

export default function AlexanderYue() {
  return (
    /* 2. Use Flexbox to align name and image in a centered column */
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      
      {/* 3. Make header 24pt and bold  */}
      <h1 className="text-[24pt] font-bold">Alexander Yue</h1>

      <p>Hey, I'm Alexander Yue. I do high-energy physics at Stanford (co 2027) and work at Browser Use (YC W25).</p>

      {/* 4. Set image size to 100x100px  */}
      <img
        src={myPhoto}
        alt="Alexander"
        className="w-[100px] h-[100px] object-cover rounded-full"
      />

      {/* 5. GitHub Link*/}
      <a 
        href="https://github.com/Alezander9" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline font-medium"
      >
        View my GitHub Profile
      </a>
      
    </div>
  );
}
