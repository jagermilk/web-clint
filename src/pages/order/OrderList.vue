<template>
  <div class="order-list">
    <div class="header">
      <!-- 顶部 -->
      <div class="title">我的订单</div>
      <!-- 导航 -->
      <div class="nav">
        <div class="nav-left">
          <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">全部订单</el-menu-item>
            <el-menu-item index="2">未付款</el-menu-item>
            <el-menu-item index="3">待收货</el-menu-item>
            <el-menu-item index="4">已完成</el-menu-item>
          </el-menu>
        </div>
        <div class="search">
          <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear="getUserList">
            <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
          </el-input>
        </div>
      </div>
      <!--表格  -->
      <div class="table" >
        <el-card class="table">
          <el-table :data="tableData" style="width: 100%" row-key="id" border size="mini" :header-cell-style="{
            textAlign: 'center',
            height: '40px'
          }" :row-style="{ height: '60px' }">


            <el-table-column prop="uId" align="center" min-width="190">
              <!-- eslint-disable-next-line -->
              <template slot-scope="scope" slot="header">

                <el-select v-model="colOptions1" collapse-tags size="mini" placeholder="请选择时间">
                  <el-option v-for="item in [{ id: 1, name: '最近一个月' }, { id: 2, name: '最近两个月' }]" :key="item.id" :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column prop="uName" label="商品信息" width="180"> </el-table-column>
            <el-table-column prop="uPwd" label="数量" width="180"> </el-table-column>
            <el-table-column prop="uTel" label="收货人"> </el-table-column>
            <el-table-column prop="rId" label="金额"> </el-table-column>
            <el-table-column prop="status" label="订单状态"> </el-table-column>
            <el-table-column label="操作" width="300px">
              <template slot-scope="{ row }">
                <el-button type="primary" @click="toUpdatePermission(row)">修改</el-button>
                <el-button type="primary" @click="removePermission(row)">删除</el-button>
                <el-button type="primary" @click="toaddPermission(row)">自定义权限</el-button>
              </template>
            </el-table-column>
          </el-table>
          
        </el-card>
      </div>

    </div>
    <div class="line"></div>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="loading"></loading>
          <div class="order" v-for="(order, index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{ order.createTime }}
                <span>|</span>
                {{ order.paymentTypeDesc }}
                <span>|</span>
                订单号：{{ order.orderNo }}
                <span>|</span>
                {{ order.paymentTypeDesc }}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{ order.payment }}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item, i) in order.orderItemVoList" :key="i">
                  <div class="good-img">
                    <img v-lazy="item.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{ item.productName }}</div>
                    <div class="p-money">{{ item.totalPrice + 'X' + item.quantity }}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status == 20">
                <a href="javascript:;">{{ order.statusDesc }}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)">{{ order.statusDesc }}</a>
              </div>
            </div>
          </div>
          <!-- 第一种方法：分页器，elementUI分页 -->
          <!-- <el-pagination v-if="true" class="pagination" background layout="prev, pager, next" :pageSize="pageSize"
            :total="total" @current-change="handleChange">
          </el-pagination> -->
          <!-- 第二种方法：加载更多按钮分页 -->
          <div class="load-more" v-if="false">
            <el-button type="primary" :loading="loading" @click="loadMore">加载更多</el-button>
          </div>
          <!-- 第三种方法：滚动加载，通过npm插件实现 -->
          <!-- <div v-if="false" class="scroll-more" v-infinite-scroll="scrollMore" :infinite-scroll-disabled="busy"
            infinite-scroll-distance="420">
            <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" v-show="loading">
          </div> -->
          <!-- 空数据 -->
          <no-data v-if="!loading && list.length == 0"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Loading from '../../components/Loading.vue';
import NoData from '../../components/NoData.vue';

