// JavaScript Document


//查找值是否存在，存在返回位置，否则返回-1
Array.prototype._in=function(find)
{
	for (i = 0; i < this.length; i++)
	{
		if (find==this[i])
		return i;
	}
	return -1;
}
//删除指定索引位置的成员
Array.prototype._removeAt=function(idx) 
{ 
	this.splice(idx, 1);
	return this;
} ;
Array.prototype._remove=function(v)
{
	var tmp=[];
	for(var i=0;i<this.length;i++)
	{
		if(this[i]!=v)
		{
			tmp.push(this[i]);
		}
	}
	return tmp;
}
 Array.prototype._move=function(id,ud)
 {
  for(var i=0;i<this.length;i++)
  {
	if(i==id)
   {
	if(i+ud<0||i+ud>=this.length) return this;
    var tmp1=this[i];
    var tmp2=this[i+ud];
    this[i]=tmp2;
    this[i+ud]=tmp1;
    return this;
   }
  }
 }
 
 
 Array.prototype._insert=function(idx,value)
 {
  var tmp=this.slice(0,idx).concat([value],this.slice(idx,this.length));
  return tmp;
 }
alert([1,2,3]._in(2));
var b=[1,2,3]._removeAt(1)
alert(b);