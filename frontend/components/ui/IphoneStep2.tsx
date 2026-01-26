"use client";

import IPhoneFrame from "./IphoneFrame";

const IPhoneStep2 = () => {
  const foodOptions = [
    { emoji: "🍔", label: "Fast Food", checked: true },
    { emoji: "🥡", label: "Chinese", checked: true },
    { emoji: "🍜", label: "Korean", checked: false },
    { emoji: "🍛", label: "Indian", checked: true },
    { emoji: "🥙", label: "Halal", checked: false },
    { emoji: "🍕", label: "Pizza", checked: true },
    { emoji: "🍣", label: "Japanese", checked: false },
    { emoji: "🌮", label: "Mexican", checked: false },
  ];

  return (
    <IPhoneFrame>
      {/* App Background */}
      <div className="absolute inset-0 bg-white" />

      {/* Status Bar */}
      <div className="relative z-10 flex justify-between items-center px-8 pt-4">
        <span className="text-gray-800">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-[22px] h-[11px] border border-gray-800 rounded-[3px] p-px">
            <div className="w-[80%] h-full bg-gray-800 rounded-[1px]" />
          </div>
        </div>
      </div>

      {/* Food Preference Questionnaire */}
      <div className="absolute inset-0 flex flex-col pt-16 px-5 z-10">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 leading-tight">
            Which foods would you like to receive alerts on?
          </h2>
          <p className="text-gray-500 text-xs mt-2">Select all that apply</p>
        </div>

        {/* Food Options */}
        <div className="space-y-2.5">
          {foodOptions.map((option, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-xl border ${
                option.checked
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{option.emoji}</span>
                <span className="font-medium text-gray-800 text-sm">{option.label}</span>
              </div>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  option.checked
                    ? "border-primary bg-primary"
                    : "border-gray-300"
                }`}
              >
                {option.checked && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="mt-auto mb-8">
          <button className="w-full h-12 bg-black text-white rounded-xl font-semibold text-sm">
            Continue
          </button>
        </div>
      </div>
    </IPhoneFrame>
  );
};

export default IPhoneStep2;
