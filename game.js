/*
@title: Orb Dungeon
@author: Dimitris Toulis
@tags: ['dungeon']
@addedOn: 2024-07-31
*/

const player = "p"
const wall = "w"
const hard_wall = "h"
const rocks = "r"
const orb_destruction = "1"
const orb_ghost = "2"
const orb_attack = "3"
const orb_water = "4"
const orb_invisibility = "5"
const orb_defense = "6"
const orb_transform = "7"
const orb_ultimate = "8"
const orb_names = ["Destruction","Ghost","Attack","Water","Invisibility","Defense","Transform","Ultimate"]

setLegend(
  [ player, bitmap`
................
................
..000000000000..
..011111111110..
..015111111510..
..011155551110..
..011111111110..
..000000000000..
.......00.......
.....5.00.5.....
......5005......
.......00.......
......D00D......
.....DD..DD.....
.....D....D.....
................` ],
  [ wall, bitmap`
LLLLLLLLLLLLLLLL
L11111111111111L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L1LLLLLLLLLLLL1L
L11111111111111L
LLLLLLLLLLLLLLLL`],
  [ hard_wall, bitmap`
0000000000000000
0LLLLLLLLLLLLLL0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0L000000000000L0
0LLLLLLLLLLLLLL0
0000000000000000`],
  [ rocks, bitmap`
...00...........
...000..........
...000.....LLLL.
...000000..LLLLL
...000000..LLLLL
...000000...LLL.
..00000000......
..00000000......
............111.
...........1111.
..........11111.
..LLLLL...11111.
..LLLLL..111111.
..LLLLL..111111.
..LLLL......1111
..LLL...........`],
  [ orb_destruction, bitmap`
................
....99999999....
...9999999999...
..999CCCCCC999..
.9993CCCCCC3999.
.99CC3CCCC3CC99.
.99CCC3CC3CCC99.
.99CCCC99CCCC99.
.99CCCC99CCCC99.
.99CCC3CC3CCC99.
.99CC3CCCC3CC99.
.9993CCCCCC3999.
..999CCCCCC999..
...9999999999...
....99999999....
................`],
  [ orb_ghost, bitmap`
................
....99999999....
...9999999999...
..999CCCCCC999..
.9993CCCCCC3999.
.99CC3CCCC3CC99.
.99CCC3CC3CCC99.
.99CCCC99CCCC99.
.99CCCC99CCCC99.
.99CCC3CC3CCC99.
.99CC3CCCC3CC99.
.9993CCCCCC3999.
..999CCCCCC999..
...9999999999...
....99999999....
................`],
  [ orb_attack, bitmap`
................
....99999999....
...9999999999...
..999CCCCCC999..
.9993CCCCCC3999.
.99CC3CCCC3CC99.
.99CCC3CC3CCC99.
.99CCCC99CCCC99.
.99CCCC99CCCC99.
.99CCC3CC3CCC99.
.99CC3CCCC3CC99.
.9993CCCCCC3999.
..999CCCCCC999..
...9999999999...
....99999999....
................`], 
  [ orb_water, bitmap`
................
....99999999....
...9999999999...
..999CCCCCC999..
.9993CCCCCC3999.
.99CC3CCCC3CC99.
.99CCC3CC3CCC99.
.99CCCC99CCCC99.
.99CCCC99CCCC99.
.99CCC3CC3CCC99.
.99CC3CCCC3CC99.
.9993CCCCCC3999.
..999CCCCCC999..
...9999999999...
....99999999....
................`],
  [ orb_invisibility, bitmap`
................
....99999999....
...9999999999...
..999CCCCCC999..
.9993CCCCCC3999.
.99CC3CCCC3CC99.
.99CCC3CC3CCC99.
.99CCCC99CCCC99.
.99CCCC99CCCC99.
.99CCC3CC3CCC99.
.99CC3CCCC3CC99.
.9993CCCCCC3999.
..999CCCCCC999..
...9999999999...
....99999999....
................`],
  [ orb_defense, bitmap`
................
....99999999....
...9999999999...
..999CCCCCC999..
.9993CCCCCC3999.
.99CC3CCCC3CC99.
.99CCC3CC3CCC99.
.99CCCC99CCCC99.
.99CCCC99CCCC99.
.99CCC3CC3CCC99.
.99CC3CCCC3CC99.
.9993CCCCCC3999.
..999CCCCCC999..
...9999999999...
....99999999....
................`],
  [ orb_transform, bitmap`
................
....99999999....
...9999999999...
..999CCCCCC999..
.9993CCCCCC3999.
.99CC3CCCC3CC99.
.99CCC3CC3CCC99.
.99CCCC99CCCC99.
.99CCCC99CCCC99.
.99CCC3CC3CCC99.
.99CC3CCCC3CC99.
.9993CCCCCC3999.
..999CCCCCC999..
...9999999999...
....99999999....
................`],
  [ orb_ultimate, bitmap`
................
....99999999....
...9999999999...
..999CCCCCC999..
.9993CCCCCC3999.
.99CC3CCCC3CC99.
.99CCC3CC3CCC99.
.99CCCC99CCCC99.
.99CCCC99CCCC99.
.99CCC3CC3CCC99.
.99CC3CCCC3CC99.
.9993CCCCCC3999.
..999CCCCCC999..
...9999999999...
....99999999....
................`],
)
const destructibles = [rocks]

