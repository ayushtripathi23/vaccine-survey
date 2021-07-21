<template>
  <div>
    <div class="container">
      <header class="header">
        <h1 id="title" class="text-center">Covid Survey Form</h1>
        <p id="description" class="description text-center">
          Thank you for taking the time to help
        </p>
      </header>
      <form id="survey-form">
        <div class="form-group">
          <label id="name-label" for="name">Name</label>
          <input
            type="text"
            name="name"
            v-model="form.name"
            id="name"
            class="form-control"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="form-group">
          <label id="email-label" for="email">Email</label>
          <input
            type="email"
            name="email"
            v-model="form.email"
            id="email"
            class="form-control"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div class="form-group">
          <label id="email-label" for="phone">Mobile No.</label>
          <input
            type="number"
            name="phone"
            v-model="form.phone"
            id="phone"
            class="form-control"
            placeholder="Enter your Mobile Number"
            required
          />
        </div>
        <div class="form-group">
          <label id="number-label" for="number"
            >Age
            <!-- <span class="clue">(optional)</span> -->
          </label>
          <input
            type="number"
            name="age"
            id="number"
            v-model="form.age"
            min="10"
            max="99"
            class="form-control"
            placeholder="Age"
          />
        </div>
        <div class="form-group">
          <p>Which option best describes your current role?</p>
          <select
            id="dropdown"
            name="role"
            class="form-control"
            v-model="form.role"
            required
          >
            <option disabled selected value>Select current role</option>
            <option>Student</option>
            <option>Full Time Job</option>
            <option>Full Time Learner</option>
            <option>Bussiness</option>
            <option>Prefer not to say</option>
            <option>Other</option>
          </select>
        </div>

        <div class="form-group">
          <p>Have you done your vaccination?</p>
          <select
            id="most-like"
            name="mostLike"
            class="form-control"
            required
            v-model="form.vaccine"
          >
            <option disabled selected value>Select an option</option>
            <option>Yes</option>
            <option>No</option>
            <option>Scheduled</option>
          </select>
        </div>
        <div class="form-group">
          <p>Which is your's preferable Vaccine?</p>
          <select
            id="most-like"
            name="mostLike"
            class="form-control"
            required
            v-model="form.vaccineType"
          >
            <option disabled selected value>Select an option</option>
            <option>Covi-Shield</option>
            <option>Co-Vaxin</option>
            <option>Other</option>
          </select>
        </div>

        <div class="form-group">
          <p>Any comments or suggestions?</p>
          <textarea
            id="comments"
            v-model="form.comment"
            class="input-textarea"
            name="comment"
            placeholder="Enter your comment here..."
          ></textarea>
        </div>

        <div class="form-group">
          <button
            type="submit"
            id="submit"
            class="submit-button"
            @click="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from "../firebaseConfig";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        age: "",
        phone: "",
        vaccine: "",
        role: "",
        vaccineType: "",
        comment: "",
      },
    };
  },
  methods: {
    onChange(event) {
      var data = event.target.value;
      this.vaccine = data;
      console.log(this.vaccine, data);
    },
    submit(e) {
      e.preventDefault();
      console.log("form data", this.form);
      db.collection("Form")
        .add(this.form)
        .then((doc) => {
          console.log("Document successfully written!");
          console.log(doc.id);
          this.proId = doc.id;
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:200i,400&display=swap");

:root {
  --color-white: #f3f3f3;
  --color-darkblue: #1b1b32;
  --color-darkblue-alpha: rgba(27, 27, 50, 0.8);
  --color-green: #37af65;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4;
  color: #f3f3f3;
  margin: 0;
}

/* mobile friendly alternative to using background-attachment: fixed */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: #1b1b32;
  background-image: linear-gradient(
      115deg,
      rgba(58, 58, 158, 0.8),
      rgba(136, 136, 206, 0.7)
    ),
    url(https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

h1 {
  font-weight: 400;
  line-height: 1.2;
}

p {
  font-size: 1.125rem;
}

h1,
p {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

label {
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

input,
button,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button {
  border: none;
}

.container {
  width: 100%;
  margin: 3.125rem auto 0 auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

.header {
  padding: 0 0.625rem;
  margin-bottom: 1.875rem;
}

.description {
  font-style: italic;
  font-weight: 200;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
}

.clue {
  margin-left: 0.25rem;
  font-size: 0.9rem;
  color: #e4e4e4;
}

.text-center {
  text-align: center;
}

/* form */

form {
  background: rgba(27, 27, 50, 0.8);
  padding: 2.5rem 0.625rem;
  border-radius: 0.25rem;
}

@media (min-width: 480px) {
  form {
    padding: 2.5rem;
  }
}

.form-group {
  margin: 0 auto 1.25rem auto;
  padding: 0.25rem;
}

.form-control {
  display: block;
  width: 100%;
  height: 2.375rem;
  padding: 0.375rem 0.75rem;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.input-radio,
.input-checkbox {
  display: inline-block;
  margin-right: 0.625rem;
  min-height: 1.25rem;
  min-width: 1.25rem;
}

.input-textarea {
  min-height: 120px;
  width: 100%;
  padding: 0.625rem;
  resize: vertical;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background: #37af65;
  color: inherit;
  border-radius: 2px;
  cursor: pointer;
}
</style>