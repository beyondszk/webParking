<?php 
namespace app\index\controller;
use think\Controller;
use think\View;
use think\Db;

class Welcome extends Controller
{

	public function index(){
		$res = input();
		$id = $res['id'];


		$date = date('Y-m-d h:i');



		 $data = [
            "name" =>$id,
            "date" =>$date  
         ];

        $this->assign($data);

		return $this->fetch('welcome');
	}


}






 ?>