<template>
	<div class="feedbackcontainer">
		<q-card class="cardstyle">
			<q-card-section class="cardsection">
				<div class="title">
					Lorem Ipsum
				</div>
				<div class="content">
					Thank you for taking part in the survey. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati reiciendis deleniti eos, optio iusto odio animi accusamus.
				</div>
			</q-card-section>
		</q-card>
		<q-form class="feedback-form">
			<div class="questionSection">
				<p><span class="asterisk">*</span> Required</p>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit? <span class="asterisk">*</span></p>
				<q-radio v-model="selection" val="option1" label="Option" />
				<br>
				<q-radio v-model="selection" val="option2" label="Option" />
				<br>
				<q-radio v-model="selection" val="option3" label="Option" />
				<br>
				<q-radio v-model="selection" val="option4" label="Option" />
				<hr>
			</div>
			<div class="questionSection">
				<p><span class="asterisk">*</span> Required</p>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit? <span class="asterisk">*</span></p>
				<q-radio v-model="selection" val="option1" label="Option" />
				<br>
				<q-radio v-model="selection" val="option2" label="Option" />
				<br>
				<q-radio v-model="selection" val="option3" label="Option" />
				<br>
				<q-radio v-model="selection" val="option4" label="Option" />
				<hr>
			</div>
			<div class="questionSection">
				<p><span class="asterisk">*</span> Required</p>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit? <span class="asterisk">*</span></p>
				<q-radio v-model="selection" val="option1" label="Option" />
				<br>
				<q-radio v-model="selection" val="option2" label="Option" />
				<br>
				<q-radio v-model="selection" val="option3" label="Option" />
				<br>
				<q-radio v-model="selection" val="option4" label="Option" />
				<hr>
			</div>
			<q-btn
				unelevated
				rounded
				class="q-pa-sm submitBtn"
				color="positive"
				label="Submit"
				type="submit"
			/>
		</q-form>
	</div>
</template>

<style>
	.feedbackcontainer {
		width: 100%;
		margin: auto;
	}

	.cardstyle {
		z-index: -2;
		border-radius: 0px 0px 0px 90px;
	}

	.cardsection {
		padding-top: 5em;
	}

	.title {
		font-weight: bold;
		text-align: left;
		font-size: 1.6em;
		padding: 0 0.6em;
	}

	.questionSection {
		padding: 20px;
	}

	.content {
		text-align: left;
		margin-top: 10px;
		font-weight: 300;
		padding: 1em 1em 3em 1em;
	}

	.asterisk {
		color: red;
	}

	.submitBtn {
		width: 80%;
		margin-bottom: 3em;
	}

	.feedback-form {
		text-align: center;
	}

	.feedback-form div {
		text-align: left;
	}
</style>

<script>
	import { QRadio } from 'quasar';

	export default {
		name: "FeedbackMain",
		data() {
			return {
				selection: 'ellipse'
			};
		},
		components: {
			QRadio
		}
	};
</script>