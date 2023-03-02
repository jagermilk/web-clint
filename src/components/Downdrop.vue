<template>
    <div id="content">
    <!--带下拉菜单的导航菜单-->
    <div id="shopmenus">
        <ul id="smenus">
            <!-- 导航菜单项 -->
            <li v-for="item in navlist" :class="item.children? 'hasmenu':''" :key="item.id">
              <router-link :to="{name:item.to? item.to:''}" class="smenu"  >{{item.name}}
                  <i class="el-icon-caret-bottom" style="font-size:10px;" v-if="item.children"></i>
              </router-link>
                <ul class="catalogs" v-if="item.children">
                    <li class="hasmenutwo" v-for="citem in item.children" :key="citem.id">
                      <router-link class="class" :to="{name: citem.to}">{{citem.name}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
      
    </div>

</div>
  </template>
  
  <script >
  export default {
    name:'downdrop',
    data() {
      return {
        navList: [
          {
            id: 1,
            name: 'Home',
            isOpen: false,
            list: [
              {
                id: 11,
                name: 'Home-1'
              },
              {
                id: 12,
                name: 'Home-2'
              },
              {
                id: 13,
                name: 'Home-3'
              }
            ]
          },
          {
            id: 2,
            name: 'About',
            isOpen: false,
            list: [
              {
                id: 21,
                name: 'About-1'
              },
              {
                id: 22,
                name: 'About-2'
              },
              {
                id: 23,
                name: 'About-3'
              }
            ]
          },
          {
            id: 3,
            name: 'Contact',
            isOpen: false,
            list: [
              {
                id: 31,
                name: 'Contact-1'
              },
              {
                id: 32,
                name: 'Contact-2'
              },
              {
                id: 33,
                name: 'Contact-3'
              }
            ]
          }
        ]
      }
    },
    props:['navlist'],
    methods: {
      toggleNav(id) {
        this.navList.forEach(element => {
          if (element.id === id) {
            element.isOpen = !element.isOpen
          }
        })
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>

  /*多级菜单（导航菜单+多级菜单）*/
#shopmenus {
    height: 30px;
    line-height: 30px;
    background-color: rgba(39, 39, 39, 0.81);
    padding:0 15%;
    justify-content: left;
}
#smenus{
  width: 100%;
  i{
    color: orange;
  }

}
#smenus > li {
    position: relative;
    display: inline-block;
    /*兼容IE6、7行内块级元素*/
    *display: inline;;
    *zoom: 1;

}
#smenu:hover  i{
    color: white;
  }
.smenu {
    margin-left: 20px;
    display: block;
    color: white;
    font-size: 15px;
    li{
      height: 20px;
      width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: white;
    line-height: 28px;
    padding: 0 10px;
    }
}

.smenu:hover {
    // background-color: crimson;
}

.hasmenu:hover .catalogs {
    display: block;
    margin-left: 20px;
}

.hasmenu:hover .smenu {
    background-color: white;
    color: black;
}

.hasmenutwo:hover .twocatalog {
    display: block;
}

.catalogs, .twocatalog {
    // position: absolute;
    // background-color: white;
    // display: none;
    z-index: 50;
    display: none;
    position: absolute;
    top: 30px;
    left: 0;
}

.catalogs {
  height: 40px;
    top: 30px;
    left: 0px;
}

.twocatalog {
    top: 0px;
    left: 0px;
}

.class {
    display: block;
    width: 110px;
    height: 30px;
    line-height: 30px;
    color: black;
    padding: 0px;
    margin: 0px;
    text-align: left;
    border: 1px solid #e4e4e4;
    border-top: 0px;
    background-color: #e4e4e4;
    a:hover{
      color: white;
    }
}

.class:hover {
  background-color: orange;
   color: white;



}


  </style>