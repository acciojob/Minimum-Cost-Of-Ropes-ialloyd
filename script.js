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

		new_arr.sort((a,b)=> a-b)

		let a=new_arr.shift();
		let b=new_arr.shift();

		let c=a+b

		res.push(c);

		new_arr.push(c);

		
	}

	let sum=0;

	for(let e of res){

		sum=sum+e;
	}
	

	
	document.getElementById('result').innerHTML =sum
  
  
  
}  
