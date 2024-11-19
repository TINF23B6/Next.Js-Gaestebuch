/*
 * File: ui/todo-item.tsx
 */
"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export default function TodoItem({
	todoId,
	title,
	description,
	completed,
}: {
	todoId: number;
	title: string;
	description?: string;
	completed: boolean;
}) {
	return (
		<div className="flex flex-row gap-6 items-center">
			<Checkbox
				defaultChecked={completed}
				onCheckedChange={(e) => {
					// Hier fehlt noch die Logik.
					console.log(e.valueOf(), todoId);
				}}
			/>
			<div className="flex flex-col">
				<h3 className="font-semibold text-lg">{title}</h3>
				<p className="text-muted-foreground text-md">{description}</p>
			</div>
			<Button size="icon" variant="destructive">
				<Trash />
			</Button>
		</div>
	);
}
