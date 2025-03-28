import img1b from "../images/detox/revitalizer.jpg";
import img1c from "../images/detox/revitalizer.jpg";
import img2 from "../images/detox/rejuvenate.jpg";
import img2c from "../images/detox/rejuvenate.jpg";
import img3 from "../images/detox/green cleanse.jpg";
import img3c from "../images/detox/green cleanse.jpg";
import img4 from "../images/detox/reboot.jpg";
import img4c from "../images/detox/reboot.jpg";
import img5 from "../images/detox/detox kickstart.jpg";
import img5c from "../images/detox/detox kickstart.jpg";
import img6 from "../images/detox/exotic garden.jpg";
import img6c from "../images/detox/exotic garden.jpg";


const detoxData = [
  {
    id: 1,
    imageUrl: img1c,
    imageUrl1: img1b,
    name: "Revitalizer Salad",
    link: "https://www.greensizz.com/collections/pregnancy-bowls/products/kiwi-kale-crunch-1",
    description:
      "Delight in this vibrant blend packed with iron and Vitamin A. With 5 servings of tropical mango, creamy avocado, crisp baby corn, and more, it's a nutrient-rich treat for your taste buds!",
    items: [
      {
        ingredientId: 1,
        name: "Acai berry",
        quantity: "1200g",
      },
      {
        ingredientId: 6,
        name: "Spinach",
        quantity: "800g",
      },
      {
        ingredientId: 4,
        name: "Blueberries",
        quantity: "600g",
      },
      {
        ingredientId: 43,
        name: "Red Cabbage",
        quantity: "680g",
      },
      {
        ingredientId: 30,
        name: "Beetroot",
        quantity: "680g",
      },
    ],
    totalProtein: "81 g",
    totalCalories: "2609 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "4000 g",
    totalFiber: "138 g",
    totalVitaminC: "2067 mg",
    totalVitaminA: "8219 μg",
    totalCalcium: " 3747 mg",
    totalPotassium: "13564 mg",
    totalMagnesium: "902 mg",
    totalIron: "32 mg",
    totalVitaminB6: "6 mg",
    totalFolate: "2050 μg",
    totalSodium: "1180 mg",
    totalZinc: "11 mg",
    totalSelenium: "39 μg",
    noOfServing: 8,
    servingSize: "500 g",
    richIn: ["Anthocyanins", "Flavonoid ", "Glucosinolate "],
    nutrientText: "Thyriod care made easy",
  },
  {
    id: 2,
    imageUrl: img2c,
    imageUrl1: img2,
    name: "Rejuvenate & Refresh Bowl",
    link: "https://www.greensizz.com/collections/pregnancy-bowls/products/kiwi-kale-crunch-1",
    description:
      "Fresh spinach mixed with sliced leeks, juicy papaya, creamy avocado, and tart grapefruit to boost testosterone with vitamins and healthy fats.",
    items: [
      {
        ingredientId: 2,
        name: "Mango",
        quantity: "1200",
      },
      {
        ingredientId: 3,
        name: "Green Apple",
        quantity: "960g",
      },
      {
        ingredientId: 13,
        name: "Passion Fruit",
        quantity: "800g",
      },
      {
        ingredientId: 25,
        name: "Papaya",
        quantity: "640g",
      },
      {
        ingredientId: 40,
        name: "Lettuce",
        quantity: "400g",
      },
    ],
    totalProtein: "61 g",
    totalCalories: "1893 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "4000 g",
    totalFiber: "121 g",
    totalVitaminC: "2390 mg",
    totalVitaminA: "8391 μg",
    totalCalcium: "1602 mg",
    totalPotassium: "10521 mg",
    totalMagnesium: "787 mg",
    totalIron: "36 mg",
    totalVitaminB6: "7 mg",
    totalFolate: "1396 μg",
    totalSodium: "1081 mg",
    totalZinc: "7 mg",
    totalSelenium: "23 μg",
    noOfServing: 8,
    servingSize: "500 g",
    richIn: ["Carotenoid ", "Quercetin", "Vitamin C"],
    nutrientText: "Regulates insulin resistance",
  },
  {
    id: 3,
    imageUrl: img3c,
    imageUrl1: img3,
    name: "Green Cleanse Mix",
    link: "https://www.greensizz.com/collections/pregnancy-bowls/products/kiwi-kale-crunch-1",
    description:
      "Crisp lettuce and crunchy red cabbage, paired with celery, mixed berries, and creamy banana. This combination provides antioxidants.",
    items: [
      {
        ingredientId: 52,
        name: "Broccoli",
        quantity: "960g",
      },
      {
        ingredientId: 14,
        name: "Kale",
        quantity: "960g",
      },
      {
        ingredientId: 42,
        name: "Celery",
        quantity: "800g",
      },
      {
        ingredientId: 32,
        name: "Avocado ",
        quantity: "480g",
      },
      {
        ingredientId: 45,
        name: "Yellow Zucchini",
        quantity: "480g",
      },
    ],
    totalProtein: "90 g",
    totalCalories: "1352 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "4000 g",
    totalFiber: "97 g",
    totalVitaminC: "1264 mg",
    totalVitaminA: "3113 μg",
    totalCalcium: "1146 mg",
    totalPotassium: "11174 mg",
    totalMagnesium: "734 mg",
    totalIron: "44 mg",
    totalVitaminB6: "13 mg",
    totalFolate: "2530 μg",
    totalSodium: "342 mg",
    totalZinc: "15 mg",
    totalSelenium: "124 μg",
    noOfServing: 8,
    servingSize: "500 g",
    richIn: ["Sulforaphane", "Phthalides", "β-carotene"],
    nutrientText: "Say goodbye to PMS Blues",
  },
  {
    id: 4,
    imageUrl: img4c,
    imageUrl1: img4,
    name: "Reboot Bowl",
    link: "https://www.greensizz.com/collections/pregnancy-bowls/products/kiwi-kale-crunch-1",
    description:
      "Delight in this vibrant blend packed with iron and Vitamin A. With 5 servings of tropical mango, creamy avocado, crisp baby corn, and more, it's a nutrient-rich treat for your taste buds!",
    items: [
      {
        ingredientId: 15,
        name: "Beetroot",
        quantity: "1200g",
      },
      {
        ingredientId: 34,
        name: "Raspberry",
        quantity: "960g",
      },
      {
        ingredientId: 3,
        name: "Spinach",
        quantity: "800g",
      },
      {
        ingredientId: 8,
        name: "Green Apple",
        quantity: "640g",
      },
      {
        ingredientId: 24,
        name: "Blackberries",
        quantity: "400g",
      },
    ],
    totalProtein: "62 g",
    totalCalories: "975 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "4000 g",
    totalFiber: "67 g",
    totalVitaminC: "1808 mg",
    totalVitaminA: "6028 μg",
    totalCalcium: "2479 mg",
    totalPotassium: "9327 mg",
    totalMagnesium: "698 mg",
    totalIron: "53 mg",
    totalVitaminB6: "7 mg",
    totalFolate: "1608 μg",
    totalSodium: "1172 mg",
    totalZinc: "9 mg",
    totalSelenium: "9 μg",
    noOfServing: 8,
    servingSize: "500 g",
    richIn: ["Betalains ", "Ellagic acid", "Anthocyanins"],
    nutrientText: "Tames you androgene",
  },
  {
    id: 5,
    imageUrl: img5c,
    imageUrl1: img5,
    name: "Detox Kickstart Bowl",
    link: "https://www.greensizz.com/collections/pregnancy-bowls/products/kiwi-kale-crunch-1",
    description:
      "Delight in this vibrant blend packed with iron and Vitamin A. With 5 servings of tropical mango, creamy avocado, crisp baby corn, and more, it's a nutrient-rich treat for your taste buds!",
    items: [
      {
        ingredientId: 8,
        name: "Grapefruit",
        quantity: "1200g",
      },
      {
        ingredientId: 13,
        name: "Kiwi ",
        quantity: "400g",
      },
      {
        ingredientId: 10,
        name: "Carrot",
        quantity: "600g",
      },
      {
        ingredientId: 12,
        name: "Snap Peas",
        quantity: "800g",
      },
      {
        ingredientId: 40,
        name: "Red Onion",
        quantity: "600g",
      },
    ],
    totalProtein: "62 g",
    totalCalories: "2234 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "4000 g",
    totalFiber: "102 g",
    totalVitaminC: "1611 mg",
    totalVitaminA: "8183 μg",
    totalCalcium: " 1570 mg",
    totalPotassium: "8804 mg",
    totalMagnesium: "636 mg",
    totalIron: "52 mg",
    totalVitaminB6: "5 mg",
    totalFolate: "1814 μg",
    totalSodium: "6784 mg",
    totalZinc: "12 mg",
    totalSelenium: "15 μg",
    noOfServing: 8,
    servingSize: "500 g",
    richIn: ["Vitamin C", "Quercetin", "Silica"],
    nutrientText: "Tames your androgene",
  },
  {
    id: 6,
    imageUrl: img6c,
    imageUrl1: img6,
    name: "Exotic Garden Detox Medley",
    link: "https://www.greensizz.com/collections/pregnancy-bowls/products/kiwi-kale-crunch-1",
    description:
      "Delight in this vibrant blend packed with iron and Vitamin A. With 5 servings of tropical mango, creamy avocado, crisp baby corn, and more, it's a nutrient-rich treat for your taste buds!",
    items: [
      {
        ingredientId: 21,
        name: "Dragon fruit",
        quantity: "960g",
      },
      {
        ingredientId: 8,
        name: "Green Zuucchini",
        quantity: "800g",
      },
      {
        ingredientId: 23,
        name: "Oranges",
        quantity: "800g",
      },
      {
        ingredientId: 32,
        name: "Kiwi",
        quantity: "800",
      },
      {
        ingredientId: 16,
        name: "Pomegranate",
        quantity: "640",
      },
    ],
    totalProtein: "58 g",
    totalCalories: "1922 kcal",
    totalPrice: "Rs 12.50",
    totalWeight: "4000 g",
    totalFiber: "112 g",
    totalVitaminC: "1886 mg",
    totalVitaminA: "8144 μg",
    totalCalcium: " 3258 mg",
    totalPotassium: "10893 mg",
    totalMagnesium: "823 mg",
    totalIron: "26 mg",
    totalVitaminB6: "4 mg",
    totalFolate: "2125 μg",
    totalSodium: "1014 mg",
    totalZinc: "8 mg",
    totalSelenium: "24 μg",
    noOfServing: 8,
    servingSize: "500 g",
    richIn: ["Betalains", "Lycopene", "Polyphenols"],
    nutrientText: "Ovulation on track",
  },
];

export default detoxData;
