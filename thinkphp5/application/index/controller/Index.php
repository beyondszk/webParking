<?php
namespace app\index\controller;

use think\Controller;
use think\View;

class Index extends Controller
{	


	private  $obj;


    public function _initialize() {
        $this->obj = model('Admin');
    }


    public function index()
    {
        //return '<style type="text/css">*{ padding: 0; margin: 0; } .think_default_text{ padding: 4px 48px;} a{color:#2E5CD5;cursor: pointer;text-decoration: none} a:hover{text-decoration:underline; } body{ background: #fff; font-family: "Century Gothic","Microsoft yahei"; color: #333;font-size:18px} h1{ font-size: 100px; font-weight: normal; margin-bottom: 12px; } p{ line-height: 1.6em; font-size: 42px }</style><div style="padding: 24px 48px;"> <h1>:)</h1><p> ThinkPHP V5<br/><span style="font-size:30px">十年磨一剑 - 为API开发设计的高性能框架</span></p><span style="font-size:22px;">[ V5.0 版本由 <a href="http://www.qiniu.com" target="qiniu">七牛云</a> 独家赞助发布 ]</span></div><script type="text/javascript" src="http://tajs.qq.com/stats?sId=9347272" charset="UTF-8"></script><script type="text/javascript" src="http://ad.topthink.com/Public/static/client.js"></script><thinkad id="ad_bd568ce7058a1091"></thinkad>';
        $view = new View();
        return $view->fetch('index');

    }
   
    public function checkLogin(){

    	$res = input('post.');


    	$res2 = $this->obj->getUserByUsername($res['username']);
    	$password = $res2['phoneno'];
    	
    	// dump($res);
    	// exit();
    	if ($res2['pname'] == null ){

    		
    		$this->error('您输入的账户不存在，请重新输入您的账户');
    		
    	}elseif ($password != $res['password']) {
    		# code...
    		$this->error("您输入的密码不正确");
    	}elseif ($res['password'] == null) {

    		$this->error("您输入的密码为空");
    		
    	}elseif ($password == $res['password'] && $res2['pname'] == $res['username'] ) {

    		//$this->success('登录成功','index/login');
        





            $data = [
            "pname" => $res2["pname"],
            ];    
    		$this->assign($data);
    		return $this->fetch('login');
    		
    	}
    	



        
        
    }
}
