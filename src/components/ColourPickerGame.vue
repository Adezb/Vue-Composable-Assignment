<template>
    <h1>Colour Picker Game</h1>

    <div class="msg">{{ message }}</div>

    <button class="btn" v-for="color in colors" :key="color" @click="matchColor(color)">{{ color }}</button>

</template>

<script>
import useColorPicker from '@/composable/color-picker';

export default {
    name: 'ColourPickerGame',

    setup() {
        const { colors, message, matchColor } = useColorPicker();

        return {
            message,
            colors,
            matchColor
        }

    }


}

</script>

<style>
.msg {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}

.btn {
    background-color: #adb1ad;
    border: none;
    border-radius: 5px;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-transform: capitalize;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>