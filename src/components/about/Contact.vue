<template>
  <div id="Contact" class="mt-5">
    <div class="card text-center mt-5">
      <div class="card-header text-light bg-dark">木屋披萨小店</div>
      <div class="card-body">
        <h5 class="card-title">欢迎光临木屋披萨a(✪ω✪)</h5>
        <p class="card-text ">如果您有什么意见或建议，请联系我们a(^_−)☆</p>
        <router-link to="/about/addr" class="btn btn-primary">联系地址</router-link>
        <router-link to="/about/person" class="btn btn-primary">法人代表</router-link>
        <router-link to="/about/tel" class="btn btn-primary">公司电话</router-link>
      </div>
      <h4><router-view></router-view> <span class="badge badge-secondary text-warning bg-success">期待您的意见</span></h4>
      <div class="card-footer text-muted text-light bg-dark">15 天前</div>
    </div>
  </div>
</template>

<script>
name: "Contact";
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
