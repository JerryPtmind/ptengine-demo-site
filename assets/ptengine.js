// Ptengine 安装代码：把 SID 换成测试户站点设置里的 SID，HOST 按集群选 js.ptengine.com / js.ptengine.jp / js.ptengine.cn
(function () {
  var SID = 'REPLACE_ME';
  var HOST = 'js.ptengine.com';
  if (SID === 'REPLACE_ME') {
    console.warn('[demo] Ptengine SID 未配置，请编辑 assets/ptengine.js');
    return;
  }
  var s = document.createElement('script');
  s.src = 'https://' + HOST + '/' + SID + '.js';
  document.head.appendChild(s);
})();

// 自定义事件小工具：SDK 没加载时静默
window.ptTrack = function (name, props) {
  try {
    if (window.ptengine && typeof window.ptengine.track === 'function') {
      window.ptengine.track(name, props || {});
    } else {
      console.log('[demo] track (SDK 未就绪)', name, props || {});
    }
  } catch (e) {}
};
