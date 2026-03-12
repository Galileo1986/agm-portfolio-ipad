/* data-ipad.js — Project Data for iPad Portfolio
 *
 * Auto-synced from tools/data.js
 * Last sync: 3/12/2026, 1:21:15 PM
 *
 * To update: Run 'node sync-to-ipad.js' from project root
 */

var SITE_CONFIG = {
  siteName: 'Atelier Galileo Morandi',
  logoText: 'AGM\u00A9',
  subtitle: 'DESIGN STUDIO FROM LOS ANGELES',
  timezone: 'America/Los_Angeles',
  timezoneLabel: 'LA',
  social: {
    instagram: '#',
    linkedin: '#',
    x: '#'
  },
  year: 2026
};

var PROJECTS = [
  {
    id: 'ramzi-villa',
    name: 'RAMZI VILLA',
    tagline: 'Crafting a private sanctuary of modern luxury',
    categories: ['interior-design', 'architectural-design'],
    image: { src: 'images/projects/RAMZI villa/01_Formal Living Room copy.png', alt: 'Ramzi Villa — formal living room rendering' },
    featured: false
  },
  {
    id: 'sunset-villa',
    name: 'SUNSET VILLA',
    tagline: 'Framing light and landscape in residential design',
    categories: ['architectural-design', 'interior-design'],
    image: { src: 'images/projects/SUNSET VILLA/LOW RES/01.jpg', alt: 'Sunset Villa — exterior rendering' },
    featured: false
  },
  {
    id: 'cafe-boulud',
    name: 'CAFE BOULUD',
    tagline: 'Reimagining a culinary icon through spatial design',
    categories: ['interior-design', 'architectural-design'],
    image: { src: 'images/projects/CAFE BOULUD/CAFE_BOULUD_BH_HD_02.jpg', alt: 'Cafe Boulud — interior rendering' },
    featured: false
  },
  {
    id: 'royal-fromentin',
    name: 'ROYAL FROMENTIN',
    tagline: 'Restoring grandeur with contemporary precision',
    categories: ['interior-design', 'architectural-design'],
    image: { src: 'images/projects/ROYAL FROMENTIN/01.png', alt: 'Royal Fromentin — exterior rendering' },
    featured: false
  },
  {
    id: 'muse',
    name: 'MUSE',
    tagline: 'Where art meets architecture in curated space',
    categories: ['interior-design', 'art-direction'],
    image: { src: 'images/projects/MUSE/01-COMPLETED-03.jpg', alt: 'MUSE — wall sconce detail' },
    featured: false
  },
  {
    id: 'if-buildings-could-talk',
    name: 'IF BUILDINGS COULD TALK',
    tagline: 'Giving voice to architecture through media projection',
    categories: ['media-art', 'technological-integration'],
    image: { src: 'images/projects/If buildings could talk/01.png', alt: 'If Buildings Could Talk — facade media projection' },
    featured: true
  },
  {
    id: 'z-hotel',
    name: 'Z HOTEL',
    tagline: 'Engineering hospitality at the edge of computation',
    categories: ['architectural-design', 'technological-integration'],
    image: { src: 'images/projects/Z Hotel/01.jpeg', alt: 'Z Hotel — architectural exterior', position: 'left center' },
    featured: false
  },
  {
    id: 'ad-space-club',
    name: 'AD SPACE CLUB',
    tagline: 'Designing immersive environments for nightlife culture',
    categories: ['art-direction', 'interior-design'],
    image: { src: 'images/projects/AD Space Club/01.png', alt: 'AD Space Club — immersive club environment' },
    featured: true
  },
  {
    id: 'puto-hotel',
    name: 'PUTO HOTEL',
    tagline: 'Sculpting hospitality through geometric glass and raw concrete',
    categories: ['architectural-design', 'interior-design'],
    image: { src: 'images/projects/Puto Hotel/01.jpg', alt: 'Puto Hotel — exterior view' },
    featured: true
  },
  {
    id: 'mediated-reality',
    name: 'MEDIATED REALITY',
    tagline: 'Bridging physical and digital through extended reality',
    categories: ['media-art', 'technological-integration'],
    image: { src: 'images/projects/Mediated Reality/01.png', alt: 'Mediated Reality — mixed reality visualization' },
    featured: false
  },
  {
    id: 'asap-hommade',
    name: 'A$AP HOMMADE',
    tagline: 'Materializing sound culture through sculptural installation',
    categories: ['media-art', 'art-direction'],
    image: { src: 'images/projects/A$AS Hommade/01_hommade-02.png', alt: 'A$AP Hommade — installation with artist' },
    featured: true
  }
];

