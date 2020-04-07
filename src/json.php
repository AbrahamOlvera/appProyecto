<?php
	include "DBConfig.php";
	$user= new ApptivaDB();
	$response=array();

	$u=$user->buscar("sensor","1");
	$response['sensor']=array();
	foreach ($u as $key) {
		$datos=array();
		foreach ($key as $k => $v)
			$datos[$k] = $v;
		array_push($response['sensor'], $datos);
	}

	die( json_encode($response) );
?>