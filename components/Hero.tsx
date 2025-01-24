import Image from "next/image";

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <div className="relative h-[600px]">
          <Image
            src="/Assets/Hero.jpg" // Replace with your background image path
            alt="Hero Background"
            fill // Ensures the image fills the container
            style={{ objectFit: "cover" }} // Ensures the image covers the container
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div> {/* Dark Overlay */}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-6 sm:px-12 lg:px-24 text-white">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-4xl leading-tight">
            AI in education: UNESCO advances key competencies for teachers and learners
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-3xl">
            Artificial intelligence holds great promise for education, but only if it is deployed in
            a safe and ethical way. UNESCO supports countries to ensure that teachers and students
            have the critical skills needed to navigate this new learning landscape so that AI
            serves everyone, everywhere.
          </p>
          <div className="mt-6">
            <a
              href="https://www.unesco.org/en/articles/artificial-intelligence-education-unesco-advances-key-competencies-teachers-and-learners"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-500 font-medium text-lg"
            >
              Read the Story <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <section className="py-12 bg-white">
        {/* Section 1: In Memory of the Victims of the Holocaust */}
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                In Memory of the Victims of the Holocaust
              </h2>
              <p className="text-gray-700 mb-4">
                Every year around 27 January, UNESCO pays tribute to the memory of the victims of
                the Holocaust and reaffirms its unwavering commitment to counter antisemitism,
                racism, and other forms of intolerance that may lead to group-targeted violence.
              </p>
              <a
                href="https://www.unesco.org/en/days/holocaust-remembrance"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-500 font-medium text-lg btn-primary btn-arrow-right"
              >
                Discover more <span className="ml-2">→</span>
              </a>
            </div>
            <div>
              <Image
                src="/Assets/Hero1.jpg" // Replace with your image path
                alt="Holocaust Memorial"
                width={500}
                height={300}
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        {/* Section 2: Delivering in Times of Crisis */}
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <h2 className="text-2xl font-bold mb-6">Delivering in Times of Crisis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <Image
                src="/Assets/Hero1.jpg" // Replace with your image path
                alt="UNESCO action"
                width={1200}
                height={400}
                className="rounded shadow-lg w-28"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <a
                  href="#"
                  className="text-white bg-blue-600 px-4 py-2 rounded shadow hover:bg-blue-500"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Assets/Hero1.jpg" // Replace with your image path
                alt="UNESCO action"
                width={400}
                height={400}
                className="rounded shadow-lg"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <a
                  href="#"
                  className="text-white bg-blue-600 px-4 py-2 rounded shadow hover:bg-blue-500"
                >
                  Latest updates
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Assets/Hero1.jpg" // Replace with your image path
                alt="UNESCO action"
                width={400}
                height={400}
                className="rounded shadow-lg"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <a
                  href="#"
                  className="text-white bg-blue-600 px-4 py-2 rounded shadow hover:bg-blue-500"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        {/* Section 3: Impact Stories */}
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <h2 className="text-2xl font-bold mb-6">Impact Stories</h2>
          <p className="text-gray-700 mb-6">
            Find out how UNESCO is making an impact and building resilience in local communities
            around the world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <a
  href="https://www.unesco.org/en/articles/how-literary-masterpiece-inspired-all-womens-expedition-himalayas" // Replace with the actual URL or route for the new page
  className="block"
>
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
    <Image
      src="/Assets/Hero55.jpg" // Replace with your image path
      alt="Story 1"
      width={300}
      height={200}
      className="rounded shadow-lg"
    />
    <p className="mt-4 text-gray-800 font-medium">
      How a Literary Masterpiece Inspired an All-Women’s Expedition to the Himalayas
    </p>
  </div>
</a>

<a
  href="https://www.unesco.org/en/articles/echoes-resilience-nepali-community-radios-disaster-response" // Replace with the actual URL or route for the new page
  className="block"
>
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
    <Image
      src="/Assets/Hero6.jpg" // Replace with your image path
      alt="Story 2"
      width={300}
      height={200}
      className="rounded shadow-lg"
    />
    <p className="mt-4 text-gray-800 font-medium">
      Echoes of Resilience: Nepali Community Radios in Disaster Response
    </p>
  </div>
