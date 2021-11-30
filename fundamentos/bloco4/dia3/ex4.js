let n = 5;
let str = "*";
let space = "  ";


if (n > 1) {
    
    for (index = 1; index <= n; index += 1){ 
        

        console.log(space.repeat(n- index), str.repeat(index), space.repeat(n- index));

    }


}