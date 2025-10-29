export const options = [
  {
    label: { label: "Fruits" },
    id: "fruits",
    value: "fruits",
    options: [
      {
        id: "tropical",
        value: "tropical",
        label: { label: "Tropical Fruits" },
        options: [
          {
            id: "mango",
            value: "mango",
            label: { label: "Mango" },
            onCheckedChange: (checked: any) => console.log("Mango:", !!checked),
          },
          {
            id: "pineapple",
            value: "pineapple",
            label: { label: "Pineapple" },
          },
          {
            id: "papaya",
            value: "papaya",
            label: { label: "Papaya" },
          },
        ],
      },
      {
        id: "berries",
        value: "berries",
        label: { label: "Berries" },
        options: [
          {
            id: "strawberry",
            value: "strawberry",
            label: { label: "Strawberry" },
          },
          {
            id: "blueberry",
            value: "blueberry",
            label: { label: "Blueberry" },
          },
          {
            id: "raspberry",
            value: "raspberry",
            label: { label: "Raspberry" },
          },
        ],
      },
      {
        id: "citrus",
        value: "citrus",
        label: { label: "Citrus Fruits" },
        options: [
          {
            id: "orange",
            value: "orange",
            label: { label: "Orange" },
          },
          {
            id: "lemon",
            value: "lemon",
            label: { label: "Lemon" },
          },
          {
            id: "lime",
            value: "lime",
            label: { label: "Lime" },
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    label: { label: "Vegetables" },
    id: "vegetables",
    value: "vegetables",
    options: [
      {
        id: "leafy",
        value: "leafy",
        label: { label: "Leafy Greens" },
        options: [
          {
            id: "spinach",
            value: "spinach",
            label: { label: "Spinach" },
          },
          {
            id: "lettuce",
            value: "lettuce",
            label: { label: "Lettuce" },
          },
          {
            id: "kale",
            value: "kale",
            label: { label: "Kale" },
          },
        ],
      },
      {
        id: "root",
        value: "root",
        label: { label: "Root Vegetables" },
        options: [
          {
            id: "carrot",
            value: "carrot",
            label: { label: "Carrot" },
          },
          {
            id: "potato",
            value: "potato",
            label: { label: "Potato" },
          },
          {
            id: "beetroot",
            value: "beetroot",
            label: { label: "Beetroot" },
          },
        ],
      },
      {
        id: "cruciferous",
        value: "cruciferous",
        label: { label: "Cruciferous Vegetables" },
        options: [
          {
            id: "broccoli",
            value: "broccoli",
            label: { label: "Broccoli" },
          },
          {
            id: "cauliflower",
            value: "cauliflower",
            label: { label: "Cauliflower" },
          },
          {
            id: "cabbage",
            value: "cabbage",
            label: { label: "Cabbage" },
          },
        ],
      },
    ],
  },
];
