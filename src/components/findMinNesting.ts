
export type Node = {
    value: number;
    children: Node[];
}

type Tree = Node;

const tree: Tree = {
    value: 5,
    children: [
        {
            value: 3,
            children: [
                { value: 2, children: [] },
                { value: 1, children: [] },
            ],
        },
        {
            value: 2,
            children: [
                { value: 4, children: [] },
                { value: 1, children: [] },
            ],
        },
    ],
};

function findMinNesting(tree: Tree, targetSum: number, nesting = 1): number | null {
    if (tree.value === targetSum) {
        return nesting;
    }

    for (const child of tree.children) {
        const remainingSum = targetSum - tree.value;
        const childResult = findMinNesting(child, remainingSum, nesting + 1);
        if (childResult !== null) {
            return childResult;
        }
    }

    return null;
}



const targetSum = 10;
const minNesting = findMinNesting(tree, targetSum);
// console.log(`The minimum nesting with sum ${targetSum} is ${minNesting}.`);


// type Node = {
//     value: number;
//     children: Node[];
// }
//
// type Tree = Node;


//Накидал пример дерева для понимая задачи и проверки функции
// const tree: Tree = {
//     value: 5,
//     children: [
//         {
//             value: 3,
//             children: [
//                 { value: 2, children: [] },
//                 { value: 1, children: [] },
//             ],
//         },
//         {
//             value: 2,
//             children: [
//                 { value: 4, children: [] },
//                 { value: 1, children: [] },
//             ],
//         },
//     ],
// };
//
//
// //Решение при помощи рекурсии
// function findMinNesting(tree: Tree, targetSum: number, nesting = 1): number | null {
//     if (tree.value === targetSum) {
//         return nesting;
//     }
//
//     for (const child of tree.children) { //проходимся по children
//         const remainingSum = targetSum - tree.value;
//         const childResult = findMinNesting(child, remainingSum, nesting + 1);  //вызываем функцию с оставшейся суммой
//         if (childResult !== null) {
//             return childResult;
//         }
//     }
//
//     return null;
// }
//
//
//
// const targetSum = 10;
// const minNesting = findMinNesting(tree, targetSum);
// console.log(minNesting)