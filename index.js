function myfun() {
  var score = 0;
  var credit = 0;
  for (var i = 0; i < 10; i++) {

    var g = document.querySelectorAll(".grade")[i];
    var x = g.selectedIndex;

    if(i<6)
    {  credit+=3;
      switch (x) {
        case 0:
        credit+=-3;
        break;
        case 1:
            score = score + 10 * 3;
          break;

        case 2:
            score = score + 9 * 3;
          break;

        case 3:
            score = score + 8 * 3;
          break;

        case 4:
            score = score + 7 * 3;
          break;

        case 5:
            score = score + 6 * 3;
          break;

        case 6:
            score = score + 5 * 3;
          break;
      }
    }
    else if(i==7){ credit+=2;
      switch (x) {
        case 0:
        credit+=-2;
        break;
        case 1:
            score = score + 10 * 2;
          break;

        case 2:
            score = score + 9 * 2;
          break;

        case 3:
            score = score + 8 * 2;
          break;

        case 4:
            score = score + 7 * 2;
          break;

        case 5:
            score = score + 6 * 2;
          break;

        case 6:
            score = score + 5 * 2;
          break;
      }
    }
    else if(i==6||8||9)
    { credit+=1;
      switch (x) {
        case 0:
        credit+=-1;
        break;
        case 1:
            score = score + 10 * 1;
          break;

        case 2:
            score = score + 9 * 1;
          break;

        case 3:
            score = score + 8 * 1;
          break;

        case 4:
            score = score + 7 * 1;
          break;

        case 5:
            score = score + 6 * 1;
          break;

        case 6:
            score = score + 5 * 1;
          break;
      }
    }
  }
  document.querySelector("#out").innerHTML ="You "+"Scored: " +(score/credit).toFixed(2);
}
