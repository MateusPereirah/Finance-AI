import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";

const TransactionsPage = async () => {
  const transations = await db.transaction.findMany({});
  return (
    <div className="p-6 space-y-6">
      <div className="flex w-full justify-between items-center">
        <h1 className="font-bold text-2xl">Transações</h1>
        <AddTransactionButton />
      </div>

      <DataTable columns={transactionColumns} data={transations} />
    </div>
  );
};

export default TransactionsPage;
