<?php
namespace app\index\controller;

use think\Controller;
use think\View;
use think\Db;

class Arole extends Controller
{	




	private  $obj;


    public function _initialize() {


        $this->obj = model('User');


    }





	public function  index(){

		$res = $this->obj
            ->where('phoneno','>', 0)
            ->paginate('50',50);


        /*dump($res);
        exit();*/


        $this->assign('names',$res);


		return $this->fetch('arole');
	}

	public function aedit(){


		return $this->fetch('aedit');

		
	}

	public function add(){


		 $res = input();
         
         
		 /*dump($res);
         exit();*/



         $res2 = [
            "name" => $res["username"],
            "phoneno" => $res["phone"],
            ];
       
        Db::name('user')->insert($res2);

        //$this->obj->add($res2);

        return $this->success('成功了');
		

        

	}


	public function update(){
		$res = input('get.');
        $res1 = $res['phoneno'];

		

		$res2 = $this->obj->where('phoneno','=',$res1)->find();

        /*dump($res2);
		exit();*/

        $data = [
            "id" => $res2["id"],
            'phoneno' => $res2["phoneno"],
            "name" => $res2["name"],
        ];


        $this->assign($data);



		return $this->fetch('aeditup');
	}
	public function update2(){


		 $res = input();
         //$res8 = date("Y-m-d H:i:s");
         
         /*dump($res);
         exit();*/


         $posno = $res['id'];

         $res2 = [
            
            "phoneno" => $res["phone"],
            "name" => $res["username"],
            
            ];
       /* dump($res2);
        exit();*/
        //Db::name('pos')->where('posno' = $)->update($res2);

        Db::name('user')->where('phoneno',$posno)->update($res2);

         return $this->success('修改成功,请刷新重看');



	}
	public function del(){



		$res = input('get.');


        $id = $res['id'];

        $result = Db::table('user')->where('phoneno',$id)->delete();

        return $result ? 1 : 0 ;


	}

}


?>

