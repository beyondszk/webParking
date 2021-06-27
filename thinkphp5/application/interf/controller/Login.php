<?php
namespace app\interf\controller;

use think\Controller;
use think\View;
use think\Db;

class Login extends Controller
{	

	public function login(){


		$res = input('post.');
		$name = $res['name'];
		$phone = $res["phone"];
        $ca = $res["ca"];
        $carno = $res["carno"];
		
		
		
        $res2 = [
            "name" => $name,
            "phoneno" => $phone,
            
            ];
        $res3= [
        	"name" => $name,
            "cartype" => $ca,
            "carno" => $carno,
            ];
      
        Db::name('user')->insert($res2);
        Db::name('car')->insert($res3);



		//return $res2;
		return 'success';

	}


	public function chelist(){

		$res = input('post.');
		$name = $res['name'];
		//$name = "沈坤坤";


		 $res2 = Db::name('car')->alias('c')
                                  ->join('orders ','orders.carno = c.carno')
                                  ->join('pos','pos.carno = orders.carno')
                                  ->where('c.name',$name)
                                  ->select();


        // dump($res2);
        // exit;

        $a = $res2[0]["intime" ];
        $b = $res2[0]["outtime"];                       
        $postime = strtotime($b) - strtotime($a);
        $postime =round($postime/3600,2);
        $res2[0]["postime"] = $postime;
            
        $res3 = [
                    
                 
                    
                    "carno" => $res2[0]["carno"],
                    "ordersno" => $res2[0]["ordersno"],
                    "postime" => $postime,
                    "ordermoney" => $res2[0]["ordermoney"],
                    "posdes" => $res2[0]["posdes"]
                
                   
           
            ];
               
		 
        return json_encode($res2);;
	}


	public function chelist2(){

		$res = input('post.');
		$name = $res['name'];
		


		 $res2 = Db::name('car')->alias('c')
                                  ->join('orders ','orders.carno = c.carno')
                                  ->join('pos','pos.carno = orders.carno')
                                  ->where('c.name',$name)
                                  ->select();


        // dump($res2);
        // exit;

        $a = $res2[0]["intime" ];
        $b = $res2[0]["outtime"];                       
        $postime = strtotime($b) - strtotime($a);
        $postime =round($postime/3600,2);
        $res2[0]["postime"] = $postime;
               
		 
        return json_encode($res2);;
	}


	public function login2(){


		$res = input('post.');
		//$name = $res['name'];
		$name = $res['name'];
		$posno  = $res['posno'];


		$res2 = Db::name('car')->alias('c')
                               ->join('user','user.name = c.name')
                               ->where('c.name',$name)
                               ->select();
		


		

		
   
    
   		  $carno   = $res2[0]['carno'];
          $phoneno = $res2[0]['phoneno'];

          $res3 = [
            
            'carno' => $carno,
            "posboolean" => '1',
            
            ];

         Db::name('pos')->where('posno',$posno)->update($res3);

         	$ordersno = rand(1000000, 9999999);
         	$intime = date('Y-m-d h:i:s', time());

		    $data = [
			  'carno' => $carno ,
			  'ordersno' => $ordersno ,
			  'intime' => $intime,
			  'boolean' => 0
			];
         Db::name('orders')->insert($data);


         
		



		return 'sdfad';

	}
	public function login3(){


		$res = input('post.');
		$name = $res['name'];


		//$name = '坤';


		$res2 = Db::name('car')->alias('c')
                               ->join('user','user.name = c.name')
                               ->where('c.name',$name)
                               ->select();
		


		

		
   
    
   		 $carno   = $res2[0]['carno'];

   		 $res8 = Db::name('orders')->where('carno',$carno)->select();
   		 $intime = $res8[0]['intime'];
   		 $outtime = date('Y-m-d h:i:s', time());




        $postime = strtotime($outtime) - strtotime($intime);
        $postime =round($postime/3600,2);
        $ordermoney = $postime*5;
        // dump($ordermoney);
        // exit;
       	

       	$data = [
			  'outtime' => $outtime,
			  'ordermoney' => $ordermoney
			];



         
         Db::name('orders')->where('carno',$carno)->update($data);



    		



		return 'sdfad';

	}

}

?>