import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onClose, onOpen } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [imgUrl, setImgUrl] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImg(url: string): void {
    setImgUrl(url);
    onOpen();
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={[1, 2, 3]} spacing={['10']}>
        {cards.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={() => handleViewImg(card.url)}
          />
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage imgUrl={imgUrl} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
