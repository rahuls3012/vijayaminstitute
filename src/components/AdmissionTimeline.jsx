const STEPS = [
  {
    title: 'Choose Your Programme',
    desc: 'Browse UG, PG, MBA, MCA, Diploma, Online and ODL options to shortlist what fits your goals.',
  },
  {
    title: 'Check Eligibility',
    desc: 'Use the eligibility checker or speak with our team to confirm you meet the programme requirements.',
  },
  {
    title: 'Submit Documents',
    desc: 'Provide the required certificates and identification as guided by our admission team.',
  },
  {
    title: 'Complete Admission',
    desc: 'Finalize registration formalities with the affiliated university through our guidance support.',
  },
  {
    title: 'Start Your Learning Journey',
    desc: 'Begin classes in your chosen mode — Regular, Online or Open & Distance Learning.',
  },
];

export default function AdmissionTimeline() {
  return (
    <div className="vi-timeline">
      {STEPS.map((step, i) => (
        <div className={`vi-timeline-step reveal reveal-delay-${(i % 5) + 1}`} key={step.title}>
          <div className="vi-timeline-num">{String(i + 1).padStart(2, '0')}</div>
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
        </div>
      ))}
    </div>
  );
}
