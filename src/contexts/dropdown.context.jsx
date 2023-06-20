import { createContext, useState, useEffect } from "react";

const addCardItem = (cardItems, productToAdd) => {
  // find if cardItems conain prodctsToADD
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === productToAdd.id
  );

  // if found , increent quantity
  if (existingCardItem) {
    return cardItems.map((cardItem) =>
      cardItem.id === productToAdd.id
        ? { ...cardItem, quantity: cardItem.quantity + 1 }
        : cardItem
    );
  }

  // return new array with modefied cardItems / new cart item
  return [...cardItems, { ...productToAdd, quantity: 1 }];
};

const removeCardItem = (cardItems, productToRemove) => {
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === productToRemove.id
  );

  if (existingCardItem.quantity === 1) {
    return cardItems.filter((cardItem) => cardItem.id !== productToRemove.id);
  }

  return cardItems.map((cardItem) =>
    cardItem.id === productToRemove.id
      ? { ...cardItem, quantity: cardItem.quantity - 1 }
      : cardItem
  );
};

const deleteCardItem = (cardItems, productToDelete) => {
  return cardItems.filter((cardItem) => cardItem.id !== productToDelete.id);
};

export const DropdownContext = createContext({
  dropdownStatus: false,
  setDropdownStatus: () => {},
  cardItems: [],
  addItemToCard: () => {},
  removeItemFromCard: () => {},
  deleteItemFromCard: () => {},
  cardCount: 0,
  cardTotal: 0,
});

export const DropdownProvider = ({ children }) => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const [cardItems, setCardItems] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [cardTotal, setCardTotal] = useState(0);

  useEffect(() => {
    const newCardCount = cardItems.reduce(
      (total, cardItem) => total + cardItem.quantity,
      0
    );
    setCardCount(newCardCount);
  }, [cardItems]);

  useEffect(() => {
    const newCardTotal = cardItems.reduce(
      (total, cardItem) => total + cardItem.quantity * cardItem.price,
      0
    );
    setCardTotal(newCardTotal);
  }, [cardItems]);

  const addItemToCard = (productToAdd) => {
    setCardItems(addCardItem(cardItems, productToAdd));
  };

  const removeItemFromCard = (productToRemove) => {
    setCardItems(removeCardItem(cardItems, productToRemove));
  };

  const deleteItemFromCard = (productToDelete) => {
    setCardItems(deleteCardItem(cardItems, productToDelete));
  };

  const value = {
    dropdownStatus,
    setDropdownStatus,
    addItemToCard,
    removeItemFromCard,
    deleteItemFromCard,
    cardItems,
    cardCount,
    cardTotal,
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
