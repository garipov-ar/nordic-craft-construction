import { TECHNOLOGIES, PACKAGES, EXTRAS } from '../data/quizData';

export interface QuizCalculationInput {
  technologyId: string;
  area: number;
  floors: number;
  packageId: string;
  selectedExtraIds: string[];
}

export interface QuizCalculationResult {
  minPrice: number;
  maxPrice: number;
  estimatedPrice: number;
  monthlyMortgagePayment: number;
  timelineDays: number;
  breakdown: {
    baseCost: number;
    packageMultiplier: number;
    extrasCost: number;
    floorsAdjustment: number;
  };
}

export function calculateEstimate(input: QuizCalculationInput): QuizCalculationResult {
  const technology = TECHNOLOGIES.find((t) => t.id === input.technologyId) || TECHNOLOGIES[0];
  const packageOption = PACKAGES.find((p) => p.id === input.packageId) || PACKAGES[1];

  // Base cost = area * technology base price
  const baseCost = input.area * technology.basePricePerM2;

  // Floors adjustment factor (2 floors is standard 1.0, 1.5 floors is 0.98, 1 floor has slightly higher foundation/roof per m² ratio: 1.05)
  let floorsFactor = 1.0;
  if (input.floors === 1) floorsFactor = 1.06;
  if (input.floors === 1.5) floorsFactor = 1.02;
  if (input.floors === 2) floorsFactor = 1.0;
  if (input.floors === 3) floorsFactor = 1.08;

  // Package multiplier
  const packageMultiplier = packageOption.multiplier;

  // Extras sum
  let extrasCost = 0;
  input.selectedExtraIds.forEach((extraId) => {
    const extra = EXTRAS.find((e) => e.id === extraId);
    if (extra) {
      extrasCost += extra.price;
    }
  });

  const rawEstimatedPrice = Math.round(baseCost * floorsFactor * packageMultiplier + extrasCost);

  // Round to nearest 10,000 for clean presentation
  const estimatedPrice = Math.round(rawEstimatedPrice / 10000) * 10000;
  const minPrice = Math.round((estimatedPrice * 0.95) / 10000) * 10000;
  const maxPrice = Math.round((estimatedPrice * 1.05) / 10000) * 10000;

  // Approximate mortgage estimate (e.g. 6% IT/Family mortgage, 20% down payment, 25 years)
  const loanAmount = estimatedPrice * 0.8;
  const monthlyRate = 0.06 / 12;
  const totalMonths = 25 * 12;
  const monthlyMortgagePayment = Math.round(
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  // Estimated build timeline in days
  const baseDays = technology.buildTimeDays;
  const areaMultiplier = input.area > 200 ? 1.2 : input.area > 150 ? 1.1 : 1.0;
  const timelineDays = Math.round(baseDays * areaMultiplier);

  return {
    minPrice,
    maxPrice,
    estimatedPrice,
    monthlyMortgagePayment,
    timelineDays,
    breakdown: {
      baseCost,
      packageMultiplier,
      extrasCost,
      floorsAdjustment: floorsFactor,
    },
  };
}

export function formatRubles(amount: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(amount: number): string {
  return new Intl.NumberFormat('ru-RU').format(amount);
}
