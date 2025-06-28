export const emergencyInstructions = [
  {
    id: 'choking',
    title: 'Choking',
    steps: [
      'Stand behind the person.',
      'Make a fist with one hand.',
      'Perform abdominal thrusts (Heimlich maneuver).',
      'Repeat until the object is expelled.',
    ],
  },
  {
    id: 'bleeding',
    title: 'Severe Bleeding',
    steps: [
      'Apply direct pressure on the wound.',
      'Use a clean cloth or bandage.',
      'Elevate the injured limb above the heart.',
      'Call for emergency help if bleeding is severe.',
    ],
  },
  {
    id: 'burns',
    title: 'Minor Burns',
    steps: [
      'Cool the burn with cool (not cold) running water.',
      'Cover the burn with a sterile bandage.',
      'Take an over-the-counter pain reliever.',
      'Do not use ice or break blisters.',
    ],
  },
  {
    id: 'heart-attack',
    title: 'Heart Attack',
    steps: [
      'Call emergency services immediately.',
      'Chew and swallow an aspirin, if not allergic.',
      'Begin CPR if the person is unconscious.',
      'Stay with the person until help arrives.',
    ],
  },
];

export const healthTopics = [
  {
    slug: 'diabetes-101',
    title: 'Diabetes 101',
    summary: 'Understanding the basics of diabetes.',
    content: `Diabetes is a chronic health condition that affects how your body turns food into energy. Most of the food you eat is broken down into sugar (also called glucose) and released into your bloodstream. When your blood sugar goes up, it signals your pancreas to release insulin. Insulin acts like a key to let the blood sugar into your body’s cells for use as energy.
    With diabetes, your body either doesn’t make enough insulin or can’t effectively use the insulin it does make. When there isn’t enough insulin or cells stop responding to insulin, too much blood sugar stays in your bloodstream. Over time, that can cause serious health problems, such as heart disease, vision loss, and kidney disease.`,
    icon: 'Activity'
  },
  {
    slug: 'managing-hypertension',
    title: 'Managing Hypertension',
    summary: 'Tips for controlling high blood pressure.',
    content: `Hypertension, or high blood pressure, is a common condition where the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease. Blood pressure is determined both by the amount of blood your heart pumps and the amount of resistance to blood flow in your arteries.
    Lifestyle changes are an important part of treatment. These include eating a heart-healthy diet with less salt, getting regular physical activity, maintaining a healthy weight, and limiting the amount of alcohol you drink.`,
    icon: 'HeartPulse'
  },
  {
    slug: 'asthma-care',
    title: 'Asthma Care',
    summary: 'How to live well with asthma.',
    content: `Asthma is a condition in which your airways narrow and swell and may produce extra mucus. This can make breathing difficult and trigger coughing, a whistling sound (wheezing) when you breathe out and shortness of breath.
    For some people, asthma is a minor nuisance. For others, it can be a major problem that interferes with daily activities and may lead to a life-threatening asthma attack. Asthma can't be cured, but its symptoms can be controlled.`,
    icon: 'Wind'
  },
];

export const healthcareProviders = [
  {
    id: 1,
    name: 'Dr. Emily Carter',
    specialty: 'General Practitioner',
    address: '123 Health St, Wellness City',
    phone: '555-0101',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'doctor portrait',
  },
  {
    id: 2,
    name: 'Wellness Clinic',
    specialty: 'Family Medicine',
    address: '456 Cure Ave, Medville',
    phone: '555-0102',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'clinic building',
  },
  {
    id: 3,
    name: 'Dr. Ben Adams',
    specialty: 'Cardiologist',
    address: '789 Heart Ln, Cardio Town',
    phone: '555-0103',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'doctor smiling',
  },
  {
    id: 4,
    name: 'Bright Smile Dental',
    specialty: 'Dentistry',
    address: '101 Tooth Rd, Smileburg',
    phone: '555-0104',
    image: 'https://placehold.co/100x100.png',
    aiHint: 'dentist office'
  },
];
