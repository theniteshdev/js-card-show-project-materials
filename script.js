const userData = await(await fetch("./data.json")).json()
const userContainer = document.querySelector("#main");

userData.forEach(user => {
    const { id, name, email } = user;

    const anchor = document.createElement("a");
    // creating elements
    anchor.classList.add("card");
    anchor.href = `./seprateUser.html?id=${id}&name=${name}`;

    const showId = document.createElement("h4");
    const showName = document.createElement("h4");
    const showEmail = document.createElement("h4");

    // setting all data to the innerhtml
    showId.innerHTML = `ID: ${id}`;
    showName.innerHTML = `NAME: ${name}`;
    showEmail.innerHTML = `EMAIL: ${email}`;

    anchor.append(showId, showName, showEmail);

    main.append(anchor);
});