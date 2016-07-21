var start_time, end_time;

function output(val) {
	var div = document.getElementById('out');
	div.innerHTML = div.innerHTML + "<br>" + val;
}

function startTimer(){
	start_time = new Date().getTime();
}

function endTimer(){
	end_time = new Date().getTime();
}

function show_profile_info(){
	console.info("====================");
	console.info("TIME TAKEN:"+(end_time-start_time));
	console.info("====================");
	console.info("PERFORMANCE MEMORY:");
	console.info(performance.memory)
	console.info("====================");
}