var CATEGORIES = [
  { id: 'all', label: 'ALL WORKS' },
  { id: 'architectural-design', label: 'ARCHITECTURAL DESIGN' },
  { id: 'interior-design', label: 'INTERIOR DESIGN' },
  { id: 'art-direction', label: 'ART DIRECTION' },
  { id: 'media-art', label: 'MEDIA ART' },
  { id: 'technological-integration', label: 'TECHNOLOGICAL INTEGRATION' }
];

var SERVICES = [
  {
    id: 'architectural-design',
    name: 'ARCHITECTURAL DESIGN',
    description: 'Exterior and interior architectural projects with a focus on computational design and digital fabrication.',
    image: { src: 'images/services/ARCHITECTURAL DESIGN.png', alt: 'Architectural design — angular geometry with dramatic lighting' }
  },
  {
    id: 'interior-design',
    name: 'INTERIOR DESIGN',
    description: 'High-end interior spaces with curated materials, bespoke furniture, and sculptural details.',
    image: { src: 'images/services/INTERIOR DESIGN.jpeg', alt: 'Interior design — curated materials and warm lighting' }
  },
  {
    id: 'art-direction',
    name: 'ART DIRECTION',
    description: 'Editorial-style compositions, set design, and campaign shoots with strong visual narrative.',
    image: { src: 'images/services/ART DIRECTION.png', alt: 'Art direction — editorial composition and styled objects' }
  },
  {
    id: 'media-art',
    name: 'MEDIA ART',
    description: 'Immersive installations, projection mapping, and digital art in physical space.',
    image: { src: 'images/services/MEDIA ART.png', alt: 'Media art — immersive installation with light and color' }
  },
  {
    id: 'digital-fabrication',
    name: 'DIGITAL FABRICATION',
    description: 'CNC-milled and 3D-printed objects with parametric geometry and visible tool paths.',
    image: { src: 'images/services/DIGITAL FABRICATION.jpg', alt: 'Digital fabrication — CNC-milled parametric object closeup' }
  },
  {
    id: 'technological-integration',
    name: 'TECHNOLOGICAL INTEGRATION',
    description: 'Computational design visualization, algorithmic patterns, and smart-system interfaces.',
    image: { src: 'images/services/TECHNOLOGICAL INTEGRATION.png', alt: 'Technological integration — algorithmic pattern visualization' }
  }
];

