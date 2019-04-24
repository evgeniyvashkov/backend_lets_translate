const express = require('express');
const router = express.Router();

const taskCommentList = require('../../../mocks/taskCommentList.json')

router.get('/', (req, res) => res.json(taskCommentList));

module.exports = router;





// var vitalik = {
//     array :null,
//     isChaining : false,
//     chaininArray : null,

//     chain : function(arr) {
//         this.isChaining = !this.isChaining
//         this.chaininArray = arr.slice();
//         console.log(this)
//         return this;
//     },

//     take: function(arr, count) {

//         var newArr = arr.concat();//поверхностная копия массива
//         newArr.length = count;//говно решение но для примера
//         if(this.chaininArray) {
//             this.chaininArray = newArr;
//             return this
//         } else return newArr

//     }
// }