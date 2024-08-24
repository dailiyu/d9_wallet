import {httpRequest} from ".";



//销毁代币增加投票 接口2？？？
export function postAddVotingInterest(queryInfo: {
  amount_to_burn:number//销毁的数量
}) {
  return httpRequest.post({
    url: '/votings/add/voting/interest/',
    data: queryInfo
  })
}


//修改节点名称
export function postChangeCandidateName(queryInfo: {
  name:string
}) {
  return httpRequest.post({
    url: '/votings/change/candidate/name/',
    data: queryInfo
  })
}

//修改节点分红比例
export function postChangeCandidateSupportShare(queryInfo: {
  percent:string
}) {
  return httpRequest.post({
    url: '/votings/change/candidate/support/share/',
    data: queryInfo
  })
}

//???获取当前的会议届数？？？xxx
export function postCurrentSessionIndex() {
  return httpRequest.post({
    url: '/votings/current/session/index/',
  
  })
}
/*
{
    "results": 195
}
*/

//投票
export function postDelegateVotes(queryInfo: {
  candidate:string,//候选人地址？？
  amount:number//投票数量
}) {
  return httpRequest.post({
    url: '/votings/delegate/votes/',
    data: queryInfo
  })
}
//取消投票
export function postCancelVotes(queryInfo: {
  node_id:string,//候选人地址
  votes:number//撤销投票数量
}) {
  return httpRequest.post({
    url: '/votings/try/remove/votes/from/candidate/',
    data: queryInfo
  })
}

//获取某个节点的票数
export function postNodeAccumulativeVotes(queryInfo: {
  node_id:string,
}) {
  return httpRequest.post({
    url: 'votings/get/node/accumulative/votes/',
    data: queryInfo
  })
}
/*
{
    "results": 23000049
}
*/


//获取某个节点的元属性
export function postGetNodeMetadata(queryInfo: {
  node_id:string,
}) {
  return httpRequest.post({
    url: '/votings/get/node/metadata/',
    data: queryInfo
  })
}
/*
{
    "results": {
        "name": "xq13491",
        "sharing_percent": 40,//分红比例
        "index_of_last_percent_change": 3//??
    }
}
*/

//???获取候选人数量？
export function postGetNumberCandidates() {
  return httpRequest.post({
    url: '/votings/get/number/candidates/',
  })
}
/*
{
    "results": 129
}
*/
//获取节点排名
export function postGetRank() {
  return httpRequest.post({
    url: '/votings/get/rank/',
  })
}
/*
{
    "results": [
        {
            "node_id": "DnxyajwdiSuuBVysRSvF1Yk61ApmXQccw9KbvKVkkt6LzhVEo",
            "node_name": "Fmabcde",
            "sharing_percent": 40,
            "accumulative_votes": 24869431,
            "created_at": "2024-08-05T11:03:52.327660Z",
            "updated_at": "2024-08-20T02:24:11.310075Z"
        }
}
*/



