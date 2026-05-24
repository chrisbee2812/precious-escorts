import React from 'react';
import { useParams } from 'react-router';
import { motion } from 'motion/react';
import { Shield, Scale, ScrollText, CheckCircle2 } from 'lucide-react';
import { title } from 'process';

interface Subsection {
  title?: string;
  content?: string;
  bullets?: string[];
}

interface Section {
  title: string;
  content?: string;
  bullets?: string[];
  subsections?: Subsection[];
}

interface LegalContent {
  title: string;
  icon: React.ReactNode;
  sections: Section[];
}

const CONTENT: Record<string, LegalContent> = {
  'terms-and-conditions': {
    title: 'Terms & Conditions',
    icon: <Scale className="text-gold" size={40} />,
    sections: [
      {
        title: 'Introduction',
        content: 'Welcome to Precious Escorts. These Terms and Conditions govern your use of our website and services. By accessing our site or booking any companion through us, you confirm that you have read, understood, and agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our services.'
      },
      {
        title: 'Eligibility and Age Restriction',
        content: 'Our services are available only to individuals aged 18 years or older. By using this website or making a booking, you confirm that you are at least 18 years of age. We reserve the right to request age verification documentation prior to confirming any booking.'
      },
      {
        title: 'Booking Process',
        content: 'All bookings are subject to availability and confirmation. A booking is considered provisional until you receive written confirmation from us via email or text message. We reserve the right to decline any booking request at our sole discretion. Once a booking is confirmed, you will receive details regarding the companion, time, and location. Please ensure that all information provided during the booking process is accurate and complete.'
      },
      {
        title: 'Fees and Payments',
        content: 'All fees quoted are inclusive of applicable taxes unless otherwise stated. Payment is due in full prior to the commencement of any booking, unless alternative arrangements have been agreed in writing. Accepted payment methods are listed on our website. We do not store credit card information.'
      },
      {
        title: 'Cancellation and Refund Policy',
        subsections: [
          {
            title: 'Client Cancellation',
            content: 'Cancellations made more than [X] hours before the scheduled booking time may be eligible for a full refund or rescheduling. Cancellations made within [X] hours of the booking time will incur a [Y]% cancellation fee.'
          },
          {
            title: 'Agency Cancellation',
            content: 'In the unlikely event that we need to cancel a confirmed booking for reasons within our control, you will receive a full refund or the option to reschedule without penalty.'
          },
          {
            title: 'Refunds',
            content: 'Refunds, if applicable, will be processed using the original payment method within [Z] business days. Please note that bank processing times may vary.'
          }
        ]
      },
      {
        title: 'Conduct and Behavior',
        content: 'We expect all clients to treat companions with respect, dignity, and courtesy at all times. Any aggressive, threatening, abusive, or illegal behavior will result in immediate termination of the booking without refund. Companions reserve the right to end a booking early if they feel unsafe or uncomfortable.'
      },
      {
        title: 'Prohibited Activities',
        content: 'The following activities are strictly prohibited:',
        bullets: [
          'Any illegal activity under UK law',
          'Non-consensual acts of any kind',
          'Use of any illegal substances during the booking',
          "Photography or video recording without the companion's explicit written consent",
          'Attempting to circumvent our booking process or contact companions directly without agency involvement'
        ]
      },
      {
        title: 'Limitation of Liability',
        content: 'To the maximum extent permitted by law, Precious Escorts shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services. Our total liability shall not exceed the total fees paid by you for the specific booking giving rise to the claim.'
      },
      {
        title: 'Privacy and Data Protection',
        content: 'Your personal data is processed in accordance with our Privacy Policy and applicable data protection laws, including the UK General Data Protection Regulation (UK GDPR). We do not share your personal information with third parties except as necessary to facilitate your booking or as required by law.'
      },
      {
        title: 'Governing Law',
        content: 'These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.'
      },
      {
        title: 'Amendments',
        content: 'We reserve the right to amend these Terms and Conditions at any time. Changes will be posted on this page with an updated effective date. Continued use of our services following any changes constitutes acceptance of the new terms.'
      },
      {
        title: 'Contact Information',
        content: 'For any questions regarding these Terms and Conditions, please contact us at preciousescorts@myyahoo.com.'
      },
    ]
  },
  'disclaimer': {
    title: 'Agency Disclaimer',
    icon: <Shield className="text-gold" size={40} />,
    sections: [
      {
        title: 'Purpose of This Disclaimer',
        content: 'This Disclaimer outlines important limitations regarding the information provided on our website and the nature of our services. Please read carefully before using our site or booking our companions.'
      },
      {
        title: 'No Guarantee of Availability',
        content: 'While we strive to maintain accurate and up-to-date availability information on our website, companion schedules may change without notice. We do not guarantee that any specific companion will be available at any given time. Confirmation of availability is provided only upon completion of the booking process.'
      },
      {
        title: 'Accuracy of Companion Profiles',
        content: 'Companion profiles, including photographs, physical descriptions, interests, and biographical information, are provided in good faith. Photographs are representative but may not reflect current appearance due to changes in hairstyle, weight, aging, or other natural factors. We recommend clients review multiple sources of information and communicate directly with our booking team if they have specific expectations.'
      },
      {
        title: 'Independent Contractor Status',
        content: "All companions featured on our website are independent contractors, not employees of Precious Escorts. We provide an introduction and booking service only. We do not supervise, control, or direct companions' conduct during bookings beyond ensuring compliance with basic safety and respectful behavior standards."
      },
      {
        title: 'No Medical or Legal Advice',
        content: 'Nothing on this website constitutes medical, legal, or professional advice. If you require advice on any matter relating to sexual health, legal compliance, or personal safety, you should consult appropriately qualified professionals.'
      },
      {
        title: 'Third-Party Links',
        content: 'Our website may contain links to third-party websites for your convenience. We have no control over the content, privacy policies, or practices of these sites and assume no responsibility for them. Inclusion of a link does not imply endorsement.'
      },
      {
        title: 'No Responsibility for Off-Premises Conduct',
        content: 'Once a booking commences, companions and clients are solely responsible for their own conduct. Precious Escorts shall not be held liable for any disputes, injuries, damages, or illegal acts occurring during or after a booking.'
      },
      {
        title: 'Limitation on Information Accuracy',
        content: "The information provided on this website is for general informational purposes only. While we endeavor to keep information current and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on the website."
      },
      {
        title: 'Force Majeure',
        content: 'We shall not be liable for any failure or delay in performing our obligations where such failure or delay results from any cause beyond our reasonable control, including but not limited to strikes, natural disasters, pandemic-related restrictions, travel disruptions, or technical failures.'
      },
      {
        title: 'No Waiver',
        content: 'Our failure to enforce any right or provision of this Disclaimer shall not constitute a waiver of such right or provision. Any waiver of any provision of this Disclaimer will be effective only if in writing and signed by an authorized representative of Precious Escorts.'
      },
    ]
  },
  'etiquette': {
    title: 'Etiquette & Expectations',
    icon: <ScrollText className="text-gold" size={40} />,
    sections: [
      {
        title: 'Introduction: Why Etiquette Matters',
        content: 'A positive, respectful experience benefits everyone involved. This etiquette guide is designed to help clients and companions enjoy comfortable, safe, and mutually enjoyable encounters. Following these guidelines minimizes misunderstandings and creates an atmosphere of trust and relaxation.'
      },
      {
        title: 'Before the Booking',
        subsections: [
          {
            title: 'Communication',
            bullets: [
              'Be clear and polite when making your initial inquiry',
              'Provide all requested information promptly (duration, location, preferred companion)',
              'Avoid explicit or vulgar language in any communications',
              'Respond to confirmation messages in a timely manner'
            ]
          },
          {
            title: 'Preparation',
            bullets: [
              'Shower and use deodorant immediately before the booking',
              'Brush your teeth and/or use mouthwash',
              'Dress appropriately for the occasion and location',
              'Have the full payment prepared exactly as agreed (no last-minute ATM trips)'
            ]
          },
          {
            title: 'Punctuality',
            bullets: [
              'Arrive on time at the agreed location',
              'If you are running late, contact us immediately to inform the companion',
              'Understand that excessive tardiness may result in cancellation without refund'
            ]
          }
        ]
      },  
      {
        title: 'During the Booking',
        subsections: [
          {
            title: 'Greeting and First Impressions',
            bullets: [
              'Greet the companion warmly and respectfully',
              'Offer to take their coat or bag if appropriate',
              'Allow them to feel comfortable in the space',
              'Place the donation in plain sight in an unsealed envelope, or as previously arranged'
            ]
          },
          {
            title: 'Conversation and Rapport',
            bullets: [
              'Begin with light conversation to build comfort and rapport',
              'Ask about their day, interests, or travel (within appropriate boundaries)',
              'Listen actively and respond with genuine interest',
              'Avoid interrogating about personal life, real name, or other identifying details'
            ]
          },
          {
            title: 'Hygiene Check (Discreet)',
            bullets: [
              'Most companions appreciate the offer to freshen up upon arrival',
              'Provide access to a clean bathroom with soap, towels, and mouthwash',
              'Do not take offense if a companion excuses themselves to wash their hands or freshen up'
            ]
          },
          {
            title: 'Boundaries and Consent',
            bullets: [
              'Understand that "no" means no, without explanation required',
              'Do not push for activities that were not discussed or agreed upon',
              'Respect physical boundaries at all times',
              'If you are unsure whether something is welcome, ask politely and accept the answer gracefully'
            ]
          },
          {
            title: 'Photography and Recording',
            bullets: [
              'Never take photos or videos without asking first',
              'Most companions will decline photography for privacy reasons—respect this',
              'Do not hide cameras or recording devices (this is illegal and unacceptable)'
            ]
          }
        ]
      },
      {
        title: 'After the Booking',
        subsections: [
          {
            title: 'Departure',
            bullets: [
              'Allow the companion time to freshen up and compose themselves before saying goodbye',
              'Do not rush them out the door or make them feel like they need to leave immediately',
              'Offer a polite goodbye and thank them for their time'
            ]
          },
          {
            title: 'Feedback',
            bullets: [
              'If you had a positive experience, consider leaving a kind review or providing feedback to the agency',
              'If you had any issues, contact the agency directly to discuss rather than posting negative reviews',
              'Remember that companions are human beings deserving of respect, regardless of any issues that may arise'
            ]
          }
        ]
      },
      {
        title: 'What Not to Do',
        bullets: [
          "Don't show up intoxicated or under the influence. This compromises safety and consent.",
          "Don't negotiate price in person. All pricing must be agreed upon through the agency beforehand.",
          "Don't ask for personal contact information. This violates companion privacy and safety.",
          "Don't attempt to extend time without asking. This is disrespectful and may compromise other bookings.",
          "Don't ghost or no show without communication. This wastes a companion's time and incurs fees.",
          "Don't discuss illegal activities. This puts everyone at legal risk."
        ]
      },
      {
        title: 'Special Situations',
        subsections: [
          {
            title: 'Booking for Two or More Clients',
            bullets: [
              'Discuss the dynamic with our booking team in advance to ensure the companion is comfortable and available for multiple clients',
              'Ensure all participants have read and agreed to these etiquette guidelines',
              'Designate one person as the primary contact for communication with the companion and agency',
            ]
          },
          {
            title: 'Dinner Dates and Social Time',
            bullets: [
              'Plan activities that are appropriate for the setting and the companion’s comfort level',
              'Be mindful of the companion’s dietary restrictions and preferences',
              'Respect their need for personal space and conversation topics',
              'Cover all expenses for the companion during the outing, including meals, drinks, and transportation'
            ]
          }
        ]
      },
      {
        title: 'When things go wrong',
        content: 'If you feel uncomfortable or something is not right during a booking:',
        bullets: [
          'Pause and communicate - Use clear, calm language to express your concerns to the companion',
          'Ask to reset - Sometimes a brief break to talk through any issues can help reset the mood and salvage the experience',
          'End the booking if necessary - If you feel unsafe or the experience is not enjoyable, it’s okay to end the booking early. Your safety and comfort are the top priority.',
          'Provide feedback to the agency - If there were issues, let us know so we can address them and improve our services'
        ]
      },
      {
        title: 'Final Thoughts',
        content: 'Etiquette is about creating a positive, respectful experience for both clients and companions. By following these guidelines, you help foster an environment of trust, safety, and enjoyment. Remember that every companion is a unique individual with their own boundaries and preferences—respecting those is the key to a successful encounter.'
      }
    ]
  }
};

