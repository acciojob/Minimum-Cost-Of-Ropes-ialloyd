function calculateMinCost() {
	
  //your code here

	let str = document.forms["form"]["rope-lengths"].value;

	let arr=str.split(',')

	let new_arr=[]

	for(let x of arr){

		new_arr.push(Number(x))
		
	}

	let res=[]

	while(true){

		if(new_arr.length==1){

			break;
		}

		new_arr.sort()

		let a=new_arr.shift();
		let b=new_arr.shift();

		a=a+b;

		res.push(a);

		new_arr.push(a);

		
	}

	let sum=0;

	for(let e of res){

		sum=sum+e;
	}
	

	
	document.getElementById('result').innerHTML =sum
  
  
  
}  
