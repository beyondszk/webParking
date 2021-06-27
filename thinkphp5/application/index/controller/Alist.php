<?php
namespace app\index\controller;

use think\Controller;
use think\View;
use think\Db;

class Alist extends Controller
{	

	private  $obj;


    public function _initialize() {


        $this->obj = model('Pos');


    }


	public function  index(){


		$res = $this->obj
            ->where('posno','>', 0)
            ->paginate('50',50);


        //$page1 = $res->render();


        /*var_dump($res);
        exit();*/


        $this->assign('names',$res);
        


		return $this->fetch('alist');
	}

	public function aedit(){


		return $this->fetch('aedit');
	}

	public function add(){

		 $res = input('post.');
         //$res8 = date("Y-m-d H:i:s");
         

         $res2 = [
            "posno" => $res["posno"],
            "posdes" => $res["posdes"],
            "posboolean" => $res["posboolean"],
            
           
            ];
      
        Db::name('pos')->insert($res2);

        

        return $this->success('成功了');
		

        

	}

	public function update(){
		$res = input('get.');
        $res1 = $res['posno'];

		

		$res2 = $this->obj->where('posno','=',$res1)->find();

        /*dump($res2);
		exit();
*/
        $data = [
            "posno" => $res2["posno"],
            'posdes' => $res2["posdes"],
            "posboolean" => $res2["posboolean"],
            
        ];


        $this->assign($data);



		return $this->fetch('aeditup');
	}
	public function update2(){


		 $res = input();
         //$res8 = date("Y-m-d H:i:s");
         
         /*dump($res);
         exit();

*/
         $posno = $res['id'];

         $res2 = [
            "posno" => $res["posno"],
            
            "posdes" => $res["posdes"],
           
            "posboolean" => $res["posboolean"],
            ];
     
        Db::name('pos')->where('posno',$posno)->update($res2);

         return $this->success('修改成功,请刷新重看');



	}
	public function del(){



		$res = input('get.');


        $id = $res['id'];

        $result = Db::table('pos')->where('posno',$id)->delete();

        return $result ? 1 : 0 ;


	}

}


?>