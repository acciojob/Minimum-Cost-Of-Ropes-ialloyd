function calculateMinCost() {
	
  //your code here

	let str = document.forms["form"]["rope-lengths"].value;

	let arr=str.split(',')

	let new_arr=[]

	for(let x of arr){

		new_arr.push(Number(x))
		
	}

	while(true){

		if(new_arr.length==1){

			break;
		}

		new_arr.sort()

		let a=new_arr.shift();
		let b=new_arr.shift();

		a=a+b;

		new_arr.push(a);

		
	}
	

	
	document.getElementById('result').innerHTML =new_arr[0]
  
  
  
}  
