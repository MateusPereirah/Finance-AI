import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const transactionCategoryMap = {
  [TransactionCategory.HOUSING]: "Moradia",
  [TransactionCategory.EDUCATION]: "Educação",
  [TransactionCategory.ENTERTAINMENT]: "Entretenimento",
  [TransactionCategory.FOOD]: "Alimentação",
  [TransactionCategory.HEALTH]: "Saúde",
  [TransactionCategory.OTHER]: "Outro",
  [TransactionCategory.SALARY]: "Salário",
  [TransactionCategory.TRANSPORTATION]: "Transporte",
  [TransactionCategory.UTILITY]: "Utilidades",
};

export const transactionPaymentMethodMap = {
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de débito",
  OTHER: "Outros",
  PIX: "Pix",
};

export const transaction_type_options = [
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Depósito",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
];

export const transaction_payment_method_options = [
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label: transactionPaymentMethodMap[TransactionPaymentMethod.BANK_TRANSFER],
  },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label: transactionPaymentMethodMap[TransactionPaymentMethod.BANK_SLIP],
  },
  {
    value: TransactionPaymentMethod.CASH,
    label: transactionPaymentMethodMap[TransactionPaymentMethod.CASH],
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label: transactionPaymentMethodMap[TransactionPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label: transactionPaymentMethodMap[TransactionPaymentMethod.DEBIT_CARD],
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: transactionPaymentMethodMap[TransactionPaymentMethod.PIX],
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: transactionPaymentMethodMap[TransactionPaymentMethod.OTHER],
  },
];

export const transaction_category_options = [
  {
    value: TransactionCategory.EDUCATION,
    label: transactionCategoryMap[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: transactionCategoryMap[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: TransactionCategory.FOOD,
    label: transactionCategoryMap[TransactionCategory.FOOD],
  },
  {
    value: TransactionCategory.HEALTH,
    label: transactionCategoryMap[TransactionCategory.HEALTH],
  },
  {
    value: TransactionCategory.HOUSING,
    label: transactionCategoryMap[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.SALARY,
    label: transactionCategoryMap[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: transactionCategoryMap[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.UTILITY,
    label: transactionCategoryMap[TransactionCategory.UTILITY],
  },
  {
    value: TransactionCategory.OTHER,
    label: transactionCategoryMap[TransactionCategory.OTHER],
  },
];
