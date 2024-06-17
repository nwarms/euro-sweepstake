import { Team } from "@prisma/client";

const teams: Team[] = [
    { id: 0, name: "Unassigned", icon_url: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Soccer_ball.svg", groupId: 0 },
    { id: 1, name: "Albania", icon_url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg", groupId: 2 },
    { id: 2, name: "Austria", icon_url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg", groupId: 4 },
    { id: 3, name: "Belgium", icon_url: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg", groupId: 5 },
    { id: 4, name: "Croatia", icon_url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg", groupId: 2 },
    { id: 5, name: "Czech Republic", icon_url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg", groupId: 6 },
    { id: 6, name: "Denmark", icon_url: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg", groupId: 3 },
    { id: 7, name: "England", icon_url: "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg", groupId: 3 },
    { id: 8, name: "France", icon_url: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg", groupId: 4 },
    { id: 9, name: "Georgia", icon_url: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg", groupId: 6 },
    { id: 10, name: "Germany", icon_url: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg", groupId: 1 },
    { id: 11, name: "Hungary", icon_url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg", groupId: 1 },
    { id: 12, name: "Italy", icon_url: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg", groupId: 2 },
    { id: 13, name: "Netherlands", icon_url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg", groupId: 4 },
    { id: 14, name: "Poland", icon_url: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg", groupId: 4 },
    { id: 15, name: "Portugal", icon_url: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg", groupId: 6 },
    { id: 16, name: "Romania", icon_url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg", groupId: 5 },
    { id: 17, name: "Scotland", icon_url: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg", groupId: 1 },
    { id: 18, name: "Serbia", icon_url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg", groupId: 3 },
    { id: 19, name: "Slovakia", icon_url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg", groupId: 5 },
    { id: 20, name: "Slovenia", icon_url: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg", groupId: 3 },
    { id: 21, name: "Spain", icon_url: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg", groupId: 2 },
    { id: 22, name: "Switzerland", icon_url: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg", groupId: 1 },
    { id: 23, name: "Turkey", icon_url: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg", groupId: 6 },
    { id: 24, name: "Ukraine", icon_url: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg", groupId: 5 }
]

export default teams;