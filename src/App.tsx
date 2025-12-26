import { NavLink, Outlet } from "react-router";
import {
  Home,
  GraduationCap,
  Mic,
  User, ListMusic
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* SIDEBAR */}
      <aside className="hidden lg:flex w-72 bg-white border-r border-slate-100 flex-col sticky top-0 h-screen p-8">
        <h1 className="text-2xl font-black text-[#22C55E] italic tracking-tighter mb-10">
          SpeakUp.
        </h1>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-4 px-6 py-4 rounded-2xl font-black transition
     ${isActive ? "bg-green-50 text-[#22C55E]" : "text-slate-500 hover:bg-slate-50"}`
          }
        >
          <Home size={22} />
          Home
        </NavLink>

        <NavLink
          to="/audio-player"
          className={({ isActive }) =>
            `flex items-center gap-4 px-6 py-4 rounded-2xl font-black transition
     ${isActive ? "bg-green-50 text-[#22C55E]" : "text-slate-500 hover:bg-slate-50"}`
          }
        >
          <ListMusic size={22} />
          Player
        </NavLink>

      </aside>

      {/* PAGE */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>

      {/* Bottom Nav (Mobile) */}
      <nav className="lg:hidden fixed bottom-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-100 flex justify-around py-4 z-50">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition
       ${isActive ? "text-[#22C55E]" : "text-slate-400"}`
          }
        >
          <Home size={24} />
          <span className="text-[10px] font-black">Home</span>
        </NavLink>

        <NavLink
          to="/learn"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition
       ${isActive ? "text-[#22C55E]" : "text-slate-400"}`
          }
        >
          <GraduationCap size={24} />
          <span className="text-[10px] font-black">Learn</span>
        </NavLink>

        <NavLink
          to="/audio-player"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition
       ${isActive ? "text-[#22C55E]" : "text-slate-400"}`
          }
        >
          <Mic size={24} />
          <span className="text-[10px] font-black">Player</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition
       ${isActive ? "text-[#22C55E]" : "text-slate-400"}`
          }
        >
          <User size={24} />
          <span className="text-[10px] font-black">Profile</span>
        </NavLink>

      </nav>


    </div>
  );
}

export default App;
