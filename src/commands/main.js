const os = require('os')
const {runtime} = require("../untils/functions");
const { uptime } = require('process');
const { text } = require('stream/consumers');
module.export =[
{
    name:"alive",
    description:"alive command",
    react:"👾",
    owneronly:false,
    grouponly:false,
    adminonly:false,
    botadmin:false,
    async execute(conn,mek,args,contex){
        const{from,pushname,reply,quoted} = context;
        try{
            let desc = `
HEY ${pushname} IM ALIVE NOW♻
uptime:${runtime(process.uptime())}
`
await conn.sendmessage(FormDataEvent,
    {
        image:{url:""},
        captin: desc
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
    name:"ping ",
    description:"ping command",
    react:"🤖",
    owneronly:false,
    grouponly:false,
    adminonly:false,
    botadmin:false,
    async execute(conn,mek,args,contex){
        const{from,pushname,reply,quoted} = context;
        try{
        let start = date.now();
        await conn.sendMessage(from,{text:"pinging...."})
        let end = date.now();
        let pingtime = end-start;
        reply(`pong✈\n${pingtime}ms...`)   

        }catch(e){
            console.log(e)
        }
    }
}
]
