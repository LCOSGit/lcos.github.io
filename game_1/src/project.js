window.__require=function e(i,t,o){function c(r,n){if(!t[r]){if(!i[r]){var h=r.split("/");if(h=h[h.length-1],!i[h]){var a="function"==typeof __require&&__require;if(!n&&a)return a(h,!0);if(s)return s(h,!0);throw new Error("Cannot find module '"+r+"'")}}var d=t[r]={exports:{}};i[r][0].call(d.exports,function(e){return c(i[r][1][e]||e)},d,d.exports,e,i,t,o)}return t[r].exports}for(var s="function"==typeof __require&&__require,r=0;r<o.length;r++)c(o[r]);return c}({game:[function(e,i,t){"use strict";cc._RF.push(i,"51c3bk7itdKTKyNGMd/hjVD","game"),cc.Class({extends:cc.Component,properties:{scoreLabel:cc.Label,playerNode:cc.Node,ememyNode:cc.Node,boomNode:cc.Node},onLoad:function(){this.score=0,this.placePlayer(),this.placeEnemy(),this.node.on("touchstart",this.fire,this)},update:function(e){var i=this;this.playerNode.position.sub(this.ememyNode.position).mag()<this.playerNode.width/2+this.ememyNode.width/2&&(this.ememyNode.active=!1,this.boom(this.ememyNode.position,this.ememyNode.color),this.scoreLabel.string=++this.score,this.score>3&&(this.scoreLabel.string="\u5143\u65e6\u5feb\u4e50\uff01",setTimeout(function(){i.scoreLabel.string=i.score},1e3)),this.playerNode.stopAction(this.playerAction),this.ememyNode.stopAction(this.enemyAction),this.placePlayer(),this.placeEnemy())},onDestroy:function(){this.node.off("touchstart",this.fire,this)},placeEnemy:function(){this.ememyNode.active=!0;var e=cc.winSize.width/2-this.ememyNode.width/2,i=Math.random()*cc.winSize.height/4,t=.6+.5*Math.random();this.ememyNode.x=0,this.ememyNode.y=80+this.ememyNode.height/2;var o=cc.repeatForever(cc.sequence(cc.moveTo(t,-e,i),cc.moveTo(t,e,i)));this.enemyAction=this.ememyNode.runAction(o)},placePlayer:function(){var e=this;this.playerNode.active=!0,this.isFire=!1,this.playerNode.y=-cc.winSize.height/4;var i=cc.sequence(cc.moveTo(10,cc.v2(this.playerNode.x,-(cc.winSize.height/2-this.playerNode.height))),cc.callFunc(function(){e.die()}));this.playerAction=this.playerNode.runAction(i)},fire:function(){var e=this;if(!this.isFire){this.isFire=!0,console.log("\u53d1\u5c04\u5f00\u59cb");var i=cc.sequence(cc.moveTo(1,cc.v2(0,cc.winSize.height/2)),cc.callFunc(function(){e.die()}));this.playerAction=this.playerNode.runAction(i)}},die:function(){this.playerNode.active=!1,this.boom(this.playerNode.position,this.playerNode.color),setTimeout(function(){cc.director.loadScene("game")},1e3)},boom:function(e,i){this.boomNode.setPosition(e);var t=this.boomNode.getComponent(cc.ParticleSystem);void 0!==i&&(t.startColor=t.endColor=i),t.resetSystem()}}),cc._RF.pop()},{}]},{},["game"]);