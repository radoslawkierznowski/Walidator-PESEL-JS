"use strict";

/* 1 3 7 9 1 3 7 9 1 3    --> wagi
    X X X X X X X X X X Y  --> cyfry nr PESEL (Y- cyfra kontrolna)

czyli:       
            1 3 7 9 1 3 7 9 1 3
         *  4 9 0 4 0 5 0 1 5 8
        -----------------------
suma=(1*4+3*9+7*0+9*4+1*0+3*5+7*0+9*1+1*5+3*8)=
    =(  4+ 27+  0+ 36+  0+ 15+  0+  9+  5+ 24)=  120
 
          120 mod 10 = 0

           10 - 0 =  10   ----> cyfra kontrolna ?
 korekta: dla wyniku 10   ----> cyfra kontrolna = 0 */