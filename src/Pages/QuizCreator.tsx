import React, { useState } from 'react';
import { ChevronLeft, Sparkles, Lightbulb, Zap, Target } from 'lucide-react';
import type { ChallengeLevel } from '../types';
import Swal from 'sweetalert2';

const QuizCreator: React.FC = () => {
    const [selectedTopic, setSelectedTopic] = useState('');
    const [level, setLevel] = useState<ChallengeLevel>('Medium');

    const topics = ["My Best Friend", "Cricket Basics", "Solar System", "Healthy Habits"];

    const handleQuizGenerator = () => {
        Swal.fire({
            title: "Success!",
            text: "Your quiz has been generated.",
            icon: "success",
            confirmButtonText: "OK"
        });
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col lg:flex-row">

            <main className="flex-1 overflow-y-auto">
                {/* Header: Phone-e SS style */}
                <div className="p-6 lg:p-12 max-w-5xl mx-auto">

                    <header className="mb-8 lg:mb-12">
                        <button className="flex items-center gap-1 text-[#22C55E] font-black text-sm mb-6 lg:mb-8 hover:-translate-x-1 transition-transform">
                            <ChevronLeft size={20} /> <span className="text-slate-800">Back</span>
                        </button>

                        <div className="bg-white p-6 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
                            <div className="relative z-10">
                                <span className="text-[10px] font-black text-[#22C55E] uppercase tracking-[0.2em]">Learn Tab</span>
                                <h2 className="text-2xl lg:text-4xl font-black text-slate-900 mt-2 tracking-tight">Craft a custom quiz</h2>
                                <p className="text-slate-400 text-xs lg:text-sm font-medium mt-2 max-w-md italic">Pick a topic, choose difficulty, and we'll build four fun questions instantly.</p>

                                <div className="flex gap-3 mt-6">
                                    <div className="bg-[#DCFCE7] text-[#16A34A] px-4 py-2 rounded-xl font-black text-[10px] flex items-center gap-2">
                                        <Sparkles size={14} /> AI POWERED
                                    </div>
                                    <div className="bg-slate-50 text-slate-400 px-4 py-2 rounded-xl font-black text-[10px]">
                                        4 QUESTIONS
                                    </div>
                                </div>
                            </div>
                            {/* Decor Circle */}
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-50 rounded-full blur-3xl opacity-50"></div>
                        </div>
                    </header>

                    {/* Grid Layout: Phone-e 1 column, PC-e 2 columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                        {/* STEP 1: Topic */}
                        <section className="space-y-4">
                            <div className="flex items-center gap-3 px-2">
                                <span className="w-7 h-7 bg-slate-800 text-white rounded-lg flex items-center justify-center text-[10px] font-black tracking-tighter">STEP 1</span>
                                <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest">Choose a topic</h3>
                            </div>

                            <div className="bg-white p-6 lg:p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 space-y-5">
                                <input
                                    type="text"
                                    placeholder="e.g. My school day"
                                    className="w-full p-5 bg-slate-50 border-2 border-transparent rounded-3xl focus:border-[#22C55E] focus:bg-white transition-all outline-none font-bold text-sm"
                                    value={selectedTopic}
                                    onChange={(e) => setSelectedTopic(e.target.value)}
                                />
                                <div className="flex flex-wrap gap-2">
                                    {topics.map(t => (
                                        <button
                                            key={t}
                                            onClick={() => setSelectedTopic(t)}
                                            className={`px-4 py-2 rounded-full text-[10px] font-black border-2 transition-all ${selectedTopic === t ? 'bg-[#22C55E] border-[#22C55E] text-white shadow-lg shadow-green-100' : 'bg-white border-slate-100 text-slate-400 hover:border-green-200'}`}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* STEP 2: Difficulty */}
                        <section className="space-y-4">
                            <div className="flex items-center gap-3 px-2">
                                <span className="w-7 h-7 bg-slate-800 text-white rounded-lg flex items-center justify-center text-[10px] font-black tracking-tighter">STEP 2</span>
                                <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest">Pick a challenge</h3>
                            </div>

                            <div className="space-y-3 lg:space-y-4">
                                {[
                                    { id: 'Easy', icon: <Lightbulb />, color: 'text-green-500', bg: 'bg-green-50', desc: 'Short sentences & simple words.' },
                                    { id: 'Medium', icon: <Zap />, color: 'text-yellow-500', bg: 'bg-yellow-50', desc: 'Detailed stories for practice.' },
                                    { id: 'Hard', icon: <Target />, color: 'text-red-500', bg: 'bg-red-50', desc: 'Complex grammar and logic.' }
                                ].map((l) => (
                                    <button
                                        key={l.id}
                                        onClick={() => setLevel(l.id as ChallengeLevel)}
                                        className={`w-full p-5 lg:p-6 rounded-4xl border-2 flex items-center gap-5 text-left transition-all ${level === l.id ? 'border-[#22C55E] bg-white shadow-xl shadow-green-100/50' : 'border-white bg-white hover:border-slate-50 shadow-sm'}`}
                                    >
                                        <div className={`p-3.5 rounded-2xl ${level === l.id ? l.bg : 'bg-slate-50'} ${l.color}`}>
                                            {React.cloneElement(l.icon as React.ReactElement<{ size: number }>, { size: 24 })}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-800 text-sm lg:text-base">{l.id}</h4>
                                            <p className="text-[10px] lg:text-xs text-slate-400 font-bold uppercase tracking-tight mt-0.5">{l.desc}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="bg-linear-to-br from-green-50 to-emerald-50 p-6 lg:p-8 rounded-[2.5rem] border border-green-100 shadow-sm mt-8">
                        <h4 className="font-black text-slate-800 text-sm mb-6 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            WHAT YOU'LL GET
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-3 bg-white/50 rounded-2xl">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div>
                                    <p className="text-slate-800 text-sm font-bold">Friendly quiz with instant feedback</p>
                                    <p className="text-slate-500 text-xs mt-0.5">Get immediate results after each question</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-3 bg-white/50 rounded-2xl">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div>
                                    <p className="text-slate-800 text-sm font-bold">Bite-sized explanations for every answer</p>
                                    <p className="text-slate-500 text-xs mt-0.5">Learn why an answer is correct or incorrect</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-3 bg-white/50 rounded-2xl">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div>
                                    <p className="text-slate-800 text-sm font-bold">AI automatically matches the learner's profile</p>
                                    <p className="text-slate-500 text-xs mt-0.5">Personalized difficulty based on performance</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Button: SS matching Bottom Floating */}
                    <div className="mt-12 lg:mt-16 pb-24 flex justify-center lg:justify-start">
                        <button
                            onClick={handleQuizGenerator}
                            disabled={!selectedTopic}
                            className={`w-full lg:w-auto px-16 py-5 rounded-4xl font-black text-sm tracking-widest text-white transition-all shadow-2xl ${selectedTopic ? 'bg-[#22C55E] shadow-green-200 hover:bg-green-600 scale-105 active:scale-95' : 'bg-slate-300 cursor-not-allowed opacity-50'}`}
                        >
                            GENERATE QUIZ NOW
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default QuizCreator;