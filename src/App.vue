<template>
  <div id="app">
    
    <div class="container">
      <h1>{{ msg }}</h1>
    
      <div class="row">
        <div class="col-md-4">
          <h2>Проект</h2>
          <button class="btn btn-success btn-sm mb-2">Add Project</button>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" 
              v-for="project in projectList" :key="project.id" :class="{ active: project.isActive }">
              {{project.name}}
              <span class="badge badge-primary badge-pill">14</span>
            </li>
          </ul>
        </div>
      <div class="col-md-8">
        <h2>Задачи</h2>
        <button class="btn btn-success btn-sm mb-2">Add Task</button>
        <table class="table">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Priotity</th>
              <th>Tags</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task 1</td>
              <td><span class="text-danger">Critical</span></td>
              <td>#tag1, #tag2</td>
              <td>В разработке</td>
            </tr>
            <tr>
              <td>Task 2</td>
              <td><span class="text-success">Normal</span></td>
              <td>#tag1, #tag2</td>
              <td>В разработке</td>
            </tr>
            <tr>
              <td>Task 3</td>
              <td><span class="text-warning">Major</span></td>
              <td>#tag1, #tag2</td>
              <td>Завершено</td>
            </tr>
            <tr>
              <td>Task 4</td>
              <td><span class="text-primary">Low</span></td>
              <td>#tag1, #tag2</td>
              <td>Завершено</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Task Manager",
      projectList:[{id:1,name:"Project 1",isActive: true,},
      {id:2,name:"Project 2",isActive: false},
      {id:3,name:"Project 3",isActive: false},
      {id:4,name:"Project 4",isActive: false},
      {id:5,name:"Project 5",isActive: false}]
    };
  }
};
</script>

<style lang="scss">
</style>
