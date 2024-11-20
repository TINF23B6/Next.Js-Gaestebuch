"use server";

import { prisma } from "@/lib/db";

export default async function getEntries() {
	return await prisma.entry.findMany({
		orderBy: {
			id: "desc"
		}
	});
}