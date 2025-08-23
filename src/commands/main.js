const os = require('os')
const {runtime} = require("../utils/functions")
module.exports = [
    {
        name:"alive",
        description:"alive command",
        react:"👾",
        ownerOnly: false,
        groupOnly: false,
        adminOnly: false,
        botAdmin: false,
        async execute(conn,mek,args,context){
            const {from,pushname,reply,quoted} = context;
            try{
                let desc =`
HEY ${pushname} I am alive now
uptime:${runtime(process.uptime())}
`  
await conn.sendMessage(from,
    {
        image:{url:"https://github.com/whatsappbot0325-hub/myImage/blob/main/Flux_Dev_A_vertical_split_poster_featuring_Naruto_Uzumaki_from_3.jpg"},
        caption: desc
    },{
        quoted:mek 
    }
)              

            }catch(e){
                console.log(e)
            }
        }
    },
    {
        name:"ping",
        description:"alive command",
        react:"✨️",
        ownerOnly: false,
        groupOnly: false,
        adminOnly: false,
        botAdmin: false,
        async execute(conn,mek,args,context){
            const {from,pushname,reply,quoted} = context;
            try{
                let start = Date.now();
                await conn.sendMessage(from,{text:"pinging.."})
                let end = Date.now();
                let pingtime = end-start;
                reply(`pong📍\n${pingtime}ms...`)

            }catch(e){
                console.log(e)
            }
        }
    }
]