</a>

<a
  href="https://www.unesco.org/en/articles/unesco-and-meity-co-organize-2nd-ai-readiness-assessment-methodology-ram-consultation" // Replace with the actual URL or route for the new page
  className="block"
>
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
    <Image
      src="/Assets/Hero7.jpg" // Replace with your image path
      alt="Story 3"
      width={300}
      height={200}
      className="rounded shadow-lg"
    />
    <p className="mt-4 text-gray-800 font-medium">
      UNESCO and Mali’s Co-organized 2nd AI Readiness Assessment Methodology
    </p>
  </div>
</a>

<a
  href="https://www.unesco.org/en/articles/indigenous-youth-insights-cop16" // Replace with the actual URL or route for the new page
  className="block"
>
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
    <Image
      src="/Assets/Hero8.png.jpg" // Replace with your image path
      alt="Story 4"
      width={300}
      height={200}
      className="rounded shadow-lg"
    />
    <p className="mt-4 text-gray-800 font-medium">
      Indigenous Youth Insights from COP16
    </p>
  </div>
</a>

          </div>
          <div className="mt-6 text-center">
            <a
              href="#"
              className="inline-flex items-center bg-gray-300 text-black px-6 py-3 rounded shadow hover:bg-gray-400 font-medium text-lg"
            >
              Load more
            </a>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            UNESCO has main priorities for the achievement of the Sustainable Development Goals and the improvement of the human condition.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mission 1 */}
            <a
  href="https://www.unesco.org/en/education" // Replace with the actual URL or route for the new page
  className="block"
>
  <div className="bg-white rounded shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
    <Image
      src="/Assets/Hero9.jpg" // Replace with the actual image path
      alt="Mission 1"
      width={400}
      height={250}
      className="rounded mb-4"
    />
    <h3 className="text-lg font-bold">Mobilize education to transform lives</h3>
    <p className="mt-2 text-gray-700 text-sm">
      Ensure quality equitable and inclusive education and promote lifelong learning.      
   <br /><br /> </p>
  </div>
</a>

            {/* Mission 2 */}
            <a
  href="https://www.unesco.org/en/biodiversity" // Replace with the actual URL or route for the new page
  className="block"
>
  <div className="bg-white rounded shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
    <Image
      src="/Assets/Hero10.jpg" // Replace with the actual image path
      alt="Mission 2"
      width={400}
      height={250}
      className="rounded mb-4"
    />
    <h3 className="text-lg font-bold">Reconnect with the living</h3>
    <p className="mt-2 text-gray-700 text-sm">
      Protect the environment through knowledge sharing, good behavior, and respect for biodiversity.
  </p><br />
  </div>
</a>

            {/* Mission 3 */}
            <a
  href="https://www.unesco.org/en/artificial-intelligence" // Replace with the actual URL or route for the new page
  className="block"
>
  <div className="bg-white rounded shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
    <Image
      src="/Assets/Hero11.jpeg" // Replace with the actual image path
      alt="Mission 3"
      width={400}
      height={250}
      className="rounded mb-4"
    />
    <h3 className="text-lg font-bold">Foster science & technology in the service of humanity</h3>
    <p className="mt-2 text-gray-700 text-sm">
      Encourage Open Science and the free flow of ideas while developing ethical standards of AI and Neurosciences.
    </p>
  </div>
</a>


            {/* Mission 4 */}
            <a
  href="https://www.unesco.org/en/no-racism-no-discrimination" // Replace with the actual URL or route for the new page
  className="block"
>
  <div className="bg-white rounded shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
    <Image
      src="/Assets/Hero12.jpg" // Replace with the actual image path
      alt="Mission 4"
      width={400}
      height={250}
      className="rounded mb-4"
    />
    <h3 className="text-lg font-bold">Promote inclusion & mutual understanding</h3>
    <p className="mt-2 text-gray-700 text-sm">
      Build inclusive societies by promoting respect and tolerance, and fighting against racism, hate speech, and misinformation.
    </p>
  </div>
