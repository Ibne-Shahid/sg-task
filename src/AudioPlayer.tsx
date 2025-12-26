import React, { useState } from 'react';
import { 
  FileText, Heart, Play, SkipBack, SkipForward, Repeat, 
  Volume2, ArrowLeft, Pause, ChevronUp, ChevronDown 
} from 'lucide-react';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col">

      {/* --- Top Bar --- */}
      <div className="p-4 border-b border-gray-100">
        <button className="flex items-center gap-2 text-gray-500 font-bold text-sm hover:text-gray-700">
          <ArrowLeft size={18} /> Back to Library
        </button>
      </div>

      {/* --- Main Player Content --- */}
      <main className="flex-1 p-6 pb-24">

        {/* Album Art */}
        <div className="w-full max-w-sm mx-auto aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-gray-100 mb-8">
          <img 
            src="https://source.boomplaymusic.com/group10/M00/10/15/116affd0acdf48ba8899e3434ed550c7H3000W3000_320_320.jpg" 
            className="w-full h-full object-cover" 
            alt="Album Art" 
          />
        </div>

        {/* Track Info */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1">
            <h1 className="text-2xl font-black text-gray-800 tracking-tight">The Melody of Friendship</h1>
            <p className="text-gray-400 font-medium italic mt-1">Chapter 1: The Unexpected Meeting</p>
          </div>
          <Heart size={28} className="text-gray-300 cursor-pointer hover:text-red-500 hover:fill-current transition-all" />
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="h-2 w-full bg-gray-100 rounded-full relative">
            <div className="absolute h-full w-1/3 bg-green-500 rounded-full">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-4 border-green-500 rounded-full shadow-lg"></div>
            </div>
          </div>
          <div className="flex justify-between mt-3 text-xs font-black text-gray-400 uppercase tracking-widest">
            <span>0:45</span>
            <span>2:18</span>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex justify-between items-center mb-10">
          <Volume2 className="text-gray-400" size={22} />
          <SkipBack className="text-gray-800 cursor-pointer" size={30} />
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-200 hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause size={40} /> : <Play size={40} className="ml-1" />}
          </button>
          <SkipForward className="text-gray-800 cursor-pointer" size={30} />
          <Repeat className="text-gray-400" size={22} />
        </div>

        {/* Transcript Toggle for Mobile */}
        <div className="lg:hidden border-t border-gray-100 pt-6">
          <button 
            onClick={() => setShowTranscript(!showTranscript)}
            className="w-full flex items-center justify-between text-gray-800 font-bold text-sm mb-4"
          >
            <span>Story Transcript</span>
            {showTranscript ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {/* Collapsible Transcript */}
          {showTranscript && (
            <div className="space-y-4 mb-8 animate-fadeIn">
              <p className="text-gray-500 text-sm leading-relaxed">
                Once upon a time in a small village, there was a boy named Lorenzo who loved music...
              </p>
              <p className="text-gray-800 text-sm leading-relaxed bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                "He found an old flute under the big oak tree and decided to play a melody that no one had ever heard before."
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                The birds stopped singing to listen to his tune. Even the mayor stopped his busy work...
              </p>
            </div>
          )}
        </div>

      </main>

      {/* --- Fixed Bottom Quiz Button (Mobile) --- */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-lg">
        <button className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-md">
          <FileText size={18} /> Take the Quiz (7 Questions)
        </button>
      </div>

      {/* --- Sidebar for Desktop (Hidden on Mobile) --- */}
      <div className="hidden lg:flex w-96 bg-gray-50/50 p-8 flex-col border-l border-gray-100">
        <h3 className="font-black text-gray-800 uppercase text-xs tracking-widest mb-6">Story Transcript</h3>
        <div className="flex-1 overflow-y-auto space-y-6 pr-4">
          <p className="text-gray-500 text-sm leading-relaxed">
            Once upon a time in a small village, there was a boy named Lorenzo who loved music...
          </p>
          <p className="text-gray-800 text-sm leading-relaxed bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
            "He found an old flute under the big oak tree and decided to play a melody that no one had ever heard before."
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            The birds stopped singing to listen to his tune. Even the mayor stopped his busy work...
          </p>
        </div>
        <button className="mt-8 w-full bg-white border-2 border-green-500 text-green-600 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-green-50 transition-colors">
          <FileText size={18} /> Take the Quiz (7 Qs)
        </button>
      </div>

    </div>
  );
};

export default AudioPlayer;