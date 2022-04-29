import { Card } from "../../../src/model/Card";

import { getCards } from "../../../src/services/get-cards";

export default async function handler(request, response) {
  const { id } = request.query;

  //const cards = getCards();

  //const singleCard = cards.find((card) => card.id === id);

  if (request.method === "DELETE") {
    const deleted = await Card.findByIdAndDelete(id);
    response.status(200).json({ message: "card deleted", card: deletedCard });
  } else if (request.method === "PUT") {
    const data = JSON.parse(request.body);

    const changedCard = await Card.findByIdAndDelete(id, data, { new: true });
    response.status(200).json({ message: "card updated", card: changedCard });
  } else {
    const singleCard = await Card.findById(id);
    response.status(200).json(singleCard);
  }
}
