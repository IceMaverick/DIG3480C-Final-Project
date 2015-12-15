var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                  xxx           ",
   "                                                   xx      xx    xx!xx       x  ",
   "                                    o o      xx                  x!!!x       x  ",
   "                                            x                    xx!xx       x  ",
   "                                   xxxx                           xvx        x  ",
   "                                       x                                    xx  ",
   "  !!                                      o o                                x  ",
   "  x                     o                                                    x  ",
   "  x                                      xxxxx                             o x  ",
   "  x          xxxx       o                                                    x  ",
   "  x  @       xxxx               f                      f f       xxxxx       x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!xxxxxxxxxxxxxxxxxxxx!!!!!xxxxxxxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!xxxxxxxxxxxxxxxxxxxx!!!!!xxxxxxxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                ",
   "                                                                                "],
  ["!                                     x!!x                        xxxxxxx                                    x!x  ",
   "!                                     x!!x                     xxxx     xxxx                                 x!x  ",
   "!                                     x!!xxxxxxxxxx           xx           xx                                x!x  ",
   "!                                     xx!!!!!!!!!!xx         xx             xx                               x!x  ",
   "!                                      xxxxxxx!xx!!x         x                                    o   o   o  x!x  ",
   "!                                             ! xx!x         x     o   o                                    xx!x  ",
   "!                                             !  x!x         x       f                        xxxxxxxxxxxxxxx!!x  ",
   "!                                             !  xvx         x     x   x                        !!!!!!!!!!!!!!xx  ",
   "!                                             !   v          xx  |       |  xxxxx        xxxxxxxxxxxxxxxxxxxxxx   ",
   "!                                             !   v           xx!!!!!!!!!!!xx           xv   x                    ",
   "!                                             !                xxxx!!!!!xxxx                 x                    ",
   "!                                             !xx    x            xxxxxxxxxx  o  xxx         x                    ",
   "!                                             !x     x                   xxxxxxxxxxxx        x                    ",
   "!                                             !x     x                   xxxxxxxxxxx         x                    ",
   "!                                             !x    xx                   xxxxxxxxxxx         x                    ",
   "!                                             !x     x                   xxxxxxxxxxxx        x                    ",
   "!                                             !x     x      o  o     x   xxxxxxxxxxx         x                    ",
   "!              xxxxxxx         xx   xx        !xx    x               x   xxxxxxxxxxx         x                    ",
   "!             xxxxxxxxx       x x   x x       !x     x     xxxxxx    x   xxxxxxxxxxxx        x                    ",
   "!            xxxxxxxxxxx        x o x         !x     x               x    xxxx               x                    ",
   "!    @  f  f xxxxxxxxxxx  f     x   x         !x    xx  f            x    xxxx               x                    ",
   "!   xxx  xx  xxxxxxxxxxx        x   x         !x     x               x    xxxx    xxxx       x                    ",
   "!   xxx      xxxxxxxxxxx       xx o xx        !x     x               x     o      xx  x      x                    ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =      xx         x                    ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxxxxx  o o  xx                    ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!x    o                 xx!!!!!!xx !     xxxxxxxxxxxxxxxxx     xxx                    ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!x                     xx!!!!!!xx  !     xxxxxxxxxxxxxxxxxxxxxxxxx                    ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !     xxxxxxxxxxxxxxxxxxxxxxxxx                    ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !     xxxxxxxxxxxxxxxxxxxxxxxxx                    ",
   "!!!!xxx!!!!!!xxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !     xxxxxxxxxxxxxxxxxxxxxxxxx                    "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        o                                                                     ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                       xxx                                                                    ",
   "                                       xxx                 !!!        !!!  xxx                                ",
   "                                       xxx                 !x!        !x!                                     ",
   "                                     xxxxxxx                x          x        o                             ",
   "                                      xxxxx                 x   oooo   x       xxx                            ",
   "                                x     xxxxx                 x          x      x!!!x                           ",
   "                                      xxxxx                 xxxxxxxxxxxx       xxx                            ",
   "                                     xxxxxxx      x   x      x                                                ",
   "                                      xxxxxxxxxxxxx   xxxxxxxx              x                              !!!",
   "                                x     xxxxx           x                    x!!!x                              ",
   "                                      xxxxx           x                     xxx                               ",
   "                                     xxxxxxx          x         =    xxx                                      ",
   "                                      xxxxx= = = =    x                                                       ",
   "                                x     xxxxx           x                       o                               ",
   "                                      xxxxx    = = = =x     o     xxxxx     xxxx                              ",
   "                                     xxxxxxx          x f  xxx  f           x!!!x       o                     ",
   "                              o   o   xxxxx           x                      xvx      xxxx                    ",
   "                                      xxxxx           x              x                x!!!x     o             ",
   "                             xxx xx   xxxxxx     o o  x!!!!!!!!!!!!!!x                 vxx    xxxx            ",
   "                             xxxxxxx  xxxxxx          x!!!!!!!!!!!!!!x                        x!!!x           ",
   "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                        xxxxx        xxx",
   "                             xx           xx                                                              xxxx",
   "  !!!                         x     x     x                                                              xxxxx",
   "  x!!                         x    xxx    x                                               o             xxxxxx",
   "  x                           x    xxx    xxxxxxx                        xxxxx           xxx           xxxxxxx",
   "  x                           x           x                              x   x          x!!!x         xxxxxxxx",
   "  x                           xx          x        xxxx      xxxx   xx   x x x           xxx         xxxxxxxxx",
   "  x                                       x       |    |    |    |       x xxx      o                      xxx",
   "  x                 x              o o    x                              x         xxx                     xxx",
   "  x                xxx        xx          x         f          f        xxx       x!!!x                    xxx",
   "  x               xxxxx      xx    xxx    x                             xxx        xxx                     xxx",
   "  x               oxxxo     xxxxxxxxxxxxxxx  x oo x    x oo x    x oo  xxxxx                               xxx",
   "  x     @           x      xxxxxxxxxxxxxxxx!!x    x!!!!x    x!!!!x    xxxxxxx            xx                xxx",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                                                                                                  xxxxx       ",
   "                                                                                                  xxxxx       ",
   "                                                                                                  xxxxx       ",
   "                                                                                                  xxxxx       ",
   "                                                                                                  xxxxx       ",
   "                          o                                                                       xxxox       ",
   "                                                                                                  xxx x       ",
   "       x                                                           o     o     o     o     o     o    x       ",
   "       x  o       xxxxx                                                                               x       ",
   "       x     !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
   "       x     !                                                x!!vx x!!vx x!!vx x!!vx x!!vx x!!vx x!!!x       ",
   "          o  x            x                                    xx x!!xx x!!xx x!!xx x!!xx x!!xx x!!!!!x       ",
   "       !     x            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
   "             x                                                                                                ",
   "          o  x           x x                                                                                  ",
   "       x                                                  xx                                                  ",
   "       x                                                                                                      ",
   "       x  o              xxx                                                                                  ",
   "       x                                              xx                                                      ",
   "             x                                             o     o                                            ",
   "             x     xxx    o    xxx                                              x      x                      ",
   "             x                                            xx     xx                        x                  ",
   "             x                                                        x     x                                 ",
   "             xxx         xxx         xxx                                                                      ",
   "                                                                 ||                o         x                ",
   "  xxxxxxxxxxx                                                                                                 ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
   "  x         x   x |   | x   x |   | x   x|                ||                  x     x                         ",
   "  x  @      xxxxx   o   xxxxx   o   xxxxx                                   f    f    f                       ",
   "  xxxxxxx                                     xxxxxxx  x  xx  x  xx  x  xxx                                   ",
   "  xxxxxxx                                     xxxxx                     xxx                                   ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                                                                              !                               ",
   "                                                                              !                               ",
   "                                                                              !                               ",
   "                                                      xxxxxxxxxxxxxxxxxxxxxxxx!                               ",
   "                                                       o  f  o  f  o  f  o    !                               ",
   "                                                                              !                               ",
   "                                                                              !                               ",
   "                                            x        xx!!!!!!!!!!!!!!!!!!!!!!!!x                              ",
   "                                            x        xxxxx!xxxxxxxxxxxxxxxxxxxxx                              ",
   "                                            x========xxxxxvxxxxxxxxxxxxxxxxxxxxx                              ",
   "                                    x                                          x                              ",
   "                                    x                                          x                              ",
   "                                    x                  o       o  o            x                              ",
   "                                                      xx     xxxxxxxx   xx     x                              ",
   "                                       o    o    o    x     oxxxxxx= =      = =x                              ",
   "                                       x    x    x   xx     xxxxxxx            x                              ",
   "                                    !!!!!!!!!!!!!!!!!!xo     xxxxxx            x                              ",
   "                                    !xxxxxxxxxxxxxxxxxxx     xxxxxx           ox                              ",
   "                                    !  o    o    o    x     oxxxxxx            x                              ",
   "                                    !                 x     xxxxxxxo         xxx                              ",
   "                                   x!!x    xx         xo     xxxxxxxx   xx==   x                              ",
   "                                    xx     ||         xx     xxxxxx     xx     x                              ",
   "                   xxx                                x     oxxxxxx   ==xx     x                              ",
   "                   !!!                                      xxxxxxx     xx     x                              ",
   "                                           oo                xxxxxxo           x!!       !!!!!                ",
   "  x                 o                                 xx!!!xxxxxxxxxx          xxx       xxxxx                ",
   "  x                                        xx    o    xxxxxxxxxxxxx                                           ",
   "  x                xxx           x     o         x    xxxxxxxxxxxxx     xx    o                               ",
   "  x       f      f xxx f      f     f  x              xxxxxxxxxxxxxo     f        f     f      f      f       ",
   "  x          xx    xxx    xx                          xxxxxxxxxxxxxxx                              o     o    ",
   "  x  @             xxx                                xxxxxxxxxxxxx          xxx     xx            x     x    ",
   "  xxxxxxx!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                        xxxxxx       !                                                                        ",
   "                       !!!   x  xx  !                                                                         ",
   "                        x   oxxx!!x!                                                                          ",
   "                        x   ox!!!!!! !                                                                        ",
   "                        x   oxxx!!x!                                                                          ",
   "                        xo   x  xx  !                                                                         ",
   "                        xo   x       !                                                                        ",
   "                        xo  !!!                                                                               ",
   "                        x    x                                                                                ",
   "                        x    x                                                                                ",
   "                             x                                                                                ",
   "                     o       x                                                                                ",
   "            o       xx  xx!!!x                                                                        xxx     ",
   "          x xx          xxxxxx                                                                        x!x     ",
   "          x=         x                                                                            xxxxxxxxxxx ",
   "              oo                                                                                 xx         x ",
   "              xx                                                                                           ox ",
   "                                                                                                 ! !  xxxxxox ",
   "                    xx                                                                     x     xxxxxx  xxox!",
   "                                                       xx        xx                 o                    xxox ",
   "                              o     o                  ||        ||                 x                    xxox!",
   "                       xx     x     x      o                                  o                          xxox ",
   "                       xx                  x                                  x                        xxxxox!",
   "  x                    xx                                               o                             x  xxox ",
   "  x              xx || xx                                               x                    xxx    xx   xxox!",
   "  x              xx xx                                      oo                                      x      ox ",
   "  x            f xx                         o f f o  f xx f xx f xx                                        ox ",
   "  x        xx    xx                         x     x                                                         x ",
   "  x        xx                                                                                       xxxxxxxxx ",
   "  x  @     xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
   ["                                                            ",
   "                                                             ",
   "                                                             ",
   "                                                             ",
   "                                                             ",
   "                                                             ",
   "                                                             ",
   "                                                             ",
   "                                                             ",
   "                                                             ",
   "                                                             ",
   "                                                             ",
   "  xx      x x xxx x x    x x x xxx xx   x  x  x  x       xx  ",
   "  x       x x x x x x    x x x  x  x x  x  x  x  x        x  ",
   "  x        x  x x x x  q x x x  x  x  x x                 x  ",
   "  x        x  xxx xxx     x x  xxx x   xx  x  x  x        x  ",
   "  x                                                       x  ",
   "  x                    @                                  x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                             ",
   "                                                             "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
