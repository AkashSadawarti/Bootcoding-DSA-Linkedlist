let Arr = [5,2,6,7,4]
let target = 9;

let map = new Map()

console.log(getArray(Arr, target));
function getArray(Arr,target){
    for(let i=0; i< Arr.length; i++){
        if(map.has(Arr[i])){
            let res = [map.get(Arr[i]), i];
            return res;
        }else{
            map.set(target-Arr[i], i);
        }
    }

}