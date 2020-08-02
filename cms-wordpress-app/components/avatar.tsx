type Props = {
	author: {
		firstName?: string;
		lastName?: string;
		name: string;
		avatar: { url: string };
	};
};

export default function Avatar({ author }: Props) {
	const name =
		author.firstName && author.lastName
			? `${author.firstName} ${author.lastName}`
			: author.name;

	return (
		<div className='flex items-center'>
			<img
				src={author.avatar.url}
				className='w-12 h-12 rounded-full mr-4'
				alt={name}
			/>
			<div className='text-xl font-bold'>{name}</div>
		</div>
	);
}
