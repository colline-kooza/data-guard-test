import { getAllData } from "../data/route";

export async function PUT(request, { params: { id } }) {
  const data = await getAllData();
  const plugin = data.find((plugin) => plugin.id == id);
  const { isDisabled } = request.json();
  plugin.isDisabled = isDisabled;
}
