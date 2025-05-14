type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  logo?: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Palantir Technologies',
    title: 'Forward Deployed Engineering Intern',
    start: 'May 2025',
    end: 'Present',
    link: 'https://www.palantir.com/',
    id: 'work1',
    logo: '/logos/palantir.png'
  },
  {
    company: '8VC',
    title: 'Engineering Fellow',
    start: 'May 2025',
    end: 'Present',
    link: 'https://www.8vc.com/fellowships',
    id: 'work2',
    logo: '/logos/8vc.png'
  },
  {
    company: 'Glade Brook Capital Partners LLC',
    title: 'Investment Fellow',
    start: 'Feb 2025',
    end: 'April 2025',
    link: 'https://www.gladebrookcapital.com/',
    id: 'work3',
    logo: '/logos/gladebrook.png'
  },
  {
    company: 'Hone Health',
    title: 'Software Engineering Intern',
    start: 'Jan 2025',
    end: 'April 2025',
    link: 'https://honehealth.com/',
    id: 'work4',
    logo: '/logos/hone.png'
  },
  {
    company: 'Dropbox',
    title: 'Software Engineering Intern',
    start: 'May 2024',
    end: 'Aug 2024',
    link: 'https://dropbox.com/',
    id: 'work5',
    logo: '/logos/dropbox.png'
  },
  {
    company: 'University of Texas at Austin',
    title: 'Software Engineering Intern',
    start: 'May 2023',
    end: 'Aug 2023',
    link: 'https://www.utexas.edu/',
    id: 'work6',
    logo: '/logos/utexas.png'
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'http://github.com/pth1209',
  },
  // {
  //   label: 'Twitter',
  //   link: 'https://twitter.com/ibelick',
  // },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/parklawrence/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/p.t.hyun_/',
  },
]

export const EMAIL = 'lawrencepark1@gmail.com'
