import cn from 'classnames';
import Link from 'next/link';

type SourceUrl = {
	sourceUrl: string;
};

export type CoverImageProps = {
	title: string;
	coverImage: { sourceUrl: string } | any;
	slug?: string | number;
};

export default function CoverImage({
	title,
	coverImage,
	slug
}: CoverImageProps) {
	const image = (
		<img
			src={coverImage ? coverImage.sourceUrl : coverImage}
			className={cn('shadow-small', {
				'hover:shadow-medium transition-shadow duration-200': slug
			})}
		/>
	);
	return (
		<div className='-mx-5 sm:mx-0'>
			{slug ? (
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</div>
	);
}