let start_map = map`
.......................................................................
.......................................................................
....hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh...
....h........w.....................................................h...
....h........wwwwwwwww.............................................h...
....h................r.............................................h...
....h........wwww.wwww.............................................h...
....h........w..w.w................................................h...
....h........w.ww.ww...............................................h...
....hwwwwwwwww.w...w...............................................h...
....h..........w.1.w...............................................h...
....h..........w...w...............................................h...
....h..........wwwww...............................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....h..............................................................h...
....hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh...
.......................................................................
.......................................................................`
let rowMap = start_map.split("\n").slice(1)

const playerPos = {x:8,y:5}
const localPlayerPos = {x:4,y:3}

function redrawMap(){
  const {x,y} = playerPos
  const currentMap = rowMap.slice(y-3,y+5).map(row=>row.slice(x-4,x+6))
  setMap(currentMap.join("\n"))
  addSprite(localPlayerPos.x,localPlayerPos.y,player)
}
function editMap(x,y,sprite){
  rowMap[y] = rowMap[y].substring(0, x) + sprite + rowMap[y].substring(x + 1)
  console.log(rowMap,x,y)
  redrawMap()
}

const solids = [hard_wall,wall,rocks]
function moveOrCollide(movementX,movementY){
  if(getTile(localPlayerPos.x+movementX,localPlayerPos.y+movementY).some((sprite)=>solids.includes(sprite._type))) return
  else {
    playerPos.x += movementX
    playerPos.y += movementY
  }
}
redrawMap()
onInput("s", () => {
  moveOrCollide(0,1)
  redrawMap()
})
onInput("w", () => {
  moveOrCollide(0,-1)
  redrawMap()
})
onInput("a", () => {
  moveOrCollide(-1,0)
  redrawMap()
})
onInput("d", () => {
  moveOrCollide(1,0)
  redrawMap()
})

const collectedOrbs = []
let selectedOrb = null;

function selectOrb(orb){
  selectedOrb = orb
  console.log(orb_names[collectedOrbs[orb]-1])
  clearText()
  addText(orb_names[collectedOrbs[orb]-1]+" Orb",{ 
  x: 0,
  y: 0,
  color: color`3`
})
}

afterInput(() => {
  const orb = getTile(localPlayerPos.x,localPlayerPos.y).find(sprite=>parseInt(sprite._type)<=8)
  if(orb) {
    collectedOrbs.push(parseInt(orb._type))
    editMap(playerPos.x,playerPos.y,".")
    if(selectedOrb==null) selectOrb(collectedOrbs.length-1)
  }
})
onInput("j",()=>{
  selectOrb((selectedOrb+1)%collectedOrbs.length)
})
onInput("l",()=>{
  selectOrb((selectedOrb-1+collectedOrbs.length)%collectedOrbs.length)
})
function useOrb(orb){
  switch(orb){
    case 1:
      for(let x = -1; x <= 1; x++){
        for(let y = -1; y <= 1; y++){
          const sprites = getTile(localPlayerPos.x+x,localPlayerPos.y+y)
          if(sprites.length == 1 && destructibles.includes(sprites[0]._type)) {
            editMap(playerPos.x+x,playerPos.y+y,".")
          }
        }
      }
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      break;
  }
}
onInput("i",()=>{
  useOrb(collectedOrbs[selectedOrb])
})