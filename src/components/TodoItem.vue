<template>
	<div class="todowrapper">
		<button class="removeTodo" v-on:click="removeTodo"></button> {{todo.text}}
	</div>
</template>

<script src="./todoItem.js"></script>
<style src="./todoItem.css"></style>