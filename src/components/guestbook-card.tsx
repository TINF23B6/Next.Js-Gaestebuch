"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import GuestbookEntry from "./ui/guestbook-entry";
import { Entry } from "@prisma/client";
import Logo from "./ui/logo";
import getEntries from "@/app/actions/get-entries";
import addEntry from "@/app/actions/add-entry";

export default function GuestbookCard() {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [entries, setEntries] = useState<Entry[]>([]);

	useEffect(() => {
		getEntries().then((entries) => {
			setEntries(entries);
		});
	}, []);

	return (
		<Card>
			<CardHeader className="flex-row gap-4">
				<Logo />
				<CardTitle>TINF23B6 Gästebuch</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-row gap-4 h-96">
				<div className="flex flex-col gap-4 w-72">
					<Input
						placeholder="Vorname / Nachname"
						value={name}
						onChange={(e) => setName(e.currentTarget.value)}
					/>
					<Input
						placeholder="Nachricht"
						value={message}
						onChange={(e) => setMessage(e.currentTarget.value)}
					/>
					<Button
						onClick={() => {
							if (name.length > 0 && message.length > 0) {
								addEntry(name, message).then(() => {
									getEntries().then((entries) => {
										setEntries(entries);
										setName("");
										setMessage("");
									});
								});
							}
						}}
					>
						Absenden
					</Button>
				</div>
				<Separator orientation="vertical" className="h-full" />
				<div className="flex flex-col gap-4 overflow-y-auto w-96 items-center px-4">
					{entries.length < 1 && (
						<pre className="text-muted-foreground text-sm">
							Hier ist es noch ziemlich leer...
						</pre>
					)}
					{entries.map((entry, index) => (
						<GuestbookEntry
							key={index}
							name={entry.name}
							message={entry.message}
						/>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
