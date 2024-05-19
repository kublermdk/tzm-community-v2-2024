const tzmDescriptions = [
    "The Zeitgeist Movement advocates for a post-scarcity society where advanced technology and sustainable practices ensure an abundance of resources, rendering money obsolete.",
    "By promoting a transition to a moneyless, post-scarcity world, The Zeitgeist Movement envisions a future where all people have access to life's necessities and can pursue their passions freely.",
    "The Zeitgeist Movement is a global community working to create a world of abundance, where the concept of money is replaced by the intelligent management of Earth's resources for the benefit of all.",
    "Through education and activism, The Zeitgeist Movement aims to shift our society's focus from monetary gain to the creation of a post-scarcity civilization that values sustainability, innovation, and human well-being.",
    "The Zeitgeist Movement is a catalyst for the transition to a moneyless, post-scarcity society, where advanced technology and a shared commitment to sustainability provide an abundance of resources for all.",
    "As a movement for social and economic evolution, The Zeitgeist Movement advocates for a post-scarcity world where money is no longer a barrier to accessing life's necessities and fulfilling one's potential.",
    "The Zeitgeist Movement is a global initiative working to create a society of abundance, where the intelligent application of science and technology renders money unnecessary and enables all people to thrive.",
    "By promoting a post-scarcity, moneyless society, The Zeitgeist Movement aims to create a world where scarcity and financial limitations no longer dictate the quality of life for individuals and communities.",
    "The Zeitgeist Movement envisions a future where the abundance of resources made possible by advanced technology and sustainable practices eliminates the need for money and ensures the well-being of all.",
    "Through its advocacy of a post-scarcity, moneyless world, The Zeitgeist Movement seeks to create a society where collaboration, innovation, and shared access to resources replace competition and financial constraints.",

    // -- Other probably not quite as good options
// 1. The Zeitgeist Movement is a global sustainability advocacy organization working to create a more equitable and regenerative world through education, community engagement, and the application of science and technology.
//
// 2. Dedicated to promoting a sustainable future, The Zeitgeist Movement is a worldwide network of activists seeking to address the root causes of social, economic, and ecological issues.
//
// 3. The Zeitgeist Movement is a global community of passionate individuals collaborating to build a society that prioritizes human well-being and environmental harmony over profit and consumption.
//
// 4. As a grassroots movement, The Zeitgeist Movement aims to shift our collective mindset towards sustainability, encouraging the adoption of science-based solutions for a thriving world.
//
// 5. The Zeitgeist Movement is a catalyst for change, empowering people around the globe to work together in creating a more resilient, equitable, and sustainable future for all.
//
// 6. Through education, activism, and collaboration, The Zeitgeist Movement strives to create a world where the well-being of people and the planet is the primary focus of our social and economic systems.
//
// 7. The Zeitgeist Movement is a global network of individuals united by a shared vision of a sustainable, post-scarcity world made possible through the intelligent application of science and technology.
//
// 8. By advocating for a resource-based economy and promoting sustainability, The Zeitgeist Movement aims to create a world where all people have access to the necessities of life and can thrive in harmony with nature.
//
// 9. The Zeitgeist Movement is a global initiative working to transform our society by addressing the systemic issues that perpetuate inequality, environmental destruction, and social discord.
//
// 10. As a movement for positive change, The Zeitgeist Movement seeks to inspire a shift in our collective values, prioritizing sustainability, cooperation, and the well-being of all life on Earth.
];

export default tzmDescriptions;

/**
 *
 * @param index
 * @returns string
 */
export function getTzmDescription(index = null) {

    if (index === null) {
        index = Math.floor(Math.random() * tzmDescriptions.length);
    }
    return tzmDescriptions[index];
}