//获取节点列表？？好像没有按照票数排序xxx
export function postGetSessionNodeList(queryInfo: {
  session_index:number
}) {
  return httpRequest.post({
    url: '/votings/get/session/node/list/',
    data: queryInfo
  })
}
/*
{
    "results": [
        "zX3ATUJrRHkMUwgRZM88b8SEctCAMUhfYkHqV5zL1ZEqVfZ",
        "vzZWAktsU264ZgCfGgJDaZabRepFaEFYbK8ArdhX5EcUJcM",
        "yPAF1CkUCHbFuE7avfncdKfTw7AGuGxdQGAusfb3HJVHaut",
        "wTSMJJZ9PKMiQw355kajHGwC8VcdN5YN4JpHcdahH131drr",
        "woqXXATBKfEvJdDf2NYcPKEhEqW1tdeNhgKngSTQiRxvTzh",
        "uvCP65JEo7BTtsRqrc7Lpuk6FDV2zSAJF3zAqZNhwYsMV4n",
        "xQFMWQVMQ2FkgXyVwA6n8ZRCCVmjAB2hg29Fak5UqhjcM8E",
        "wVA1RTik2Z16VPatDXbuy9dkALJhXwY5VDXVj2vNia924W8",
        "zLHdgrpSULuju11qSnnTWWG2GjCYZSW8TwJjvcmgUHZK8sU",
        "xyajwdiSuuBVysRSvF1Yk61ApmXQccw9KbvKVkkt6LzhVEo",
        "yvg2xcLfZZzRdUq2dTgrabUNKbwhXWriLkcC8RQR1f2RzJS",
        "yMcK9EEFaCF7DJbyBBwDCve5ksRatxmaSnywfC6X1zwk5qu",
        "yqx2NfApw51usQQQU8NArWg4P6uCYYWWgFgSG2dzBQkbp64",
        "vXyvZwhJeNYkt28yKuYeozGQ6E7DtPgfuJbhJh2jwzz6h6f",
        "v3UoQxLUZPEU3qrUzRtdsrzmkvbzj7y1myjU3vXq9DGn2xC",
        "viwP2zGkj9FVJy4SLtep2jWHJFvhTVNdN4LLdAi1YZMyDPp",
        "uvETXr9XQJxUheR1cQZiTxLGLpL47H2yoGTC6hrXKF24ufo",
        "v13n2yeidohw7TFL8f9KojG1CcTuGMnbyFxuaFacvZNYQ7U",
        "vikugbaoi6BHr7Ceca6mDz3ePmgmmKY4yzUegRQhoUfk7o2",
        "wMkMNPB2D98xcH4jKYaE4d6Y43Ah7sBLDbUyUumoSCnYGoD",
        "veMZzSvwEC9sjNgfCUi1HmHcvS5kr9aKeZuncPFDiDnq2y3",
        "x2kQgLrZnUAP1kSRCFnuRmvJcfCVd5vpmV5XyYfQbgKDkSB",
        "vobz55veN6ejufwW8NMJtAXNvh88GMBQa1LWHX8sQpAd3Dq",
        "yGPvpsu63quJFzW7NwH6d5TNqTHraBQPNtL2UTqVtBvgsdK",
        "wVGjMLZcKZoWDUcwgBV8kCSNmoN47nYvKB3enRF1X4qoF6B",
        "yUjdRTuykfAVRhsKmnXJYk47n94jMP14rzZYv3dMWfioCay",
        "zJ4Yi2HBGw9nvpWLbBbQqTft8QwDFYnnbchdHUb79NtQD4y",
        "vmTem6iLPDX53SCe2ZNhg6exPRqo8Suc18SWMobWHazJ1LU",
        "u6hP1wWhWAx6JxLvrnoCsRFzwevVDhxMJiogpdacDetwpBS",
        "zLBH3StNdszVZqWpNfQewgzDcYXaiDpNKXKZGzi7YTcpAro",
        "uuDmhL35okwuhFY3Qwg2t7BnYMaTi1wpHQDNsrYu7zsEDb3",
        "yyr3KucVS6sfb5tztWpU2u8EUHtzS5hvur5VKPDJPhjoVjE",
        "uq5uD8RLqmwwfiGEMzJRwQek21kjzXddWfGCmmbrwkpMYXc",
        "uayfrpEY7Hq8pyMkWZ9dny1LV8eTPFf9KgrUYTG9TM1HTtH",
        "x5u4me5tdxWm3E6R5EN9dBbGoDufNp8B8xHXpqBFYu3zzyc",
        "wPwnUpF4PFUJTxLPZNmZLgB4H1XeX1PgScKTyY4J59c4GA5",
        "zXgK1g6JvtyJijtH1o3UJPMVJewSPseTNpgkXTJ2pxkYhja",
        "vQAbn3wT7tiqbZ9cJLNCcmjVqbtJGegBPA4euRE8hjiNsrG",
        "uCRHHLChe7bq48pCvfgtfSJK2RpovZY6w6n2cu4Yg9gp563",
        "wW21YwJag1M32v1VoBjDMjkT7tmDmfzavrDC5a3QUfTt2QE",
        "x7sYcofNVUSv2T6CVE3qLUsqcVQNPsmbMZo8JjfaHTcsZqr",
        "uBSDT8yfraQmXsRRzdUh4RR7SVxAa48phwJppDADpwvsXof",
        "vdcYNG8Zh9TuwVBgonWKjZf6akEWAWTsDR3qxEewbRcRrae",
        "uNbdndwLVodfT7LmxfcEKCkqSMLHaEDN7RiYGAFtVdaVqUB",
        "wrUdKWhhYbfsA6kyZgqcbPwaJQAq96rDtrR5dtZpDsE4DJd",
        "vwqfTiHzPCmn6VEpfrpdC2apj3xUBS2smgjpsqjxfhFXFXf",
        "vEVTAuJSWMdfys4KKRnFYcpcgRtH2cRQu85wafK3BYaa3cN",
        "vdyNghTfZuHQtLizNfuXE9FT8CVS8DtTMHuXH3xFNUXAEwN",
        "xCzk1EdnLKfZtjxABxsHk3kpTsVKRvc13nHgkrgwgLtMrR5",
        "xN3ERnCrVVkQAV1gcZUBTULu5PHr1TFPBqoKENWiQ4t7Ax9",
        "v1aH7V3MNY5ZXQb4haZNLen39kzFWTazCH3FeEsYb5DddMf",
        "uin6UmqFcU5ZvpmubZCbj9iYdRW4vwvWD6rWQ4JTmYycAYe",
        "y52aMbM2RF8WJtA8iSixyz1xzNMBDwKE3uNDgfi7X2ptbUm",
        "v48b4g4yoZcF3qx5TVXpCQq3xPKjEkbgz9iTVJpMpQ7mLxF",
        "zfEyzv5Rij3HVCeDkyzTGWeEVon7FWaZWjLU5SMkB1QLgZ4",
        "wg7B6kD13PcKoCLXn8N1MGGy1v5AQRNs7GW5V75DpvTPzqQ",
        "wXy7xCBfi1wzE2FeMnfG7mB9z2T4ddCSj9EutnM5LnPjv1P",
        "y2mmEhemDkmkBH2bo3HTJgYLF8pLWagqNvZdr3eUm4nNbJD",
        "uR47o6BUaTHGvH9WLrXVWe82gGYsdzANrxq86vCajwgJzyq",
        "u5ymcoeHrMTaZQ7e1WVyNaXkEc3nTucvJ9uHwNqKLNfxZLf",
        "xzPKe3EfjJTvh1L9mBMAmukPKj7GS1sSU7nuJs8beQeGxKq",
        "zbtSqvu2UNBorT46LVbxUiwbpEMNr6CTsvQ4uMYSMnuFftg",
        "w9DBb2kdYEhGpFHBwqHYkM1V1AeqoMbqgxXnYboTZp3TQgG",
        "vzA31GEworJ3XTg1rSoF79mUkibigkNNDLecbr6ambQftcj",
        "wAewyxDqfEt2VRfTfjp5LVDtZiVDEz1YUEJD46hiq3u2Jvb",
        "v6g4aatzMcvLtcB3zAd84QGZapBFHbqkgyaMUwZnkWUcAUK",
        "x5UyzMovz3dvavTt3Pe7q1BZgEFLGJBnK2A4pNYcKb8hRfy",
        "x5YA8G2PFPfbiAB5zGkSzJ8HmssDPUAAupoXgzXk5A7vAgZ",
        "uYU1nP5PdX6aCdpyFRVDb9Fh6NJHs91q4SYgxQcztWqFHTz",
        "xoXzoygJbcd1pkM4safUDG3sTCbgy6x98sKksbLPxfeTC2e",
        "waWb7CPTcJfwyqkwamMTGcEzBoqAnCB7vnbzZbBfkge51pr",
        "xfvB6d5ai9XnFhQ6YG9si4ir9M4NVRqipdMDQ3XtHcwrHTj",
        "vwwoC8eWdJzg3BS5Zbgt9ujmgq4WY3GBXAMCVzahuqAFJUu",
        "x69ZV2ge67X6CuZyyu4qxGoj3LXgLQMJZiCZ4YG9qqKMtuv",
        "vx6Q78EMCfKfCtsVkmjWABExFd6Q5aTevDDYkyh3oxAH4HX",
        "ugDz46S9gtoxgEa6wt837PdacAAk2WinoKWBUSrMudcAQSv",
        "ycJg4PKhMpsu1bZr9w4TngnMbPMHFDud8VGQPRP1VyBGJyG",
        "xmLC1xTVZkek6w39YEZxxuRdc8oxy2CMrDZuvr9oyzeMGB3",
        "vz7nxmbnfGrixo4GzPujjycKFFw9gJkiNgXrLwYv8pbuk7V",
        "zPeHHaBYDNnzjKWL9rtsZgA1bEoJNk5JiBCcmrmZdGUXgwc",
        "vWMVp3nNWeWEn5iLdUFDrzaufb5vMeS4qzKetnCiyHL6xoF",
        "xN3m3xDsTSQJqN8tC7LycRqMgtq7BWduwcLSJNP1pxz3ibm",
        "yAqrK6ezfcP5BnxmVLAfbGfT3miMfyWkjwf1668y17gFqoC",
        "xUtMNx73a6ybSyrDtndVebcih7LxPUzhXmaX7xU13w1tkQU",
        "v6CyPpkqXyKrxbc4EDzC99VhQUGXDJ9J22vT52WTz7ACQuc",
        "xwB3za3vyEE1ZUSF8WzEunnxyw21YgLBVCeQQiGc7rTmRvW",
        "z8GrTssPX9BKRuEuNhrbwPLfpxoNfv3QNd8YXNNnmSp922B",
        "vGhx3ax1p57cN8GNwbXqQfAn9a1ynRy1MeGpfWFLh8sztcH",
        "xzSTeUfNZ6N23eExS9ABfv9SeNeWFU7T7mD8q3URfCpTWm4",
        "vKLuFsoib2uYBD9BdxhfsUQ3v54Lw5qVkH5TzwELahd9RiE",
        "xa7jbn86Vy7hozJ2kH4JHzh9DxxkVBuBzm3qcM3cfct6Aua",
        "xXsWYXeaQxtnLigUxu2PiANkefoX9iVfTwoUyGMXY9Z1Gt5",
        "v6cApjbmWx8sLNb5GkpXGrvodU7oJcWPjiUvk4Wu4onDFoF",
        "yqJ2fjzcdD6hBhw6BU8D7bsMVNb7YpJFhjPCjrz9evjm3as",
        "wW9v4JMrurQMccjekiNwhPYRjZtbQK4NLJdKdGkrwhAnCrB",
        "wYKLEy575RMDz2VLVAgDk5VkmJcaF2XX9qRLv4jiMmhrTCg",
        "zFs2pY7eVeRwNY9bX2vEoVvQGak2FKLr2ZKgKeSsyPaSRnB",
        "zLA4ffjVRDLpPhBFMt95n5Xy7DthYR49zUXCCG9UoEK4aAx",
        "wgE6ss92FWF9FsMAnJ5znuLF2AAdDsb4YEqrm9gvwcYhWaS",
        "vaiCF63KrAAUNP9MAmDMCC7JotivLTx812bwbokVVYeyfz6",
        "ugEu8JP3rnocN9du9XRyf7k9kLozfVN4TKtJLAgdEPwiFn8",
        "wDjfo5HqBRbpqYBGsz3H2oBMfhcC1qQ22FbF9DDPK1moHp3",
        "vBn6VstnwCoaZVMfwUnQXbxKNv9qiNbDtrDYw2nZ9UAPT5s",
        "v3v7mbcQmAxbqWTh3njem2rRqjj4nyyKPGTeDzDz4DBECE2",
        "vpLEH2by69k9HrGdWPTwLx2VJdLk1guCUZq7EPAVXwDjVEG",
        "wMCvts396ChWzQ1oVtfW6uw4rHFeAgeeiXLPrXqug7uxgKw",
        "y82XzN2dn48i2mwfpy8rkHKHCUYrpKTgsdq2kcibiPn7n8g",
        "vs3QyqmRpPotzEbW3qdpuJjU9NKF7t9ZaE5ggdKpQbha9Vw",
        "zJ8X5q4QrGd6BVPeuRqoLxWZupVqfZ6tJ5NSckVNvAgF8qu",
        "w5kNvEUodZ9y1ej1GJTLyne7rTP2DU8qibX4Vn28q2cqD3Y",
        "yqrf8ESjqGsMhKSzcn935uc49ASCF211yfdfgdn3RCvdZqD",
        "uK7WqDkddEq6jCbGfhjN1PGFrgzRXvnJ379uAJMJou17C6m",
        "zWkfWwjmKtDLxgefyEe1LoHDYqQAzbJeQ4zwG9DMwK4Mo3g",
        "zHsdfzkHX93naD2XzSfTzydS7TVS3Fn5mCbUm2hnNqHHKBr",
        "zcScPzAuyazn15967gggxqTxVQGaRTXb6fVsN2b9VjMvABE",
        "ykxFX6aryjNBG3389NRYwTqReTkCCQbtLfP4878L5SqNmQ7",
        "ve5zfqQvnss8i9S3Xe17bYhSgfki7BJPtNgPN8pskzWR79S",
        "yVV3JQMr4JDS5B6Nuv9nsxBjdoQ7NDN6Jg1gXnWBe2pE8H4",
        "wE9sxKiH9beDAjDctEy7enBSohmiqrp1Z1VzyQdDNcxTqdi",
        "zFEZPUsPykHhUr2to929q36euF92u9qJeTqqx8eR7cE3S9W",
        "yUhdRLqyimfcQkGJE7RpdCbiHKyE4TPf4JYRedAVT26Qqfc",
        "yquNv5Dvi8zz8qdrPfk39SVFS4BtaGqDYKaBFkPd7MR1DU3",
        "uL1sjUPgjpc9dTosSNhsDoDsfcg5iiy9uDvCowZwimdmHUb",
        "xGRC7K2ZH1xPnLzYw3mTDuWRGFmhuA2WQow58p1NXYsVpEH",
        "wwoTp8eiJ2RvLoMuBkmi7XK5ELVTzq4faFdVwiW6e2b2xhX",
        "upZ96QJU9gWSAdhayEWsdqqD1KdUpBcLCiDCJJix8ZTnBBh",
        "x3dTNhhoL4YWHH5CgKW1hszfW7tWpE8sfasHscEA5BEushq",
        "zUd2h8qQEnDq6rdU8zz47iceZHhxrQ2jsr4gaRAKUoSu9En",
        "uiuJTGLkSLm7ZXn9URkEMBpMdjTBLeebF2GXhk8Go2VmWZW"
    ]
}
*/


