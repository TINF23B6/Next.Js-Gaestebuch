import Image from "next/image";

export default function Logo() {
	return (
		<>
			<Image
				src="https://raw.githubusercontent.com/TINF23B6/.github/main/profile/assets/icon_dark.svg"
				alt="DHBW Logo"
				width={32}
				height={32}
				className="hidden dark:block"
			/>
			<Image
				src="https://raw.githubusercontent.com/TINF23B6/.github/main/profile/assets/icon_light.svg"
				alt="DHBW Logo"
				width={32}
				height={32}
				className="dark:hidden"
			/>
		</>
	);
}
