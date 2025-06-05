import React, { useState, useEffect } from "react";

import Layout from "@/components/Layout";
import { 
  Calculator, 
  IndianRupee, 
  Percent, 
  Calendar, 
  PiggyBank, 
  TrendingUp, 
  CircleDollarSign, 
  Building, 
  Landmark, 
  BarChart4, 
  PercentCircle,
  ScaleIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import jsPDF from "jspdf";
import emailjs from "emailjs-com";
import { EMAILJS_CONFIG } from "@/lib/emailjs";

// Add this CSS to the file (or in a <style jsx> block if using CSS-in-JS)
/* Tooltip i button styles */
const tooltipStyles = `
  .tooltip-i {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #f3f4f6;
    color: #6366f1;
    font-size: 13px;
    font-weight: bold;
    box-shadow: 0 1px 2px rgba(0,0,0,0.04);
    border: 1px solid #e5e7eb;
    cursor: pointer;
    margin-left: 4px;
    transition: background 0.15s, color 0.15s;
    position: relative;
    z-index: 1;
  }
  .tooltip-i:hover, .tooltip-i:focus {
    background: #6366f1;
    color: #fff;
  }
  .tooltip-i[data-tooltip]:hover:after, .tooltip-i[data-tooltip]:focus:after {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(-6px);
  }
  .tooltip-i:after {
    content: attr(data-tooltip);
    opacity: 0;
    pointer-events: none;
    position: absolute;
    left: 50%;
    top: -38px;
    transform: translateX(-50%) translateY(0);
    min-width: 180px;
    max-width: 260px;
    background: #fff;
    color: #222;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    padding: 8px 12px;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.4;
    white-space: normal;
    transition: opacity 0.18s, transform 0.18s;
    z-index: 10;
  }
`;
// Inject the style tag at the top of the component
if (typeof window !== 'undefined' && !document.getElementById('tax-tooltip-style')) {
  const style = document.createElement('style');
  style.id = 'tax-tooltip-style';
  style.innerHTML = tooltipStyles;
  document.head.appendChild(style);
}

const Tools = () => {
  // Tax Calculator State
  const [age, setAge] = useState<string>("below60");
  const [regime, setRegime] = useState<string>("new");
  const [deductions, setDeductions] = useState<number>(50000);
  const [taxResults, setTaxResults] = useState<any>(null);

  // Loan Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(5);
  const [loanTerm, setLoanTerm] = useState<number>(5);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  // Savings Calculator State
  const [initialAmount, setInitialAmount] = useState<number>(10000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(5000);
  const [savingsYears, setSavingsYears] = useState<number>(5);
  const [savingsRate, setSavingsRate] = useState<number>(6);
  const [finalAmount, setFinalAmount] = useState<number | null>(null);

  // Investment Calculator State
  const [investmentAmount, setInvestmentAmount] = useState<number>(100000);
  const [investmentRate, setInvestmentRate] = useState<number>(12);
  const [investmentYears, setInvestmentYears] = useState<number>(10);
  const [investmentType, setInvestmentType] = useState<string>("compound");
  const [investmentResult, setInvestmentResult] = useState<number | null>(null);

  // FD Calculator State
  const [fdAmount, setFdAmount] = useState<number>(100000);
  const [fdRate, setFdRate] = useState<number>(6.5);
  const [fdTenure, setFdTenure] = useState<number>(12);
  const [fdCompounding, setFdCompounding] = useState<string>("quarterly");
  const [fdTaxRate, setFdTaxRate] = useState<number>(10);
  const [fdResults, setFdResults] = useState<any>(null);

  // HRA Calculator State
  const [basicSalary, setBasicSalary] = useState<number>(50000);
  const [hraReceived, setHraReceived] = useState<number>(20000);
  const [rentPaid, setRentPaid] = useState<number>(25000);
  const [isMetroCity, setIsMetroCity] = useState<boolean>(true);
  const [hraResults, setHraResults] = useState<any>(null);

  // NPS Calculator State
  const [npsMonthlyContribution, setNpsMonthlyContribution] = useState<number>(5000);
  const [npsCurrentAge, setNpsCurrentAge] = useState<number>(30);
  const [npsRetirementAge, setNpsRetirementAge] = useState<number>(60);
  const [npsExpectedReturn, setNpsExpectedReturn] = useState<number>(10);
  const [npsAnnuityPercentage, setNpsAnnuityPercentage] = useState<number>(40);
  const [npsAnnuityReturn, setNpsAnnuityReturn] = useState<number>(6);
  const [npsTaxRate, setNpsTaxRate] = useState<number>(20);
  const [npsResults, setNpsResults] = useState<any>(null);

  // SIP Calculator State
  const [sipAmount, setSipAmount] = useState<number>(5000);
  const [sipYears, setSipYears] = useState<number>(10);
  const [sipRate, setSipRate] = useState<number>(12);
  const [sipInflation, setSipInflation] = useState<number>(5);
  const [sipStepUp, setSipStepUp] = useState<number>(0);
  const [sipResults, setSipResults] = useState<any>(null);

  // IRR Calculator State
  const [cashFlows, setCashFlows] = useState<{ amount: number; year: number }[]>([
    { amount: -100000, year: 0 }, // Initial investment (negative value)
    { amount: 20000, year: 1 },
    { amount: 25000, year: 2 },
    { amount: 35000, year: 3 },
    { amount: 50000, year: 4 }
  ]);
  const [newAmount, setNewAmount] = useState<number>(0);
  const [newYear, setNewYear] = useState<number>(0);
  const [irrResults, setIrrResults] = useState<any>(null);

  // Tax Comparison Calculator State
  const [selectedYear, setSelectedYear] = useState<string>("2024-25");
  const [salaryIncome, setSalaryIncome] = useState<number>(1000000);
  const [housePropertyIncome, setHousePropertyIncome] = useState<number>(0);
  const [businessIncome, setBusinessIncome] = useState<number>(0);
  const [capitalGainsIncome, setCapitalGainsIncome] = useState<number>(0);
  const [otherIncome, setOtherIncome] = useState<number>(0);
  const [stcg, setStcg] = useState<number>(0);
  const [ltcg, setLtcg] = useState<number>(0);
  const [presumptiveIncome, setPresumptiveIncome] = useState<number>(0);

  // Deductions
  const [stdDeduction, setStdDeduction] = useState<number>(50000);
  const [professionalTax, setProfessionalTax] = useState<number>(0);
  const [section80C, setSection80C] = useState<number>(0);
  const [section80D, setSection80D] = useState<number>(0);
  const [section80CCD1, setSection80CCD1] = useState<number>(0);
  const [section80CCD1B, setSection80CCD1B] = useState<number>(0);
  const [section80CCD2, setSection80CCD2] = useState<number>(0);
  const [section80TTA, setSection80TTA] = useState<number>(0);
  const [section80G, setSection80G] = useState<number>(0);
  const [otherVIADeduction, setOtherVIADeduction] = useState<number>(0);

  // Comparison Results
  const [taxComparison, setTaxComparison] = useState<any>(null);

  // Financial Year Tax Rules
  const taxRules = {
    "2024-25": {
      standardDeductionOld: 50000,
      standardDeductionNew: 75000, // <-- updated for new regime
      old: {
        slabs: [
          { limit: 250000, rate: 0 },
          { limit: 500000, rate: 5 },
          { limit: 1000000, rate: 20 },
          { limit: Infinity, rate: 30 }
        ],
        surcharge: [
          { limit: 5000000, rate: 10 },
          { limit: 10000000, rate: 15 },
          { limit: 20000000, rate: 25 },
          { limit: 50000000, rate: 37 }
        ],
        cessRate: 4,
        section80C: 150000,
        section80D: 50000,
        section80CCD1B: 50000,
        housingLoanInterest: 200000
      },
      new: {
        slabs: [
          { limit: 300000, rate: 0 },
          { limit: 700000, rate: 5 },
          { limit: 900000, rate: 10 },
          { limit: 1200000, rate: 15 },
          { limit: 1500000, rate: 20 },
          { limit: Infinity, rate: 30 }
        ],
        surcharge: [
          { limit: 5000000, rate: 10 },
          { limit: 10000000, rate: 15 },
          { limit: 20000000, rate: 25 },
          { limit: 50000000, rate: 37 }
        ],
        cessRate: 4,
        rebateLimit: 700000
      }
    },
    "2023-24": {
      standardDeduction: 50000,
      old: {
        slabs: [
          { limit: 250000, rate: 0 },
          { limit: 500000, rate: 5 },
          { limit: 1000000, rate: 20 },
          { limit: Infinity, rate: 30 }
        ],
        surcharge: [
          { limit: 5000000, rate: 10 },
          { limit: 10000000, rate: 15 },
          { limit: 20000000, rate: 25 },
          { limit: 50000000, rate: 37 }
        ],
        cessRate: 4,
        section80C: 150000,
        section80D: 50000,
        section80CCD1B: 50000,
        housingLoanInterest: 200000
      },
      new: {
        slabs: [
          { limit: 300000, rate: 0 },
          { limit: 600000, rate: 5 },
          { limit: 900000, rate: 10 },
          { limit: 1200000, rate: 15 },
          { limit: 1500000, rate: 20 },
          { limit: Infinity, rate: 30 }
        ],
        surcharge: [
          { limit: 5000000, rate: 10 },
          { limit: 10000000, rate: 15 },
          { limit: 20000000, rate: 25 },
          { limit: 50000000, rate: 37 }
        ],
        cessRate: 4,
        rebateLimit: 700000
      }
    },
    "2022-23": {
      standardDeduction: 50000,
      old: {
        slabs: [
          { limit: 250000, rate: 0 },
          { limit: 500000, rate: 5 },
          { limit: 1000000, rate: 20 },
          { limit: Infinity, rate: 30 }
        ],
        surcharge: [
          { limit: 5000000, rate: 10 },
          { limit: 10000000, rate: 15 },
          { limit: 20000000, rate: 25 },
          { limit: 50000000, rate: 37 }
        ],
        cessRate: 4,
        section80C: 150000,
        section80D: 50000,
        section80CCD1B: 50000,
        housingLoanInterest: 200000
      },
      new: {
        slabs: [
          { limit: 250000, rate: 0 },
          { limit: 500000, rate: 5 },
          { limit: 750000, rate: 10 },
          { limit: 1000000, rate: 15 },
          { limit: 1250000, rate: 20 },
          { limit: 1500000, rate: 25 },
          { limit: Infinity, rate: 30 }
        ],
        surcharge: [
          { limit: 5000000, rate: 10 },
          { limit: 10000000, rate: 15 },
          { limit: 20000000, rate: 25 },
          { limit: 50000000, rate: 37 }
        ],
        cessRate: 4,
        rebateLimit: 500000
      }
    }
  };

  // Add new state for all new fields in the Tax tab
  const [exemptAllowances, setExemptAllowances] = useState<number>(0);
  const [otherSourcesIncome, setOtherSourcesIncome] = useState<number>(0);
  const [homeLoanSelf, setHomeLoanSelf] = useState<number>(0);
  const [rentalIncome, setRentalIncome] = useState<number>(0);
  const [homeLoanLetout, setHomeLoanLetout] = useState<number>(0);
  const [section80EEA, setSection80EEA] = useState<number>(0);
  const [otherDeductions, setOtherDeductions] = useState<number>(0);

  // Add state for results
  const [oldTaxResult, setOldTaxResult] = useState({taxableIncome: 0, basicTax: 0, surcharge: 0, cess: 0, totalTax: 0});
  const [newTaxResult, setNewTaxResult] = useState({taxableIncome: 0, basicTax: 0, surcharge: 0, cess: 0, totalTax: 0});

  // Add reset function
  const resetTaxForm = () => {
    setSalaryIncome(0);
    setExemptAllowances(0);
    setOtherSourcesIncome(0);
    setHomeLoanSelf(0);
    setRentalIncome(0);
    setHomeLoanLetout(0);
    setOtherIncome(0);
    setSection80C(0);
    setSection80TTA(0);
    setSection80D(0);
    setSection80G(0);
    setSection80EEA(0);
    setSection80CCD1B(0);
    setSection80CCD2(0);
    setOtherDeductions(0);
  };

  // Calculation logic for both regimes (runs on input change)
  useEffect(() => {
    // Calculate gross total income
    const grossIncome =
      (salaryIncome || 0) +
      (otherSourcesIncome || 0) +
      (rentalIncome || 0) +
      (otherIncome || 0) -
      (exemptAllowances || 0);
    // Home loan interest (self-occupied, max 2L under old regime)
    const homeLoanSelfDed = Math.min(homeLoanSelf || 0, 200000);
    // Home loan let-out (fully allowed)
    const homeLoanLetoutDed = homeLoanLetout || 0;
    // Deductions
    const deductionsOld =
      Math.min(section80C || 0, 150000) +
      Math.min(section80TTA || 0, 10000) +
      (section80D || 0) +
      (section80G || 0) +
      Math.min(section80EEA || 0, 150000) +
      Math.min(section80CCD1B || 0, 50000) +
      (section80CCD2 || 0) +
      (otherDeductions || 0) +
      homeLoanSelfDed +
      homeLoanLetoutDed;
    // Old regime: standard deduction 50,000
    const stdDedOld = 50000;
    const taxableOld = Math.max(0, grossIncome - stdDedOld - deductionsOld);
    // Old regime slab calculation
    let taxOld = 0;
    if (taxableOld <= 250000) taxOld = 0;
    else if (taxableOld <= 500000) taxOld = (taxableOld - 250000) * 0.05;
    else if (taxableOld <= 1000000) taxOld = 12500 + (taxableOld - 500000) * 0.2;
    else taxOld = 112500 + (taxableOld - 1000000) * 0.3;
    // Rebate 87A
    if (taxableOld <= 500000) taxOld = 0;
    // Surcharge
    let surchargeOld = 0;
    if (taxableOld > 5000000 && taxableOld <= 10000000) surchargeOld = taxOld * 0.1;
    else if (taxableOld > 10000000 && taxableOld <= 20000000) surchargeOld = taxOld * 0.15;
    else if (taxableOld > 20000000 && taxableOld <= 50000000) surchargeOld = taxOld * 0.25;
    else if (taxableOld > 50000000) surchargeOld = taxOld * 0.37;
    // Cess
    const cessOld = (taxOld + surchargeOld) * 0.04;
    // Total
    const totalOld = taxOld + surchargeOld + cessOld;
    setOldTaxResult({taxableIncome: taxableOld, basicTax: taxOld, surcharge: surchargeOld, cess: cessOld, totalTax: totalOld});

    // New regime: standard deduction 75,000, only 80CCD(2) and home loan let-out allowed
    const stdDedNew = 75000;
    const deductionsNew = (section80CCD2 || 0) + homeLoanLetoutDed;
    const taxableNew = Math.max(0, grossIncome - stdDedNew - deductionsNew);
    // New regime slab calculation (FY 2024-25)
    let taxNew = 0;
    if (taxableNew > 1500000) taxNew = (taxableNew - 1500000) * 0.3 + 140000;
    else if (taxableNew > 1200000) taxNew = (taxableNew - 1200000) * 0.2 + 80000;
    else if (taxableNew > 1000000) taxNew = (taxableNew - 1000000) * 0.15 + 50000;
    else if (taxableNew > 700000) taxNew = (taxableNew - 700000) * 0.1 + 20000;
    else if (taxableNew > 300000) taxNew = (taxableNew - 300000) * 0.05;
    else taxNew = 0;
    // Rebate 87A
    if (taxableNew <= 700000) taxNew = 0;
    // Surcharge
    let surchargeNew = 0;
    if (taxableNew > 5000000 && taxableNew <= 10000000) surchargeNew = taxNew * 0.1;
    else if (taxableNew > 10000000 && taxableNew <= 20000000) surchargeNew = taxNew * 0.15;
    else if (taxableNew > 20000000 && taxableNew <= 50000000) surchargeNew = taxNew * 0.25;
    else if (taxableNew > 50000000) surchargeNew = taxNew * 0.37;
    // Cess
    const cessNew = (taxNew + surchargeNew) * 0.04;
    // Total
    const totalNew = taxNew + surchargeNew + cessNew;
    setNewTaxResult({taxableIncome: taxableNew, basicTax: taxNew, surcharge: surchargeNew, cess: cessNew, totalTax: totalNew});
  }, [salaryIncome, exemptAllowances, otherSourcesIncome, homeLoanSelf, rentalIncome, homeLoanLetout, otherIncome, section80C, section80TTA, section80D, section80G, section80EEA, section80CCD1B, section80CCD2, otherDeductions]);

  // Tax Calculation
  const calculateTax = () => {
    if (salaryIncome > 0 || housePropertyIncome > 0 || otherIncome > 0 || stcg > 0 || ltcg > 0 || presumptiveIncome > 0) {
      let grossSalary = (salaryIncome || 0) + (housePropertyIncome || 0) + (otherIncome || 0) + (stcg || 0) + (ltcg || 0) + (presumptiveIncome || 0);
      let stdDeduction = 0;
      let taxableIncome = 0;
      let tax = 0;
      let surcharge = 0;
      let cess = 0;
      let effectiveRate = 0;
      let totalDeductions = 0;
      
      if (regime === "old") {
        stdDeduction = taxRules["2024-25"].standardDeductionOld;
        // Deductions: standard deduction + user deductions
        totalDeductions =
          (stdDeduction || 0) +
          (professionalTax || 0) +
          (section80C || 0) +
          (section80D || 0) +
          (section80CCD1 || 0) +
          (section80CCD1B || 0) +
          (section80CCD2 || 0) +
          (section80TTA || 0) +
          (section80G || 0) +
          (otherVIADeduction || 0);
        taxableIncome = Math.max(0, grossSalary - totalDeductions);
      } else {
        stdDeduction = taxRules["2024-25"].standardDeductionNew;
        // Only standard deduction allowed in new regime
        totalDeductions = stdDeduction;
        taxableIncome = Math.max(0, grossSalary - stdDeduction);
      }

      // Old regime slabs (with age group logic)
      if (regime === "old") {
        if (age === "below60") {
        if (taxableIncome <= 250000) {
          tax = 0;
        } else if (taxableIncome <= 500000) {
          tax = (taxableIncome - 250000) * 0.05;
        } else if (taxableIncome <= 1000000) {
          tax = 12500 + (taxableIncome - 500000) * 0.2;
        } else {
          tax = 112500 + (taxableIncome - 1000000) * 0.3;
        }
        } else if (age === "60to80") {
          if (taxableIncome <= 300000) {
          tax = 0;
          } else if (taxableIncome <= 500000) {
          tax = (taxableIncome - 300000) * 0.05;
          } else if (taxableIncome <= 1000000) {
            tax = 10000 + (taxableIncome - 500000) * 0.2;
          } else {
            tax = 110000 + (taxableIncome - 1000000) * 0.3;
        }
        } else if (age === "above80") {
          if (taxableIncome <= 500000) {
          tax = 0;
          } else if (taxableIncome <= 1000000) {
          tax = (taxableIncome - 500000) * 0.2;
          } else {
            tax = 100000 + (taxableIncome - 1000000) * 0.3;
          }
        }
      } else {
        // New regime slabs (cumulative, as per Excel logic)
        if (taxableIncome > 1500000) {
          tax = (taxableIncome - 1500000) * 0.3 + 140000;
        } else if (taxableIncome > 1200000) {
          tax = (taxableIncome - 1200000) * 0.2 + 80000;
        } else if (taxableIncome > 1000000) {
          tax = (taxableIncome - 1000000) * 0.15 + 50000;
        } else if (taxableIncome > 700000) {
          tax = (taxableIncome - 700000) * 0.1 + 20000;
        } else if (taxableIncome > 300000) {
          tax = (taxableIncome - 300000) * 0.05;
        } else {
          tax = 0;
        }
      }
      
      // Rebate (Section 87A)
      if ((regime === "old" && taxableIncome <= 500000) || 
          (regime === "new" && taxableIncome <= 700000)) {
        tax = 0;
      }
      
      // Surcharge calculation
      if (taxableIncome > 5000000 && taxableIncome <= 10000000) {
        surcharge = tax * 0.1;
      } else if (taxableIncome > 10000000 && taxableIncome <= 20000000) {
        surcharge = tax * 0.15;
      } else if (taxableIncome > 20000000 && taxableIncome <= 50000000) {
        surcharge = tax * 0.25;
      } else if (taxableIncome > 50000000) {
        surcharge = tax * 0.37;
      }
      
      // Health & Education Cess (4%)
      cess = (tax + surcharge) * 0.04;
      
      // Total tax liability
      const totalTax = tax + surcharge + cess;
      
      // Effective tax rate
      effectiveRate = grossSalary > 0 ? (totalTax / grossSalary) * 100 : 0;
      
      setTaxResults({
        grossSalary,
        stdDeduction,
        totalDeductions,
        taxableIncome,
        basicTax: tax,
        surcharge,
        cess,
        totalTax,
        effectiveRate,
        section80C: regime === "old" ? section80C : 0,
        section80D: regime === "old" ? section80D : 0,
        section80G: regime === "old" ? section80G : 0,
        housingLoanInterest: 0, // Always set, even if not used
        npsContribution: 0, // Always set, even if not used
      });
    }
  };

  // Loan Calculation
  const calculateLoan = () => {
    if (loanAmount > 0 && interestRate > 0 && loanTerm > 0) {
      const monthlyRate = interestRate / 100 / 12;
      const totalPayments = loanTerm * 12;
      const payment = 
        (loanAmount * monthlyRate) / 
        (1 - Math.pow(1 + monthlyRate, -totalPayments));
      setMonthlyPayment(payment);
    }
  };

  // Savings Calculation
  const calculateSavings = () => {
    if (initialAmount >= 0 && monthlyContribution >= 0 && savingsYears > 0 && savingsRate >= 0) {
      const monthlyRate = savingsRate / 100 / 12;
      const months = savingsYears * 12;
      
      // Calculate future value of initial principal
      const initialFutureValue = initialAmount * Math.pow(1 + monthlyRate, months);
      
      // Calculate future value of the monthly contributions
      const contributionFutureValue = monthlyContribution * 
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
      
      const totalFutureValue = initialFutureValue + contributionFutureValue;
      setFinalAmount(totalFutureValue);
    }
  };

  // Investment Calculation
  const calculateInvestment = () => {
    if (investmentAmount > 0 && investmentRate > 0 && investmentYears > 0) {
      let result = 0;
      
      if (investmentType === "compound") {
        // Compound interest calculation
        result = investmentAmount * Math.pow(1 + (investmentRate / 100), investmentYears);
      } else {
        // Simple interest calculation
        result = investmentAmount * (1 + (investmentRate / 100 * investmentYears));
      }
      
      setInvestmentResult(result);
    }
  };

  // FD Calculation
  const calculateFD = () => {
    if (fdAmount > 0 && fdRate > 0 && fdTenure > 0) {
      // Principal amount
      const principal = fdAmount;
      
      // Interest rate per period
      let ratePerPeriod = fdRate / 100;
      let compoundingFrequency = 1; // annually by default
      
      switch (fdCompounding) {
        case "monthly":
          compoundingFrequency = 12;
          ratePerPeriod = fdRate / 100 / 12;
          break;
        case "quarterly":
          compoundingFrequency = 4;
          ratePerPeriod = fdRate / 100 / 4;
          break;
        case "halfYearly":
          compoundingFrequency = 2;
          ratePerPeriod = fdRate / 100 / 2;
          break;
        case "annually":
          compoundingFrequency = 1;
          ratePerPeriod = fdRate / 100;
          break;
      }
      
      // Number of compounding periods
      const periods = (fdTenure / 12) * compoundingFrequency;
      
      // Calculate maturity amount using compound interest formula
      const maturityAmount = principal * Math.pow(1 + ratePerPeriod, periods);
      
      // Calculate interest earned
      const interestEarned = maturityAmount - principal;
      
      // Calculate tax on interest (if applicable)
      const taxOnInterest = interestEarned * (fdTaxRate / 100);
      
      // Net interest after tax
      const netInterest = interestEarned - taxOnInterest;
      
      // Net maturity value
      const netMaturityAmount = principal + netInterest;
      
      setFdResults({
        principal,
        maturityAmount,
        interestEarned,
        taxOnInterest,
        netInterest,
        netMaturityAmount,
        effectiveYield: ((netInterest / principal) * (12 / fdTenure) * 100).toFixed(2)
      });
    }
  };

  // HRA Calculation
  const calculateHRA = () => {
    if (basicSalary > 0 && hraReceived >= 0 && rentPaid >= 0) {
      // Rule 1: Actual HRA received
      const actual = hraReceived;
      
      // Rule 2: Rent paid in excess of 10% of basic salary
      const rentExcess = Math.max(0, rentPaid - (basicSalary * 0.1));
      
      // Rule 3: 50% of basic salary (metro city) or 40% (non-metro)
      const percentOfBasic = isMetroCity ? basicSalary * 0.5 : basicSalary * 0.4;
      
      // HRA exemption is the minimum of the three
      const exemption = Math.min(actual, rentExcess, percentOfBasic);
      
      // Taxable HRA is actual HRA minus exemption
      const taxable = actual - exemption;
      
      setHraResults({
        actual,
        rentExcess,
        percentOfBasic,
        exemption,
        taxable
      });
    }
  };

  // NPS Calculation
  const calculateNPS = () => {
    if (npsMonthlyContribution > 0 && npsCurrentAge < npsRetirementAge) {
      // Calculate investment period in years
      const investmentYears = npsRetirementAge - npsCurrentAge;
      
      // Calculate monthly rate and number of months
      const monthlyRate = npsExpectedReturn / 100 / 12;
      const totalMonths = investmentYears * 12;
      
      // Calculate corpus at retirement using FV of annuity formula
      const corpusAtRetirement = npsMonthlyContribution * 
        ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * 
        (1 + monthlyRate);
      
      // Calculate annual deduction under Section 80CCD(1) - up to ₹1.5 lakh
      const section80CCD1Limit = 150000;
      const annualContribution = npsMonthlyContribution * 12;
      const section80CCD1 = Math.min(section80CCD1Limit, annualContribution);
      
      // Calculate additional deduction under Section 80CCD(1B) - up to ₹50,000
      const section80CCD1BLimit = 50000;
      const eligibleFor80CCD1B = annualContribution > section80CCD1;
      const section80CCD1B = eligibleFor80CCD1B ? 
        Math.min(section80CCD1BLimit, annualContribution - section80CCD1) : 0;
      
      // Total tax benefit
      const totalTaxDeduction = section80CCD1 + section80CCD1B;
      const annualTaxSaving = totalTaxDeduction * (npsTaxRate / 100);
      
      // Calculate lump sum amount (60% of corpus) and annuity investment (40% of corpus)
      const lumpSumAmount = corpusAtRetirement * ((100 - npsAnnuityPercentage) / 100);
      const annuityInvestment = corpusAtRetirement * (npsAnnuityPercentage / 100);
      
      // Calculate estimated monthly pension (assuming annuity rate of 6%)
      const monthlyPension = (annuityInvestment * (npsAnnuityReturn / 100)) / 12;
      
      setNpsResults({
        corpusAtRetirement,
        totalContribution: npsMonthlyContribution * totalMonths,
        lumpSumAmount,
        annuityInvestment,
        monthlyPension,
        section80CCD1,
        section80CCD1B,
        totalTaxDeduction,
        annualTaxSaving,
        investmentYears
      });
    }
  };

  // SIP Calculation
  const calculateSIP = () => {
    if (sipAmount > 0 && sipYears > 0 && sipRate > 0) {
      const monthlyRate = sipRate / 100 / 12;
      const totalMonths = sipYears * 12;
      
      // Calculate future value with step-up SIP
      let totalInvestment = 0;
      let futureValue = 0;
      let currentMonthlyInvestment = sipAmount;
      
      for (let year = 0; year < sipYears; year++) {
        // Adjust SIP amount for this year (if step-up enabled)
        if (year > 0) {
          currentMonthlyInvestment = currentMonthlyInvestment * (1 + sipStepUp / 100);
        }
        
        for (let month = 0; month < 12; month++) {
          const monthIndex = year * 12 + month;
          const remainingMonths = totalMonths - monthIndex;
          
          // Future value of this month's investment
          const monthlyFV = currentMonthlyInvestment * Math.pow(1 + monthlyRate, remainingMonths);
          futureValue += monthlyFV;
          totalInvestment += currentMonthlyInvestment;
        }
      }
      
      // Calculate inflation-adjusted value
      const inflationFactor = Math.pow(1 + sipInflation / 100, sipYears);
      const inflationAdjustedValue = futureValue / inflationFactor;
      
      // Calculate estimated returns
      const estimatedReturns = futureValue - totalInvestment;
      
      // Calculate XIRR (approximation using monthly rate)
      const xirr = ((Math.pow(1 + monthlyRate, 12)) - 1) * 100;
      
      // Calculate wealth gain ratio
      const wealthGainRatio = futureValue / totalInvestment;
      
      setSipResults({
        futureValue,
        totalInvestment,
        estimatedReturns,
        inflationAdjustedValue,
        xirr,
        wealthGainRatio,
        finalMonthlyInvestment: currentMonthlyInvestment
      });
    }
  };

  // Add cash flow
  const addCashFlow = () => {
    if (newAmount !== 0 && newYear >= 0) {
      const updatedFlows = [...cashFlows, { amount: newAmount, year: newYear }];
      // Sort by year
      updatedFlows.sort((a, b) => a.year - b.year);
      setCashFlows(updatedFlows);
      setNewAmount(0);
      setNewYear(cashFlows[cashFlows.length - 1].year + 1);
    }
  };

  // Remove cash flow
  const removeCashFlow = (index: number) => {
    const updatedFlows = [...cashFlows];
    updatedFlows.splice(index, 1);
    setCashFlows(updatedFlows);
  };

  // IRR Calculation using Newton-Raphson method
  const calculateIRR = () => {
    // Make sure we have at least 2 cash flows (investment and return)
    if (cashFlows.length >= 2) {
      let irr = 0.1; // Initial guess
      const maxIterations = 100;
      const tolerance = 0.00001;
      
      // Newton-Raphson method to find IRR
      for (let i = 0; i < maxIterations; i++) {
        let npv = 0;
        let deriv = 0;
        
        for (const flow of cashFlows) {
          npv += flow.amount / Math.pow(1 + irr, flow.year);
          deriv -= flow.year * flow.amount / Math.pow(1 + irr, flow.year + 1);
        }
        
        // Break if NPV is close enough to 0
        if (Math.abs(npv) < tolerance) {
          break;
        }
        
        // Update IRR
        const newIrr = irr - npv / deriv;
        
        // Break if we're not making progress
        if (Math.abs(newIrr - irr) < tolerance) {
          irr = newIrr;
          break;
        }
        
        irr = newIrr;
      }
      
      // Calculate net profit
      const totalInvestment = cashFlows
        .filter(flow => flow.amount < 0)
        .reduce((sum, flow) => sum + Math.abs(flow.amount), 0);
      
      const totalReturns = cashFlows
        .filter(flow => flow.amount > 0)
        .reduce((sum, flow) => sum + flow.amount, 0);
      
      const netProfit = totalReturns - totalInvestment;
      
      // Calculate absolute return
      const absoluteReturn = (netProfit / totalInvestment) * 100;
      
      // Calculate ROI
      const roi = (netProfit / totalInvestment) * 100;
      
      // Calculate annual return (using IRR)
      const annualReturn = irr * 100;
      
      setIrrResults({
        irr: annualReturn,
        totalInvestment,
        totalReturns,
        netProfit,
        absoluteReturn,
        roi,
        projectedValue: totalReturns
      });
    }
  };

  // PDF Download Handler
  const handleDownloadPDF = () => {
    if (!taxResults) return;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Income Tax Calculation Summary (FY 2024-25)", 10, 15);
    doc.setFontSize(12);
    let y = 30;
    const summary = [
      ["Taxable Income", `₹${taxResults.taxableIncome.toLocaleString('en-IN')}`],
      ["Basic Tax", `₹${taxResults.basicTax.toLocaleString('en-IN')}`],
      ["Surcharge", `₹${taxResults.surcharge.toLocaleString('en-IN')}`],
      ["Health & Education Cess (4%)", `₹${taxResults.cess.toLocaleString('en-IN')}`],
      ["Total Tax Liability", `₹${taxResults.totalTax.toLocaleString('en-IN')}`],
      ["Effective Tax Rate", `${taxResults.effectiveRate.toFixed(2)}%`],
    ];
    summary.forEach(([label, value]) => {
      doc.text(`${label}:`, 10, y);
      doc.text(value, 100, y);
      y += 10;
    });
    doc.save("tax-summary-fy2024-25.pdf");
  };

  // Email Results Handler
  const handleSendEmail = async () => {
    if (!taxResults || !emailTo) return;
    setEmailStatus(null);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          to_email: emailTo,
          subject: "Your Income Tax Calculation Results (FY 2024-25)",
          message: `Taxable Income: ₹${taxResults.taxableIncome.toLocaleString('en-IN')}\nBasic Tax: ₹${taxResults.basicTax.toLocaleString('en-IN')}\nSurcharge: ₹${taxResults.surcharge.toLocaleString('en-IN')}\nCess: ₹${taxResults.cess.toLocaleString('en-IN')}\nTotal Tax: ₹${taxResults.totalTax.toLocaleString('en-IN')}\nEffective Tax Rate: ${taxResults.effectiveRate.toFixed(2)}%`,
        },
        EMAILJS_CONFIG.USER_ID
      );
      setEmailStatus("Email sent successfully!");
    } catch (error) {
      setEmailStatus("Failed to send email. Please try again.");
    }
  };

  // New state for email modal
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailTo, setEmailTo] = useState("");
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  // Add this helper function inside the Tools component, before the return statement
  const handleCompareOtherRegime = () => {
    setTaxComparison(null);
    setSelectedYear("2024-25");
  };

  // 1. Add separate state for compare tab
  const [compare_salaryIncome, setCompareSalaryIncome] = useState<number>(0);
  const [compare_housePropertyIncome, setCompareHousePropertyIncome] = useState<number>(0);
  const [compare_businessIncome, setCompareBusinessIncome] = useState<number>(0);
  const [compare_capitalGainsIncome, setCompareCapitalGainsIncome] = useState<number>(0);
  const [compare_otherIncome, setCompareOtherIncome] = useState<number>(0);
  const [compare_section80C, setCompareSection80C] = useState<number>(0);
  const [compare_section80D, setCompareSection80D] = useState<number>(0);
  const [compare_section80G, setCompareSection80G] = useState<number>(0);
  const [compare_professionalTax, setCompareProfessionalTax] = useState<number>(0);
  const [compare_section80CCD1, setCompareSection80CCD1] = useState<number>(0);
  const [compare_section80CCD1B, setCompareSection80CCD1B] = useState<number>(0);
  const [compare_section80CCD2, setCompareSection80CCD2] = useState<number>(0);
  const [compare_section80TTA, setCompareSection80TTA] = useState<number>(0);
  const [compare_otherVIADeduction, setCompareOtherVIADeduction] = useState<number>(0);

  // 2. Update calculateTaxComparison to use compare_ fields
  const calculateTaxComparison = () => {
    const rules = taxRules[selectedYear];
    // Calculate Total Income
    const totalIncome =
      (compare_salaryIncome || 0) +
      (compare_housePropertyIncome || 0) +
      (compare_businessIncome || 0) +
      (compare_capitalGainsIncome || 0) +
      (compare_otherIncome || 0);
    // Calculate Old Regime Deductions
    const oldRegimeDeductions =
      Math.min(compare_section80C || 0, rules.old.section80C || 0) +
      Math.min(compare_section80D || 0, rules.old.section80D || 0) +
      Math.min(compare_section80CCD1 || 0, rules.old.section80CCD1 || 0) +
      Math.min(compare_section80CCD1B || 0, rules.old.section80CCD1B || 0) +
      Math.min(compare_section80CCD2 || 0, rules.old.section80CCD2 || 0) +
      (compare_section80TTA || 0) +
      (compare_section80G || 0) +
      (compare_otherVIADeduction || 0) +
      (compare_salaryIncome > 0 ? (rules.standardDeductionOld || 0) + (compare_professionalTax || 0) : 0);
    const oldRegimeTaxableIncome = Math.max(0, totalIncome - oldRegimeDeductions);
    // Calculate tax based on slabs (old regime)
    let oldRegimeTax = 0;
    let remainingIncome = oldRegimeTaxableIncome;
    for (const slab of rules.old.slabs) {
      if (remainingIncome <= 0) break;
      const taxableInThisSlab = Math.min(remainingIncome, slab.limit - (slab === rules.old.slabs[0] ? 0 : rules.old.slabs[rules.old.slabs.indexOf(slab) - 1].limit));
      oldRegimeTax += (taxableInThisSlab * slab.rate) / 100;
      remainingIncome -= taxableInThisSlab;
    }
    // Section 87A Rebate (old regime)
    if (oldRegimeTaxableIncome <= 500000) {
      oldRegimeTax = Math.max(0, oldRegimeTax - 12500);
    }
    // Calculate surcharge (old regime)
    let oldRegimeSurcharge = 0;
    if (oldRegimeTaxableIncome > 5000000) {
      for (let i = rules.old.surcharge.length - 1; i >= 0; i--) {
        if (oldRegimeTaxableIncome > rules.old.surcharge[i].limit) {
          oldRegimeSurcharge = oldRegimeTax * (rules.old.surcharge[i].rate / 100);
          break;
        }
      }
    }
    // Calculate cess (old regime)
    const oldRegimeCess = (oldRegimeTax + oldRegimeSurcharge) * (rules.old.cessRate / 100);
    // Total old regime tax liability
    const oldRegimeTotalTax = oldRegimeTax + oldRegimeSurcharge + oldRegimeCess;
    // Calculate New Regime Tax
    const newRegimeTaxableIncome = totalIncome - (compare_salaryIncome > 0 ? rules.standardDeductionNew : 0);
    // Calculate tax based on slabs (new regime)
    let newRegimeTax = 0;
    if (newRegimeTaxableIncome > 1500000) {
      newRegimeTax = (newRegimeTaxableIncome - 1500000) * 0.3 + 140000;
    } else if (newRegimeTaxableIncome > 1200000) {
      newRegimeTax = (newRegimeTaxableIncome - 1200000) * 0.2 + 80000;
    } else if (newRegimeTaxableIncome > 1000000) {
      newRegimeTax = (newRegimeTaxableIncome - 1000000) * 0.15 + 50000;
    } else if (newRegimeTaxableIncome > 700000) {
      newRegimeTax = (newRegimeTaxableIncome - 700000) * 0.1 + 20000;
    } else if (newRegimeTaxableIncome > 300000) {
      newRegimeTax = (newRegimeTaxableIncome - 300000) * 0.05;
    } else {
      newRegimeTax = 0;
    }
    // Section 87A Rebate (new regime)
    if (newRegimeTaxableIncome <= rules.new.rebateLimit) {
      newRegimeTax = 0;
    }
    // Calculate surcharge (new regime)
    let newRegimeSurcharge = 0;
    if (newRegimeTaxableIncome > 5000000) {
      for (let i = rules.new.surcharge.length - 1; i >= 0; i--) {
        if (newRegimeTaxableIncome > rules.new.surcharge[i].limit) {
          newRegimeSurcharge = newRegimeTax * (rules.new.surcharge[i].rate / 100);
          break;
        }
      }
    }
    // Calculate cess (new regime)
    const newRegimeCess = (newRegimeTax + newRegimeSurcharge) * (rules.new.cessRate / 100);
    // Total new regime tax liability
    const newRegimeTotalTax = newRegimeTax + newRegimeSurcharge + newRegimeCess;
    // Set comparison results
    setTaxComparison({
      totalIncome,
      old: {
        deductions: oldRegimeDeductions,
        taxableIncome: oldRegimeTaxableIncome,
        basicTax: oldRegimeTax,
        surcharge: oldRegimeSurcharge,
        cess: oldRegimeCess,
        totalTax: oldRegimeTotalTax,
        effectiveRate: totalIncome > 0 ? (oldRegimeTotalTax / totalIncome) * 100 : 0
      },
      new: {
        deductions: (compare_salaryIncome > 0 ? rules.standardDeductionNew : 0),
        taxableIncome: newRegimeTaxableIncome,
        basicTax: newRegimeTax,
        surcharge: newRegimeSurcharge,
        cess: newRegimeCess,
        totalTax: newRegimeTotalTax,
        effectiveRate: totalIncome > 0 ? (newRegimeTotalTax / totalIncome) * 100 : 0
      },
      difference: oldRegimeTotalTax - newRegimeTotalTax,
      recommended: oldRegimeTotalTax < newRegimeTotalTax ? "old" : "new"
    });
  };

  // 1. Add a stepper state for the tax tab
  const [taxStep, setTaxStep] = useState<number>(1);

  // 2. Add a function to go to the next/previous step
  const nextTaxStep = () => setTaxStep((s) => Math.min(s + 1, 4));
  const prevTaxStep = () => setTaxStep((s) => Math.max(s - 1, 1));
  const gotoTaxStep = (step: number) => setTaxStep(step);

  // 3. Refactor the Tax tab UI to use a stepper (multi-step form)
  <TabsContent value="tax">
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-vibrant-purple" />
          Income Tax Calculator (FY 2024-25)
        </CardTitle>
        <CardDescription>
          Calculate your income tax liability for FY 2024-25. Enter all your income and deduction details. Compare both regimes side-by-side.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Stepper Progress Bar */}
        <div className="flex items-center justify-between mb-6">
          {[1,2,3,4].map((step) => (
            <div key={step} className="flex-1 flex flex-col items-center">
              <button
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 ${taxStep === step ? 'bg-vibrant-purple text-white border-vibrant-purple' : 'bg-white text-vibrant-purple border-vibrant-purple/30'} transition`}
                onClick={() => gotoTaxStep(step)}
                disabled={taxStep < step}
              >{step}</button>
              <span className={`text-xs mt-1 ${taxStep === step ? 'text-vibrant-purple' : 'text-gray-400'}`}>{['Basic','Income','Deductions','Results'][step-1]}</span>
            </div>
          ))}
        </div>
        {/* Step 1: Basic Details */}
        {taxStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="regime">Tax Regime</Label>
                <Select value={regime} onValueChange={setRegime}>
                  <SelectTrigger id="regime">
                    <SelectValue placeholder="Select tax regime" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New Regime</SelectItem>
                    <SelectItem value="old">Old Regime</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age Group</Label>
                <Select value={age} onValueChange={setAge}>
                  <SelectTrigger id="age">
                    <SelectValue placeholder="Select age group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="below60">Below 60</SelectItem>
                    <SelectItem value="60to80">Senior Citizen (60-80)</SelectItem>
                    <SelectItem value="above80">Super Senior (80+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button onClick={nextTaxStep} className="bg-vibrant-purple hover:bg-vibrant-purple/90">Next</Button>
            </div>
          </div>
        )}
        {/* Step 2: Income Details (ClearTax style) */}
        {taxStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="salaryIncome">Salary Income (₹)</Label>
                <Input id="salaryIncome" type="number" placeholder="0" value={salaryIncome || ""} onChange={e => setSalaryIncome(parseFloat(e.target.value) || 0)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="housePropertyIncome">Income from House Property (₹)</Label>
                <Input id="housePropertyIncome" type="number" placeholder="0" value={housePropertyIncome || ""} onChange={e => setHousePropertyIncome(parseFloat(e.target.value) || 0)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="otherIncome">Income from Other Sources (₹)</Label>
                <Input id="otherIncome" type="number" placeholder="0" value={otherIncome || ""} onChange={e => setOtherIncome(parseFloat(e.target.value) || 0)} />
                <span className="text-xs text-gray-500">Interest, FD, Dividends, etc.</span>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <Button variant="outline" onClick={prevTaxStep}>Back</Button>
              <Button onClick={nextTaxStep} className="bg-vibrant-purple hover:bg-vibrant-purple/90">Next</Button>
            </div>
          </div>
        )}
        {/* Step 3: Deductions (ClearTax style) */}
        {taxStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="border rounded-lg p-4 bg-slate-50">
              <h4 className="font-semibold mb-2">Deductions (Chapter VI-A)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="stdDeduction">Standard Deduction (₹)
                    <span className="ml-1 text-xs text-gray-400" title="₹50,000 (Old Regime), ₹75,000 (New Regime from Salary only)">?</span>
                  </Label>
                  <Input id="stdDeduction" type="number" placeholder={regime === "new" ? "75000" : "50000"} value={stdDeduction || ""} onChange={e => setStdDeduction(parseFloat(e.target.value) || 0)} disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="professionalTax">Professional Tax (₹)
                    <span className="ml-1 text-xs text-gray-400" title="Up to ₹2,500 or actual paid amount">?</span>
                  </Label>
                  <Input id="professionalTax" type="number" placeholder="0" value={professionalTax || ""} onChange={e => setProfessionalTax(parseFloat(e.target.value) || 0)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section80C">Section 80C (₹)
                    <span className="ml-1 text-xs text-gray-400" title="LIC, PPF, ELSS, etc. – max ₹1.5L">?</span>
                  </Label>
                  <Input id="section80C" type="number" placeholder="0" value={section80C || ""} onChange={e => setSection80C(parseFloat(e.target.value) || 0)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section80D">Section 80D (₹)
                    <span className="ml-1 text-xs text-gray-400" title="Health insurance premium">?</span>
                  </Label>
                  <Input id="section80D" type="number" placeholder="0" value={section80D || ""} onChange={e => setSection80D(parseFloat(e.target.value) || 0)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section80CCD1">Section 80CCD(1) (₹)
                    <span className="ml-1 text-xs text-gray-400" title="NPS Employee Contribution">?</span>
                  </Label>
                  <Input id="section80CCD1" type="number" placeholder="0" value={section80CCD1 || ""} onChange={e => setSection80CCD1(parseFloat(e.target.value) || 0)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section80CCD1B">Section 80CCD(1B) (₹)
                    <span className="ml-1 text-xs text-gray-400" title="NPS Additional Deduction (₹50,000)">?</span>
                  </Label>
                  <Input id="section80CCD1B" type="number" placeholder="0" value={section80CCD1B || ""} onChange={e => setSection80CCD1B(parseFloat(e.target.value) || 0)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section80CCD2">Section 80CCD(2) (₹)
                    <span className="ml-1 text-xs text-gray-400" title="NPS Employer Contribution (separate from 80C limit)">?</span>
                  </Label>
                  <Input id="section80CCD2" type="number" placeholder="0" value={section80CCD2 || ""} onChange={e => setSection80CCD2(parseFloat(e.target.value) || 0)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section80TTA">Section 80TTA (₹)
                    <span className="ml-1 text-xs text-gray-400" title="Interest on Savings (max ₹10,000)">?</span>
                  </Label>
                  <Input id="section80TTA" type="number" placeholder="0" value={section80TTA || ""} onChange={e => setSection80TTA(parseFloat(e.target.value) || 0)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section80G">Section 80G (₹)
                    <span className="ml-1 text-xs text-gray-400" title="Donations">?</span>
                  </Label>
                  <Input id="section80G" type="number" placeholder="0" value={section80G || ""} onChange={e => setSection80G(parseFloat(e.target.value) || 0)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="otherVIADeduction">Other Chapter VI-A Deduction (₹)</Label>
                  <Input id="otherVIADeduction" type="number" placeholder="0" value={otherVIADeduction || ""} onChange={e => setOtherVIADeduction(parseFloat(e.target.value) || 0)} />
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <Button variant="outline" onClick={prevTaxStep}>Back</Button>
              <Button onClick={nextTaxStep} className="bg-vibrant-purple hover:bg-vibrant-purple/90">Next</Button>
            </div>
          </div>
        )}
        {/* Step 4: Results & Comparison */}
        {taxStep === 4 && (
          <div className="space-y-6 animate-fade-in">
            <Button onClick={calculateTax} className="w-full bg-slate-700 hover:bg-slate-800 mb-2">Calculate Tax Liability</Button>
            <Button onClick={handleCompareOtherRegime} className="w-full bg-blue-700 hover:bg-blue-800 mb-4">Compare with other regime</Button>
            {taxResults && (
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 mt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Tax Calculation Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Gross Salary Income:</span>
                    <span className="font-medium">₹{taxResults.grossSalary.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Standard Deduction:</span>
                    <span className="font-medium">₹{taxResults.stdDeduction.toLocaleString('en-IN')}</span>
                  </div>
                  {regime === "old" && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Section 80C:</span>
                        <span className="font-medium">₹{taxResults.section80C.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Section 80D:</span>
                        <span className="font-medium">₹{taxResults.section80D.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Section 80G:</span>
                        <span className="font-medium">₹{taxResults.section80G.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Housing Loan Interest:</span>
                        <span className="font-medium">₹{taxResults.housingLoanInterest.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">NPS Contribution:</span>
                        <span className="font-medium">₹{taxResults.npsContribution.toLocaleString('en-IN')}</span>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between text-sm font-semibold">
                    <span>Total Deductions:</span>
                    <span className="font-medium">₹{taxResults.totalDeductions.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Taxable Income:</span>
                    <span className="font-medium">₹{taxResults.taxableIncome.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Basic Tax:</span>
                    <span className="font-medium">₹{taxResults.basicTax.toLocaleString('en-IN')}</span>
                  </div>
                  {taxResults.surcharge > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Surcharge:</span>
                      <span className="font-medium">₹{taxResults.surcharge.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Health & Education Cess (4%):</span>
                    <span className="font-medium">₹{taxResults.cess.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="h-px bg-gray-200 my-2"></div>
                  <div className="flex justify-between font-semibold">
                    <span>Total Tax Liability:</span>
                    <span className="text-slate-700 text-lg">₹{taxResults.totalTax.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Effective Tax Rate:</span>
                    <span className="font-medium">{taxResults.effectiveRate.toFixed(2)}%</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Button variant="outline" onClick={handleDownloadPDF}>
                    Download as PDF
                  </Button>
                  <Button variant="outline" onClick={() => setShowEmailModal(true)}>
                    Email Results
                  </Button>
                </div>
                {emailStatus && <p className="text-sm mt-2">{emailStatus}</p>}
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-gray-500">
        <p>Tax calculations are based on FY 2024-25 rates</p>
      </CardFooter>
    </Card>
  </TabsContent>

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="text-center space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Financial Calculators
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Use our professional calculators to estimate taxes, plan loan repayments, track savings growth, and make informed financial decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Calculators Section */}
      <section className="section bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container-custom py-12">
          <div className="text-center mb-10 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Financial Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Powerful calculators to help you plan your finances with confidence.
            </p>
          </div>

          <Tabs defaultValue="tax" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 gap-2 mb-8">
              <TabsTrigger value="tax" className="text-sm">
                <Calculator className="mr-1 h-4 w-4" /> Tax
              </TabsTrigger>
              <TabsTrigger value="loan" className="text-sm">
                <IndianRupee className="mr-1 h-4 w-4" /> Loan
              </TabsTrigger>
              <TabsTrigger value="savings" className="text-sm">
                <PiggyBank className="mr-1 h-4 w-4" /> Savings
              </TabsTrigger>
              <TabsTrigger value="investment" className="text-sm">
                <TrendingUp className="mr-1 h-4 w-4" /> Investment
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-4 mb-8">
              <TabsList className="grid w-full grid-cols-6 gap-2">
                <TabsTrigger value="fd" className="text-sm">
                  <CircleDollarSign className="mr-1 h-4 w-4" /> FD
                </TabsTrigger>
                <TabsTrigger value="hra" className="text-sm">
                  <Building className="mr-1 h-4 w-4" /> HRA
                </TabsTrigger>
                <TabsTrigger value="nps" className="text-sm">
                  <Landmark className="mr-1 h-4 w-4" /> NPS
                </TabsTrigger>
                <TabsTrigger value="sip" className="text-sm">
                  <BarChart4 className="mr-1 h-4 w-4" /> SIP/MF
                </TabsTrigger>
                <TabsTrigger value="irr" className="text-sm">
                  <PercentCircle className="mr-1 h-4 w-4" /> IRR
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Tax Calculator */}
            <TabsContent value="tax">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-6 w-6 text-vibrant-purple" />
                    Income Tax Calculator (FY 2024-25)
                  </CardTitle>
                  <CardDescription>
                    Calculate your income tax liability for FY 2024-25. Enter your income and deduction details. Results update instantly and compare both regimes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-8" autoComplete="off" onSubmit={e => e.preventDefault()}>
                    {/* Income Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <Label className="flex items-center gap-2" htmlFor="salaryIncome">
                          Income from Salary
                          <span className="tooltip-i" tabIndex={0} data-tooltip="Total salary earned before tax exemptions like HRA or LTA.">i</span>
                        </Label>
                        <Input id="salaryIncome" type="number" min="0" value={salaryIncome || ""} onChange={e => setSalaryIncome(Math.max(0, parseFloat(e.target.value) || 0))} />
                      </div>
                      <div className="space-y-4">
                        <Label className="flex items-center gap-2" htmlFor="exemptAllowances">
                          Exempt Allowances
                          <span className="tooltip-i" tabIndex={0} data-tooltip="Include amounts like HRA or LTA that are partially or fully exempt.">i</span>
                        </Label>
                        <Input id="exemptAllowances" type="number" min="0" value={exemptAllowances || ""} onChange={e => setExemptAllowances(Math.max(0, parseFloat(e.target.value) || 0))} />
                      </div>
                      <div className="space-y-4">
                        <Label className="flex items-center gap-2" htmlFor="otherSourcesIncome">
                          Income from Other Sources
                          <span className="tooltip-i" tabIndex={0} data-tooltip="Any other income such as interest on savings, fixed deposits, gifts, or freelance work.">i</span>
                        </Label>
                        <Input id="otherSourcesIncome" type="number" min="0" value={otherSourcesIncome || ""} onChange={e => setOtherSourcesIncome(Math.max(0, parseFloat(e.target.value) || 0))} />
                      </div>
                      <div className="space-y-4">
                        <Label className="flex items-center gap-2" htmlFor="homeLoanSelf">
                          Interest on Home Loan – Self-occupied
                          <span className="tooltip-i" tabIndex={0} data-tooltip="Interest paid on loan for a self-used home. Max ₹2,00,000 allowed under Sec 24(b).">i</span>
                        </Label>
                        <Input id="homeLoanSelf" type="number" min="0" value={homeLoanSelf || ""} onChange={e => setHomeLoanSelf(Math.max(0, parseFloat(e.target.value) || 0))} />
                      </div>
                      <div className="space-y-4">
                        <Label className="flex items-center gap-2" htmlFor="rentalIncome">
                          Rental Income Received
                          <span className="tooltip-i" tabIndex={0} data-tooltip="Net rent after deducting property taxes or repairs.">i</span>
                        </Label>
                        <Input id="rentalIncome" type="number" min="0" value={rentalIncome || ""} onChange={e => setRentalIncome(Math.max(0, parseFloat(e.target.value) || 0))} />
                      </div>
                      <div className="space-y-4">
                        <Label className="flex items-center gap-2" htmlFor="homeLoanLetout">
                          Interest on Home Loan – Let-out Property
                          <span className="tooltip-i" tabIndex={0} data-tooltip="Entire interest is deductible for a let-out property.">i</span>
                        </Label>
                        <Input id="homeLoanLetout" type="number" min="0" value={homeLoanLetout || ""} onChange={e => setHomeLoanLetout(Math.max(0, parseFloat(e.target.value) || 0))} />
                      </div>
                      <div className="space-y-4">
                        <Label className="flex items-center gap-2" htmlFor="otherIncome">
                          Other Income
                          <span className="tooltip-i" tabIndex={0} data-tooltip="Include capital gains, lottery winnings, or any other income.">i</span>
                        </Label>
                        <Input id="otherIncome" type="number" min="0" value={otherIncome || ""} onChange={e => setOtherIncome(Math.max(0, parseFloat(e.target.value) || 0))} />
                      </div>
                    </div>
                    {/* Deductions Section */}
                    <div className="border rounded-lg p-4 bg-slate-50 mt-6">
                      <h4 className="font-semibold mb-2">Deductions (Chapter VI-A)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="flex items-center gap-2" htmlFor="section80C">
                            80C – Basic Deductions
                            <span className="tooltip-i" tabIndex={0} data-tooltip="PPF, LIC, ELSS, school fees, etc., max ₹1.5 lakh.">i</span>
                          </Label>
                          <Input id="section80C" type="number" min="0" value={section80C || ""} onChange={e => setSection80C(Math.max(0, parseFloat(e.target.value) || 0))} />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex items-center gap-2" htmlFor="section80TTA">
                            80TTA – Savings Interest
                            <span className="tooltip-i" tabIndex={0} data-tooltip="Deduction up to ₹10,000 for savings interest (non-senior citizens).">i</span>
                          </Label>
                          <Input id="section80TTA" type="number" min="0" value={section80TTA || ""} onChange={e => setSection80TTA(Math.max(0, parseFloat(e.target.value) || 0))} />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex items-center gap-2" htmlFor="section80D">
                            80D – Medical Insurance
                            <span className="tooltip-i" tabIndex={0} data-tooltip="Premiums for health insurance of self, family, parents.">i</span>
                          </Label>
                          <Input id="section80D" type="number" min="0" value={section80D || ""} onChange={e => setSection80D(Math.max(0, parseFloat(e.target.value) || 0))} />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex items-center gap-2" htmlFor="section80G">
                            80G – Donations
                            <span className="tooltip-i" tabIndex={0} data-tooltip="Donations to approved charities and relief funds.">i</span>
                          </Label>
                          <Input id="section80G" type="number" min="0" value={section80G || ""} onChange={e => setSection80G(Math.max(0, parseFloat(e.target.value) || 0))} />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex items-center gap-2" htmlFor="section80EEA">
                            80EEA – Interest on Housing Loan
                            <span className="tooltip-i" tabIndex={0} data-tooltip="Extra ₹1.5 lakh deduction for affordable housing (subject to conditions).">i</span>
                          </Label>
                          <Input id="section80EEA" type="number" min="0" value={section80EEA || ""} onChange={e => setSection80EEA(Math.max(0, parseFloat(e.target.value) || 0))} />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex items-center gap-2" htmlFor="section80CCD1B">
                            80CCD(1B) – Employee's NPS Contribution
                            <span className="tooltip-i" tabIndex={0} data-tooltip="Extra ₹50,000 over 80C for NPS.">i</span>
                          </Label>
                          <Input id="section80CCD1B" type="number" min="0" value={section80CCD1B || ""} onChange={e => setSection80CCD1B(Math.max(0, parseFloat(e.target.value) || 0))} />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex items-center gap-2" htmlFor="section80CCD2">
                            80CCD(2) – Employer's NPS Contribution
                            <span className="tooltip-i" tabIndex={0} data-tooltip="Deduction for employer NPS contributions (up to 10% of salary).">i</span>
                          </Label>
                          <Input id="section80CCD2" type="number" min="0" value={section80CCD2 || ""} onChange={e => setSection80CCD2(Math.max(0, parseFloat(e.target.value) || 0))} />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex items-center gap-2" htmlFor="otherDeductions">
                            Other Deductions
                            <span className="tooltip-i" tabIndex={0} data-tooltip="Includes deductions under 80E (education), 80U (disability), etc.">i</span>
                          </Label>
                          <Input id="otherDeductions" type="number" min="0" value={otherDeductions || ""} onChange={e => setOtherDeductions(Math.max(0, parseFloat(e.target.value) || 0))} />
                        </div>
                      </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-6">
                      <Button type="button" variant="outline" onClick={resetTaxForm}>Reset</Button>
                    </div>
                  </form>
                  {/* Results Section */}
                  <div className="mt-10">
                    <h3 className="text-lg font-semibold mb-4">Tax Calculation Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Old Regime Card */}
                      <Card className="border border-gray-200">
                        <CardHeader className="bg-gray-50 border-b">
                          <CardTitle className="text-base font-semibold">Old Regime</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 py-4">
                          <div className="flex justify-between"><span>Taxable Income</span><span>₹{oldTaxResult.taxableIncome.toLocaleString('en-IN')}</span></div>
                          <div className="flex justify-between"><span>Basic Tax</span><span>₹{oldTaxResult.basicTax.toLocaleString('en-IN')}</span></div>
                          <div className="flex justify-between"><span>Surcharge</span><span>₹{oldTaxResult.surcharge.toLocaleString('en-IN')}</span></div>
                          <div className="flex justify-between"><span>Cess (4%)</span><span>₹{oldTaxResult.cess.toLocaleString('en-IN')}</span></div>
                          <div className="flex justify-between font-semibold"><span>Total Tax</span><span>₹{oldTaxResult.totalTax.toLocaleString('en-IN')}</span></div>
                        </CardContent>
                      </Card>
                      {/* New Regime Card */}
                      <Card className="border border-gray-200">
                        <CardHeader className="bg-gray-50 border-b">
                          <CardTitle className="text-base font-semibold">New Regime</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 py-4">
                          <div className="flex justify-between"><span>Taxable Income</span><span>₹{newTaxResult.taxableIncome.toLocaleString('en-IN')}</span></div>
                          <div className="flex justify-between"><span>Basic Tax</span><span>₹{newTaxResult.basicTax.toLocaleString('en-IN')}</span></div>
                          <div className="flex justify-between"><span>Surcharge</span><span>₹{newTaxResult.surcharge.toLocaleString('en-IN')}</span></div>
                          <div className="flex justify-between"><span>Cess (4%)</span><span>₹{newTaxResult.cess.toLocaleString('en-IN')}</span></div>
                          <div className="flex justify-between font-semibold"><span>Total Tax</span><span>₹{newTaxResult.totalTax.toLocaleString('en-IN')}</span></div>
                        </CardContent>
                      </Card>
                    </div>
                    {/* Regime Recommendation */}
                    <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 font-semibold text-center">
                      {oldTaxResult.totalTax < newTaxResult.totalTax ? (
                        <>Old Regime is more beneficial for you.</>
                      ) : oldTaxResult.totalTax > newTaxResult.totalTax ? (
                        <>New Regime is more beneficial for you.</>
                      ) : (
                        <>Both regimes result in the same tax liability.</>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-gray-500">
                  <p>Tax calculations are based on FY 2024-25 rates</p>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Loan Calculator */}
            <TabsContent value="loan">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IndianRupee className="h-6 w-6 text-vibrant-teal" />
                    Loan Repayment Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate your monthly loan payments based on amount, interest rate, and term.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="loanAmount">Loan Amount</Label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input
                          id="loanAmount"
                          type="number"
                          placeholder="0.00"
                          className="pl-10"
                          value={loanAmount || ""}
                          onChange={(e) => setLoanAmount(parseFloat(e.target.value) || 0)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="interestRate">Interest Rate (%)</Label>
                        <span className="text-gray-500">{interestRate}%</span>
                      </div>
                      <Slider
                        id="interestRate"
                        min={0}
                        max={20}
                        step={0.25}
                        value={[interestRate]}
                        onValueChange={(value) => setInterestRate(value[0])}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="loanTerm">Loan Term (Years)</Label>
                        <span className="text-gray-500">{loanTerm} years</span>
                      </div>
                      <Slider
                        id="loanTerm"
                        min={1}
                        max={30}
                        step={1}
                        value={[loanTerm]}
                        onValueChange={(value) => setLoanTerm(value[0])}
                      />
                    </div>
                    
                    <Button 
                      onClick={calculateLoan} 
                      className="w-full bg-teal-700 hover:bg-teal-800"
                    >
                      Calculate Monthly Payment
                    </Button>
                    
                    {monthlyPayment !== null && (
                      <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Monthly Payment</h3>
                        <div className="text-3xl font-bold text-teal-700">
                          ₹{monthlyPayment.toFixed(2)}
                        </div>
                        <p className="text-gray-500 mt-1">Total Cost: ₹{(monthlyPayment * loanTerm * 12).toFixed(2)}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          This is a simplified calculation. For detailed loan advice, please contact our advisory team.
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-gray-500">
                  <p>Results are estimates only</p>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Savings Calculator */}
            <TabsContent value="savings">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PiggyBank className="h-6 w-6 text-vibrant-pink" />
                    Savings Growth Calculator
                  </CardTitle>
                  <CardDescription>
                    Project the growth of your savings with regular contributions over time.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="initialAmount">Initial Amount</Label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input
                          id="initialAmount"
                          type="number"
                          placeholder="10000"
                          className="pl-10"
                          value={initialAmount || ""}
                          onChange={(e) => setInitialAmount(parseFloat(e.target.value) || 0)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="monthlyContribution">Monthly Contribution</Label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input
                          id="monthlyContribution"
                          type="number"
                          placeholder="5000"
                          className="pl-10"
                          value={monthlyContribution || ""}
                          onChange={(e) => setMonthlyContribution(parseFloat(e.target.value) || 0)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="savingsRate">Annual Interest Rate (%)</Label>
                        <span className="text-gray-500">{savingsRate}%</span>
                      </div>
                      <Slider
                        id="savingsRate"
                        min={0}
                        max={15}
                        step={0.25}
                        value={[savingsRate]}
                        onValueChange={(value) => setSavingsRate(value[0])}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="savingsYears">Time Period (Years)</Label>
                        <span className="text-gray-500">{savingsYears} years</span>
                      </div>
                      <Slider
                        id="savingsYears"
                        min={1}
                        max={30}
                        step={1}
                        value={[savingsYears]}
                        onValueChange={(value) => setSavingsYears(value[0])}
                      />
                    </div>
                    
                    <Button 
                      onClick={calculateSavings} 
                      className="w-full bg-blue-700 hover:bg-blue-800"
                    >
                      Calculate Future Savings
                    </Button>
                    
                    {finalAmount !== null && (
                      <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Projected Savings</h3>
                        <div className="text-3xl font-bold text-blue-700">
                          ₹{finalAmount.toFixed(2)}
                        </div>
                        <div className="mt-2 space-y-1 text-sm text-gray-500">
                          <p>Initial Investment: ₹{initialAmount.toFixed(2)}</p>
                          <p>Total Contributions: ₹{(monthlyContribution * savingsYears * 12).toFixed(2)}</p>
                          <p>Interest Earned: ₹{(finalAmount - initialAmount - (monthlyContribution * savingsYears * 12)).toFixed(2)}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-gray-500">
                  <p>Results are estimates only</p>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Investment Calculator */}
            <TabsContent value="investment">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-vibrant-yellow" />
                    Investment Return Calculator
                  </CardTitle>
                  <CardDescription>
                    Project the future value of your investments based on expected returns.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="investmentAmount">Investment Amount</Label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input
                          id="investmentAmount"
                          type="number"
                          placeholder="100000"
                          className="pl-10"
                          value={investmentAmount || ""}
                          onChange={(e) => setInvestmentAmount(parseFloat(e.target.value) || 0)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="investmentRate">Annual Return Rate (%)</Label>
                        <span className="text-gray-500">{investmentRate}%</span>
                      </div>
                      <Slider
                        id="investmentRate"
                        min={0}
                        max={30}
                        step={0.5}
                        value={[investmentRate]}
                        onValueChange={(value) => setInvestmentRate(value[0])}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="investmentYears">Investment Period (Years)</Label>
                        <span className="text-gray-500">{investmentYears} years</span>
                      </div>
                      <Slider
                        id="investmentYears"
                        min={1}
                        max={30}
                        step={1}
                        value={[investmentYears]}
                        onValueChange={(value) => setInvestmentYears(value[0])}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="investmentType">Interest Type</Label>
                      <Select
                        value={investmentType}
                        onValueChange={setInvestmentType}
                      >
                        <SelectTrigger id="investmentType">
                          <SelectValue placeholder="Select interest type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="compound">Compound Interest</SelectItem>
                          <SelectItem value="simple">Simple Interest</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button 
                      onClick={calculateInvestment} 
                      className="w-full bg-amber-700 hover:bg-amber-800"
                    >
                      Calculate Future Value
                    </Button>
                    
                    {investmentResult !== null && (
                      <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Projected Value</h3>
                        <div className="text-3xl font-bold text-amber-700">
                          ₹{investmentResult.toFixed(2)}
                        </div>
                        <div className="mt-2 space-y-1 text-sm text-gray-500">
                          <p>Initial Investment: ₹{investmentAmount.toFixed(2)}</p>
                          <p>Return Earned: ₹{(investmentResult - investmentAmount).toFixed(2)}</p>
                          <p>Interest Type: {investmentType === "compound" ? "Compound Interest" : "Simple Interest"}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-gray-500">
                  <p>Results are estimates only</p>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* FD Calculator */}
            <TabsContent value="fd">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CircleDollarSign className="h-6 w-6 text-blue-700" />
                    Fixed Deposit Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate your FD returns with accurate interest rates and tax implications.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fdAmount">Principal Amount (₹)</Label>
                        <div className="relative">
                          <IndianRupee className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input
                            id="fdAmount"
                            type="number"
                            placeholder="100000"
                            className="pl-10"
                            value={fdAmount || ""}
                            onChange={(e) => setFdAmount(parseFloat(e.target.value) || 0)}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="fdRate">Interest Rate (%)</Label>
                          <span className="text-gray-500">{fdRate}%</span>
                        </div>
                        <Slider
                          id="fdRate"
                          min={1}
                          max={12}
                          step={0.1}
                          value={[fdRate]}
                          onValueChange={(value) => setFdRate(value[0])}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="fdTenure">Tenure (Months)</Label>
                          <span className="text-gray-500">{fdTenure} months</span>
                        </div>
                        <Slider
                          id="fdTenure"
                          min={1}
                          max={120}
                          step={1}
                          value={[fdTenure]}
                          onValueChange={(value) => setFdTenure(value[0])}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="fdCompounding">Compounding Frequency</Label>
                        <Select
                          value={fdCompounding}
                          onValueChange={setFdCompounding}
                        >
                          <SelectTrigger id="fdCompounding">
                            <SelectValue placeholder="Select compounding" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                            <SelectItem value="halfYearly">Half-Yearly</SelectItem>
                            <SelectItem value="annually">Annually</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="fdTaxRate">Tax Rate on Interest (%)</Label>
                        <span className="text-gray-500">{fdTaxRate}%</span>
                      </div>
                      <Slider
                        id="fdTaxRate"
                        min={0}
                        max={30}
                        step={1}
                        value={[fdTaxRate]}
                        onValueChange={(value) => setFdTaxRate(value[0])}
                      />
                      <p className="text-xs text-gray-500">Set to 0% if FD is tax-free</p>
                    </div>
                    
                    <Button 
                      onClick={calculateFD} 
                      className="w-full bg-blue-700 hover:bg-blue-800"
                    >
                      Calculate FD Returns
                    </Button>
                    
                    {fdResults && (
                      <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900 mb-3">FD Maturity Summary</h3>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Principal Amount:</span>
                            <span className="font-medium">₹{fdResults.principal.toLocaleString('en-IN')}</span>
                          </div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Interest Earned:</span>
                            <span className="font-medium">₹{fdResults.interestEarned.toLocaleString('en-IN', {maximumFractionDigits: 2})}</span>
                          </div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">TDS/Tax on Interest:</span>
                            <span className="font-medium">₹{fdResults.taxOnInterest.toLocaleString('en-IN', {maximumFractionDigits: 2})}</span>
                          </div>
                          
                          <div className="h-px bg-gray-200 my-2"></div>
                          
                          <div className="flex justify-between font-semibold">
                            <span>Net Maturity Amount:</span>
                            <span className="text-blue-700 text-lg">₹{fdResults.netMaturityAmount.toLocaleString('en-IN', {maximumFractionDigits: 2})}</span>
                          </div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Effective Annual Yield:</span>
                            <span className="font-medium">{fdResults.effectiveYield}%</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-500 mt-3">
                          Compounding: {fdCompounding === "monthly" ? "Monthly" : 
                                       fdCompounding === "quarterly" ? "Quarterly" : 
                                       fdCompounding === "halfYearly" ? "Half-Yearly" : "Annually"}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-gray-500">
                  <p>Based on current bank FD rates (Apr 2024)</p>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* HRA Calculator */}
            <TabsContent value="hra">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-6 w-6 text-emerald-700" />
                    HRA Tax Exemption Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate your eligible House Rent Allowance (HRA) exemption as per Income Tax rules.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="basicSalary">Basic Salary (Monthly) (₹)</Label>
                        <div className="relative">
                          <IndianRupee className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input
                            id="basicSalary"
                            type="number"
                            placeholder="50000"
                            className="pl-10"
                            value={basicSalary || ""}
                            onChange={(e) => setBasicSalary(parseFloat(e.target.value) || 0)}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="hraReceived">HRA Received (Monthly) (₹)</Label>
                        <div className="relative">
                          <IndianRupee className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input
                            id="hraReceived"
                            type="number"
                            placeholder="20000"
                            className="pl-10"
                            value={hraReceived || ""}
                            onChange={(e) => setHraReceived(parseFloat(e.target.value) || 0)}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="rentPaid">Rent Paid (Monthly) (₹)</Label>
                        <div className="relative">
                          <IndianRupee className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input
                            id="rentPaid"
                            type="number"
                            placeholder="25000"
                            className="pl-10"
                            value={rentPaid || ""}
                            onChange={(e) => setRentPaid(parseFloat(e.target.value) || 0)}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cityType">City Type</Label>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="isMetroCity"
                            checked={isMetroCity}
                            onChange={(e) => setIsMetroCity(e.target.checked)}
                            className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                          />
                          <Label htmlFor="isMetroCity" className="font-normal">
                            Metro City (Delhi, Mumbai, Kolkata, Chennai)
                          </Label>
                        </div>
                        <p className="text-xs text-gray-500">
                          50% of Basic Salary for Metro cities, 40% for Non-Metro cities
                        </p>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={calculateHRA} 
                      className="w-full bg-emerald-700 hover:bg-emerald-800"
                    >
                      Calculate HRA Exemption
                    </Button>
                    
                    {hraResults && (
                      <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900 mb-3">HRA Exemption Calculation</h3>
                        
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium">Least of the following is exempt:</p>
                            <ul className="mt-1 space-y-2 text-sm pl-4">
                              <li className="flex justify-between">
                                <span className="text-gray-600">1. Actual HRA received:</span>
                                <span className="font-medium">₹{hraResults.actual.toLocaleString('en-IN')}/month</span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-gray-600">2. Rent paid - 10% of Basic:</span>
                                <span className="font-medium">₹{hraResults.rentExcess.toLocaleString('en-IN')}/month</span>
                              </li>
                              <li className="flex justify-between">
                                <span className="text-gray-600">3. {isMetroCity ? "50%" : "40%"} of Basic Salary:</span>
                                <span className="font-medium">₹{hraResults.percentOfBasic.toLocaleString('en-IN')}/month</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="h-px bg-gray-200 my-2"></div>
                          
                          <div className="flex justify-between font-semibold">
                            <span>HRA Exemption (Monthly):</span>
                            <span className="text-emerald-700 text-lg">₹{hraResults.exemption.toLocaleString('en-IN')}</span>
                          </div>
                          
                          <div className="flex justify-between">
                            <span className="text-gray-600">Taxable HRA (Monthly):</span>
                            <span className="font-medium">₹{hraResults.taxable.toLocaleString('en-IN')}</span>
                          </div>
                          
                          <div className="flex justify-between">
                            <span className="text-gray-600">Annual HRA Exemption:</span>
                            <span className="font-medium">₹{(hraResults.exemption * 12).toLocaleString('en-IN')}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-500 mt-3 italic">
                          {rentPaid < basicSalary * 0.1 ? 
                            "Note: Your rent paid is less than 10% of basic salary, reducing your exemption." : ""}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-gray-500">
                  <p>Based on current Income Tax rules for HRA exemption</p>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* NPS Calculator */}
            <TabsContent value="nps">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Landmark className="h-6 w-6 text-indigo-700" />
                    NPS Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate your National Pension System returns and tax benefits.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="npsMonthlyContribution">Monthly Contribution (₹)</Label>
                        <div className="relative">
                          <IndianRupee className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input
                            id="npsMonthlyContribution"
                            type="number"
                            placeholder="5000"
                            className="pl-10"
                            value={npsMonthlyContribution || ""}
                            onChange={(e) => setNpsMonthlyContribution(parseFloat(e.target.value) || 0)}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="npsExpectedReturn">Expected Return (%)</Label>
                          <span className="text-gray-500">{npsExpectedReturn}%</span>
                        </div>
                        <Slider
                          id="npsExpectedReturn"
                          min={6}
                          max={14}
                          step={0.5}
                          value={[npsExpectedReturn]}
                          onValueChange={(value) => setNpsExpectedReturn(value[0])}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="npsCurrentAge">Current Age (Years)</Label>
                        <Input
                          id="npsCurrentAge"
                          type="number"
                          placeholder="30"
                          value={npsCurrentAge || ""}
                          onChange={(e) => setNpsCurrentAge(parseFloat(e.target.value) || 0)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="npsRetirementAge">Retirement Age (Years)</Label>
                        <Input
                          id="npsRetirementAge"
                          type="number"
                          placeholder="60"
                          value={npsRetirementAge || ""}
                          onChange={(e) => setNpsRetirementAge(parseFloat(e.target.value) || 0)}
                        />
                        <p className="text-xs text-gray-500">Maximum retirement age is 70</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="npsAnnuityPercentage">Annuity Purchase (%)</Label>
                          <span className="text-gray-500">{npsAnnuityPercentage}%</span>
                        </div>
                        <Slider
                          id="npsAnnuityPercentage"
                          min={40}
                          max={100}
                          step={5}
                          value={[npsAnnuityPercentage]}
                          onValueChange={(value) => setNpsAnnuityPercentage(value[0])}
                        />
                        <p className="text-xs text-gray-500">Minimum 40% mandatory for annuity purchase</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="npsAnnuityReturn">Expected Annuity Return (%)</Label>
                          <span className="text-gray-500">{npsAnnuityReturn}%</span>
                        </div>
                        <Slider
                          id="npsAnnuityReturn"
                          min={4}
                          max={8}
                          step={0.5}
                          value={[npsAnnuityReturn]}
                          onValueChange={(value) => setNpsAnnuityReturn(value[0])}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="npsTaxRate">Your Income Tax Slab (%)</Label>
                        <span className="text-gray-500">{npsTaxRate}%</span>
                      </div>
                      <Slider
                        id="npsTaxRate"
                        min={0}
                        max={30}
                        step={5}
                        value={[npsTaxRate]}
                        onValueChange={(value) => setNpsTaxRate(value[0])}
                      />
                    </div>
                    
                    <Button 
                      onClick={calculateNPS} 
                      className="w-full bg-purple-700 hover:bg-purple-800"
                    >
                      Calculate NPS Benefits
                    </Button>
                    
                    {npsResults && (
                      <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900 mb-3">NPS Retirement Summary</h3>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between font-semibold">
                            <span>Total Corpus at Retirement:</span>
                            <span className="text-purple-700 text-lg">₹{npsResults.corpusAtRetirement.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                          </div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Total Investment:</span>
                            <span className="font-medium">₹{npsResults.totalContribution.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                          </div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Investment Horizon:</span>
                            <span className="font-medium">{npsResults.investmentYears} years</span>
                          </div>
                          
                          <div className="h-px bg-gray-200 my-2"></div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Lump Sum Available ({100 - npsAnnuityPercentage}%):</span>
                            <span className="font-medium">₹{npsResults.lumpSumAmount.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                          </div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Annuity Investment ({npsAnnuityPercentage}%):</span>
                            <span className="font-medium">₹{npsResults.annuityInvestment.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                          </div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Estimated Monthly Pension:</span>
                            <span className="font-medium">₹{npsResults.monthlyPension.toLocaleString('en-IN', {maximumFractionDigits: 0})}/month</span>
                          </div>
                          
                          <div className="h-px bg-gray-200 my-2"></div>
                          
                          <div className="text-sm font-medium">Annual Tax Benefits:</div>
                          <div className="pl-4 space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Section 80CCD(1) Deduction:</span>
                              <span className="font-medium">₹{npsResults.section80CCD1.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Section 80CCD(1B) Deduction:</span>
                              <span className="font-medium">₹{npsResults.section80CCD1B.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between font-medium">
                              <span>Total Tax Deduction:</span>
                              <span>₹{npsResults.totalTaxDeduction.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="flex justify-between font-medium text-green-600">
                              <span>Annual Tax Saving:</span>
                              <span>₹{npsResults.annualTaxSaving.toLocaleString('en-IN')}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-500 mt-3 italic">
                          Based on the new tax regime. Actual returns may vary based on market performance.
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-gray-500">
                  <p>As per PFRDA regulations and tax rules FY 2024-25</p>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* SIP Calculator */}
            <TabsContent value="sip">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart4 className="h-6 w-6 text-orange-700" />
                    Mutual Fund SIP Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate returns on your Systematic Investment Plan (SIP) in mutual funds.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sipAmount">Monthly SIP Amount (₹)</Label>
                        <div className="relative">
                          <IndianRupee className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input
                            id="sipAmount"
                            type="number"
                            placeholder="5000"
                            className="pl-10"
                            value={sipAmount || ""}
                            onChange={(e) => setSipAmount(parseFloat(e.target.value) || 0)}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="sipYears">Investment Period (Years)</Label>
                          <span className="text-gray-500">{sipYears} years</span>
                        </div>
                        <Slider
                          id="sipYears"
                          min={1}
                          max={30}
                          step={1}
                          value={[sipYears]}
                          onValueChange={(value) => setSipYears(value[0])}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="sipRate">Expected Return Rate (%)</Label>
                          <span className="text-gray-500">{sipRate}%</span>
                        </div>
                        <Slider
                          id="sipRate"
                          min={1}
                          max={30}
                          step={0.5}
                          value={[sipRate]}
                          onValueChange={(value) => setSipRate(value[0])}
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Conservative: 8-10%</span>
                          <span>Moderate: 10-14%</span>
                          <span>Aggressive: 14-18%</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label htmlFor="sipStepUp">Annual Step-up (%)</Label>
                          <span className="text-gray-500">{sipStepUp}%</span>
                        </div>
                        <Slider
                          id="sipStepUp"
                          min={0}
                          max={20}
                          step={1}
                          value={[sipStepUp]}
                          onValueChange={(value) => setSipStepUp(value[0])}
                        />
                        <p className="text-xs text-gray-500">Increase in SIP amount every year</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="sipInflation">Expected Inflation Rate (%)</Label>
                        <span className="text-gray-500">{sipInflation}%</span>
                      </div>
                      <Slider
                        id="sipInflation"
                        min={0}
                        max={10}
                        step={0.5}
                        value={[sipInflation]}
                        onValueChange={(value) => setSipInflation(value[0])}
                      />
                    </div>
                    
                    <Button 
                      onClick={calculateSIP} 
                      className="w-full bg-orange-700 hover:bg-orange-800"
                    >
                      Calculate SIP Returns
                    </Button>
                    
                    {sipResults && (
                      <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900 mb-3">SIP Investment Summary</h3>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between font-semibold">
                            <span>Invested Amount:</span>
                            <span>₹{sipResults.totalInvestment.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                          </div>
                          
                          <div className="flex justify-between font-semibold">
                            <span>Estimated Returns:</span>
                            <span className="text-green-600">₹{sipResults.estimatedReturns.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                          </div>
                          
                          <div className="flex justify-between font-semibold">
                            <span>Future Value:</span>
                            <span className="text-orange-700 text-lg">₹{sipResults.futureValue.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                          </div>
                          
                          <div className="h-px bg-gray-200 my-2"></div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Inflation-Adjusted Value:</span>
                            <span className="font-medium">₹{sipResults.inflationAdjustedValue.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                          </div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Wealth Gain Ratio:</span>
                            <span className="font-medium">{sipResults.wealthGainRatio.toFixed(2)}x</span>
                          </div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Expected XIRR:</span>
                            <span className="font-medium">{sipResults.xirr.toFixed(2)}%</span>
                          </div>
                          
                          {sipStepUp > 0 && (
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Final Monthly SIP Amount:</span>
                              <span className="font-medium">₹{sipResults.finalMonthlyInvestment.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                            </div>
                          )}
                        </div>
                        
                        <p className="text-sm text-gray-500 mt-3 italic">
                          Past performance is not a guarantee of future returns. Mutual fund investments are subject to market risks.
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-gray-500">
                  <p>Based on long-term market trends as of April 2024</p>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* IRR Calculator */}
            <TabsContent value="irr">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PercentCircle className="h-6 w-6 text-slate-700" />
                    IRR Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate Internal Rate of Return (IRR) for a series of cash flows over time.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Cash Flows</Label>
                      <div className="border rounded-md overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount (₹)</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {cashFlows.map((flow, index) => (
                              <tr key={index} className={flow.amount < 0 ? "bg-red-50" : "bg-green-50"}>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{flow.year}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                  {Math.abs(flow.amount).toLocaleString('en-IN')}
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm">
                                  <span className={flow.amount < 0 ? "text-red-600" : "text-green-600"}>
                                    {flow.amount < 0 ? "Investment" : "Return"}
                                  </span>
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap text-sm">
                                  {index > 0 && (
                                    <button 
                                      onClick={() => removeCashFlow(index)}
                                      className="text-red-500 hover:text-red-700"
                                    >
                                      Remove
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="newYear">Year</Label>
                        <Input
                          id="newYear"
                          type="number"
                          placeholder="5"
                          value={newYear || ""}
                          onChange={(e) => setNewYear(parseInt(e.target.value) || 0)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="newAmount">Amount (₹)</Label>
                        <div className="relative">
                          <IndianRupee className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input
                            id="newAmount"
                            type="number"
                            placeholder="50000"
                            className="pl-10"
                            value={newAmount || ""}
                            onChange={(e) => setNewAmount(parseFloat(e.target.value) || 0)}
                          />
                        </div>
                        <p className="text-xs text-gray-500">Use negative value for investment, positive for return</p>
                      </div>
                      
                      <div className="flex items-end">
                        <Button 
                          onClick={addCashFlow} 
                          className="w-full"
                          variant="outline"
                        >
                          Add Cash Flow
                        </Button>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={calculateIRR} 
                      className="w-full bg-indigo-700 hover:bg-indigo-800"
                    >
                      Calculate IRR
                    </Button>
                    
                    {irrResults && (
                      <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Investment Performance</h3>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between font-semibold">
                            <span>Internal Rate of Return (IRR):</span>
                            <span className="text-indigo-700 text-lg">{irrResults.irr.toFixed(2)}%</span>
                          </div>
                          
                          <div className="h-px bg-gray-200 my-2"></div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Total Investment:</span>
                            <span className="font-medium">₹{irrResults.totalInvestment.toLocaleString('en-IN')}</span>
                          </div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Total Returns:</span>
                            <span className="font-medium">₹{irrResults.totalReturns.toLocaleString('en-IN')}</span>
                          </div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Net Profit:</span>
                            <span className="font-medium text-green-600">₹{irrResults.netProfit.toLocaleString('en-IN')}</span>
                          </div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Absolute Return:</span>
                            <span className="font-medium">{irrResults.absoluteReturn.toFixed(2)}%</span>
                          </div>
                          
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Return on Investment (ROI):</span>
                            <span className="font-medium">{irrResults.roi.toFixed(2)}%</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-500 mt-3 italic">
                          IRR represents the annualized return rate that makes the net present value of all cash flows equal to zero.
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-gray-500">
                  <p>IRR is commonly used to evaluate and compare investment opportunities</p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-slate-50">
        <div className="container-custom py-16">
          <div className="text-center animate-fade-up">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Need Professional Assistance?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              For personalized financial analysis and professional advice, our team of experts is ready to help you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-slate-800 hover:bg-slate-700 button-pop">
                <a href="/contact">Contact Us Now</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-800 text-slate-800 hover:bg-slate-100 button-pop">
                <a href="/services/advisory">Learn About Advisory Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tools; 