//获取某个节点被哪些人投了多少票
export function postNodeUserVoteTotals(queryInfo: {
  node_id:string,
}) {
  return httpRequest.post({
    url: '/votings/node/user/vote/totals/',
    data: queryInfo
  })
}
/*
{
    "results": [
        {
            "account_id": "DnzCc4q41gSHuoiAGUfJgSEnUAgffnPssbUebd4qGzKaZ7geq",
            "vote": 300000
        },
        {
            "account_id": "Dnw1CMmAG7CYa2D46KMETrPhm7VZqphVDcJPvNRwJ8MB49izD",
            "vote": 1
        },
        {
            "account_id": "DnuGoJrrkUkHb9dH5KKCG9UG63Cm6hRb6M2HxkwWqBZZmsFiA",
            "vote": 1
        },
        {
            "account_id": "DnudaV7xafM3Y4F2JpygoR6bZH3NHeHMQnGaAGem6gFTeqq5r",
            "vote": 600
        },
        {
            "account_id": "Dnw5mqRkgHkySMPVLHmp3sj3PVCWfWQVRquFp5x9bfwqciftL",
            "vote": 10153681
        },
        {
            "account_id": "DnyD5VAMdoQxbvtFjz3Nnd8UVcEFVqFb9wdbtxdMvuRTu7Dhx",
            "vote": 9
        },
        {
            "account_id": "Dnu8qxwmfQjPby8CogQ8b496ybWVRLBWYhysHi3M698HVFBdi",
            "vote": 10
        },
        {
            "account_id": "Dnw32vwtFLuAwQMKLiQ7hR4PjDcAVJzPP5BrbYs86YWNtnYE4",
            "vote": 5
        },
        {
            "account_id": "DnxD9rLbKFbVJgxE9EkX2PGEcAfjjYUM6D3WFVTzw3VgunhAM",
            "vote": 300000
        },
        {
            "account_id": "DnwK44cpNP6jZ1NGWmiGWNFNzBGEy6QQK7BnorXK429kKG45J",
            "vote": 999991
        },
        {
            "account_id": "DnwaNodJv1kQaNRiQBexnjAnP8D39VSemFLxenTUVrTF4NKpo",
            "vote": 7
        },
        {
            "account_id": "DnyhZd4ev3WxXtLEsTTJN3a3za7rjKttMX23nurixiUdBMGu9",
            "vote": 300000
        },
        {
            "account_id": "DnvbGfHue8ih7wjkRci3PcqNmjgkWx7BuBcNTHtrfrpSmbSoE",
            "vote": 300000
        },
        {
            "account_id": "Dnwr9Btk4NAtfFcPbXxa3pBxytbPA8nHSWWqN9STCtbutPEeR",
            "vote": 300000
        },
        {
            "account_id": "Dnxp16SpiC59BHY4ppAoZeGRwR4x74DqRt2wKD8yHiTNaQB8z",
            "vote": 4
        },
        {
            "account_id": "DnzATmUkQWWaHSN3CBqcfkUcPVHbA9aPSr3Js4pNEj7ZFacXX",
            "vote": 300000
        },
        {
            "account_id": "DnvNTkUD2gvCgBuk6VqavdCtfGZn7GcRJw4Wh6Ri5mv1oKkBr",
            "vote": 300000
        },
        {
            "account_id": "DnyCu1EPjUWY7xvq6vufJU9qnxPk5qYfdK4kvfLezqFjqjArU",
            "vote": 7541720
        },
        {
            "account_id": "Dnv5eHGcTEbMtkJurgFm2Jj6JkbecpRaYy1Gfe2yp5V7ozPrK",
            "vote": 10
        },
        {
            "account_id": "Dnx5bpZP3cKBT7chgzPMFngWGmkFZhfWonDotoQ4prdxGqNFV",
            "vote": 300000
        },
        {
            "account_id": "Dnwx7YvR5dGJTxuWbUFWK4bZefTsCM9Ycw7kiWJH4ardKjKbd",
            "vote": 1304000
        },
        {
            "account_id": "Dnyo9bWzfTVZcnrVQ7Lo2TVf5NDjQG3YQLTc6GXKKjGL3hmPg",
            "vote": 10
        },
        {
            "account_id": "DnzqaYUQp3c1LyZoCkTKVyALZY3jHFymF1RhgNjjmqmFvC1zp",
            "vote": 300000
        },
        {
            "account_id": "DnxJ8Ybsvk341pwfUJo1gTTqX5kxQiJW9NJ6Lo3NYPtvdjhwn",
            "vote": 300000
        }
    ]
}
*/

