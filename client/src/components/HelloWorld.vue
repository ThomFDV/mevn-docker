<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          class="form-control"
          v-model="userData.name"
        />
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input
          type="number"
          id="age"
          class="form-control"
          v-model="userData.age"
        />
      </div>
      <button @click.prevent="submitted">Create</button>
    </div>
    <div>
      <ul v-for="user in users" :key="user">
        <li>{{ user.name }}</li>
        <li>{{ user.age }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      userData: {
        name: "toto",
        age: 28
      },
      users: []
    };
  },
  methods: {
    submitted: function() {
      axios.post("http://localhost:9000/api/users", {
        name: this.userData.name,
        age: this.userData.age
      });
    }
  },
  mounted() {
    axios.get("http://localhost:9000/api/users").then(res => {
      this.users = res.data;
    });
  }
};
</script>

<style scoped></style>
