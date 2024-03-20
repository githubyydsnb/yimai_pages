
### 文件夹说明:
# pages:存放静态页面
    login:登陆注册页
    index:首页
# js:存放外部js资源
# node_modules:element-ui组件库依赖
# api:存放发起请求的函数
# css:存放css样式表
# utils:工具包
    request.js:二次封装axios
hhhhhh
# 修改监听端口号为:5173
![alt text](image.png)
# 配置静态资源路径
    ![alt text](image-1.png)
    location /api {
		alias html/yimai_pages/api;
		}
		location /yimai {
			alias html/yimai_pages/pages;
		}
		    location /css {
            alias html/yimai_pages/css;
        }
        
        location /images {
            alias html/yimai_pages/images;
        }
        
        location /js {
            alias html/yimai_pages/js;
        }
        
        location /util {
            alias html/yimai_pages/util;
        }
 # 配置动态资源访问路径(解决跨域)
 ![alt text](image-2.png)
 	location /nginx/ {
			proxy_pass http://localhost:8080/;
		}


Brand === 品牌分类页面
BuyCar === 购物车 
category === 全部商品分类 
member === 后台管理中心 
Member_Cash === 申请提现 
Member_Collect === 我的收藏
Member_Commission === 我的佣金 
Member_Links === 分成明细 
Member_Member === 我的会员 
Member_Member_List === 会员等级名单 M
ember_Money === 会员余额 
Member_Money_Charge === 会员充值 
Member_Money_Pay === 会员支付页面 
Member_Msg === 我的留言 
Member_Order === 我的订单
Member_Packet === 我的红包 
Member_Results ==== 我的业绩 
Member_Safe === 修改用户信息 
Member_User === 用户信息详情 
product === 商品详情页 
sell === 商品特卖页面