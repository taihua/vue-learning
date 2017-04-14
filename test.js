
new Vue({
	el:'#root',
	data:{
		inputValue:'',
		outputRate:''
	},
	methods:{
		calRate(){
			let c = function(n,i)
			{
				let numerator = 1, denominator = 1;
				for(t = 0;t<i;++t)
				{
					numerator *= n-t;
					denominator *= t+1;
				}
				//C 幾 取 n / 所有的可能性 365的n次方 / 去掉排序
				return 1 - ((numerator/denominator)/ (Math.pow(n,i)/denominator));
			}

			this.outputRate = (Math.round(c(365,this.inputValue)*100000)/1000) + '%';
		}
	}
});