//???xxx
export function postValidatorStats(queryInfo: {
  validator_id:string,
}) {
  return httpRequest.post({
    url: '/votings/validator/stats/',
    data: queryInfo
  })
}
/*
{
    "results": {
        "account_id": "xQFMWQVMQ2FkgXyVwA6n8ZRCCVmjAB2hg29Fak5UqhjcM8E",
        "total_votes": 22418505,
        "self_votes": 22418505,
        "delegated_votes": 0
    }
}
*/



//获取节点待领取奖励数量
export function postGetNodeRewardsData(queryInfo: {
    node_id:string//当前账号id
  }) {
    return httpRequest.post({
      url: '/node/reward/get/node/rewards/data/',
      data: queryInfo
    })
  }
/*
{
    "results": null//
}
*/

//???
export function postRewardGetVoteLimit() {
    return httpRequest.post({
      url: '/node/reward/get/vote/limit/',
    
    })
  }
  /*
  {
    "results": 680000
}
  */

//领取奖励？？
export function postWithdrawReward(queryInfo: {
    node_id:string//？？？
  }) {
    return httpRequest.post({
      url: '/node/reward/withdraw/reward/',
      data: queryInfo
    })
  }



  //http://d9-test-server.q6z4kzhr.uk/api/votings/users/voting/interests/
//获取总票数和可投票数
  export function postvoteNumber() {
    return httpRequest.post({
      url: '/votings/users/voting/interests/',
    })
  }
  /*
  {
    "results": {
        "total": 2978,
        "delegated": 112
    }
}
  */

  











