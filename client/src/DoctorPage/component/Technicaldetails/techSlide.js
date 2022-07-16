/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "Remote Patient Monitoring",
    description:
      "Remote patient Monitoring is the ray of hope to provide increased visibility to HCPs before and after patients' hospital visit.The advent of technology like smartphones,connected devices,sensors,etc..",
  },
  {
    name: "Digital Symptom Checkers",
    description:
      "Digital symptom checkers are the equipment that provide the patients with preliminary guidance and give them the directions for the specific care they require as per their self-reported symptoms. ",
  },
  {
    name: "Digital Pharmacies",
    description:
      "Digital pharmacies is one sector which is rapidly involve during the present situation by identifying eligible patients, drug procurement and pricing, and drug and prescriber tracking and documentation",
  },
  {
    name: "MedTech",
    description:
      "Medical Technology or Medtech, as it is widely known, is the accumulation of every digital technology that is being implemented in the digital healthcare ecosystem. However, it is more inclined towards the more advanced and sophisticated technology solutions. ",
  },
  {
    name: "Virtual Visits",
    description:
      "As the name suggests, Virtual Visits are the live video consulting that takes place between healthcare providers and patients. This setup is one of the most promising solutions with a long positive impact that would stay through out this current situation.",
  },
  {
    name: "Cybersecurity ",
    description:
      "The cybersecurity threats have constantly affected the healthcare industry. Digital Transformation and its eventual implementation in the global healthcare landscape would not only stabilize the current chaos.",
  },
];

export default function Techdetails() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://images.pexels.com/photos/5752296/pexels-photo-5752296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://images.pexels.com/photos/3845729/pexels-photo-3845729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="bg-gray-100 rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-500">
            The adoption of technology in healthcare over the years has led to
            better diagnosis and treatment of patients. Out of all the benefited
            sectors from technology adoption, healthcare is probably the most
            important one. Consequently, it improved the quality of life over
            time, and it has saved many lives.The use of medical technology
            tools safeguards patient safety.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
