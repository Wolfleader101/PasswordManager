// Stop scammers
console.log("%cDo not paste any code here!!!", "font-size:40px; font-weight: bold; color: red;");
console.log("%cThis is a feature intended for developers.", "font-size:25px; font-weight: bold; color: orange;")
console.log("%c If someone told you to paste something in here they are 1000% scamming you!!", "font-size:25px; font-weight: bold; color: aqua;");
console.log("%c>> Ignore everything below <<", "font-size:16px; font-weight: bold;");

/*
TODO:
*add settings
*add customization in password
*saves password
*google chrome plugin then firefox
*custom colours
*/



const Characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890`~!@#$%^&*()_+{}|\;:,<.>/?".split(''); //characters that are used for passcode
const StringLength = Characters.length - 1;

function GenRandom() {
    return Characters[Math.floor((Math.random() * StringLength) + 1)];
}

function GeneratePassword() {
    let length = document.getElementById("quantity").value;
    let Pswd = "";

    for (i = 0; i < length; i++)
    {     
        Pswd += GenRandom();
    }

    let PswdHtml = document.createElement("tr");
    let PswdString = document.createTextNode(Pswd);
    let Lbreak = document.createElement("br");

    //console.log(Pswd);
    document.getElementById("PswdTbl").appendChild(PswdHtml).appendChild(PswdString);
    document.getElementById("PswdTbl").appendChild(Lbreak);
}

