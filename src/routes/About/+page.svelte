<svelte:head>
	<title>About</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>
<section id="detail">
	<!-- Flex Container -->
	<div
		class="flex flex-col-reverse items-center mx-auto space-y-0 md:space-y-0 md:flex-row bg-black"
	>
		<!-- Left item -->
		<div class="flex flex-col mb-32 px-6 space-y-12 md:w-1/2">
			<h1 class="max-w-md text-4xl font-bold text-white text-center md:text-5xl md:text-left">
				Bring everyone together to build better products
			</h1>
			<p class="max-w-sm text-center text-white md:text-justify">
				See You Again will provide insights and recommendations for better decision-making,
				cost-effective, competitive advantages, business intelligence, and scalability. These
				benefits that MarketIn offers can help startups to succeed in a highly competitive business
				environment and achieve long-term growth and success.
			</p>
			<div class="flex justify-center md:justify-start">
				<a
					href="/#"
					class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
					>Get Started</a
				>
			</div>
		</div>
		<!-- Image -->
		<div class="md:w-2/3">
			<section
				class="flex flex-col min-h-screen bg-slate-500 text-white bg-center bg-blend-overlay"
				style="background-image: url('https://source.unsplash.com/random/')"
			>
				<div class="flex-1 flex items-center bg-gradient-to-r from-black">
					<div class="text-center mx-auto">
						<h2 class="text-6xl font-semibold">About Us</h2>
						<p class="font-light text-3xl mt-5">we exist because of care</p>
					</div>
				</div>
			</section>
		</div>
	</div>
</section>

<!-- Features Section -->
<section id="features">
	<!-- Flex container -->
	<div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
		<!-- What's Different -->
		<div class="flex flex-col space-y-12 md:w-1/2">
			<h2 class="max-w-md text-4xl font-bold text-center md:text-left">
				Where is See You Again start from?
			</h2>
			<p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
				Startups can face several obstacles when entering a new market in a foreign place even
				country. Here are some common challenges.
			</p>
		</div>

		<!-- Numbered List -->
		<div class="flex flex-col space-y-8 md:w-1/2">
			<!-- List Item 1 -->
			<div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
				<!-- Heading -->
				<div class="rounded-l-full bg-brightRed md:bg-transparent">
					<div class="flex items-center space-x-2">
						<div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">01</div>
						<h3 class="text-base font-bold md:mb-4 md:hidden">Legal and regulatory barriers</h3>
					</div>
				</div>

				<div>
					<h3 class="hidden mb-4 text-lg font-bold md:block">Legal and regulatory barriers</h3>
					<p class="text-darkGrayishBlue">
						The new market may have different laws and regulations that the startup needs to comply
						with, which can be time-consuming and expensive to navigate
					</p>
				</div>
			</div>

			<!-- List Item 2 -->
			<div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
				<!-- Heading -->
				<div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
					<div class="flex items-center space-x-2">
						<div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">02</div>
						<h3 class="text-base font-bold md:mb-4 md:hidden">Lack of local knowledge</h3>
					</div>
				</div>

				<div>
					<h3 class="hidden mb-4 text-lg font-bold md:block">Lack of local knowledge</h3>
					<p class="text-darkGrayishBlue">
						The startup may not have a deep understanding of the local market and customer
						preferences, which can impact their ability to effectively market their product or
						service.
					</p>
				</div>
			</div>

			<!-- List Item 3 -->
			<div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
				<!-- Heading -->
				<div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
					<div class="flex items-center space-x-2">
						<div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">03</div>
						<h3 class="text-base font-bold md:mb-4 md:hidden">Language barriers</h3>
					</div>
				</div>

				<div>
					<h3 class="hidden mb-4 text-lg font-bold md:block">Language barriers</h3>
					<p class="text-darkGrayishBlue">
						The startup may need to communicate in a language that they are not familiar with, which
						can make it difficult to establish relationships with customers and partners.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Team member -->
<section id="team">
	<!-- Container to heading and team blocks -->
	<div class="max-w-6xl px-5 py-5 mx-auto mt-32 text-center">
		<!-- Heading -->
		<h2 class="text-4xl font-bold text-center">Our Team</h2>
		<!-- Team member -->
		<div class="flex flex-col items-center mt-20 md:flex-row md:space-x-10">
			<!-- Team member 1 -->
			<div class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-LightGray md:w-1/2">
				<img src="../images/me2.jpg" class="h-40 w-40 -mt-14 rounded-full" alt="" />
				<h3 class="text-lg font-bold">Made Oka Resia Wedamerta</h3>
				<p class="text-sm text-darkGrayishBlue">“Innopolis University student”</p>
			</div>

			<!-- Team member 2 -->
			<div
				class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-LightGray md:flex md:w-1/2"
			>
				<img src="../images/vova.jpg" class="h-40 w-40 -mt-14 rounded-full" alt="" />
				<h3 class="text-lg font-bold">Vladimir Zelenokor</h3>
				<p class="text-sm text-darkGrayishBlue">
					Brother of Justin Beiber<br />
					Single (if you are girl and single feel free to contact me https://t.me/VZ2002)
				</p>
			</div>
		</div>
	</div>
</section>
