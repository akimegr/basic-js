function createDreamTeam(members) {
    let arr = ""
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === "string") {
            arr += members[i][0];
        }
    }
    arr = arr.split("").sort().join("")

}

createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])