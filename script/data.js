/**
 * Marvy Editorial Publication — Core Article Dataset & Repository
 */

const BLOG_POSTS = [
  {
    id: "marvy-01",
    slug: "poetics-of-raw-concrete",
    title: "The Poetics of Raw Concrete: Architectural Solitude in Modernist Landscapes",
    subtitle: "How monolithic brutalism transforms natural light, human silence, and physical permanence in contemporary dwellings.",
    category: "Architecture",
    readTime: "7 min read",
    date: "OCTOBER 04, 2026",
    isoDate: "2026-10-04",
    author: {
      name: "Elena Vance",
      role: "Architecture Critic & Essayist",
      avatar: "media/editor-portrait.jpg"
    },
    coverImage: "media/hero-architecture.jpg",
    featured: true,
    trendingRank: "01",
    excerpt: "Monolithic structures do not compete with their surroundings; they command presence through deliberate silence and the textured gravity of cast stone.",
    tags: ["Brutalism", "Concrete", "Spatial Theory", "Modernism"],
    likes: 342,
    bookmarks: 189,
    content: `
      <p class="article-lead">Modern architecture has spent the past three decades obsessed with lightness, transparency, and weightless membranes. Glass curtain walls promised an erasure of boundary between the inhabitant and the world. Yet in that rush toward absolute transparency, dwelling lost its primordial sense of sanctuary.</p>
      
      <h2>The Weight of True Sanctuary</h2>
      <p>Enter the renewed fascination with raw aggregate, textured board-formed concrete, and monumental volumetric silence. When we step into a space sculpted from structural concrete, we are not looking through the building; we are inside its physical gravity.</p>
      
      <blockquote>
        "Concrete is the geology of human intention. It does not ask to be loved for its ornamentation, but respected for its unapologetic permanence."
      </blockquote>

      <p>In our field studies across rugged coastal cliffs, where salt spray and coastal fog carve relentless textures into every façade, these dwellings age with a tactile nobility that sterile synthetic panels simply cannot replicate.</p>

      <h2>Light as a Sculptural Material</h2>
      <p>Without deep mass, shadow has no anchor. Notice how the angled porticos funnel late afternoon illumination across untreated concrete grain. As the sun dips toward the horizon, amber highlights collide with cool shadow bands, creating a kinetic living canvas within the room.</p>
      
      <p>This is where contemporary luxury is headed: not toward gilded hardware or gold-leaf flourishes, but toward the rare luxury of stillness, acoustic insulation, and material honesty.</p>
    `
  },
  {
    id: "marvy-02",
    slug: "tactile-monoliths-industrial-design",
    title: "Tactile Monoliths: Why Industrial Objects Are Rejecting Glossy Plastic",
    subtitle: "A return to chiseled stone, cast zinc, and weighted metals in our daily physical artifacts.",
    category: "Design",
    readTime: "5 min read",
    date: "SEPTEMBER 28, 2026",
    isoDate: "2026-09-28",
    author: {
      name: "Marcus Thorne",
      role: "Industrial Design Lead",
      avatar: "media/editor-portrait.jpg"
    },
    coverImage: "media/design-minimal.jpg",
    featured: true,
    trendingRank: "02",
    excerpt: "In a digital-first era where every interface is a smudge of glass, physical objects must justify their existence through sensory friction and heft.",
    tags: ["Industrial Design", "Materials", "Sensory UX", "Minimalism"],
    likes: 215,
    bookmarks: 104,
    content: `
      <p class="article-lead">Pick up an object produced in 2012, and you will likely feel the flexing hollow shell of injection-molded polycarbonate. Pick up a sculpted artifact from today's emergent design studios, and your hand encounters dense basalt, cold sand-cast iron, and precision milled alloys.</p>

      <h2>The Pathology of Smoothness</h2>
      <p>Philosopher Byung-Chul Han wrote extensively about the "culture of the smooth" — an aesthetic that eliminates all resistance, friction, and dirt in service of seamless consumption. However, the human sensory apparatus thrives on resistance.</p>

      <blockquote>
        "Friction is memory. The knurling on a dial, the cold density of stone, and the patina of oxidized bronze provide the cognitive anchors our fingertips yearn for."
      </blockquote>

      <h2>Designing for Generations, Not Upgrade Cycles</h2>
      <p>When an object possesses natural weight, its relationship with its owner fundamentally changes. It ceases to be an ephemeral gadget awaiting its battery death and becomes an enduring heirloom that gathers dignity with age.</p>
    `
  },
  {
    id: "marvy-03",
    slug: "analog-resurgence-synthesizer-culture",
    title: "Voltage and Resistance: The Resurgence of Knobs, Dials & Raw Audio",
    subtitle: "Behind the tactile renaissance in modern electronic music synthesis and sound design.",
    category: "Technology",
    readTime: "6 min read",
    date: "SEPTEMBER 19, 2026",
    isoDate: "2026-09-19",
    author: {
      name: "Soren Lindqvist",
      role: "Acoustic Engineer & Musician",
      avatar: "media/editor-portrait.jpg"
    },
    coverImage: "media/sound-synth.jpg",
    featured: true,
    trendingRank: "03",
    excerpt: "Why top producers are turning away from infinite drop-down menus in digital audio workstations to touch physical copper patch cords and potentiometers.",
    tags: ["Audio", "Hardware", "Analog", "Synthesis"],
    likes: 412,
    bookmarks: 230,
    content: `
      <p class="article-lead">On a digital screen, every parameter is infinite. You can have a thousand tracks, eighty automated LFOs, and unlimited plugin chains. Yet ironically, infinite choice frequently yields creative paralysis.</p>

      <h2>The Sonic Imperfection of Copper & Voltage</h2>
      <p>When current passes through temperature-sensitive resistors and discrete analog transistors, something unpredictable occurs: harmonic drift. That subtle, non-linear distortion breathes life into low-frequency rumbles.</p>

      <blockquote>
        "An interface with boundaries forces decisions. When you only have four knobs on a steel console, you listen with your ears rather than your eyes."
      </blockquote>

      <p>The tactile feedback of heavy metal potentiometers connected directly to voltage dividers bridges the sensory gap between musician and instrument, making every live recording a unique snapshot of a passing moment.</p>
    `
  },
  {
    id: "marvy-04",
    slug: "sanctuary-of-the-atelier",
    title: "Sanctuary of the Atelier: Rituals of Modern Architectural Studios",
    subtitle: "Step inside the serene cedar, vellum, and paper workshop spaces of Kyoto and Oslo.",
    category: "Culture",
    readTime: "8 min read",
    date: "SEPTEMBER 12, 2026",
    isoDate: "2026-09-12",
    author: {
      name: "Aoi Takahashi",
      role: "Cultural Anthropologist",
      avatar: "media/editor-portrait.jpg"
    },
    coverImage: "media/studio-workspace.jpg",
    featured: false,
    trendingRank: "04",
    excerpt: "Physical models carved in balsa wood and hand-inked trace paper remain irreplaceable tools for feeling spatial proportion before software ever opens.",
    tags: ["Studio Life", "Craft", "Kyoto", "Architecture"],
    likes: 188,
    bookmarks: 92,
    content: `
      <p class="article-lead">In a sunlit workshop in northern Kyoto, three architects sit silently around a cedar workbench. There are no buzzing notifications, no dual 4K monitors glowing with CAD wireframes. Only the whisper of Japanese hand saws cutting through basswood blocks.</p>

      <h2>Physicality Before Digital Translation</h2>
      <p>Before any project enters 3D modeling pipelines, every spatial proportion is tested in physical reality. "A scale model allows your eyes to take the place of the afternoon sun," notes master craftsperson Kenjiro Mori.</p>

      <blockquote>
        "The hand possesses an intelligence that precedes analytical computation. When your fingers fold paper, they discover tolerances that code overlooks."
      </blockquote>

      <p>This deliberate slow-work philosophy does not reject computational engineering; rather, it grounds high-tech fabrication in human scale and quiet reverence.</p>
    `
  },
  {
    id: "marvy-05",
    slug: "slowness-as-editorial-rebellion",
    title: "Slowness as Rebellion: The Independent Magazine Manifesto",
    subtitle: "In a world poisoned by algorithmic rage-bait, depth of thought is the ultimate radical act.",
    category: "Philosophy",
    readTime: "4 min read",
    date: "SEPTEMBER 05, 2026",
    isoDate: "2026-09-05",
    author: {
      name: "Elena Vance",
      role: "Editor-in-Chief",
      avatar: "media/editor-portrait.jpg"
    },
    coverImage: "media/editor-portrait.jpg",
    featured: false,
    trendingRank: "05",
    excerpt: "Why Marvy publishes four meticulously edited quarterly volumes instead of fourteen frantic clickbait updates an hour.",
    tags: ["Manifesto", "Editorial", "Slow Media", "Essays"],
    likes: 512,
    bookmarks: 310,
    content: `
      <p class="article-lead">The internet was envisioned as the greatest knowledge commons ever conceived by humanity. Somewhere along the way, that vision was captured by engagement metrics, infinite feeds, and programmatic advertising that prioritizes nervous agitation over clarity.</p>

      <h2>The Cost of Frictionless Information</h2>
      <p>When information costs nothing to produce and even less to distribute, signal-to-noise collapses. Algorithmic feeds optimize for immediate visceral shock, rewarding sensationalism and punishing nuanced deliberation.</p>

      <blockquote>
        "We do not need more commentary. We need better questions, deeper archives, and the courage to remain silent until something genuinely worth saying arrives."
      </blockquote>

      <p>Marvy was founded on an unapologetic belief: people still crave deep reading experiences. Beautiful paper, meticulous typography, and ideas that will still be true ten years from today.</p>
    `
  },
  {
    id: "marvy-06",
    slug: "subtle-interfaces-calm-technology",
    title: "Calm Computing: Designing Interfaces That Don't Demand Your Life",
    subtitle: "Moving beyond notification anxiety toward ambient, respectful software design.",
    category: "Technology",
    readTime: "5 min read",
    date: "AUGUST 24, 2026",
    isoDate: "2026-08-24",
    author: {
      name: "Marcus Thorne",
      role: "Industrial Design Lead",
      avatar: "media/editor-portrait.jpg"
    },
    coverImage: "media/design-minimal.jpg",
    featured: false,
    trendingRank: "06",
    excerpt: "How e-ink displays, discrete status indicators, and non-intrusive sound design help restore human cognitive agency.",
    tags: ["Calm Tech", "Cognition", "UX", "E-Ink"],
    likes: 298,
    bookmarks: 147,
    content: `
      <p class="article-lead">Mark Weiser and John Seely Brown introduced the concept of 'Calm Technology' in 1995. They predicted that the most profound technologies would disappear into the background of daily life, moving seamlessly between our center and periphery of attention.</p>

      <h2>The Tyranny of Red Badges</h2>
      <p>Thirty years later, our devices do the exact opposite. Every badge is an urgent crimson pulse designed to trigger dopamine release and interrupt deep contemplation. The design community has a moral obligation to rectify this hostility.</p>

      <p>By leveraging ambient lighting, tactile click wheels, and high-legibility e-paper substrates, we can build tools that serve us when summoned, then effortlessly fade into quiet obscurity.</p>
    `
  }
];

// Helper functions for state
function getStoredBookmarks() {
  try {
    return JSON.parse(localStorage.getItem('marvy_bookmarks') || '[]');
  } catch (e) {
    return [];
  }
}

function getStoredLikes() {
  try {
    return JSON.parse(localStorage.getItem('marvy_likes') || '[]');
  } catch (e) {
    return [];
  }
}

function toggleBookmarkStorage(postId) {
  const bookmarks = getStoredBookmarks();
  const index = bookmarks.indexOf(postId);
  let isBookmarked = false;
  if (index > -1) {
    bookmarks.splice(index, 1);
    isBookmarked = false;
  } else {
    bookmarks.push(postId);
    isBookmarked = true;
  }
  localStorage.setItem('marvy_bookmarks', JSON.stringify(bookmarks));
  return { isBookmarked, count: bookmarks.length };
}

function toggleLikeStorage(postId) {
  const likes = getStoredLikes();
  const index = likes.indexOf(postId);
  let isLiked = false;
  if (index > -1) {
    likes.splice(index, 1);
    isLiked = false;
  } else {
    likes.push(postId);
    isLiked = true;
  }
  localStorage.setItem('marvy_likes', JSON.stringify(likes));
  return { isLiked, count: likes.length };
}
