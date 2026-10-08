export interface SubFolder {
  id: string;
  title: string;
  coverImage: string;
  images: string[];
}

export interface SubAlbum {
  id: string;
  title: string;
  coverImage: string;
  images: string[];
  subFolders?: SubFolder[];
}

export interface AlbumPhoto {
  src: string;
  width?: number;
  height?: number;
  objectPosition?: string;
}

export type AlbumImage = string | AlbumPhoto;

export interface Album {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  coverPosition?: string;
  images: AlbumImage[];
  subAlbums?: SubAlbum[];
}

const IK = 'https://ik.imagekit.io/orductive/photography';

export const albums: Album[] = [
  {
    id: 'character-studies',
    title: 'Character Studies',
    description: 'Every face holds a story before a single word is spoken.',
    coverImage: `${IK}/Character%20Studies/IMG_0877%204.40.28%E2%80%AFPM.jpg`,
    coverPosition: 'center 58%',
    images: [
      // Group 1: IMG_0877 4.40.28 PM.jpg, IMG_0859 4.40.28 PM.jpg, IMG_1034.jpg, IMG_1009.jpg
      { src: `${IK}/Character%20Studies/IMG_0877%204.40.28%E2%80%AFPM.jpg`, width: 3318, height: 4977 },
      { src: `${IK}/Character%20Studies/IMG_0859%204.40.28%E2%80%AFPM.jpg`, width: 3432, height: 5148 },
      { src: `${IK}/Character%20Studies/IMG_1034.jpg`, width: 3648, height: 5472 },
      { src: `${IK}/Character%20Studies/IMG_1009.jpg`, width: 5160, height: 3440 },
      // Group 2: mkg-155.jpg, mkg-160.jpg, mkg-158.jpg
      { src: `${IK}/Character%20Studies/mkg-155.jpg`, width: 3426, height: 5139 },
      { src: `${IK}/Character%20Studies/mkg-160.jpg`, width: 3417, height: 5125 },
      { src: `${IK}/Character%20Studies/mkg-158.jpg`, width: 3417, height: 5125 },
      // Group 3: mkg-96.jpg, mkg-65.jpg, mkg-18.jpg
      { src: `${IK}/Character%20Studies/mkg-96.jpg`, width: 3310, height: 4965 },
      { src: `${IK}/Character%20Studies/mkg-65.jpg`, width: 3434, height: 5151 },
      { src: `${IK}/Character%20Studies/mkg-18.jpg`, width: 3319, height: 4978 },
      // Group 4: Cover.jpg, _MKG_-9.jpg, _MKG_-10.jpg
      { src: `${IK}/Character%20Studies/Cover.jpg`, width: 3456, height: 5184 },
      { src: `${IK}/Character%20Studies/_MKG_-9.jpg`, width: 3456, height: 5184 },
      { src: `${IK}/Character%20Studies/_MKG_-10.jpg`, width: 3456, height: 5184 },
      // Group 5: mkg-46.jpg, mkg-43.jpg, mkg-21.jpg
      { src: `${IK}/Character%20Studies/mkg-46.jpg`, width: 3511, height: 5266 },
      { src: `${IK}/Character%20Studies/mkg-43.jpg`, width: 3545, height: 5318 },
      { src: `${IK}/Character%20Studies/mkg-21.jpg`, width: 5422, height: 3615 },
      // Group 6: P1076780.jpg, IMG_0627.jpg, P1076582.jpg
      { src: `${IK}/Character%20Studies/P1076780.jpg`, width: 2338, height: 3507 },
      { src: `${IK}/Character%20Studies/IMG_0627.jpg`, width: 3219, height: 4828 },
      { src: `${IK}/Character%20Studies/P1076582.jpg`, width: 2338, height: 3507 },
    ],
  },
  {
    id: 'fifa-world-cup',
    title: 'FIFA World Cup',
    description: 'The passion, energy, and drama of the beautiful game on the world stage.',
    coverImage: `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/8.png`,
    images: [],
    subAlbums: [
      {
        id: 'black-stars-of-ghana',
        title: 'Black Stars of Ghana',
        coverImage: `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/9.png`,
        images: [
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/Cover.jpg`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/2.png`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/3.png`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/4.png`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/5.png`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/6.png`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/7.png`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/8.png`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/9.png`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/10.png`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/11.png`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/12.png`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/111.jpg`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/IMG_0775.jpg`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/IMG_0896.jpg`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/IMG_0908.jpg`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/IMG_0929.jpg`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/IMG_0954.jpg`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/IMG_0972.jpg`,
          `${IK}/FIFA%20World%20Cup/Black%20Stars%20of%20Ghana/IMG_0988.jpg`,
        ],
      },
      {
        id: 'boston-fanfestival',
        title: 'Boston FanFestival',
        coverImage: `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/2.png`,
        images: [
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/Cover.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/2.png`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/3.png`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/8.png`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/9.png`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/15.png`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0139.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0161.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0165.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0183.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0217.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0237.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0264.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0266.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0295.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0392.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0414.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0433.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0491.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0521.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0551.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0608.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0772.jpg`,
          `${IK}/FIFA%20World%20Cup/Boston%20FanFestival/IMG_0850.jpg`,
        ],
      },
    ],
  },
  {
    id: 'love-witnessed',
    title: 'Love, Witnessed',
    description: 'Two people, one day, and every quiet moment in between.',
    coverImage: `${IK}/Love,%20Witnessed/Ben%20&%20Molly/mkg-130.jpg`,
    images: [],
    subAlbums: [
      {
        id: 'ben-and-molly',
        title: 'Ben & Molly',
        coverImage: `${IK}/Love,%20Witnessed/Ben%20&%20Molly/mkg-130.jpg`,
        images: [
          `${IK}/Love,%20Witnessed/Ben%20&%20Molly/mkg-130.jpg`,
          `${IK}/Love,%20Witnessed/Ben%20&%20Molly/mkg-134.jpg`,
          `${IK}/Love,%20Witnessed/Ben%20&%20Molly/mkg-198.jpg`,
          `${IK}/Love,%20Witnessed/Ben%20&%20Molly/mkg-202.jpg`,
          `${IK}/Love,%20Witnessed/Ben%20&%20Molly/mkg-277.jpg`,
          `${IK}/Love,%20Witnessed/Ben%20&%20Molly/mkg-283.jpg`,
          `${IK}/Love,%20Witnessed/Ben%20&%20Molly/mkg-285.jpg`,
          `${IK}/Love,%20Witnessed/Ben%20&%20Molly/mkg-58.jpg`,
          `${IK}/Love,%20Witnessed/Ben%20&%20Molly/mkg-88.jpg`,
        ],
      },
      {
        id: 'meshack-and-yani',
        title: 'Meshack & Yani',
        coverImage: `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Preparation/P1063870.jpg`,
        images: [],
        subFolders: [
          {
            id: 'the-ceremony',
            title: 'The Ceremony',
            coverImage: `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0004.jpg`,
            images: [
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0004.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0015.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0024.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0034.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0037.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0071.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0076.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0091.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0093.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0149.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0151.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0153.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0158.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0192.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0215.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0217.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0231.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0239.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0248.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Ceremony/IMG_0259.jpg`,
            ],
          },
          {
            id: 'the-details',
            title: 'The Details',
            coverImage: `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0196.jpg`,
            images: [
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0025.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0038.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0041.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0054.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0055.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0066.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0067.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0096.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0116.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0118.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0126.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0130.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0134.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0159.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0163.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0166.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0176.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0187.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0196.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0207.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20details/IMG_0235.jpg`,
            ],
          },
          {
            id: 'the-preparation',
            title: 'The Preparation',
            coverImage: `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Preparation/P1063878.jpg`,
            images: [
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Preparation/P1063870.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Preparation/P1063878.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Preparation/P1063884.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Preparation/P1063898.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Preparation/P1063900.jpg`,
              `${IK}/Love,%20Witnessed/Meshack%20&%20Yani/The%20Preparation/P1063902.jpg`,
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'moments-in-motion',
    title: 'Moments in Motion',
    description: 'Where energy becomes memory, one frame at a time.',
    coverImage: `${IK}/Moments%20in%20Motion/Cover.jpg`,
    images: [
      // Group 1: tc-227.jpg, tc-226.jpg, tc-22.jpg, mkg-182.jpg, tc-4.jpg
      { src: `${IK}/Moments%20in%20Motion/tc-227.jpg`, width: 5472, height: 3648 },
      { src: `${IK}/Moments%20in%20Motion/tc-226.jpg`, width: 5472, height: 3648 },
      { src: `${IK}/Moments%20in%20Motion/tc-22.jpg`, width: 5472, height: 3648 },
      { src: `${IK}/Moments%20in%20Motion/mkg-182.jpg`, width: 4689, height: 3126 },
      { src: `${IK}/Moments%20in%20Motion/tc-4.jpg`, width: 5472, height: 3648 },
      // Group 2: Tc-42.jpg, Tc-43.jpg, tc-8.jpg
      { src: `${IK}/Moments%20in%20Motion/Tc-42.jpg`, width: 5472, height: 3648 },
      { src: `${IK}/Moments%20in%20Motion/Tc-43.jpg`, width: 5291, height: 3527 },
      { src: `${IK}/Moments%20in%20Motion/tc-8.jpg`, width: 5472, height: 3648 },
      // Group 3: TBG-104.jpg, TBG-97.jpg, TBG-190.jpg, TBG-191.jpg
      { src: `${IK}/Moments%20in%20Motion/TBG-104.jpg`, width: 4767, height: 3178 },
      { src: `${IK}/Moments%20in%20Motion/TBG-97.jpg`, width: 3401, height: 5101 },
      { src: `${IK}/Moments%20in%20Motion/TBG-190.jpg`, width: 4372, height: 2915 },
      { src: `${IK}/Moments%20in%20Motion/TBG-191.jpg`, width: 4372, height: 2915 },
      // Group 4: IMG_0485.jpg, IMG_0691.jpg
      { src: `${IK}/Moments%20in%20Motion/IMG_0485.jpg`, width: 5109, height: 3406 },
      { src: `${IK}/Moments%20in%20Motion/IMG_0691.jpg`, width: 5278, height: 3519 },
      // Group 5: tc-126 (1).jpg, IMG_0793.jpg, Cover.jpg
      { src: `${IK}/Moments%20in%20Motion/tc-126%20(1).jpg`, width: 5472, height: 3648 },
      { src: `${IK}/Moments%20in%20Motion/IMG_0793.jpg`, width: 3444, height: 2296 },
      { src: `${IK}/Moments%20in%20Motion/Cover.jpg`, width: 5174, height: 3449 },
      // Group 6: IMG_0015.jpg, IMG_0806.jpg, IMG_0019.jpg
      { src: `${IK}/Moments%20in%20Motion/IMG_0015.jpg`, width: 5292, height: 3528 },
      { src: `${IK}/Moments%20in%20Motion/IMG_0806.jpg`, width: 4441, height: 2961 },
      { src: `${IK}/Moments%20in%20Motion/IMG_0019.jpg`, width: 5471, height: 3647 },
      // Group 7: IMG_0310.jpg, IMG_0216.jpg
      { src: `${IK}/Moments%20in%20Motion/IMG_0310.jpg`, width: 2733, height: 4099 },
      { src: `${IK}/Moments%20in%20Motion/IMG_0216.jpg`, width: 4976, height: 3317 },
      // Group 8: mkg-225.jpg, mkg-224.jpg, mkg-22.jpg
      { src: `${IK}/Moments%20in%20Motion/mkg-225.jpg`, width: 3545, height: 5317 },
      { src: `${IK}/Moments%20in%20Motion/mkg-224.jpg`, width: 5317, height: 3545 },
      { src: `${IK}/Moments%20in%20Motion/mkg-22.jpg`, width: 5472, height: 3648 },
      // Group 9: IMG_0559.jpg, IMG_0434.jpg
      { src: `${IK}/Moments%20in%20Motion/IMG_0559.jpg`, width: 5348, height: 3565 },
      { src: `${IK}/Moments%20in%20Motion/IMG_0434.jpg`, width: 5174, height: 3449 },
    ],
  },
  {
    id: 'monochrome',
    title: 'Monochrome',
    description: 'Stripped of color, left with truth.',
    coverImage: `${IK}/Monochrome/Cover.jpg`,
    images: [
      { src: `${IK}/Monochrome/Cover.jpg`, width: 5215, height: 3477 },
      { src: `${IK}/Monochrome/_MKG_-67.jpg`, width: 5671, height: 3781 },
      { src: `${IK}/Monochrome/IMG_0260.jpg`, width: 5472, height: 3648 },
      { src: `${IK}/Monochrome/IMG_0265.jpg`, width: 5472, height: 3648 },
      { src: `${IK}/Monochrome/IMG_0284.jpg`, width: 5109, height: 3406 },
      { src: `${IK}/Monochrome/IMG_0345.jpg`, width: 3967, height: 2645 },
      { src: `${IK}/Monochrome/IMG_0372.jpg`, width: 5358, height: 3572 },
      { src: `${IK}/Monochrome/IMG_0379.jpg`, width: 5358, height: 3572 },
      { src: `${IK}/Monochrome/IMG_0388.jpg`, width: 5358, height: 3572 },
      { src: `${IK}/Monochrome/IMG_0447.jpg`, width: 4629, height: 3086 },
      { src: `${IK}/Monochrome/IMG_0505.jpg`, width: 5461, height: 3641 },
      { src: `${IK}/Monochrome/IMG_0541.jpg`, width: 5215, height: 3477 },
      { src: `${IK}/Monochrome/IMG_0550.jpg`, width: 5215, height: 3477 },
      { src: `${IK}/Monochrome/IMG_0562.jpg`, width: 4980, height: 3320 },
      { src: `${IK}/Monochrome/IMG_0768.jpg`, width: 5215, height: 3477 },
      { src: `${IK}/Monochrome/IMG_0786.jpg`, width: 5215, height: 3477 },
      { src: `${IK}/Monochrome/IMG_0803.jpg`, width: 5215, height: 3477 },
      { src: `${IK}/Monochrome/IMG_0845.jpg`, width: 5218, height: 3479 },
      { src: `${IK}/Monochrome/IMG_0860.jpg`, width: 5279, height: 3519 },
      { src: `${IK}/Monochrome/mkg-27.jpg`, width: 5472, height: 3648 },
      { src: `${IK}/Monochrome/mkg-65.jpg`, width: 5063, height: 3375 },
    ],
  },
  {
    id: 'the-edge-of-effort',
    title: 'The Edge of Effort',
    description: 'The second before the win, the loss, or the fall.',
    coverImage: `${IK}/The%20Edge%20of%20Effort/Cover.jpg`,
    images: [
      { src: `${IK}/The%20Edge%20of%20Effort/Cover.jpg`, width: 1754, height: 2631 },
      { src: `${IK}/The%20Edge%20of%20Effort/mkg-123.jpg`, width: 4861, height: 3241 },
      { src: `${IK}/The%20Edge%20of%20Effort/flyer-3-.jpg`, width: 4000, height: 5000 },
      { src: `${IK}/The%20Edge%20of%20Effort/flyer-5.jpg`, width: 4000, height: 5000 },
      { src: `${IK}/The%20Edge%20of%20Effort/mkg-177.jpg`, width: 3044, height: 4566 },
      { src: `${IK}/The%20Edge%20of%20Effort/Marrkgraphy-125.jpg`, width: 5349, height: 3566 },
      { src: `${IK}/The%20Edge%20of%20Effort/Marrkgraphy-015.jpg`, width: 5423, height: 3615 },
      { src: `${IK}/The%20Edge%20of%20Effort/mkg-151.jpg`, width: 3469, height: 2313 },
      { src: `${IK}/The%20Edge%20of%20Effort/mkg-169.jpg`, width: 2729, height: 4093 },
      { src: `${IK}/The%20Edge%20of%20Effort/mkg-66.jpg`, width: 4607, height: 3071 },
      { src: `${IK}/The%20Edge%20of%20Effort/mkg-179.jpg`, width: 2263, height: 3395 },
      { src: `${IK}/The%20Edge%20of%20Effort/mkg-180.jpg`, width: 2819, height: 4228 },
      { src: `${IK}/The%20Edge%20of%20Effort/mkg-33.jpg`, width: 2817, height: 4225 },
      { src: `${IK}/The%20Edge%20of%20Effort/mkg-35.jpg`, width: 3085, height: 4627 },
      { src: `${IK}/The%20Edge%20of%20Effort/flyer-2.jpg`, width: 4000, height: 5000 },
      { src: `${IK}/The%20Edge%20of%20Effort/mkg-94.jpg`, width: 4440, height: 2960 },
      { src: `${IK}/The%20Edge%20of%20Effort/mkg-99.jpg`, width: 5224, height: 3483 },
      { src: `${IK}/The%20Edge%20of%20Effort/tc-218.jpg`, width: 5111, height: 3407 },
      { src: `${IK}/The%20Edge%20of%20Effort/tc-75.jpg`, width: 5472, height: 3648 },
    ],
  },
  {
    id: 'the-unscripted',
    title: 'The Unscripted',
    description: 'No client, no brief — just what caught my eye.',
    coverImage: `${IK}/The%20Unscripted/Cover.jpg`,
    images: [
      `${IK}/The%20Unscripted/Cover.jpg`,
      `${IK}/The%20Unscripted/IMG_0211%20copy.jpg`,
      `${IK}/The%20Unscripted/mkg-11.jpg`,
      `${IK}/The%20Unscripted/mkg-203.jpg`,
      `${IK}/The%20Unscripted/mkg-3.jpg`,
      `${IK}/The%20Unscripted/mkg-35.jpg`,
      `${IK}/The%20Unscripted/mkg-38.jpg`,
      `${IK}/The%20Unscripted/mkg-42.jpg`,
      `${IK}/The%20Unscripted/mkg-47.jpg`,
      `${IK}/The%20Unscripted/mkg-7.jpg`,
      `${IK}/The%20Unscripted/tc-137.jpg`,
      `${IK}/The%20Unscripted/tc-183.jpg`,
    ],
  },
];
