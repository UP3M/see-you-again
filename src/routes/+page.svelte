<script lang="ts">
	const features = [
		{
			title: 'Pick your dream Workspace',
			icon: 'location',
			description: 'Choose the best location and your favorite workspace easily.'
		},
		{
			title: 'Business Consultent',
			icon: 'phone',
			description: 'Know more about your new place and Get the best recomendation for your business from our team.'
		},
		{
			title: 'Legalization',
			icon: 'email-blue',
			description: 'We provide service that can deal with laws and regulations that the startup needs to comply.'
		},
		{
			title: 'Monetization',
			icon: 'monetization',
			description: 'Offer subscriptions or one-time purchases. Accept credit cards & PayPal.'
		},
		{
			title: 'Analytics',
			icon: 'stream',
			description: 'Know what your customer likes & how your product fit them.'
		},
		{
			title: 'Upload & Organize',
			icon: 'upload',
			description:
				'Upload your free space in our platform and we will organize it for you.'
		}
		
	]
</script>

<svelte:head>
	<title>See You Again</title>
	<meta name="robots" content="" />
	<html lang="en" />
</svelte:head>

<!-- Hero Section -->
<section class="flex flex-col min-h-screen bg-slate-700 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/25" style="background-image: url('https://assets.new.siemens.com/siemens/assets/api/uuid:5bf88a2ff3a0fc817e08b9379370a32420f07d7c/width:2000/quality:high/siemens-building-technologies-keyvisual.jpg')">
	
<!-- Hero Section Content -->
<div class="flex-1 flex items-center">
    <div class="text-center mx-auto">
    <h1 class="text-6xl font-semibold">See You Again</h1>
	<button class="mt-10 w-1/3 primary"><a href="/Workspace">Start Find Workspace</a></button>
	<button class="mx-10 w-1/3 outline bg-black"><a href="mailto:m.wedamerta@innopolis.university">Contact Us</button>
    </div>
</div>
</section>

<section class="p-10 text-white bg-gradient-to-b via-gray-500 from-green">
	<div class="max-w-screen-xl mx-auto">
		<div class="flex items-center space-x-24">
			<div class="flex flex-col w-1/2">
				<div class="flex flex-col space-y-4">
					<h2 class="text-5xl font-bold font-heading">Start and Expand your company with Us</h2>
					<p class="text-justify">
						The See You Again ecosystem is designed to help you to start and grow your business. Set up a perfect workspace and
						get the best recomendation to expand your company with See You Again.
					</p>
				</div>
				<div class="flex mt-12 space-x-3">
					<button class="w-1/3 primary"><a href="/Workspace">Start Find Workspace</a></button>
					<button class="w-1/4 outline bg-black"><a href="mailto:m.wedamerta@innopolis.university">Contact Us</button>
				</div>
			</div>
			<div class="relative w-1/2">
				<img src=https://pluspng.com/img-png/png-travel-how-to-market-a-travel-and-tourism-outlet-826.png class="w-full h-full md:scale-110 object-bottom" alt="expansion" />
			</div>
		</div>
	</div>
</section>

