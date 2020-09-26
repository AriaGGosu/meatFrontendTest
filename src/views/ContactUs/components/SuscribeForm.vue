<template>
  <div class="form-container">
    <form id="suscribe-form">
      <div class="form-row">
        <div
          v-for="(input, i) in inputsData"
          :key="i"
          class="col-12 col-lg-6 input-container"
        >
          <label :for="input.id">{{ input.name }}</label>
          <input
            @keyup="setValue(input.model, input.id)"
            :type="input.type"
            class="form-control"
            :id="input.id"
            :placeholder="input.placeholder"
            required
          />
          <div
            v-if="!inputsValidations[input.model] && validated"
            class="text-validator"
          >
            {{ input.textValidator }}
          </div>
        </div>
      </div>
      <div class="submit-button-container">
        <button @click="postRequest" class="btn form-button">
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>

<script>

import InputsData from "./InputsData"
export default {
  data() {
    return {
      totalFields: 4,
      validated: false,
      inputsValidations: {
        name: null,
        lastName: null,
        mail: null,
        phoneNumber: null,
      },
      inputsValues: {
        name: "",
        lastName: "",
        mail: "",
        phoneNumber: "",
      },
      inputsData: InputsData,
      nameRegx: /[a-zA-Z]+$/i,
      mailRegx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      chileanPhoneRegx: /\D*([+56]\d [2-9])(\D)(\d{4})(\D)(\d{4})\D*/g,
      onlyNumberRegx: /^\d{9}$/,
    };
  },
  methods: {
    setValue(model, id) {
      const data = document.getElementById(id).value;
      this.inputsValues[model] = data;
      this.formValidations();
    },
    namesValidation(model) {
      this.inputsValidations[model] = this.nameRegx.test(
        this.inputsValues[model]
      );
    },
    emailValidation(model) {
      this.inputsValidations[model] = this.mailRegx.test(
        this.inputsValues[model]
      );
    },
    phoneValidation(model) {
      this.inputsValidations[model] = this.onlyNumberRegx.test(
        this.inputsValues[model]
      );
    },
    formValidations() {
      this.namesValidation("name");
      this.namesValidation("lastName");
      this.emailValidation("mail");
      this.phoneValidation("phoneNumber");
    },
    cuantityOfValidatedFields() {
      let arr = [];
      Object.keys(this.inputsValidations).map((key) => {
        arr.push(this.inputsValidations[key]);
      });

      let validateFields = 0;
      arr.find((e) => {
        e == false ? validateFields : validateFields++;
      });
      return validateFields;
    },
    setValidated() {
      this.validated = true;
    },
    postValidation() {
      this.formValidations();
      this.setValidated();
    },
    postRequest() {
      this.setFormEventPreventDefault();
      this.postValidation();
      this.sendRequestValidation();
    },
    setFormEventPreventDefault() {
      document
        .getElementById("suscribe-form")
        .addEventListener("click", function(event) {
          event.preventDefault();
        });
    },
    sendRequestValidation() {
      this.cuantityOfValidatedFields() == 4 ? console.log("post method" , this.inputsValues) : console.log("no method");
    },
  },
};
</script>

<style scoped>
.form-container {
  padding: 0 20%;
}

.input-container {
  margin: 10px 0;
}

.text-validator {
  color: #ff4757;
}

.form-button {
  background: #d8ad3d;
  color: #fff;
  width: 150px;
  border-radius: 20px;
}

.form-button:hover {
  background: #009cd9;
}

.submit-button-container {
  width: 100%;
  text-align: end;
  margin: 30px 0 50px;
}
</style>
