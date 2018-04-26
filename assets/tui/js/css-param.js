var size = "", msize = "", progressressize = "";
var colora = "", colorb = "", colorc = "", colord = "", colore = "", colorf = "", colorg = "", colorh = "", colori = "", colorj = "", colork = "", colorl = "", colorm = "", colorn = "", coloro = "", colorp = "", colorq = "", colorr = "", colors = "", colort = "", coloru = "", colorv = "", colorw = "", colorx = "", colory = "", colorz = "";


var colorta = "", colortb = "", colortc = ""; colortd = ""; colorte = ""; colortf = "";
var sizefont =
{
    size:  ["22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44"],
    sizef: ["20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42"],
    sizeb: ["18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40"],
    sizee: ["28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50"],
    sizes: ["14", "14", "16", "16", "18", "19", "22", "24", "26", "26", "27", "29"],

    fonta: ["12", "12", "12", "12", "12", "14", "14", "14", "14", "15", "16", "16"],
    fontb: ["12", "13", "14", "16", "16", "16", "18", "18", "18", "19", "19", "22"]
}
var btns =
{
 btnpadtb: [ "0",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9", "10", "12"],
 btnpadlr: [ "5",  "6",  "7",  "8",  "9", "10", "11", "12", "13", "14", "15", "16"],
 btnimagr: [ "4",  "4",  "5",  "5",  "6",  "6",  "8",  "8",  "8",  "9",  "9", "10"],
 btndpad:  [ "5",  "5",  "6",  "6",  "7",  "7",  "8",  "9",  "10",  "11", "12", "12"]
}
var progressres = { progressresize: ["1", "2", "3", "4", "5", "10", "15", "20", "25", "30", "35", "40"] }


var colsys = [
{ "name": "white",       "color": "#FFFFFF", "deepcolor": "#eeeeee", "lightcolor": "#fbfbfb", "deeplightcolor": "#fbfbfb", "wcolor": "#444444", "lwcolor": "#444444", cn: "white" },
{ "name": "whitesmoke",  "color": "#fbfbfb", "deepcolor": "#eeeeee", "lightcolor": "#fbfbfb", "deeplightcolor": "#fbfbfb", "wcolor": "#444444", "lwcolor": "#444444", cn: "whitesmoke" },
{ "name": "seashell",    "color": "#f6f6f6", "deepcolor": "#e9e9e9", "lightcolor": "#f5f5f5", "deeplightcolor": "#fbfbfb", "wcolor": "#444444", "lwcolor": "#444444", cn: "seashell" },
{ "name": "ivory",       "color": "#eeeeee", "deepcolor": "#e1e1e1", "lightcolor": "#f3f3f3", "deeplightcolor": "#fafafa", "wcolor": "#444444", "lwcolor": "#444444", cn: "ivory" },
//{ "name": "platinum",    "color": "#e2e2e2", "deepcolor": "#d0d0d0", "lightcolor": "#eeeeee", "deeplightcolor": "#fbfbfb", "wcolor": "#777", "lwcolor": "#262626" },
{ "name": "gray",        "color": "#dddddd", "deepcolor": "#c6c6c6", "lightcolor": "#e9e9e9", "deeplightcolor": "#fbfbfb", "wcolor": "#444444", "lwcolor": "#444444", cn: "灰色"  },
//{ "name": "gray",        "color": "#d2d2d2", "deepcolor": "#b8b8b8", "lightcolor": "#dfdfdf", "deeplightcolor": "#fbfbfb", "wcolor": "#777", "lwcolor": "#262626" },
{ "name": "darkgray",    "color": "#c0c0c0", "deepcolor": "#9f9f9f", "lightcolor": "#dfdfdf", "deeplightcolor": "#fbfbfb", "wcolor": "#FFF", "lwcolor": "#262626", cn: "darkgray" },
{ "name": "yahei",       "color": "#393d49", "deepcolor": "#303648", "lightcolor": "#5c5c5d", "deeplightcolor": "#fbfbfb", "wcolor": "#FFF", "lwcolor": "#393d49", cn: "雅黑" },
{ "name": "inverse",     "color": "#262626", "deepcolor": "#000000", "lightcolor": "#393939", "deeplightcolor": "#fbfbfb", "wcolor": "#FFF", "lwcolor": "#262626", cn: "黑" },

//{ "name": "info",        "color": "#57b5e3", "deepcolor": "#3dabe1", "lightcolor": "#78c3e8", "deeplightcolor": "#f9fcff", "wcolor": "#FFF", "lwcolor": "#57b5e3" },
{ "name": "azure",       "color": "#2dc3e8", "deepcolor": "#09b9e4", "lightcolor": "#57cfec", "deeplightcolor": "#eefafe", "wcolor": "#FFF", "lwcolor": "#2dc3e8" ,cn:"青色"},
//{ "name": "sky",         "color": "#28b3d3", "deepcolor": "#11a9cc", "lightcolor": "#53c2db", "deeplightcolor": "#ecf8fb", "wcolor": "#FFF", "lwcolor": "#11a9cc" },
{ "name": "blue",        "color": "#1e9fff", "deepcolor": "#0d97fe", "lightcolor": "#3facfe", "deeplightcolor": "#f2f9ff", "wcolor": "#FFF", "lwcolor": "#5db2ff" ,cn:"蓝色"},
//{ "name": "dblue",       "color": "#5595f7", "deepcolor": "#448af6", "lightcolor": "#649ef7", "deeplightcolor": "#f2f9ff", "wcolor": "#FFF", "lwcolor": "#5db2ff" },
{ "name": "primary",     "color": "#427fed", "deepcolor": "#4374e0", "lightcolor": "#6798f0", "deeplightcolor": "#f0f4fd", "wcolor": "#FFF", "lwcolor": "#4374e0" ,cn:"主蓝色"},
//{ "name": "blueberry",   "color": "#6f85bf", "deepcolor": "#657ebe", "lightcolor": "#8b9dcb", "deeplightcolor": "#f4f5fa", "wcolor": "#FFF", "lwcolor": "#6f85bf" },
//{ "name": "palegreen",   "color": "#a0d468", "deepcolor": "#8fcf4b", "lightcolor": "#b3dc86", "deeplightcolor": "#f8fcf3", "wcolor": "#FFF", "lwcolor": "#a0d468" },
//{ "name": "green",       "color": "#8cc474", "deepcolor": "#6bbf47", "lightcolor": "#a3cf8f", "deeplightcolor": "#f6fbf4", "wcolor": "#FFF", "lwcolor": "#8cc474" },
{ "name": "success",     "color": "#3aa621", "deepcolor": "#299a0e", "lightcolor": "#4bb732", "deeplightcolor": "#f1f8f0", "wcolor": "#FFF", "lwcolor": "#53a93f" ,cn:"绿色"},
//{ "name": "lightyellow", "color": "#f6d52e", "deepcolor": "#f4cd08", "lightcolor": "#f7dd57", "deeplightcolor": "#fffcee", "wcolor": "#FFF", "lwcolor": "#f6d52e" },
//{ "name": "yellow",      "color": "#ffce55", "deepcolor": "#fdc334", "lightcolor": "#ffd777", "deeplightcolor": "#fffbf1", "wcolor": "#FFF", "lwcolor": "#ffce55" },
{ "name": "warning",     "color": "#f4b400", "deepcolor": "#f4a600", "lightcolor": "#f6c333", "deeplightcolor": "#fff9eb", "wcolor": "#FFF", "lwcolor": "#f4b400" ,cn:"黄色"},
//{ "name": "gold",        "color": "#f9b256", "deepcolor": "#f9a539", "lightcolor": "#fac177", "deeplightcolor": "#fff9f2", "wcolor": "#FFF", "lwcolor": "#f9b256" },
//{ "name": "lightred",    "color": "#e46f61", "deepcolor": "#e15949", "lightcolor": "#e98b80", "deeplightcolor": "#fdf4f2", "wcolor": "#FFF", "lwcolor": "#e46f61" },
{ "name": "orange",      "color": "#ff5722", "deepcolor": "#eb3d15", "lightcolor": "#f07154", "deeplightcolor": "#fef1ee", "wcolor": "#FFF", "lwcolor": "#ed4e2a" ,cn:"橙色"},
//{ "name": "red",         "color": "#df5138", "deepcolor": "#de4024", "lightcolor": "#e5735f", "deeplightcolor": "#fdf1ef", "wcolor": "#FFF", "lwcolor": "#df5138" },
{ "name": "danger",      "color": "#d73d32", "deepcolor": "#d42417", "lightcolor": "#df635b", "deeplightcolor": "#fcf0ef", "wcolor": "#FFF", "lwcolor": "#d73d32" ,cn:"红色"},
//{ "name": "pink",        "color": "#e75b8d", "deepcolor": "#e6407b", "lightcolor": "#eb7ba3", "deeplightcolor": "#fdf2f6", "wcolor": "#FFF", "lwcolor": "#e75b8d" },
//{ "name": "darkpink",    "color": "#cc324b", "deepcolor": "#cb1d39", "lightcolor": "#d65b6f", "deeplightcolor": "#fbeff1", "wcolor": "#FFF", "lwcolor": "#cc324b" },
//{ "name": "magenta",     "color": "#bc5679", "deepcolor": "#b93e68", "lightcolor": "#c97793", "deeplightcolor": "#faf2f4", "wcolor": "#FFF", "lwcolor": "#bc5679" },
//{ "name": "maroon",      "color": "#a81449", "deepcolor": "#981b48", "lightcolor": "#b9436d", "deeplightcolor": "#f7edf0", "wcolor": "#FFF", "lwcolor": "#981b48" },
{ "name": "purple",      "color": "#a821d2", "deepcolor": "#9e09cc", "lightcolor": "#b94ddb", "deeplightcolor": "#f8edfc", "wcolor": "#FFF", "lwcolor": "#a821d2" ,cn:"紫色"}
];
