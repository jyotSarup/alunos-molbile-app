<template>
	<div class="feedbackContainer">
		<q-card class="cardstyle">
			<q-card-section class="cardsection">
				<div class="title">
					Lorem Ipsum
				</div>
				<div class="content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aspernatur veniam eaque laborum repellendus blanditiis temporibus quis unde, nihil distinctio totam dolor.
					<br>
					<br>
					Click <q-item to="/feedback-questions">CONTINUE</q-item> to proceed.
				</div>
			</q-card-section>
		</q-card>
	</div>
</template>

<style>
	.feedbackContainer {
		width: 95%;
		margin: auto;
		padding-top: 2em;
	}

	.cardsection {
		padding: 2em;
		margin-top: 4em;
	}

	.title {
		font-weight: bold;
		text-align: left;
	}

	.content {
		text-align: left;
		margin-top: 10px;
		font-weight: 300;
	}
</style>
