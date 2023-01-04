const result = (val1 , val2) => {

    for (let items of val1) for (let target of val2) if (items === target) return "Common Elements";
    return "No Common Elements";
}