import React from 'react'

function Browse_By_Style() {
  return (
    <div className="main_container flex flex-col items-center justify-center py-10 bg-[#f3f3f3]">

      {/* Title */}
      <h2 className="text-2xl font-bold mb-6">
        BROWSE BY DRESS STYLE
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-6xl px-4">

  {/* Casual → spans 2 columns */}
  <div className="rounded-2xl overflow-hidden h-56 bg-white">
    <img src="/casual_clothes.webp" className="w-full h-full object-cover" />
  </div>

  {/* Formal */}
  <div className="rounded-2xl overflow-hidden col-span-2 h-56 bg-white">
    <img src="/formal_clothes.avif" className="w-full h-full object-cover" />
  </div>

  {/* Party → spans 2 columns */}
  <div className="rounded-2xl overflow-hidden col-span-2 h-56 bg-white">
    <img src="/party_clothe.jpg" className="w-full h-full object-cover" />
  </div>

  {/* Gym */}
  <div className="rounded-2xl overflow-hidden h-56 bg-white">
    <img src="/gym_clothes.jpg" className="w-full h-full object-cover" />
  </div>

</div>

    </div>
  )
}

export default Browse_By_Style
