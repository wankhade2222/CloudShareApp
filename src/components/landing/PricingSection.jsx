import { Check } from "lucide-react";

function PricingSection({ pricingPlans }) {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform ${
                plan.highlighted
                  ? "border-2 border-purple-500 scale-105"
                  : "border border-gray-200"
              }`}
            >
              <div
                className={`px-6 py-8 bg-white ${
                  plan.highlighted ? "bg-gradient-to-br from-purple-50 to-white" : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-medium text-gray-900">
                    {plan.name}
                  </h3>
                  {plan.highlighted && (
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                      Popular
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-8 text-3xl font-bold text-gray-900">
                  {plan.price}
                </p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-purple-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
