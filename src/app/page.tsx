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
    <main className="flex justify-center items-center w-screen h-screen bg-grey-900 tablet:p-500 mobile:px-6 py-0">
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
