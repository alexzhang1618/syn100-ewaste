import Link from 'next/link';
import { ReactNode } from 'react';

export interface QuizQuestion {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
}

export const QUESTIONS: QuizQuestion[] = [
  {
    question: 'You discover a hidden stash of flip phones in your attic.',
    a: "Let's revive these antiques and give them a second chance at life.",
    b: 'Time to cash in on this treasure trove of vintage tech and upgrade.',
    c: "Ah, memories! I'll just tuck these away with my cassettes and hope they appreciate in value.",
    d: "Off to the e-waste recycling center with these fossils. Let's keep the cycle of sustainability going!",
  },
  {
    question: "Your juicer calls it quits right when you're craving some lemonade.",
    a: 'Who needs juicer when you have elbow grease? Time to squeeze by hand!',
    b: 'Off to buy a juicer with more buttons than a spaceship. Because complexity equals superiority, right?',
    c: 'Another fallen soldier in the kitchen appliance uprising. *Sobs*',
    d: "Let's squeeze some awareness about planned obsolescence into our conversation!",
  },
  {
    question:
      "Your high-tech gadget suddenly goes out of style, and everyone's upgrading to the latest trend.",
    a: "Who needs trends when you have timeless classics? I'm sticking with what works!",
    b: 'Out with the old, in with the new! Time to join in on the hype!',
    c: 'These timeless pieces of technology will look great on my shelf!',
    d: "Let's challenge the notion of style over substance and promote longevity in tech!",
  },
  {
    question: 'You realize your toaster is designed to self-destruct after exactly 437 uses.',
    a: 'This toaster is toast? Not on my watch! Time for a repair project!',
    b: 'Time to upgrade to the latest smart toaster. Maybe this one can play my favorite tunes while I wait.',
    c: 'Add it to the collection of kitchen appliances that have betrayed me. *Shakes fist*',
    d: 'Start a toaster revolution! Down with planned obsolescence!',
  },
  {
    question:
      "Your friend's laptop becomes sluggish after a year of use, despite being top-of-the-line when purchased.",
    a: "Let's try optimizing the system and cleaning up unnecessary files. It might just need a tune-up!",
    b: 'Trash. Time for a new laptop! The tech world waits for no one.',
    c: 'Another broken laptop for the collections',
    d: 'Rant to the company as you turn it in for recycling',
  },
  {
    question:
      'How do you feel about the role of tech companies in addressing e-waste and planned obsolescence?',
    a: "They should prioritize durability and repairability over constant upgrades. It's better for consumers and the environment!",
    b: "Tech companies gotta do what they gotta do to stay competitive. It's the nature of the industry.",
    c: "It's disappointing how some companies exploit planned obsolescence for profit. Oh well, I don’t care I love my tech equally :3",
    d: "Tech companies need to be transparent about their practices and work towards sustainable solutions. We can't keep ignoring the e-waste crisis!",
  },
];

interface Persona {
  name: string;
  description: ReactNode;
}

export const PERSONAS: Persona[] = [
  {
    name: 'The Repair Rebel',
    description:
      "You believe in the power of repair and optimization to combat e-waste. You take electronics to the limits of their lifespan and get every use. With your DIY spirit, you're not afraid to get your hands dirty and make tech last longer!",
  },
  {
    name: 'The Performance Merchant',
    description: (
      <>
        You&apos;re always on the lookout for the latest tech trends and upgrades. While you embrace
        innovation, remember to consider the environmental impact of constant upgrades. Visit{' '}
        <Link href="#contribute">this section</Link> to learn how you can improve our global
        environment and community.
      </>
    ),
  },
  {
    name: 'Complicit Hoarder',
    description: (
      <>
        You are just starting your e-waste journey! Visit <Link href="#info">this section</Link> to
        learn more about the impact of e-waste and how you can sustainably address your e-waste.
      </>
    ),
  },
  {
    name: 'The Sustainable Tech Advocate',
    description:
      "You advocate for proper disposal of e-waste and believe in holding tech companies accountable for their role in addressing e-waste and planned obsolescence. With your focus on transparency and sustainability, you're driving positive change in the tech industry!",
  },
];
