// SITE SETTINGS
// 1. Set your GitHub repo below ("username/repo-name").
// 2. To add a poem: upload the image to assets/poems/ in the repo. The site picks it up and the counter updates.
// 3. Optional: add the poem to POEMS below (file name → text, author, audio...). Poems listed there
//    show first, in that order, with their typed text on hover. Images not listed are added after them.
//    - text: the poem, one line per line.
//    - from: what the participant wrote in "From:" (optional).
//    - audio: a recording in assets/audios/, played on hover (optional).
//    - translation: shown under the original text when the poem is not in English (optional).
// 4. Resources: upload the PDFs to resources/ with these exact names:
//    facilitators-guide_en.pdf, facilitators-guide_es.pdf, slide-deck.pdf, participant-booklet.pdf, poem-card.pdf
// 5. Workshops: add an entry to WORKSHOPS (at the bottom) for each workshop run.
//    - place, facilitator, description: shown as text.
//    - date: optional.
//    - images: optional list of photos in assets/workshops/, e.g. ['place-1.jpg', 'place-2.jpg'].
//      Just the file names. Keep each one under ~1600 px on its longest side.

window.SITE = {
  repo: 'USERNAME/REPO-NAME',
  branch: 'main',
  poemsFolder: 'assets/poems',
  audiosFolder: 'assets/audios',
  workshopsFolder: 'assets/workshops',
};

