# react 短信营销系统
> `webpack4` 搭建 `react` `antd`开发环境

# react-router4

> `react-router4` 方法使用 [https://reacttraining.com/react-router/web/guides/quick-start]

# webapck4

> `webapck4` [https://webpack.js.org/concepts/]

# antd
> `antd` [https://ant.design/docs/react/introduce-cn]

# mixins
> `mixins` [https://www.npmjs.com/package/babel-plugin-transform-decorators-legacy]


# 项目内容
> 针对 `电商` 和 `运营代理商` 电商多用于对自己店铺的一些短信营销， 运营代理商则多用于售后的增值服务的推广

# 项目优化
> `shouldComponentUpdate`全节点重复渲染问题 [https://github.com/camsong/blog/issues/3]



# 遇到的坑
> `antd` 加载css 上不能加less-loader [https://github.com/ant-design/ant-design/issues/12777]

> `react-hot-loader` 局部热更新代码

> `antd` 使用 `mini-css-extract-plugin` 配合使用了
```javascript
    {
        test: /\.css$/,
        use: [
          {loader: miniCssExtractPlugin.loader},
          {loader: 'css-loader?importLoaders=1'},
        ]
    }

```

> `nginx` 刷新页面404 [https://blog.csdn.net/zjcjava/article/details/78255018?readlog]

# 部署
> `nginx` 做静态文件服务器，开一个8090(由于该机子还跑着其他服务)端口

```nginx
    server {
        listen       8090;
        server_name  _;
        root   /home/sms/;
        index index.html;
        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   /home/sms/;
            try_files $uri $uri/ /index.html last;
            index index.html;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }
```