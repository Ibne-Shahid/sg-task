
import {
    Video,
    Phone,
    BookOpen,
    Bot,
    ChevronRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Story } from './types/index';


const STORIES: Story[] = [
    { id: '1', title: 'Choosing the Right Path', imageUrl: 'https://ik.imagekit.io/storybird/images/df8f6fb5-0017-485f-a38c-2b633f321fed/0_604321479.webp?tr=q-80' },
    { id: '2', title: 'The Fountain and the Mayor', imageUrl: 'https://www.sawanonlinebookstore.com/zubyheet/2022/03/77-4.jpg' },
    { id: '3', title: 'The Lesson of the Tree', imageUrl: 'https://static.vecteezy.com/system/resources/previews/069/028/206/non_2x/cute-boy-playing-hide-and-seek-behind-tree-vector.jpg' },
];

const actions: { icon: LucideIcon; label: string; color: string }[] = [
    { icon: Video, label: 'Video', color: 'bg-blue-50 text-blue-500' },
    { icon: Phone, label: 'Calls', color: 'bg-red-50 text-red-500' },
    { icon: BookOpen, label: 'Stories', color: 'bg-orange-50 text-orange-500' },
    { icon: Bot, label: 'AI', color: 'bg-purple-50 text-purple-500' },
];


const HomeScreen = () => {
    return (
        <div className="bg-[#FDFDFD] pb-24 lg:pb-12">

            

            {/* --- MAIN CONTENT --- */}
            <main className="flex-1 pb-24 lg:pb-12">

                {/* Green Header */}
                <div className="bg-[#22C55E] p-6 pt-12 lg:m-6 lg:rounded-[3rem] text-white relative overflow-hidden rounded-b-[2.5rem]">
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <div className='flex items-center gap-5'>
                                <img src="https://img.freepik.com/premium-vector/boy-with-shirt-that-says-hes-character_1230457-45561.jpg?semt=ais_hybrid&w=740&q=80" className='h-24 w-24 rounded-full' alt="" />
                                <div>
                                    <p className="text-[10px] font-black uppercase opacity-70 tracking-widest">Good Night</p>
                                    <h2 className="text-2xl font-black">Lorenzo</h2>
                                </div>
                            </div>
                            <div className="mt-6 bg-black/10 p-4 rounded-3xl border border-white/10 w-70 lg:w-87.5">
                                <p className="text-[9px] font-black uppercase mb-2">XP Progress</p>
                                <div className="w-full bg-black/10 h-2.5 rounded-full overflow-hidden">
                                    <div className="bg-white h-full w-[42%] rounded-full shadow-lg" />
                                </div>
                                <div className="flex justify-between mt-2 text-[10px] font-black">
                                    <span>242 XP</span>
                                    <span className="opacity-60">Next: L4</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-black">💎 30</div>
                            <div className="bg-orange-500 px-3 py-1 rounded-full text-[10px] font-black">PRO</div>
                        </div>
                    </div>
                </div>

                {/* 4 Quick Actions (Floating icons) */}
                <div className="px-6 -mt-4 lg:mt-6 relative z-20 flex justify-between lg:justify-start lg:gap-12">
                    {actions.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <div key={i} className="flex flex-col items-center gap-2">
                                <div
                                    className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center ${item.color} shadow-xl border-4 border-white`}
                                >
                                    <Icon size={24} />
                                </div>

                                <span className="text-[9px] font-black text-slate-400 uppercase">
                                    {item.label}
                                </span>
                            </div>
                        );
                    })}
                </div>


                <div className="max-w-6xl mx-auto">
                    {/* 1. Audio Stories */}
                    <section className="mt-10 px-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-black text-slate-800 text-sm uppercase flex items-center gap-2">
                                <div className="w-1.5 h-4 bg-green-500 rounded-full"></div> Audio Stories
                            </h2>
                            <button className="text-[#22C55E] text-[10px] font-black flex items-center">Show all <ChevronRight size={14} /></button>
                        </div>
                        <div className="flex overflow-x-auto gap-4 no-scrollbar pb-4">
                            {STORIES.map(s => (
                                <div key={s.id} className="min-w-37.5 lg:flex-1">
                                    <div className="h-48 rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white">
                                        <img src={s.imageUrl} className="w-full h-full object-cover" alt={s.title} />
                                    </div>
                                    <p className="mt-3 text-[11px] font-black text-slate-700 px-1">{s.title}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 2. Practice with Humans */}
                    <section className="mt-10 px-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-black text-slate-800 text-sm uppercase flex items-center gap-2">
                                <div className="w-1.5 h-4 bg-purple-500 rounded-full"></div> Practice with Humans
                            </h2>
                            <button className="text-[#22C55E] text-[10px] font-black">Show all</button>
                        </div>

                        <div className="flex overflow-x-auto gap-4 no-scrollbar pb-4">
                            <div className="min-w-[320px] lg:flex-1 relative rounded-[2.5rem] overflow-hidden h-52 shadow-2xl shadow-slate-200 border-4 border-white">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0i-ZcryhgwMt4kIbkUI61tlFJH6q0VEJNvA&s" className="w-full h-full object-cover" alt="Human practice" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent p-6 flex flex-col justify-end">
                                    <span className="bg-orange-500 text-white text-[9px] font-black px-3 py-1 rounded-full w-fit mb-2">BE FIRST!</span>
                                    <h3 className="text-white font-black text-xl">Favorite Animals</h3>
                                    <p className="text-white/70 text-[10px] mb-4">Talk about your favorite animals and pets</p>
                                    <button className="bg-white text-slate-900 py-3 rounded-2xl font-black text-xs shadow-lg active:scale-95 transition-all">Join & Start Call</button>
                                </div>
                            </div>
                            <div className="min-w-[320px] lg:flex-1 relative rounded-[2.5rem] overflow-hidden h-52 shadow-2xl shadow-slate-200 border-4 border-white">
                                <img src="https://thumbs.dreamstime.com/b/illustration-diverse-team-superhero-kids-colorful-costumes-capes-masks-emblems-cartoon-children-flying-421872417.jpg" className="w-full h-full object-cover" alt="Human practice" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent p-6 flex flex-col justify-end">
                                    <span className="bg-orange-500 text-white text-[9px] font-black px-3 py-1 rounded-full w-fit mb-2">BE FIRST!</span>
                                    <h3 className="text-white font-black text-xl">Favorite Superheroes</h3>
                                    <p className="text-white/70 text-[10px] mb-4">Talk about your favorite Superheroes</p>
                                    <button className="bg-white text-slate-900 py-3 rounded-2xl font-black text-xs shadow-lg active:scale-95 transition-all">Join & Start Call</button>
                                </div>
                            </div>

                            <div className="min-w-[320px] lg:flex-1 relative rounded-[2.5rem] overflow-hidden h-52 bg-slate-100 flex items-center justify-center border-4 border-dashed border-slate-200">
                                <p className="text-slate-400 font-bold text-xs tracking-tighter uppercase">More Topics Coming Soon</p>
                            </div>
                        </div>
                    </section>

                    {/* 3. Practice with AI */}
                    <section className="mt-10 px-6 mb-10">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-black text-slate-800 text-sm uppercase flex items-center gap-2">
                                <div className="w-1.5 h-4 bg-blue-500 rounded-full"></div> Practice with AI
                            </h2>
                            <button className="text-[#22C55E] text-[10px] font-black uppercase">Show all</button>
                        </div>

                        <div className="flex overflow-x-auto gap-4 no-scrollbar pb-6">
                            {[
                                {
                                    name: 'Doraemon',
                                    color: 'bg-blue-50',
                                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6CqSYoCg-z5OVkt4JuOnd7hxKiGhzR7v5A&s'
                                },
                                {
                                    name: 'Spider-man',
                                    color: 'bg-red-50',
                                    image: 'https://cdna.artstation.com/p/assets/images/images/059/617/796/large/mihail-gabrian-spider-5.jpg?1676790071'
                                },
                                {
                                    name: 'Iron-man',
                                    color: 'bg-slate-50',
                                    image: 'https://static.geekplace.shop/12424-medium_default/poster-framed-ironman-3d-print-30x40cm.jpg'
                                },
                                {
                                    name: 'Batman',
                                    color: 'bg-zinc-100',
                                    image: 'https://cdna.artstation.com/p/assets/images/images/083/182/890/large/romart3d-render1.jpg?1735044461'
                                }
                            ].map((ai, i) => (
                                <div key={i} className={`${ai.color} p-6 rounded-[3rem] min-w-45 lg:flex-1 border-4 border-white shadow-xl shadow-slate-100 flex flex-col items-center gap-4 transition-transform active:scale-95`}>
                                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-inner shadow-slate-100">
                                        <img
                                            src={ai.image}
                                            alt={ai.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Talk with</p>
                                        <h4 className="font-black text-slate-800 text-sm">{ai.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            
        </div>
    );
};

export default HomeScreen;