window.POEMS = [
  {
    file: '01-solenne-lazaro.jpg', audio: '01-solenne-lazaro.m4a', author: 'Solenne Lazaro',
    text: `Wake up, this ends tonight,
Halloween is coming
I'll take you back to black
What caused the outage?

Consider this your treat
Zuckerberg, I quit,
I got adorned for nothing
What is loop engineering?

It's over
It's over.`,
  },
  {
    file: '02-wafaa.jpg', audio: '02-wafaa.m4a', author: 'wafaa', from: 'I still want to connect with you',
    text: `Although we are not on the same
terms and condition
I still want to connect
you appeared in 9 of my dreams
this week.
it has been a while since I heard from you
your profile is popular now
But I still want to listen to songs
without ads with you
I still want to connect
and take a wednesday evening
trip with uber and you ♡`,
  },
  {
    file: '03-katerina.jpg', audio: '03-katerina.m4a', author: 'Katerina', from: 'October 2026',
    title: 'Of AI and men',
    text: `Ghosts aren't real, but your fears are.
A top AI safety researcher stopped saving for retirement.
Where to next?
4 new image styles to try.
The resilience story continues.
Reminder: Ghosts is back
Action required.
Tu momento tiene fecha de caducidad.
[Your moment has an expiration date]`,
  },
  {
    file: '04-davide.jpg', audio: '04-davide.m4a', author: 'Davide', from: 'Several disturbing companies',
    text: `Starting,
Fintech funding falls today
Access session from magic link
You missed messages
Access session from magic link
Please verify your device
Series B funding is blossoming
this afternoon call
MozFest starts today!
Access session from magic link
Please verify your device
Access session from magic link
You missed messages
Global VC are rediscovering Latin America
Here the magic link for auto log-in
Goodbye from Salena`,
  },
  {
    file: '05-linkedin-afterlife.jpg', audio: '05-linkedin-afterlife.m4a', author: 'Enric', from: "LinkedIn AfterLife — Surprise: you're dead!",
    text: `How are you
today Enric?
Closer to death
than yesterday!
If you really
want to keep AI style
in touch with
your network after
you are gone, please
consider LinkedIn
afterlife subscription.
You can pay with crypto
from the crypt!`,
  },
  {
    file: '06-dominique.jpg', audio: '06-dominique.m4a', author: 'Dominique', from: 'Next glass door',
    text: `Within seconds, she heard a scream.
New Jobs in LA Hiring now!
Major car accident reported in your area
MV Transportation is hiring now!
The new book marketing designers
should know about
Graphic designer role at Ross
Connect your business tools to Muse,
Newport Beach Police Department`,
  },
  {
    file: '07-housing-market.jpg', audio: '07-housing-market.m4a',
    text: `housing market updates
a new home for you!
price cut: 245.000
we dont say it enough
i want to connect
waiting for a response
good news! you have money
to spend
your 5$ is out there
split it. spend it. enjoy it.
a little better never perfect.`,
  },
  {
    file: '27-new-styles.jpg', audio: '08-new-styles.m4a', author: 'George and Toshinari', from: 'Junk folder',
    text: `New styles in triple black
New release from Phantom Limb
Oh dear, Sydney Sweeney's at it again
We're in an attention war. Get used to it
Why is the far right gaining ground in Brazil?
The agony of liberal Europe`,
  },
  {
    file: '28-so-pleased.jpg', audio: '09-so-pleased.m4a', author: 'Solenne Lazaro', title: 'Clitch',
    text: `So pleased to write you
and I hope this finds you well
It's only words, can you tell?
But look, an image too
The subject line is working
I got you to lean in
I promise there is no trick
It's Halloween, here's a treat
50% off
I beg you to just click
Oh darling, don't miss out
You almost made me pout
Why did you even subscribe?
I thought we were a tribe
Am I screaming in the well?
I hope this finds you well`,
  },
  {
    file: '08-imani-thompson.jpg', author: 'Imani Thompson', from: 'Jackbox, Webull, Duolingo, Calm, Bandcamp',
    text: `Hey, what are you doing this Thursday?
Do you want to talk about [REDACTED] 🔪?
Don't ghost me, Imani
I miss you.
My arms are longer now… now
Are you listening to your body?
Deep. Cosmic. Hypnotic.
I'm not above begging.
Perpetual futures are coming.
Nobody ignores me for long.`,
  },
  {
    file: '09-imani-thompson-2.jpg', author: 'Imani Thompson', from: 'Jackbox, Duolingo, Webull',
    text: `Open this if you like feet (foot emoji)
I'm not above begging
Jersey Mike's is now available in the IPO center
Are you listening?
Ahh! Someone's trying to kill me!`,
  },
  {
    file: '10-pep-talk.jpg',
    text: `The pep talk you need right now
What is your body telling you?
Hmm. Interesting.
My ideas deserve more
My arms are longer now
Nobody ignores me for long`,
  },
  {
    file: '11-beck.jpg', author: 'beck', from: 'Amazon, Grammarly, Calm, Jackbox, Cruise Line, Bandcamp',
    text: `deep. cosmic. hypnotic.
come find us,
we missed you.
your ideas deserve more.
upgrade,
personalize,
track your growth.
back to everything.
have you rested yet?`,
  },
  {
    file: '12-eve.jpg', author: 'Eve', from: 'God',
    text: `Action required!
Please complete
the skill that refuses to be automated.
Leadership takes courage.
Check your worth like you
do your credit.
New resources suggested for you
Acumen is a process, not a place
Your score went up! But remember
busy is not a symptom of
ambition. Now,
your session recap is ready &
you deserve a round of applause!`,
  },
  {
    file: '13-ale-png.jpg', author: 'ale.png', from: 'Futurespaces',
    text: `Don't burn out building your dream
bodies, cities, devices
Things take time while
AI's power boom is turning geothermal energy
into a scalable reality`,
  },
  {
    file: '14-kyndalbelle.jpg', author: 'Kyndalbelle',
    text: `I'm not above begging.
35% off — just because we miss you.
Your ideas deserve more
Are you listening to your body?
You're a really great listener
Thank you for being a really great listener.
What is your body telling you?
4% off — just because we miss you.`,
  },
  {
    file: '15-chiara.jpg', author: 'Chiara',
    text: `Unconditional love
Total obsession
Remember?
Maria, this is perfect for you
Maria, never saw it coming
Maria`,
  },
  {
    file: '16-reschedule.jpg',
    text: `Let's reschedule our call!
Not important, check when you have the bandwidth
Action needed today!
Important: session holder information
Let's reschedule our call!
JFF facial recognition consent
Let's reschedule our call today!
Re: Let's reschedule our call`,
  },
  {
    file: '17-kary.jpg', author: 'Kary', from: 'IKEA',
    text: `Organizar sabe bien,
¡casi has terminado!
Karina, ¿otro vistazo?
·
·
·
Karina, cuida tus libros.`,
    translation: `Organizing tastes good
Almost done!
Karina, another look?
Karina, take care of your books.`,
  },
  {
    file: '17-kary-2.jpg', author: 'Kary', from: 'AliExpress / IKEA',
    text: `News from Denisse,
Karina, we don't say it enough
A little better, never perfect
Karina, another look?`,
  },
  {
    file: '18-bradley-lauretti.jpg', author: 'Bradley Lauretti', from: 'Amazing Radio, Shopify, Kit',
    text: `Congratulations you're live on the Amazing
Radio Folkstream
Your Subscriber Signals offer ends
Shopify enabled Satispay
Superhuman wants to sponsor you
Fall 26 Edition just dropped
You're in the Amazing Radio Playlist
Recurring Charge Approved for
Kunakify CD DVD & Vinyl
Someone at Amazing Radio just listened
This Frontier Needs Heroes
has gained 1,000 subscribers`,
  },
  {
    file: '19-beadie-kns.jpg', author: 'Beadie + KNS',
    text: `The Gloves are off.
We will deliver you
We're expecting you
Waiting.
Last chance.`,
  },
  {
    file: '20-matilde.jpg',
    text: `Let's move Matilde!
Fresh products are waiting for you
Get the best value from Rev points
You sent 100€
Security Alert: you shared some
data of your Account`,
  },
  {
    file: '21-giovanni.jpg', author: 'Giovanni', from: 'Steve — Sources and Methods',
    text: `For love, I would still watch, for the 12th time, your fav. movie,
I would just win at Uno but pretend
to lose, for you I would get a
job, for you I would even go on
the holiday we always talked about,
my first sober holiday in 20 years
No more Blame Games, or
ghosting, or zoning out.
Together we'll only ask each other
if we have seen this or that,
updates, hugs, kisses
and long audios and code reds,
red carpet and sail away`,
  },
  {
    file: '22-domain-expiring.jpg',
    text: `Your domain is expiring
Ghosts aren't real, but your fears are
Elderly woman arrested for protesting delivery robot
The unmade film that shaped Hayao Miyazaki`,
  },
  {
    file: '23-newsletters.jpg', from: 'All the newsletters that spy on you',
    text: `Updates updates
You've got no privacy
but we pretend sending updates of our privacy user notice
Did you see this?
We know you have
messages unseen
from all your life
because 80 summers is all you have
… Still watching?
Yes, we do. We will ever do`,
  },
  {
    file: '24-azad.jpg', author: 'Azad', from: 'Alarmist Intelligence Bot (AI)',
    text: `Have you arrived?
You have a new statement
You missed messages
You were mentioned
You have been removed
Please verify your device
Please verify your email address
Please verify your device
Thank you for your payment
Run canceled
Please verify your device
Have you arrived?`,
  },
  {
    file: '25-claudia-acabado.jpg', author: 'Cláudia Acabado',
    text: `O último convite que
te vou enviar
Os erros fragilizam
sem ninguém se fiar
Não tenho tempo
para aprender
Uma negociação pode
falhar até ao amanhecer
"Um dia vou…" é
uma frase muito
perigosa`,
    translation: `The last invitation
I'm going to send you
Mistakes weaken,
without anyone trusting
I don't have time
to learn
A negotiation can fail
until dawn,
"One day I will…"
it's a very dangerous
phrase.`,
  },
  {
    file: '26-andrew-nicolaou.jpg', author: 'Andrew Nicolaou', from: 'LinkedIn, PAYBACK',
    text: `Andrew, Achtung:
Your profile is very popular.
Willst du super "punkten"?

Emma — We are hiring!
Andrew just posted something
that might be of interest to you.

test`,
    translation: `Andrew, attention:
Your profile is very popular.
Do you want to score big?`,
  },
  {
    file: '29-seeking-job-seeks.jpg', title: 'Seeking Job Seeks',
    text: `Are you a food enthusiast?
Are you health conscious?
I'm looking for AI-decision makers
30 mins on your dairy choices and ad-perceptions
Seeking shopping enthusiasts
Your payment: Questions?`,
  },
  {
    file: '30-double-trouble.jpg', author: 'Giovanni',
    text: `Double trouble?
Chill out!
The forever bill.
Lay low, take a shot.
Energy boost, walk away on top.
Six years left.
To the beach.
Insert coin, Big swing.
Joining forces, food for thought`,
  },
  {
    file: '31-divanat.jpg',
    text: `Диванът и килимът обичат
Цените скачат
Побързайте!
С грижа за връзките`,
    translation: `The sofa and the rug are in love
Prices are jumping
Hurry!
Caring for your connections`,
  },
];

window.WORKSHOPS = [
  {
    place: 'Fabra i Coats, Barcelona',
    date: '28–30 October 2026',
    facilitator: 'Alejandra F.',
    description: 'Session run at the Mozilla Festival (MozFest) 2026.',
    images: ['mozfest-2026_1.jpg', 'mozfest-2026_2.jpg', 'mozfest-2026_3.jpg'],
  },
];
