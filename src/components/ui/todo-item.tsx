/*
 * File: ui/todo-item.tsx
 */
import { Checkbox } from "@/components/ui/checkbox";

export default function  TodoItem({
	title,
	description,
	completed,
}: {
	title: string;
	description?: string;
	completed: boolean;
}) {
	return (
		<div className="flex flex-row gap-5 items-center">
			<Checkbox defaultChecked={completed} />
			<div
				className="flex flex-col"
			>
				<h3 className="font-semibold text-lg">{title}</h3>
				<p className="text-muted-foreground text-md">{description}</p>
			</div>
		</div>
	);
}
