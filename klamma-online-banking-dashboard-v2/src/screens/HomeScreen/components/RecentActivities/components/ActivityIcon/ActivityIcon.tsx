type ActivityIconProps = {
  type: string;
};

export const ActivityIcon = ({ type }: ActivityIconProps) => {
  const activityIconByType: { [key: string]: string } = {
    Sent: "send",
    Conversion: "currency_exchange",
    "Cafe & Restaurants": "wallet",
    Opened: "savings",
  };

  return (
    <span className="material-symbols-outlined">
      {activityIconByType[type]}
    </span>
  );
};
