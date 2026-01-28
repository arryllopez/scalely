"use client";

import { Bell, Heart, Star, Clock } from "lucide-react";

// Savings Receipt Mockup
export function SavingsMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-start pt-4 px-4">
      {/* Receipt */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-[180px] p-3 border border-gray-100">
        <div className="text-center border-b border-dashed border-gray-200 pb-2 mb-2">
          <p className="text-[10px] text-gray-400">Mario&apos;s Pizzeria</p>
        </div>

        <div className="space-y-1 text-[10px] mb-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Large Pizza</span>
            <span className="text-gray-400 line-through">$18.99</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Garlic Bread</span>
            <span className="text-gray-400 line-through">$5.99</span>
          </div>
        </div>

        <div className="border-t border-dashed border-gray-200 pt-2">
          <div className="flex justify-between text-[10px]">
            <span className="text-gray-500">Subtotal</span>
            <span className="text-gray-400 line-through">$24.98</span>
          </div>
          <div className="flex justify-between text-[10px] text-green-600 font-medium">
            <span>Trivvi Savings</span>
            <span>-$5.00</span>
          </div>
          <div className="flex justify-between text-sm font-bold mt-1">
            <span>Total</span>
            <span className="text-green-600">$19.98</span>
          </div>
        </div>

        <div className="mt-2 bg-green-100 rounded-md p-1.5 text-center">
          <p className="text-[10px] text-green-700 font-medium">You saved 20%!</p>
        </div>
      </div>

      {/* Fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

// Notifications Mockup
export function NotificationsMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-start pt-4 px-3 relative">
      {/* Notification Stack */}
      <div className="w-full max-w-[220px] space-y-2">
        {/* Notification 1 */}
        <div className="bg-white rounded-xl shadow-md p-3 border border-gray-100 transform -rotate-1">
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-sm">🍕</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-medium text-gray-900 truncate">Mario&apos;s Pizzeria</p>
              <p className="text-[10px] text-gray-500">20% off all pizzas • 350m away</p>
            </div>
            <span className="text-[9px] text-gray-400">2m</span>
          </div>
        </div>

        {/* Notification 2 */}
        <div className="bg-white rounded-xl shadow-md p-3 border border-gray-100 transform rotate-1">
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-sm">🍜</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-medium text-gray-900 truncate">Noodle House</p>
              <p className="text-[10px] text-gray-500">BOGO ramen today • 500m away</p>
            </div>
            <span className="text-[9px] text-gray-400">5m</span>
          </div>
        </div>

        {/* Notification 3 */}
        <div className="bg-white rounded-xl shadow-md p-3 border border-gray-100 opacity-60 transform -rotate-0.5">
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-sm">🌮</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-medium text-gray-900 truncate">Taco Town</p>
              <p className="text-[10px] text-gray-500">Happy hour: $2 tacos • 200m</p>
            </div>
            <span className="text-[9px] text-gray-400">12m</span>
          </div>
        </div>
      </div>

      {/* Fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

// Restaurant Support Mockup
export function RestaurantsMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-rose-50 to-white flex flex-col items-center justify-start pt-3 px-3 relative">
      {/* Restaurant Cards */}
      <div className="w-full max-w-[200px] space-y-2">
        {/* Restaurant 1 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="h-12 bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center">
            <span className="text-xl">🍕</span>
          </div>
          <div className="p-2">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium text-gray-900">Mario&apos;s Pizzeria</p>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              <span className="text-[10px] text-gray-600">4.8</span>
              <span className="text-[10px] text-gray-400">(120)</span>
            </div>
          </div>
        </div>

        {/* Restaurant 2 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden opacity-80">
          <div className="h-12 bg-gradient-to-r from-green-400 to-teal-400 flex items-center justify-center">
            <span className="text-xl">🥗</span>
          </div>
          <div className="p-2">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium text-gray-900">Green Bowl</p>
              <Heart className="w-3.5 h-3.5 text-gray-300" />
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              <span className="text-[10px] text-gray-600">4.6</span>
              <span className="text-[10px] text-gray-400">(89)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

// Personalized Deals Mockup
export function DealsFeedMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-purple-50 to-white flex flex-col items-center justify-start pt-3 px-3 relative">
      {/* Filter Pills */}
      <div className="flex gap-1.5 mb-3 w-full max-w-[220px]">
        <span className="px-2 py-0.5 bg-primary text-white text-[9px] rounded-full">All</span>
        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[9px] rounded-full">Pizza</span>
        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[9px] rounded-full">Asian</span>
        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[9px] rounded-full">Mexican</span>
      </div>

      {/* Deal Cards */}
      <div className="w-full max-w-[220px] space-y-2">
        {/* Deal 1 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2.5 flex gap-2">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-lg">🍕</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[8px] font-medium rounded">20% OFF</span>
              <Clock className="w-2.5 h-2.5 text-gray-400" />
              <span className="text-[8px] text-gray-400">2h left</span>
            </div>
            <p className="text-[10px] font-medium text-gray-900 mt-0.5 truncate">Mario&apos;s Pizzeria</p>
            <p className="text-[9px] text-gray-500">350m away</p>
          </div>
        </div>

        {/* Deal 2 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2.5 flex gap-2">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-lg">🍜</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[8px] font-medium rounded">BOGO</span>
              <Clock className="w-2.5 h-2.5 text-gray-400" />
              <span className="text-[8px] text-gray-400">4h left</span>
            </div>
            <p className="text-[10px] font-medium text-gray-900 mt-0.5 truncate">Noodle House</p>
            <p className="text-[9px] text-gray-500">500m away</p>
          </div>
        </div>

        {/* Deal 3 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2.5 flex gap-2 opacity-60">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-lg">🌮</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[8px] font-medium rounded">$2 TACOS</span>
            </div>
            <p className="text-[10px] font-medium text-gray-900 mt-0.5 truncate">Taco Town</p>
            <p className="text-[9px] text-gray-500">200m away</p>
          </div>
        </div>
      </div>

      {/* Fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
