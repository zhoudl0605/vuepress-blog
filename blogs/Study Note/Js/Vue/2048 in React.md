---
title: Vue 2048
date: 2020-09-30
tags:
 - Vue
 - 2048
 - js
categories:
 - Study Note
---

## Background

2048 was a popular game back in 2018, and right now I'm learning the `Vue.js` thus, I will make a 2048 game for fun.
project address: https://github.com/zhoudl0605/2048

<img :src="$withBase('/2048_game.png')" alt="2048 Example">

## Understand the project

according to the UI, we can separate the project into 3 parts:

* Record
  * score of current game
  * best score in the history
* Action
  * start new game
* Game
  * gaming logic area

Objects in the game:

* Score

  ```js
  score{
    let maxScore = 0
    let currentScore = 0

    startGame(){
      currentScore = 0
    }
    add(int score){
      currentScore += score
    }
    endGame(){
      if(currentScore > masScore)
        currentScore = maxScore
    }
  }
  ```
  
  * `maxScore` this is the max score the current user got from the present game
  
  * `currentScore` this is the score in the current game
  
  * `add` increase the `currentScore`
  
  * `endGame` end the current game if currentScore is higher change the maxScore
  
* Game

  ```js
  game{
    const MAX_WIDTH = 4
    const MAX_HEIGHT = 4
    const NEW_BLOCK = [2, 4]
    const NUMBER_OF_BLOCK = MAX_WIDTH * MAX_HEIGHT
    const NUMBER_OF_INIT_BLOCK = 2

    let checkerboard;

    createCheckerboard()
    createBlock()
    moveBlock()
  }
  ```

## Hints

* make a `4 block height * 4 block width` checker board

  > ***NOTE:*** this is a 4*4 matrix

  ```js
  // example of 2-Dimensional matrix in js
  const matrix = [[1,2],[3,4]]
  console.log(matrix[0][0]) // == 1
  console.log(matrix[0][1]) // == 2
  console.log(matrix[1][0]) // == 3
  console.log(matrix[1][1]) // == 4

  console.log(matrix[0]) // == [1,2]
  console.log(matrix[1]) // == [3,4]
  ```

* if move `right`, move the most right block first then the second one in that line

* if can not generate new block, it means this game is over

## Current progress

* finish the UI

* support create new game

* detect `up` `down` `left` `right` key press

## TODO

* complete the logic when press key

* update the CSS setting for blocks
