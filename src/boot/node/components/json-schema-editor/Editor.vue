<template>
  <q-page class="flex flex-center">
    <h3>Editor</h3>
    <h3>Add form element</h3>
    <select size="3" v-model='inputType' @click="addFormElement(inputType)">
        <option value="text">Text</option>
        <option value="checkbox">Checkbox</option>
        <option value="radio">Radio</option>
    </select>

    <form-input v-for="field in fields" v-bind:key="field" :field="field"></form-input>

  </q-page>
</template>

<script>
export default {
  name: 'Editor-schema',
  data: function () {
    return {
      fields: [],
      field: '',
      inputType: '',
      count: 0
    }
  },
  methods: {
    addFormElement (val) {
      this.fields.push({ type: val, placeholder: 'Textbox ' + (++this.count) })
    }
  }
}
</script>

<template id="form-input">
  <div>
    <label>{{ field.type }}</label>
    <input :type="field.type" />
  </div>
</template>
