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
const crate = "c"
const orb_destruction = "1"
const orb_ghost = "2"
const orb_attack = "3"
const orb_water = "4"
const orb_invisibility = "5"
const orb_defense = "6"
const orb_transform = "7"
const orb_ultimate = "8"
const orb_names = ["Destruction","Ghost","Attack","Water","Invisibility","Defense","Transform","Ultimate"]
const lava = "l"

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
  [ crate, bitmap`
0CCCCCCCCCCCCCC0
C00000000000000C
C0C0C0C00C0C0C0C
C0C0C0C00C0C0C0C
C0C0C0C00C0C0C0C
C0C0C0C00C0C0C0C
C0C0C0C00C0C0C0C
C0C0C0C00C0C0C0C
C0C0C0C00C0C0C0C
C0C0C0C00C0C0C0C
C0C0C0C00C0C0C0C
C0C0C0C00C0C0C0C
C0C0C0C00C0C0C0C
C0C0C0C00C0C0C0C
C00000000000000C
0CCCCCCCCCCCCCC0`],
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
....88888888....
...8888888888...
..888LLLLLL888..
.8889LLLLLL9888.
.88LL9LLLL9LL88.
.88LLL9LL9LLL88.
.88LLLLHHLLLL88.
.88LLLLHHLLLL88.
.88LLL9LL9LLL88.
.88LL9LLLL9LL88.
.8889LLLLLL9888.
..888LLLLLL888..
...8888888888...
....88888888....
................`],
  [ orb_attack, bitmap`
................
....33333333....
...3333333333...
..333999999333..
.33369999996333.
.33996999969933.
.33999699699933.
.33999955999933.
.33999955999933.
.33999699699933.
.33996999969933.
.33369999996333.
..333999999333..
...3333333333...
....33333333....
................`], 
  [ orb_water, bitmap`
................
....77777777....
...7777777777...
..777555555777..
.77745555554777.
.77554555545577.
.77555455455577.
.77555577555577.
.77555577555577.
.77555455455577.
.77554555545577.
.77745555554777.
..777555555777..
...7777777777...
....77777777....
................`],
  [ orb_invisibility, bitmap`
................
....11111111....
...1111111111...
..111......111..
.111L......L111.
.11..L....L..11.
.11...L..L...11.
.11....88....11.
.11....88....11.
.11...L..L...11.
.11..L....L..11.
.111L......L111.
..111......111..
...1111111111...
....11111111....
................`],
  [ orb_defense, bitmap`
................
....00000000....
...0000000000...
..000999999000..
.000F999999F000.
.0099F9999F9900.
.00999F99F99900.
.009999CC999900.
.009999CC999900.
.00999F99F99900.
.0099F9999F9900.
.000F999999F000.
..000999999000..
...0000000000...
....00000000....
................`],
  [ orb_transform, bitmap`
................
....HHHHHHHH....
...HHHHHHHHHH...
..HHH333333HHH..
.HHH83333338HHH.
.HH3383333833HH.
.HH3338338333HH.
.HH3333HH3333HH.
.HH3333HH3333HH.
.HH3338338333HH.
.HH3383333833HH.
.HHH83333338HHH.
..HHH333333HHH..
...HHHHHHHHHH...
....HHHHHHHH....
................`],
  [ orb_ultimate, bitmap`
................
....L0L13C75....
...319837106F...
..7C983710H04D..
.65983710HL.08H.
.F983710HD.LH09.
.483710H4.DH01H.
.D3710H9.4H0178.
.8710HH.9H0173D.
.H10H7.HH017384.
.90H5.7H017389F.
.H83.5H01738956.
..D43H017389C7..
...F601738913...
....57C31L0L....
................`],
  [ lava, bitmap`
9999999999999999
9933339933999999
9333333933933333
9333333999933333
9333333999939999
9333333999999999
9933339993333339
9999999993333339
9999999999999999
9999999333399999
9999993333339999
9339993333339999
3339993333339999
3339993333339999
3333999333399999
9999999999999999`]
)
const destructibles = [rocks,crate]

let start_map = map`
.......................................................................
.......................................................................
....hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh...
....h........w.......wwwwwwwwww....................................h...
....h........wwwwwwwwwr.......www..wwwwwwwwwwwww...................h...
....h................rr.........www.ll.........w...................h...
....h........wwww.wwwwr.......w.....ll........7w...................h...
....h........w..w.w..wwwcwrw.www.ww.ll.........w...................h...
....h........w.ww.ww...w.wcw.w.w.w.wwwwwwwwwwwww...................h...
....hwwwwwwwww.w...w...w.w.w.w.w.w.................................h...
....h..........w.1.w...w.w.w.w.w.w.................................h...
....h..........w...w...wlw.w.www.w.................................h...
....h..........wwwww.wwwlw.w.w7w.w.................................h...
....h................wlllw.w.wwwww.................................h...
....h................wllww.ww......................................h...
....h................wllw...w......................................h...
....h...............wwllw...w......................................h...
....h...........wwwww...w...w......................................h...
....h...........w.......w...w......................................h...
....h...........w...rr..w...w......................................h...
....h...........w...5r..w...w......................................h...
....h...........w.......w...w......................................h...
....h...........wwwwwwwww...w......................................h...
....h...................wwwww......................................h...
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