</a>

          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative">
              <Image
                src="/Assets/Hero13.jpg.webp" // Replace with the actual image path
                alt="Our Vision"
                width={600}
                height={400}
                className="rounded shadow-lg"
              />
              {/* Optional play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-500 shadow">
                  <i className="fas fa-play"></i>
                </button>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Vision: #SharingHumanity</h2>
              <p className="text-gray-700 mb-6">
                Since wars begin in the minds of men and women, it is in the minds of men and women that peace must be built. UNESCO uses education, science, culture, communication, and information to foster mutual understanding and respect for our planet. We work to strengthen the intellectual and moral solidarity of humankind and bring out the best in our shared humanity.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-500 font-medium"
                >
                  Our Expertise <span className="ml-2">→</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-500 font-medium"
                >
                  #SharingHumanity <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Building a Stronger Multilateralism</h2>
              <p className="text-gray-700 mb-6">
                UNESCO stands on the frontline of international cooperation, in close coordination
                with sister agencies of the UN System, and as a privileged partner of the Group of
                20 (G20). UNESCO shares knowledge, data, and expertise to strengthen global
                coordination in the field of education, the sciences, culture, communication, and
                information, supporting all Member States in the face of current global challenges.
              </p>
              <a
                href="#"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-500 font-medium"
              >
                UNESCO in the G20 <span className="ml-2">→</span>
              </a>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src="/Assets/Hero14.jpg.webp" // Replace with the actual image path
                alt="Building a Stronger Multilateralism"
                width={600}
                height={400}
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <h2 className="text-2xl font-bold mb-4">Our Shared Heritage</h2>
          <p className="text-gray-700 mb-8">
            UNESCO designated sites connect the world and bring out the best in our shared humanity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Heritage Item 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center relative">
  {/* Arrow Icon */}
  <a
    href="https://www.unesco.org/en/world-heritage" // Replace with the actual URL or route for the new page
    className="absolute top-3 right-3 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-500"
  >
    <span className="text-lg">→</span>
  </a>

  {/* Card Content */}
  <a
    href="https://www.unesco.org/en/world-heritage" // Replace with the actual URL or route for the new page
    className="w-full text-center"
  >
    <div className="flex justify-center">
      <Image
        src="/Assets/Hero15.jpg" // Replace with the actual image path
        alt="World Heritage Sites"
        width={100}
        height={100}
        className="rounded-full mb-4"
      />
    </div>
    <h3 className="text-3xl font-bold mb-2">1223</h3>
    <h4 className="text-lg font-semibold">World Heritage Sites</h4>
    <p className="text-gray-600 text-sm mt-2">
      Of exceptional cultural and natural value.
    </p>
  </a>
</div>

            {/* Heritage Item 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center relative">
  {/* Arrow Icon */}
  <a
    href="https://www.unesco.org/en/intangible-cultural-heritage" // Replace with the actual URL or route for the new page
    className="absolute top-3 right-3 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-500"
  >
    <span className="text-lg">→</span>
  </a>

  {/* Card Content */}
  <a
    href="https://www.unesco.org/en/intangible-cultural-heritage" // Replace with the actual URL or route for the new page
    className="w-full text-center"
  >
    <div className="flex justify-center">
      <Image
        src="/Assets/Hero16.jpg" // Replace with the actual image path
        alt="Intangible Heritage"
        width={100}
        height={100}
        className="rounded-full mb-4"
      />
    </div>
    <h3 className="text-3xl font-bold mb-2">788</h3>
    <h4 className="text-lg font-semibold">Intangible Heritage Elements</h4>
    <p className="text-gray-600 text-sm mt-2">In 145 countries.</p>
  </a>
