import Avatar from './avatar';
import Date from './date';
import CoverImage, { CoverImageProps } from './cover-image';
import Link from 'next/link';

type PostPreviewProps = {
	coverImage: CoverImageProps;
	title: string;
	date: string;
	excerpt: string;
	author: any;
	slug: string | number;
};

export default function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug
}: PostPreviewProps) {
	return (
		<div>
			<div className='mb-5'>
				<CoverImage
					title={title}
					coverImage={coverImage}
					slug={slug}
				/>
			</div>
			<h3 className='text-3xl mb-3 leading-snug'>
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a
						className='hover:underline'
						dangerouslySetInnerHTML={{ __html: title }}
					></a>
				</Link>
			</h3>
			<div className='text-lg mb-4'>
				<Date dateString={date} />
			</div>
			<div
				className='text-lg leading-relaxed mb-4'
				dangerouslySetInnerHTML={{ __html: excerpt }}
			/>
			<Avatar author={author} />
		</div>
	);
}
