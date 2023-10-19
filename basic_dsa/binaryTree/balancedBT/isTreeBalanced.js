let root = {
    val:1, 
    left: {
        val:4,
        left: {
            val:7,
            left: null,
            right:null,
        },
        right: null
    },
    right: {
        val:5,
        left: null,
        right: {
            val:6,
            left: null,
            right: null
        }
    }
}

//             1
//         4       5
//     7               6
//                      


const isBalanced = function(root){
    function reccurse(root){
        if(!root) return 0;
        let left = 1 + reccurse(root.left);
        let right = 1 + reccurse(root.right);
        console.log(left, right, 'res', Math.abs(right - left) > 1 )
        
        if(Math.abs(right - left) > 1) return Infinity;
        return Math.max(left, right);
    }
    return reccurse(root) === Infinity ? false : true;
}
console.log(isBalanced(root))