import { ref, reactive } from "@vue/reactivity";

const useColorPicker = () => {
  const colors = reactive(["green", "red", "blue", "purple"]);
  let message = ref("Pick a color...");

  const matchColor = (value) => {
    //do a random color based on the array index;
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (colors[randomNumber] === value) {
      message.value = `You win... [answer: ${colors[randomNumber]}]`;
      return;
    }

    message.value = `You Loose... [answer: ${colors[randomNumber]}]`;
  };

  return { colors, message, matchColor };
};

export default useColorPicker;
