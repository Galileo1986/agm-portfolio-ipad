/* data-ipad.js — Project Data for iPad Portfolio
 *
 * IMPORTANT: Image URLs need to be updated to Google Drive links
 *
 * How to get Google Drive image URLs:
 * 1. Open your project folder in Google Drive
 * 2. Right-click an image → "Get link" → Set to "Anyone with the link can view"
 * 3. Copy the link (looks like: https://drive.google.com/file/d/FILE_ID/view?usp=sharing)
 * 4. Extract the FILE_ID from the URL
 * 5. Use this format: https://drive.google.com/uc?export=view&id=FILE_ID
 *
 * Example:
 * Original: https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9/view?usp=sharing
 * Use this: https://drive.google.com/uc?export=view&id=1a2b3c4d5e6f7g8h9
 */

var SITE_CONFIG = {
  siteName: 'Atelier Galileo Morandi',
  logoText: 'AGM\u00A9',
  subtitle: 'DESIGN STUDIO FROM LOS ANGELES',
  timezone: 'America/Los_Angeles',
  timezoneLabel: 'LA',
  year: 2026
};

// Replace all 'images/...' paths with Google Drive URLs following the format above
var PROJECTS = [
  {
    id: 'cafe-boulud',
    name: 'CAFE BOULUD',
    tagline: 'Reimagining a culinary icon through spatial design',
    categories: ['interior-design', 'architectural-design'],
    // TODO: Replace with: https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
    image: { src: 'images/projects/CAFE BOULUD/CAFE_BOULUD_BH_HD_02.jpg', alt: 'Cafe Boulud — interior rendering' },
    featured: true
  },
  {
    id: 'royal-fromentin',
    name: 'ROYAL FROMENTIN',
    tagline: 'Restoring grandeur with contemporary precision',
    categories: ['interior-design', 'architectural-design'],
    image: { src: 'images/projects/ROYAL FROMENTIN/01.png', alt: 'Royal Fromentin — exterior rendering' },
    featured: true
  },
  {
    id: 'muse',
    name: 'MUSE',
    tagline: 'Where art meets architecture in curated space',
    categories: ['interior-design', 'art-direction'],
    image: { src: 'images/projects/MUSE/01-COMPLETED-03.jpg', alt: 'MUSE — wall sconce detail' },
    featured: true
  },
  {
    id: 'z-hotel',
    name: 'Z HOTEL',
    tagline: 'Engineering hospitality at the edge of computation',
    categories: ['architectural-design', 'technological-integration'],
    image: { src: 'images/projects/Z Hotel/01.jpeg', alt: 'Z Hotel — architectural exterior', position: 'left center' },
    featured: true
  },
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
    id: 'puto-hotel',
    name: 'PUTO HOTEL',
    tagline: 'Sculpting hospitality through geometric glass and raw concrete',
    categories: ['architectural-design', 'interior-design'],
    image: { src: 'images/projects/Puto Hotel/01.jpg', alt: 'Puto Hotel — exterior view' },
    featured: false
  },
  {
    id: 'ad-space-club',
    name: 'AD SPACE CLUB',
    tagline: 'Designing immersive environments for nightlife culture',
    categories: ['art-direction', 'interior-design'],
    image: { src: 'images/projects/AD Space Club/01.png', alt: 'AD Space Club — immersive club environment' },
    featured: false
  },
  {
    id: 'if-buildings-could-talk',
    name: 'IF BUILDINGS COULD TALK',
    tagline: 'Giving voice to architecture through media projection',
    categories: ['media-art', 'technological-integration'],
    image: { src: 'images/projects/If buildings could talk/01.png', alt: 'If Buildings Could Talk — facade media projection' },
    featured: false
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
    featured: false
  }
];

