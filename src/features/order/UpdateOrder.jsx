import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";
import { formatCurrency } from "../../utils/helpers";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  const priorityPrice = Math.round(order.orderPrice * 0.2);

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">
        Make priority for {formatCurrency(priorityPrice)}
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
