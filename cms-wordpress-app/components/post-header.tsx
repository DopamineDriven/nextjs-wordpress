import Avatar from './avatar';
import Date, { DateProps } from './date';
import CoverImage, { CoverImageProps } from './cover-image';
import PostTitle from './post-title';
import Categories from './categories';

type PostHeaderProps = {
	title: string;
	coverImage: CoverImageProps;
	author: any;
	date: string;
	categories: any;
};

export default function PostHeader({
	title,
	coverImage,
	date,
	author,
	categories
}: PostHeaderProps) {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className='hidden md:block md:mb-12'>
				<Avatar author={author} />
			</div>
			<div className='mb-8 md:mb-16 -mx-5 sm:mx-0'>
				<CoverImage
					title={coverImage.title}
					coverImage={coverImage.coverImage}
				/>
			</div>
			<div className='max-w-2xl mx-auto'>
				<div className='block md:hidden mb-6'>
					<Avatar author={author} />
				</div>
				<div className='mb-6 text-lg'>
					Posted <Date dateString={date} />
					<Categories categories={categories} />
				</div>
			</div>
		</>
	);
}
