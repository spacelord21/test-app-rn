import { FlashAuto, FlashOff, FlashOn, styled } from "@shared/ui";
import { FlashMode } from "expo-camera";
import { Dispatch, useState, SetStateAction } from "react";
import DropDownPicker, { ItemType } from "react-native-dropdown-picker";

const flashModes: ItemType<FlashMode>[] = [
  {
    value: FlashMode.auto,
    icon: () => <FlashAuto />,
  },
  {
    value: FlashMode.off,
    icon: () => <FlashOff />,
  },
  {
    value: FlashMode.on,
    icon: () => <FlashOn />,
  },
];

const Picker = styled(DropDownPicker)`
  background-color: transparent;
  border: none;
  /* width: 70px; */
`;

const PickerContainer = styled.View`
  /* flex: 1; */
  width: 25px;
`;

type TFlashModeChooseProps = {
  setType: Dispatch<SetStateAction<FlashMode>>;
  type: FlashMode;
};

export const FlashModeChoose = ({ setType, type }: TFlashModeChooseProps) => {
  const [open, setOpen] = useState(false);
  return (
    <PickerContainer>
      <Picker
        showArrowIcon={false}
        dropDownContainerStyle={{
          backgroundColor: "transparent",
          width: 35,
          borderColor: "transparent",
        }}
        showTickIcon={false}
        dropDownDirection={"AUTO"}
        items={flashModes}
        open={open}
        setOpen={setOpen}
        value={type}
        setValue={setType}
        closeAfterSelecting={false}
        closeOnBackPressed={true}
      />
    </PickerContainer>
  );
};
