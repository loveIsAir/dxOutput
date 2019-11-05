//smy  深度拷贝 判断嵌套循环的
function find (list, f){
  return list.filter(f)[0];
}

function deepCopy(obj, cache = []) {
  if(obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  const hit = find(cache, c=>c.original === obj);
  
  if(hit) {
    return hit.copy;
  }
  
  const copy = Array.isArray(obj) ? [] : {};
  
  cache.push({
    original: obj,
    copy,
  })
  
  
  Object.keys(obj).forEach(key=>{
    copy[key] = deepCopy(obj[key]);
  })
  
  return copy;
  
}

export default {
  deepCopy
};