export function Legal() {
  const { type } = useParams();
  const info = CONTENT[type as keyof typeof CONTENT] || CONTENT['disclaimer'];

  return (
    <div className="pt-32 pb-32 min-h-screen bg-bg px-15">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-6xl md:text-[80px] font-display text-accent mb-8 leading-none italic">{info.title}</h1>
          <p className="text-white/40 font-sans font-light uppercase tracking-[0.2em] text-[10px]">Precious Escorts Mandates | 2026 Edition</p>
        </motion.div>

        <div className="space-y-16">
          {info.sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border-l border-white/5 pl-12 py-4"
            >
              <h2 className="text-3xl font-display text-white mb-8 italic">
                {section.title}
              </h2>
              <div className="space-y-6">
                <p className="text-white/50 font-sans font-light leading-relaxed text-lg">
                  {section.content}
                </p>
                
                {section.bullets && (
                  <ul className="space-y-4 pt-4">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-4 text-white/40 font-sans font-light text-base items-start">
                        <span className="w-1 h-1 bg-accent mt-2.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {section.subsections && (
                  <div className="pt-10 space-y-12">
                    {section.subsections.map((sub, sIdx) => (
                      <div key={sIdx} className="pl-8 border-l border-accent/20">
                        {sub.title && (
                          <h3 className="text-xl font-display text-white/80 mb-4 italic">{sub.title}</h3>
                        )}
                        <p className="text-white/40 font-sans font-light leading-relaxed text-base mb-4">
                          {sub.content}
                        </p>
                        {sub.bullets && (
                          <ul className="space-y-3">
                            {sub.bullets.map((bullet, sbIdx) => (
                              <li key={sbIdx} className="flex gap-3 text-white/30 font-sans font-light text-sm items-start">
                                <span className="w-1 h-1 bg-white/20 mt-2 shrink-0" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 p-16 border border-white/5 bg-[#111] rounded-none text-center">
          <p className="text-white/40 font-display italic text-2xl mb-12 max-w-xl mx-auto leading-relaxed">
            "Excellence is not an act, but a habit. We strive for brilliance in every curated encounter."
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent/60 font-sans">
            Legal Protocol Alpha-4 | Secure Documentation
          </p>
        </div>
      </div>
    </div>
  );
}
