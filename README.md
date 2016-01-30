# 开眼Eyepetizer非官方桌面站点

## 使用方法：

- 克隆或下载本项目
- 安装依赖``npm install``
- 启动应用``npm start``
- 本地打开``127.0.0.1:8000/app``即可访问


---

##豌豆荚开眼API分析

###视频流API

http://baobab.wandoujia.com/api/v1/feed?num=2

``num=``选择的日期数量；
如：``num=2``，就选择了今天和昨天共2天的视频列表

###视频详情API

http://baobab.wandoujia.com/api/v1/video/2492

``2942``为当前视频ID

###官网视频最近6个视频API

http://baobab.wandoujia.com/api/v1/video/related/2492/?num=6

``2492``为当前视频ID，``6``为相关视频个数

###官网视频详情页面

http://www.wandoujia.com/eyepetizer/detail.html?vid=2492

``2492``为当前视频ID

---

##更新

####2016-1-30
更新视频URL