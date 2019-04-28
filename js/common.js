  function getUrlParam(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
      var r = window.location.search.substr(1).match(reg); //匹配目标参数
      if (r != null) {
          return unescape(r[2])
      } else {
          return null; //返回参数值
      }
  }

  //遍历数组，根据字符串的值得到索引
  function isExist(arr, val) {
      if (arr.length == 0) {
          return -1;
      }
      for (var i = 0; i < arr.length; i++) {
          if (val == arr[i])
              return i;
      }
      return -1;
  }

  function removeByValue(arr, val) {
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] == val) {
              arr.splice(i, 1);
              return 0;
          }
      }
      return -1;
  }