import {
  Gift,
  DollarSign,
  Shield,
  Headset,
  CheckCircle,
  Globe,
} from 'lucide-react';

const features = [
  {
    icon: <Gift />,
    title: 'Rewards Program',
    description: 'Earn credits for every action—whether it\'s onboarding a new user, making your first sale, or referring a friend—and redeem them easily as discounts, freebies, or exclusive perks to keep growing your business.',
  },
  {
    icon: <DollarSign />,
    title: 'Cashback Offers',
    description: 'Receive automatic percentage-based cashback on every transaction. Watch your rewards accumulate in real time and redeem funds seamlessly to offset future payments or even withdraw them directly.',
  },
  {
    icon: <Shield />,
    title: 'Fraud Protection',
    description: 'Leverage cutting-edge security features like real-time monitoring, anomaly detection, and multi-layered encryption to ensure your transactions are safe, compliant, and fraud-free around the clock.',
  },
  {
    icon: <Headset />,
    title: '24/7 Customer Support',
    description: 'Access friendly, knowledgeable support any time of day or night. Whether you need help integrating, troubleshooting, or just a quick question answered, our team is always ready to help.',
  },
  {
    icon: <CheckCircle />,
    title: 'No Annual Fees',
    description: 'Enjoy full access to our platform without any yearly charges, hidden fees, or surprise costs. Pay only for what you use and scale your usage without worrying about extra bills.',
  },
  {
    icon: <Globe />,
    title: 'Global Access',
    description: 'Use our service from anywhere in the world with multi-currency support, localized pricing, and GDPR-compliant infrastructure—perfect for growing international businesses.',
  },
];

export default function Features() {
  return (
    <section className="py-9 relative z-1">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="mb-5">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-neutral-300/25 p-5 rounded-md shadow-xl hover:bg-neutral-350/25 hover:-translate-y-1 hover:scale-102 inset-shadow-sm transition-all duration-300 ease-out"
            >
              <h4 className="flex flex-row gap-3">
                <span className="text-green-500 scale-110 origin-top-left">
                  {feature.icon}
                </span>
                {feature.title}
              </h4>
              <p className="text-center text-sm mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
