<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="taskName">Enter task name:</label>
              <input type="text" class="form-control" id="taskName" v-model="task.taskName">
            </div>
            <div class="form-group">
              <label for="taskPriority">Enter task priority:</label>
              <select class="form-control selectpicker" id="taskPriority" v-model="task.priority">
                <option v-for="priority in priorityList" :key="priority.id">{{priority.value}}</option>
              </select>
            </div>
            <div class="form-group ">
              <label for="taskTags">Enter task tags:</label>
              <tags-input element-id="tags" id="taskTags"
                          v-model="task.tags"
                          :existing-tags="{'1': 'tag1','2': 'tag2','3': 'tag3'}"
                          :typeahead="true">
              </tags-input>
            </div>
            <div class="form-group">
              <label for="taskStatus">Enter task status:</label>
              <input type="text" class="form-control" id="taskStatus" v-model="task.status">
            </div>

          </form>
        </div>
        <pre>{{task}}</pre>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="saveTask">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "modal",
    methods: {
      saveTask() {
        console.log(this.task);
      }
    },
    data() {
      return {
        task: {
          taskName: '',
          priority: {},
          tags: [],
          status: {}
        },
        priorityList: [
          {id: 1, value: "Critical"},
          {id: 2, value: "Normal"},
          {id: 3, value: "Low"},
        ],
      };
    }
  };
</script>
