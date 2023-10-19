var count = 1;


function play(e){
    if(count % 2 == 0 && !(e.classList.contains("cross")) && !(e.classList.contains("circle"))){
        e.classList.add("circle")
        count++
    }else if(!(count % 2 == 1 && e.classList.contains("circle")) && !(e.classList.contains("cross"))){
        e.classList.add("cross")
        count++
    }
}