<section class="py-20">
	<div class="max-w-screen-lg mx-auto">
		<div class="flex flex-col justify-center text-center">
			<div class="flex flex-col space-y-3">
				<h2 class="text-4xl font-bold font-heading">All-in-one platform</h2>
				<p>You take care of the company product/service quality and we take care of everything else</p>
			</div>
			<div class="flex justify-center mt-12 space-x-8">
				<button class="w-1/4 primary"><a href="/Workspace">Start Find Workspace</a></button>
				<button class="w-1/4 outline bg-black"><a href="mailto:m.wedamerta@innopolis.university">Contact Us</button>
				</div>
		</div>
		<div class="grid grid-cols-3 gap-12 mt-20">
			{#each features as feature}
				<div
					class="flex flex-col p-4 space-y-3 hover:shadow-xl transition duration-300 cursor-pointer"
				>
					<div class="flex space-x-3">
						<img
							src={`/icons/${feature.icon}.svg`}
							class="transform transition duration-300 hover:rotate-12"
							alt={feature.title}
						/>
						<h5 class="font-bold font-heading">{feature.title}</h5>
					</div>
					<p>{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="p-10 py-20 text-white bg-black">
	<div class="flex flex-col max-w-screen-xl mx-auto space-y-32">
		<div class="flex flex-col justify-center">
			<h3 class="text-4xl font-bold text-center font-heading">We help you grow</h3>
		</div>

		<div class="flex space-x-24">
			<div class="flex flex-col justify-center w-1/2 space-y-6">
				<h4 class="text-3xl font-semibold">Choose your plan as you wish</h4>
				<p class="text-justify">
					Pick our service that fits your company need. 
					See You Again offer you freedom to choose either to pick one of our service as single purchases or
					you can take full advantage of our services by doing full purchases.
					Full purchases provide you extra services for business consultation and market analysis.
				</p>
				<div class="flex space-x-3 cursor-pointer group">
					<p class="transition font-heading group-hover:font-bold">Get started</p>
					<img
						src="/icons/arrow.svg"
						class="transition transform group-hover:translate-x-1"
						alt="Arrow Icon"
					/>
				</div>
			</div>
			<div class="relative w-1/2 flex flex-col items-center md:flex-row md:space-x-10">
				<div class="flex flex-col py-8 space-y-3 text-black bg-white px-9 rounded-3xl -top-4 -left-6 text-center">
					<p class ='font-bold'>Pick one of Our Services</p>
					
					<div
						class="flex w-full px-3 py-4 space-x-16 transition duration-300 transform bg-gray-100 font-heading rounded-xl hover:bg-blue-100 hover:text-primary hover:translate-x-1 hover:-translate-y-1 hover:shadow-xl text-center"
					>
						<p>Legalization</p>
					</div>
					<div
						class="flex w-full px-3 py-4 space-x-16 transition duration-300 transform bg-gray-100 font-heading rounded-xl hover:bg-blue-100 hover:text-primary hover:translate-x-1 hover:-translate-y-1 hover:shadow-xl"
					>
						<p>Finding Workspace</p>
					</div>

					<div
						class="flex w-full px-3 py-4 space-x-16 font-semibold transition duration-300 transform bg-brightRed font-heading rounded-xl hover:bg-red-100 hover:text-primary hover:translate-x-1 hover:-translate-y-1 hover:shadow-xl"
					>
						<a href="mailto:m.wedamerta@innopolis.university">Single Purchases</a>
					</div>
				</div>

				<div
					class="flex flex-col py-8 space-y-3 text-black bg-white px-9 rounded-3xl -top-4 -left-6"
				>
					<p class="font-semibold">Get Our Services Fully</p>
					<div class="flex w-full px-3 py-4 space-x-16 transition duration-300 transform bg-gray-100 font-heading rounded-xl hover:bg-blue-100 hover:text-primary hover:translate-x-1 hover:-translate-y-1 hover:shadow-xl"
					>
						<p>Business Consultation</p>
					</div>
					<div
						class="flex w-full px-3 py-4 space-x-16 transition duration-300 transform bg-gray-100 font-heading rounded-xl hover:bg-blue-100 hover:text-primary hover:translate-x-1 hover:-translate-y-1 hover:shadow-xl text-center"
					>
						<p>Legalization</p>
					</div>
					<div
						class="flex w-full px-3 py-4 space-x-16 transition duration-300 transform bg-gray-100 font-heading rounded-xl hover:bg-blue-100 hover:text-primary hover:translate-x-1 hover:-translate-y-1 hover:shadow-xl"
					>
						<p>Finding Workspace</p>
					</div>

					<div
						class="flex w-full px-3 py-4 space-x-16 font-semibold transition duration-300 transform bg-green font-heading rounded-xl hover:bg-green-100 hover:text-primary hover:translate-x-1 hover:-translate-y-1 hover:shadow-xl"
					>
						<a href="mailto:m.wedamerta@innopolis.university">Full Purchases</a>
					</div>
				</div>
			</div>
		</div>

		<div class="flex space-x-24">
			<div class="relative flex w-1/2">
				<img src="/images/illustration-intro.svg" class="w-full h-full" alt="Optimized for growth" />
			</div>
			<div class="flex flex-col justify-center w-1/2 space-y-6">
				<h5 class="text-3xl font-semibold">Optimized for growth</h5>
				<p class="text-justify">
					See You Again wants to help every startup that wants to enter a new market 
					by providing a product as service in the form of data analysis 
					which will become the basis of information in making expansion decisions. 
					See You Again will provide services in the form of Market Potential Analyzer,
					Legal Service, Partnership Finder, Working space Finder, Team Finder
					for the companies who want to present their company presence in new location
				</p>
				<div class="flex space-x-3 cursor-pointer group">
					<a href="mailto:m.wedamerta@innopolis.university">
					<p class="transition font-heading group-hover:font-bold">Get started</p>
					<img
						src="/icons/arrow.svg"
						class="transition transform group-hover:translate-x-1"
						alt="Arrow Icon"
					/>
				</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="pt-20 pb-40 text-white bg-black">
	<div class="flex flex-col max-w-screen-lg mx-auto">
		<div class="flex flex-col space-y-3 text-center">
			<h6 class="text-4xl font-bold font-heading">Start your own business today</h6>
			<p>Consistent quality and experience across all platforms and devices.</p>
		</div>
		<div class="flex justify-center space-x-8 mt-14">
			<button class="w-1/4 secondary"><a href="/Workspace">Start Find Workspace</a></button>
			<button class="w-1/4 outline bg-black"><a href="mailto:m.wedamerta@innopolis.university">Contact Us</button>
			
		</div>
	</div>
</section>

<section class="p-10 pt-20 pb-32">
	<div class="flex flex-col justify-center space-y-3 text-center">
		<h7 class="text-4xl font-bold font-heading">Our Partnership Company</h7>
		<p>Company that involve in our platform</p>
	</div>

	<div class="flex flex-col overflow-hidden mt-24 space-y-6">
		<div class="flex space-x-8">
			<img src="/images/inno.jpg" alt="innopolis" class="w-[360px] h-[201px]" />
			<img src="/images/svelte.png" alt="Svele" class="w-[360px] h-[201px]" />
			<img src="/images/tailwindcss.png" alt="tailwindcss" class="w-[360px] h-[201px]" />
			<img src="/images/firebase.png" alt="firebase" class="w-[360px] h-[201px]" />
		</div>
	</div>
</section>


<style lang="postcss" global>
	button {
		@apply px-6 py-3 font-sans rounded-full outline-none transition duration-300;
	}
	button.primary {
		@apply bg-primary text-white hover:bg-blue-700;
	}
	button.outline {
		@apply border-white text-white border-[1px] hover:bg-white hover:text-black;
	}
	button.outline-dark {
		@apply border-black text-black border-[1px] hover:bg-black hover:text-white;
	}
	button.secondary {
		@apply bg-white text-black hover:bg-neutral-100;
	}
</style>
