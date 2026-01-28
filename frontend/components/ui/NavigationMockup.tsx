"use client";

import { MapPin, Clock, ChevronRight } from "lucide-react";

export function NavigationMockup() {
  return (
    <div className="w-full h-full min-h-[400px] bg-gradient-to-b from-[#e8f0fe] to-[#d4e4fc] flex flex-col overflow-hidden">
      {/* Map Area */}
      <div className="flex-[2] relative bg-[#e8f0fe] overflow-hidden min-h-[180px]">
        {/* Simplified map background */}
        <div className="absolute inset-0">
          {/* Streets grid */}
          <div className="absolute inset-0 opacity-30">
            {/* Horizontal streets */}
            <div className="absolute top-[20%] left-0 right-0 h-[2px] bg-white"></div>
            <div className="absolute top-[45%] left-0 right-0 h-[3px] bg-[#feefc3]"></div>
            <div className="absolute top-[70%] left-0 right-0 h-[2px] bg-white"></div>
            {/* Vertical streets */}
            <div className="absolute left-[25%] top-0 bottom-0 w-[2px] bg-white"></div>
            <div className="absolute left-[55%] top-0 bottom-0 w-[3px] bg-[#feefc3]"></div>
            <div className="absolute left-[80%] top-0 bottom-0 w-[2px] bg-white"></div>
          </div>

          {/* Route line */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M 50 95 L 50 45 L 75 45 L 75 20"
              fill="none"
              stroke="#4285f4"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Dotted upcoming route */}
            <path
              d="M 75 20 L 75 10"
              fill="none"
              stroke="#4285f4"
              strokeWidth="3"
              strokeDasharray="2,2"
              strokeLinecap="round"
            />
          </svg>

          {/* Current location marker */}
          <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2">
            <div className="w-5 h-5 bg-[#4285f4] rounded-full border-2 border-white shadow-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Turn indicator */}
          <div className="absolute top-[42%] left-[47%]">
            <div className="w-4 h-4 bg-[#4285f4] rounded-full border-2 border-white shadow"></div>
          </div>

          {/* Destination marker */}
          <div className="absolute top-[10%] right-[20%]">
            <div className="flex flex-col items-center">
              <MapPin className="w-7 h-7 text-red-500 fill-red-500 drop-shadow-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Direction Card */}
      <div className="bg-white rounded-t-2xl shadow-lg p-4 flex-1">
        {/* Current direction */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-11 h-11 bg-[#4285f4] rounded-xl flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500">In 50m</p>
            <p className="text-sm font-semibold text-gray-900 truncate">Turn right onto Queen St</p>
          </div>
        </div>

        {/* ETA bar */}
        <div className="flex items-center justify-between bg-gray-50 rounded-xl p-2.5">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-green-600" />
            <span className="text-xs font-medium text-green-600">3 min</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <span className="text-xs">350m</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        {/* Restaurant destination */}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-sm">🍕</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-900 truncate">Mario&apos;s Pizzeria</p>
            <p className="text-[10px] text-gray-500">20% off • Ends in 2h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationMockup;
