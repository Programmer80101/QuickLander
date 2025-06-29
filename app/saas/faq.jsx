import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      id: "q1",
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a 7-day free trial with full access to all features. At the end of the trial, you can choose to upgrade or cancel—no credit card required to get started.",
    },
    {
      id: "q2",
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise plans. All payments are processed securely using PCI-compliant gateways.",
    },
    {
      id: "q3",
      question: "Can I get a refund?",
      answer:
        "Yes, we offer a 30-day money-back guarantee. If you're not satisfied for any reason, simply reach out to our support team with your order details and we'll process a full refund—no questions asked.",
    },
    {
      id: "q4",
      question: "How does onboarding work?",
      answer:
        "Once you sign up, you'll get immediate access to a guided setup wizard that takes you through initial configuration in minutes. Plus, you’ll receive a series of onboarding emails with tips, video tutorials, and best practices to help you get the most out of the product.",
    },
    {
      id: "q5",
      question: "What kind of support is available?",
      answer:
        "We offer 24/7 email support with a typical response time of under 2 hours. Enterprise customers also get access to priority live chat support during business hours and a dedicated account manager to ensure your success.",
    },
  ]

  return (
    <section>
      <h2>Frequently Asked Questions</h2>
      <Accordion type="single" className="w-full mt-6" collapsible>
        {faqs.map(({ id, question, answer }) => (
          <AccordionItem className="w-full max-w-md mx-auto" value={id} key={id}>
            <AccordionTrigger className="w-full">{question}</AccordionTrigger>
            <AccordionContent className="text-balance">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
