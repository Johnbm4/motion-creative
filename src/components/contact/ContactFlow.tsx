import { AnimatePresence, motion } from 'framer-motion';
import { memo, useState } from 'react';
import { contactIntro } from '../../data/content';
import { duration, ease } from '../../lib/motion';
import { submitContact } from '../../services/contactService';
import { useNavigation } from '../../navigation/NavigationContext';

const intentOptions = [
  'A film or production',
  'A live event or experience',
  'Brand and marketing',
  'Digital or interactive work',
  'Something else',
];

const steps = [
  { key: 'intent', question: 'What are you building?' },
  { key: 'details', question: 'Tell us more.' },
  { key: 'reach', question: 'How can we reach you?' },
] as const;

type Phase = 'intro' | 'steps' | 'done';

function ContactFlow() {
  const { navigateTo } = useNavigation();
  const [phase, setPhase] = useState<Phase>('intro');
  const [stepIndex, setStepIndex] = useState(0);
  const [intent, setIntent] = useState('');
  const [details, setDetails] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentStep = steps[stepIndex];

  const canContinue = () => {
    if (currentStep.key === 'intent') return intent.length > 0;
    if (currentStep.key === 'details') return details.trim().length > 2;
    return name.trim().length > 0 && email.trim().length > 0;
  };

  const handleNext = async () => {
    if (phase === 'intro') {
      setPhase('steps');
      return;
    }

    if (!canContinue()) return;

    if (stepIndex < steps.length - 1) {
      setStepIndex((i) => i + 1);
      setError(null);
      return;
    }

    setSubmitting(true);
    setError(null);

    const result = await submitContact({ intent, details, name, email });
    setSubmitting(false);

    if (result.error) {
      setError(result.error);
      return;
    }

    setPhase('done');
  };

  const handleBack = () => {
    if (phase === 'steps' && stepIndex > 0) {
      setStepIndex((i) => i - 1);
      setError(null);
      return;
    }
    if (phase === 'steps' && stepIndex === 0) {
      setPhase('intro');
      setError(null);
    }
  };

  if (phase === 'done') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: duration.slow, ease }}
        className="min-h-screen flex flex-col justify-center px-8 md:px-20 max-w-3xl mx-auto text-center"
      >
        <p className="font-display text-[clamp(2rem,5vw,3rem)] text-white mb-8">
          Thank you.
        </p>
        <p className="text-mist font-sans font-light mb-12">
          We&apos;ll respond within a few days.
        </p>
        <button
          type="button"
          onClick={() => navigateTo('home')}
          className="text-[10px] tracking-scene uppercase text-whisper hover:text-white transition-colors duration-700 font-sans"
        >
          Return to world
        </button>
      </motion.div>
    );
  }

  if (phase === 'intro') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration.slow, ease }}
        className="min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 max-w-3xl mx-auto py-24"
      >
        <p className="text-[10px] tracking-scene uppercase text-whisper mb-12 font-sans">
          Contact
        </p>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-white leading-tight mb-8">
          {contactIntro.line}
        </h1>
        <p className="text-mist font-sans font-light text-base md:text-lg mb-20">
          {contactIntro.sub}
        </p>
        <button
          type="button"
          onClick={handleNext}
          className="text-[10px] tracking-scene uppercase text-mist hover:text-white transition-colors duration-700 font-sans w-fit"
        >
          Begin
        </button>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 max-w-3xl mx-auto py-24">
      <div className="flex gap-3 mb-16 md:mb-24" aria-hidden>
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-px flex-1 transition-colors duration-700 ${
              i <= stepIndex ? 'bg-mist' : 'bg-whisper/40'
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep.key}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: duration.scene, ease }}
        >
          <p className="text-[10px] tracking-scene uppercase text-whisper mb-8 font-sans">
            {String(stepIndex + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
          </p>

          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] text-white leading-tight mb-12 md:mb-16">
            {currentStep.question}
          </h2>

          {currentStep.key === 'intent' && (
            <ul className="space-y-4 list-none">
              {intentOptions.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    onClick={() => setIntent(option)}
                    className={`w-full text-left py-4 border-b border-whisper/40 font-sans text-base md:text-lg transition-colors duration-700 ${
                      intent === option ? 'text-white' : 'text-mist hover:text-white'
                    }`}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {currentStep.key === 'details' && (
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={5}
              placeholder="Scope, timeline, location."
              className="w-full bg-transparent border-b border-whisper/40 text-white placeholder:text-whisper font-sans font-light text-base md:text-lg py-4 resize-none focus:outline-none focus:border-mist transition-colors duration-700"
            />
          )}

          {currentStep.key === 'reach' && (
            <div className="space-y-8">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full bg-transparent border-b border-whisper/40 text-white placeholder:text-whisper font-sans font-light text-base md:text-lg py-4 focus:outline-none focus:border-mist transition-colors duration-700"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-transparent border-b border-whisper/40 text-white placeholder:text-whisper font-sans font-light text-base md:text-lg py-4 focus:outline-none focus:border-mist transition-colors duration-700"
              />
            </div>
          )}

          {error ? <p className="mt-8 text-sm text-mist font-sans">{error}</p> : null}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center gap-8 mt-16 md:mt-20">
        <button
          type="button"
          onClick={handleBack}
          className="text-[10px] tracking-scene uppercase text-whisper hover:text-white transition-colors duration-700 font-sans"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={!canContinue() || submitting}
          className="text-[10px] tracking-scene uppercase text-mist hover:text-white disabled:opacity-30 transition-colors duration-700 font-sans"
        >
          {submitting
            ? 'Sending…'
            : stepIndex === steps.length - 1
              ? 'Send'
              : 'Continue'}
        </button>
      </div>
    </div>
  );
}

export default memo(ContactFlow);
