import React, { useState, useEffect } from 'react';
import { Cake, Gift, PartyPopper, Sparkles, Star, Heart } from 'lucide-react';

// Custom CSS/Tailwind for background pattern and animations
const customStyles = `
  @keyframes confetti-fall {
    0% { transform: translateY(-100vh) rotate(0deg); opacity: 0; }
    20% { opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0.5; }
  }

  .confetti-piece {
    position: absolute;
    width: 8px;
    height: 12px;
    background-color: var(--color);
    animation: confetti-fall var(--duration) linear infinite;
    border-radius: 2px;
  }

  /* Simulating a cake/party pattern using radial gradients and shapes */
  .birthday-background {
    background-color: #fce7f3; /* Light Pink Base */
    background-image: 
        radial-gradient(circle at 10% 20%, #f9a8d4 5%, transparent 5%), /* Pink Dots */
        radial-gradient(circle at 70% 85%, #fcd34d 5%, transparent 5%), /* Yellow Dots */
        linear-gradient(135deg, #a5b4fc 25%, transparent 25%) -50px 0, /* Blue Stripes 1 */
        linear-gradient(45deg, #a5b4fc 25%, transparent 25%) -50px 0, /* Blue Stripes 2 */
        linear-gradient(-135deg, #f87171 25%, transparent 25%) 0 0, /* Red Stripes 1 */
        linear-gradient(-45deg, #f87171 25%, transparent 25%) 0 0; /* Red Stripes 2 */
    background-size: 100px 100px;
    opacity: 0.9;
  }
`;

const Confetti = () => {
  const pieces = Array.from({ length: 50 }).map((_, i) => {
    const color = ['#f87171', '#fcd34d', '#34d399', '#6366f1', '#f9a8d4'][i % 5];
    const duration = `${Math.random() * 3 + 5}s`;
    const left = `${Math.random() * 100}vw`;
    const delay = `-${Math.random() * 5}s`;

    return (
      <div
        key={i}
        className="confetti-piece"
        style={{
          '--color': color,
          '--duration': duration,
          left,
          animationDelay: delay,
          height: `${Math.random() * 10 + 5}px`,
          width: `${Math.random() * 6 + 3}px`,
          borderRadius: `${Math.random() > 0.5 ? '50%' : '2px'}`,
        }}
      />
    );
  });

  return <>{pieces}</>;
};

// Array of common birthday-themed image placeholder URLs
const birthdayImages = [
    'https://placehold.co/400x300/fecaca/991b1b?text=Cake+Time',
    'https://placehold.co/300x450/fff7ed/9a3412?text=Balloons',
    'https://placehold.co/500x250/bfdbfe/1d4ed8?text=Presents!',
    'https://placehold.co/400x400/d1fae5/065f46?text=Party',
];
const handleClick = (i) => () => {
    console.log("Clicked image index:", i);
}

const BirthdayImage = ({ src, alt, className,i }) => (
    console.log("Rendering image:", i),
    <img
        src={src}
        alt={alt}
        className={`w-full h-auto object-cover rounded-xl shadow-lg transition duration-300 hover:scale-[1.03] ${className}`}
        // Fallback for image loading issues
        onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/400x300/cccccc/000000?text=Birthday+Pic';
        }}
        loading="lazy"
        onClick={handleClick(i)}
    />
);

