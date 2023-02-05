<template>
    <div>
        <h1>Counter</h1>
        <p>
            This is a counter.
        </p>
        <p>
            <button @click="increment">Increment</button>
            <span>{{ count }}</span>
            <button @click="decrement">Decrement</button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'CounterComponent',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        },
        decrement() {
            if (this.count !== 0) {

                this.count--
            }


        }
    }
}
</script>