/* Project detail data — extended info for project detail pages */
var PROJECT_DETAILS = {
  'cafe-boulud': {
    subtitle: 'Reimagining a culinary icon through spatial design',
    heroImage: { src: 'images/projects/CAFE BOULUD/CAFE_BOULUD_BH_HD_02.jpg', alt: 'Cafe Boulud — main interior rendering' },
    overlayText: 'CAFE BOULUD',
    meta: {
      services: ['Interior Design', 'Fabrication'],
      client: 'SHVO - Mandarin Oriental',
      location: 'Los Angeles, CA',
      year: '2025'
    },
    info: 'Located on the ground floor of the new Mandarin Oriental Beverly Hills, Cafe Boulud is a high-end restaurant by world-renowned chef Daniel Boulud, his first venture in Los Angeles. The space offers both indoor and outdoor dining at the intersection of culinary art and design. The entry unfolds through a series of walls that act like theatrical stages, gradually revealing the interior. Organic forms and custom-designed pieces envelop diners in a timeless atmosphere with modern touches. Three distinct dining areas define the experience. The bistro features a mosaic-adorned bar and niche booths that create an intimate, private ambiance, while a large ceiling mirror enhances the light and reflects the surrounding space.',
    liveLink: null,
    gallery: [
      { src: 'images/projects/CAFE BOULUD/ENTRANCE.jpg', alt: 'Cafe Boulud — entrance', layout: 'wide' },
      { src: 'images/projects/CAFE BOULUD/CAFE_BOULUD_BH_HD_03.jpg', alt: 'Cafe Boulud — dining room arcade', layout: 'portrait' },
      { src: 'images/projects/CAFE BOULUD/CAFE_BOULUD_BH_HD_04.jpg', alt: 'Cafe Boulud — main dining room', layout: 'portrait' },
      { src: 'images/projects/CAFE BOULUD/CAFE_BOULUD_BH_HD_05.jpg', alt: 'Cafe Boulud — bar area', layout: 'wide' },
      { src: 'images/projects/CAFE BOULUD/CAFE_BOULUD_BH_HD_09.jpg', alt: 'Cafe Boulud — terrace dining', layout: 'wide' },
      { src: 'images/projects/CAFE BOULUD/CAFE_BOULUD_BH_HD_07.jpg', alt: 'Cafe Boulud — ceiling sculpture', layout: 'portrait' }
    ]
  },
  'royal-fromentin': {
    subtitle: 'Restoring grandeur with contemporary precision',
    heroImage: { src: 'images/projects/ROYAL FROMENTIN/01.png', alt: 'Royal Fromentin — exterior' },
    overlayText: 'ROYAL FROMENTIN',
    meta: {
      services: ['Architecture', 'Interior Design'],
      client: 'Orea',
      location: 'Paris, France',
      year: '2023'
    },
    info: 'This boutique hotel on Rue de Fromentin in Pigalle involves the conservation and restoration of an 18th-century building. Spanning seven floors with 60 guest rooms, the ground floor houses the lobby while the basement contains a spa. The guest rooms share a unified framework for furnishings and FF&E, while subtle shifts in materials and finishes give each room its own character, resulting in 10 differentiated styles across six floors. The basement spa occupies former wine cellars, where vaulted stone ceilings lend a solemn, timeless atmosphere. A heated swimming pool, hydromassage area, and sauna are carefully integrated into the historic setting, enhancing wellbeing while preserving the authenticity of the space.',
    liveLink: null,
    gallery: [
      { src: 'images/projects/ROYAL FROMENTIN/01_Entrance.jpeg', alt: 'Royal Fromentin — entrance', layout: 'wide' },
      { src: 'images/projects/ROYAL FROMENTIN/elv_lobby_04.png', alt: 'Royal Fromentin — elevator lobby', layout: 'wide' },
      { src: 'images/projects/ROYAL FROMENTIN/LOUNGE copy.png', alt: 'Royal Fromentin — lounge', layout: 'wide' },
      { src: 'images/projects/ROYAL FROMENTIN/POOL_Final.png', alt: 'Royal Fromentin — spa pool', layout: 'wide' },
      { src: 'images/projects/ROYAL FROMENTIN/POOL_02.png', alt: 'Royal Fromentin — pool lounge', layout: 'wide' },
      { src: 'images/projects/ROYAL FROMENTIN/Master Bedroom.png', alt: 'Royal Fromentin — master bedroom', layout: 'wide' },
      { src: 'images/projects/ROYAL FROMENTIN/ROOM_1 copy.png', alt: 'Royal Fromentin — suite', layout: 'wide' },
      { src: 'images/projects/ROYAL FROMENTIN/room_05 copy.png', alt: 'Royal Fromentin — guest room', layout: 'wide' }
    ]
  },
  'z-hotel': {
    subtitle: 'Engineering hospitality at the edge of computation',
    heroImage: { src: 'images/projects/Z Hotel/01.jpeg', alt: 'Z Hotel — architectural exterior' },
    overlayText: 'Z HOTEL',
    meta: {
      services: ['Architecture', 'Computational Design', 'Interior Design'],
      client: 'Powerlong',
      location: 'Zhoushan, China',
      year: '2023'
    },
    info: 'Z Hotel explores the intersection of computational design and hospitality architecture. Every surface, from the algorithmically-generated facade panels to the parametrically-designed interior partitions, is driven by data, responding to environmental conditions, guest flow, and structural logic.',
    liveLink: null,
    gallery: [
      { src: 'images/projects/Z Hotel/ComfyUI-Gemini25 - z hotel - Drone-Upscale_00002_.png', alt: 'Z Hotel — aerial view', layout: 'wide' },
      { src: 'images/projects/Z Hotel/02.png', alt: 'Z Hotel — exterior close-up', layout: 'wide' },
      { src: 'images/projects/Z Hotel/ComfyUI-Gemini25 - z hotel - Construction_00003_.png', alt: 'Z Hotel — facade construction', layout: 'construction-portrait' },
      { src: 'images/projects/Z Hotel/ComfyUI-Gemini25 - z hotel - Construction_00004_.png', alt: 'Z Hotel — structural construction', layout: 'construction-portrait' },
      { src: 'images/projects/Z Hotel/Generated Image February 23, 2026 - 2_05PM.jpg (2).jpeg', alt: 'Z Hotel — lobby', layout: 'portrait' },
      { src: 'images/projects/Z Hotel/Generated Image February 24, 2026 - 11_46AM.jpg (1).jpeg', alt: 'Z Hotel — guest room', layout: 'wide' },
      { src: 'images/projects/Z Hotel/Generated Image February 25, 2026 - 12_06PM.jpg.jpeg', alt: 'Z Hotel — twin room', layout: 'wide' }
    ]
  },
  'muse': {
    subtitle: 'Where art meets architecture in curated space',
    heroImage: { src: 'images/projects/MUSE/01-COMPLETED-03.jpg', alt: 'MUSE — wall sconce detail' },
    overlayText: 'MUSE',
    meta: {
      services: ['Interior Design', 'Fabrication'],
      client: 'Eden House Holding',
      location: 'Santa Monica, CA',
      year: '2024'
    },
    info: 'Located near the ocean in Santa Monica, this small restaurant stands out for its meticulous attention to detail, every element carefully designed to create a balanced harmony of form, lighting, and materials. Often described as a treasure chest washed ashore, it serves modern French cuisine complemented by fine art pieces. Curved lines, soft lighting, rich marble, and plush textiles blend classic style with a modern twist, crafting a space that feels both sophisticated and cozy. The experience extends beyond the dining room, oak gives way to walnut in the hallway and ceramic in the restrooms, marking each transition with a shift in material and color. Custom sconces with multicolored aluminum leaves serve as focal points, diffusing a warm, soft light throughout.',
    liveLink: null,
    gallery: [
      { src: 'images/projects/MUSE/011_MUSE.png', alt: 'MUSE — main dining room', layout: 'wide' },
      { src: 'images/projects/MUSE/02_MUSE.png', alt: 'MUSE — dining and bar overview', layout: 'wide' },
      { src: 'images/projects/MUSE/03_MUSE.png', alt: 'MUSE — dining room angle', layout: 'wide' },
      { src: 'images/projects/MUSE/COMPLETED-06.jpg', alt: 'MUSE — intimate booth', layout: 'wide' },
      { src: 'images/projects/MUSE/COMPLETED-04.jpg', alt: 'MUSE — bar area', layout: 'portrait' },
      { src: 'images/projects/MUSE/COMPLETED-011.jpg', alt: 'MUSE — entry reception', layout: 'portrait' },
      { src: 'images/projects/MUSE/COMPLETED-010.jpg', alt: 'MUSE — restroom vanity', layout: 'portrait' },
      { src: 'images/projects/MUSE/COMPLETED-01.jpg', alt: 'MUSE — marble table detail', layout: 'portrait' },
      { src: 'images/projects/MUSE/COMPLETED-012.jpg', alt: 'MUSE — door detail', layout: 'portrait' },
      { src: 'images/projects/MUSE/COMPLETED-07.jpg', alt: 'MUSE — door panel close-up', layout: 'portrait' },
      { src: 'images/projects/MUSE/COMPLETED-09.jpg', alt: 'MUSE — corridor detail', layout: 'portrait' }
    ]
  },
  'ramzi-villa': {
    subtitle: 'Crafting a private sanctuary of modern luxury',
    heroImage: { src: 'images/projects/RAMZI villa/01_Formal Living Room copy.png', alt: 'Ramzi Villa — formal living room' },
    overlayText: 'RAMZI VILLA',
    meta: {
      services: ['Interior Design', 'Architectural Design'],
      client: 'Private Client',
      location: 'Dubai, UAE',
      year: '2023'
    },
    info: 'Ramzi Villa is a private residential commission that balances Middle Eastern hospitality traditions with a pared-back modern aesthetic. Rich material palettes — travertine, brushed brass, and dark walnut — create warmth within expansive, light-filled volumes.',
    liveLink: null,
    gallery: [
      { src: 'images/projects/RAMZI villa/RAMZI_VILLA_EXTERIOR_02.png', alt: 'Ramzi Villa — villa entrance', layout: 'wide' },
      { src: 'images/projects/RAMZI villa/RAMZI_VILLA_POOL_01.png', alt: 'Ramzi Villa — pool courtyard', layout: 'wide' },
      { src: 'images/projects/RAMZI villa/Ramzi3_00001_.png', alt: 'Ramzi Villa — pool terrace', layout: 'wide' },
      { src: 'images/projects/RAMZI villa/02_Family Room COPY.png', alt: 'Ramzi Villa — family room', layout: 'wide' },
      { src: 'images/projects/RAMZI villa/03_Dining Room copy.png', alt: 'Ramzi Villa — dining room', layout: 'wide' },
      { src: 'images/projects/RAMZI villa/04_MasterBathroom copy.png', alt: 'Ramzi Villa — master bathroom', layout: 'wide' },
      { src: 'images/projects/RAMZI villa/05_Sauna Vanity copy.png', alt: 'Ramzi Villa — sauna vanity', layout: 'wide' },
      { src: 'images/projects/RAMZI villa/06_Master Bedroom copy.png', alt: 'Ramzi Villa — master bedroom', layout: 'wide' },
      { src: 'images/projects/RAMZI villa/RAMZI_VILLA_DIAGRAM.png', alt: 'Ramzi Villa — axonometric diagram', layout: 'wide' }
    ]
  },
  'sunset-villa': {
    subtitle: 'Framing light and landscape in residential design',
    heroImage: { src: 'images/projects/SUNSET VILLA/LOW RES/01.jpg', alt: 'Sunset Villa — exterior' },
    overlayText: 'SUNSET VILLA',
    meta: {
      services: ['Architecture', 'Interior Design'],
      client: 'Private',
      location: 'Los Angeles, CA',
      year: '2022'
    },
    info: 'Located on Sunset Plaza Dr., Sunset Villa is nestled within a lush Italian-Californian garden, a sanctuary where architecture and nature exist in harmony. Every space is designed to feel both expansive and intimate, blending timeless elegance with California charm. The private garden becomes a place for gathering and celebration, with terraces, a pool, and an outdoor bar and kitchen conceived for hosting. Embraced by evolving scents and colors, the architecture remains quiet and sheltered from urban noise. The heart of the villa beats in its living spaces, an inviting living room opening toward sun-drenched terraces, a dining room made for long meals, and a bar for evenings well spent. The family room offers warmth and relaxation, while the office provides a quiet corner for inspiration and focus.',
    liveLink: null,
    gallery: [
      { src: 'images/projects/SUNSET VILLA/LOW RES/Exterior.png', alt: 'Sunset Villa — front facade', layout: 'wide' },
      { src: 'images/projects/SUNSET VILLA/LOW RES/pool.png', alt: 'Sunset Villa — pool terrace', layout: 'wide' },
      { src: 'images/projects/SUNSET VILLA/LOW RES/IMG_1422.jpg', alt: 'Sunset Villa — construction phase interior', layout: 'construction-wide' },
      { src: 'images/projects/SUNSET VILLA/LOW RES/IMG_1423.jpg', alt: 'Sunset Villa — construction staircase', layout: 'construction-portrait' },
      { src: 'images/projects/SUNSET VILLA/LOW RES/Living Room.png', alt: 'Sunset Villa — living room', layout: 'wide' },
      { src: 'images/projects/SUNSET VILLA/LOW RES/Kitchen.png', alt: 'Sunset Villa — kitchen', layout: 'wide' },
      { src: 'images/projects/SUNSET VILLA/LOW RES/Dining.png', alt: 'Sunset Villa — dining room', layout: 'wide' },
      { src: 'images/projects/SUNSET VILLA/LOW RES/Bar.png', alt: 'Sunset Villa — bar', layout: 'portrait' }
    ]
  },
  'if-buildings-could-talk': {
    subtitle: 'Giving voice to architecture through media projection',
    heroImage: { src: 'images/projects/If buildings could talk/01.png', alt: 'If Buildings Could Talk — facade projection' },
    overlayText: 'IF BUILDINGS COULD TALK',
    meta: {
      services: ['Media Art', 'Technological Integration'],
      client: 'Cultural Commission',
      location: 'Various',
      year: '2022'
    },
    info: 'If Buildings Could Talk is a media art installation that uses projection mapping to transform architectural facades into living narratives. Each building\'s history, structural logic, and cultural significance are translated into dynamic visual compositions projected at scale.',
    liveLink: null,
    gallery: [
      { src: 'images/projects/If buildings could talk/z hotel facade_E_00010_.png', alt: 'If Buildings Could Talk — facade sunny', layout: 'portrait' },
      { src: 'images/projects/If buildings could talk/z hotel facade_E_00007_.png', alt: 'If Buildings Could Talk — facade rainy', layout: 'portrait' },
      { src: 'images/projects/If buildings could talk/z hotel facade_G_00007_.png', alt: 'If Buildings Could Talk — street scene', layout: 'portrait' },
      { src: 'images/projects/If buildings could talk/z hotel facade_G_00010_.png', alt: 'If Buildings Could Talk — street life', layout: 'portrait' },
      { src: 'images/projects/If buildings could talk/z hotel facade_E_A_00001_.png', alt: 'If Buildings Could Talk — performance', layout: 'portrait' }
    ]
  },
  'mediated-reality': {
    subtitle: 'Bridging physical and digital through extended reality',
    heroImage: { src: 'images/projects/Mediated Reality/01.png', alt: 'Mediated Reality — mixed reality visualization' },
    overlayText: 'MEDIATED REALITY',
    meta: {
      services: ['Media Art', 'Technological Integration'],
      client: 'Research Project',
      location: 'Los Angeles, CA',
      year: '2022'
    },
    info: 'Mediated Reality is an ongoing research project exploring how extended reality technologies can augment architectural experience. Through mixed-reality headsets and spatial computing, visitors interact with invisible layers of information embedded within physical spaces.',
    liveLink: null,
    gallery: [
      { src: 'images/projects/Mediated Reality/03.png', alt: 'Mediated Reality — installation view', layout: 'portrait' },
      { src: 'images/projects/Mediated Reality/Picture1.png', alt: 'Mediated Reality — floral detail grid', layout: 'portrait' },
      { src: 'images/projects/Mediated Reality/combo.png', alt: 'Mediated Reality — building overlay composite', layout: 'portrait' },
      { src: 'images/projects/Mediated Reality/f324xray copy.png', alt: 'Mediated Reality — technical visualization', layout: 'portrait' }
    ]
  },
  'ad-space-club': {
    subtitle: 'Designing immersive environments for nightlife culture',
    heroImage: { src: 'images/projects/AD Space Club/01.png', alt: 'AD Space Club — immersive environment' },
    overlayText: 'AD SPACE CLUB',
    meta: {
      services: ['Art Direction', 'Interior Design', 'Fabrication'],
      client: 'LMDV',
      location: 'Milan, Italy',
      year: '2024'
    },
    info: 'AD Space Club is a nightlife venue where spatial design and sensory immersion converge. The interior transforms through programmable lighting, kinetic surfaces, and acoustic design, creating an environment that evolves throughout the night.',
    liveLink: null,
    gallery: [
      { src: 'images/projects/AD Space Club/ComfyUI_temp_gctnl_00002_.png', alt: 'AD Space Club — main hall', layout: 'wide' },
      { src: 'images/projects/AD Space Club/ComfyUI_temp_gctnl_00021_.png', alt: 'AD Space Club — lounge area', layout: 'wide' },
      { src: 'images/projects/AD Space Club/ComfyUI_temp_sxpts_00016_.png', alt: 'AD Space Club — floating astronaut', layout: 'wide' },
      { src: 'images/projects/AD Space Club/ComfyUI_temp_sxpts_00024_.png', alt: 'AD Space Club — overhead view', layout: 'wide' }
    ]
  },
  'puto-hotel': {
    subtitle: 'Sculpting hospitality through geometric glass and raw concrete',
    heroImage: { src: 'images/projects/Puto Hotel/01.jpg', alt: 'Puto Hotel — full exterior' },
    overlayText: 'PUTO HOTEL',
    meta: {
      services: ['Architectural Design', 'Interior Design'],
      client: 'Puto Hotel',
      location: 'Undisclosed',
      year: '2026'
    },
    info: 'Puto Hotel is a hospitality concept defined by the tension between raw materiality and geometric precision. A faceted glass tower rises from a sculptural stone base, its diamond-grid curtain wall refracting light and landscape. Inside, exposed concrete meets warm earth tones — creating spaces that feel both monumental and intimate.',
    liveLink: null,
    gallery: [
      { src: 'images/projects/Puto Hotel/acdeea1f-0621-478e-9cea-47a7e4b60790.jpg', alt: 'Puto Hotel — entrance golden hour', layout: 'wide' },
      { src: 'images/projects/Puto Hotel/e419ba26-0f45-4464-9015-b76ff0f505f1.png', alt: 'Puto Hotel — entrance rainy', layout: 'wide' },
      { src: 'images/projects/Puto Hotel/Generated Image March 12, 2026 - 12_18AM.png', alt: 'Puto Hotel — transitional lounge', layout: 'wide' },
      { src: 'images/projects/Puto Hotel/Generated Image March 12, 2026 - 12_38AM.png', alt: 'Puto Hotel — lobby bar', layout: 'wide' },
      { src: 'images/projects/Puto Hotel/Generated Image March 11, 2026 - 11_15PM.png', alt: 'Puto Hotel — guest room sea view', layout: 'wide' },
      { src: 'images/projects/Puto Hotel/Generated Image March 11, 2026 - 11_23PM.png', alt: 'Puto Hotel — guest room detail', layout: 'wide' }
    ]
  },
  'asap-hommade': {
    subtitle: 'Materializing sound culture through sculptural installation',
    heroImage: { src: 'images/projects/A$AS Hommade/01_hommade-02.png', alt: 'A$AP Hommade — installation with artist' },
    overlayText: 'A$AP HOMMADE',
    meta: {
      services: ['Media Art', 'Art Direction'],
      client: 'A$AP Rocky',
      location: 'Exhibition',
      year: '2024'
    },
    info: 'A$AP Hommade is a multimedia installation that transforms music production into physical space. The sculptural cabinet combines analog equipment, neon accents, and custom fabrication — creating a functional art piece that blurs the boundary between instrument, artifact, and architectural intervention.',
    liveLink: null,
    gallery: [
      { src: 'images/projects/A$AS Hommade/hommade-07.png', alt: 'A$AP Hommade — exhibition context', layout: 'wide' },
      { src: 'images/projects/A$AS Hommade/hommade-01.png', alt: 'A$AP Hommade — panoramic installation view', layout: 'wide' },
      { src: 'images/projects/A$AS Hommade/hommade-09.png', alt: 'A$AP Hommade — wide exhibition shot', layout: 'wide' },
      { src: 'images/projects/A$AS Hommade/hommade-03.png', alt: 'A$AP Hommade — front view', layout: 'portrait' },
      { src: 'images/projects/A$AS Hommade/hommade-08.png', alt: 'A$AP Hommade — frontal exhibition view', layout: 'portrait' },
      { src: 'images/projects/A$AS Hommade/hommade-04.png', alt: 'A$AP Hommade — right angle', layout: 'portrait' },
      { src: 'images/projects/A$AS Hommade/hommade-05.png', alt: 'A$AP Hommade — left angle', layout: 'portrait' },
      { src: 'images/projects/A$AS Hommade/hommade-06.png', alt: 'A$AP Hommade — equipment detail', layout: 'portrait' }
    ]
  }
};

var BIO_TEXT = [
  'Atelier Galileo Morandi is a design office working at the intersection of creativity and technology. The studio is involved with a variety of architecture and interior design projects, with a core focus on the integration between digital manufacturing and computational design \u2014 delivering custom, high-end products to clients such as A$AP Rocky, SHVO, Daniel Boulud, Waldorf Astoria, and Boffi.',
  'The studio is currently engaged in publishing for Elle Decor Italy, contributing a dedicated weekly column on Innovations in Architecture & Technology.',
  'Galileo previously served as Senior Associate at Jerde Partnership in Los Angeles and Dewan Architects in Dubai, directing the computational design departments for both offices and leading several large-scale developments across the USA, South America, China, Europe, and the Middle East.'
];
