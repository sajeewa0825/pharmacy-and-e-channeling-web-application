/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
  {
    positions: "Founder",
    name: "Pro.Rathnapala Silva",
    description: "Healthcare management, Ph.D/M.Phil",
    degree: "MBBS,MS,MNAMS,FIVS,FICS,PHD",
    imageSrc:
      "https://images.pexels.com/photos/8460159/pexels-photo-8460159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Founder",
  },
  {
    positions: "Senior doctor",
    name: "Dr.Dulani Kostha",
    description: "ENT SPECIALIST|38 YEARS",
    degree: "MBBS,MS,MNAMS,FIVS,FICS",
    imageSrc:
      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
  },
  {
    positions: "Assistant",
    name: "Kamal Karunasena",
    description: "Surgery specialist|20 year experience",
    degree: "Ph.D,M.Phil, MBBS,MS,MNAMS",
    imageSrc:
      "https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
  },
];

export default function Bord() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Our Board</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className=" mt-6 text-sm text-gray-500">
                  <span className="absolute inset-0" />
                  {callout.positions}
                </h3>
                <h3 className=" text-sm text-gray-500">
                  <span className="absolute inset-0" />
                  {callout.name}
                </h3>
                <h3 className=" text-sm text-gray-500">
                  <span className="absolute inset-0" />
                  {callout.degree}
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