import infiniteScroll from 'vue-infinite-scroll';
export default {
  name: 'list',
  components: {
    NoData,
    Loading,

  },
  directives: {
    infiniteScroll
  },
  data() {
    return {
      loading: false,
      list: [],
      pageSize: 10,
      pageNum: 1,
      total: 0,
      showNextPage: true, //加载更多：是否显示按钮
      busy: false, //滚动加载，是否触发
      queryInfo: {
        //查询参数
        query: '',
        // 当前页码
        pagenum: 1,
        // 每页显示条数
        pagesize: 2,

      },
      colOptions1: 1,
      tableData: [{
        id: 1,
        Uid: 1,
        uName: '1',
        uPwd: '22',
        uTel: '22',
        rId: '222',
        status: '332'
      }]
    };
  },
  mounted() {
    // this.getOrderList();
  },
  methods: {
    // 获取订单列表
    // getOrderList() {
    //   this.loading = true;
    //   this.busy = true;
    //   this.$api.mall
    //     .getOrderList({
    //       params: {
    //         pageSize: 10,
    //         pageNum: this.pageNum
    //       }
    //     })
    //     .then((res) => {
    //       this.loading = false;
    //       this.list = this.list.concat(res.list);
    //       this.total = res.total;
    //       this.showNextPage = res.hasNextPage;
    //       this.busy = false;
    //     })
    //     .catch(() => {
    //       this.loading = false;
    //     });
    // },
    goPay(orderNo) {
      // 三种路由跳转方式
      // this.$router.push('/order/pay')
      /*this.$router.push({
          name:'order-pay',
          query:{
            orderNo
          }
        })*/
      this.$router.push({
        path: '/order/pay',
        query: {
          orderNo
        }
      });
    },
    // 第一种方法：分页器
    // handleChange(pageNum) {
    //   this.pageNum = pageNum;
    //   this.getOrderList();
    // },
    // 第二种方法：加载更多按钮
    loadMore() {
      this.pageNum++;
      this.getOrderList();
    },
    // 第三种方法：滚动加载，通过npm插件实现
    scrollMore() {
      this.busy = true;
      setTimeout(() => {
        this.pageNum++;
        this.scrollGetList();
      }, 500);
    },
    // 专门给scrollMore使用
    // scrollGetList() {
    //   this.loading = true;
    //   this.$api.mall
    //     .getOrderList({
    //       params: {
    //         pageSize: 10,
    //         pageNum: this.pageNum
    //       }
    //     })
    //     .then((res) => {
    //       this.list = this.list.concat(res.list);
    //       this.loading = false;
    //       if (res.hasNextPage) {
    //         this.busy = false;
    //       } else {
    //         this.busy = true;
    //       }
    //     });
    // },
    // 获取用户列表
    async getUserList() {
      const { data: res } = await this.$http.get('users', { params: this.queryInfo })
      console.log(res)
      if (res.meta.status !== 200) return this.$message.error('获取用户列表失败')
      this.userlist = res.data.users
      this.total = res.data.total
    }
  }
};
</script>
<style lang="scss">
@import '../../assets/scss/config.scss';
@import '../../assets/scss/mixin.scss';

.order-list {
  .wrapper {
    background-color: $colorJ;
    padding-top: 33px;
    padding-bottom: 110px;

    .order-box {
      .order {
        @include border();
        background-color: $colorG;
        margin-bottom: 31px;

        &:last-child {
          margin-bottom: 0;
        }

        .order-title {
          @include height(74px);
          background-color: $colorK;
          padding: 0 43px;
          font-size: 16px;
          color: $colorC;

          .item-info {
            span {
              margin: 0 9px;
            }
          }

          .money {
            font-size: 26px;
            color: $colorB;
          }
        }

        .order-content {
          padding: 0 43px;

          .good-box {
            width: 88%;

            .good-list {
              display: flex;
              align-items: center;
              height: 145px;

              .good-img {
                width: 112px;

                img {
                  width: 100%;
                }
              }

              .good-name {
                font-size: 20px;
                color: $colorB;
              }
            }
          }

          .good-state {
            @include height(145px);
            font-size: 20px;
            color: $colorA;

            a {
              color: $colorA;
            }
          }
        }
      }

      .pagination {
        text-align: right;
      }

      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #ff6600;
      }

      .el-button--primary {
        background-color: #ff6600;
        border-color: #ff6600;
      }

      .load-more,
      .scroll-more {
        text-align: center;
      }
    }
  }
}

.order-list {
  .header {
    display: flex;
    flex-direction: column;

    .title {
      height: 40px;
      line-height: 40px;
      border-left: 10px solid rgb(0, 0, 0);
    }

    .nav {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .nav-list {
        flex: 1;
      }

      .search {
        width: 400px;
      }
    }
  }
}

// 下拉选择时间
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}</style>