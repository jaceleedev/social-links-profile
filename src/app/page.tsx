import SocialLinksProfile from '@/components/SocialLinksProfile';

const linksData = [
  { name: 'Github', url: 'https://github.com' },
  { name: 'Frontend Mentor', url: 'https://www.frontendmentor.io' },
  { name: 'LinkedIn', url: 'https://linkedin.com/' },
  { name: 'Twitter', url: 'https://x.com' },
  { name: 'Instagram', url: 'https://www.instagram.com/' },
];

export default function Home() {
  return (
    <main>
      <SocialLinksProfile
        imageUrl="/images/avatar-jessica.jpeg"
        name="Jessica Randall"
        location="London, United Kingdom"
        description="Front-end developer and avid reader."
        links={linksData}
      />
    </main>
  );
}
