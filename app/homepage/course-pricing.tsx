import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

const pricingPlans = [
  {
    id: 1,
    price: 99,
    period: "Per Month",
    features: [
      { name: "Access to select courses", included: true },
      { name: "Access to select courses", included: true },
      { name: "Limited community support", included: true },
      { name: "Certificate of completion", included: true },
      { name: "Top label arrangement", included: true },
      { name: "Priority support", included: true },
      { name: "Priority support & response", included: false },
    ],
  },
  {
    id: 2,
    price: 129,
    period: "Per Month",
    features: [
      { name: "Access to select courses", included: true },
      { name: "Access to select courses", included: true },
      { name: "Limited community support", included: true },
      { name: "Certificate of completion", included: true },
      { name: "Top label arrangement", included: true },
      { name: "Priority support", included: true },
      { name: "Priority support & response", included: false },
    ],
  },
  {
    id: 3,
    price: 199,
    period: "Per Month",
    features: [
      { name: "Access to select courses", included: true },
      { name: "Access to select courses", included: true },
      { name: "Limited community support", included: true },
      { name: "Certificate of completion", included: true },
      { name: "Top label arrangement", included: true },
      { name: "Priority support", included: true },
      { name: "Priority support & response", included: false },
    ],
  },
]

export default function PricingPage() {
  return (
    <section className="py-12 md:py-16 bg-amber-50">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 text-teal-700 font-medium mb-3">
            <span className="text-lg md:text-xl">✦</span>
            <span className="text-lg md:text-xl">Course Pricing</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700">
            <span className="text-amber-500">Select a Plan</span> That Suits You
          </h1>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-amber-50 rounded-lg border border-gray-300 p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Price Header */}
              <div className="flex items-end gap-1 mb-4">
                <span className="text-2xl md:text-3xl font-bold text-teal-700">${plan.price}</span>
                <span className="text-slate-500 text-xs md:text-sm font-medium pb-1">/ {plan.period}</span>
              </div>

              {/* Features List */}
              <div className="space-y-2 mb-4">
                {plan.features.map((feature, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between py-1">
                      <p className="text-slate-600 text-xs md:text-sm">{feature.name}</p>
                      <div className="flex-shrink-0 ml-2">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-amber-500" />
                        ) : (
                          <X className="w-4 h-4 text-teal-700" />
                        )}
                      </div>
                    </div>
                    {index < plan.features.length - 1 && <div className="border-t border-gray-200 mt-1"></div>}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white py-2 md:py-3 rounded-lg text-sm md:text-base font-medium transition-colors">
                  BUY NOW
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-slate-600 text-xs md:text-sm max-w-xl mx-auto">
            Choose the plan that best fits your learning goals. All plans include access to our comprehensive course
            library and community support.
          </p>
        </div>
      </div>
    </section>
  )
}
