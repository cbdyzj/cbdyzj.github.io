/**
 * 快速平方根倒数，其中用到了牛顿法
 * x=(y/x+x)/2
 * x=sqrt(y)
 */
float inv_sqrt(float x) {
	float xhalf = 0.5f*x;
	int i = *(int*)&x; // get bits for floating VALUE 
	i = 0x5f375a86- (i>>1); // gives initial guess y0
	x = *(float*)&i; // convert bits BACK to float
	x = x*(1.5f-xhalf*x*x); // Newton step, repeating increases accuracy
	return x;
}
