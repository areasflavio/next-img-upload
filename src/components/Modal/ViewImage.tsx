import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        background="pGray.900"
        mx="auto"
        w="auto"
        h="auto"
        maxW={['225px', '450px', '900px']}
        maxH={['150px', '300px', '600px']}
      >
        <ModalBody p="0">
          <Image
            src={imgUrl}
            w="max"
            h="max"
            maxW={['225px', '450px', '900px']}
            maxH={['150px', '300px', '600px']}
            objectFit="cover"
            borderTopRadius="md"
          />
        </ModalBody>

        <ModalFooter color="pGray.50" py="0.5rem" px="2.5">
          <Link href={imgUrl} target="_blank" fontSize="smaller" mr="auto">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
