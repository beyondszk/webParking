<?php


namespace app\index\model;
use think\Model;

class Admin extends BaseModel
{


    
    public function getUserByUsername($username) {

        $data = ['pname' => $username];
        return $this->where($data)->find();
    }

    

}
