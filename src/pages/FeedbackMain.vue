<template>
	<div class="feedbackcontainer">
		<q-card class="cardstyle">
			<q-card-section class="cardsection">
				<div class="title">
					Homestay Feedback Survey
				</div>
				<div class="content">
					Thank you for taking part in the survey.
				</div>
			</q-card-section>
		</q-card>
		<q-form class="feedback-form">
			<div class="questionSection">
				<p><span class="asterisk">*</span> Required</p>
				<p>Were you satisfied with the food provided by the host family? <span class="asterisk">*</span></p>
				<q-radio v-model="selection" val="es" label="Extremely Satisfied" />
				<br>
				<q-radio v-model="selection" val="s" label="Satisfied" />
				<br>
				<q-radio v-model="selection" val="d" label="Dissatisfied" />
				<br>
				<q-radio v-model="selection" val="ed" label="Extremely Dissastisfied" />
				<br>
				<q-radio v-model="selection" val="na" label="Not Applicable" />
				<hr>
			</div>
			<div class="questionSection">
				<p>Was it easy to interact with the family? <span class="asterisk">*</span></p>
				<q-radio v-model="selection" val="yes" label="Yes" />
				<br>
				<q-radio v-model="selection" val="no" label="No" />
				<hr>
			</div>
			<div class="questionSection">
				<p>Were you comforted and welcomed by the host? <span class="asterisk">*</span></p>
				<q-radio v-model="selection" val="yes" label="Yes" />
				<br>
				<q-radio v-model="selection" val="no" label="No" />
				<hr>
			</div>
			<div class="questionSection">
				<p>Were the house and the room clean? <span class="asterisk">*</span></p>
				<q-radio v-model="selection" val="yes" label="Yes" />
				<br>
				<q-radio v-model="selection" val="no" label="No" />
				<hr>
			</div>
			<div class="questionSection">
				<p>Did you get to learn about the new culture or languages? <span class="asterisk">*</span></p>
				<q-radio v-model="selection" val="yes" label="Yes" />
				<br>
				<q-radio v-model="selection" val="no" label="No" />
				<hr>
			</div>
			<div class="questionSection">
				<p>Was it easy to contact the family, in case of a problem? <span class="asterisk">*</span></p>
				<q-radio v-model="selection" val="yes" label="Yes" />
				<br>
				<q-radio v-model="selection" val="no" label="No" />
				<hr>
			</div>
			<div class="questionSection">
				<p>Was an action taken to solve the problem? <span class="asterisk">*</span></p>
				<q-radio v-model="selection" val="yes" label="Yes" />
				<br>
				<q-radio v-model="selection" val="no" label="No" />
				<hr>
			</div>
			<div class="questionSection">
				<p>Were you able to study in a quiet and peaceful environment? <span class="asterisk">*</span></p>
				<q-radio v-model="selection" val="yes" label="Yes" />
				<br>
				<q-radio v-model="selection" val="no" label="No" />
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