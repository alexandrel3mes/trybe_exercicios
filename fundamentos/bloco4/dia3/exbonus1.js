let n = 7;
let str = "*";
let space = " ";


if (n > 1) {
    
    for (index = 1; index <= n; index += 2){ 

        if (index > 1 && index < n) {

            console.log(space.repeat((n - index) / 2), (str.repeat(index))  );

        } else {

            console.log(space.repeat((n - index) / 2), str.repeat(index));
        }

 

    }


}