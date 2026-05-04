export interface Car {
  id: string;
  model: string;
  brand: string;
  image: string;
  category: string;
  available: boolean;
  description?: string;
  rate?: string;
}

export const cars: Car[] = [
  {
    id: "1",
    brand: "Ferrari",
    model: "F8 Tributo",
    image: "https://images.unsplash.com/photo-1758956929713-f390337ed982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBmZXJyYXJpJTIwbHV4dXJ5JTIwc3VwZXJjYXIlMjBuaWdodHxlbnwxfHx8fDE3NzY0MDQwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Supercar",
    available: true,
    description: "Iconic Italian supercar with breathtaking design. Perfect for luxury content creation.",
    rate: "Contact for pricing"
  },
  {
    id: "2",
    brand: "Lamborghini",
    model: "Aventador",
    image: "https://images.unsplash.com/photo-1775371368246-34ca2b9f4469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGxhbWJvcmdoaW5pJTIwYXZlbnRhZG9yJTIwc3R1ZGlvfGVufDF8fHx8MTc3NjQwNDAyNXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Supercar",
    available: true,
    description: "Aggressive styling and dramatic presence. Ideal for high-impact photoshoots.",
    rate: "Contact for pricing"
  },
  {
    id: "3",
    brand: "Lamborghini",
    model: "Urus",
    image: "https://images.unsplash.com/photo-1602596758966-4e40df56ae25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGxhbWJvcmdoaW5pJTIwdXJ1cyUyMHN1dnxlbnwxfHx8fDE3NzY0MDQwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Luxury SUV",
    available: true,
    description: "The world's first super SUV. Perfect blend of luxury and performance.",
    rate: "Contact for pricing"
  },
  {
    id: "4",
    brand: "McLaren",
    model: "720S",
    image: "https://images.unsplash.com/photo-1617814086906-d847a8bc6fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR0ZSUyMGJsYWNrJTIwbWNsYXJlbiUyMHN1cGVyY2FyfGVufDF8fHx8MTc3NjQwNDAyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Supercar",
    available: true,
    description: "Cutting-edge design with stunning aerodynamics. A photographer's dream.",
    rate: "Contact for pricing"
  },
  {
    id: "5",
    brand: "Rolls-Royce",
    model: "Ghost",
    image: "https://images.unsplash.com/photo-1712015482685-1a1f015cd16f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjByb2xscyUyMHJveWNlJTIwbHV4dXJ5fGVufDF8fHx8MTc3NjQwNDAyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Luxury Sedan",
    available: true,
    description: "The pinnacle of automotive luxury. Timeless elegance for premium shoots.",
    rate: "Contact for pricing"
  },
  {
    id: "6",
    brand: "Bentley",
    model: "Continental GT",
    image: "https://images.unsplash.com/photo-1629820402094-3c745c386950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZW50bGV5JTIwY29udGluZW50YWwlMjBndCUyMGx1eHVyeXxlbnwxfHx8fDE3NzY0MDQwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Grand Tourer",
    available: true,
    description: "British craftsmanship at its finest. Perfect for sophisticated content.",
    rate: "Contact for pricing"
  },
  {
    id: "7",
    brand: "McLaren",
    model: "765LT",
    image: "https://images.unsplash.com/photo-1666497954055-0b500e5bf54b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBtY2xhcmVuJTIwNzIwc3xlbnwxfHx8fDE3NzY0MDQwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Supercar",
    available: true,
    description: "Track-focused performance with striking aesthetics. Eye-catching for any shoot.",
    rate: "Contact for pricing"
  },
  {
    id: "8",
    brand: "Porsche",
    model: "911 Turbo S",
    image: "https://images.unsplash.com/photo-1601278840447-9af5ac4ed157?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwOTExJTIwdHVyYm8lMjBibGFja3xlbnwxfHx8fDE3NzY0MDQwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Sports Car",
    available: true,
    description: "Legendary German engineering. Timeless design that never goes out of style.",
    rate: "Contact for pricing"
  }
];
