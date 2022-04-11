<template>
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"
    :class="{'disabled': pagination.has_pre === false}">
      <a class="page-link" href="#" aria-label="Previous"
      @click.prevent="pageChange(pagination.total_page-1)">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item" v-for="(page, index) in pagination.total_pages"
     :key="`${page}+${index}`"
     :class="{'active': page === pagination.current_page}">
     <a class="page-link" href="#"
     @click.prevent="pageChange(page)">{{ page }}</a>
    </li>
    <li class="page-item"
    :class="{'disabled': pagination.has_next === false}">
     <a class="page-link" href="#"
     @click.prevent="pageChange(pagination.total_pages)">Last</a>
    </li>
    <li class="page-item"
    :class="{'disabled': pagination.has_next === false}">
      <a class="page-link" href="#" aria-label="Next"
      @click.prevent="pageChange(pagination.current_page+1)">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  props: ['pagination'],
  methods: {
    pageChange(page) {
      this.$emit('page-change', page);
    },
  },
};
</script>
