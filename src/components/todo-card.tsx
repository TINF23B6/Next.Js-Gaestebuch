"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
// import TodoItem from "@/components/ui/todo-item";

export default function TodoCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>To-Do Liste</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-5">
				<Input placeholder="Neue To-Do hinzufügen..."
					onKeyDown={(e) => {
						if (e.key === "Enter" && e.currentTarget.value) {
							console.log("Add new todo", e.currentTarget.value);
						}
					}}
				/>
				<Separator />
				{/* <TodoItem
					todoId={1}
					title="Next.js Präsentation"
					description="Schaun' wir mal, was wird"
					completed={false}
				/> */}
				<pre className="text-muted-foreground text-sm px-2">
					Hier ist es noch ziemlich leer...
				</pre>
			</CardContent>
		</Card>
	);
}
