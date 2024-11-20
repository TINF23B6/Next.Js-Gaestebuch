"use server";

import { prisma } from "@/lib/db";

export default async function addEntry(name: string, message: string) {
	return await prisma.entry.create({
		data: {
			name,
			message,
		},
	});
}