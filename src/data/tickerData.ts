export type TickerItem = {
  id: string;
  text: string;
  scenario: 'baseline' | 'symbiotic';
  drivers?: string[];
};

export const tickerItems: TickerItem[] = [
  // Baseline 2040
  {
    id: 'b1',
    scenario: 'baseline',
    text: 'Gig workers report record "algorithmic anxiety" as national scoring system quietly updates overnight.',
    drivers: ['labor', 'decisions']
  },
  {
    id: 'b2',
    scenario: 'baseline',
    text: 'Virtual AI companions now outnumber human therapists 5 to 1, raising alarms about long-term attachment and harm.',
    drivers: ['connection', 'healthcare']
  },
  {
    id: 'b3',
    scenario: 'baseline',
    text: 'Deepfake outbreak forces third "info blackout month" as public health agencies pause all video communications.',
    drivers: ['info-integrity', 'governance']
  },
  {
    id: 'b4',
    scenario: 'baseline',
    text: 'AI triage system misclassifies thousands of mental health crises, fueling protests over opaque risk models.',
    drivers: ['decisions', 'healthcare']
  },
  {
    id: 'b5',
    scenario: 'baseline',
    text: 'Young adults say they feel "obsolete by 25" as AI takes over most entry-level creative and analytical roles.',
    drivers: ['labor', 'purpose']
  },
  {
    id: 'b6',
    scenario: 'baseline',
    text: 'Hospitals celebrate record efficiency while frontline staff report unprecedented burnout and moral injury from automated care.',
    drivers: ['healthcare', 'labor']
  },
  {
    id: 'b7',
    scenario: 'baseline',
    text: 'New study links AI-managed workplaces to spike in loneliness, despite record levels of digital collaboration.',
    drivers: ['connection', 'labor']
  },
  {
    id: 'b8',
    scenario: 'baseline',
    text: 'Low-income neighborhoods become "data deserts" as health platforms drop regions deemed unprofitable by prediction engines.',
    drivers: ['governance', 'healthcare']
  },
  {
    id: 'b9',
    scenario: 'baseline',
    text: "AI-powered griefbots spark controversy after families receive targeted ads during anniversary of loved one's death.",
    drivers: ['connection', 'info-integrity']
  },
  {
    id: 'b10',
    scenario: 'baseline',
    text: 'National survey finds majority of people trust personal AI feeds more than public health announcements or news outlets.',
    drivers: ['info-integrity', 'governance']
  },

  // Symbiotic 2040
  {
    id: 's1',
    scenario: 'symbiotic',
    text: 'Nationwide Guaranteed Income credited with 40% drop in economic distress calls to crisis hotlines.',
    drivers: ['labor', 'wellbeing']
  },
  {
    id: 's2',
    scenario: 'symbiotic',
    text: 'Community "Purpose Clinics" help residents navigate life transitions, from automation layoffs to late-life career pivots.',
    drivers: ['purpose', 'healthcare']
  },
  {
    id: 's3',
    scenario: 'symbiotic',
    text: 'Content Authenticity Grid adopted globally, restoring trust in public health video and emergency alerts.',
    drivers: ['info-integrity', 'governance']
  },
  {
    id: 's4',
    scenario: 'symbiotic',
    text: 'New "Generative Health Index" adds purpose, connection, and creativity to standard well-being metrics.',
    drivers: ['wellbeing', 'purpose']
  },
  {
    id: 's5',
    scenario: 'symbiotic',
    text: 'AI connectors match isolated residents with local projects, leading to surge in neighborhood-led health initiatives.',
    drivers: ['connection', 'wellbeing']
  },
  {
    id: 's6',
    scenario: 'symbiotic',
    text: 'Glass-box algorithms become legal standard, giving patients and caseworkers the right to see—and challenge—AI decisions.',
    drivers: ['decisions', 'governance']
  },
  {
    id: 's7',
    scenario: 'symbiotic',
    text: 'Youth "Analog Sanctuaries" expand, offering AI-free spaces for play, friendship, and mental health support.',
    drivers: ['connection', 'sanctuaries']
  },
  {
    id: 's8',
    scenario: 'symbiotic',
    text: 'Digital brain twins cut time to diagnosis in half for complex conditions, while citizen boards oversee data ethics.',
    drivers: ['healthcare', 'governance']
  },
  {
    id: 's9',
    scenario: 'symbiotic',
    text: 'Cities compete to be named "Symbiotic Capitals" by balancing automation gains with human-centered work and public spaces.',
    drivers: ['labor', 'governance', 'wellbeing']
  },
  {
    id: 's10',
    scenario: 'symbiotic',
    text: 'New global charter on AI & Well-Being reframes progress around reducing suffering, not just increasing GDP.',
    drivers: ['governance', 'wellbeing', 'purpose']
  }
];
