export const topics = [
    {
        id: 1,
        title: "Building Emotional Resilience",
        icon: "💪",
        description: "Learn to bounce back from life's challenges",
        article: `
      <h2>What is Emotional Resilience?</h2>
      <p>Emotional resilience is the ability to adapt and bounce back when faced with adversity, trauma, or significant stress. It's not about avoiding difficulties, but rather developing the strength to recover from them.</p>
      
      <h3>Key Components of Resilience</h3>
      <ul>
        <li><strong>Self-awareness:</strong> Understanding your emotions and triggers</li>
        <li><strong>Positive relationships:</strong> Building strong support networks</li>
        <li><strong>Self-care:</strong> Taking care of your physical and mental health</li>
        <li><strong>Purpose:</strong> Having clear goals and meaning in life</li>
      </ul>
      
      <h3>Building Your Resilience</h3>
      <p>Resilience can be developed over time through:</p>
      <ul>
        <li>Practicing gratitude daily</li>
        <li>Maintaining connections with supportive people</li>
        <li>Accepting that change is part of life</li>
        <li>Taking decisive actions rather than avoiding problems</li>
        <li>Looking for opportunities for self-discovery</li>
      </ul>
      
      <p>Remember: resilient people still experience stress and emotional pain, but they've developed healthy coping mechanisms to work through challenges.</p>
    `,
        quiz: [
            {
                question: "What is emotional resilience?",
                options: ["Avoiding all problems", "Recovering from challenges", "Never feeling sad", "Being perfect"],
                answer: 1
            },
            {
                question: "Which habit strengthens resilience?",
                options: ["Self-pity", "Gratitude", "Isolation", "Perfectionism"],
                answer: 1
            },
            {
                question: "Resilient people:",
                options: ["Never experience stress", "Have healthy coping mechanisms", "Avoid all difficulties", "Never ask for help"],
                answer: 1
            },
            {
                question: "What helps build resilience?",
                options: ["Avoiding change", "Strong support networks", "Ignoring emotions", "Working alone"],
                answer: 1
            }
        ],
        prompt: "Think of a difficult time you overcame. What helped you get through it? What did you learn about yourself?"
    },
    {
        id: 2,
        title: "Enhancing Self-Awareness",
        icon: "🧭",
        description: "Understand your thoughts, feelings, and behaviors",
        article: `
      <h2>The Power of Self-Awareness</h2>
      <p>Self-awareness is the foundation of emotional intelligence. It means having a clear understanding of your personality, including your strengths, weaknesses, thoughts, beliefs, emotions, and motivations.</p>
      
      <h3>Two Types of Self-Awareness</h3>
      <ul>
        <li><strong>Internal self-awareness:</strong> How clearly we see our own values, passions, and impact on others</li>
        <li><strong>External self-awareness:</strong> Understanding how other people view us</li>
      </ul>
      
      <h3>Benefits of Self-Awareness</h3>
      <ul>
        <li>Better decision-making</li>
        <li>Improved relationships</li>
        <li>Greater self-control</li>
        <li>Enhanced creativity</li>
        <li>Increased confidence</li>
        <li>Better stress management</li>
      </ul>
      
      <h3>Developing Self-Awareness</h3>
      <p>Practice these techniques:</p>
      <ul>
        <li><strong>Journaling:</strong> Write about your thoughts and feelings regularly</li>
        <li><strong>Meditation:</strong> Observe your thoughts without judgment</li>
        <li><strong>Ask for feedback:</strong> Listen to how others perceive you</li>
        <li><strong>Reflect on emotions:</strong> Notice what triggers different feelings</li>
        <li><strong>Question yourself:</strong> Ask "why" to understand your motivations</li>
      </ul>
    `,
        quiz: [
            {
                question: "Which is internal self-awareness?",
                options: ["Knowing your values", "Knowing others' opinions", "Following trends", "Copying others"],
                answer: 0
            },
            {
                question: "Self-awareness helps with:",
                options: ["Avoiding emotions", "Better decision-making", "Hiding feelings", "Ignoring problems"],
                answer: 1
            },
            {
                question: "A good way to develop self-awareness is:",
                options: ["Ignoring feedback", "Regular journaling", "Avoiding reflection", "Never questioning yourself"],
                answer: 1
            },
            {
                question: "Self-aware people:",
                options: ["Never make mistakes", "Understand their triggers", "Hide their emotions", "Avoid difficult conversations"],
                answer: 1
            }
        ],
        prompt: "What emotions do you notice most often during your day? What situations or thoughts trigger them?"
    },
    {
        id: 3,
        title: "Mindfulness and Stress Relief",
        icon: "🧘",
        description: "Practice being present and managing stress",
        article: `
      <h2>Understanding Mindfulness</h2>
      <p>Mindfulness is the practice of being fully present and engaged in the moment, aware of your thoughts and feelings without judgment. It's a powerful tool for reducing stress and improving overall well-being.</p>
      
      <h3>The Science Behind Mindfulness</h3>
      <p>Research shows that regular mindfulness practice can:</p>
      <ul>
        <li>Reduce stress and anxiety</li>
        <li>Improve focus and concentration</li>
        <li>Enhance emotional regulation</li>
        <li>Lower blood pressure</li>
        <li>Improve sleep quality</li>
        <li>Boost immune system function</li>
      </ul>
      
      <h3>Simple Mindfulness Exercises</h3>
      
      <h4>1. Breathing Exercise (5 minutes)</h4>
      <p>Find a quiet space, close your eyes, and focus on your breath. Notice the sensation of air entering and leaving your body. When your mind wanders, gently bring it back to your breath.</p>
      
      <h4>2. Body Scan (10 minutes)</h4>
      <p>Lie down and mentally scan your body from head to toe, noticing any sensations, tension, or discomfort without trying to change anything.</p>
      
      <h4>3. Mindful Walking</h4>
      <p>Take a slow walk and pay attention to each step, the feeling of your feet on the ground, and the environment around you.</p>
      
      <h4>4. 5-4-3-2-1 Grounding Technique</h4>
      <p>Notice: 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, 1 thing you can taste.</p>
    `,
        quiz: [
            {
                question: "What is mindfulness?",
                options: ["Ignoring problems", "Being fully present", "Overthinking", "Avoiding emotions"],
                answer: 1
            },
            {
                question: "Mindfulness can help:",
                options: ["Increase stress", "Reduce anxiety", "Create worry", "Avoid reality"],
                answer: 1
            },
            {
                question: "A simple mindfulness practice is:",
                options: ["Multitasking", "Focused breathing", "Rushing through tasks", "Constant planning"],
                answer: 1
            },
            {
                question: "The 5-4-3-2-1 technique helps with:",
                options: ["Planning future", "Grounding in present", "Remembering past", "Avoiding feelings"],
                answer: 1
            }
        ],
        prompt: "Try a 2-minute breathing exercise right now. How do you feel afterward? What did you notice about your thoughts?"
    },
    {
        id: 4,
        title: "Developing Effective Coping Strategies",
        icon: "🛡️",
        description: "Build healthy ways to handle life's challenges",
        article: `
      <h2>Understanding Coping Strategies</h2>
      <p>Coping strategies are the thoughts and behaviors we use to manage stressful situations and difficult emotions. Developing healthy coping mechanisms is essential for mental well-being.</p>
      
      <h3>Types of Coping Strategies</h3>
      
      <h4>Problem-Focused Coping</h4>
      <p>Directly addressing the source of stress:</p>
      <ul>
        <li>Making a plan of action</li>
        <li>Seeking information or advice</li>
        <li>Learning new skills</li>
        <li>Time management</li>
      </ul>
      
      <h4>Emotion-Focused Coping</h4>
      <p>Managing the emotional response to stress:</p>
      <ul>
        <li>Talking with friends or family</li>
        <li>Practicing relaxation techniques</li>
        <li>Engaging in hobbies</li>
        <li>Journaling</li>
        <li>Meditation or prayer</li>
      </ul>
      
      <h3>Healthy vs. Unhealthy Coping</h3>
      
      <h4>Healthy Coping Strategies:</h4>
      <ul>
        <li>Exercise and physical activity</li>
        <li>Seeking social support</li>
        <li>Practicing mindfulness</li>
        <li>Creative expression (art, music, writing)</li>
        <li>Setting boundaries</li>
        <li>Professional help when needed</li>
      </ul>
      
      <h4>Unhealthy Coping (to avoid):</h4>
      <ul>
        <li>Substance abuse</li>
        <li>Emotional eating</li>
        <li>Social withdrawal</li>
        <li>Aggression</li>
        <li>Denial or avoidance</li>
      </ul>
      
      <h3>Building Your Coping Toolkit</h3>
      <p>Different situations call for different strategies. Create a personal "coping toolkit" with 5-7 strategies you can use in various situations.</p>
    `,
        quiz: [
            {
                question: "Problem-focused coping involves:",
                options: ["Ignoring the problem", "Addressing the stressor", "Avoiding feelings", "Blaming others"],
                answer: 1
            },
            {
                question: "Which is a healthy coping strategy?",
                options: ["Substance use", "Exercise", "Social isolation", "Denial"],
                answer: 1
            },
            {
                question: "Emotion-focused coping includes:",
                options: ["Suppressing emotions", "Talking with friends", "Avoiding the issue", "Aggressive behavior"],
                answer: 1
            },
            {
                question: "A good coping toolkit should have:",
                options: ["Only one strategy", "Multiple strategies", "No strategies", "Only avoidance tactics"],
                answer: 1
            }
        ],
        prompt: "List 3-5 healthy coping strategies that work best for you. When do you use each one?"
    },
    {
        id: 5,
        title: "Empathy and Compassion",
        icon: "❤️",
        description: "Connect deeply with yourself and others",
        article: `
      <h2>The Heart of Human Connection</h2>
      <p>Empathy and compassion are essential for building meaningful relationships and creating a supportive community. They're also crucial for self-care and personal growth.</p>
      
      <h3>Understanding Empathy</h3>
      <p>Empathy is the ability to understand and share the feelings of another person. There are three types:</p>
      <ul>
        <li><strong>Cognitive empathy:</strong> Understanding someone's perspective</li>
        <li><strong>Emotional empathy:</strong> Feeling what someone else feels</li>
        <li><strong>Compassionate empathy:</strong> Being moved to help</li>
      </ul>
      
      <h3>Self-Compassion: Being Kind to Yourself</h3>
      <p>Self-compassion involves treating yourself with the same kindness you'd offer a good friend. It includes:</p>
      <ul>
        <li><strong>Self-kindness:</strong> Being warm toward yourself when you suffer</li>
        <li><strong>Common humanity:</strong> Recognizing that everyone struggles</li>
        <li><strong>Mindfulness:</strong> Observing negative thoughts without judgment</li>
      </ul>
      
      <h3>Developing Empathy</h3>
      <ul>
        <li>Listen actively without interrupting</li>
        <li>Ask open-ended questions</li>
        <li>Suspend judgment</li>
        <li>Pay attention to body language</li>
        <li>Validate others' feelings</li>
        <li>Share your own vulnerabilities</li>
      </ul>
      
      <h3>The Ripple Effect</h3>
      <p>When we practice empathy and compassion, we:</p>
      <ul>
        <li>Strengthen relationships</li>
        <li>Reduce conflict</li>
        <li>Increase happiness</li>
        <li>Build supportive communities</li>
        <li>Improve our own mental health</li>
      </ul>
    `,
        quiz: [
            {
                question: "Compassionate empathy means:",
                options: ["Feeling superior", "Being moved to help", "Ignoring others", "Judging feelings"],
                answer: 1
            },
            {
                question: "Self-compassion includes:",
                options: ["Self-criticism", "Self-kindness", "Perfectionism", "Self-blame"],
                answer: 1
            },
            {
                question: "To develop empathy, you should:",
                options: ["Interrupt often", "Listen actively", "Judge quickly", "Avoid eye contact"],
                answer: 1
            },
            {
                question: "Common humanity means recognizing:",
                options: ["You're alone in struggles", "Everyone struggles", "Only you suffer", "Others don't understand"],
                answer: 1
            }
        ],
        prompt: "Reflect on a time someone showed you compassion. How did it make you feel? How can you show that same compassion to yourself today?"
    },
    {
        id: 6,
        title: "Work-Life Balance",
        icon: "⚖️",
        description: "Create harmony between work and personal life",
        article: `
      <h2>Finding Balance in a Busy World</h2>
      <p>Work-life balance is about creating harmony between your professional responsibilities and personal life. It's essential for preventing burnout and maintaining mental well-being.</p>
      
      <h3>Signs of Poor Work-Life Balance</h3>
      <ul>
        <li>Constant fatigue</li>
        <li>Reduced productivity</li>
        <li>Strained relationships</li>
        <li>Lack of time for hobbies</li>
        <li>Feeling overwhelmed</li>
        <li>Health issues</li>
        <li>Difficulty sleeping</li>
      </ul>
      
      <h3>Strategies for Better Balance</h3>
      
      <h4>Set Boundaries</h4>
      <ul>
        <li>Define work hours and stick to them</li>
        <li>Learn to say "no" to additional commitments</li>
        <li>Turn off work notifications after hours</li>
        <li>Create a dedicated workspace at home</li>
      </ul>
      
      <h4>Prioritize and Plan</h4>
      <ul>
        <li>Use time-blocking techniques</li>
        <li>Focus on important, not just urgent, tasks</li>
        <li>Schedule personal time like appointments</li>
        <li>Delegate when possible</li>
      </ul>
      
      <h4>Self-Care Is Not Selfish</h4>
      <ul>
        <li>Regular exercise</li>
        <li>Adequate sleep (7-9 hours)</li>
        <li>Healthy eating</li>
        <li>Social connections</li>
        <li>Hobbies and leisure activities</li>
      </ul>
      
      <h3>The 4 Quadrants of Life Balance</h3>
      <ul>
        <li><strong>Work:</strong> Career and professional development</li>
        <li><strong>Health:</strong> Physical and mental well-being</li>
        <li><strong>Relationships:</strong> Family, friends, community</li>
        <li><strong>Self:</strong> Personal growth, hobbies, passions</li>
      </ul>
      
      <p>Assess which quadrants need more attention and make adjustments accordingly.</p>
    `,
        quiz: [
            {
                question: "A sign of poor work-life balance is:",
                options: ["High energy", "Constant fatigue", "Strong relationships", "Regular hobbies"],
                answer: 1
            },
            {
                question: "Setting boundaries means:",
                options: ["Working 24/7", "Defining work hours", "Never saying no", "Ignoring personal time"],
                answer: 1
            },
            {
                question: "Self-care in work-life balance is:",
                options: ["Selfish", "Essential", "Optional", "Wasteful"],
                answer: 1
            },
            {
                question: "The four quadrants of life balance include:",
                options: ["Only work", "Work and health", "Work, health, relationships, self", "Just relationships"],
                answer: 2
            }
        ],
        prompt: "Evaluate your current work-life balance. Which of the 4 quadrants (work, health, relationships, self) needs more attention? What's one small change you can make this week?"
    },
    {
        id: 7,
        title: "Gratitude and Forgiveness",
        icon: "🙏",
        description: "Cultivate appreciation and let go of resentment",
        article: `
      <h2>The Healing Power of Gratitude and Forgiveness</h2>
      <p>Practicing gratitude and forgiveness can transform your mental well-being, improve relationships, and increase overall life satisfaction.</p>
      
      <h3>The Science of Gratitude</h3>
      <p>Research shows that regular gratitude practice:</p>
      <ul>
        <li>Increases happiness by 25%</li>
        <li>Improves sleep quality</li>
        <li>Strengthens the immune system</li>
        <li>Reduces depression and anxiety</li>
        <li>Enhances empathy</li>
        <li>Improves self-esteem</li>
      </ul>
      
      <h3>Practicing Gratitude</h3>
      
      <h4>Gratitude Journal</h4>
      <p>Write down 3-5 things you're grateful for each day. Be specific:</p>
      <ul>
        <li>"I'm grateful for my friend calling when I needed support"</li>
        <li>"I appreciate the warm sunshine during my walk"</li>
        <li>"I'm thankful for my body's ability to heal"</li>
      </ul>
      
      <h4>Gratitude Letter</h4>
      <p>Write a letter to someone who has positively impacted your life. If possible, read it to them in person.</p>
      
      <h4>Mindful Appreciation</h4>
      <p>Take time to savor positive experiences as they happen. Don't rush through good moments.</p>
      
      <h3>Understanding Forgiveness</h3>
      <p>Forgiveness doesn't mean:</p>
      <ul>
        <li>Condoning harmful behavior</li>
        <li>Forgetting what happened</li>
        <li>Reconciling with the person</li>
      </ul>
      
      <p>Forgiveness is:</p>
      <ul>
        <li>Letting go of resentment</li>
        <li>Releasing yourself from the burden of anger</li>
        <li>Choosing peace over pain</li>
        <li>A gift you give yourself</li>
      </ul>
      
      <h3>Steps to Forgiveness</h3>
      <ol>
        <li><strong>Acknowledge your pain:</strong> Don't minimize what happened</li>
        <li><strong>Recognize the cost:</strong> How is holding onto anger affecting you?</li>
        <li><strong>Choose forgiveness:</strong> Decide to prioritize your peace</li>
        <li><strong>Reframe the narrative:</strong> See the person as flawed, not evil</li>
        <li><strong>Release expectations:</strong> Accept that you may not get an apology</li>
      </ol>
      
      <h3>Self-Forgiveness</h3>
      <p>Forgiving yourself is just as important. Practice self-compassion and remember that making mistakes is part of being human.</p>
    `,
        quiz: [
            {
                question: "Gratitude practice can:",
                options: ["Decrease happiness", "Increase happiness", "Cause anxiety", "Create depression"],
                answer: 1
            },
            {
                question: "Forgiveness means:",
                options: ["Forgetting what happened", "Letting go of resentment", "Condoning behavior", "Staying angry"],
                answer: 1
            },
            {
                question: "A gratitude journal should include:",
                options: ["Only big events", "Specific things", "Complaints", "Worries"],
                answer: 1
            },
            {
                question: "Self-forgiveness involves:",
                options: ["Self-criticism", "Self-compassion", "Self-blame", "Perfectionism"],
                answer: 1
            }
        ],
        prompt: "List 5 things you're grateful for right now. Then, think of something you need to forgive yourself for. Write a compassionate message to yourself about it."
    },
    {
        id: 8,
        title: "Leadership and Mental Well-Being",
        icon: "🌟",
        description: "Lead yourself and inspire others",
        article: `
      <h2>Leading with Mental Well-Being</h2>
      <p>True leadership starts with self-leadership. When you prioritize your mental well-being, you become better equipped to inspire and support others.</p>
      
      <h3>Qualities of Mentally Healthy Leaders</h3>
      <ul>
        <li><strong>Self-awareness:</strong> Understanding your emotions and impact</li>
        <li><strong>Emotional regulation:</strong> Managing reactions effectively</li>
        <li><strong>Empathy:</strong> Understanding others' perspectives</li>
        <li><strong>Resilience:</strong> Bouncing back from setbacks</li>
        <li><strong>Authenticity:</strong> Being genuine and vulnerable</li>
        <li><strong>Growth mindset:</strong> Viewing challenges as opportunities</li>
      </ul>
      
      <h3>Self-Leadership: Leading Yourself First</h3>
      
      <h4>Set Clear Values and Goals</h4>
      <p>Know what matters most to you and align your actions with your values.</p>
      
      <h4>Practice Self-Discipline</h4>
      <p>Build habits that support your mental well-being, even when motivation is low.</p>
      
      <h4>Continuous Learning</h4>
      <p>Commit to personal growth through reading, courses, and new experiences.</p>
      
      <h4>Self-Reflection</h4>
      <p>Regularly assess your progress, challenges, and lessons learned.</p>
      
      <h3>Leading Others with Compassion</h3>
      
      <h4>Create Psychological Safety</h4>
      <ul>
        <li>Encourage open communication</li>
        <li>Welcome diverse perspectives</li>
        <li>Respond constructively to mistakes</li>
        <li>Show vulnerability</li>
      </ul>
      
      <h4>Model Healthy Behaviors</h4>
      <ul>
        <li>Take breaks and vacations</li>
        <li>Set boundaries</li>
        <li>Ask for help when needed</li>
        <li>Prioritize well-being over productivity</li>
      </ul>
      
      <h4>Support Team Mental Health</h4>
      <ul>
        <li>Check in regularly</li>
        <li>Provide resources</li>
        <li>Reduce stigma around mental health</li>
        <li>Offer flexibility when possible</li>
      </ul>
      
      <h3>The Ripple Effect of Leadership</h3>
      <p>When you prioritize mental well-being in your leadership:</p>
      <ul>
        <li>Teams become more engaged</li>
        <li>Creativity and innovation increase</li>
        <li>Trust deepens</li>
        <li>Turnover decreases</li>
        <li>Overall performance improves</li>
      </ul>
      
      <h3>Your Leadership Toolkit</h3>
      <ul>
        <li>Active listening skills</li>
        <li>Conflict resolution strategies</li>
        <li>Stress management techniques</li>
        <li>Communication frameworks</li>
        <li>Feedback methods</li>
        <li>Decision-making processes</li>
      </ul>
    `,
        quiz: [
            {
                question: "Self-leadership means:",
                options: ["Controlling others", "Leading yourself first", "Following others", "Avoiding responsibility"],
                answer: 1
            },
            {
                question: "A quality of mentally healthy leaders is:",
                options: ["Hiding emotions", "Emotional regulation", "Perfectionism", "Avoiding conflict"],
                answer: 1
            },
            {
                question: "Psychological safety means:",
                options: ["No disagreement", "Open communication", "Hiding mistakes", "Avoiding feedback"],
                answer: 1
            },
            {
                question: "Leaders should model:",
                options: ["Working non-stop", "Healthy boundaries", "Never resting", "Perfectionism"],
                answer: 1
            }
        ],
        prompt: "Reflect on your leadership journey (whether formal or informal). What's one way you can better lead yourself this week? How might this impact those around you?"
    }
];

export const motivationalQuotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
    "Healing is not linear. Be patient with yourself.",
    "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, annoyed, frustrated, scared, or anxious. Having feelings doesn't make you a negative person. It makes you human.",
    "Take a deep breath. It's just a bad day, not a bad life.",
    "Self-care is how you take your power back.",
    "You are worthy of the love and care you give to others.",
    "Progress, not perfection, is what we should be asking of ourselves.",
    "Your value doesn't decrease based on someone's inability to see your worth.",
    "Mental health is not a destination, but a process. It's about how you drive, not where you're going."
];
