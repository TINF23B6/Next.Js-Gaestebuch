"use client";

export default function GuestbookEntry({
	name,
	message,
}: {
	name: string;
	message: string;
}) {
	return (
			<div className="flex flex-col gap-1 bg-secondary/30 px-4 py-2 rounded-md border border-border w-full">
				<h3 className="font-semibold text-lg">{name}</h3>
				<p
					className="text-muted-foreground text-sm"
				>
					{message}
				</p>
		</div>
	);
}
