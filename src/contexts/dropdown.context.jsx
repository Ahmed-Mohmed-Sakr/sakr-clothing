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

export const DropdownContext = createContext({
  dropdownStatus: false,
  setDropdownStatus: () => {},
  cardItems: [],
  addItemToCard: () => {},
  cardCount: 0,
});

export const DropdownProvider = ({ children }) => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const [cardItems, setCardItems] = useState([]);
  const [cardCount, setCardCount] = useState(0);

  useEffect(() => {
    const newCardCount = cardItems.reduce(
      (total, cardItem) => total + cardItem.quantity,
      0
    );
    setCardCount(newCardCount);
  }, [cardItems]);

  const addItemToCard = (productToAdd) => {
    setCardItems(addCardItem(cardItems, productToAdd));
  };

  const value = {
    dropdownStatus,
    setDropdownStatus,
    addItemToCard,
    cardItems,
    cardCount,
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
