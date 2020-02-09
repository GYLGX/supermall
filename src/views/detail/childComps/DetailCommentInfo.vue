<template>
  <div class='detail-comment-info'>
    <div class="comment-top">
      <span>用户评论</span>
      <span v-if='Object.keys(commentInfo).length !=0'>更多</span>
    </div>
    <div class="nocomment" v-if='Object.keys(commentInfo).length === 0'>暂无评论</div>
    <div class="comment-body" v-if='Object.keys(commentInfo).length !=0'>
      <div class="logo">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="comment">
        <p>{{commentInfo.content}}</p>
        <p>
          <span class="deta">{{getDate}}</span>
          <span>{{commentInfo.style}}</span>
        </p>
        <p class="comment-img" v-if='commentInfo.images'>
          <img v-for='(item,index) in commentInfo.images' :src="item" alt="">
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    formatDate
  } from "common/utils";
  export default {
    name: 'DetailCommentInfo',
    components: {},
    props: {
      commentInfo: {
        type: Object,
        default: {}
      }
    },
    computed: {
      getDate() {
        let value = this.commentInfo.created
        let date = new Date(value * 1000);
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }

</script>
<style scoped>
  .detail-comment-info {
    padding-bottom: 20px;
    border-bottom: 4px solid rgba(100, 100, 100, .07);
  }

  .nocomment {
    text-align: center;
    margin: 10px;
  }

  .comment-top {
    border-bottom: 1px solid rgba(100, 100, 100, .2);
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #333;
    margin-left: 15px;
    margin-right: 15px;
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
  }

  .comment-top span:last-child::after {
    content: '';
    display: inline-block;
    height: 10px;
    width: 10px;
    border: 1px solid rgba(100, 100, 100, .5);
    border-style: solid solid none none;
    transform: rotate(45deg);
  }

  .comment-body .logo {
    margin: 15px;
    display: flex;
    align-items: center;
  }

  .comment-body .logo img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
  }

  .comment-body .logo span {
    font-size: 14px;
    color: #333;
    margin: 10px;
  }

  .comment-body .comment {
    margin-left: 15px;
    margin-right: 15px;
    font-size: 14px;
  }

  .comment-body .comment p:last-child {
    margin-top: 10px;
  }

  .comment-body .comment span {
    color: rgba(100, 100, 100, .5);
  }

  .deta {
    margin-right: 10px;
  }

  .comment-img {
    display: flex;
  }

  .comment-img img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }

</style>
