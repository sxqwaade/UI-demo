
/** *divId   *starTime 活动开始时间（yyyy/MM/dd hh:mm:ss）**/
	function setTimer(divId, startTime){
	
		var timer = document.getElementById(divId);
		 if(!timer){
			return ;
		 }
	
		var time_now_server=new Date(startTime).getTime();//开始的时间
	
		var time_now_client=new Date().getTime();//本地时间
	
		var time_distance,str_time;
	
		var int_day,int_hour,int_minute,int_second;
	
		time_distance = time_now_server - time_now_client; 
	
		 if(time_distance>0)
	
		 {
	
			  int_day=Math.floor(time_distance/86400000)
	
			  time_distance-=int_day*86400000;
	
			  int_hour=Math.floor(time_distance/3600000)
	
			  time_distance-=int_hour*3600000;
	
			  int_minute=Math.floor(time_distance/60000)
	
			  time_distance-=int_minute*60000;
	
			  int_second=Math.floor(time_distance/1000)
	
			  if(int_hour<10)
	
			   int_hour="0"+int_hour;
	
			  if(int_minute<10)
	
			   int_minute="0"+int_minute;
	
			  if(int_second<10)
	
			   int_second="0"+int_second;
			   
			   str_time=int_day+"<span>天</span>"+int_hour+"<span>小时</span>"+int_minute+"<span>分</span>"+int_second+"<span>秒</span>";

			  timer.innerHTML=str_time;
	
			  setTimeout("setTimer('"+divId+"','"+startTime+"')",1000);
	
		 }
		 else
		 {
	
		  timer.innerHTML = '活动时间已结束';
	
		  //clearTimeout(timerID)
	
		 }
		 

		
		 
	}