</div>


            {/* Heritage Item 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center relative">
  {/* Arrow Icon */}
  <a
    href="https://www.unesco.org/en/mab" // Replace with the actual URL or route for the new page
    className="absolute top-3 right-3 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-500"
  >
    <span className="text-lg">→</span>
  </a>

  {/* Card Content */}
  <a
    href="https://www.unesco.org/en/mab" // Replace with the actual URL or route for the new page
    className="w-full text-center"
  >
    <div className="flex justify-center">
      <Image
        src="/Assets/Hero17.jpg" // Replace with the actual image path
        alt="Biospheres Reserves"
        width={100}
        height={100}
        className="rounded-full mb-4"
      />
    </div>
    <h3 className="text-3xl font-bold mb-2">759</h3>
    <h4 className="text-lg font-semibold">Biospheres Reserves</h4>
    <p className="text-gray-600 text-sm mt-2">In 136 countries.</p>
  </a>
</div>


            {/* Heritage Item 4 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center relative">
  {/* Arrow Icon */}
  <a
    href="https://www.unesco.org/en/iggp" // Replace with the actual URL or route for the new page
    className="absolute top-3 right-3 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-500"
  >
    <span className="text-lg">→</span>
  </a>

  {/* Card Content */}
  <a
    href="https://www.unesco.org/en/iggp" // Replace with the actual URL or route for the new page
    className="w-full text-center"
  >
    <div className="flex justify-center">
      <Image
        src="/Assets/Hero18.jpg" // Replace with the actual image path
        alt="Global Geoparks"
        width={100}
        height={100}
        className="rounded-full mb-4"
      />
    </div>
    <h3 className="text-3xl font-bold mb-2">213</h3>
    <h4 className="text-lg font-semibold">Global Geoparks</h4>
    <p className="text-gray-600 text-sm mt-2">In 48 countries.</p>
  </a>
</div>

          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <h2 className="text-2xl font-bold mb-6">News</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* News Item 1 */}
            <a
  href="https://www.unesco.org/en/articles/unesco-highlights-role-artificial-intelligence-education-congreso-futuro-2025" // Replace with the actual URL or route for the new page
  className="block"
>
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
    <Image
      src="/Assets/Hero19.jpg" // Replace with your actual image path
      alt="News 1"
      width={300}
      height={200}
      className="rounded shadow-lg"
    />
    <h3 className="mt-4 text-gray-800 font-medium">
      UNESCO Highlights the Role of Artificial Intelligence in Education at Congreso Futuro 2025
    </h3>
    <p className="text-gray-500 text-sm mt-2">23 January 2025</p>
  </div>
</a>


            {/* News Item 2 */}
            <a
  href="https://www.unesco.org/en/articles/2025-edition-unesco/jose-marti-international-prize" // Replace with the actual URL or route for the new page
  className="block"
>
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
    <Image
      src="/Assets/Hero20.png.jpg" // Replace with your actual image path
      alt="News 2"
      width={300}
      height={200}
      className="rounded shadow-lg"
    />
    <h3 className="mt-4 text-gray-800 font-medium">
      2025 Edition of the UNESCO/José Martí International Prize
    </h3>
    <p className="text-gray-500 text-sm mt-2">23 January 2025</p>
  </div>
</a>


            {/* News Item 3 */}
            <a
  href="https://www.unesco.org/en/articles/international-day-education-egypt" // Replace with the actual URL or route for the new page
  className="block"
>
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
    <Image
      src="/Assets/Hero21.png.jpg" // Replace with your actual image path
      alt="News 3"
      width={300}
      height={200}
      className="rounded shadow-lg"
    />
    <h3 className="mt-4 text-gray-800 font-medium">
      The International Day of Education (IDE)
    </h3>
    <p className="text-gray-500 text-sm mt-2">23 January 2025</p>
  </div>
</a>


            {/* News Item 4 */}
            
            <div className=" p-4 rounded-lg ">
  {/* Only Text Clickable */}
  <a
    href="https://www.unesco.org/en/articles/2024-green-chemistry-projects-awarded-unesco-grant" // Replace with the actual URL or route for the new page
    className="text-gray-800 font-medium text-lg hover:underline"
  >
    <h3 className="mt-4">
      2024 Green Chemistry Projects Awarded by UNESCO Grant
    </h3>
  </a>
  <p className="text-gray-500 text-sm mt-2">23 January 2025</p>
</div>



          </div>
       
        </div>
      </section>
    </div>
  );
}
