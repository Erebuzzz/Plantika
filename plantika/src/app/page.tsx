import Link from "next/link";
import Image from "next/image";
import { 
  Leaf, 
  Sun, 
  Droplets, 
  Heart, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  MessageCircle,
  Sprout,
  Award,
  Users
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

// Gallery plant data (using P images)
const galleryPlants = [
  { id: 1, name: "Plant Collection 1", image: "/plants/P1.png" },
  { id: 2, name: "Plant Collection 2", image: "/plants/P2.png" },
  { id: 3, name: "Plant Collection 3", image: "/plants/P3.png" },
  { id: 4, name: "Plant Collection 4", image: "/plants/P4.png" },
  { id: 5, name: "Plant Collection 5", image: "/plants/P6.png" },
  { id: 6, name: "Plant Collection 6", image: "/plants/P7.png" },
  { id: 7, name: "Plant Collection 7", image: "/plants/P8.png" },
  { id: 8, name: "Plant Collection 8", image: "/plants/P9.png" },
  { id: 9, name: "Plant Collection 9", image: "/plants/P10.png" },
  { id: 10, name: "Plant Collection 10", image: "/plants/P11.png" },
  { id: 11, name: "Plant Collection 11", image: "/plants/P12.png" },
  { id: 12, name: "Plant Collection 12", image: "/plants/P13.png" },
  { id: 13, name: "Plant Collection 13", image: "/plants/P14.png" },
  { id: 14, name: "Plant Collection 14", image: "/plants/P15.png" },
  { id: 15, name: "Plant Collection 15", image: "/plants/P16.png" }
];

// Plant data
const plants = [
  {
    id: 1,
    name: "Hibiscus (Jaba/Gurhal)",
    description: "Tropical flowering shrub",
    fullDescription: "The Hibiscus, known locally as Jaba or Gurhal, is a magnificent tropical flowering shrub that belongs to the Malvaceae family. This stunning plant produces large, trumpet-shaped flowers that can reach up to 6 inches in diameter, showcasing vibrant colors including deep red, bright pink, sunny yellow, and pristine white. During Pune's monsoon season, hibiscus plants thrive exceptionally well due to the increased humidity and moderate temperatures. The flowers typically last for just one day, but the plant produces them in abundance throughout the growing season, ensuring continuous blooms from June through October. Each flower consists of five delicate petals surrounding a prominent central column containing both male and female reproductive parts. The glossy, dark green leaves provide an excellent backdrop for the brilliant flowers. In Indian culture, hibiscus flowers hold special significance and are often used in religious ceremonies, particularly in offerings to Hindu deities. The flowers are also valued in Ayurvedic medicine for their therapeutic properties, especially for hair care, where they're used to create natural shampoos and hair oils that promote growth and add shine.",
    care: {
      light: "Bright indirect to partial direct sunlight (4-6 hours daily)",
      water: "Water deeply but ensure drainage during heavy rains",
      soil: "Well-draining loamy soil enriched with compost, pH 6.0-7.0",
      temperature: "20-32°C (ideal monsoon range)",
      humidity: "60-80% (perfect for Pune's monsoon humidity)"
    },
    benefits: ["Attracts butterflies and hummingbirds", "Flowers used in Ayurvedic medicine", "Natural hair conditioner", "Beautiful ornamental display"],
    image: "/plants/pune1.png"
  },
  {
    id: 2,
    name: "Jasmine (Mogra/Chameli)",
    description: "Fragrant flowering climbing vine",
    fullDescription: "Jasmine, known locally as Mogra or Chameli, is an enchanting fragrant flowering plant from the Oleaceae family that transforms any garden into a perfumed paradise. This versatile plant can grow as both a climbing vine and a compact shrub, making it perfect for various landscape applications in Pune gardens. The small, pristine white flowers, typically measuring 1-2 cm across, are renowned for their intense, sweet fragrance that becomes most pronounced during evening hours, especially after monsoon showers. During Pune's monsoon season, jasmine plants experience their peak blooming period, producing clusters of star-shaped flowers that release their captivating scent into the humid air. The plant features glossy, oval-shaped leaves that remain evergreen throughout the year, providing year-round beauty even when not in bloom. In Indian culture, jasmine holds immense cultural and religious significance - the flowers are extensively used in temple decorations, wedding ceremonies, and religious festivals. Women traditionally wear jasmine garlands in their hair during special occasions, and the flowers are considered sacred offerings in Hindu temples. The essential oil extracted from jasmine flowers is highly prized in the perfume industry and aromatherapy for its mood-lifting and calming properties.",
    care: {
      light: "Partial shade to filtered morning sunlight",
      water: "Regular watering with good drainage",
      soil: "Rich, well-draining soil with high organic content, pH 6.0-7.5",
      temperature: "18-28°C (thrives in monsoon temperatures)",
      humidity: "65-85% (excellent for monsoon season)"
    },
    benefits: ["Intensely fragrant flowers", "Used in religious ceremonies", "Natural air freshener", "Attracts beneficial pollinators"],
    image: "/plants/pune2.png"
  },
  {
    id: 3,
    name: "Marigold (Genda)",
    description: "Hardy annual flowering herb",
    fullDescription: "Marigold, known locally as Genda, is a remarkable hardy annual flowering herb from the Asteraceae family that brings vibrant color and natural protection to Pune gardens throughout the monsoon season. These cheerful flowers are among the most reliable bloomers during the rainy months, producing abundant bright orange, yellow, and golden flowers that seem to capture sunshine even on cloudy monsoon days. The sturdy plants typically grow 6 inches to 3 feet tall depending on the variety, with deeply divided, aromatic foliage that releases a distinctive earthy scent when touched. Marigolds are incredibly valuable companion plants in Pune gardens because they naturally repel harmful insects including aphids, whiteflies, and nematodes, making them excellent guardians for vegetable gardens and other flowering plants. The flowers are not only beautiful but also edible, with petals that add a slightly peppery, tangy flavor to salads, rice dishes, and traditional Indian sweets. In Indian culture, marigolds hold special significance and are extensively used in religious ceremonies, festivals like Diwali and Dussehra, and wedding decorations. The flowers are often strung into beautiful garlands (mala) for temple offerings and home decorations. During Pune's monsoon season, marigolds establish quickly and bloom continuously until the first frost, making them perfect for adding instant color to newly planted gardens.",
    care: {
      light: "Full sun to partial shade",
      water: "Moderate watering, avoid overwatering",
      soil: "Well-draining garden soil, tolerates various soil types, pH 6.0-7.5",
      temperature: "18-30°C (ideal for monsoon planting)",
      humidity: "50-70% (handles monsoon humidity well)"
    },
    benefits: ["Natural pest deterrent", "Edible flowers", "Long blooming period", "Attracts beneficial insects"],
    image: "/plants/pune3.png"
  },
  {
    id: 4,
    name: "Rain Lily (Zephyranthes)",
    description: "Perennial bulbous flowering plant",
    fullDescription: "The Rain Lily, scientifically known as Zephyranthes, is truly a magical plant that embodies the essence of monsoon season in Pune. This remarkable perennial bulbous plant from the Amaryllidaceae family has earned its common name due to its extraordinary ability to produce beautiful flowers seemingly overnight after rain showers. The phenomenon is so reliable that gardeners often predict blooms based on weather patterns. During Pune's monsoon months, these enchanting lilies create spectacular displays of white, pink, or yellow funnel-shaped flowers that emerge on slender stems, rising 15-20 cm above the grass-like foliage. Each bloom typically lasts 2-3 days, but the plant produces them in successive waves throughout the rainy season, creating continuous bursts of color. The bulbs remain dormant during dry periods, conserving energy and moisture, then spring to life with the first substantial rainfall. This remarkable adaptation makes them perfect for Pune's distinct wet and dry seasons. The narrow, strap-like leaves appear either with or slightly after the flowers, creating an elegant display. Rain lilies are exceptionally low-maintenance, requiring no fertilizers or special care, making them ideal for both novice and busy gardeners who want guaranteed seasonal beauty.",
    care: {
      light: "Full sun to partial shade",
      water: "Loves rain showers, needs dry period between waterings",
      soil: "Well-draining sandy loam soil, pH 6.0-7.0",
      temperature: "20-30°C (perfect for monsoon season)",
      humidity: "70-85% (blooms best during high humidity)"
    },
    benefits: ["Magical post-rain blooms", "Extremely low maintenance", "Naturalizes easily", "Deer resistant"],
    image: "/plants/pune4.png"
  },
  {
    id: 5,
    name: "Monstera Deliciosa",
    description: "Swiss Cheese Plant",
    fullDescription: "The Monstera Deliciosa, affectionately known as the Swiss Cheese Plant, is a spectacular tropical climbing aroid native to the rainforests of Central America. This Instagram-famous houseplant has captured the hearts of plant enthusiasts worldwide with its dramatic, split leaves that develop distinctive holes (called fenestrations) as the plant matures. During Pune's monsoon season, this plant absolutely thrives due to the high humidity levels that mimic its natural rainforest habitat. Young Monstera leaves start as solid heart shapes, but as the plant grows and receives adequate light, the leaves develop their characteristic splits and holes, creating stunning architectural foliage that can reach up to 3 feet across in optimal conditions. The plant produces aerial roots that help it climb trees in nature, and indoors, these can be trained up moss poles or trellises to create impressive vertical displays. Mature plants (typically 5-7 years old) may even produce edible fruits that taste like a combination of pineapple and banana, though this rarely occurs indoors. The glossy, deep green leaves not only create dramatic visual impact but also serve as excellent air purifiers, removing common household toxins while releasing oxygen and increasing humidity levels.",
    care: {
      light: "Bright, indirect light",
      water: "Water when top inch of soil feels dry",
      soil: "Well-draining potting mix with peat, perlite, and bark chunks, pH 5.5-7.0",
      temperature: "20-30°C (perfect for Pune's monsoon climate)",
      humidity: "60-80% (thrives in monsoon humidity)"
    },
    benefits: ["Excellent air purifier", "Instagram-worthy plant", "Large dramatic foliage", "Increases indoor humidity"],
    image: "/plants/pune5.png"
  },
  {
    id: 6,
    name: "Snake Plant (Sansevieria)",
    description: "Mother-in-Law's Tongue",
    fullDescription: "The Snake Plant, scientifically known as Sansevieria trifasciata and commonly called Mother-in-Law's Tongue, is an extraordinary succulent perennial native to West Africa that has become one of the most beloved and practically beneficial houseplants worldwide. This architectural marvel features thick, sword-like leaves that grow upright in a striking vertical pattern, reaching heights of 2-4 feet indoors. The leaves display beautiful variegation with dark green centers bordered by lighter green and creamy yellow edges, creating a stunning visual impact in any space. What makes the Snake Plant truly special is its remarkable ability to purify indoor air - NASA's Clean Air Study identified it as one of the top air-purifying plants, capable of removing toxins including formaldehyde, xylene, toluene, and nitrogen oxides from indoor environments. Unlike most plants that release oxygen during the day, Snake Plants perform Crassulacean Acid Metabolism (CAM) photosynthesis, meaning they release oxygen at night while absorbing carbon dioxide, making them ideal bedroom companions for better sleep quality. During Pune's monsoon season, these plants thrive in the increased humidity while requiring minimal care, making them perfect for busy plant parents or those new to indoor gardening. They're incredibly drought-tolerant and can survive weeks without water, actually preferring to dry out completely between waterings.",
    care: {
      light: "Low to bright indirect light",
      water: "Water only when soil is completely dry",
      soil: "Well-draining cactus/succulent potting mix, pH 6.0-7.5",
      temperature: "18-29°C",
      humidity: "30-50% (tolerates average household humidity)"
    },
    benefits: ["Outstanding air purifier", "Produces oxygen at night", "Extremely drought tolerant", "Propagates easily"],
    image: "/plants/pune6.png"
  },
  {
    id: 7,
    name: "Fiddle Leaf Fig",
    description: "Ficus Lyrata",
    fullDescription: "The Fiddle Leaf Fig, scientifically known as Ficus lyrata, is a stunning large-leaved tropical tree native to West Africa that has become the ultimate statement houseplant for modern homes and offices. This architectural beauty features enormous, violin-shaped leaves that can grow up to 18 inches long and 12 inches wide, creating dramatic focal points that instantly elevate any interior space. The glossy, deep green leaves have prominent veining that adds to their sculptural beauty, making each leaf a work of natural art. During Pune's monsoon season, Fiddle Leaf Figs appreciate the increased humidity levels that more closely mimic their native tropical habitat, though they must be protected from direct rain and overwatering. These plants can grow quite tall indoors - often reaching 6-10 feet - creating impressive tree-like specimens that serve as living sculptures in contemporary interior design. The Fiddle Leaf Fig has become incredibly popular on social media platforms, earning it the nickname 'Instagram plant' due to its photogenic qualities and ability to transform any room into a trendy, plant-filled sanctuary. While they have a reputation for being somewhat finicky, understanding their basic needs for bright, indirect light and consistent watering schedules leads to success. The plant's dramatic size and tropical appearance make it perfect for filling empty corners, framing furniture, or creating natural room dividers.",
    care: {
      light: "Bright ambient light without direct sun",
      water: "Water when top 2 inches of soil are dry",
      soil: "Well-draining potting mix with peat, perlite, and bark, pH 6.0-7.0",
      temperature: "15-29°C",
      humidity: "30-65% humidity"
    },
    benefits: ["Dramatic focal point", "Can grow into tree-like form", "Adds tropical elegance", "Instagram-famous plant"],
    image: "/plants/pune7.png"
  },
  {
    id: 8,
    name: "Golden Pothos",
    description: "Epipremnum Aureum",
    fullDescription: "Golden Pothos, scientifically known as Epipremnum aureum and affectionately called 'Devil's Ivy,' is a spectacular trailing tropical vine native to Southeast Asia that ranks among the most popular and forgiving houseplants in the world. This versatile beauty features heart-shaped leaves adorned with stunning golden-yellow variegation that cascades elegantly from hanging baskets, climbs up moss poles, or drapes gracefully from high shelves. The variegation patterns are unique on each leaf, creating an ever-changing display of green and gold that brightens any indoor space. During Pune's monsoon season, Golden Pothos absolutely thrives in the increased humidity, often producing larger leaves and more vibrant variegation. This plant is incredibly adaptable and can grow in various lighting conditions, though bright, indirect light enhances the golden coloring. One of the most beloved characteristics of Golden Pothos is its ability to propagate easily in water - simply cut a vine section with nodes and place it in water, and roots will develop within weeks, allowing you to create new plants to share with friends or expand your own collection. The plant is also an excellent air purifier, removing common indoor pollutants including formaldehyde, xylene, and toluene. Its rapid growth rate means you'll quickly have lush, trailing vines that can span several feet, creating beautiful natural curtains or living walls.",
    care: {
      light: "Bright, indirect light to partial shade",
      water: "Water when top inch feels dry",
      soil: "Well-draining all-purpose potting mix, pH 6.1-6.5",
      temperature: "18-24°C",
      humidity: "50-70%"
    },
    benefits: ["Excellent air purifier", "Extremely easy care", "Fast-growing", "Propagates in water"],
    image: "/plants/pune8.png"
  },
  {
    id: 9,
    name: "ZZ Plant",
    description: "Zamioculcas Zamiifolia",
    fullDescription: "The ZZ Plant, formally known as Zamioculcas zamiifolia, is a remarkable drought-tolerant tropical perennial native to Eastern Africa that has earned the title of 'ultimate low-maintenance plant' among indoor gardening enthusiasts. This architectural succulent features thick, fleshy stems topped with glossy, waxy leaflets that appear almost artificial due to their perfect symmetry and lustrous shine. The plant's unique structure includes underground rhizomes that store water and nutrients, allowing it to survive extended periods without care - making it perfect for busy professionals, frequent travelers, or anyone seeking a virtually indestructible houseplant. During Pune's monsoon season, ZZ Plants appreciate the ambient humidity but require careful attention to drainage, as their rhizomes can rot if waterlogged. The plant's glossy leaves naturally repel dust and maintain their shine with minimal cleaning, while the compact growth habit makes it perfect for offices, apartments, or any space where floor room is limited. ZZ Plants are exceptional for low-light environments, thriving in conditions where other plants would struggle, including fluorescent office lighting or dim corners of homes. The plant's slow, steady growth means it maintains its shape for years without becoming overgrown or requiring frequent repotting. Its modern, sculptural appearance complements contemporary interior design styles perfectly.",
    care: {
      light: "Low to bright indirect light",
      water: "Water only when soil is completely dry (every 2-3 weeks)",
      soil: "Well-draining potting mix with perlite, pH 6.0-7.0",
      temperature: "18-26°C",
      humidity: "40-50% (very tolerant of low humidity)"
    },
    benefits: ["Thrives in low light", "Extremely drought tolerant", "Perfect for beginners", "Glossy attractive foliage"],
    image: "/plants/pune9.png"
  },
  {
    id: 10,
    name: "Bird of Paradise",
    description: "Strelitzia Reginae",
    fullDescription: "The Bird of Paradise, scientifically known as Strelitzia reginae, is a magnificent tropical flowering plant native to South Africa that brings exotic elegance and dramatic flair to any space. This stunning plant is renowned for its large, paddle-shaped leaves that can grow up to 18 inches long and its spectacular bird-like flowers that emerge on mature plants (typically 4-5 years old), resembling the colorful plumage of tropical birds with orange and blue petals. The thick, banana-like leaves feature prominent parallel veining and sometimes develop natural splits due to wind exposure, which is normal and adds to their tropical character. During Pune's monsoon season, Bird of Paradise plants thrive in the warm, humid conditions that closely mimic their native South African coastal habitat. The increased humidity helps prevent the leaf edges from browning, a common issue in dry indoor environments. These plants are fast growers during optimal conditions and can reach impressive heights of 5-6 feet indoors, creating stunning focal points in living rooms, conservatories, or bright offices. The flowers, when they do appear on mature plants, are truly spectacular and long-lasting, making excellent cut flowers for dramatic floral arrangements. Even without flowers, the architectural foliage creates an immediate tropical ambiance that transforms any space into an exotic retreat.",
    care: {
      light: "Bright light with some direct sun",
      water: "Regular watering with good drainage",
      soil: "Rich, well-draining potting mix with organic matter, pH 6.0-7.5",
      temperature: "20-30°C (thrives in warm conditions)",
      humidity: "60-70% (appreciates monsoon humidity)"
    },
    benefits: ["Spectacular bird-like flowers on mature plants", "Large tropical leaves", "Creates exotic atmosphere", "Long-lasting cut flowers"],
    image: "/plants/pune10.png"
  },
  {
    id: 11,
    name: "Boston Fern",
    description: "Nephrolepis Exaltata",
    fullDescription: "The Boston Fern, scientifically known as Nephrolepis exaltata, is a classic and beloved hanging fern that epitomizes elegance and natural beauty in indoor spaces. This graceful fern native to tropical regions worldwide features delicate, feathery fronds that arch gracefully outward, creating a full, lush appearance that adds softness and natural texture to any room. Each frond consists of numerous small leaflets arranged along a central stem, creating an intricate pattern that appears almost lace-like in its delicate beauty. During Pune's monsoon season, Boston Ferns absolutely flourish due to the high humidity levels that perfectly replicate their native tropical habitat. The increased moisture in the air prevents the common problem of brown, crispy leaf tips that often occur in dry indoor environments. These ferns are natural air purifiers, particularly effective at removing formaldehyde and xylene from indoor air while releasing moisture through transpiration, naturally increasing humidity levels in your home. Boston Ferns have been popular houseplants since the Victorian era and remain timeless favorites for their ability to bring a touch of wilderness indoors. They're particularly stunning in hanging baskets where their arching fronds can cascade freely, creating living curtains of green that soften harsh architectural lines and add a romantic, cottage-garden feel to modern interiors.",
    care: {
      light: "Bright, indirect light",
      water: "Keep soil consistently moist but not waterlogged",
      soil: "Well-draining, moisture-retentive potting mix with peat, pH 5.0-6.5",
      temperature: "18-24°C (perfect for monsoon weather)",
      humidity: "70-80% (loves high humidity of monsoon season)"
    },
    benefits: ["Classic elegant appearance", "Excellent air purifier", "Adds lush green texture", "Perfect for hanging displays"],
    image: "/plants/pune11.png"
  },
  {
    id: 12,
    name: "Calathea (Prayer Plant)",
    description: "Tropical foliage plant",
    fullDescription: "Calathea, commonly known as Prayer Plant, is an extraordinary tropical foliage plant native to South America that captivates plant enthusiasts with its stunning decorative leaves and unique behavioral characteristics. These remarkable plants belong to the Marantaceae family and are famous for their nyctinastic movement - the fascinating ability to fold their leaves upward at night like hands in prayer, then unfold them again each morning in response to light changes. The leaves display some of nature's most intricate patterns, featuring combinations of deep greens, silver markings, purple undersides, and sometimes pink or red accents that create living works of art. During Pune's monsoon season, Calatheas reach their peak beauty as the high humidity levels (70-80%) perfectly match their native rainforest conditions, resulting in larger leaves, more vibrant colors, and healthy growth. Each variety offers different leaf patterns - from the striking zebra-like stripes of Calathea zebrina to the delicate fishbone patterns of Calathea musaica. These plants are considered pet-safe, making them excellent choices for households with cats and dogs. The undersides of the leaves often display beautiful burgundy or purple coloration, creating a stunning contrast when the leaves move throughout the day.",
    care: {
      light: "Bright, indirect light",
      water: "Keep soil evenly moist with filtered water",
      soil: "Well-draining, moisture-retentive potting mix, pH 6.0-7.0",
      temperature: "18-27°C (ideal for monsoon conditions)",
      humidity: "70-80% (requires high humidity, perfect for monsoon)"
    },
    benefits: ["Stunning patterned leaves", "Unique leaf movement", "Non-toxic to pets", "Excellent air purifier"],
    image: "/plants/pune12.png"
  },
  {
    id: 13,
    name: "Jade Plant",
    description: "Crassula Ovata",
    fullDescription: "The Jade Plant, scientifically known as Crassula ovata, is a cherished succulent shrub native to South Africa that has become one of the most popular and symbolically significant houseplants worldwide. This beautiful plant features thick, fleshy, jade-green leaves that store water and nutrients, allowing it to thrive with minimal care while maintaining its attractive appearance year-round. The oval-shaped leaves have a glossy finish and often develop red edges when exposed to bright light, adding extra visual interest to the plant's already appealing form. In Chinese culture and Feng Shui traditions, the Jade Plant is considered extremely auspicious and is commonly called the 'Money Tree' or 'Lucky Plant,' believed to attract wealth, prosperity, and positive energy to homes and businesses. During Pune's monsoon season, Jade Plants require careful watering management as they prefer to dry out completely between waterings and can suffer from root rot if kept too wet. The plant's sculptural form and tree-like growth habit make it perfect for bonsai enthusiasts, as it can be shaped and pruned into beautiful miniature tree forms. Mature Jade Plants (typically 3-5 years old) produce clusters of small, star-shaped white or pink flowers during winter months, adding unexpected beauty to these already attractive plants.",
    care: {
      light: "Bright light with some direct sun",
      water: "Water deeply but infrequently (every 10-14 days)",
      soil: "Well-draining cactus/succulent mix, pH 6.1-6.5",
      temperature: "18-24°C",
      humidity: "30-40% (prefers lower humidity)"
    },
    benefits: ["Symbol of prosperity", "Extremely easy care", "Beautiful small white flowers", "Propagates very easily"],
    image: "/plants/pune13.png"
  },
  {
    id: 14,
    name: "Philodendron",
    description: "Heart-leaf Philodendron",
    fullDescription: "The Philodendron, particularly the Heart-leaf variety (Philodendron hederaceum), is a beloved tropical climbing and trailing vine native to Central America that has earned its place as one of the most popular and reliable houseplants worldwide. This classic beauty features glossy, heart-shaped leaves that emerge bronze-colored and mature to a rich, deep green, creating an ever-changing display of colors and textures. The plant's versatile growth habit allows it to trail elegantly from hanging baskets, climb up moss poles or trellises, or spread across surfaces as a lush ground cover, making it perfect for various interior design applications. During Pune's monsoon season, Philodendrons experience accelerated growth due to the increased humidity levels that closely mimic their native rainforest environment. The higher moisture content in the air promotes larger leaf development and more vigorous vine growth, often resulting in trailing stems that can reach impressive lengths of 4-6 feet or more. These plants are renowned for their air-purifying abilities, effectively removing common household toxins including formaldehyde, xylene, and toluene from indoor air. The Heart-leaf Philodendron is incredibly easy to propagate - simply cut a vine section with aerial roots and place it in water, where it will quickly develop new roots for transplanting.",
    care: {
      light: "Bright, indirect light",
      water: "Water when top inch of soil feels dry",
      soil: "Well-draining all-purpose potting mix, pH 6.0-7.0",
      temperature: "18-27°C (ideal for tropical conditions)",
      humidity: "60-70% (appreciates higher humidity during monsoon)"
    },
    benefits: ["Fast-growing and easy care", "Beautiful heart-shaped leaves", "Excellent air purifier", "Propagates easily in water"],
    image: "/plants/pune14.png"
  },
  {
    id: 15,
    name: "Rose (Rosa species)",
    description: "Queen of flowers",
    fullDescription: "The Rose, rightfully called the Queen of Flowers, is a woody perennial flowering shrub that has captivated humanity for over 5,000 years with its unparalleled beauty and intoxicating fragrance. Pune's monsoon season provides an ideal time for planting and establishing new rose bushes, as the moderate temperatures and increased humidity create perfect conditions for root development and initial growth. Roses produce some of the most magnificent and fragrant flowers in the plant kingdom, with blooms ranging from delicate pastels to deep, rich hues in colors including red, pink, white, yellow, orange, and even purple or black varieties. Each flower is a masterpiece of nature, featuring layers of velvety petals arranged in perfect symmetry around a central core. The fragrance varies significantly between varieties, from light and sweet to deep and musky, with some roses producing essential oils so precious they're worth more than gold. Beyond their ornamental value, roses have extensive culinary and medicinal uses - rose petals are used to make rose water, gulkand (rose petal preserve), rose tea, and various cosmetic products. In Indian culture, roses symbolize love, devotion, and purity, making them popular choices for weddings, festivals, and religious ceremonies. During monsoon season in Pune, proper care is essential to prevent fungal diseases, but with good air circulation and appropriate watering, roses reward gardeners with abundant blooms from October through March.",
    care: {
      light: "6+ hours of morning sunlight",
      water: "Regular watering with good drainage",
      soil: "Rich, well-draining loamy soil with organic compost, pH 6.0-7.0",
      temperature: "18-25°C (ideal for monsoon planting)",
      humidity: "50-60% (good air circulation essential)"
    },
    benefits: ["Magnificent fragrant flowers", "Cut flowers for bouquets", "Rose petals used in cooking", "Symbol of love and beauty"],
    image: "/plants/pune15.png"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-950 dark:to-emerald-950">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-emerald-100 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-emerald-600" />
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Plantika</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#about" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors">About</Link>
              <Link href="#gallery" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors">Gallery</Link>
              <Link href="#plants" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors">Monsoon Plants</Link>
              <Link href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors">Contact</Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            Welcome to <span className="text-emerald-600">Plantika</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            Your premier destination for premium plants, expert care, and sustainable gardening solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#plants" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Explore Monsoon Plants
            </Link>
            <Link href="#contact" className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950 px-8 py-4 rounded-lg font-semibold transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              About Plantika
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              More than just a nursery - we&apos;re your partners in creating green, sustainable spaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Story</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Plantika Nursery, located in Pune, Maharashtra, is a one-stop-shop plant nursery specializing in 
                supplying a diverse range of plants to businesses and individuals. We specialize in constructing, 
                installing and maintaining green walls, or vertical gardens.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Our passion lies in helping plant enthusiasts of all levels - from beginners taking their first steps 
                into gardening to experienced horticulturists seeking rare and exotic species. We believe that every 
                space can be transformed with the right plants and proper care guidance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-emerald-50 dark:bg-emerald-950 p-6 rounded-lg text-center">
                <Award className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Premium Quality</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Carefully selected, healthy plants</p>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-950 p-6 rounded-lg text-center">
                <Users className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Expert Support</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Professional guidance & care tips</p>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-950 p-6 rounded-lg text-center">
                <Sprout className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Local Expertise</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Pune climate specialists</p>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-950 p-6 rounded-lg text-center">
                <Heart className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Sustainable</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Eco-friendly practices</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">What We Do</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-emerald-900 p-8 rounded-xl">
                <Sprout className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Plant Cultivation</h4>
                <p className="text-slate-600 dark:text-slate-300">
                  We grow and nurture a wide variety of indoor and outdoor plants, 
                  ensuring they&apos;re healthy and ready for your home or garden.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-emerald-900 p-8 rounded-xl">
                <Sun className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Expert Consultation</h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Our certified horticulturists provide personalized advice on plant selection, 
                  care techniques, and troubleshooting common issues.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-emerald-900 p-8 rounded-xl">
                <Droplets className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Sustainable Practices</h4>
                <p className="text-slate-600 dark:text-slate-300">
                  We&apos;re committed to environmentally friendly growing methods, 
                  organic fertilizers, and sustainable packaging solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plant Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Our Plant Collection
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Discover our carefully curated selection of beautiful, healthy plants
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
            {galleryPlants.map((plant) => (
              <div key={plant.id} className="group cursor-pointer">
                <div className="aspect-square rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Image 
                    src={plant.image} 
                    alt={plant.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Plants Section */}
      <section id="plants" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              🌿 Monsoon Magic: Best Plants for Pune
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Discover the perfect plants that thrive in Pune&apos;s monsoon climate - your complete guide to growing beautiful, healthy plants during the rainy season
            </p>
          </div>

          <div className="space-y-16">
            {plants.map((plant, index) => (
              <div key={plant.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`aspect-square rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image 
                    src={plant.image} 
                    alt={plant.name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{plant.name}</h3>
                  <p className="text-lg text-emerald-600 mb-4">{plant.description}</p>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">{plant.fullDescription}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Care Requirements</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Sun className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm text-slate-600 dark:text-slate-300">{plant.care.light}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Droplets className="h-4 w-4 text-blue-500" />
                          <span className="text-sm text-slate-600 dark:text-slate-300">{plant.care.water}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Sprout className="h-4 w-4 text-emerald-500" />
                          <span className="text-sm text-slate-600 dark:text-slate-300">{plant.care.soil}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Benefits</h4>
                      <div className="space-y-1">
                        {plant.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Heart className="h-4 w-4 text-red-500" />
                            <span className="text-sm text-slate-600 dark:text-slate-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-emerald-50 dark:bg-emerald-950 p-4 rounded-lg">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      <strong>Temperature:</strong> {plant.care.temperature} • 
                      <strong> Humidity:</strong> {plant.care.humidity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Ready to start your plant journey? We&apos;re here to help!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Visit Our Nursery</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Address</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Cps Ashram, Anutej Atharv Society,<br />
                      Narveer Tanaji Wadi, Next Shivajinagar Bus Stand Road,<br />
                      Shivaji Nagar-411005, Pune
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Phone & WhatsApp</h4>
                    <p className="text-slate-600 dark:text-slate-300">+91 79723 17143</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Google Business</h4>
                    <Link 
                      href="https://g.co/kgs/dKsPWKL" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      View on Google Maps & Reviews
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link href="https://www.instagram.com/plantika.nursery" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-lg transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="https://www.facebook.com/people/Plantika-Nursery/61557128604616" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-lg transition-colors">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="https://wa.me/917972317143" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-lg transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Leaf className="h-8 w-8 text-emerald-500" />
            <h3 className="text-2xl font-bold">Plantika</h3>
          </div>
          <p className="text-slate-400 mb-6">
            Nurturing green spaces, one plant at a time.
          </p>
          <div className="border-t border-slate-800 pt-6">
            <p className="text-sm text-slate-500">
              © 2025 Plantika. All rights reserved. Made with 💚 for plant lovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
