import './index.scss';
import { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from "prismjs";
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-java';
import 'prismjs/themes/prism-funky.css';

const Scripts = () => {
    const [insertCode, insertSetCode] = useState(`
import java.util.Queue;
import java.util.LinkedList;
public class BST<E extends Comparable<E>> {
    private BSTNode<E> root;
    private int nodes;
    public BST()
    {
        root = null;
        nodes = 0;
    }
    
    public void insert(E data)
    {
        int doubleCount = 0;
        root = insert(data, root, doubleCount);
    }
    
    private BSTNode<E> insert(E data, BSTNode<E> rt, int dc)
    {
        if(rt == null && dc != 1)
        {
            nodes += 1;
            return new BSTNode<E>(data);
        }
        else
        {
            if(rt.getValue().compareTo(data) > 0)
            {
                rt.setLeft(insert(data, rt.getLeft(), dc));
            }
            else if(rt.getValue().compareTo(data) == 0){
                dc = 1;
            }
            else 
            {
                rt.setRight(insert(data, rt.getRight(), dc));
            }
        }
        return rt;
    }
       
    `);

    const [findCode, findSetCode] = useState(`
    public boolean find(E val){
    BSTNode<E> r = root;
    return find(val, r);
    }
    public boolean find(E val, BSTNode<E> r){
        if (r!= null){
            if (r.getValue().compareTo(val) == 0){
            return true;
            } else if (r.getValue().compareTo(val) > 0){
            
            r = r.getLeft();
            return find(val, r);
            } else if (r.getValue().compareTo(val) < 0){
            r = r.getRight();
            return find(val, r);
            }
        }
        

        return false;
    }
        
    `)

    const [heightCode, heightSetCode] = useState(`
    public int height(){
        return 1 + Math.max(height(root.getLeft()), height(root.getRight()));
    }

    public int height(BSTNode<E> node){
        if (node.getRight() == null && node.getLeft() == null){
            return 0;
        } else if (node.getRight() == null){
            return 1 + height(node.getLeft());
        } else if (node.getLeft() == null){
            return 1 + height(node.getRight());
        } else {
            return 1 + Math.max(height(node.getRight()), height(node.getLeft()));
        }

    }
        
        `)
    const [deleteCode, deleteSetCode] = useState(`
        
    public E delete(E val){
    BSTNode<E> r = root;
    return delete(val, r);

    }
    public E delete(E val, BSTNode<E> r){
        if (r!= null){
            if (r.getLeft()!= null){
                if (!isLeaf(r) && r.getLeft().getValue().compareTo(val) == 0 && isLeaf(r.getLeft())){
                    BSTNode<E> pastr = r.getLeft();
                    r.setLeft(null);
                    nodes--;
                    return pastr.getValue();
                } 
                
            }
            if (r.getRight()!= null){
                if (!isLeaf(r) && r.getRight().getValue().compareTo(val) == 0 && isLeaf(r.getRight())){
                    BSTNode<E> pastr = r.getRight();
                    r.setRight(null);
                    nodes--;
                    return pastr.getValue();
                }
            }
            if (r.getValue().compareTo(val) > 0){
            
                r = r.getLeft();
                return delete(val, r);
            } else if (r.getValue().compareTo(val) < 0){
                r = r.getRight();
                return delete(val, r);
            }
    
                
        }
        return r.getValue();
    }


            
            `)

    const [inorderCode, inorderSetCode] = useState(`
    public String inorder()
    {
        return inorder(root);
    }
    
    public String inorder(BSTNode<E> rt)
    {
        if(rt == null)
        {
            return "";
        }
        else
        {
            String out = "";
            out += inorder(rt.getLeft());
            out += rt.getValue();
            out += inorder(rt.getRight());
            return out;
        }
    }
    public int getNodes(){
        return nodes;
    } 
    
                `)
    return (
        <div className='bst-zone'>
            
            <div className='bst-research'>
                <p>BST Trees &#40;Binary Search Trees&#41;</p>
                <hr></hr>
                <hr></hr>
                <p>
                BST trees aren&#8217;t just another data structuring model lost in the twists and turns of 
                their 1960 comeuppance. These sorting trees have made their way into today&#8217;s games as 
                BSP trees, expertly analyzed stock market trends as AVL trees, and just might be 
                predicting your next sentence before you finish typing. BST trees are like a boomerang. 
                They just keep coming back.


                </p>
                <p>BST trees often use recursion in order to make their code straight forward. Since they 
                afford more memory space because of its lack of variables, functions recursively call 
                the same function down the tree to access further down variables. However, it isn&#8217;t 
                all bad because these trees are sorted and because of this accessing specific values 
                in a large tree usually isn&#8217;t an issue. …</p>

                <p>
                In this code for a BST Tree, I use two different insert functions, using the first to 
                initially call the function and recursively calling the second. In a simple approach to a BST 
                Tree, we can call the insert function recursively to reach a leaf node to insert a BST Node in 
                the spot that accurately compares to the other nodes. Notice how the insert function calls itself 
                in the loop until we reach the base case of reaching the bottom of the BST Tree.
                </p>
            </div>
            <div className='bst-code'>
                <Editor
                value={insertCode}
                onValueChange={insertCode => insertSetCode(insertCode)}
                highlight={insertCode => highlight(insertCode, languages.java)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                }}
                />
            
            </div>
            <div className = "bst-research">
                <p>
                The find function utilizes a similar approach of recursion. We check if node along our comparison 
                train is similar to the desired value. If the selected node's value is larger, we call 
                the find function with the right node instead. Similarly, if the selected node's value is 
                less than the desired value, we call the find function on the left node.
                </p>
            </div>
            <div className='bst-code'>
                <Editor
                value={findCode}
                onValueChange={findCode => findSetCode(findCode)}
                highlight={findCode => highlight(findCode, languages.java)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                }}
                />
            
            </div>
            <div className = "bst-research">
                <p>
                Finding the height of a BST Tree is a bit more nuanced. We need to consider a few base 
                cases. We cannot simply say that the amount of nodes present in the tree is 
                equal to the height since our entire tree since one tree often has multiple 
                nodes on one height level of the tree. Let's think about the height from a top-down 
                perspective, srarting with the final row.
                </p>
                <p>
                In this example we use an approach that separates the entire BST tree into a left and 
                right tree, so that we can make sure we can accessing every node on the tree. If we 
                didn't we wouldn't be able to access the other side in any way other than going up 
                the root and down the other side.
                </p>
                <p>
                With every call of the height function, we want to add 1 to the return value and when 
                we get to the end we want the value to be 0, because we are done recursively calling 
                the height function. We then take the max value of the right and left subtree's heights 
                and finally return that value to the function height.
                </p>
            </div>
            <div className='bst-code'>
                <Editor
                value={heightCode}
                onValueChange={heightCode => heightSetCode(heightCode)}
                highlight={heightCode => highlight(heightCode, languages.java)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                }}
                />
            
            </div>
            <div className="bst-research">
                <p>
                    In a simplistic approach to the BST tree, where we're only deleting BST tree leaves, 
                    deleting a node from the BST tree would simply involve recursively calling the 
                    delete function down the tree. We do this as we do in other functions, and when 
                    we get to the desired value, we set its value to null, the equivalent of an absent 
                    node in this version of a BST. We also must edit the nodes variable accordingly.
                </p>
            </div>
            <div className='bst-code'>
                <Editor
                value={deleteCode}
                onValueChange={deleteCode => deleteSetCode(deleteCode)}
                highlight={deleteCode => highlight(deleteCode, languages.java)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                }}
                />
            
            </div>
            <div className="bst-research">
                <p>
                    The inorder function calls the BST tree as a single string, we must make sure 
                    that the function calls from the left deepest node, the smallest value, 
                    to the right deepest node, the largest value.
                </p>
            </div>
            <div className='bst-code'>
                <Editor
                value={inorderCode}
                onValueChange={inorderCode => inorderSetCode(inorderCode)}
                highlight={inorderCode => highlight(inorderCode, languages.java)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                }}
                />
            
            </div>
        </div>
            
        
    );

}

export default Scripts;

// `

//     public boolean isLeaf(BSTNode<E> node){
//         if (node.getLeft() == null && node.getRight() == null){
//             return true;
//         }
//         return false;
//     }
    




//     public boolean isPerfect(){
//         return nodes == (Math.pow(2, height()+1)-1);
//     }
//     public boolean isBalanced(){
//         return Math.abs(height(root.getLeft()) - height(root.getRight())) <= 1;
//     }
    



    