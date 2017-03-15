<template>
  <list class="list">
    <cell class="cell" v-for="item in lists">
      <div class="panel">
        <text class="text">{{item.title}}</text>
      </div>
    </cell>
  </list>
</template>

<style>
</style>

<script>
  var stream = weex.requireModule('stream')
  export default {
    data: {
      lists: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    mounted () {
      this.getTopic()
    },
    methods: {
      getTopic () {
        // var xhr = new window.XMLHttpRequest()
        // xhr.open('GET', 'https://cnodejs.org/api/v1/topics', true)
        // xhr.onreadystatechange = () => {
        //   if (xhr.readyState === 4) {
        //     if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        //       try {
        //         var tem = JSON.parse(xhr.responseText)
        //         this.lists = tem.data
        //         console.log(this.lists)
        //       } catch (err) {
        //         console.log(err)
        //       }
        //     } else {
        //       console.log('Request was unsuccessful : ' + xhr.status)
        //     }
        //   }
        // }
        // xhr.send(null)
        // fetch('https://cnodejs.org/api/v1/topics')
        // .then(response => {
        //   return response.json()
        // }).then(data => {
        //   this.lists = data.data
        // }).catch(err => {
        //   console.log(err)
        // })
        return stream.fetch({
          method: 'GET',
          type: 'json',
          url: 'https://cnodejs.org/api/v1/topics'
        }, (res) => {
          this.lists = res.data.data
        })
      }
    }
  }
</script>
