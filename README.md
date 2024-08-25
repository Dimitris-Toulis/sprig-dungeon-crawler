# Sprig Dungeon Crawler
A [sprig](https://sprig.hackclub.com) game where you collect orbs that grant you powers that you can use to progress

It may seem unfair at some moments but it is based on the principle of:
> You learn by dying

\- Dimitris Toulis 2024

**There are 3 possible endings: Normal, Greed and Happy**

There is also lore and hidden messages! Try to find them!

## Controls
- Move with WASD
- Restart with double K 
- Cycle through orbs with J and L  
- Use selected orb with I (if it has an active effect)

## Orbs

Passive effects are enabled when holding the orb and active effects are used by pressing I

List of orbs in order of collection:
- Destruction orb: Use it to destroy all destructible objects around you  
- Ghost orb: Pass through normal (grey) walls, crates and rocks  
- Fire orb: Turns water into smoke that disappears afterwards  
- Water orb: Turns lava into obsidian, allowing you to pass over it. Use it to create water
- Invisibility orb: Enemies can't see you
- Electric orb: Use it to activate machines adjacent you. It will also kill you instantly in water if held!
- Transform orb: Turns you into a plant that does not trigger traps
- Ultimate orb: Makes you immortal. Use it to win the game?

## Special tiles
- Lava: Kills you if you step on it
- Regenerating lava: Turns back to lava after 6 "moves" (all buttons count) if turned into obsidian
- Water: Breathing mechanic (4 points of breath). Breath is deducted for moving in water. Getting out restores your breath
- Enemy: Kills you if they see you on a neighboring tile (diagonals also)
- Trap: Kills players (So if you are not a player you don't die)
- Smoke: Disappears after 2 moves. Produced by water+fire orb and gate machines
- Machines: Activate them using the electric orb
  - Water machine: Kills you by mixing water and electricity
  - Plant machine: Spawns a plant on top of you
  - Gate machine: Destroys gates and turns into smoke
- Arrow (black): Suggests a direction to go to
- Arrow (red): Enforces a direction to go to
- Altar: ???
