(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{25:function(n,e,r){"use strict";r.r(e);var t,i,o,c,u,d,a,s,l,f,m,g,b,j,p,x,h,O,v,k,w,y,M,L,Q,B,A,S=r(0),F=r.n(S),I=r(7),D=r.n(I),C=r(4),E=r(8),z=[{name:"beginner",minesQuantity:10,fields:64,columns:8,rows:8},{name:"intermediate",minesQuantity:40,fields:256,columns:16,rows:16},{name:"expert",minesQuantity:99,fields:480,columns:30,rows:16}],G=function(n,e){var r=[],t=z.findIndex((function(e){return e.name===n})),i=z[t].fields,o=z[t].minesQuantity,c=z[t].columns,u=function(n){for(var e=0;e<i;e++){var t=0===e||t===c?1:t+=1,o=0===e?1:e%c===0?o+=1:o;void 0!==n?r.push({id:e,revealed:!1,mine:Math.random(),markedAsMine:!1,markedAsQuestion:!1,surroundingMines:"auto",coordinates:{column:t,row:o}}):r.push({id:e})}};return void 0===e?u(e):(u(e),function(){var n=r.findIndex((function(n){return n.id===e})),t=[r[n-c-1],r[n-c],r[n-c+1],r[n-1],r[n],r[n+1],r[n+c-1],r[n+c],r[n+c+1]];-1!==n&&t.forEach((function(n){n&&(n.mine=0)}))}(),function(){for(var n=[],e=0;e<o;e++){for(var t=r[0].mine,i=0,c=1;c<r.length;c++)r[c].mine>t&&!0!==r[c].mine&&(i=c,t=r[c].mine);r[i].mine=0,n.push(i)}r.map((function(e){return n.includes(e.id)?e.mine=!0:e.mine=!1}))}(),r.forEach((function(n){var e=0,t=n.coordinates.column,i=n.coordinates.row,o=[function(n){return n.coordinates.column===t-1&&n.coordinates.row===i-1},function(n){return n.coordinates.column===t&&n.coordinates.row===i-1},function(n){return n.coordinates.column===t+1&&n.coordinates.row===i-1},function(n){return n.coordinates.column===t-1&&n.coordinates.row===i},function(n){return n.coordinates.column===t+1&&n.coordinates.row===i},function(n){return n.coordinates.column===t-1&&n.coordinates.row===i+1},function(n){return n.coordinates.column===t&&n.coordinates.row===i+1},function(n){return n.coordinates.column===t+1&&n.coordinates.row===i+1}];o.forEach((function(n){var t=r.findIndex(n);-1!==t&&!0===r[t].mine&&(e+=1)})),n.surroundingMines=e}))),r},N=Object(E.b)({name:"minesweeper",initialState:{difficultyLevel:"beginner",grid:G("beginner"),flaggedFieldsQuantity:0,gameStatus:"initial"},reducers:{leftClick:function(n,e){var r=e.payload;"initial"===n.gameStatus&&(n.grid=G(n.difficultyLevel,r)),"initial"===n.gameStatus&&(n.gameStatus="gameIsOn");var t=n.grid.findIndex((function(n){return n.id===r}));n.grid[t].revealed=!0,!0===n.grid[t].mine&&(n.gameStatus="lost"),!0===n.grid[t].markedAsMine&&(n.grid[t].markedAsMine=!1,n.flaggedFieldsQuantity=n.flaggedFieldsQuantity-1),!0===n.grid[t].markedAsQuestion&&(n.grid[t].markedAsQuestion=!1);var i=z.findIndex((function(e){return e.name===n.difficultyLevel})),o=z[i].minesQuantity,c=0;n.grid.forEach((function(n){!0===n.revealed&&(c+=1)})),c===n.grid.length-o&&"lost"!==n.gameStatus&&(n.gameStatus="won"),"lost"!==n.gameStatus&&"won"!==n.gameStatus||n.grid.forEach((function(n){!0===n.mine&&(n.revealed=!0)}))},newGameButtonClick:function(n){n.gameStatus="initial",n.grid=G(n.difficultyLevel),n.flaggedFieldsQuantity=0},setNewDifficultyLevel:function(n,e){var r=e.payload;n.gameStatus="initial",n.difficultyLevel=r,n.grid=G(n.difficultyLevel),n.flaggedFieldsQuantity=0},rightClick:function(n,e){var r=e.payload,t=n.grid.findIndex((function(n){return n.id===r}));!1===n.grid[t].markedAsMine&&!1===n.grid[t].markedAsQuestion?(n.grid[t].markedAsMine=!0,n.flaggedFieldsQuantity=n.flaggedFieldsQuantity+1):!0===n.grid[t].markedAsMine&&!1===n.grid[t].markedAsQuestion?(n.grid[t].markedAsMine=!1,n.grid[t].markedAsQuestion=!0,n.flaggedFieldsQuantity=n.flaggedFieldsQuantity-1):!1===n.grid[t].markedAsMine&&!0===n.grid[t].markedAsQuestion&&(n.grid[t].markedAsMine=!1,n.grid[t].markedAsQuestion=!1)},revealSurroundingFields:function(n,e){var r=e.payload;[function(n){return n.coordinates.column===r.column-1&&n.coordinates.row===r.row-1},function(n){return n.coordinates.column===r.column&&n.coordinates.row===r.row-1},function(n){return n.coordinates.column===r.column+1&&n.coordinates.row===r.row-1},function(n){return n.coordinates.column===r.column-1&&n.coordinates.row===r.row},function(n){return n.coordinates.column===r.column+1&&n.coordinates.row===r.row},function(n){return n.coordinates.column===r.column-1&&n.coordinates.row===r.row+1},function(n){return n.coordinates.column===r.column&&n.coordinates.row===r.row+1},function(n){return n.coordinates.column===r.column+1&&n.coordinates.row===r.row+1}].forEach((function(e){var r=n.grid.findIndex(e);n.grid[r]&&(n.grid[r].revealed=!0)}))}}}),P=N.actions,J=(P.checkIfGameOver,P.setRevealed,P.newGameButtonClick),R=P.setNewDifficultyLevel,T=P.rightClick,U=P.revealSurroundingFields,q=P.leftClick,H=function(n){return n.minesweeper.grid},K=function(n){return n.minesweeper.difficultyLevel},V=function(n){return n.minesweeper.gameStatus},W=function(n){return n.minesweeper.flaggedFieldsQuantity},X=N.reducer,Y=Object(E.a)({reducer:{minesweeper:X}}),Z=r(2),$=r(3),_=Z.d.div(t||(t=Object($.a)(["\n    display: grid;\n\tgrid-template-columns: repeat(8, 1fr);\n    padding: 1px;\n    border-radius: 5px;\n    border-top: 2px solid ",";\n    border-right: 2px solid ",";\n    border-bottom: 2px solid ",";\n    border-left: 2px solid ",";\n\n    ",";\n    ",";\n"])),(function(n){return n.theme.colors.darkBorder}),(function(n){return n.theme.colors.lightBorder}),(function(n){return n.theme.colors.lightBorder}),(function(n){return n.theme.colors.darkBorder}),(function(n){return"intermediate"===n.difficultyLevel&&Object(Z.c)(i||(i=Object($.a)(["\n        grid-template-columns: repeat(16, 1fr);\n    "])))}),(function(n){return"expert"===n.difficultyLevel&&Object(Z.c)(o||(o=Object($.a)(["\n        grid-template-columns: repeat(30, 1fr);\n    "])))})),nn=Z.d.button(c||(c=Object($.a)(["\n\twidth: 40px;\n    height: 40px;\n    font-size: 13px;\n    font-weight: bold;\n    background-color: ",";\n    border-top: 2px solid ",";\n    border-right: 2px solid ",";\n    border-bottom: 2px solid ",";\n    border-left: 2px solid ",";\n\n    ",";\n    ",";\n\n    ","\n\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n    ","\n\n    ","\n    ","\n"])),(function(n){return n.theme.colors.mainLight}),(function(n){return n.theme.colors.lightBorder}),(function(n){return n.theme.colors.darkBorder}),(function(n){return n.theme.colors.darkBorder}),(function(n){return n.theme.colors.lightBorder}),(function(n){return"intermediate"===n.difficultyLevel&&Object(Z.c)(u||(u=Object($.a)(["\n        width: 32px;\n        height: 32px;;\n    "])))}),(function(n){return"expert"===n.difficultyLevel&&Object(Z.c)(d||(d=Object($.a)(["\n        width: 28px;\n        height: 28px;;\n    "])))}),(function(n){return n.revealed&&Object(Z.c)(a||(a=Object($.a)(["\n        filter: brightness(108%);\n        border-top: 1px solid ",";\n        border-left: 1px solid ",";\n        border-right: initial;\n        border-bottom: initial;\n    "])),(function(n){return n.theme.colors.semiDarkBorder}),(function(n){return n.theme.colors.semiDarkBorder}))}),(function(n){return 1===n.surroundingMines&&Object(Z.c)(s||(s=Object($.a)(["\n        color: ",";\n    "])),(function(n){return n.theme.colors.surroundingMines.one}))}),(function(n){return 2===n.surroundingMines&&Object(Z.c)(l||(l=Object($.a)(["\n        color: ",";\n    "])),(function(n){return n.theme.colors.surroundingMines.two}))}),(function(n){return 3===n.surroundingMines&&Object(Z.c)(f||(f=Object($.a)(["\n        color: ",";\n    "])),(function(n){return n.theme.colors.surroundingMines.three}))}),(function(n){return 4===n.surroundingMines&&Object(Z.c)(m||(m=Object($.a)(["\n        color: ",";\n    "])),(function(n){return n.theme.colors.surroundingMines.four}))}),(function(n){return 5===n.surroundingMines&&Object(Z.c)(g||(g=Object($.a)(["\n        color: ",";\n    "])),(function(n){return n.theme.colors.surroundingMines.five}))}),(function(n){return 6===n.surroundingMines&&Object(Z.c)(b||(b=Object($.a)(["\n        color: ",";\n    "])),(function(n){return n.theme.colors.surroundingMines.six}))}),(function(n){return 7===n.surroundingMines&&Object(Z.c)(j||(j=Object($.a)(["\n        color: ",";\n    "])),(function(n){return n.theme.colors.surroundingMines.seven}))}),(function(n){return 8===n.surroundingMines&&Object(Z.c)(p||(p=Object($.a)(["\n        color: ",";\n    "])),(function(n){return n.theme.colors.surroundingMines.eight}))}),(function(n){var e=n.mine,r=n.lost;return e&&r&&Object(Z.c)(x||(x=Object($.a)(["\n        color: black;\n        background-color: red;\n    "])))}),(function(n){var e=n.mine,r=n.won;return e&&r&&Object(Z.c)(h||(h=Object($.a)(["\n        color: black;\n        background-color: green;\n    "])))})),en=r(1),rn=function(n){var e=n.id,r=n.mine,t=n.coordinates,i=n.revealed,o=n.markedAsMine,c=n.markedAsQuestion,u=n.surroundingMines,d=Object(C.b)(),a=Object(C.c)(V),s=Object(C.c)(K),l=function(n){"click"===n.type?(n.preventDefault(),d(q(e)),0===u&&d(U(t))):"contextmenu"===n.type&&(n.preventDefault(),!1===i&&d(T(e)))};return Object(S.useEffect)((function(){!0===i&&0===u&&d(U(t))}),[i]),Object(en.jsxs)(nn,{mine:r,revealed:i,lost:"lost"===a,won:"won"===a,difficultyLevel:s,surroundingMines:u,onClick:"lost"!==a&&"won"!==a?l:void 0,onContextMenu:"lost"!==a&&"won"!==a?l:void 0,children:[i&&!1===r&&(0===u?"":u),i&&r&&"\ud83d\udca3",!i&&o&&"gameIsOn"===a&&"\ud83d\udea9",!i&&c&&"gameIsOn"===a&&"\u2753"]})},tn=function(){var n=Object(C.c)(H),e=Object(C.c)(K);return Object(en.jsx)(_,{difficultyLevel:e,children:n.map((function(n){return Object(en.jsx)(rn,{id:n.id,mine:n.mine,coordinates:n.coordinates,surroundingMines:n.surroundingMines,revealed:n.revealed,markedAsMine:n.markedAsMine,markedAsQuestion:n.markedAsQuestion},n.id)}))})},on=Z.d.div(O||(O=Object($.a)(["\n    width: 100%;\n    color: white;\n    font-size: 20px;\n    padding: 10px;\n    margin-bottom: 12px;\n    border-radius: 10px 10px 0px 0px;\n    background-color: ",";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"])),(function(n){return n.theme.colors.mainDark})),cn=Z.d.button(v||(v=Object($.a)(["\n    border: none;\n    background-color: inherit;\n    padding: 0px;\n    font-size: 40px;\n"]))),un=Z.d.div(k||(k=Object($.a)(["\n    padding: 10px;\n    min-width: 100px;\n    text-align: center;\n    border-radius: 10px 10px 0px 0px;\n    background-color: ",";\n"])),(function(n){return n.theme.colors.topBarBackground})),dn=r(14),an=function(n){var e=Object(S.useState)(0),r=Object(dn.a)(e,2),t=r[0],i=r[1];return Object(S.useEffect)((function(){var e=setInterval((function(){"initial"===n&&i(0),"gameIsOn"===n&&i((function(n){return n+.1}))}),100);return function(){clearInterval(e)}}),[n]),t.toFixed(1)},sn=function(){var n=Object(C.c)(V);return Object(en.jsx)(en.Fragment,{children:Object(en.jsxs)("span",{children:["\u23f2\ufe0f: ",an(n)]})})},ln=function(){var n=Object(C.c)(K),e=Object(C.c)(V),r=Object(C.c)(W),t=Object(C.b)(),i=z.findIndex((function(e){return e.name===n})),o=z[i].minesQuantity-r;return Object(en.jsxs)(on,{children:[Object(en.jsxs)(un,{children:["\ud83d\udea9: ",o]}),Object(en.jsx)(cn,{onClick:function(){return t(J())},children:"won"===e?"\ud83d\ude0e":"lost"===e?"\ud83d\ude16":"\ud83d\ude00"}),Object(en.jsx)(un,{children:Object(en.jsx)(sn,{})})]})},fn=Z.d.div(w||(w=Object($.a)(["\n    margin: 100px auto;\n    width: 364px;\n    padding: 20px;\n    border-radius: 10px;\n    background-color: ",";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    ",";\n    ",";\n"])),(function(n){return n.theme.colors.mainLight}),(function(n){return"intermediate"===n.difficultyLevel&&Object(Z.c)(y||(y=Object($.a)(["\n        width: 560px;\n    "])))}),(function(n){return"expert"===n.difficultyLevel&&Object(Z.c)(M||(M=Object($.a)(["\n        width: 884px;\n    "])))})),mn=Z.d.div(L||(L=Object($.a)(["\n    width: 100%;\n    font-size: 20px;\n    padding: 10px;\n    margin-top: 12px;\n    border-radius: 0px 0px 10px 10px;\n    background-color: ",";\n    display: flex;\n    justify-content: space-between;\n"])),(function(n){return n.theme.colors.mainDark})),gn=Z.d.button(Q||(Q=Object($.a)(["\n    border: none;\n    color: white;\n    cursor: pointer;\n    background-color: ",";\n    border-radius: 5px;\n    padding: 6px;\n    font-size: 16px;\n\n    ",";\n"])),(function(n){return n.theme.colors.topBarBackground}),(function(n){return n.buttonDifficultyLevel===n.difficultyLevel&&Object(Z.c)(B||(B=Object($.a)(["\n        font-weight: bold;\n    "])))})),bn=function(){var n=Object(C.c)(K),e=Object(C.b)();return Object(en.jsxs)(mn,{children:[Object(en.jsx)(gn,{buttonDifficultyLevel:"beginner",difficultyLevel:n,onClick:function(){return e(R("beginner"))},children:"Beginner"}),Object(en.jsx)(gn,{buttonDifficultyLevel:"intermediate",difficultyLevel:n,onClick:function(){return e(R("intermediate"))},children:"Intermediate"}),Object(en.jsx)(gn,{buttonDifficultyLevel:"expert",difficultyLevel:n,onClick:function(){return e(R("expert"))},children:"Expert"})]})},jn=function(){var n=Object(C.c)(K);return Object(en.jsxs)(fn,{difficultyLevel:n,children:[Object(en.jsx)(ln,{}),Object(en.jsx)(tn,{}),Object(en.jsx)(bn,{})]})},pn=Object(Z.b)(A||(A=Object($.a)(["\n\n    html {\n        box-sizing: border-box;\n    }\n    \n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        margin: 0;\n        background-color: ",";\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n        sans-serif;\n        word-break: break-word;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n"])),(function(n){return n.theme.colors.mainDark})),xn={colors:{mainDark:"#1e2832",mainLight:"#cccccc",topBarBackground:"#2C3D4E",darkBorder:"#555555",semiDarkBorder:"#888888",lightBorder:"#eeeeee",surroundingMines:{one:"blue",two:"green",three:"red",four:"purple",five:"maroon",six:"turquoise",seven:"black",eight:"grey"}},breakPoints:{mobileMax:"767"}};var hn=function(){return Object(en.jsxs)(Z.a,{theme:xn,children:[Object(en.jsx)(jn,{}),Object(en.jsx)(pn,{})]})},On=function(n){n&&n instanceof Function&&r.e(3).then(r.bind(null,26)).then((function(e){var r=e.getCLS,t=e.getFID,i=e.getFCP,o=e.getLCP,c=e.getTTFB;r(n),t(n),i(n),o(n),c(n)}))};D.a.render(Object(en.jsx)(F.a.StrictMode,{children:Object(en.jsx)(C.a,{store:Y,children:Object(en.jsx)(hn,{})})}),document.getElementById("root")),On()}},[[25,1,2]]]);
//# sourceMappingURL=main.eff62cbe.chunk.js.map