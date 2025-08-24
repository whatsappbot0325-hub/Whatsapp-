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
        image:{url:"https://i.ibb.co/3mj6VT8g/Flux-Dev-A-vertical-split-poster-featuring-Naruto-Uzumaki-from-3.jpg"},
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
