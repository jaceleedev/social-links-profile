import Image from 'next/image';

interface SocialLinksProfileProps {
  imageUrl: string;
  name: string;
  location: string;
  description: string;
  links: {
    name: string;
    url: string;
  }[];
}

function SocialLinksProfile({
  imageUrl,
  name,
  location,
  description,
  links,
}: SocialLinksProfileProps) {
  return (
    <article className="flex flex-col items-center gap-300 max-w-[384px] flex-1 p-500 rounded-xl bg-grey-800 tablet:max-w-[456px] mobile:p-300">
      <Image
        src={imageUrl}
        alt={`Profile picture of ${name}`}
        width={88}
        height={88}
        priority
        className="rounded-full"
      />
      <header className="flex flex-col items-center self-stretch gap-50 text-center">
        <h1 className="self-stretch text-preset-1 text-white">{name}</h1>
        <p className="self-stretch text-preset-2-bold text-green">{location}</p>
      </header>
      <p className="self-stretch text-preset-2 text-white text-center">
        &quot;{description}&quot;
      </p>
      <nav className="self-stretch" aria-label="Social links">
        <ul
          className="flex flex-col items-center self-stretch gap-200"
          role="list"
        >
          {links.map((link) => (
            <li className="self-stretch text-preset-2-bold" key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                {link.name}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
}

export default SocialLinksProfile;