const DecorativeIcon = ({ Icon, size = 36, color = "text-yellow-400", delay = 0 }) => (
    <div
        className={`absolute animate-bounce-slow transition-opacity duration-1000`}
        style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${Math.random() * 5 + 3}s`,
        }}
    >
        <Icon size={size} className={`${color} drop-shadow-lg`} strokeWidth={1.5} />
    </div>
);


const Birthday = () => {
    const [isMounted, setIsMounted] = useState(false);

    // Effect to trigger animations once component is in the DOM
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const decorativeIcons = [
        { Icon: PartyPopper, color: "text-red-500", delay: 0.5, size: 40 },
        { Icon: Gift, color: "text-green-500", delay: 1.2, size: 50 },
        { Icon: Sparkles, color: "text-yellow-300", delay: 2.0, size: 60 },
        { Icon: Cake, color: "text-pink-500", delay: 0.1, size: 45 },
        { Icon: Star, color: "text-indigo-400", delay: 2.5, size: 35 },
        { Icon: Heart, color: "text-red-400", delay: 0.8, size: 55 },
    ];
    const arr=["Abhishek Rohilla","AaasssSSssO00OO","Mittarrrr","Rohilla SHaaAAaab","Aaasso00oOo bhatnagar","Chutttrrrrrr"  ]    
    const [names,setNames]=useState(arr[0]);      
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setNames(arr[index]);
    }, [index]);

    const handleClick = () => {
        setIndex((i) => (i + 1) % arr.length);
    };

    return (
        <>
            <style>{customStyles}</style>
            <div className="min-h-screen p-4 sm:p-8 flex flex-col items-center justify-center font-['Inter'] relative overflow-hidden birthday-background">

                {/* Confetti Layer */}
                <Confetti />

                {/* Decorative Icons */}
                {decorativeIcons.map((props, index) => (
                    <DecorativeIcon key={index} {...props} />
                ))}

                {/* Main Content Card */}
                <div 
                    className={`
                        w-full max-w-4xl p-6 sm:p-10 bg-white/90 backdrop-blur-sm rounded-3xl 
                        shadow-2xl border-4 border-yellow-400 text-center relative z-10
                        transition-transform duration-1000 ease-out 
                        ${isMounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}
                    `}
                >
                    {/* Header */}
                    <div className="mb-8">
                        <PartyPopper size={64} className="text-pink-600 mx-auto mb-4 animate-ping-once" />
                        <h1 className="text-4xl sm:text-6xl font-extrabold text-indigo-700 leading-tight tracking-tighter drop-shadow-md">
                            Happy Birthday!
                        </h1>
                        <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mt-2" onClick={handleClick} style={{cursor:'pointer'}}>
                            {names} 🎉
                        </h2>
                    </div>

                    {/* Cake/Celebration Visuals Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
                        <div className="col-span-1 lg:col-span-2 flex flex-col justify-center items-center p-4 bg-yellow-50 rounded-xl shadow-inner">
                            <Cake size={80} className="text-red-500 animate-pulse" />
                            <p className="mt-2 text-lg font-semibold text-gray-700">Make a Wish!</p>
                        </div>
                        
                        {birthdayImages.map((src, index) => (
                            <BirthdayImage
                                key={index}
                                onClick={()=>{index}}
                                src={src}
                                alt={`Birthday Image ${index + 1}`}
                                className={index === 0 ? 'lg:col-span-2 sm:col-span-2' : ''}

                            />
                        ))}
                        
                        <div className="col-span-1 lg:col-span-4 p-4 bg-indigo-50 rounded-xl">
                            <p className="text-xl font-medium text-indigo-800 italic">
                                Wishing you a day filled with immense joy, laughter, and all your favorite things!
                            </p>
                        </div>
                    </div>

                    {/* Footer / Signature */}
                    <div className="mt-8 pt-4 border-t border-gray-200">
                        <Gift size={40} className="text-purple-500 mx-auto animate-float" />
                    </div>
                </div>

                {/* Tailwind Utility for custom animation */}
                <style jsx="true">{`
                    @keyframes ping-once {
                        0% { transform: scale(1); opacity: 0.8; }
                        50% { transform: scale(1.1); opacity: 1; }
                        100% { transform: scale(1); opacity: 0.8; }
                    }
                    @keyframes float {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-10px); }
                    }
                    .animate-ping-once { animation: ping-once 2s infinite ease-in-out; }
                    .animate-float { animation: float 3s infinite ease-in-out; }
                    .animate-bounce-slow { animation: bounce 10s infinite; }
                `}</style>
            </div>
        </>
    );
};


export default Birthday;