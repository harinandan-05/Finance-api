import record from "../../models/record";

export const getDashboardSummary = async (userId: string, role: string) => {
  const match: any = {};

  if (role !== "admin") {
    match.userId = userId;
  }

  const summary = await record.aggregate([
    { $match: match },
    {
      $group: {
        _id: "$type",
        total: { $sum: "$amount" }
      }
    }
  ]);

  let totalIncome = 0;
  let totalExpense = 0;

  summary.forEach((item) => {
    if (item._id === "income") totalIncome = item.total;
    if (item._id === "expense") totalExpense = item.total;
  });

  const balance = totalIncome - totalExpense;

  const categories = await record.aggregate([
    { $match: match },
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" }
      }
    }
  ]);

  const categoryData = categories.map((item) => ({
    category: item._id,
    total: item.total
  }));

  const recent = await record
    .find(match)
    .sort({ createdAt: -1 })
    .limit(5);

  return {
    summary: {
      totalIncome,
      totalExpense,
      balance
    },
    categories: categoryData,
    recent
  };
};