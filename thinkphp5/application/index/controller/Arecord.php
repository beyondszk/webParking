<?php
namespace app\index\controller;

use think\Controller;
use think\View;
use think\Db;

class Arecord extends Controller
{	



	private  $obj;


    public function _initialize() {


        $this->obj = model('Orders');


    }
	public function  index(){




		// $res2 = $this->obj
  //           ->where('ordersno','>', 0)
  //           ->paginate('50',50);
  //           <th>手机号</th>
            // <th>订单号</th>
            // <th>停车时长</th>
            // <th>车牌号</th>
            // <th>车位号</th>
            // <th>订单金额</th>
  //           
        $res2 = Db::name('user')->alias('u')
                                  ->join('car','car.name = u.name')
                                  ->join('orders ','orders.carno = car.carno')
                                  ->join('pos','pos.carno = orders.carno')
                                  ->select();




        $a = $res2[0]["intime" ];
        $b = $res2[0]["outtime"];                       
        $postime = strtotime($b) - strtotime($a);
        $postime =round($postime/3600,2); 

        // echo ($postime);
        // //dump($res2);
        // exit;
        $res2[0]["postime"] = $postime;
        // dump($res2[0]["postime"]);
        // exit;
            
            $res3 = [
                    
                 
                    "phoneno" => $res2[0]["phoneno"],
                    "carno" => $res2[0]["carno"],
                    "ordersno" => $res2[0]["ordersno"],
                    "postime" => $postime,
                    "ordermoney" => $res2[0]["ordermoney"],
                    "posno" => $res2[0]["posno"]
                
                   
           
            ];


           // dump($res2);
           // exit;

            
           
       
        //$this->assign('names',$res2);
        $this->assign('names',$res2);
        
		return $this->fetch('arecord');
	}

}


?>

