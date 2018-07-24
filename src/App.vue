<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <h1>{{ msg }}</h1>

      <div class="row">
        <!-- <div class="col-md-4">
          <h2>Проект</h2>
          <button class="btn btn-success btn-sm mb-2">Add Project</button>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center"
              v-for="project in projectList" :key="project.id" :class="{ active: project.isActive }">
              {{project.name}}
              <span class="badge badge-primary badge-pill">14</span>
            </li>
          </ul>
        </div> -->
        <div class="col-md-8">
          <h2>Задачи</h2>
          <button id="addTask" class="btn btn-success btn-sm mb-2" data-toggle="modal" data-target="#exampleModal">Add
            Task
          </button>
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
            <tr v-for="task in taskList" :key="task.id">
              <td>{{task.taskName}}</td>
              <td><span :class="priority(task.priority)">{{task.priority.value}}</span></td>
              <td>
				  <span v-for="(tag,i) in task.tags" :key="tag.id">
                	<span>{{ (i > 0 ? ', ' : '') }}</span>
   					<span class="text-nowrap">{{ tag.value }}</span>
				</span>
              </td>
              <td>{{task.status.value}}</td>
            </tr>
            </tbody>
          </table>
          <Modal />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Navbar from './components/Navbar.vue';
  import Modal from './components/Modal.vue';

  export default {
    name: "app",
    components: {Navbar, Modal},
    methods: {
      priority: function (priority) {
        switch (priority.value) {
          case "Critical":
            return "text-danger";
          case "Normal":
            return "text-warning";
          case "Low":
            return "text-success";
        }
      }
    },
    data() {
      return {
        msg: "Welcome to Task Manager",
        priorityList: [
          {id: 1, value: "Critical"},
          {id: 2, value: "Normal"},
          {id: 3, value: "Low"},
        ],
        taskList: [
          {
            id: 1,
            taskName: "Task 1",
            priority: {id: 1, value: "Critical"},
            tags: [{id: 1, value: "tag1"}],
            status: {id: 1, value: "In Progress"}
          },
          {
            id: 2,
            taskName: "Task 2",
            priority: {id: 2, value: "Normal"},
            tags: [{id: 1, value: "tag1"}, {id: 2, value: "tag2"}],
            status: {id: 2, value: "Completed"}
          }
          ,
          {
            id: 3,
            taskName: "Task 3",
            priority: {id: 3, value: "Low"},
            tags: [{id: 1, value: "tag1"}, {id: 2, value: "tag2"}, {id: 3, value: "tag3"}],
            status: {id: 2, value: "Completed"}
          }
        ]
      };
    }
  };
</script>