/* Project detail data — extended info for project detail pages */
var PROJECT_DETAILS = {
  'cafe-boulud': {
    subtitle: 'Reimagining a culinary icon through spatial design',
    heroImage: { src: 'images/projects/CAFE BOULUD/CAFE_BOULUD_BH_HD_02.jpg', alt: 'Cafe Boulud — main interior rendering' },
    meta: {
      services: ['Interior Design', 'Fabrication'],
      client: 'SHVO - Mandarin Oriental',
      location: 'Los Angeles, CA',
      year: '2025'
    },
    info: 'Located on the ground floor of the new Mandarin Oriental Beverly Hills, Cafe Boulud is a high-end restaurant by world-renowned chef Daniel Boulud, his first venture in Los Angeles. The space offers both indoor and outdoor dining at the intersection of culinary art and design.',
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
    meta: {
      services: ['Architecture', 'Interior Design'],
      client: 'Orea',
      location: 'Paris, France',
      year: '2023'
    },
    info: 'This boutique hotel on Rue de Fromentin in Pigalle involves the conservation and restoration of an 18th-century building. Spanning seven floors with 60 guest rooms, the ground floor houses the lobby while the basement contains a spa.',
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
    meta: {
      services: ['Architecture', 'Computational Design', 'Interior Design'],
      client: 'Powerlong',
      location: 'Zhoushan, China',
      year: '2023'
    },
    info: 'Z Hotel explores the intersection of computational design and hospitality architecture. Every surface, from the algorithmically-generated facade panels to the parametrically-designed interior partitions, is driven by data.',
    gallery: [
      { src: 'images/projects/Z Hotel/ComfyUI-Gemini25 - z hotel - Drone-Upscale_00002_.png', alt: 'Z Hotel — aerial view', layout: 'wide' },
      { src: 'images/projects/Z Hotel/02.png', alt: 'Z Hotel — exterior close-up', layout: 'wide' },
      { src: 'images/projects/Z Hotel/ComfyUI-Gemini25 - z hotel - Construction_00003_.png', alt: 'Z Hotel — facade construction', layout: 'portrait' },
      { src: 'images/projects/Z Hotel/ComfyUI-Gemini25 - z hotel - Construction_00004_.png', alt: 'Z Hotel — structural construction', layout: 'portrait' },
      { src: 'images/projects/Z Hotel/Generated Image February 23, 2026 - 2_05PM.jpg (2).jpeg', alt: 'Z Hotel — lobby', layout: 'portrait' },
      { src: 'images/projects/Z Hotel/Generated Image February 24, 2026 - 11_46AM.jpg (1).jpeg', alt: 'Z Hotel — guest room', layout: 'wide' },
      { src: 'images/projects/Z Hotel/Generated Image February 25, 2026 - 12_06PM.jpg.jpeg', alt: 'Z Hotel — twin room', layout: 'wide' }
    ]
  },
  'muse': {
    subtitle: 'Where art meets architecture in curated space',
    heroImage: { src: 'images/projects/MUSE/01-COMPLETED-03.jpg', alt: 'MUSE — wall sconce detail' },
    meta: {
      services: ['Interior Design', 'Fabrication'],
      client: 'Eden House Holding',
      location: 'Santa Monica, CA',
      year: '2024'
    },
    info: 'Located near the ocean in Santa Monica, this small restaurant stands out for its meticulous attention to detail. Often described as a treasure chest washed ashore, it serves modern French cuisine complemented by fine art pieces.',
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
    meta: {
      services: ['Interior Design', 'Architectural Design'],
      client: 'Private Client',
      location: 'Dubai, UAE',
      year: '2023'
    },
    info: 'Ramzi Villa is a private residential commission that balances Middle Eastern hospitality traditions with a pared-back modern aesthetic.',
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
    meta: {
      services: ['Architecture', 'Interior Design'],
      client: 'Private',
      location: 'Los Angeles, CA',
      year: '2022'
    },
    info: 'Located on Sunset Plaza Dr., Sunset Villa is nestled within a lush Italian-Californian garden.',
    gallery: [
      { src: 'images/projects/SUNSET VILLA/LOW RES/Exterior.png', alt: 'Sunset Villa — front facade', layout: 'wide' },
      { src: 'images/projects/SUNSET VILLA/LOW RES/pool.png', alt: 'Sunset Villa — pool terrace', layout: 'wide' },
      { src: 'images/projects/SUNSET VILLA/LOW RES/IMG_1422.jpg', alt: 'Sunset Villa — construction phase interior', layout: 'wide' },
      { src: 'images/projects/SUNSET VILLA/LOW RES/IMG_1423.jpg', alt: 'Sunset Villa — construction staircase', layout: 'portrait' },
      { src: 'images/projects/SUNSET VILLA/LOW RES/Living Room.png', alt: 'Sunset Villa — living room', layout: 'wide' },
      { src: 'images/projects/SUNSET VILLA/LOW RES/Kitchen.png', alt: 'Sunset Villa — kitchen', layout: 'wide' },
      { src: 'images/projects/SUNSET VILLA/LOW RES/Dining.png', alt: 'Sunset Villa — dining room', layout: 'wide' },
      { src: 'images/projects/SUNSET VILLA/LOW RES/Bar.png', alt: 'Sunset Villa — bar', layout: 'portrait' }
    ]
  },
  'if-buildings-could-talk': {
    subtitle: 'Giving voice to architecture through media projection',
    heroImage: { src: 'images/projects/If buildings could talk/01.png', alt: 'If Buildings Could Talk — facade projection' },
    meta: {
      services: ['Media Art', 'Technological Integration'],
      client: 'Cultural Commission',
      location: 'Various',
      year: '2022'
    },
    info: 'If Buildings Could Talk is a media art installation that uses projection mapping to transform architectural facades into living narratives.',
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
    meta: {
      services: ['Media Art', 'Technological Integration'],
      client: 'Research Project',
      location: 'Los Angeles, CA',
      year: '2022'
    },
    info: 'Mediated Reality is an ongoing research project exploring how extended reality technologies can augment architectural experience.',
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
    meta: {
      services: ['Art Direction', 'Interior Design', 'Fabrication'],
      client: 'LMDV',
      location: 'Milan, Italy',
      year: '2024'
    },
    info: 'AD Space Club is a nightlife venue where spatial design and sensory immersion converge.',
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
    meta: {
      services: ['Architectural Design', 'Interior Design'],
      client: 'Puto Hotel',
      location: 'Undisclosed',
      year: '2026'
    },
    info: 'Puto Hotel is a hospitality concept defined by the tension between raw materiality and geometric precision.',
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
    meta: {
      services: ['Media Art', 'Art Direction'],
      client: 'A$AP Rocky',
      location: 'Exhibition',
      year: '2024'
    },
    info: 'A$AP Hommade is a multimedia installation that transforms music production into physical space.',
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
