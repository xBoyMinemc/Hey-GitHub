const dns = require("dns");
const https = require("https");

// const list = require("./list.js");
const list = require("./ip.js");
// dns.lookup("github.com", 4, function (err, address) {
//     if (err) return;

//     // setTimeout(()=>reject('tiem out'),3000)
//     console.log(address)
//     // server.on("message", function (data, rinfo) {
//     //     if (rinfo.address === address && rinfo.port === port) {
//     //         console.log(rinfo)
//     //         // if(rinfo.address)
//     //         const motdpe = String(data).slice(35).split(';');
//     //         // console.log(motdpe);
//     //         resolve(motdpe);
//     //         // reject();
//     //         // server.close();
//     //         // return motdpe;
//     //     }
//     // })

// });

// https.get("https://www.baidu.com/favicon.ico",(res)=>{
//     console.log(res.statusCode,res.rawHeaders)
// })
// https.get("https://140.82.114.4/favicon.ico",(res)=>{
//     console.log(
//         res.statusCode
//         // ,res.rawHeaders
//         )
// })
const githubTest = (ip,host) => {

    // const req = https.request({
    //     host: ip,
    //     method: 'GET',
    //     path: '/favicon.ico',
    //     headers: {
    //         'Host': 'github.com'
    //     }
    // }, (res) => {
    //     process.stdout.write(String(res.statusCode)+" ip==>"+ip+"\n")

    //     res.setEncoding('utf8');
    //     // res.pipe(process.stdout);
    // });

    // req.end();
    const req = https.get({
        host: ip,
        // method: 'GET',
        path: '/favicon.ico',
        headers: {
            'Host': host
        }
    }, (res) => {
        // process.stdout.write(String(res.statusCode)+" "+ip+" ==> "+host+" #"+list[host][ip]+"\n")
        let info = list[host][ip];
        while(ip.length<15)ip+=" "
        process.stdout.write(ip+" "+host+" #"+info+"\n")
        
        res.setEncoding('utf8');
        
    }).on('error', (e) => {
        // console.error(e);
      });

    req.end();
    
}
// githubTest("140.82.112.4")
Object.keys(list).forEach(host=>Object.keys(list[host]).forEach(ip=>githubTest(ip,host)))



// dns.resolve('www.nodejs.red', (err, records) => {
//     console.log(records);
// });
